import ExpressIcon from "@/components/icons/ExpressIcon";
import GitIcon from "@/components/icons/GitIcon";
import MongoIcon from "@/components/icons/MongoIcon";
import NestIcon from "@/components/icons/NestIcon";
import NextIcon from "@/components/icons/NextIcon";
import NodeIcon from "@/components/icons/NodeIcon";
import ReactIcon from "@/components/icons/ReactIcon";
import TailwindIcon from "@/components/icons/TailwindIcon";

// ----- ----- ----- TECH STACK DATA ----- ----- -----
export const brandCarouselData = [
  { id: "001", Icon: ReactIcon },
  { id: "002", Icon: NextIcon },
  { id: "003", Icon: TailwindIcon },
  { id: "004", Icon: NodeIcon },
  { id: "005", Icon: ExpressIcon },
  { id: "006", Icon: NestIcon },
  { id: "007", Icon: MongoIcon },
  { id: "008", Icon: GitIcon },
];

// ----- ----- ----- MAIN PROJECTS DATA ----- ----- -----
export const mainProjectsData = [
  {
    id: "001",
    name: "The Casa Dei Maria Montessori",
    displayName: "The Casa Dei Maria",
    type: "ecommerce",
    info: "I'm an aspiring full-stack developer with a growing passion for web technologies and user experience design. My journey into web development began through online courses and personal projects, where I discovered my love for creating interactive applications.\n\nI'm currently focused on building a strong foundation in both frontend and backend technologies. Each project I work on teaches me something new, and I'm constantly challenging myself to learn and apply new concepts.\n\nI'm eager to join a development team where I can continue learning, contribute to meaningful projects, and grow into a skilled full-stack developer.",
    techStack: [
      { id: "next", icon: NextIcon },
      { id: "nest", icon: NestIcon },
      { id: "mongo", icon: MongoIcon },
    ],
    siteLink: "https://thecasadeimariamontessorischool.com",
    videoData: {
      thumbnail: "images/home-page/hero/hero-thumbnail.jpg",
      mp4Link: "images/home-page/hero/hero.mp4",
      webmLink: "images/home-page/hero/hero.webm",
    },
  },
  {
    id: "002",
    name: "Westvalley Montessori",
    displayName: "Westvalley",
    type: "ecommerce",
    info: "I'm an aspiring full-stack developer with a growing passion for web technologies and user experience design. My journey into web development began through online courses and personal projects, where I discovered my love for creating interactive applications.\n\nI'm currently focused on building a strong foundation in both frontend and backend technologies. Each project I work on teaches me something new, and I'm constantly challenging myself to learn and apply new concepts.\n\nI'm eager to join a development team where I can continue learning, contribute to meaningful projects, and grow into a skilled full-stack developer.",
    techStack: [
      { id: "next", icon: NextIcon },
      { id: "nest", icon: NestIcon },
      { id: "mongo", icon: MongoIcon },
    ],
    siteLink: "https://westvalleymontessori.com",
    videoData: {
      thumbnail: "images/home-page/hero/hero-thumbnail.jpg",
      mp4Link: "images/home-page/hero/hero.mp4",
      webmLink: "images/home-page/hero/hero.webm",
    },
  },
];
