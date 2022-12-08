import {themeMap} from "./theme";

export const PAGES = {
  HOME: 'home',
  ABOUT: 'about',
  WORK: 'work',
  PROJECTS: 'projects',
  PROJECT: 'project',
  PERFORMANCE: 'performance',
  EDUCATION: 'education',
  SERVICES: 'services',
  CONTACT: 'contact',
};

export const PAGES_PATHS = {
  [PAGES.HOME]: {
    title: 'Home',
    url: '/',
  },
  [PAGES.ABOUT]: {
    title: 'About',
    url: '/about/',
  },
  [PAGES.WORK]: {
    title: 'Work',
    url: '/work/',
  },
  // [PAGES.PROJECTS]: {
  //   title: 'Projects',
  //   url: '/projects/',
  // },
  [PAGES.EDUCATION]: {
    title: 'Education',
    url: '/education/',
  },
};
