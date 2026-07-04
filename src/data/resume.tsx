import { Icons } from "@/components/icons";
import {
  Briefcase,
  FolderGit2,
  House,
  Mail,
  Trophy,
  User,
} from "lucide-react";
import { Python } from "@/components/ui/svgs/python";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Docker } from "@/components/ui/svgs/docker";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Golang } from "@/components/ui/svgs/golang";
import { Astro } from "@/components/ui/svgs/astro";
import { Java } from "@/components/ui/svgs/java";

const raw = (path: string) =>
  `https://raw.githubusercontent.com/Atharv-16/atharv-portfolio/main/public/${path}`;

const ghImage = (repo: string) =>
  `https://opengraph.githubassets.com/1/Atharv-16/${repo}`;

export const DATA = {
  name: "Atharv Gaur",
  initials: "AG",
  url: "https://atharv-16.github.io/atharv-portfolio",
  location: "India",
  locationLink: "https://www.google.com/maps/place/India",
  description:
    "AI Scientist building at the intersection of generative AI, computer vision, and robotics.",
  summary:
    "I'm an **AI Scientist at Navi** and an Electrical Engineering graduate from **IIT (BHU) Varanasi**. I build production ML systems — GenAI pipelines, credit risk models, local LLM deployments — and robotics stacks with ROS, Jetson, and semantic segmentation.\n\nRecent work spans RAG PDF engines, multi-agent travel planners, autonomous vehicle prototypes, and public-sector robotics projects in railway inspection and embedded navigation.\n\n**Core stack:** Python, C++, PyTorch, TensorFlow, LangChain, ROS, OpenCV.",
  avatarUrl: raw("me.png"),
  ogImage: raw("me.png"),
  sections: {
    about: { order: 1, enabled: true, heading: "About" },
    work: { order: 2, enabled: true, heading: "Experience", presentLabel: "Present" },
    education: { order: 3, enabled: true, heading: "Education" },
    skills: { order: 4, enabled: true, heading: "Skills" },
    projects: {
      order: 5,
      enabled: true,
      label: "Projects",
      heading: "Selected work",
      text: "Open-source and research projects across AI, robotics, and full-stack development.",
    },
    hackathons: {
      order: 6,
      enabled: true,
      label: "Achievements",
      heading: "Achievements",
      text: "Competitions and programs that shaped my journey in ML and autonomous systems.",
    },
    photos: {
      order: 7,
      enabled: false,
      heading: "Photos",
    },
    contact: {
      order: 8,
      enabled: true,
      label: "Contact",
      heading: "Get in touch",
      text: "Open to collaborations, interesting problems, and conversations about AI and robotics. Email or connect on LinkedIn.",
    },
  },
  photos: [],
  skills: [
    { name: "Python", icon: Python },
    { name: "C++", icon: Java },
    { name: "TypeScript", icon: Typescript },
    { name: "PyTorch", icon: Python },
    { name: "TensorFlow", icon: Python },
    { name: "LangChain", icon: Nodejs },
    { name: "LLMs / RAG", icon: Nodejs },
    { name: "Multi-Agent AI", icon: Nodejs },
    { name: "Prompt Engineering", icon: Nodejs },
    { name: "Hugging Face", icon: Python },
    { name: "Gemini API", icon: Nodejs },
    { name: "Vector DBs", icon: Postgresql },
    { name: "vLLM / Ollama", icon: Docker },
    { name: "ROS", icon: Kubernetes },
    { name: "OpenCV", icon: ReactLight },
    { name: "Semantic Segmentation", icon: ReactLight },
    { name: "Docker", icon: Docker },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "React", icon: ReactLight },
    { name: "FastAPI", icon: Python },
    { name: "Git", icon: Astro },
    { name: "Linux", icon: Golang },
  ],
  navbar: [
    { href: "/", icon: House, label: "Home" },
    { href: "#about", icon: User, label: "About" },
    { href: "#work", icon: Briefcase, label: "Work" },
    { href: "#projects", icon: FolderGit2, label: "Projects" },
    { href: "#hackathons", icon: Trophy, label: "Awards" },
    { href: "#contact", icon: Mail, label: "Contact" },
  ],
  contact: {
    email: "atharv.gaur16@gmail.com",
    tel: "+91 900-931-2691",
    social: {
      Portfolio: {
        name: "Portfolio",
        url: "https://atharv-16.github.io/atharv-portfolio",
        icon: Icons.globe,
        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Atharv-16",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/atharv-gaur",
        icon: Icons.linkedin,
        navbar: true,
      },
      Resume: {
        name: "Resume",
        url: "https://drive.google.com/file/d/17IMh-cu58cxF8O04Y_ivK5hhQVjBzfBm/view?usp=drive_link",
        icon: Icons.globe,
        navbar: false,
      },
      email: {
        name: "Email",
        url: "mailto:atharv.gaur16@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Navi",
      href: "https://navi.com",
      badges: ["AI Scientist"],
      location: "India",
      title: "AI Scientist",
      logoUrl: "https://www.google.com/s2/favicons?domain=navi.com&sz=128",
      start: "2025",
      end: undefined,
      description:
        "Built a Generative AI hindsighting pipeline for credit journeys, enhanced ML models for credit risk assessment, and engineered a local LLM deployment service using PyTorch, LangChain, and production ML tooling.",
    },
  ],
  education: [
    {
      school: "IIT (BHU) Varanasi",
      href: "https://iitbhu.ac.in",
      degree: "B.Tech, Electrical Engineering",
      logoUrl: "https://www.google.com/s2/favicons?domain=iitbhu.ac.in&sz=128",
      start: "2021",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "Knowledge Agentic AI (RAG)",
      href: "https://github.com/Atharv-16/Knowledge-Agentic-AI-with-RAG-Advanced-PDF-Query-Engine-",
      dates: "2025",
      active: true,
      description:
        "Advanced PDF query engine with retrieval-augmented generation for document Q&A and agentic workflows.",
      technologies: ["Python", "LangChain", "RAG", "LLM", "FastAPI"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Atharv-16/Knowledge-Agentic-AI-with-RAG-Advanced-PDF-Query-Engine-",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: ghImage("Knowledge-Agentic-AI-with-RAG-Advanced-PDF-Query-Engine-"),
      video: "",
    },
    {
      title: "AI Business Intelligence Agent",
      href: "https://github.com/Atharv-16/AI-Business-Intelligence-Agent-Smart-Dashboards-for-Decision-Making",
      dates: "2025",
      active: true,
      description:
        "Agent-driven dashboards for data analysis, visualization, and decision support using LLM tooling.",
      technologies: ["Python", "Agents", "Dashboards", "ML"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Atharv-16/AI-Business-Intelligence-Agent-Smart-Dashboards-for-Decision-Making",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: ghImage("AI-Business-Intelligence-Agent-Smart-Dashboards-for-Decision-Making"),
      video: "",
    },
    {
      title: "Averera — Autonomous EV",
      href: "https://github.com/Atharv-16/Averera",
      dates: "2023 - 2024",
      active: true,
      description:
        "Self-driving test vehicle with DeepLabv3+ road segmentation, ROS perception pipeline, and Arduino actuation.",
      technologies: ["Python", "ROS", "TensorFlow", "OpenCV", "Arduino"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Atharv-16/Averera",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: raw("projects/averera.jpg"),
      video: "",
    },
    {
      title: "Health Dashboard",
      href: "https://github.com/Atharv-16/Health_Dashboard",
      dates: "2025",
      active: true,
      description:
        "TypeScript health tracking app with wearable data sync, interactive charts, and responsive Material UI.",
      technologies: ["TypeScript", "React", "Vite", "Chart.js"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Atharv-16/Health_Dashboard",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: ghImage("Health_Dashboard"),
      video: "",
    },
    {
      title: "Travel Planner (Multi-Agent)",
      href: "https://github.com/Atharv-16/Travel_Planner",
      dates: "2025",
      active: true,
      description:
        "Multi-agent travel planning system using Gemini and LangChain for itinerary generation and tool use.",
      technologies: ["Python", "LangChain", "Gemini", "Agents"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Atharv-16/Travel_Planner",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: ghImage("Travel_Planner"),
      video: "",
    },
    {
      title: "ArUco Pose Estimation",
      href: "https://github.com/Atharv-16/ArUco-Pose-Estimationn",
      dates: "2023",
      active: false,
      description:
        "Real-time pose estimation pipeline using ArUco markers and OpenCV for robotics applications.",
      technologies: ["Python", "OpenCV", "Computer Vision"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Atharv-16/ArUco-Pose-Estimationn",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: raw("projects/lidar.png"),
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Amazon ML Summer School",
      dates: "2024",
      location: "India",
      description:
        "Selected for Amazon's ML Summer School program focused on advanced machine learning concepts and applications.",
      image: "https://www.google.com/s2/favicons?domain=amazon.com&sz=128",
      win: "Selected",
      links: [],
    },
    {
      title: "Shell Autonomous Programming Challenge",
      dates: "2023",
      location: "International",
      description:
        "Autonomous navigation and programming challenge — ranked 6th internationally and 1st in India.",
      image: "https://www.google.com/s2/favicons?domain=shell.com&sz=128",
      win: "1st in India · 6th International",
      links: [],
    },
    {
      title: "Technex · IIT (BHU)",
      dates: "2022 - 2023",
      location: "Varanasi, India",
      description:
        "Won awards at Technex, one of India's largest technical festivals, and multiple college hackathons.",
      image: "https://www.google.com/s2/favicons?domain=iitbhu.ac.in&sz=128",
      win: "Multiple awards",
      links: [],
    },
  ],
} as const;
