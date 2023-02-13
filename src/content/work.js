import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const AVATAR_WIDTH = 72;
const PLACEHOLDER = 'blurred';

export const WORK = [
  {
    key: 'nwrm',
    image:
  <StaticImage
    quality={100}
    width={AVATAR_WIDTH}
    height={AVATAR_WIDTH}
    src="../images/work/natwest_rooster_money.png"
    alt="NatWest Rooster Money"
    placeholder={PLACEHOLDER}
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
      As a Senior Software Developer for NatWest Rooster Money, the world's leading kids' pocket money app, I bring a wealth of technical expertise and experience to this fast-paced, fast-growing fintech. Our goal is to empower the next generation with financial literacy and independence, and our app is specifically designed to help children learn the value of money through a range of key milestones. From using us as a star chart to teach reward systems, to introducing a payment card for responsible spending, we're dedicated to guiding children through every step of their financial journey.
    </p>
    <p>As the Technical Lead for all web-facing services, including the Rooster Money product marketing website and the iOS and Android apps, I'm responsible for a range of key tasks, including:</p>
    <ul>
      <li>Collaborating with cross-functional teams to ensure seamless integration of software with other systems and technologies</li>
      <li>Actively seeking out new technologies and methodologies to improve the performance, scalability, and security of our products</li>
      <li>Integration and end-to-end testing</li>
      <li>Troubleshooting and fixing technical issues in a timely and effective manner</li>
      <li>Staying up-to-date with industry trends and advancements to maintain our competitive edge</li>
      <li>Participating in code reviews to ensure quality and maintain standards</li>
      <li>Contributing to the creation of technical documentation, such as user guides and system manuals</li>
      <li>Conversion rate optimization testing through Google Optimize</li>
      <li>Ensuring that all development activities are in compliance with security and data privacy regulations.</li>
      <li>Managing app, backend services, and website releases</li>
      <li>Assisting other team members with issues and ideas</li>
      <li>Reviewing and signing off on wireframes and new product development</li>
      <li>Generating wireframe ticket breakdowns</li>
      <li>Estimating story points through sprint poker</li>
      <li>Planning Jira sprints and prioritizing tickets</li>
      <li>Researching and discussing new front-end technological trends</li>
      <li>Receiving compliance and fraud training</li>
      <li>Acting as the Standup Captain</li>
    </ul>
    <p>I'm committed to driving innovation and excellence in every aspect of my work, and I'm always looking for new opportunities to grow and contribute to the success of NatWest Rooster Money.</p>
  </>,
  }, {
    key: 'msw',
    image:
  <StaticImage
    quality={100}
    width={AVATAR_WIDTH}
    height={AVATAR_WIDTH}
    src="../images/work/magicseaweed.png"
    alt="MagicSeaweed"
    placeholder={PLACEHOLDER}
    loading="lazy"
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
    <p>As a Senior Front-end Developer for one of the world's leading surf forecasting sites, I play a crucial role in ensuring that our platform continues to deliver an exceptional user experience. Working within a small and agile development team, I am responsible for managing and leading a team of front-end developers and designers to bring new forecasting tools to over a million users daily.</p>
    <p>Key Responsibilities</p>
    <ul>
      <li>Managing and leading the front-end development team to deliver high-quality products</li>
      <li>Being the lead developer and designer for new products and updates to our platform</li>
      <li>Overseeing the design and development of our iOS and Android mobile apps</li>
      <li>Estimating project timelines and managing product development schedules</li>
      <li>Collaborating with product owners to shape product discussions and decisions</li>
      <li>Researching and implementing cutting-edge front-end technologies to enhance the user experience</li>
      <li>Analyzing and benchmarking front-end performance to continuously improve our platform</li>
      <li>Focusing on mobile-first development to ensure seamless experiences across devices</li>
      <li>Signing off on final quality assurance tests and ensuring that code is efficient, lean, and performant</li>
      <li>Participating in daily scrum and stand-up discussions to stay up-to-date with team progress and provide input and guidance.</li>
    </ul>
  </>,
  }, {
    key: 'tc',
    image:
  <StaticImage
    quality={100}
    width={AVATAR_WIDTH}
    height={AVATAR_WIDTH}
    src="../images/work/toucan_graphic_design.png"
    alt="Toucan Design Ltd"
    placeholder={PLACEHOLDER}
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
  }, {
    key: 'craftwood',
    title: 'Craftwood Interiors',
    subTitle: 'Student/Placement Furniture Designer',
    image:
  <StaticImage
    quality={100}
    width={AVATAR_WIDTH}
    height={AVATAR_WIDTH}
    src="../images/work/craftwood_interiors.png"
    alt="MagicSeaweed"
    placeholder={PLACEHOLDER}
  />,
    meta: {
      date: 'Sep 2007 - Aug 2008 | 12 Months',
    },
    tags: [
      'Interior Design', 'CAD', 'Industrial Design', 'Furniture Design',
    ],
    copy: <p>Graphic and web design</p>,
  },
];
