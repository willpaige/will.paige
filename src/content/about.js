import * as React from 'react';
import { AiOutlineTablet, AiOutlineTool, AiOutlineLaptop, AiOutlineGoogle, AiOutlinePoundCircle, AiOutlineDashboard, AiOutlineArrowsAlt, AiOutlineBranches, AiOutlineCheck, AiOutlineBgColors, AiOutlineAmazon, AiOutlineSortAscending, AiOutlineTeam, AiOutlineNodeIndex, AiOutlineGithub, AiOutlineFile, AiOutlineCode, AiOutlineBook, AiOutlineDesktop, AiOutlineApi, AiOutlineApartment, AiOutlineBug, AiOutlineEdit } from 'react-icons/ai';
import {Link} from "gatsby";

export const about = {
  ABOUT_ME: (age) => (
    <>
      <p className={'lead'}>
        My name is <b>Will Paige</b>, I'm a {age}-year-old <b>software engineer</b> living and working in
        South Devon, UK.
      </p>
      <p>
        I'm primarily focused on front-end web and app development and have progressed my career from a product design and engineering education at Bournemouth University to a senior software engineer at NatWest. My career trajectory has given me a unique skill set that allows me to have a rich UI/UX centered approach to programming and development.
      </p>
      <p>
        Interested in learning more about my history? please navigate to my{' '}
        <Link to={'/work/'}>work</Link>{' '}
        and{' '}
        <Link to={'/work/'}>education</Link>{' '}
        pages.
      </p>
    </>
  ),
  WHAT_CAN_I_DO: [
    {
      icon: AiOutlineDesktop,
      content:
        <span>
          Build{' '}
          <strong>performant, cross-browser, device-friendly, responsive and accessible</strong> websites
        </span>,
    }, {
      icon: AiOutlineTablet,
      content:
        <span>
          Build{' '}
          <b>iOS and Android apps</b> in either <b>Cordova or React Native</b>
        </span>,
    }, {
      icon: AiOutlineCode,
      content:
        <span>
          Write lean, clean, scalable code in{' '}
          <b>JavaScript, PHP, CSS and HTML</b>
        </span>,
    }, {
      icon: AiOutlineBgColors,
      content:
        <span>Create web and device-friendly <b>animations</b> in CSS, SVGs and JavaScript</span>,
    }, {
      icon: AiOutlineApartment,
      content:
        <span>Design bespoke <b>content architecture</b> to be delivered by either Contenful or WordPress content management systems</span>,
    }, {
      icon: AiOutlineBug,
      content:
        <span>Write efficient <b>unit tests</b> to validate code and prevent potential bugs</span>,
    }, {
      icon: AiOutlineFile,
      content:
        <span>Write detailed <b>product briefs</b> that identify business impact, risk, success and project scope</span>,
    }, {
      icon: AiOutlineGithub,
      content:
        <span>Write custom <b>build scripts</b> using Webpack and GitHub actions</span>,
    }, {
      icon: AiOutlineNodeIndex,
      content:
        <span>Successfully <b>run product releases</b></span>,
    }, {
      icon: AiOutlineTeam,
      content:
        <span>Work in <b>agile</b> teams practising <b>SCRUM</b> product management</span>,
    }, {
      icon: AiOutlineBook,
      content:
        <span>Generate legible <b>project tickets</b> and <b>user journeys</b></span>
    }, {
      icon: AiOutlineSortAscending,
      content:
        <span>Conform to <b>coding standards</b></span>,
    }, {
      icon: AiOutlineAmazon,
      content:
        <span>Monitor and configure applications and services in <b>AWS Cloud Computing</b></span>,
    }, {
      icon: AiOutlineApi,
      content: <span>Design and build <b>bespoke API services</b> in JavaScript and PHP</span>,
    }, {
      icon: AiOutlineBgColors,
      content:
        <span><b>Design</b> clean user-friendly websites and interfaces</span>,
    }, {
      icon: AiOutlineCheck,
      content: <span>Analyse <b>website SEO</b> and create successful strategies to improve search engine positioning</span>,
    }, {
      icon: AiOutlineEdit,
      content: <span><b>Branding</b> and <b>print</b> design</span>,
    },
  ],
  KNOWLEDGE_OF: [
    {
      icon: AiOutlineDashboard,
      content: "Front End Website Performance, including critical CSS and the critical path",
    }, {
      icon: AiOutlineArrowsAlt,
      content: "Responsive Web Design",
    }, {
      icon: AiOutlineGithub,
      content: "GitHub Actions",
    }, {
      icon: AiOutlineGoogle,
      content: 'Google tools and metrics, including analytics, ads and site performance'
    }, {
      icon: AiOutlineBranches,
      content: "Git hooks and branching strategies",
    }, {
      icon: AiOutlineCode,
      content: "Linux command line",
    }, {
      icon: AiOutlineLaptop,
      content: 'Netlify, GatsbyJs Cloud and Plesk hosting applications and tools'
    }, {
      icon: AiOutlineTablet,
      content: 'Client and serverside A/B (CRO) Testing',
    }, {
      icon: AiOutlineAmazon,
      content: "AWS Cloud Computing, including CDK, S3, Cloudwatch, Cloudfront, X-ray, Elastic Container Service and App Config",
    }, {
      icon: AiOutlinePoundCircle,
      content: "Finance and banking-related compliance",
    }, {
      icon: AiOutlineTool,
      content: "Atlassian products, including Jira and Confluence",
    }, {
      icon: AiOutlineBgColors,
      content: "Adobe products, including Photoshop, Illustrator and Indesign"
    },
  ],
};
