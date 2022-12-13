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
        <p>Botanyblend was my wife Katie's award-winning business that she founded. All products were made in-house by my wife and were sold both wholesale and retail.</p>
        <p>Katie has trained in aromatherapy and is also considered a specialist in sensory integration. She started a business selling bespoke, handmade face and body oils.</p>
        <p>The brand, its photography, its packaging and its website were the result of many lengthy evenings by both myself and my wife.</p>
      </>,
  },
};
