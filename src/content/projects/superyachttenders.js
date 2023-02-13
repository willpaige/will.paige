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
      <p>SYT, a startup in need of a brand identity and website, approached us for a comprehensive branding and web design solution. This project presented a unique opportunity to experiment with new styles and technologies.</p>,
  },
  process:
    <p>I held several meetings with John from SYT, where I delved into his business needs and preferences. I also conducted a thorough analysis of existing solutions and websites that he found appealing. It was evident from the outset that the client desired a contemporary and clean design.</p>,
  solution:
  <>
    <p>The brand logo, designed in Adobe Illustrator, embodies a modern and abstract interpretation of the hull of a boat. The website, characterized by its clean design and ample use of white space, showcases professionally shot images that effectively accentuate the overall quality of the site. </p>
    <p>The design emphasizes the beauty and simplicity of the brand, creating a polished and professional online presence for SYT.</p>
  </>,
};
