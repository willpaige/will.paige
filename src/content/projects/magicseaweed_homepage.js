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
    title: 'To re-design and develop the homepage with an emphasis on performance, engagement and business needs.',
    content:
  <>
    <p>
      MagicSeaweed is a large site with many complex features and products, from forecast charts to featured content
      and images. Content, including paid-for features, photography, videos, and forecasting products, was
      challenging to find and often missed out on hitting page view targets.
    </p>
    <p>
      Time to first paint was slow, and the entire homepage was rendered serverside via smarty before being sent to
      the browser.
    </p>
  </>,
  },
  process:
  <>
    <p>
      At the time, the design and development team at MagicSeaweed was small with two backend developers, one app
      developer and myself as the front-end developer and the designer. This allowed for a progressive approach
      to the overhaul. I worked closely with the CEO and designed the website in the browser. Effectively, rapid
      prototyping layouts and components.
    </p>
    <p>
      This allowed me to experiment with layouts quickly it also allowed me to play with potential layouts on devices
      to ensure they were easy to use and fully functioning.
    </p>
  </>,
  solution:
  <>
    <p>
      A clean layout which uses whitespace to break up key sections. Page sections were designed to fill the view height, allowing the user to focus on one section at a time.
    </p>
    <p>
      Imagery is used to break up text and also drive engagement. Shop advertising was also re-design to appear more
      on brand.
    </p>
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
    <p>
      We implemented &apos;Critical CSS&apos; where content above the fold has its CSS styles inlined in the head.
      Which drastically improves the time to first paint and time to interactive metrics. It also is a significant perceived performance improvement.
    </p>
    <p>
      We only rendered markup, content and images above the fold as the user scrolls the page, the rest loads depending on where the user has scrolled to. This also helped improve the TTFP time and reduced page bloat.
    </p>
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
