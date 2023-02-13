import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { buildProjectsUrl } from '../../helpers/buildUrl';

const imagePath = '../../images/projects/willpowerfitness/';

export const WILLPOWERFITNESS = {
  title: 'Willpower Fitness',
  subtitle: 'Health & Fitness',
  logo: '',
  url: buildProjectsUrl('willpower-fitness'),
  tags: ['WordPress', 'PHP', 'LESS', 'Html', 'JavaScript', 'jQuery', 'UX/UI', 'SEO', 'SQL'],
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
    title: 'Re-design and Re-build of willpowerfitness.co.uk',
    content:
    <>
      <p>The original website of willpowerfitness.co.uk was outdated with complicated navigation, lacking the ability to book and manage gym sessions, not reflective of the brand image and not showcasing the gym facilities.</p>
      <p>The goal was to create a new website that would enable users to book and manage gym sessions, align with the brand image, and showcase the gym facilities effectively.</p>
    </>,
  },
  process:
    <p>I conducted several meetings with Will from Willpower Fitness to understand his business needs and preferences. I presented him with design ideas and websites that he liked, and I created a design in Photoshop that was approved by Will. After approval, I built the website using WordPress.</p>,
  solution:
    <p>A custom-designed website with a bold color scheme aligned with the brand guidelines, clear and inspiring photography, and a simplified navigation structure. A booking system was integrated into the website using a customised WordPress booking plugin and user management plugin to allow for seamless booking and management of gym sessions.</p>,
};
