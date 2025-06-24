export interface Skill {
  name: string;
  category: string;
  proficiency: number; // 0-100
}

export const skillsData: Skill[] = [
  // Embedded Systems
  {
    name: "Arduino",
    category: "Embedded Systems",
    proficiency: 80
  },
  {
    name: "ESP32/ESP8266",
    category: "Embedded Systems",
    proficiency: 80
  },
  {
    name: "STM32",
    category: "Embedded Systems",
    proficiency: 65
  },
  // {
  //   name: "RTOS",
  //   category: "Embedded Systems",
  //   proficiency: 80
  // },
  {
    name: "Embedded C/C++",
    category: "Embedded Systems",
    proficiency: 80
  },

  // Hardware Engineering
  {
    name: "PCB Design",
    category: "Hardware",
    proficiency: 55
  },
  {
    name: "Circuit Analysis",
    category: "Hardware",
    proficiency: 45
  },
  // {
  //   name: "Signal Processing",
  //   category: "Hardware",
  //   proficiency: 75
  // },
  {
    name: "Soldering & Prototyping",
    category: "Hardware",
    proficiency: 45
  },
  // {
  //   name: "Altium Designer",
  //   category: "Hardware",
  //   proficiency: 85
  // },

  // Industrial Electronics
  {
    name: "PLC Programming",
    category: "Industrial Electronics",
    proficiency: 45
  },
  {
    name: "SCADA Systems",
    category: "Industrial Electronics",
    proficiency: 60
  },
  {
    name: "VFD Configuration",
    category: "Industrial Electronics",
    proficiency: 40
  },
  // {
  //   name: "Industrial Protocols",
  //   category: "Industrial Electronics",
  //   proficiency: 80
  // },
  // {
  //   name: "Power Electronics",
  //   category: "Industrial Electronics",
  //   proficiency: 85
  // },

  // Robotics
  {
    name: "ROS (Robot Operating System)",
    category: "Robotics",
    proficiency: 60
  },
  // {
  //   name: "Motion Planning",
  //   category: "Robotics",
  //   proficiency: 75
  // },
  {
    name: "Sensor Integration",
    category: "Robotics",
    proficiency: 70
  },
  {
    name: "Control Systems",
    category: "Robotics",
    proficiency: 55
  },

  // 3D Printing
  {
    name: "3D Modeling",
    category: "3D Printing",
    proficiency: 70
  },
  // {
  //   name: "Slicing Software",
  //   category: "3D Printing",
  //   proficiency: 90
  // },
  // {
  //   name: "Material Selection",
  //   category: "3D Printing",
  //   proficiency: 80
  // },
  // {
  //   name: "Printer Maintenance",
  //   category: "3D Printing",
  //   proficiency: 95
  // },

  // AI & Machine Learning
  {
    name: "Computer Vision",
    category: "AI",
    proficiency: 60
  },
  {
    name: "TensorFlow",
    category: "AI",
    proficiency: 60
  },
  {
    name: "Neural Networks",
    category: "AI",
    proficiency: 60
  },
  {
    name: "NLP",
    category: "AI",
    proficiency: 45
  },

  // Web Development
  {
    name: "React",
    category: "Web Development",
    proficiency: 75
  },
  {
    name: "Node.js",
    category: "Web Development",
    proficiency: 75
  },
  {
    name: "TypeScript",
    category: "Web Development",
    proficiency: 75
  },
  {
    name: "HTML/CSS",
    category: "Web Development",
    proficiency: 75
  },

  //Software Development
  {
    name: "Python",
    category: "Software Development",
    proficiency: 80
  },
  {
    name: "C++",
    category: "Software Development",
    proficiency: 80
  },
  {
    name: "Rust",
    category: "Software Development",
    proficiency: 65
  },
  {
    name: "Golang",
    category: "Software Development",
    proficiency: 70
  },

  // Mobile Development
  {
    name: "React Native",
    category: "Mobile Development",
    proficiency: 65
  },
  {
    name: "Flutter",
    category: "Mobile Development",
    proficiency: 45
  },
  // {
  //   name: "iOS Development",
  //   category: "Mobile Development",
  //   proficiency: 70
  // },
  // {
  //   name: "Android Development",
  //   category: "Mobile Development",
  //   proficiency: 75
  // },

  // Simulation/Game Dev
  {
    name: "Unreal Engine",
    category: "Simulation/Game Dev",
    proficiency: 55
  },
  // {
  //   name: "Unity",
  //   category: "Simulation/Game Dev",
  //   proficiency: 70
  // },
  // {
  //   name: "Physics Simulation",
  //   category: "Simulation/Game Dev",
  //   proficiency: 75
  // },
  // {
  //   name: "3D Visualization",
  //   category: "Simulation/Game Dev",
  //   proficiency: 80
  // }
];