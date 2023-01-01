import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { buildProjectsUrl } from '../../helpers/buildUrl';

const imagePath = '../../images/projects/superyachttenders/';

export const SUPERYACHTTENDERS = {
  title: 'Super Yacht Tenders',
  subtitle: 'Suppliers and agents for super yacht tenders',
  logo: '',
  url: buildProjectsUrl('superyachttenders'),
  tags: ['Branding', 'WordPress', 'PHP', 'LESS', 'Html', 'JavaScript', 'jQuery', 'UX/UI', 'SEO', 'SQL'],
  blurb: 'Branding and website development for a super yacht tenders brokerage',
  role: 'Designer & Developer',
  hero: '',
  thumbnail:
  <StaticImage
    src={`${imagePath}super_yacht_tenders.png`}
    alt="Sama Health & Well being - branding"
  />,
  brief: {
    title: 'To create a brand logo, and to design and develop a brochure website',
    content:
    <>
      <p>
        SYT were a relatively new startup that didn't have a brand or a website. This project was a blank canvas, that allowed for the exploration of new styles and technology.
      </p>
    </>,
  },
  process:
  <>
    <p>I had several meetings with John from SYT, where we discussed his business needs and wants. We also explored existing solutions and websites that appealed to him.</p>
    <p>It was clear from the get go that that client wanted something contempory and clean.</p>
  </>,
  solution:
  <>
    <p>The logo, was designed in illustrator as an abstract representation of the hull of a boat.</p>
    <p>The website, is clean, and uses white space to make the imagery pop. Professionally shot images really help add to the quality of the website.</p>
  </>,
};
