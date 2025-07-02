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
    type: "Educational",
    info: "A full-stack school website for The Casa Dei Maria Montessori, a school located in West Hills, CA, as part of a three-site Montessori network (alongside Westvalley and Maria's). It serves as both a marketing platform and enrollment management system. \n\nWorked on the non-admin frontend independently using Next.js with TypeScript, Tailwind CSS, and Motion for animations. Implemented interactive carousels with Swiper.js and form handling using React Hook Form with Zod validation schemas.\n\nContributed to backend development under senior guidance, working with Nest.js and MongoDB to handle form submissions for admission, tour requests, and contact forms. Integrated Resend with React-Email to automate email workflows, sending confirmations to users and notifications to administrators.",
    techStack: [
      { id: "next", Icon: NextIcon },
      { id: "tailwind", Icon: TailwindIcon },
      { id: "nest", Icon: NestIcon },
      { id: "mongo", Icon: MongoIcon },
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
    type: "Educational",
    info: "A full-stack school website for The Casa Dei Maria Montessori, a school located in West Hills, CA, as part of a three-site Montessori network (alongside Westvalley and Maria's). It serves as both a marketing platform and enrollment management system. \n\nWorked on the non-admin frontend independently using Next.js with TypeScript, Tailwind CSS, and Motion for animations. Implemented interactive carousels with Swiper.js and form handling using React Hook Form with Zod validation schemas.\n\nContributed to backend development under senior guidance, working with Nest.js and MongoDB to handle form submissions for admission, tour requests, and contact forms. Integrated Resend with React-Email to automate email workflows, sending confirmations to users and notifications to administrators.",
    techStack: [
      { id: "next", Icon: NextIcon },
      { id: "tailwind", Icon: TailwindIcon },
      { id: "nest", Icon: NestIcon },
      { id: "mongo", Icon: MongoIcon },
    ],
    siteLink: "https://westvalleymontessori.com",
    videoData: {
      thumbnail: "images/home-page/hero/hero-thumbnail.jpg",
      mp4Link: "images/home-page/hero/hero.mp4",
      webmLink: "images/home-page/hero/hero.webm",
    },
  },
];
