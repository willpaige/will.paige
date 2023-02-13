import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { buildProjectsUrl } from '../../helpers/buildUrl';
import { codeTag } from '../../components/code/code.module.scss'
import Image from "../../components/image/image";

const imagePath = '../../images/projects/roostermoney/';

export const ROOSTERMONEY = {
  title: 'NatWest Rooster Money',
  subtitle: 'Kids pocket money app',
  role: 'Lead Developer',
  logo: '',
  url: buildProjectsUrl('natwest-roostermoney'),
  tags: [
    'WordPress',
    'PHP',
    'CSS',
    'JavaScript',
    'jQuery',
    'Advanced Custom Components',
  ],
  blurb: 'Modularising marketing components and homepage re-build',
  thumbnail:
  <StaticImage
    src={`${imagePath}natwest_rooster_money-logo.png`}
    alt="NatWest Rooster Money"
  />,
  hero:
  <StaticImage
    src={`${imagePath}roostermoney_homepage.png`}
    alt="Kids Pocket Money App"
    loading="eager"
  />,
  brief: {
    title: 'REDESIGN THE WEBSITE TO IMPROVE MARKETING AND EDITORIAL CAPABILITIES',
    content:
      <p>The previous website design had several limitations, including a slow homepage, poor mobile usability, and accessibility issues. Additionally, the development team was overburdened with repetitive tasks, and marketing and editorial needed developer support to create new pages or make content updates.</p>,
  },
  process:
    <>
      <p>To address these issues, a comprehensive solution was needed to streamline the development process and empower marketing and editorial teams to make content updates without relying on developers.</p>
      <p>To achieve this, we explored potential solutions and pre-built plugins for WordPress. Our goal was to find a solution that would benefit both the business and the development department.</p>
    </>,
  solution:
    <>
      <p>We leveraged the power of Advanced Custom Fields (ACF) to extend the capabilities of WordPress. ACF provided an easy way to customize content and make it highly manageable.</p>
      <p>To further extend ACF's functionality, we used the plugin <a href={"https://acf-component-field.gummi.io/"} className={codeTag}>acf-component-field</a>  This allowed us to build PHP-based components, categorize them, and add them to page templates, features, or blog posts using a drag-and-drop interface.</p>
      <Image caption="CTAs and banners, complete with dynamic tracking can easily be placed any where in a document" fullWidth>
        <StaticImage
          src={`${imagePath}roostermoney_cta.png`}
          alt="NatWest Rooster Money"
        />
      </Image>
      <p>
        By modularizing components, we were able to design and build re-usable components only once, reducing the need for repetitive development work. Moreover, by categorizing components, we could identify content that only needed to be updated once and not on a page-by-page basis.
      </p>
      <Image caption="A list of components that can be placed in any template or page" fullWidth>
        <StaticImage
          src={`${imagePath}roostermoney_acf.png`}
          alt="NatWest Rooster Money and advanced custom fields"
        />
      </Image>

      <Image caption="A component can have any number of fields relating to a design" fullWidth>
        <StaticImage
          src={`${imagePath}roostermoney_acf_2.png`}
          alt="NatWest Rooster Money Global Re-usable Components"
        />
      </Image>
      <p>This effectively created a single source of truth for re-usable components, freeing up time for the marketing team and streamlining the development process.</p>
      <Image caption="A global re-usuable component, update it here and automatically update all instances" fullWidth>
        <StaticImage
          src={`${imagePath}roostermoney_grc.png`}
          alt="NatWest Rooster Money Global Re-usable Components"
        />
      </Image>
    </>,
};
