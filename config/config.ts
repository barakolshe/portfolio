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
  twitter: "https://twitter.com/barakolshe",
  resume: "/docs/Resume.pdf",
};

export const greetings = {
  name: name,
  title: "Hello, I'm Barak",
  description: `(This project is still in progress) I'm a passionate Fullstack developer with experience in React,
        Next.js, Vite, Material-UI, React bootstrap, tailwind and more. In
        addition i have experience in Node.js and Python for backend
        development`,
};

export const skills = [
  {
    title: "Frontend",
    skills: frontendIcons,
    animation: frontendLottie,
  },
  {
    title: "Backend",
    skills: backendIcons,
    animation: backendLottie,
  },
  {
    title: "Development Cycle",
    skills: developmentCycleIcons,
    animation: developmentCycleLottie,
  },
];

export const education = [
  {
    place: "Ort Darski High School",
    title: "Computer Science Major",
    achievements: ["Finished with honors"],
    description:
      "Studied C and Arduino, and learned planty of information about computers under the hood and about electricity.",
    dates: "2015 - 2018",
  },
  {
    place: "Magshimim",
    title: "Computer Science",
    achievements: ["Finished with honors"],
    description:
      "Studied computers and made a lot of projects in C++, C and python.",
    dates: "2015 - 2018",
  },
  {
    place: "IDF GAMA course",
    title: "Computer Science",
    achievements: [],
    description:
      "A highly sought after course of the intelligence corps.\nLearned valuble information about programming and computers",
    dates: "Feb 2019 - May 2019",
  },
  {
    place: "The Open University",
    title: "Computer Science",
    achievements: ["Currently studying"],
    description: "Currently working on my computer science degree.",
    dates: "2022 - Today",
  },
];

export const experience = [
  {
    icon: "/icons/aman.svg",
    place: "IDF 81 Unit of the Intelligence Corps",
    title: "Full stack developer",
    description:
      "Developed cyber supporting applications for various cyber needs.\n Developed and designed complex tools in microservices archeticture using variety of technologies and working with talented people",
    dates: "Feb 2019 - Dec 2022",
  },
  {
    icon: "/icons/dove.svg",
    place: "Freelancing",
    title: "Full stack developer",
    description:
      "Developed multiple projects for personal use and via freelancing",
    dates: "Dec 2022 - Today",
  },
];

export const footer = {
  title: "Reach out to me!",
  location: "Tel Aviv, Israel",
  image: "/images/my_image.jpg",
  imageAlt: name,
};
