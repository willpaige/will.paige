// [PROJECT_KEYS.WILLPOWER_FITNESS]: {
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

import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { buildProjectsUrl } from '../../helpers/buildUrl';

const imagePath = '../../images/projects/willpowerfitness/';

export const WILLPOWERFITNESS = {
  title: 'Willpower Fitness',
  subtitle: 'Health & Fitness',
  logo: '',
  url: buildProjectsUrl('willpower-fitness'),
  tags: ['WordPress', 'PHP', 'LESS', 'Html', 'JavaScript', 'jQuery', 'UX/UI', 'SEO'],
  blurb: 'Website design, and development for a devon based gym and fitness center',
  role: 'Designer & Developer',
  hero:
  <StaticImage
    src={`${imagePath}willpower_fitness.png`}
    alt="Sama Health & Well being - branding"
  />,
  thumbnail:
  <StaticImage
    src={`${imagePath}willpower_fitness-thumbnail.png`}
    alt="Sama Health & Well being - branding"
  />,
  brief: {
    title: 'Re-design and re-build of willpowerfitness.co.uk',
    content:
    <>
      <p>
        The original website for willpowerfitness.co.uk was dated, had complicated navigation and didn't allow for any form of fitness session booking or management. It lacked originality, didn't follow brand guidelines and didn't showcase the gym.
      </p>
      <p>
        A new website would allow active users to book and manage gym sessions and reflect the brand image.
      </p>
    </>,
  },
  process:
  <>
    <p>I had several meetings with Will from Willpower Fitness, where we discussed his business needs and wants. We also explored existing solutions and websites that appealed to him.</p>
    <p>From there, I designed the website in PhotoShop and sent him the designs for approval. After approval, I set about building the website in WordPress.</p>
  </>,
  solution:
  <>
    <p>A completely redesigned website, with the use of bold colours to match branding, the use of clear, inspiring photography and a simplified navigation</p>
    <p>For the booking system, I extended and customised an existing WordPress booking plugin and user management plugin.</p>
  </>,
};
