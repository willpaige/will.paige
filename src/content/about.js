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
      <p>For a detailed overview on my background please see:</p>
      <ul>
        <li><Link to={'/work/'}>Work</Link></li>
        <li><Link to={'/education/'}>Education</Link></li>
      </ul>
    </>
  ),
  WHAT_CAN_I_DO: [
    {
      icon: AiOutlineDesktop,
      content:
        <span>
          Build{' '}
          <strong>performant, cross-browser, device-friendly, responsive and accesible</strong> websites
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
          Write lean, clean scalable code in{' '}
          <b>JavaScript, PHP, CSS and HTML</b>
        </span>,
    }, {
      icon: AiOutlineBgColors,
      content: "Create web and device friendly animations in CSS, SVGs and JavaScript",
    }, {
      icon: AiOutlineApartment,
      content: "Design bespoke content architecture to be delivered by either Contenful or WordPress content management systems",
    }, {
      icon: AiOutlineBug,
      content: "Write efficient unit tests to validate code and prevent potential bugs",
    }, {
      icon: AiOutlineFile,
      content: "Write detailed product briefs that clearly identify business impact, risk, success and project scope",
    }, {
      icon: AiOutlineGithub,
      content: "Write custom build scripts using Webpack and GitHub actions",
    }, {
      icon: AiOutlineNodeIndex,
      content: "Successfully run product releases",
    }, {
      icon: AiOutlineTeam,
      content: "Work in agile teams practising SCRUM product management",
    }, {
      icon: AiOutlineBook,
      content: "Generate legible project tickets and user journeys"
    }, {
      icon: AiOutlineSortAscending,
      content: "Conform to company coding standards",
    }, {
      icon: AiOutlineAmazon,
      content: "Monitor and configure, applications and services in AWS Cloud Computing",
    }, {
      icon: AiOutlineApi,
      content: "Access and program alongside bespoke api services"
    }, {
      icon: AiOutlineBgColors,
      content: "Design clean user friendly websites and interfaces",
    }, {
      icon: AiOutlineCheck,
      content: "Analyse website SEO and create succesful strategies to improve search engine positioning"
    }, {
      icon: AiOutlineEdit,
      content: "Branding and print design",
    },
  ],
  KNOWLEDGE_OF: [
    {
      icon: AiOutlineDashboard,
      content: "Front End Website Performance including critical CSS and the critical path",
    }, {
      icon: AiOutlineArrowsAlt,
      content: "Responsive Web Design",
    }, {
      icon: AiOutlineGithub,
      content: "Github Actions",
    }, {
      icon: AiOutlineGoogle,
      content: 'Google tools and metrics including analytics, ads and site performance'
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
      content: "AWS Cloud Computing [CDK, S3, Cloudwatch, Cloudfront, X-ray, Elastic Container Service, App Config]",
    }, {
      icon: AiOutlinePoundCircle,
      content: "Finance and banking related compliance",
    }, {
      icon: AiOutlineTool,
      content: "Atlassian products including Jira and Confluence",
    }, {
      icon: AiOutlineBgColors,
      content: "Adobe products including Photoshop, Illustrator and Indesign"
    },
  ],
};
