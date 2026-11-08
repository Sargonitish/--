// All portfolio content for Nitish S — directly extracted and refined from his original portfolio index.html & activities.html.

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
  { value: 5, suffix: "+", label: "Portfolios & web apps delivered", note: "Student & academic project showcases" },
  { value: 10, suffix: "+", label: "Hackathons & competitive builds", note: "Finalist & award-winning solutions" },
  { value: 9, suffix: "+", label: "Certifications & milestones", note: "IIT Madras, NPTEL, St. Joseph's & Pearson" },
];

export type Service = { n: string; title: string; words: [string, string]; icon: string; body: string; tags: string[] };

export const services: Service[] = [
  { n: "01", title: "React.js & Tailwind CSS", words: ["REACT &", "TAILWIND"], icon: "web",
    body: "Modern responsive web interfaces with clean component architectures, custom styling, and seamless interactive experiences across all devices.",
    tags: ["React.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"] },
  { n: "02", title: "Node.js & MongoDB backend", words: ["NODE.JS", "& MONGODB"], icon: "apps",
    body: "Robust backend services with Express.js and MongoDB. RESTful APIs, data validation, database schemas, and structured routing.",
    tags: ["Node.js", "Express.js", "MongoDB", "REST APIs", "CRUD"] },
  { n: "03", title: "AI-powered educational systems", words: ["AI &", "EDTECH"], icon: "ai",
    body: "AI-driven educational platform architecture like NeuroEdu: behavior analysis, focus pattern tracking, and adaptive content delivery.",
    tags: ["Artificial Intelligence", "Python", "Data Science", "Adaptive Learning"] },
  { n: "04", title: "Hardware integration & IoT", words: ["HARDWARE", "& IOT"], icon: "software",
    body: "Sensor-driven logic and embedded systems prototyping: ultrasonic sensor mapping, haptic feedback, microcontrollers, and IoT protocols.",
    tags: ["Microcontrollers", "Sensors", "IoT", "Embedded C++", "Hardware Hack"] },
  { n: "05", title: "Student portfolio websites", words: ["PORTFOLIO", "DEV"], icon: "logo",
    body: "Customized portfolio websites helping students organize academic credentials, projects, and achievements to improve placement conversion.",
    tags: ["Web Development", "Portfolio Strategy", "Responsive UI", "Client Delivery"] },
  { n: "06", title: "Competitive builds & hackathons", words: ["RAPID", "PROTOTYPING"], icon: "auto",
    body: "High-intensity solution engineering for hackathons: smart city optimization, assistive navigation devices, and decentralized tech.",
    tags: ["Hackathons", "Rapid Prototyping", "Problem Solving", "Teamwork"] },
  { n: "07", title: "Cloud computing & systems", words: ["CLOUD &", "SYSTEMS"], icon: "cloud",
    body: "Cloud computing concepts and deployment models backed by NPTEL certification, combined with practical automation systems.",
    tags: ["Cloud Computing", "NPTEL", "System Architecture", "Git"] },
  { n: "08", title: "Cross-browser testing & QA", words: ["TESTING", "& USABILITY"], icon: "mobile",
    body: "Rigorous performance, accessibility, and cross-browser testing ensuring interfaces look polished and run reliably everywhere.",
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
  { name: "NeuroEdu Platform", logo: "/logos/vit-logo.png", cat: "AI Educational App", group: "AI", tint: "#f9e2e1",
    desc: "Architecting an AI-powered educational app to improve student focus and productivity. Uses sensors and AI models to analyze study patterns and optimize learning retention.",
    stack: ["React.js", "Python", "AI/ML", "Sensors", "Tailwind CSS"], code: "https://github.com/Sargonitish", shot: "/shots/flashfetch-t.webp" },
  { name: "Visual Assist Device", logo: "/logos/stjoseph.svg", cat: "Smart Assistive Hardware", group: "Software", tint: "#ece3d8",
    desc: "Wearable device using ultrasonic sensors and haptic feedback to help visually impaired individuals navigate surroundings in real-time, mapping obstacles up to 4m.",
    stack: ["Hardware Prototyping", "Microcontrollers", "Sensors", "Haptics"], code: "https://github.com/Sargonitish", shot: "/shots/kivo-t.webp" },
  { name: "Smart City Optimizer", logo: "/logos/tagore.svg", cat: "Urban Optimization", group: "Web apps", tint: "#ffd2b8",
    desc: "Finalist out of 50+ teams in the Global Tech Hackathon. High-pressure build for intelligent urban traffic flow and resource management.",
    stack: ["React", "Python", "Data Visualization", "Algorithms"], code: "https://github.com/Sargonitish", shot: "/shots/bsprep.webp" },
  { name: "Tehnisys Web App", logo: "/certs/saiamtechnisys.webp", cat: "IEEE EVODGE 2.0", group: "Web apps", tint: "#ffc9b0",
    desc: "Built for IEEE IES EVODGE 2.0 at Sai Ram Engineering College: responsive user interfaces, database management, and structured web application architecture.",
    stack: ["Node.js", "Express", "MongoDB", "JavaScript"], code: "https://github.com/Sargonitish", shot: "/shots/ossconnect-t.webp" },
  { name: "Student Portfolios", logo: "/logos/freelance.svg", cat: "Freelance Web Development", group: "Websites", tint: "#e7e0f7",
    desc: "Designed and customized 5+ portfolio websites for students to showcase academic projects and certifications, improving internship placement rates by 20%.",
    stack: ["React.js", "Tailwind CSS", "JavaScript", "Responsive UI"], live: "http://nitishportfolio.xo.je/", code: "https://github.com/Sargonitish", shot: "/shots/banya-t.webp" },
];

export const filters = ["All", "AI", "Software", "Web apps", "Websites"] as const;

export type Role = { title: string; org: string; when: string; where: string; body: string; logo: string };
export type RoleGroup = { id: string; label: string; roles: Role[] };

export const experience: RoleGroup[] = [
  {
    id: "hackathons", label: "Hackathons & builds",
    roles: [
      { title: "AI for Quality Education (2nd Prize)", org: "Quality Week 2026, VIT Chennai", when: "Mar 2026", where: "VIT Chennai", logo: "vit-logo.png",
        body: "Participated in an intensive 24-hour hackathon focused on scaling education through AI. Architected the core concepts for the NeuroEdu platform, recognized by IQAC and the School of Electrical Engineering." },
      { title: "Global Tech Hackathon (Finalist)", org: "Global Tech Team", when: "2026", where: "Competitive Track", logo: "tagore.svg",
        body: "Collaborated under high pressure to build a Smart City Optimization tool with React and Python. Recognized as a top finalist out of 50+ competing teams." },
      { title: "Hardware Sprint (Best Hardware Hack)", org: "Hardware Hackers Association", when: "2026", where: "Hardware Track", logo: "stjoseph.svg",
        body: "Prototyped a sensor-driven accessibility navigation device for physical spaces within a strict time limit, awarded Best Hardware Hack." },
    ],
  },
  {
    id: "ideathons", label: "Ideathons",
    roles: [
      { title: "Future Systems Ideathon (Honorable Mention)", org: "Tech Innovators", when: "Jan 2026", where: "Ideathon Track", logo: "tagore.svg",
        body: "Pitched next-generation software tools for educational environments. Received honorable mention for high feasibility, architecture, and user-centric design." },
      { title: "Web3 & Future Tech Ideathon", org: "Blockchain Society", when: "Feb 2026", where: "Innovation Hub", logo: "tagore.svg",
        body: "Developed a conceptual framework for integrating decentralized data into verified student credentials and academic records." },
      { title: "TEC Ideathon Participant", org: "Tagore Engineering College (EDC & IIC)", when: "Jan 2026", where: "Chennai", logo: "tagoreideathon26.webp",
        body: "Participated in the TEC Ideathon organized by the Entrepreneurship Development Cell and Institute Innovation Council for conceptualizing innovative engineering solutions." },
      { title: "National Science Day Futuristic Expo 2K26", org: "Tagore Engineering College (Science & Humanities)", when: "Mar 3, 2026", where: "Chennai", logo: "tagorefuturisticexpo.webp",
        body: "Showcased engagement with innovative technology and scientific exploration, presented to faculty and student delegates." },
    ],
  },
  {
    id: "internships", label: "Internships & programs",
    roles: [
      { title: "Summer Internship — Future Frontiers: Science of Tomorrow", org: "St. Joseph's Institute of Technology & Altrosyn", when: "Mar 7–11, 2025", where: "Chennai", logo: "sjitff.webp",
        body: "Completed intensive summer internship program focusing on hands-on Artificial Intelligence and Data Science methodologies with Altrosyn Technologies." },
      { title: "Summer Internship — Robotics and IoT", org: "St. Joseph's Institute of Technology (CSE Dept)", when: "Apr 1–5, 2025", where: "Chennai", logo: "sjitiot.webp",
        body: "Completed hands-on training in Robotics and IoT, gaining practical exposure to automation systems, microcontrollers, and connected smart sensors." },
      { title: "STEM-Based Summer Internship in EV Technology", org: "St. Joseph's Group (Centre for Innovation)", when: "Apr 21 — May 2, 2025", where: "Chennai", logo: "stitev.webp",
        body: "Immersive program exploring Electric Vehicle technology, engineering innovation, and sustainable technology applications." },
    ],
  },
  {
    id: "activities", label: "Extra-curriculars & sports",
    roles: [
      { title: "Karate Championship & Advanced Belt", org: "State Martial Arts Association", when: "Tournament 2021", where: "Tamil Nadu", logo: "karate21.webp",
        body: "Trained in discipline, focus, and physical endurance in martial arts. State tournament participant with advanced belt certification." },
      { title: "Master Chef: Fireless Cooking (1st Place Winner)", org: "Cultural Fest 2025", when: "Cultural Fest 2025", where: "Campus Fest", logo: "tagorefirelesscooking.webp",
        body: "Awarded 1st Place for creative assembly, resourcefulness, taste, and presentation under strict constraints without relying on heat." },
      { title: "Tehnisys Participant — IEEE IES EVODGE 2.0", org: "Sri Sairam Engineering College", when: "Dec 10, 2026", where: "Chennai", logo: "saiamtechnisys.webp",
        body: "Certificate of Participation recognizing web application engineering, database structuring, and responsive interface development." },
      { title: "ZORPHIX 2026 — PromptCraft", org: "Chennai Institute of Technology", when: "Feb 5, 2026", where: "CIT Chennai", logo: "citzopphx.webp",
        body: "Participated in ZORPHIX 2026 Techno-Management Symposium focused on technology, coding, and innovation." },
    ],
  },
];

export const education = [
  { school: "Tagore Engineering College", deg: "B.E. Computer Science and Engineering — Present", when: "2025 — 2029", logo: "tagore.svg" },
  { school: "Prince Matriculation Higher Secondary School", deg: "Higher Secondary Education — Foundational Computation Logic", when: "Completed 2025", logo: "prince.svg" },
];

export const certs = [
  { title: "Basics of Electronics & Embedded System", org: "IIT Madras (Centre for Outreach & Digital Education)", when: "Jan 5–9, 2026", logo: "iitm.webp", tone: "w" },
  { title: "Basics of Electronics & Embedded System", org: "IIT Madras (Centre for Outreach & Digital Education)", when: "May 15–19, 2023", logo: "iitm-23.webp", tone: "w" },
  { title: "PromptCraft — ZORPHIX 2026", org: "Chennai Institute of Technology", when: "Feb 5, 2026", logo: "citzopphx.webp", tone: "o" },
  { title: "Tehnisys — IEEE IES EVODGE 2.0", org: "Sai Ram Engineering College", when: "Dec 10, 2026", logo: "saiamtechnisys.webp", tone: "w" },
  { title: "Future Frontiers: Science of Tomorrow", org: "St. Joseph's Institute of Tech & Altrosyn", when: "Mar 7–11, 2025", logo: "sjitff.webp", tone: "o" },
  { title: "Robotics and IoT Summer Internship", org: "St. Joseph's Institute of Technology (CSE)", when: "Apr 1–5, 2025", logo: "sjitiot.webp", tone: "w" },
  { title: "STEM Electric Vehicle Technology", org: "St. Joseph's Group (Centre for Innovation)", when: "Apr 21 — May 2, 2025", logo: "stitev.webp", tone: "w" },
  { title: "Futuristic Expo 2K26 Participant", org: "Tagore Engineering College (Science & Humanities)", when: "Mar 3, 2026", logo: "tagorefuturisticexpo.webp", tone: "w" },
  { title: "TEC Ideathon Participant", org: "Tagore Engineering College (EDC & IIC)", when: "Jan 2026", logo: "tagoreideathon26.webp", tone: "o" },
  { title: "Karate Advanced Belt Certification", org: "State Martial Arts Association", when: "2021", logo: "karate21.webp", tone: "w" },
  { title: "Fireless Cooking Winner (1st Place)", org: "Cultural Fest 2025", when: "2025", logo: "tagorefirelesscooking.webp", tone: "o" },
];

export const skills = [
  "React.js", "Tailwind CSS", "JavaScript", "Node.js", "Express.js", "MongoDB",
  "Python", "Java", "C++", "C", "HTML5", "CSS3", "Git", "GitHub", "VS Code",
  "Hardware Integration", "Microcontrollers", "Sensors", "IoT", "Cloud Computing", "Problem Solving",
];

export const process = [
  { n: "01", title: "Discover & Scope", body: "Understanding the problem constraints, technical requirements, and target outcomes through clear discussion." },
  { n: "02", title: "Architect & Model", body: "Designing clean data schemas, software components, and hardware interfaces before writing production code." },
  { n: "03", title: "Build & Iterate", body: "Developing rapidly with clean modular code, conducting live testing, and integrating feedback early." },
  { n: "04", title: "Deliver & Polish", body: "Testing cross-device compatibility, optimizing performance, and deploying production-ready solutions." },
];

export const faq = [
  { q: "What is your main focus as a developer?", a: "I'm a student developer and curious learner exploring computer science at Tagore Engineering College. I enjoy building web apps with React and Node.js, AI educational tools like NeuroEdu, and hardware-software integrations." },
  { q: "Tell me about your NeuroEdu project.", a: "NeuroEdu is an intelligent educational platform that uses AI to analyze student behavior and optimize learning outcomes. It tracks focus patterns, identifies distractions, and adapts study recommendations in real-time." },
  { q: "What is the Visual Assist Device?", a: "It is a wearable assistive hardware device that maps environments in real-time for visually impaired individuals using ultrasonic sensors and communicates obstacles through intuitive haptic vibration patterns." },
  { q: "What certifications have you earned?", a: "I have earned certifications from IIT Madras in Basics of Electronics and Embedded Systems (both 2026 and 2023), NPTEL Cloud Computing, Pearson MePro English, and completed internships at St. Joseph's in AI, IoT, and EV technology." },
  { q: "What hackathon achievements do you have?", a: "I won 2nd Prize in the AI for Quality Education Idea-thon at VIT Chennai Quality Week 2026, was a Finalist out of 50+ teams in the Global Tech Hackathon, and won Best Hardware Hack in Hardware Sprint." },
  { q: "How can I contact or collaborate with you?", a: "You can email me at nitiships14@gmail.com, call me at +91 6369393673, or connect via LinkedIn and GitHub." },
];
