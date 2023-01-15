import { MAGICSEAWEED_HOMEPAGE } from './projects/magicseaweed_homepage';
import { SAMA } from './projects/sama';
import { ROOSTERMONEY } from './projects/roostermoney';
import { BOTANYBLEND } from './projects/botanyblend';
import { WILLPOWERFITNESS } from './projects/willpowerfitness';
import { SUPERYACHTTENDERS } from './projects/superyachttenders';
import { ROOSTERMONEY_PERFORMANCE } from './projects/roostermoneyPerformance';

export const PROJECT_KEYS = {
  BOTANYBLEND: 'BOTANYBLEND',
  MAGICSEAWEED: 'MAGICSEAWEED',
  ROOSTERMONEY_PERFORMANCE: 'ROOSTERMONEY_PERFORMANCE',
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
  [PROJECT_KEYS.ROOSTERMONEY_PERFORMANCE]: {
    ...ROOSTERMONEY_PERFORMANCE,
  },
  [PROJECT_KEYS.BOTANYBLEND]: {
    ...BOTANYBLEND,
  },
  [PROJECT_KEYS.WILLPOWER_FITNESS]: {
    ...WILLPOWERFITNESS,
  },
  [PROJECT_KEYS.SUPER_YACHT_TENDERS]: {
    ...SUPERYACHTTENDERS,
  },
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
