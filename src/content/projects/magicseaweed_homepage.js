import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { buildProjectsUrl } from '../../helpers/buildUrl';
import ScreenScroll from '../../components/screenScroll/screenScroll';
import Image from '../../components/image/image';

const imageUrl = '../../images/projects/magicseaweed/';

export const MAGICSEAWEED_HOMEPAGE = {
  title: 'MagicSeaweed',
  subtitle: 'World leading surf forecasters',
  url: buildProjectsUrl('magicseaweed'),
  logo: '',
  tags: [
    'UI/UX', 'PHP', 'CSS', 'JavaScript', 'jQuery', 'Smarty', 'Page Performance',
  ],
  role: 'Lead Designer & Developer',
  brief: {
    title: 'TO IMPROVE THE PERFORMANCE, ENGAGEMENT, AND BUSINESS NEEDS OF THE HOMEPAGE',
    content:
  <>
    <p>MagicSeaweed is a large online platform that provides a range of complex features and products, including forecast charts, featured content, and images. However, it was challenging for users to find the content they were looking for, resulting in a lack of engagement and missed opportunities for the business</p>
    <p>Time to first paint was slow, and the entire homepage was rendered serverside via smarty before being sent to the browser.</p>
  </>,
  },
  process:
    <p>As a small design and development team, we took a progressive approach to the re-design of the MagicSeaweed homepage. I, as the front-end developer and designer, worked closely with the CEO to rapidly prototype layouts and components directly in the browser. This allowed for quick experimentation with layouts and ensured their functionality and ease of use on various devices.</p>,
  solution:
  <>
    <p>The final design of the homepage features a clean layout that utilizes white space to break up key sections. Page sections were designed to fill the entire view height, allowing users to focus on one section at a time.</p>
    <p>Engagement was further enhanced through the use of well-placed imagery. Additionally, the advertising section was re-designed to align more closely with the brand.</p>
    <ScreenScroll
      desktop={(
        <StaticImage
          src={`${imageUrl}magicseaweed_full_screen.png`}
          alt="MagicSeaweed homepage"
        />
        )}
      mobile={(
        <StaticImage
          src={`${imageUrl}magicseaweed_mobile.png`}
          alt="MagicSeaweed homepage"
        />
        )}
    />
    <p>To improve the performance of the homepage, we implemented 'Critical CSS' that inlined the styles for content above the fold in the head, significantly reducing the time to first paint and time to interactive metrics.</p>
    <p>Furthermore, only the markup, content, and images above the fold were rendered, with the rest loading as the user scrolls. This improved the time to first paint and reduced page bloat, resulting in a better overall user experience.</p>
  </>,
  blurb: "Re-design and development of MagicSeaweed's home page",
  thumbnail:
  <StaticImage
    src={`${imageUrl}magicseaweed.png`}
    alt="Magicseaweed global surf forecasters"
    loading="eager"
  />,
  hero:
  <Image>
    <StaticImage
      src={`${imageUrl}magicseaweed_logo.png`}
      alt="MagicSeaweed Logo"
    />
  </Image>,
};
