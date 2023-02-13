import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { buildProjectsUrl } from '../../helpers/buildUrl';
// import { codeTag } from '../../components/code/code.module.scss'
// import Image from "../../components/image/image";

const imagePath = '../../images/projects/botanyblend/';

export const BOTANYBLEND = {
  title: 'Botanyblend',
  subtitle: 'Organic Face & Body Oils',
  role: 'Brand Designer, Packaging Designer, Photographer, Website Designer And Developer',
  logo: '',
  url: buildProjectsUrl('botanyblend'),
  tags: [
    'UI/UX',
    'Photography',
    'WordPress',
    'PHP',
    'CSS',
    'JavaScript',
    'jQuery',
    'SQL',
    'Ecommerce',
    'WooCommerce',
    'Branding',
    'Packaging',
    'Print',
  ],
  blurb: 'Branding, print, packaging, and website design for Botanyblend an organic face and body oils company based in Devon.',
  thumbnail:
  <StaticImage
    src={`${imagePath}botanyblend-vega.png`}
    alt="Botanyblend organic face & body oils"
  />,
  hero:
  <StaticImage
    src={`${imagePath}botanyblend_logo.png`}
    alt="Kids Pocket Money App"
    loading="eager"
  />,
  brief: {
    content:
      <>
        <p>Botanyblend, founded by my wife Katie, is an award-winning business that specializes in bespoke, handmade face and body oils. With a background in aromatherapy and expertise in sensory integration, Katie meticulously crafted each product in-house for both wholesale and retail distribution.</p>
      </>,
  },
};
