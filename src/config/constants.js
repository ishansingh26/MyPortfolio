import {
  FaAddressBook,
  FaBriefcase,
  FaFolderOpen,
  FaGithub,
  FaHouse,
  FaLinkedin,
  FaUser,
} from "react-icons/fa6";
import { route } from "./route";

export const labels = {
  myName: "ISHAN SINGH",
  pages: {
    home: "HOME",
    aboutMe: "ABOUT ME",
    experience: "PROFESSIONAL EXPERIENCE",
    projects: "PROJECTS",
    contact: "CONTACT",
  },
};

export const titleMap = {
  [route.home]: labels.pages.home,
  [route.about]: labels.pages.aboutMe,
  [route.experience]: labels.pages.experience,
  [route.projects]: labels.pages.projects,
  [route.contact]: labels.pages.contact,
};

export const navBarData = [
  {
    id: 1,
    icon: <FaHouse />,
    list: "HOME",
    path: route.home,
    linkClass: "navbar-link",
  },
  {
    id: 2,
    icon: <FaUser />,
    list: "ABOUT",
    path: route.about,
    linkClass: `navbar-link`,
  },
  {
    id: 3,
    icon: <FaBriefcase />,
    list: "EXPERIENCE",
    path: route.experience,
    linkClass: `navbar-link`,
  },
  {
    id: 4,
    icon: <FaFolderOpen />,
    list: "PROJECTS",
    path: route.projects,
    linkClass: "navbar-link",
  },
  {
    id: 5,
    icon: <FaAddressBook />,
    list: "CONTACT",
    path: route.contact,
    linkClass: "navbar-link",
  },
];

export const homeIcons = [
  {
    id: 1,
    icon: <FaLinkedin className="react-icons home-icons" />,
    link: "http://linkedin.com/in/ishan26singh",
  },
  {
    id: 2,
    icon: <FaGithub className="react-icons home-icons" />,
    link: "https://github.com/ishansingh26",
  },
];
