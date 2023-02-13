import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { buildProjectsUrl } from '../../helpers/buildUrl';
import { codeTag } from '../../components/code/code.module.scss'
import Image from "../../components/image/image";

const imagePath = '../../images/projects/roostermoney/';

export const ROOSTERMONEY_PERFORMANCE = {
  title: 'NatWest Rooster Money',
  subtitle: 'Kids pocket money app',
  role: 'Lead Developer',
  logo: '',
  url: buildProjectsUrl('natwest-roostermoney-performance'),
  tags: [
    'WordPress',
    'AWS',
    'CloudFront',
    'PHP',
    'CSS',
    'JavaScript',
    'Performance',
  ],
  blurb: 'WordPress website page performance improvements',
  thumbnail:
  <StaticImage
    src={`${imagePath}roostermoney_page-performance.png`}
    alt="NatWest Rooster Money page performance"
  />,
  hero:
  <StaticImage
    src={`${imagePath}roostermoney_homepage-performance.png`}
    alt="Kids Pocket Money App"
    loading="eager"
  />,
  brief: {
    title: 'INTERACTIVE (TTI) METRICS.',
    content:
  <>
    <p>The original roostermoney.com website was built without considering page performance. It was a quick build that allowed the marketing team to promote the app. With a focus on being 'first-ish to market' the website, layout and functionality were quickly iterated to suit the marketing team's needs.</p>
    <p>This brief was to re-evaluate current functionality and explore modern page loading and page performance practices to improve the TTFP and TTI metrics.</p>
  </>,
  },
  solution:
    <>
      <h4>AWS CloudFront</h4>
      <p>For serverside page caching, we leverage AWS CloudFront to ensure a fast globalised distribution of our pages, features and posts.</p>
      <br />
      <h4>IMGIX</h4>
      <p>NatWest Rooster Money uses IMGIX, a CDN, to serve and deliver highly optimised assets to the front-end</p>
      <Image caption={'New mobile performance test for the NatWest Rooster Money homepage'}>
        <StaticImage src={`${imagePath}roostermoney_performance_mobile.png`} alt={'NatWest Rooster Money mobile website performance'} />
      </Image>
      <h4>Critical CSS</h4>
      <p>All pages have been refactored to allow for 'above the fold' page rendering before to fetching assets and rendering other parts of the page.</p>
      <br />
      <h4>WordPress Cleanup</h4>
      <p>Unnecessary assets and plugins have been de-registered or removed to ensure a limited number of requests when fetching a page.</p>
      <Image caption={'New desktop performance test for the NatWest Rooster Money homepage'}>
        <StaticImage src={`${imagePath}roostermoney_performance_desktop.png`} alt={'NatWest Rooster Money desktop website performance'} />
      </Image>
    </>,
};
