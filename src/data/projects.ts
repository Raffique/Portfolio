export interface Project {
  title: string;
  description: string;
  image: string;
  gallery: string[];
  technologies: string[];
  categories: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projectsData: Project[] = [
  {
    title: "TechTinkersJA",
    description: "TechTinkersJA is a Jamaican-based company focused on technology education and exploration for children from kindergarten to tertiary level. The platform provides online robotics courses, host competitions, and offers educational kits for hands-on learning. In addition, TechTinkersJA runs a web show highlighting tech developments in Jamaica and provides resources for parents to sign up their children for programs.",
    image: "images/portfolio/software/techtinkersja2.png",
    gallery: [ 
      "images/portfolio/person/techtinkers2.png",
      "images/portfolio/software/techtinkersja.png",
      "images/portfolio/software/techtinkersja2.png",
      "images/portfolio/software/techtinkersja3.png"
    ],
    technologies: ["React", "Golang", "Postgresql"],
    categories: ["Web", "Software", "Robotics"],
    githubUrl: "",
    liveUrl: "techtinkersja.com"
  },
  {
    title: "M-Scada",
    description: "M-Scada is a flexible, subscription-based SCADA (Supervisory Control and Data Acquisition) web application designed to be customized for client-specific industrial automation and monitoring needs. It allows users to remotely monitor, control, and visualize their systems in real-time. The platform supports IoT device integration and is built to scale from small businesses to enterprise-grade operations.",
    image: "images/portfolio/software/m-scada2.png",
    gallery: [
      "images/portfolio/software/m-scada.png",
      "images/portfolio/software/m-scada2.png",
      "images/portfolio/software/m-scada3.png",
      "images/portfolio/software/m-scada4.png",
      "images/portfolio/software/m-scada5.png",
      "images/portfolio/software/m-scada6.png",
      "images/portfolio/software/nwc-scada.png",
      "images/portfolio/software/nwc-scada2.png",
      "images/portfolio/software/nwc-scada3.png",
      "images/portfolio/software/nwc-scada4.png",
      "images/portfolio/software/nwc-scada5.png",
      "images/portfolio/software/nwc-scada6.png",
      "images/portfolio/software/nwc-scada7.png",
      "images/portfolio/software/nwc-scada8.png",
      "images/portfolio/software/nwc-scada9.png",
    ],
    technologies: ["React", "Golang", "Postgresql", "MQTT"],
    categories: ["Web", "Software"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "eCommerce",
    description: "A flexible and scalable general-purpose e-commerce platform that can function like Amazon or be customized for niche markets. Designed for businesses of any size, this platform supports product listings, shopping carts, secure checkout, order tracking, and multi-vendor capabilities. It can be quickly adapted for specific industries such as fashion, electronics, or handmade goods.",
    image: "images/portfolio/software/shop.png",
    gallery: [
      "images/portfolio/software/shop.png",
      "images/portfolio/software/shop2.png",
      "images/portfolio/software/shop3.png",
      "images/portfolio/software/shop4.png",
      "images/portfolio/software/shop5.png",
    ],
    technologies: ["React", "Golang", "Postgresql"],
    categories: ["Web", "Software"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Queuematic",
    description: "Queuematic is a smart queuing and customer management system designed to streamline service delivery in high-traffic environments. It supports both first-come-first-serve and task-completion prioritization models. The system issues paper and electronic tickets, manages multiple service lines, and provides actionable analytics on customer flow and staff performance.",
    image: "images/portfolio/software/queue6.png",
    gallery: [
      "images/portfolio/software/queuing1.png",
      "images/portfolio/software/queue.png",
      "images/portfolio/software/queue2.png",
      "images/portfolio/software/queue3.png",
      "images/portfolio/software/queue4.png",
      "images/portfolio/software/queue5.png",
      "images/portfolio/software/queue6.png",

    ],
    technologies: ["React", "Golang", "Postgresql", "React-Native", "PWA", "AWS"],
    categories: ["Web", "Mobile", "Saas", "Software"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "SparkleClean",
    description: "SparkleClean is a demo website for a professional cleaning service specializing in residential, hotel, and Airbnb properties. The platform features online service booking, recurring appointment management, and client communication tools.",
    image: "images/portfolio/software/clean.png",
    gallery: [
      "images/portfolio/software/clean.png",
      "images/portfolio/software/clean2.png",
      "images/portfolio/software/clean3.png",
      "images/portfolio/software/clean4.png"
    ],
    technologies: ["Python", "PyQt", "Ai", "sqlite", "Dicom"],
    categories: ["Desktop", "Software"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Pulmonary Embolism AI detector",
    description: "A desktop-based AI application for detecting pulmonary embolisms in DICOM images using deep learning. Developed as a collaboration between computer science and radiology students, the solution leverages 2.5D image preprocessing techniques and a ResNet-based model to improve diagnostic accuracy. The application includes a custom PyQt GUI tailored for radiologists, enabling streamlined review and classification workflows.",
    image: "images/portfolio/software/pe1.png",
    gallery: [
      "images/portfolio/software/pe1.png",
      "images/portfolio/software/pe2.png",
      "images/portfolio/software/pe3.jpg",
      "images/portfolio/software/pe4.gif",
      "images/portfolio/software/pe5.gif"
    ],
    technologies: ["Python", "PyQt", "Ai", "sqlite", "Dicom"],
    categories: ["Desktop", "Software"],
    githubUrl: "#",
    liveUrl: "#"
  }
];