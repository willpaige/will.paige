import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import {MAGICSEAWEED_HOMEPAGE} from "./projects/magicseaweed_homepage";
import {buildProjectsUrl} from "../helpers/buildUrl";
import {SAMA} from "./projects/sama";
import {ROOSTERMONEY} from "./projects/roostermoney";
import {BOTANYBLEND} from "./projects/botanyblend";

const PLACEHOLDER = 'blurred';

export const PROJECT_KEYS = {
  BOTANYBLEND: 'BOTANYBLEND',
  MAGICSEAWEED: 'MAGICSEAWEED',
  ROOSTERMONEY: 'ROOSTERMONEY',
  SAMA: 'SAMA',
  WILLPOWER_FITNESS: 'WILLPOWER_FITNESS',
  SUPER_YACHT_TENDERS: 'SUPER_YACHT_TENDERS',
  KFT_RENEWABLES: 'KFT_RENEWABLES',
};

export const PROJECTS = {
  [PROJECT_KEYS.SAMA]: {
    ...SAMA,
  },
  [PROJECT_KEYS.ROOSTERMONEY]: {
    ...ROOSTERMONEY,
  },
  [PROJECT_KEYS.MAGICSEAWEED]: {
    ...MAGICSEAWEED_HOMEPAGE,
  },
  [PROJECT_KEYS.BOTANYBLEND]: {
    ...BOTANYBLEND,
  },
  // [PROJECT_KEYS.WILLPOWER_FITNESS]: {
  //   title: 'Willpower Fitness',
  //   subtitle: 'Health & Fitness',
  //   logo: '',
  //   url: buildProjectsUrl('willpower-fitness'),
  //   tags: ['WordPress', 'PHP', 'CSS', 'JavaScript', 'jQuery', 'SQL'],
  //   blurb:
  //     <p>Lifestyle and fitness website for a large crossfit gym</p>,
  //   thumbnail:
  //    <StaticImage
  //     src="../images/projects/willpower_fitness.png"
  //     alt="Willpower fitness - Devon"
  //     placeholder={PLACEHOLDER}
  //     loading={'eager'}
  //   />,
  //   hero: '',
  // },
  // [PROJECT_KEYS.SUPER_YACHT_TENDERS]: {
  //   title: 'Super Yacht Tenders',
  //   subtitle: 'Suppliers and agents for super yacht tenders',
  //   logo: '',
  //   url: buildProjectsUrl('super-yacht-tenders'),
  //   tags: ['WordPress', 'PHP', 'CSS', 'JavaScript', 'jQuery', 'SQL'],
  //   blurb: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet elementum nisl.</p>,
  //   thumbnail:
  //    <StaticImage
  //     src="../images/projects/super_yacht_tenders.png"
  //     alt="Super yacht tenders"
  //     placeholder={PLACEHOLDER}
  //     loading={'eager'}
  //   />,
  //   hero: '',
  // },
  // [PROJECT_KEYS.KFT_RENEWABLES]: {
  //   title: 'KFT Renewables',
  //   subtitle: 'Renewable and sustainable plumbing solutions',
  //   logo: '',
  //   url: buildProjectsUrl('kft-renewables'),
  //   tags: [],
  //    blurb: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet elementum nisl.</p>,
  //   thumbnail:
  //    <StaticImage
  //     src="../images/projects/kftrenewables.png"
  //     alt="KFT Renewables"
  //     placeholder={PLACEHOLDER}
  //     loading={'eager'}
  //   />,
  //   hero: '',
  // },
};

console.log(PROJECTS);
