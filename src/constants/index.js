import {
  mobile,
  backend,
  creator,
  web,
  percoyo,
  doctrue,
  sentinal,
  fullstack,
  ananya,
  jobportal,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer (Expo)",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Cloud Service",
    icon: creator,
  },
];

const experiences = [
  {
    title: "Frontend Dev Intern",
    company_name: "DocTrue",
    icon: doctrue,
    iconBg: "white",
    date: "June 2023 - Present",
    points: [
      "Engineered a comprehensive full-stack web application utilizing ReactJS and TailwindCSS, coupled with a secure authentication layer and messaging from Firebase",
      "Spearheaded the development of a highly efficient mobile application built on React Expo, and TailwindCSS, prioritizing user experience and retention through reliable authentication mechanisms",
      "Initiated a company-wide project aimed at reducing the out-patient waiting time in clinics and hospitals.",
    ],
  },
  {
    title: "Web Dev Intern",
    company_name: "Percoyo",
    icon: percoyo,
    iconBg: "white",
    date: "Mar 2023 -  May 2023",
    points: [
      "Developed a comprehensive website from scratch, utilizing HTML, CSS, JS, and Bootstrap for seamless user experience",
      "The website is currently being utilized as a landing page for Sagar Health Seva",
      "Established the benchmarks for the brand design, reflecting consistency and uniqueness across various platforms",
    ],
  },
  {
    title: "Hackathon Organizer",
    company_name: "KSIT",
    icon: sentinal,
    iconBg: "#383E56",
    date: "2022 & 2023 ",
    points: [
      "Served as a Hackathon Organizer for Sentinal Hack 3.0 during 2022 and 2023, overseeing crucial technical components",
      "Managed the infrastructure, ensuring smooth operations and consistent availability throughout the event",
      "Demonstrated creative skills by designing the logo, event posters, enhancing visual appeal and brand recognition",
      "Created engaging digital content for the hackathon, boosting participation and user interaction",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Zain proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Zain does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Zain optimized our website, our traffic increased by 50%. We can't thank him enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Full Stack Web App",
    description:
      "A comprehensive full-stack web application utilizing ReactJS and TailwindCSS, coupled with authentication and messaging from Firebase",
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
    image: fullstack,
    source_code_link: "https://github.com/sza619",
    live_page_link: "https://doctrue-doc-web.vercel.app/",
  },
  {
    name: "Ananya Website",
    description:
      "A fast and fully responsive website which was used for introducing and showcasing our college fest. Built using NextJS.",
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

export { services, experiences, testimonials, projects };
