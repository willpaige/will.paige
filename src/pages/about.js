import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import App from '../components/app/app';
import Content from '../components/content/content';
import { themeMap } from '../constants/theme';
import { PAGES } from '../constants/pages';
import Footer from '../components/footer/footer';
import HeroImage from '../components/hero/heroImage/heroImage';

function AboutPage() {
  const image = {
    alt: 'Will Paige Software Engineer',
  };

  return (
    <App theme={themeMap.LAUREL_GREEN} activePage={PAGES.ABOUT}>
      <HeroImage image={image} title="Hi.">
        <StaticImage src="../images/will_paige_software_engineer_mtb.png" alt={image.alt} placeholder="blurred" />
      </HeroImage>
      <Content>
        <Footer />
      </Content>
    </App>
  );
}

export default AboutPage;

export function Head() {
  return <title>About Will Paige</title>;
}
