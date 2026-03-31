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

export type CourseCardData = {
  code: string;
  title: string;
  status: string;
  summary: string;
  takeaways: string[];
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
    "Recruiter-facing ePortfolio highlighting my work in cybersecurity, embedded systems, digital design, and physical design as a Georgia Tech Computer Engineering student.",
};

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/coursework", label: "Courses" },
  { href: "/resume", label: "Resume" },
  { href: "/career-goals", label: "Career Goals" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export const homeHighlights = [
  {
    label: "Focus Areas",
    value: "Secure hardware, embedded systems, physical design, and AI-assisted engineering",
  },
  {
    label: "Current Momentum",
    value: "I am building hardware depth through Silicon Jackets, ECE 2020, ECE 2035, and hands-on debugging",
  },
  {
    label: "Professional Lens",
    value: "I approach engineering through systems thinking shaped by cybersecurity, low-level programming, and hardware reliability",
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
  "Silicon Jackets member working through digital and physical design onboarding",
  "GTXR Rocket Club contributor working on embedded bring-up and PCB driver validation",
];

export const aboutParagraphs = [
  "I am a Computer Engineering student at Georgia Tech, and most of the work I am drawn to sits somewhere between hardware, security, and low-level systems. I started out leaning more toward cybersecurity, but the more I worked through networking, digital design, and embedded projects, the more I realized I like being close to the actual system. I like figuring out why something breaks, what the constraints really are, and how to make the next version cleaner and more reliable.",
  "A lot of that growth has come from doing the work in different settings. At Alpha Team Solutions, I have worked on cloud networking and cybersecurity tasks like setting up secure Google Cloud Platform environments, improving traffic visibility, and supporting API and webhook workflows with better logging. In Silicon Jackets and GTXR Rocket Club, I have been getting deeper into hardware-adjacent work through RTL, physical design, waveform debug, and board bring-up. That mix has been good for me because it keeps pushing me to connect software, hardware, and operations instead of treating them like separate lanes.",
  "Coursework has also helped sharpen what I actually enjoy. ECE 2020 made digital logic feel real, not just theoretical, and ECE 2035 has been pushing me further into C and RISC-V assembly. I like the feeling of working closer to the machine, where small decisions actually matter. That is a big reason I am interested in embedded systems, digital design, physical design, and secure system architecture.",
  "Outside of engineering, I am pretty competitive with racket sports, so I am always up for tennis, pickleball, or really anything in that category. I also play guitar, which is a good reset from technical work. I think both of those carry over into how I work: I like repetition, steady improvement, and getting better by actually putting the reps in. Long term, I want to grow into secure hardware and systems roles where I can keep building technical depth and eventually lead strong engineering work.",
];

export const aboutBullets = [
  "Security-minded with growing depth in digital design, physical design, and embedded workflows",
  "Comfortable moving between cloud and networking tasks and lower-level engineering problems",
  "Interested in secure digital systems, low-level programming, observability, and technical leadership",
  "Outside class and work, I play tennis, pickleball, other racket sports, and guitar",
];

export const courseworkIntro =
  "These are the classes that are shaping the direction I am moving in most. I pay the most attention to courses that build hardware intuition, lower-level programming skill, and a better feel for how systems work under the hood.";

export const coursework: CourseCardData[] = [
  {
    code: "ECE 2020",
    title: "Digital Design Systems",
    status: "Completed",
    summary:
      "This course gave me a much stronger foundation in digital logic and helped me think in terms of combinational and sequential systems instead of only software behavior.",
    takeaways: [
      "Built intuition for logic design, timing, and structured hardware thinking",
      "Made later SystemVerilog and verification work feel much more concrete",
      "Strengthened my interest in hardware workflows beyond the classroom",
    ],
  },
  {
    code: "ECE 2035",
    title: "Programming for Hardware/Software Systems",
    status: "In Progress",
    summary:
      "I am taking this class now, and it has been especially useful because it pushes me deeper into C, memory-level thinking, and RISC-V assembly.",
    takeaways: [
      "Getting more comfortable with lower-level programming and machine-oriented problem solving",
      "Building better intuition for how software maps onto hardware behavior",
      "Reinforcing why I like embedded systems and hardware-adjacent work",
    ],
  },
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
  title: "Silicon Jackets Onboarding: Physical Design",
  image: "/images/projects/pd2026-extracted/page22_1_Image1.jpg",
  alt: "Physical design screenshot showing SRAM routing and DRC investigation work.",
  tools: ["Physical Design", "Cadence Innovus", "Static Timing Analysis", "Tcl", "Python"],
  gallery: [
    {
      src: "/images/projects/pd2026-extracted/page3_1_Image1.jpg",
      alt: "Floorplan screenshot from the Silicon Jackets physical design onboarding project.",
      caption: "Early floorplanning work helped me see how chip layout decisions start before detailed routing ever happens.",
    },
    {
      src: "/images/projects/pd2026-extracted/page22_1_Image1.jpg",
      alt: "Physical design screenshot showing DRC markers around SRAM regions.",
      caption: "One of the most useful parts of the project was tracing DRC issues back to SRAM pin placement and routing choices.",
    },
    {
      src: "/images/projects/pd2026-extracted/page26_1_Image1.jpg",
      alt: "Physical design screenshot showing a cleaner routed layout after fixes.",
      caption: "After changing routing assumptions and adding keep-out margins, I was able to move the design toward a clean result.",
    },
  ],
  overview: [
    "This project was my Discovery Project and part of the Silicon Jackets physical design onboarding process. Instead of stopping at RTL, I worked through how a design moves closer to an actual chip by looking at floorplanning, routing, timing, and design rule issues. That made it a really useful project for me because it showed the physical side of hardware work that I had not spent much time with before.",
    "The assignment covered OpenLane flow steps, timing analysis, Tcl scripting, and a longer physical design debugging process around a 32-bit adder and SRAM macros. What I liked most was that it was not just about following a checklist. I had to read reports, interpret layout behavior, make changes, and understand why those changes mattered.",
  ],
  workflow: [
    "I started by following the OpenLane notebook to get a clearer feel for the physical design flow, especially floorplanning, PDN generation, and GDS streamout. From there, I moved into the Silicon Jackets onboarding tasks that focused more on timing, debugging the flow, and using Tcl and Python in a way that felt closer to real team workflows.",
    "The part that stuck with me most was the DRC investigation around SRAM placement. I had to inspect reports, zoom in on the layout, look at the LEF data, and figure out why the routing was conflicting with the macro. That led me to make targeted fixes like changing the bottom routing layer and adding keep-out margins around the SRAM blocks.",
  ],
  challenges: [
    "The hardest part was getting comfortable with how many layers of context physical design needs. I was not just reading code anymore. I had to think about timing reports, routing layers, macro constraints, and what the tool was actually doing in the layout.",
    "I also had to get more comfortable being patient with debugging. Some of the answers were not obvious from the first error message, so I had to trace problems step by step, use the documentation, and learn enough of the tooling to understand what I was looking at instead of guessing.",
  ],
  results: [
    "By the end of the project, I had a much better feel for what physical design engineers actually spend time doing. I was not just learning terms like floorplan, timing closure, or DRC cleanup. I was using them in context and seeing how design decisions show up in the layout.",
    "This project also gave me stronger evidence that I want to keep going deeper into hardware. It connected well with what I learned in ECE 2020 and what I am building now through lower-level programming in ECE 2035. More than anything, it made the path from digital design to real chip implementation feel a lot more real.",
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
  "I built this portfolio to show how I am growing across secure systems, digital design, physical design, and hands-on technical project work.";

// Replace placeholder SVGs in /public/images with personal photos, screenshots,
// waveform captures, or lab images as new projects are completed.
