export interface Experience {
  period: string;
  role: string;
  company: string;
  location: string;
  responsibilities: string[];
  technologies: string[];
}

export const experienceData: Experience[] = [
  {
    period: "2020 – Present",
    role: "Freelance Software Developer",
    company: "Self-Employed",
    location: "Remote / Jamaica",
    responsibilities: [
      "Developed and deployed websites for various clients including courier services and religious organizations",
      "Built a courier service portal for customers, staff, and admin roles with package tracking and processing workflows",
      "Created interactive websites for churches featuring event calendars, bios, and contact forms",
      "Developed website for Vim Enterprise Ltd to manage advertisement to customers about products/services being offered."
    ],
    technologies: ["Django", "Vue.js", "React", "PostgreSQL", "Sqlite", "Docker", "Tailwind CSS", "Node.js"]
  },
  {
    period: "April 2025 – Present",
    role: "SCADA Technician",
    company: "National Water Commission",
    location: "Jamaica",
    responsibilities: [
      "Install, configure, and maintain PLCs, industrial sensors, and control systems across water infrastructure facilities",
      "Ensure reliable SCADA data acquisition from tanks, treatment plants, pipelines, and wastewater systems",
      "Deploy and support VFDs and soft starters to optimize motor control in pumping applications",
      "Troubleshoot field devices and contribute to automation strategies for improved efficiency"
    ],
    technologies: ["PLCs", "SCADA", "VFDs", "Sensors", "Industrial Electronics"]
  },
  {
    period: "October 2024 – December 2024",
    role: "IoT Engineer",
    company: "Innovera Ltd",
    location: "Jamaica",
    responsibilities: [
      "Developed a network-controlled pump system for 415V VFD/soft starter motors with smart monitoring and remote control",
      "Built a job management system including a mobile interface for task handling and real-time alerts",
      "Configured and programmed LoRa devices for efficient long-range communication",
      "Set up ChirpStack LoRaWAN infrastructure and deployed physical antenna systems",
      "Setup Ai detection for multi camera feed systems for security control."
    ],
    technologies: ["LoRa", "VFDs", "ChirpStack", "IoT", "Mobile Apps"]
  },
  {
    period: "January 2024 – September 2024",
    role: "Robotics and Software Engineer Instructor",
    company: "HEART Trust NSTA NTEI",
    location: "Jamaica",
    responsibilities: [
      "Delivered hands-on training in robotics programming, electronics, and mechanical system design",
      "Guided students through the fundamentals of robotic system integration and software development",
      "Caoched participants for international robtoics competition 2024 WorldSkills"
    ],
    technologies: ["Arduino", "Raspberry Pi", "C++", "Python", "Robotics", "Electronics", "3D Design", "3D Printing"]
  },
  {
    period: "October 2022 – September 2023",
    role: "Software Engineer",
    company: "Real Decoy",
    location: "Jamaica",
    responsibilities: [
      "Implemented features and visuals for penetration testing platforms (Software Secured)",
      "Debugged customer-facing issues in web applications for GraceKennedy Motor Insurance",
      "Maintained and enhanced loan and mortgage portals for Jamaica National Commercial Bank"
    ],
    technologies: ["Django", "React", "SpringBoot", "PostgreSQL", "MySQL", "Svelte", "Docker"]
  },
  {
    period: "January 2018 – June 2022",
    role: "Electronics and Software Developer",
    company: "Vim Enterprise Ltd",
    location: "Jamaica",
    responsibilities: [
      "Developed GUIs for crowd control systems across remote locations",
      "Created a web platform for data synchronization between dispersed electronic control units"
    ],
    technologies: ["WebSockets", "Custom GUIs", "Remote Communication", "Electronics", "Python", "React", "Golang"]
  },
  {
    period: "June 2020 – December 2020",
    role: "Electronics and Robotics Instructor",
    company: "Southwest TVET (HEART)",
    location: "Jamaica",
    responsibilities: [
      "Taught electronics theory and application to Level 3 students",
      "Instructed on robotic assembly, testing, and programming fundamentals"
    ],
    technologies: ["Electronics", "Embedded C", "Robotics", "Testing Equipment"]
  }
];