import {
  mobile,
  backend,
  creator,
  web,
  doctrue_website,
  ananya,
  memes,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Web Development",
    icon: web,
  },
  {
    title: "Mobile App Development",
    icon: mobile,
  },
  {
    title: "Backend & API Development",
    icon: backend,
  },
  {
    title: "Cloud & Deployment Solutions",
    icon: creator,
  },
];

const projects = [
  {
    name: "Full Stack Web App",
    description:
      "A comprehensive full-stack web application utilizing ReactJS and Bootstrap, coupled with analytics from Firebase and NodeJS EC2 instance.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: doctrue_website,
    source_code_link: "https://github.com/sza619",
    live_page_link: "https://doctrue.in",
  },
  {
    name: "Ananya Website",
    description:
      "A fast and fully responsive website which was used for introducing and showcasing our college fest. Built using NextJS and TailwindCSS.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: ananya,
    source_code_link: "https://github.com/sza619/ananya2k23",
    live_page_link: "https://ananya2k23.vercel.app/",
  },
  {
    name: "Meme Generator",
    description:
      "A Meme Generator to fetch random templates by API calls, input top and bottom text to create Memes and Download them. Built using ReactJS.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: memes,
    source_code_link: "https://github.com/sza619/MemeGenerator",
    live_page_link: "https://memesjoemama.netlify.app/",
  },
];

export { services, projects };
