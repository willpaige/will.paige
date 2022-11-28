import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import App from '../components/app/app';
import Content from '../components/content/content';
import { themeMap } from '../constants/theme';
import { PAGES } from '../constants/pages';
import { about } from "../content/about";
import Footer from '../components/footer/footer';
import HeroImage from '../components/hero/heroImage/heroImage';
import Title from "../components/title/title";
import { aboutRow, aboutList, aboutListItem, aboutListIcon } from '../scss/about.module.scss'

const renderList = (list) => {
  return (
    <ul className={aboutList}>
      {list.map((item => {
        const { icon, content } = item;

        return (
          <li className={aboutListItem}>
            {icon && (
              <div className={aboutListIcon}>
                {item.icon()}
              </div>
            )}
            {content}
          </li>
        );
      }))}
    </ul>
  );
}

function AboutPage() {
  const image = {
    alt: 'Will Paige Software Engineer',
  };

  return (
    <App theme={themeMap.LAUREL_GREEN} activePage={PAGES.ABOUT}>
      <HeroImage image={image} title="Hi.">
        <StaticImage src="../images/will_paige_software_engineer_madeira.png" alt={image.alt} placeholder="blurred" />
      </HeroImage>
      <Content>
        <div className={aboutRow}>
          {about.ABOUT_ME('36')}
        </div>

        <div className={aboutRow}>
          <Title type={'h2'}>
            What Can I do?
          </Title>
          {renderList(about.WHAT_CAN_I_DO)}
        </div>

        <div className={aboutRow}>
          <Title type={'h2'}>
            What do I know?
          </Title>
          {renderList(about.KNOWLEDGE_OF)}
        </div>
          -- My hobbies
          <br />
          -- My family
          <br />
          -- Where I've lived (timeline?)
          <br />
        <Footer />
      </Content>
    </App>
  );
}

export default AboutPage;

export function Head() {
  return <title>About Will Paige</title>;
}
