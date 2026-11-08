// All portfolio content for Nitish S.

export const me = {
  name: "Nitish S",
  handle: "sargonitish",
  email: "nitiships14@gmail.com",
  phone: "6369393673",
  location: "Chennai, India",
  call: "mailto:nitiships14@gmail.com",
  resume: "/nitish-resume.pdf",
  socials: [
    { label: "GitHub", href: "https://github.com/Sargonitish" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/nitish-ping-perfect" },
    { label: "Portfolio", href: "http://nitishportfolio.xo.je/" },
  ],
};

export const stats = [
  { value: 5, suffix: "+", label: "Student portfolios delivered", note: "Custom-designed academic & career showcases" },
  { value: 20, suffix: "%", label: "Placement rate boost", note: "Higher internship conversion for student clients" },
  { value: 10, suffix: "+", label: "Hackathons & symposia", note: "Award-winning projects & competitive participation" },
];

export type Service = { n: string; title: string; words: [string, string]; icon: string; body: string; tags: string[] };

export const services: Service[] = [
  { n: "01", title: "Portfolio website development", words: ["PORTFOLIO", "WEBSITES"], icon: "web",
    body: "Custom portfolio websites for students & professionals. Clean responsive design, interactive galleries, and project showcases that stand out to recruiters.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "UI/UX"] },
  { n: "02", title: "Frontend web applications", words: ["FRONTEND", "WEB APPS"], icon: "apps",
    body: "Interactive web applications built with modern frontend standards, clean component organization, and cross-browser compatibility.",
    tags: ["JavaScript", "HTML5", "CSS3", "Git", "VS Code"] },
  { n: "03", title: "AI-driven solutions & EdTech", words: ["AI &", "INNOVATION"], icon: "ai",
    body: "Award-winning AI ideas and practical prototypes. Tailored educational tools, personalized learning support, and practical machine learning applications.",
    tags: ["AI/ML", "Python", "Personalized Learning", "EdTech", "Research"] },
  { n: "04", title: "Software engineering", words: ["SOFTWARE", "SOLUTIONS"], icon: "software",
    body: "Practical software design and algorithm implementation in Python, Java, and C++. Clean code structure and efficient problem-solving.",
    tags: ["Python", "Java", "C++", "C", "Algorithms"] },
  { n: "05", title: "Database & data modeling", words: ["DATABASE", "& DATA"], icon: "auto",
    body: "Relational and document database design, efficient SQL query creation, and structured data handling for web applications.",
    tags: ["MySQL", "MongoDB", "Data Design", "CRUD"] },
  { n: "06", title: "Cloud computing & systems", words: ["CLOUD &", "SYSTEMS"], icon: "cloud",
    body: "Cloud computing concepts and infrastructure explored through NPTEL certification, combined with hands-on IoT and robotics integration.",
    tags: ["Cloud Computing", "NPTEL", "IoT", "Embedded Systems"] },
  { n: "07", title: "Profile & brand strategy", words: ["PROFILE", "STRATEGY"], icon: "logo",
    body: "Assisting students in organizing and presenting their professional credentials, achievements, and academic projects effectively.",
    tags: ["Career Branding", "Resume Sync", "Portfolio Consulting"] },
  { n: "08", title: "Testing & performance", words: ["TESTING", "& QUALITY"], icon: "mobile",
    body: "Thorough testing for cross-browser compatibility, fast page loading, responsive usability on all screens, and verified contact workflows.",
    tags: ["Cross-Browser", "Responsive QA", "Performance", "Usability"] },
];

export type Project = {
  name: string;
  logo: string;
  cat: string;
  group: "Websites" | "Web apps" | "AI" | "Open source" | "Software";
  desc: string;
  stack: string[];
  live?: string;
  code?: string;
  shot: string;
  tint: string;
};

export const projects: Project[] = [
  { name: "Student Portfolios", logo: "/logos/freelance.svg", cat: "Portfolio Development", group: "Websites", tint: "#ffd2b8",
    desc: "Designed and developed 5+ custom, responsive portfolio websites for students to showcase academic projects and skills, boosting internship placement rates by 20%.",
    stack: ["HTML5", "CSS3", "JavaScript", "Responsive UI"], live: "http://nitishportfolio.xo.je/", shot: "/shots/banya-t.webp" },
  { name: "AI for Quality Education", logo: "/logos/vit-logo.png", cat: "AI in EdTech", group: "AI", tint: "#f9e2e1",
    desc: "2nd Prize winning AI-based solution at VIT Chennai Quality Week 2026. Designed personalized learning support and analyzed student engagement challenges.",
    stack: ["AI/ML", "Personalized Learning", "Research", "Presentation"], shot: "/shots/flashfetch-t.webp" },
  { name: "Robotics & IoT Systems", logo: "/logos/stjoseph.svg", cat: "IoT & Embedded", group: "Software", tint: "#ece3d8",
    desc: "Hardware-software integration projects developed during St. Joseph's Institute of Technology internship, featuring sensors and embedded systems.",
    stack: ["Embedded Systems", "IoT", "C/C++", "Sensors"], shot: "/shots/kivo-t.webp" },
  { name: "Server Surfers CTF & Security", logo: "/logos/acm_logo.png", cat: "Cybersecurity & Web", group: "Software", tint: "#e7e0f7",
    desc: "CTF challenges and web application penetration exercises with VIT Chennai ACM Student Chapter and Kaspersky Interaction Protection Simulation.",
    stack: ["Cybersecurity", "Network Simulation", "Web Protocols"], shot: "/shots/vector-t.webp" },
  { name: "Tehnisys Web Application", logo: "/logos/sairam.svg", cat: "Web Application", group: "Web apps", tint: "#ffc9b0",
    desc: "Interactive web application developed for Sai Ram Engineering College technical event, featuring modular components and responsive user interfaces.",
    stack: ["JavaScript", "HTML5", "CSS3", "Web Dev"], shot: "/shots/ossconnect-t.webp" },
  { name: "Ultimate Line Tracer", logo: "/logos/ceg.svg", cat: "Robotics & Hardware", group: "Software", tint: "#ffd2b8",
    desc: "Autonomous line tracer robot developed and tested for Kurukshetra’26 at College of Engineering Guindy, optimizing tracking algorithms.",
    stack: ["C++", "Robotics", "Control Algorithms", "Sensors"], shot: "/shots/relay-t.webp" },
];

export const filters = ["All", "Websites", "Web apps", "AI", "Software"] as const;

export type Role = { title: string; org: string; when: string; where: string; body: string; logo: string };
export type RoleGroup = { id: string; label: string; roles: Role[] };

export const experience: RoleGroup[] = [
  {
    id: "work", label: "Freelance development",
    roles: [
      { title: "Freelance Portfolio Website Developer", org: "Freelance Web Development", when: "Jul 2026 — Present", where: "Chennai, India", logo: "freelance.svg",
        body: "Designed and developed customized portfolio websites for students to showcase academic projects, skills, and achievements. Integrated contact forms, project galleries, and social media links. Tested for performance, usability, and cross-browser compatibility. Successfully delivered 5+ websites, boosting student internship placement rates by 20%." },
    ],
  },
  {
    id: "awards", label: "Awards & competitions",
    roles: [
      { title: "Idea-thon: AI for Quality Education (2nd Prize)", org: "VIT Chennai", when: "Mar 2026", where: "VIT Chennai", logo: "vit-logo.png",
        body: "Won 2nd Prize in the Idea-thon recognized by IQAC and School of Electrical Engineering during Quality Week 2026. Developed an AI-based solution to improve educational accessibility and student engagement with personalized learning features." },
      { title: "Kurukshetra’26 Participant (OSPC, Poster & Line Tracer)", org: "College of Engineering Guindy", when: "2026", where: "CEG Chennai", logo: "ceg.svg",
        body: "Competed in the Open Source Programming Contest (OSPC), Ultimate Line Tracer robotics competition, and technical poster making event at Anna University CEG." },
      { title: "ZORPHIX Techno-Management Symposium", org: "Chennai Institute of Technology", when: "2026", where: "CIT Chennai", logo: "cit.svg",
        body: "Participated in techno-management challenges, exploring emerging software workflows and collaborative technology problem-solving." },
      { title: "Futuristic Expo 2K26 & Ideathon", org: "Tagore Engineering College", when: "2026", where: "Tagore Engg College", logo: "tagore.svg",
        body: "Presented innovative technology ideas and participated in technical exhibition events and campus ideathons." },
    ],
  },
  {
    id: "intern", label: "Internships",
    roles: [
      { title: "Robotics and IoT Intern", org: "St. Joseph’s Institute of Technology", when: "2025", where: "Chennai", logo: "stjoseph.svg",
        body: "Hands-on internship covering robotics hardware, sensor integration, microcontroller programming, and IoT communication protocols." },
      { title: "Future Frontiers: The Science of Tomorrow Intern", org: "St. Joseph’s Institute of Technology", when: "2025", where: "Chennai", logo: "stjoseph.svg",
        body: "Engaged in applied engineering methodologies, scientific exploration of emerging technologies, and collaborative technical sessions." },
    ],
  },
  {
    id: "events", label: "Symposia & CTF",
    roles: [
      { title: "Server Surfers CTF & Kaspersky KIPS Simulation", org: "VIT Chennai ACM Student Chapter", when: "2026", where: "VIT Chennai", logo: "acm_logo.png",
        body: "Participated in cybersecurity Capture the Flag challenges and the Kaspersky Interactive Protection Simulation (KIPS) with the ACM Student Chapter." },
      { title: "Tehnisys Web Application Event", org: "Sri Sairam Engineering College", when: "2026", where: "Chennai", logo: "sairam.svg",
        body: "Participated in web application technical events, building responsive frontend interfaces and demonstrating software functionality." },
    ],
  },
];

export const education = [
  { school: "Tagore Engineering College", deg: "Bachelor of Engineering in Computer Science and Engineering", when: "2025 — 2029", logo: "tagore.svg" },
  { school: "Prince Matriculation Higher Secondary School", deg: "Higher Secondary Certificate", when: "Completed 2025", logo: "prince.svg" },
];

export const certs = [
  { title: "Foundations of Electronics", org: "IIT Madras (Centre for Outreach & Digital Education)", when: "2023", logo: "iit-madras-logo.png", tone: "w" },
  { title: "Basics of Electronics & Embedded Systems", org: "IIT Madras (Centre for Outreach & Digital Education)", when: "2026", logo: "iit-madras-logo.png", tone: "w" },
  { title: "Cloud Computing Certification", org: "NPTEL", when: "2026", logo: "nptel_logo.png", tone: "w" },
  { title: "2nd Prize, Idea-thon: AI for Quality Education", org: "VIT Chennai (Quality Week 2026)", when: "Mar 2026", logo: "vit-logo.png", tone: "o" },
  { title: "MePro Level 6 English Proficiency Program", org: "Pearson", when: "2026", logo: "pearson.svg", tone: "w" },
  { title: "Robotics and IoT Internship Certification", org: "St. Joseph’s Institute of Technology", when: "2025", logo: "stjoseph.svg", tone: "o" },
];

export const skills = [
  "Python", "Java", "C++", "C", "JavaScript", "HTML5", "CSS3",
  "Git", "GitHub", "Visual Studio Code", "MySQL", "MongoDB", "Cloud Computing",
  "Responsive Web Design", "Problem Solving", "Communication", "Teamwork", "Time Management", "Adaptability",
];

export const process = [
  { n: "01", title: "Discovery", body: "We discuss your goals, academic projects, target audience, and preferred design style over a quick chat or email." },
  { n: "02", title: "Structure", body: "I outline the layout, pages, and interactive features — from project showcases to contact integration." },
  { n: "03", title: "Build", body: "I develop the website with clean, responsive code and share live previews so you can review and suggest tweaks." },
  { n: "04", title: "Launch", body: "I test cross-browser compatibility and mobile responsiveness, deploy the site, and ensure it's ready to share with recruiters." },
];

export const faq = [
  { q: "What can I collaborate with or hire you for?", a: "Custom portfolio websites, responsive frontend web development, practical software in Python, Java, or C++, and AI-driven educational solutions. If you need a clean, working solution, I'm ready to build it." },
  { q: "How do your student portfolio websites help with placements?", a: "A well-structured portfolio highlights projects, skills, and certifications cleanly. In my past freelance projects, custom portfolios helped students increase their internship placement rates by 20%." },
  { q: "What is your educational background?", a: "I am pursuing a Bachelor of Engineering in Computer Science and Engineering at Tagore Engineering College (2025–2029), and completed my schooling at Prince Matriculation Higher Secondary School." },
  { q: "Tell me about your AI for Quality Education award.", a: "I won 2nd Prize in the Idea-thon at VIT Chennai during Quality Week 2026, recognized by IQAC and the School of Electrical Engineering for developing an AI-driven personalized learning concept." },
  { q: "What programming languages and tools do you use?", a: "Python, Java, C++, C, JavaScript, and HTML/CSS. For databases and tooling, I work with MySQL, MongoDB, Git, and VS Code, and I am certified in Cloud Computing from NPTEL." },
  { q: "Are you open to internships or opportunities?", a: "Yes! I am actively looking for software engineering internships, technical collaborations, and freelance projects. Reach out via email at nitiships14@gmail.com or phone at +91 6369393673." },
];
