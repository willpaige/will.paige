import * as React from 'react';
import Image from 'next/image';
import { buildProjectsUrl } from '../../helpers/buildUrl';
import { codeTag } from '../../components/code/code.module.scss'
import ImageWrapper from "../../components/image/image";

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
  <Image
    src="/images/projects/roostermoney/roostermoney_page-performance.png"
    alt="NatWest Rooster Money page performance"
    width={600}
    height={400}
    style={{width: '100%', height: 'auto'}}
  />,
  hero:
  <Image
    src="/images/projects/roostermoney/roostermoney_homepage-performance.png"
    alt="Kids Pocket Money App"
    width={1200}
    height={800}
    style={{width: '100%', height: 'auto'}}
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
      <ImageWrapper caption={'New mobile performance test for the NatWest Rooster Money homepage'}>
        <Image src="/images/projects/roostermoney/roostermoney_performance_mobile.png" alt={'NatWest Rooster Money mobile website performance'} width={800} height={600} style={{width: '100%', height: 'auto'}} />
      </ImageWrapper>
      <h4>Critical CSS</h4>
      <p>All pages have been refactored to allow for 'above the fold' page rendering before to fetching assets and rendering other parts of the page.</p>
      <br />
      <h4>WordPress Cleanup</h4>
      <p>Unnecessary assets and plugins have been de-registered or removed to ensure a limited number of requests when fetching a page.</p>
      <ImageWrapper caption={'New desktop performance test for the NatWest Rooster Money homepage'}>
        <Image src="/images/projects/roostermoney/roostermoney_performance_desktop.png" alt={'NatWest Rooster Money desktop website performance'} width={800} height={600} style={{width: '100%', height: 'auto'}} />
      </ImageWrapper>
    </>,
};
