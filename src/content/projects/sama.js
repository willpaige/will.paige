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
    title: 'to create a visually appealing and user-friendly platform that reflects the essence of the health and well-being market',
    content:
    <p>The goal of the branding, website design, and development project for SAMA, a health and wellness startup, was to create a visually appealing and user-friendly platform that reflects the essence of the health and well-being market. As the Designer & Developer, my role was to collaborate with Katie, the co-founder of BotanyBlend, to bring this vision to life.</p>,
  },
  process:
    <p>The branding and website design process for SAMA was a collaborative effort between Katie and myself. We spent time carefully considering the colour palette, logo design, and website layout that would best embody the spiritual essence of health and well-being. We utilized rapid prototyping in the browser to explore different layouts and innovative features that would enhance the user experience. As a greenfield project, this also allowed me to experiment with cutting-edge technologies, such as GatsbyJS, to deliver a high-performance website.</p>,
  solution:
  <>
    <p>The final result was a clean, clinical logo that was softened by a muted brush stroke, creating a visually appealing and memorable brand identity. The website was designed with engaging white space, muted colours, and sharp imagery that effectively conveyed the core values and offerings of SAMA.</p>
    <p>Although this project was never commercially launched, its design and performance remain innovative and relevant to this day.</p>
  </>,
};
