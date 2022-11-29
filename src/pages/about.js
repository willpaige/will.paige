import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import classnames from 'classnames';
import App from '../components/app/app';
import Content from '../components/content/content';
import { themeMap } from '../constants/theme';
import { PAGES } from '../constants/pages';
import { about } from '../content/about';
import HeroImage from '../components/hero/heroImage/heroImage';
import Title from '../components/title/title';
import CurrentEmployment from '../components/currentEmployment/currentEmployment';
import Languages from '../components/languages/languages';
import FooterSmall from '../components/footerSmall/footerSmall';
import {
  aboutRow, aboutList, aboutListItem, aboutListIcon, firstRow, aboutImage, aboutImageCaption, aboutImageContainer
} from '../scss/about.module.scss';
import Grid from "../components/grid/grid/grid";

const renderImage = (image, caption) => {
  return (
    <div className={aboutImageContainer}>
      {image}
      <p className={aboutImageCaption}>
        {caption}
      </p>
    </div>
  );
};

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
};

function AboutPage() {
  const image = {
    alt: 'Will Paige Software Engineer',
  };
  const firstRowClass = classnames(aboutRow, firstRow);

  return (
    <App theme={themeMap.LAUREL_GREEN} activePage={PAGES.ABOUT}>
      <Grid>
        <HeroImage image={image} title="Hi.">
          <StaticImage src="../images/will_paige_software_engineer_madeira.png" alt={image.alt} placeholder="blurred" />
        </HeroImage>
      </Grid>
      <Content>
        <Grid>
          <div className={firstRowClass}>
            <Title type="h2">
              Who am I?
            </Title>
            {about.ABOUT_ME('36')}
          </div>

          {renderImage(
            <StaticImage
              width={930}
              className={aboutImage}
              src="../images/will_paige_software_engineer_mtb.png"
              alt="Will Paige software engineer mtb"
              placeHolder="blurred"
              loading="lazy"
            />,
            "A summer's evening biking somewhere on Dartmoor, Uk circa 2022",
          )}

          <div className={aboutRow}>
            <Title type="h2">
              What languages do I work with?
            </Title>
            <Languages />
          </div>

          <div className={aboutRow}>
            <Title type="h2">
              What Can I do?
            </Title>
            {renderList(about.WHAT_CAN_I_DO)}
          </div>

          {renderImage(
            <StaticImage
              width={930}
              className={aboutImage}
              src="../images/will_paige_software_engineer_surfer.png"
              alt="Will Paige software engineer surfing"
              placeHolder="blurred"
              loading="lazy"
            />,
            "A moody winters morning surfing on Bantham beach, Uk circa 2019",
          )}

          <div className={aboutRow}>
            <Title type="h2">
              What do I know?
            </Title>
            {renderList(about.KNOWLEDGE_OF)}
          </div>

          <div className={aboutRow}>
            <Title type="h2">
              Where am I working?
            </Title>
            <CurrentEmployment />
          </div>

          {renderImage(
            <StaticImage
              width={930}
              className={aboutImage}
              src="../images/will_paige_software_engineer_snowboard.png"
              alt="Will Paige software engineer snowboard"
              placeHolder="blurred"
              loading="lazy"
            />,
            "A winter in Morzine, France circa 2012",
          )}
          <FooterSmall />
        </Grid>
      </Content>
    </App>
  );
}

export default AboutPage;

export function Head() {
  return <title>About Will Paige</title>;
}
