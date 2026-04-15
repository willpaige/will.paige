import * as React from 'react';
import Image from 'next/image';
import { buildProjectsUrl } from '../../helpers/buildUrl';

export const SAMA = {
  title: 'SAMA',
  subtitle: 'Health & Wellbeing',
  logo: '',
  url: buildProjectsUrl('sama'),
  tags: ['React', 'Reduct', 'CSS', 'GatsbyJs', 'JavaScript', 'NodeJs', 'GraphQl', 'UX/UI', 'Branding'],
  blurb: 'Branding, website design, and development of a health and wellbeing startup, Sama.',
  video: {
    src: '/video/sama-hero.mp4',
    placeholder: '/images/projects/sama/sama-placeholder.png',
  },
  role: 'Designer & Developer',
  hero:
  <Image
    src="/images/projects/sama/sama-logo.png"
    alt="Sama Health & Well being - branding"
    width={1200}
    height={800}
    style={{width: '100%', height: 'auto'}}
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
