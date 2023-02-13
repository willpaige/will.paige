import * as React from 'react';
import {
  AiOutlineAmazon,
  AiOutlineApartment,
  AiOutlineApi,
  AiOutlineArrowsAlt, AiOutlineAudit,
  AiOutlineBgColors,
  AiOutlineBook,
  AiOutlineBranches,
  AiOutlineBug,
  AiOutlineCheck,
  AiOutlineCode,
  AiOutlineDashboard,
  AiOutlineDesktop,
  AiOutlineEdit, AiOutlineExperiment,
  AiOutlineFile, AiOutlineFontSize,
  AiOutlineGithub,
  AiOutlineGoogle, AiOutlineHeart,
  AiOutlineLaptop, AiOutlineLock, AiOutlineMonitor,
  AiOutlineNodeIndex,
  AiOutlinePoundCircle,
  AiOutlineSortAscending,
  AiOutlineTablet,
  AiOutlineTeam,
  AiOutlineTool, AiOutlineTranslation,
} from 'react-icons/ai';
import { Link } from 'gatsby';

export const about = {
  ABOUT_ME: (age) => (
    <>
      <p>
        My name is
        {' '}
        <b>Will Paige</b>
        , and I&apos;m a
        {' '}
        {age}
        -year-old
        {' '}
        <b>software engineer</b>
        {' '}
        based in South Devon, UK.
      </p>
      <p>
        My expertise lies in front-end web and app development, and I've been fortunate enough to grow my career from product design and engineering to become a Senior Software Engineer at NatWest.
      </p>
      <p>
        Throughout my career, I've developed a unique skill set that allows me to approach website and mobile app development with a rich, user-centered perspective. I believe that the key to creating successful and impactful technology lies in understanding the needs and goals of the end-user.
      </p>
      <p>
        I'm proud of my career journey so far, and I can't wait to see what the future holds.
      </p>
      <p>
        Interested in learning more about my history? Please navigate to my
        {' '}
        <Link to="/work/">work</Link>
        {' '}
        and
        {' '}
        <Link to="/work/">education</Link>
        {' '}
        pages.
      </p>
    </>
  ),
  WHAT_CAN_I_DO: [
    {
      icon: AiOutlineDesktop,
      content:
  <span>
    Develop
    {' '}
    <strong>performant, cross-browser, device-friendly, responsive and accessible</strong>
    {' '}
    websites
  </span>,
    }, {
      icon: AiOutlineTablet,
      content:
  <span>
    Create
    {' '}
    <b>iOS and Android applications</b>
    {' '}
    using
    {' '}
    <b>Cordova or React Native</b>
  </span>,
    }, {
      icon: AiOutlineCode,
      content:
  <span>
    Write efficient, scalable, and well-structured code in a variety of programming languages, including
    {' '}
    <b>JavaScript, TypeScript, PHP, CSS and HTML</b>
  </span>,
    }, {
      icon: AiOutlineBgColors,
      content:
  <span>
    Create web and device-friendly
    {' '}
    <b>animations</b>
    {' '}
    in CSS, SVGs and JavaScript
  </span>,
    }, {
      icon: AiOutlineApartment,
      content:
  <span>
    Plan and implement a
    {' '}
    <b>content architecture</b>
    {' '}
    that leverages either Contenful or WordPress content management systems.
  </span>,
    }, {
      icon: AiOutlineBug,
      content:
  <span>
    Validate code and prevent potential bugs by writing effective
    {' '}
    <b>unit tests</b>
  </span>,
    }, {
      icon: AiOutlineFile,
      content:
  <span>
    Draft comprehensive
    {' '}
    <b>product briefs</b>
    {' '}
    that consider the business impact, risk, potential for success, and project scope.
  </span>,
    }, {
      icon: AiOutlineGithub,
      content:
  <span>
    Automate
    {' '}
    <b>build processes</b>
    {' '}
    using custom scripts built with Webpack and GitHub Actions.
  </span>,
    }, {
      icon: AiOutlineDashboard,
      content:
  <span>
    <b>Optimize website speed and performance</b>
    {' '}
    to improve user experience and reduce bounce rates.
  </span>,
    }, {
      icon: AiOutlineMonitor,
      content:
  <span>
    Provide ongoing
    {' '}
    <b>maintenance and support</b>
    {' '}
    for websites and applications.
  </span>,
    },{
      icon: AiOutlineHeart,
      content:
  <span>
    <b>Troubleshoot and debug</b>
    {' '}
    issues
  </span>,
    }, {
      icon: AiOutlineNodeIndex,
      content:
  <span>
    Manage
    {' '}
    <b>product releases effectively.</b>
  </span>,
    }, {
      icon: AiOutlineAudit,
      content:
  <span>
    <b>Participate in code reviews</b>
    {' '}
    to ensure high-quality, maintainable code.
  </span>,
    }, {
      icon: AiOutlineFontSize,
      content:
  <span>
    <b>Document code, processes</b>
    {' '}
    and decision-making for future reference and collaboration.
  </span>,
    }, {
      icon: AiOutlineTeam,
      content:
  <span>
    Work within an
    {' '}
    <b>Agile development environment</b>
    {' '}
    following the principles of
    {' '}
    <b>SCRUM</b>
    {' '}
    product management
  </span>,
    }, {
      icon: AiOutlineBook,
      content:
  <span>
    Document
    {' '}
    <b>projects and user journeys</b>
    {' '}
    in a clear and concise manner.
  </span>,
    }, {
      icon: AiOutlineSortAscending,
      content:
  <span>
    Adhere to established
    {' '}
    <b>coding standards</b>
  </span>,
    }, {
      icon: AiOutlineAmazon,
      content:
  <span>
    Manage and configure applications and services in the
    {' '}
    <b>AWS Cloud Computing environment.</b>
  </span>,
    }, {
      icon: AiOutlineLock,
      content:
  <span>
    Implement security measures to
    {' '}
    <b>protect sensitive data</b>
    {' '}
    and
    {' '}
    <b>prevent potential security breaches</b>
  </span>,
    }, {
      icon: AiOutlineApi,
      content:
  <span>
    Design and build
    {' '}
    <b>custom API services</b>
    {' '}
    using JavaScript and PHP.
  </span>,
    }, {
      icon: AiOutlineTeam,
      content:
  <span>
    <b>Collaborate with other teams</b>
    {' '}
    such as UX designers, to ensure a cohesive and user-centered design.
  </span>,
    }, {
      icon: AiOutlineBgColors,
      content:
  <span>
    Create
    <b>user-friendly websites and interfaces</b>
    {' '}
    with a clean design.
  </span>,
    }, {
      icon: AiOutlineCheck,
      content:
  <span>
    Analyze website
    {' '}
    <b>SEO</b>
    {' '}
    and implement strategies to improve search engine rankings.
  </span>,
    }, {
      icon: AiOutlineEdit,
      content:
  <span>
    Provide
    <b>Branding</b>
    {' '}
    and
    {' '}
    <b>print</b>
    {' '}
    design services
  </span>,
    },
  ],
  KNOWLEDGE_OF: [
    {
      icon: AiOutlineDashboard,
      content: 'Front End Website Performance, including critical CSS and the critical path',
    }, {
      icon: AiOutlineArrowsAlt,
      content: 'Responsive Web Design',
    }, {
      icon: AiOutlineCheck,
      content: 'Cross-browser compatibility testing and debugging.',
    }, {
      icon: AiOutlineBug,
      content: 'CSS preprocessors such as Sass or Less',
    }, {
      icon: AiOutlineTranslation,
      content: 'Accessibility guidelines',
    }, {
      icon: AiOutlineTool,
      content: 'Front-end frameworks and libraries such as React and BackBone.js',
    }, {
      icon: AiOutlineApi,
      content: 'HTTP protocols &amp; RESTful APIs',
    }, {
      icon: AiOutlineGithub,
      content: 'GitHub Actions',
    }, {
      icon: AiOutlineGoogle,
      content: 'Google tools and metrics, including analytics, ads and site performance',
    }, {
      icon: AiOutlineBranches,
      content: 'Git hooks and branching strategies',
    }, {
      icon: AiOutlineCode,
      content: 'Linux command line',
    }, {
      icon: AiOutlineLaptop,
      content: 'Netlify, GatsbyJs Cloud and Plesk hosting applications and tools',
    }, {
      icon: AiOutlineTablet,
      content: 'Client and serverside A/B (CRO) Testing',
    }, {
      icon: AiOutlineAmazon,
      content: 'AWS Cloud Computing, including CDK, S3, Cloudwatch, Cloudfront, X-ray, Elastic Container Service and App Config',
    }, {
      icon: AiOutlinePoundCircle,
      content: 'Finance and banking-related compliance',
    }, {
      icon: AiOutlineTool,
      content: 'Atlassian products, including Jira and Confluence',
    }, {
      icon: AiOutlineBgColors,
      content: 'Adobe products, including Photoshop, Illustrator and Indesign',
    },
  ],
};
