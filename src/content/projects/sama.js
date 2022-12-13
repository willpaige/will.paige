import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import samaVideo from '../../video/sama-hero.mp4';
import videoPlaceHolder from "../../images/projects/sama/sama-placeholder.png";
import { buildProjectsUrl } from '../../helpers/buildUrl';

const imagePath = '../../images/projects/sama/';

export const SAMA = {
  title: 'SAMA',
  subtitle: 'Health & Wellbeing',
  logo: '',
  url: buildProjectsUrl('sama'),
  tags: ['React', 'Reduct', 'CSS', 'GatsbyJs', 'JavaScript', 'NodeJs', 'GraphQl', 'UX/UI', 'Branding'],
  blurb: 'Branding, website design, and development of a health and wellbeing startup, Sama.',
  video: {
    src: samaVideo,
    placeholder: videoPlaceHolder,
  },
  role: 'Designer & Developer',
  hero:
  <StaticImage
    src={`${imagePath}sama-logo.png`}
    alt="Sama Health & Well being - branding"
  />,
  brief: {
    title: 'To create a health & wellbeing lifestyle brand and website',
    content:
  <>
    <p>
      SAMA, Sensory Awakening through Mindful Activities, was a potential business pivot from BotanyBlend. After researching and developing a business plan, Katie and Botanyblend realised that to fulfil their business needs, they needed to focus solely on the well being market.
    </p>
    <p>
      To achieve this, we decided that the only real solution was to create a new brand, SAMA, which embodied and reflected the spiritual essence of health and well-being.
    </p>
  </>,
  },
  process:
  <>
    <p>Katie and I worked closely on the branding, colour selection and website design. We explored website layouts and innovative features via rapid prototyping in the browser.</p>
    <p>Since this was a greenfield project, it allowed me to explore new technologies such as GatsbyJs.</p>
  </>,
  solution:
  <>
    <p>The final logo was clean and clinical, with a muted brush stroke behind it to reduce the rigidity. The website was engaging with lots of white space, muted colours and sharp imagery.</p>
    <p>Sadly this project never commercially launched. That said, its performance and design are still innovative and current today.</p>
  </>,
};
