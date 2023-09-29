import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { buildProjectsUrl } from '../../helpers/buildUrl';

const imagePath = '../../images/projects/listinggenie/';

export const LISTINGGENIE_WEBSITE = {
  title: 'ListingGenie',
  subtitle: 'Ai Generated Product Descriptions',
  logo: '',
  url: buildProjectsUrl('listinggenie-website'),
  tags: ['ChatGpt', 'Ai', 'NextJs', 'React', 'Redux', 'CSS', 'JavaScript', 'NodeJs', 'UX/UI', 'Branding'],
  blurb: 'Branding, website design, and development of the website application ListingGenie.',
  thumbnail:
  <StaticImage
    src={`${imagePath}listinggenie-logo.png`}
    alt="NatWest Rooster Money"
  />,
  role: 'Designer & Developer',
  hero:
  <StaticImage
    src={`${imagePath}listinggenie-logo.png`}
    alt="ListingGenie - branding"
  />,
  brief: {
    title: 'To create a user-friendly platform that allows online sellers to generate optimised product titles and descriptions',
    content:
  <p>As a solo project, I set out to build ListingGenie, a web application that generates optimized listing content for e-commerce platforms. The goal was to create a tool that would help sellers increase their sales potential by providing them with optimized titles and descriptions.</p>,
  },
  process:
  <>
    <p>I started by conducting market research to understand the pain points of e-commerce sellers. I then identified the most popular platforms and began working on a solution to generate optimised listings for them.</p>
    <p>I chose Next.js and React as the primary technologies for building the web application due to their efficiency and flexibility. I integrated OpenAI’s GPT-3 API to leverage AI capabilities for generating the listing content.</p>
    <p>The development process involved creating a simple user interface with a form where users could input basic information about their product, which was then fed into the GPT-3 API to generate an optimized listing title and description. The application was also optimized for SEO to increase its visibility and reach.</p>
  </>,
  solution:
  <>
    <p>The result was ListingGenie, a free and user-friendly web application that allows sellers to easily generate optimised listing content for multiple e-commerce platforms.</p>
    <p>The application delivers quick and accurate results by leveraging AI and using a modern technology stack, helping sellers increase their sales potential. </p>
    <p>ListingGenie is built on Next.js and React, and powered by OpenAI's GPT-3 API, making it a cutting-edge solution for e-commerce sellers.</p>
  </>,
};
