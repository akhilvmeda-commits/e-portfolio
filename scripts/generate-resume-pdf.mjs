import fs from "node:fs";
import path from "node:path";

const outputPath = path.join(process.cwd(), "public", "resume", "Akhil-Meda-Resume.pdf");

const pages = [
  [
    "Akhil Meda",
    "Computer Engineering Student | Georgia Tech",
    "Email: akhilvmeda@gmail.com",
    "LinkedIn: linkedin.com/in/akhil-meda-14283027b",
    "GitHub: github.com/akhilvmeda-commits",
    "",
    "Education",
    "Georgia Institute of Technology | B.S. Computer Engineering | Expected Fall 2027",
    "",
    "Experience",
    "Qualcomm | Incoming Network Engineer Intern | Summer 2026",
    "Alpha Team Solutions | Network and Cybersecurity Intern | Jan 2025 - Present",
    "- Designed a secure GCP VPC with private subnets, routing, and firewall rules.",
    "- Enabled and analyzed VPC Flow Logs for traffic visibility and troubleshooting.",
    "- Owned REST API and webhook integrations with validation and operational safeguards.",
    "- Instrumented requests with telemetry and audit logs; used Wireshark for debugging.",
    "",
    "Skills",
    "SystemVerilog, C, C++, Python, Java, JavaScript, SQL",
    "FPGA and digital design, testbenches, waveform debug, Cadence Xcelium/SimVision",
    "Networking, cybersecurity, GCP, Docker, Wireshark, VMware, Git",
  ],
  [
    "Projects",
    "FPGA for Trading Systems (Trading Club)",
    "- Led a team building an FPGA-oriented trade logging and booking datapath.",
    "- Designed synthesizable SystemVerilog modules for streaming ingestion and control.",
    "- Developing self-checking verification for ordering and burst behavior.",
    "",
    "Silicon Jackets: Parameterized Adder + Design Verification",
    "- Built a parameterized adder RTL block in synthesizable SystemVerilog.",
    "- Created reusable self-checking DV in Cadence Xcelium with waveform-driven debug.",
    "- Added functional checks for carry behavior, overflow, and boundary values.",
    "",
    "GTXR Rocket Club: Custom PCB Driver Bring-Up",
    "- Verified low-level C drivers for custom PCB interfaces and register maps.",
    "- Implemented peripheral bring-up routines and handled recoverable failure modes.",
    "- Validated integration through bench testing and firmware diagnostics.",
    "",
    "Certifications",
    "CompTIA A+ | Security+ | Network+ (In Progress)",
  ],
];

function escapePdfText(text) {
  return text.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function buildStream(lines) {
  const header = "BT\n/F1 12 Tf\n50 760 Td\n16 TL\n";
  const body = lines
    .map((line, index) => {
      const prefix = index === 0 ? "" : "T*\n";
      return `${prefix}(${escapePdfText(line)}) Tj\n`;
    })
    .join("");
  return `${header}${body}ET`;
}

function makeObject(id, body) {
  return `${id} 0 obj\n${body}\nendobj\n`;
}

function createPdf() {
  const objects = [];
  const pageIds = pages.map((_, index) => 4 + index * 2);
  const contentIds = pages.map((_, index) => 5 + index * 2);

  objects.push(makeObject(1, "<< /Type /Catalog /Pages 2 0 R >>"));
  objects.push(
    makeObject(
      2,
      `<< /Type /Pages /Kids [${pageIds.map((id) => `${id} 0 R`).join(" ")}] /Count ${pageIds.length} >>`,
    ),
  );
  objects.push(makeObject(3, "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>"));

  pages.forEach((lines, index) => {
    const pageId = pageIds[index];
    const contentId = contentIds[index];
    objects.push(
      makeObject(
        pageId,
        `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 3 0 R >> >> /Contents ${contentId} 0 R >>`,
      ),
    );

    const stream = buildStream(lines);
    objects.push(
      makeObject(
        contentId,
        `<< /Length ${Buffer.byteLength(stream, "utf8")} >>\nstream\n${stream}\nendstream`,
      ),
    );
  });

  let pdf = "%PDF-1.4\n";
  const offsets = [0];

  for (const object of objects) {
    offsets.push(Buffer.byteLength(pdf, "utf8"));
    pdf += object;
  }

  const xrefOffset = Buffer.byteLength(pdf, "utf8");
  pdf += `xref\n0 ${objects.length + 1}\n`;
  pdf += "0000000000 65535 f \n";

  for (let index = 1; index < offsets.length; index += 1) {
    pdf += `${String(offsets[index]).padStart(10, "0")} 00000 n \n`;
  }

  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, pdf, "binary");
}

createPdf();
