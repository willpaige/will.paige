import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { PAGES, PAGES_PATHS } from '../constants/pages';
import samaVideo from '../video/sama-hero.mp4';

// const buildUrl = (slug) => `${PAGES_PATHS[PAGES.PROJECTS].url}${slug}/`;
const PLACEHOLDER = 'blurred';

export const PROJECT_KEYS = {
  BOTANYBLEND: 'BOTANYBLEND',
  SAMA: 'SAMA',
  WILLPOWER_FITNESS: 'WILLPOWER_FITNESS',
  SUPER_YACHT_TENDERS: 'SUPER_YACHT_TENDERS',
  ROOSTER_MONEY: 'ROOSTER_MONEY',
  KFT_RENEWABLES: 'KFT_RENEWABLES',
};

export const PROJECTS = {
  [PROJECT_KEYS.SAMA]: {
    title: 'SAMA',
    subtitle: 'Health & Wellbeing',
    logo: '',
    // url: buildUrl('sama'),
    tags: ['React', 'Reduct', 'CSS', 'GatsbyJs', 'JavaScript', 'NodeJs', 'GraphQl', 'UX/UI'],
    blurb:
      <p>
        Branding, website design, and development of a responsive lifestyle blog for startup Sama.
      </p>,
  // <StaticImage
  //   src="../images/projects/sama_wellbeing_hero.png"
  //   alt="Sama Health & Well being"
  //   placeholder={PLACEHOLDER}
  //   loading={'eager'}
  // />,
    video: {
      src: samaVideo,
      placeholder: '../images/projects/sama_wellbeing_hero.png'
    },
  },
  [PROJECT_KEYS.BOTANYBLEND]: {
    title: 'Botanyblend',
    subtitle: 'Organic Face & Body Oils',
    logo: '',
    // url: buildUrl('botanyblend'),
    tags:
      [
        'UI/UX','WordPress', 'PHP', 'CSS', 'JavaScript', 'jQuery', 'SQL', 'Ecommerce', 'WooCommerce', 'Branding', 'Packaging', 'Print'
    ],
    blurb:
      <p>
        Branding, print, packaging, and website design for Botanyblend an organic face and body oils company based in Devon.
      </p>,
    thumbnail:
    <StaticImage
      src="../images/projects/botanyblend.png"
      alt="Botanyblend organic face & body oils"
      placeholder={PLACEHOLDER}
      loading={'eager'}
    />,
    hero: '',
  },
  [PROJECT_KEYS.WILLPOWER_FITNESS]: {
    title: 'Willpower Fitness',
    subtitle: 'Health & Fitness',
    logo: '',
    // url: buildUrl('willpower-fitness'),
    tags: ['WordPress', 'PHP', 'CSS', 'JavaScript', 'jQuery', 'SQL'],
    blurb:
      <p>Lifestyle and fitness website for a large crossfit gym</p>,
    thumbnail:
     <StaticImage
      src="../images/projects/willpower_fitness.png"
      alt="Willpower fitness - Devon"
      placeholder={PLACEHOLDER}
      loading={'eager'}
    />,
    hero: '',
  },
  [PROJECT_KEYS.SUPER_YACHT_TENDERS]: {
    title: 'Super Yacht Tenders',
    subtitle: 'Suppliers and agents for super yacht tenders',
    logo: '',
    // url: buildUrl('super-yacht-tenders'),
    tags: ['WordPress', 'PHP', 'CSS', 'JavaScript', 'jQuery', 'SQL'],
    blurb: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet elementum nisl.</p>,
    thumbnail:
     <StaticImage
      src="../images/projects/super_yacht_tenders.png"
      alt="Super yacht tenders"
      placeholder={PLACEHOLDER}
      loading={'eager'}
    />,
    hero: '',
  },
  [PROJECT_KEYS.KFT_RENEWABLES]: {
    title: 'KFT Renewables',
    subtitle: 'Renewable and sustainable plumbing solutions',
    logo: '',
    // url: buildUrl('kft-renewables'),
    tags: [],
     blurb: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet elementum nisl.</p>,
    thumbnail:
     <StaticImage
      src="../images/projects/kftrenewables.png"
      alt="KFT Renewables"
      placeholder={PLACEHOLDER}
      loading={'eager'}
    />,
    hero: '',
  },
};
