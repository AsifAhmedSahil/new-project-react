const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
  {
    id: 5,
    name: "Skills",
    type: "terminal",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  { id: "finder", name: "Portfolio", icon: "finder.png", canOpen: true },
  { id: "safari", name: "Articles", icon: "safari.png", canOpen: true },
  { id: "photos", name: "Gallery", icon: "photos.png", canOpen: true },
  { id: "contact", name: "Contact", icon: "contact.png", canOpen: true },
  { id: "terminal", name: "Skills", icon: "terminal.png", canOpen: true },
  { id: "linkedin", name: "Linkedin", icon: "linkedin.png", canOpen: true },
  { id: "resume", name: "Resume", icon: "pdf.png", canOpen: true },
  { id: "wallpaper", name: "Wallpaper", icon: "wallpaper.png", canOpen: true },
  { id: "finder", name: "Projects", icon: "projects.png", canOpen: true },
  { id: "leetcode", name: "Leetcode", icon: "leetcode.webp", canOpen: true },
  { id: "github", name: "Github", icon: "github.png", canOpen: true },
  { id: "trash", name: "Archive", icon: "trash.png", canOpen: false },
]


const blogPosts = [
  {
    id: 1,
    date: "Sep 2, 2025",
    title:
      "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
    image: "/images/blog1.png",
    link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "The Ultimate Guide to Mastering Three.js for 3D Development",
    image: "/images/blog2.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
  },
  {
    id: 3,
    date: "Aug 15, 2025",
    title: "The Ultimate Guide to Mastering GSAP Animations",
    image: "/images/blog3.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "javaScript", "TypeScript","redux"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Sass", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "NestJS", "Hono"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/AsifAhmedSahil",
  },
  {
    id: 2,
    text: "Platform",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "https://jsmastery.com/",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/jsmasterypro",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/asif-ahmed-sahil/",
  },
];

const photosLinks = [
  { id: 1, icon: "/icons/gicon1.svg", title: "Library" },
  { id: 2, icon: "/icons/gicon2.svg", title: "Memories" },
  { id: 3, icon: "/icons/file.svg", title: "Places" },
  { id: 4, icon: "/icons/gicon4.svg", title: "People" },
  { id: 5, icon: "/icons/gicon5.svg", title: "Favorites" },
];

const allImages = [
  { id: 1, img: "/images/gal1.jpg",name:"Rising Star Award - 2025" },
  { id: 2, img: "/images/gal2.jpg",name:"Programming Hero Event - HeroUnion 2025" },
  { id: 3, img: "/images/gal3.jpg" ,name:"Programming Hero Event - HeroUnion 2025"},
  { id: 4, img: "/images/gal4.jpeg",name:"Champion EDU Inter University Hackhathon - 2023" },
  { id: 5, img: "/images/gal5.jpg",name:"Books - My Dopamine" },
  { id: 6, img: "/images/gal6.jpg" ,name:"Refreshment - Enjoy with beloved one's"},
  { id: 7, img: "/images/gal7.jpg" ,name:"Rakib Bhai - Mentor Programming Hero"},
  { id: 8, img: "/images/gal8.jpg" ,name:"Beach - refreshment 2024"},
  { id: 9, img: "/images/gal9.jpg" ,name:"River View - 2023"},
  { id: 10, img: "/images/gal10.jpg" ,name: "EDU Library - The Last Exam Preparation"},
];

// আলাদা tab অনুযায়ী assign
const galleryByTab = {
  1: allImages, // Library → সব ছবি
  2: allImages.slice(0, 2), // Memories → প্রথম 2
  3: allImages.slice(2, 4), // Places → 3,4
  4: allImages.slice(4, 7), // People → 5,6,7
  5: allImages.slice(7),    // Favorites → 8,9,10
};


export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  galleryByTab,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Fortune Arena - Turf Booking Platform",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Fortune Arena.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            `The Sports Facility Booking Platform is designed to facilitate the booking of various sports facilities. Users can browse available facilities, check availability, and make bookings through a modern, intuitive interface. The platform supports both users and administrators with dedicated dashboards for managing bookings and facility details. Key features include secure authentication, real-time availability checking, and payment integration.
            Features
Landing Page: Overview of the platform, featured facilities, and booking guidance.
User Dashboard: Manage bookings, view details, and cancel if needed.
Admin Dashboard: Manage facilities, bookings, and users, with options to add or remove admin accounts.
Login/Registration: Secure login and registration with optional social media integration.
About Us Page: Information about the organization and team.
Contact Us Page: Contact form, office location, and contact details.
Facility Listing Page: Search and filter facilities with detailed cards.
Facility Details Page: In-depth information about specific facilities.
Booking Page: Check availability, select a date, and complete bookings with payment integration.
Error Pages: Custom 404 and unauthorized access error pages.`,
          ],
        },
        {
          id: 2,
          name: "fortune-arena.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://fortune-sports.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "fortune-arena.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-1.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://fortune-sports.vercel.app/",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Chat-Genie AI Chatbot",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "Chat-Genie AI Chatbot.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "This is a simple AI-powered chat application where users can interact with an AI model. It simulates a conversation interface where customers can send messages, and the AI responds accordingly. This project uses the Gemini API for AI responses (you can replace it with the OpenAI API or mock backend for AI responses).",
          ],
        },
        {
          id: 2,
          name: "Chat-Genie.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://chat-genieai.vercel.app/",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "Chat-Genie.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-2.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://chat-genieai.vercel.app/",
          position: "top-60 left-5",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "ProjecTrak-agile-project-management SaaS",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "ProjecTrak-agile-project-management SaaS.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "ProjecTrak is a full-stack Agile project management application designed to help teams effectively manage tasks, plan sprints, and track project progress with real-time collaboration. Built with the latest technologies like Next.js, React, Tailwind CSS, and more, it’s optimized for Agile workflows.ProjecTrak is a full-stack Agile project management application designed to help teams effectively manage tasks, plan sprints, and track project progress with real-time collaboration. Built with the latest technologies like Next.js, React, Tailwind CSS, and more, it’s optimized for Agile workflows.",
          ],
        },
        {
          id: 2,
          name: "project-trak.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://project-trak.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "project-trak.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://project-trak.vercel.app/",
          position: "top-60 right-20",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/gal8.jpg",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/gal8.jpg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/gal6.jpg",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/gal6.jpg",
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: "/images/gal10.jpg",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/gal10.jpg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Engineer Behind the Code",
      // image: "/images/adrian.jpg",
      description: [
        "Hey! I’m Sahil 👋, a Software Engineer who loves creating sleek, interactive websites that actually work smoothly.I specialize in JavaScript, React, and Next.js—and I enjoy building experiences that feel fast, intuitive, and just a little delightful.I care about clean UI, thoughtful UX, and writing code that’s easy to read, maintain, and debug.When I’m not coding, you might catch me tweaking layouts at 2AM, sipping too much coffee, or obsessively exploring new tech and gadgets 😅",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: {
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  contact: {
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  resume: {
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  safari: {
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  photos: {
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  leetcode: {
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  github: {
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  linkedin: {
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  terminal: {
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  txtfile: {
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  imgfile: {
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  wallpaper: {
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
};


export { INITIAL_Z_INDEX, WINDOW_CONFIG };