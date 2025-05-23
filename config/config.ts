import * as frontendLottie from "@/assets/lottie/frontend.json";
import * as backendLottie from "@/assets/lottie/backend.json";
import * as developmentCycleLottie from "@/assets/lottie/engineer.json";

export const frontendIcons = [
  {
    name: "React",
    icon: "/icons/react.svg",
  },
  {
    name: "Next.js",
    icon: "/icons/nextjs.svg",
  },
  {
    name: "Redux",
    icon: "/icons/redux.svg",
  },
  {
    name: "CSS",
    icon: "/icons/css.svg",
  },
  {
    name: "Material-UI",
    icon: "/icons/materialui.svg",
  },
  {
    name: "Tailwind",
    icon: "/icons/tailwind.svg",
  },
  {
    name: "Vue.js",
    icon: "/icons/vuejs.svg",
  },
  {
    name: "figma",
    icon: "/icons/figma.svg",
  },
];

export const backendIcons = [
  {
    name: "Node.js",
    icon: "/icons/nodejs.svg",
  },
  {
    name: "FastAPI",
    icon: "/icons/fastapi.svg",
  },
  {
    name: "Django",
    icon: "/icons/django.svg",
  },
  {
    name: "Redis",
    icon: "/icons/redis.svg",
  },
  {
    name: "MySQL",
    icon: "/icons/mysql.svg",
  },
  {
    name: "PostgreSQL",
    icon: "/icons/postgres.svg",
  },
  {
    name: "MongoDB",
    icon: "/icons/mongodb.svg",
  },
  {
    name: "M-services",
    icon: "/icons/microservices.svg",
  },
  {
    name: "RestAPI",
    icon: "/icons/restapi.svg",
  },
];

export const developmentCycleIcons = [
  {
    name: "AWS",
    icon: "/icons/aws.svg",
  },
  {
    name: "Firebase",
    icon: "/icons/firebase.svg",
  },
  {
    name: "Github",
    icon: "/icons/github_black.svg",
  },
  {
    name: "CI/CD",
    icon: "/icons/cicd.svg",
  },
  {
    name: "Ubuntu",
    icon: "/icons/ubuntu.svg",
  },
  {
    name: "Docker",
    icon: "/icons/docker.svg",
  },
  {
    name: "Kubernetes",
    icon: "/icons/kubernetes.svg",
  },
];

const name = "Barak Olshevizky";

export const links = {
  github: "https://github.com/barakolshe",
  linkedin: "https://www.linkedin.com/in/barak-olshevizky-206904274/",
  resume: "/docs/barak-resume.pdf",
};

export const greetings = {
  name: name,
  title: "Hello, I'm Barak",
  description: `I'm a Software Engineer with 5 years of experience 
  in designing, developing, and maintaining high-scale 
  complex applications on cloud environments, following microservices architecture.
  `,
};

export const skills = [
  {
    title: "Backend",
    skills: backendIcons,
    animation: backendLottie,
  },
  {
    title: "Frontend",
    skills: frontendIcons,
    animation: frontendLottie,
  },
  {
    title: "Development Cycle",
    skills: developmentCycleIcons,
    animation: developmentCycleLottie,
  },
];

export const education = [
  {
    place: "IDF GAMA course",
    title: "Computer Science",
    achievements: [],
    description: `A highly sought after course of the intelligence corps.
    Acquired valuable knowledge regarding large-scale project design patterns, as well as knowledge about cyber and computer exploits.`,
    dates: "Feb 2019 - May 2019",
  },
  {
    place: "The Open University",
    title: "Computer Science",
    achievements: ["Currently studying"],
    description: "Currently working on my computer science degree.",
    dates: "2022 - Today",
  },
  {
    place: "Magshimim",
    title: "Computer Science",
    achievements: ["Finished with honors"],
    description: `Studied C, C++, Python, Data structures, networking, and reverse engineering.
      Gave me a very good base and passion to pursue computer engineering.`,
    dates: "2015 - 2018",
  },
  {
    place: "Ort Darski High School",
    title: "Computer Science Major",
    achievements: ["Finished with honors"],
    description: `Studied C, Arduino and robotics.
    For my final project I've created a "smart aquarium" for fishes.`,
    dates: "2015 - 2018",
  },
];

export const experience = [
  {
    icon: "/icons/aman.svg",
    place: "IDF 81 Unit of the Intelligence Corps",
    title: "Software engineer",
    description:
      "Researched and developed multiple project and apps, for various military needs.",
    dates: "Feb 2019 - January 2023",
  },
  {
    icon: "/icons/dove.svg",
    place: "Freelancing",
    title: "Fullstack freelance developer",
    description:
      "Developed multiple projects for personal use, and freelanced and developed paid projects.",
    dates: "Dec 2022 - Today",
  },
  {
    icon: "/icons/cyber.svg",
    place: "Kovrr - Cyber Risk Quantification",
    title: "Fullstack developer",
    description: "Fullstack developer for a cyber security company.",
    dates: "Nov 2023 - Today",
  },
];

export const projects = [
  {
    title: "Classified",
    techStack: [
      "Node.js",
      "FastAPI",
      "RabbitMQ",
      "MySQL",
      "Microservices",
      "Material UI",
      "Redux",
      "Typescript",
    ],
    description: `My main IDF project. 
     Highly classified project, that was meant to serve multiple departments.`,
  },
  {
    title: "Portfolio",
    techStack: ["Next.js", "Tailwind", "Typescript", "AWS", "Figma"],
    description: `A portfolio i've designed myself and developed myself.
    Both mobile and desktop compatible, and code design is generic and well suited for adding more items and sections.`,
    githubLink: "https://github.com/barakolshe/portfolio",
    siteLink: "https://www.barakolshe.com/",
  },
  {
    title: "Playit",
    techStack: ["Java", "Android Studio"],
    description:
      "An educational android app that allows the user to play the guitar according to different music pieces. The app then listents to the strumming and ranks the performance.",
    githubLink: "https://github.com/barakolshe/playit",
  },
];

export const footer = {
  title: "Reach out to me!",
  location: "Tel Aviv, Israel",
  image: "/images/my_image.jpg",
  imageAlt: name,
};
