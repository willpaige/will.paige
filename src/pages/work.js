import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import App from '../components/app/app';
import Content from '../components/content/content';
import { themeMap } from '../constants/theme';
import { PAGES } from '../constants/pages';
import Katie from '../components/katie/katie';
import Timeline from '../components/timeline/timeline';
import HeroText from '../components/hero/heroText/heroText';
import { contentContainer } from '../scss/work.module.scss';

const content = [
  {
    key: 'nwrm',
    image:
  <StaticImage
    width={66}
    height={66}
    src="../images/natwest_rooster_money.png"
    alt="NatWest Rooster Money"
    placeholder="blurred"
  />,
    title: 'NatWest Rooster Money',
    subTitle: 'Senior Software Engineer',
    meta: {
      date: 'Nov 2018 - Current',
      title: 'Banking, Finance / Insurance, Fintech',
    },
    tags: [
      'React',
      'Redux',
      'NodeJS',
      'WordPress',
      'HTML5',
      'Typescript',
      'Sass',
      'UnitTesting',
      'ExpressJS',
      'Sass',
      'Webpack',
      'CSS3',
      'JavaScript',
      'Backbone.js',
      'Accessibility',
    ],
    copy:
  <>
    <p>
      Senior Software developer for the worlds leading kids pocket money app NatWest Rooster Money.
    </p>
    <p>
      Roostermoney is a fast-paced, fast-growing <b>fintech</b> that aims to teach kids the value of money.
      Aimed at 4 to 14-year-olds Roostermoney helps graduate children through all the key milestones in
      learning about money. From using us as a star chart in the younger years teaching reward systems, to
      introducing a payment card when they&apos;re older to teach responsible spending.
    </p>
    <p>Key Responsibilities</p>
    <ul>
      <li>
        Technical lead on all web facing services including RoosterMoneys
        product marketing WordPress site
        {' '}
        <a href="https://roostermoney.com/">roostermoney.com/</a>
      </li>
      <li>iOs and Android development for the Roostermoney App</li>
      <li>Website Performance benchmarking and improvements</li>
      <li>Integration and E2E testing</li>
      <li>CRO testing through google optimise</li>
      <li>Manage app, backend services, and website releases</li>
      <li>Aid and assist other team members with issues and ideas</li>
      <li>Review and signoff on example maps and new product development</li>
      <li>Example map ticket breakdown and generation</li>
      <li>Story point estimating through sprint poker</li>
      <li>Jira sprint planning and ticket prioritising</li>
      <li>Research and discuss new frontend technological trends</li>
      <li>Compliance &amp; fraud training</li>
      <li>Standup captain</li>
    </ul>
  </>,
  }, {
    key: 'msw',
    image:
  <StaticImage
    width={66}
    height={66}
    src="../images/magicseaweed.png"
    alt="MagicSeaweed"
    placeholder="blurred"
  />,
    title: 'MagicSeaweed / Surfline',
    subTitle: 'Senior Frontend Developer',
    meta: {
      date: 'Nov 2013 - Oct 2018 | 5 Years',
      title: 'eCommerce, Leisure, Media / Publishing, Travel & Tourism, Fashion',
    },
    tags: [
      'HTML5', 'Less', 'CSS3', 'JavaScript', 'Backbone.js', 'PHP',
    ],
    copy:
  <>
    <p>
      Senior frontend developer for one of the world’s leading surf forecasting sites. Working
      within a small fast paced AGILE development team thats continually iterating and deploying new
      forecasting tools to over a million users daily.
    </p>
    <p>Key Responsibilities</p>
    <ul>
      <li>Manage frontend developers and team designer on product development</li>
      <li>Lead developer and designer of new products</li>
      <li>Lead designer for App (iOs & Android) products</li>
      <li>Primary timescale Estimator</li>
      <li>Product Management</li>
      <li>Liaise with product owners and lead product discussions</li>
      <li>Research and implement new front-end technologies</li>
      <li>Analyse Front end performance and benchmarking</li>
      <li>Mobile first development</li>
      <li>Sign off on final QA’s</li>
      <li>Write efficient, lean, performant code with supporting tests and documentation.</li>
      <li>Participate in SCRUM & stand up discussions</li>
    </ul>
  </>,
  }, {
    key: 'tc',
    image:
  <StaticImage
    width={66}
    height={66}
    src="../images/toucan_graphic_design.png"
    alt="Toucan Design Ltd"
    placeholder="blurred"
  />,
    title: 'Toucan Graphic Design Ltd',
    subTitle: 'Digital Developer',
    meta: {
      date: 'Mar 2012 - May 2013 | 14 Months',
      title: 'Technology, Agency, Client Facing',
    },
    tags: [
      'CMS', 'HTML5', 'CSS3', 'UX/UI',
    ],
    copy:
  <p>Front end web development, UX/UI web design, cross browser testing and email marketing.</p>,
  }, {
    key: 'pd',
    title: 'Paige-Designs',
    subTitle: 'Website Designer / Developer',
    letter: 'P',
    meta: {
      date: 'Oct 2010 - Mar 2012 | 17 Months',
      title: 'Freelance / Contract',
    },
    tags: [
      'Wordpress', 'CMS', 'HTML5', 'Less', 'CSS3', 'Print design', 'UX/UI',
    ],
    copy:
  <p>Freelance website and graphic design across a variety of industries</p>,
  }, {
    key: 'wh',
    title: 'Westhill Studios Ltd',
    subTitle: 'Graphic Designer',
    letter: 'W',
    meta: {
      date: 'Apr 2010 - Oct 2010 | 6 Months',
    },
    tags: [
      'Graphic design', 'Print design', 'Web design', 'Print', 'UX/UI',
    ],
    copy:
  <p>Graphic and web design</p>,
  },
];

function AboutPage() {
  return (
    <App theme={themeMap.CAMBRIDGE_BLUE} activePage={PAGES.WORK}>
        <Content className={contentContainer} noHero>
        <HeroText title="Work" />
        <Timeline content={content} />
        <Katie />
      </Content>
    </App>
  );
}

export default AboutPage;

export function Head() {
  return <title>Will Paige employment history</title>;
}
