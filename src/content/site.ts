export type NavItem = {
  href: string;
  label: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type RoadmapItem = {
  timeframe: string;
  title: string;
  summary: string;
  milestones: string[];
};

export type ProjectCardData = {
  title: string;
  status: string;
  href: string;
  image: string;
  alt: string;
  summary: string;
  tags: string[];
};

export const siteConfig = {
  name: "Akhil Meda",
  title: "Computer Engineering Student at Georgia Tech",
  shortTitle: "Computer Engineering Student",
  school: "Georgia Tech",
  location: "Atlanta, Georgia",
  email: "akhilvmeda@gmail.com",
  linkedin: "https://www.linkedin.com/in/akhil-meda-14283027b/",
  github: "https://github.com/akhilvmeda-commits",
  resumePath: "/resume/Akhil-Meda-Resume.pdf",
  siteUrl: "https://e-portfolio-1100.vercel.app",
  description:
    "Recruiter-facing ePortfolio highlighting my work in cybersecurity, embedded systems, digital design, and secure hardware workflows as a Georgia Tech Computer Engineering student.",
};

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/career-goals", label: "Career Goals" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export const homeHighlights = [
  {
    label: "Focus Areas",
    value: "Secure hardware, embedded systems, verification, and AI-assisted engineering",
  },
  {
    label: "Current Momentum",
    value: "I am building digital design fluency through Silicon Jackets, FPGA work, and hands-on debugging",
  },
  {
    label: "Professional Lens",
    value: "I approach engineering through systems thinking shaped by cybersecurity operations, cloud networking, and hardware reliability",
  },
];

export const metricCards = [
  {
    stat: "3",
    label: "Technical organizations and project communities",
  },
  {
    stat: "2",
    label: "Internship experiences spanning cyber and networking",
  },
  {
    stat: "3",
    label: "Security certifications in progress and completed",
  },
];

export const quickFacts = [
  "Incoming Network Engineer Intern at Qualcomm for Summer 2026",
  "Network and Cybersecurity Intern at Alpha Team Solutions",
  "Silicon Jackets member focused on digital design and verification onboarding",
  "GTXR Rocket Club contributor working on embedded bring-up and PCB driver validation",
];

export const aboutParagraphs = [
  "I am a Computer Engineering student at Georgia Tech building my portfolio at the intersection of cybersecurity, digital design, and dependable hardware systems. I started from a security-first mindset by learning how systems fail, how networks are observed, and how reliable engineering depends on clear interfaces, disciplined debugging, and strong operational habits. That foundation now shapes the way I approach hardware and embedded work. I do not see software, networks, and digital logic as separate domains; I see them as connected layers in a larger system that has to stay observable, secure, and resilient under real constraints.",
  "Through internships, technical clubs, and independent engineering work, I have developed a hands-on approach that blends curiosity with execution. At Alpha Team Solutions, I have worked on cloud networking and cybersecurity tasks such as configuring secure Google Cloud Platform environments, improving traffic visibility, and supporting API and webhook-based workflows with logging and operational safeguards. In student organizations, I have been pushing further into low-level engineering through FPGA-oriented design exercises, parameterized RTL, waveform-driven debug, and embedded hardware bring-up. Those experiences keep confirming the same pattern for me: I am most engaged when I can turn abstract requirements into systems that can be tested, validated, and improved through evidence.",
  "I am especially interested in embedded systems, hardware verification, digital design, and secure system architecture because those areas demand both precision and judgment. Writing synthesizable SystemVerilog, building testbench-driven validation, and debugging simulation mismatches require the same disciplined thinking that also matters in networking and security work. That crossover is a big part of what motivates me. I want to become an engineer who understands not only how to build hardware-adjacent systems, but also how to secure them, observe them, and reason about failure modes early in the design lifecycle.",
  "Leadership and mentorship are also part of how I want to grow professionally. Whether I am helping teammates ramp up on tooling, explaining technical tradeoffs, or supporting collaborative problem-solving in student organizations, I care about making complex work more accessible without watering it down. Long term, I want to grow into roles where I can lead technically credible teams, contribute to secure hardware and systems programs, and operate in high-accountability environments such as defense, infrastructure, or aerospace. This ePortfolio reflects that direction: practical systems work today, deeper verification and embedded experience during college, and eventually leadership in secure hardware engineering.",
];

export const aboutBullets = [
  "I bring a security-minded systems perspective with growing depth in hardware and verification workflows",
  "I am comfortable moving between cloud and networking tasks and lower-level engineering problems",
  "I am especially interested in secure digital systems, embedded interfaces, observability, and technical leadership",
  "I am building credibility through clubs, internships, certifications, and deliberate practice",
];

export const resumeSkills: SkillGroup[] = [
  {
    title: "Languages and RTL",
    items: ["SystemVerilog", "C", "C++", "Python", "Java", "RISC-V Assembly", "x86 Assembly"],
  },
  {
    title: "Hardware and Verification",
    items: [
      "FPGA and digital design",
      "Parameterized RTL",
      "Combinational and sequential logic",
      "Directed and randomized testbenches",
      "Waveform debugging",
      "Cadence Xcelium and SimVision",
    ],
  },
  {
    title: "Security and Networking",
    items: [
      "Networking fundamentals",
      "Cybersecurity operations",
      "GCP and cloud security",
      "Wireshark",
      "Incident response",
      "Forensics and reverse engineering fundamentals",
    ],
  },
  {
    title: "Developer Workflow",
    items: ["Docker", "Git", "Linux interfaces", "REST APIs", "Logging and telemetry", "VMware"],
  },
];

export const resumeHighlights = [
  "B.S. in Computer Engineering at Georgia Institute of Technology, expected Fall 2027",
  "TS Interim Clearance",
  "CompTIA A+ and Security+ completed, with Network+ in progress",
];

export const careerGoalsIntro = [
  "My short-term goal is to keep accumulating technically rigorous experience in hardware-adjacent roles where I can deepen my fluency in verification, embedded interfaces, digital design, and cybersecurity. I want internships and project work that force me to become faster at reading specifications, debugging under ambiguity, and validating systems with stronger evidence. That means pursuing roles where simulation, firmware, networking, and security concepts all matter in the same workflow rather than being isolated from one another.",
  "Long term, I want to lead work on secure hardware and dependable systems, especially in industries where correctness, resilience, and mission accountability matter. Aerospace, defense, and security-focused engineering all appeal to me because they combine high technical standards with real operational consequences. To be effective in that environment, I need more depth in RTL design, verification strategy, embedded integration, and system-level architecture, along with the communication skills required to guide teams and mentor newer engineers.",
];

export const roadmapItems: RoadmapItem[] = [
  {
    timeframe: "2026",
    title: "Strengthen technical depth through internships and club execution",
    summary:
      "Use internships and Georgia Tech project communities to turn classroom knowledge into repeatable engineering habits.",
    milestones: [
      "Complete the Qualcomm internship with stronger networking and systems exposure",
      "Keep building digital design and verification competence through Silicon Jackets",
      "Document technical work clearly so each project becomes recruiter-ready portfolio material",
    ],
  },
  {
    timeframe: "2026 to 2027",
    title: "Expand embedded and verification credibility",
    summary:
      "Move from onboarding-level exposure to more independent ownership of design, debug, and validation tasks.",
    milestones: [
      "Take additional hardware, embedded, and systems courses aligned to secure computing",
      "Contribute to more complex RTL or firmware projects with clearer module ownership",
      "Practice creating reusable testbenches, assertions, and structured debug workflows",
    ],
  },
  {
    timeframe: "Before graduation",
    title: "Graduate with a portfolio that shows range and direction",
    summary:
      "Demonstrate a coherent story: a security-minded engineer who can work across low-level software, hardware workflows, and system reliability.",
    milestones: [
      "Publish polished case studies for embedded, verification, and cybersecurity projects",
      "Pursue leadership roles that involve mentoring and technical coordination",
      "Target internships or co-ops that align with secure systems, infrastructure, or aerospace programs",
    ],
  },
  {
    timeframe: "Early career",
    title: "Grow into secure hardware and systems leadership",
    summary:
      "Develop into an engineer who can lead technically credible teams building dependable, security-conscious systems.",
    milestones: [
      "Work in roles where hardware, networking, and security intersect",
      "Own increasingly complex validation and architecture decisions",
      "Build toward leadership in secure hardware, aerospace systems, or mission-critical engineering",
    ],
  },
];

export const featuredProject = {
  title: "Silicon Jackets Onboarding: Digital Design and Verification",
  image: "/images/projects/silicon-jackets.svg",
  alt: "Graphic of an adder waveform and verification dashboard.",
  tools: ["SystemVerilog", "Cadence Xcelium", "SimVision", "Parameterized RTL", "Self-checking testbenches"],
  overview: [
    "This project was my focused onboarding into digital design and verification through Silicon Jackets, and my goal was to build real comfort with RTL workflows instead of only learning the concepts at a surface level. The core assignment centered on designing and validating a parameterized adder in SystemVerilog, which made it a strong entry point for practicing clean combinational logic, configurable bit widths, and a disciplined simulation process. Even though the circuit itself was intentionally approachable, the real value came from the workflow around it: understanding module interfaces, thinking through corner cases, and using evidence from the testbench and waveform output to determine whether the implementation behaved correctly.",
    "The design portion emphasized writing synthesizable RTL that stayed readable and scalable. Instead of treating the adder as a single hard-coded exercise, I used the parameterized structure to think about reuse and configurability from the start. That meant paying attention to signal widths, carry behavior, and how design choices would scale when the module ran under multiple configurations. In parallel, the verification side introduced the habits that make low-level work credible: creating test scenarios, checking expected behavior systematically, and using simulation results to identify mismatches instead of guessing at causes.",
  ],
  workflow: [
    "My workflow started by understanding the design intent, then translating that intent into a clean SystemVerilog module with parameterized width support. From there, I built a validation loop around Cadence Xcelium and SimVision: run simulations, inspect failing cases, compare expected and observed outputs, refine the RTL or testbench, and repeat. That loop was valuable because it made debugging concrete. A mismatch in a waveform is not just an error message; it is a chance to isolate exactly which inputs, carries, or timing assumptions are causing the issue.",
    "I also treated the onboarding process as a chance to improve how I think about verification itself. Even for a relatively contained module, it became clear that strong validation requires more than a few happy-path tests. Boundary values, carry propagation behavior, and width-dependent edge cases matter because they reveal where assumptions break down. Building and refining a self-checking testbench reinforced for me that verification should support iteration, not just confirm what I already expect to be true.",
  ],
  challenges: [
    "One challenge in onboarding work like this is balancing simplicity with rigor. Because an adder is conceptually straightforward, it is easy to move too quickly and assume correctness. The more useful lesson for me was slowing down and treating the project like a real engineering artifact: verifying that parameter choices are respected, checking corner conditions, and making sure the validation setup is strong enough to catch mistakes that are easy to miss in a quick visual review.",
    "Another challenge was becoming more fluent with the tooling. Cadence Xcelium and waveform-based debug require familiarity not only with the language, but also with how simulation evidence is surfaced and interpreted. Learning to navigate waveforms, isolate mismatches, and use the testbench as a guide made the project much more valuable than a code-only exercise. It gave me confidence in a workflow I can apply to future modules that are more complex than an adder.",
  ],
  results: [
    "The immediate outcome was a functioning parameterized RTL module backed by testbench-based validation and a stronger working knowledge of simulation-driven debug. More importantly, the project established a foundation for my future digital design work. It gave me a concrete process for moving from design intent to implementation, from implementation to verification, and from verification to iterative refinement.",
    "In the context of my broader development, this project marks technical growth rather than a final destination. It shows that I am building the habits required for more advanced hardware work: structured debugging, respect for edge cases, attention to reusable design, and a willingness to learn the tooling deeply enough to trust the results. That foundation is directly relevant to the secure hardware, verification, and embedded engineering roles I want to pursue over time.",
  ],
};

export const projectCards: ProjectCardData[] = [
  {
    title: "FPGA for Trading Systems",
    status: "In Progress",
    href: "/projects",
    image: "/images/hero-blueprint.svg",
    alt: "Engineering systems diagram for FPGA data path work.",
    summary:
      "Team project focused on FPGA-oriented trade logging and booking with streaming interfaces, flow control, and reusable verification habits.",
    tags: ["SystemVerilog", "FPGA", "Streaming interfaces"],
  },
  {
    title: "GTXR Rocket Club: PCB Driver Bring-Up",
    status: "In Progress",
    href: "/projects",
    image: "/images/projects/embedded-bringup.svg",
    alt: "Embedded board bring-up graphic with interfaces and diagnostics.",
    summary:
      "Embedded systems work around low-level C drivers, hardware-software integration, and reliable peripheral bring-up for custom boards.",
    tags: ["Embedded systems", "C", "UART/SPI/I2C"],
  },
  {
    title: "Network and Security Automation",
    status: "Selected Work",
    href: "/projects",
    image: "/images/projects/cyber-defense.svg",
    alt: "Cloud and network security systems graphic.",
    summary:
      "Cloud networking and cybersecurity work involving secure GCP design, traffic visibility, REST integrations, and operational telemetry.",
    tags: ["Cybersecurity", "GCP", "Networking"],
  },
];

export const contactCards = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/akhil-meda-14283027b",
    href: siteConfig.linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/akhilvmeda-commits",
    href: siteConfig.github,
  },
];

export const footerBlurb =
  "I built this portfolio to show how I am growing across secure systems, digital design, embedded workflows, and hands-on technical project work.";

// Replace placeholder SVGs in /public/images with personal photos, screenshots,
// waveform captures, or lab images as new projects are completed.
