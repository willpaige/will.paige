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
    title: 'Reduce the need for development work and improve the ability for marketing and editorial to create bespoke page templates',
    content:
  <>
    <p>
      Previously, new pages would be designed and built without considering re-usability or brand consistency. There was a lot of CSS and JavaScript bloat from code duplication.
    </p>
    <p>
      On most occasions, If marketing needed a new feature or wanted to edit content, a developer would need to be there to hand-hold.
    </p>
    <p>
      As well as this, the old homepage was slow, lacked usability on mobile and was not accessible. It also didn&apos;t allow for the potential addition of new marketing material around new features and products.
    </p>
  </>,
  },
  process:
    <>
      <p>Knowing the limitations of WordPress, we had to explore potential solutions and pre-built plugins that would allow me to design and categorise content manageable components.</p>
      <p>We also knew that the right solution would benefit the business and the development department.</p>
    </>,
  solution:
    <>
      <p>
        We already used ACF (Advanced Custom Fields) across the website, and it works well for extending the capabilities of WordPress. It allows for easy customisation of content and makes the content highly manageable.
      </p>
      <p>
        By using ACF and extending its functionality using the plugin <a href={"https://acf-component-field.gummi.io/"} className={codeTag}>acf-component-field</a> we could build out <span className={codeTag}>PHP</span> based components. It also allowed us to categorise them easily and drag and drop them into a page template, feature or blog post.
      </p>
      <Image caption="CTAs and banners, complete with dynamic tracking can easily be placed any where in a document" fullWidth>
        <StaticImage
          src={`${imagePath}roostermoney_cta.png`}
          alt="NatWest Rooster Money"
        />
      </Image>
      <p>
        From this, we were also able to build 'components within components', meaning that from a development perspective, we were only ever designing and building a re-usable component once.
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
      <p>
        As well as this, we were able to extend it further and identify components where the content only ever needs to be updated once and not on a page-by-page basis. Modularising components like this was a big win for the business and marketing time since you can add a component to a template and not need to add any content. We were effectively creating a single source of truth re-usable component.
      </p>
      <Image caption="A global re-usuable component, update it here and automatically update all instances" fullWidth>
        <StaticImage
          src={`${imagePath}roostermoney_grc.png`}
          alt="NatWest Rooster Money Global Re-usable Components"
        />
      </Image>
    </>,
};
