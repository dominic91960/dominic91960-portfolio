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
    id: "WM",
    name: "Westvalley Montessori",
    displayName: "Westvalley",
    type: "Educational",
    info: "A full-stack school website for Westvalley Montessori, a school located in Winnetka, CA, USA, as part of a three-site Montessori network (alongside Casa Dei Maria and Maria's). It serves as both a marketing platform and enrollment management system. \n\nWorked on the non-admin frontend independently using Next.js with TypeScript, Tailwind CSS, and Motion for animations. Implemented interactive carousels with Swiper.js and form handling using React Hook Form with Zod validation schemas.\n\nContributed to backend development under senior guidance, working with Nest.js and MongoDB to handle form submissions for admission, tour requests, and contact forms. Integrated Resend with React-Email to automate email workflows, sending confirmations to users and notifications to administrators.",
    techStack: [
      { id: "next", Icon: NextIcon },
      { id: "tailwind", Icon: TailwindIcon },
      { id: "nest", Icon: NestIcon },
      { id: "mongo", Icon: MongoIcon },
    ],
    siteLink: "https://westvalleymontessori.com",
    videoLink: "westvalley-demo_wmikcu",
  },
  {
    id: "TG",
    name: "Thevingame",
    displayName: "Thevingame",
    type: "E-commerce",
    info: "A full-stack game key store website built with Next.js, offering digital game keys and related products. Developed as a complete e-commerce solution with both customer-facing and administrative functionality.\n\nWorked on frontend development under senior guidance, implementing all user-facing pages except the shop and checkout sections using Next.js with Tailwind CSS and Shadcn UI components. Handled form functionality across the platform using React Hook Form with Yup validation schemas.\n\nCollaborated with senior developers to implemented the UI for existing functional admin pages and made them responsive across different screen sizes.",
    techStack: [
      { id: "next", Icon: NextIcon },
      { id: "tailwind", Icon: TailwindIcon },
    ],
    siteLink: "https://thevingame.com",
    videoLink: "thevingame-demo_bmimqx",
  },
  {
    id: "WV",
    name: "Wolvista",
    displayName: "Wolvista",
    type: "Client Management",
    info: "A comprehensive client management system enabling users to purchase subscriptions for creative services including graphics, branding, and web design/development. The platform features subscription-based service requests and dual dashboard functionality for users and administrators.\n\nWorked independently on frontend development across multiple sections of the platform. Enhanced the existing homepage by implementing the Pricing and Projects sections using HTML, CSS, JavaScript, Bootstrap, and Isotope.js library for dynamic content filtering.\n\nDeveloped complete user and admin dashboard interfaces from scratch using React with Tailwind CSS and Shadcn UI components. The dashboards provide subscription management, service request functionality, and administrative controls for managing client accounts and service delivery.",
    techStack: [
      { id: "react", Icon: ReactIcon },
      { id: "tailwind", Icon: TailwindIcon },
    ],
    siteLink: "https://wolvista.com",
    videoLink: "wolvista-demo_zbjxft",
  },
  {
    id: "MM",
    name: "Maria's Montessori",
    displayName: "Maria's",
    type: "Educational",
    info: "A full-stack school website for Maria's Montessori, a school located in Winnetka, CA, USA, as part of a three-site Montessori network (alongside Casa Dei Maria and Westvalley). It serves as both a marketing platform and enrollment management system. \n\nWorked on the non-admin frontend independently using Next.js with TypeScript, Tailwind CSS, and Motion for animations. Implemented interactive carousels with Swiper.js and form handling using React Hook Form with Zod validation schemas.\n\nContributed to backend development under senior guidance, working with Nest.js and MongoDB to handle form submissions for admission, tour requests, and contact forms. Integrated Resend with React-Email to automate email workflows, sending confirmations to users and notifications to administrators.",
    techStack: [
      { id: "next", Icon: NextIcon },
      { id: "tailwind", Icon: TailwindIcon },
      { id: "nest", Icon: NestIcon },
      { id: "mongo", Icon: MongoIcon },
    ],
    siteLink: "https://mariasmontessorischool.com",
    videoLink: "marias-demo_grzcqq",
  },
  {
    id: "CDMM",
    name: "The Casa Dei Maria Montessori",
    displayName: "The Casa Dei Maria",
    type: "Educational",
    info: "A full-stack school website for The Casa Dei Maria Montessori, a school located in West Hills, CA, USA, as part of a three-site Montessori network (alongside Maria's and Westvalley). It serves as both a marketing platform and enrollment management system. \n\nWorked on the non-admin frontend independently using Next.js with TypeScript, Tailwind CSS, and Motion for animations. Implemented interactive carousels with Swiper.js and form handling using React Hook Form with Zod validation schemas.\n\nContributed to backend development under senior guidance, working with Nest.js and MongoDB to handle form submissions for admission, tour requests, and contact forms. Integrated Resend with React-Email to automate email workflows, sending confirmations to users and notifications to administrators.",
    techStack: [
      { id: "next", Icon: NextIcon },
      { id: "tailwind", Icon: TailwindIcon },
      { id: "nest", Icon: NestIcon },
      { id: "mongo", Icon: MongoIcon },
    ],
    siteLink: "https://thecasadeimariamontessorischool.com",
    videoLink: "the-casa-dei-maria-demo_viw1uo",
  },
];
