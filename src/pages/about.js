import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import App from '../components/app/app';
import Content from '../components/content/content';
import { themeMap } from '../constants/theme';
import { PAGES } from '../constants/pages';
import { about } from '../content/about';
import { setActivePage } from '../state/navigation/navigation-action';
import Title from '../components/title/title';
import CurrentEmployment from '../components/currentEmployment/currentEmployment';
import Languages from '../components/languages/languages';
import Hero from '../components/hero/hero';
import HeroText from '../components/hero/heroText/heroText';
import FooterSmall from '../components/footerSmall/footerSmall';
import HeroImage from '../components/hero/heroImage/heroImage';
import Grid from '../components/grid/grid/grid';
import {
  aboutList,
  aboutListIcon,
  aboutListItem,
  aboutRow,
  firstRow,
  heroImage,
  noMarginBottom,
} from '../scss/about.module.scss';
import Image from '../components/image/image';
import { SEO } from '../components/seo/seo';

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

const getAge = () => {
  const today = new Date();
  const birthDate = new Date('1986/09/11');
  const age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

function AboutPage({ dispatch }) {
  dispatch(setActivePage(PAGES.ABOUT));

  const image = {
    alt: 'Will Paige Software Engineer',
  };
  const firstRowClass = classnames(aboutRow, firstRow);

  return (
    <App theme={themeMap.THEME_2} activePage={PAGES.ABOUT}>
      <Grid removeRightPadding fullWidthSm>
        <Hero textTopSm>
          <HeroImage hasOverlayText className={heroImage} image={image} title="Hi.">
            <StaticImage
              src="../images/about/will_paige_software_engineer_madeira.png"
              alt={image.alt}
              placeholder="blurred"
            />
            <HeroText className={noMarginBottom} justText gutterSm overlayImage showDot>
              Hi
            </HeroText>
          </HeroImage>
        </Hero>
      </Grid>
      <Content>
        <Grid>
          <div className={firstRowClass}>
            <Title type="h2">
              Who am I?
            </Title>
            {about.ABOUT_ME(getAge())}
          </div>

          <Image caption="A summer's evening biking somewhere on Dartmoor, Uk circa 2022">
            <StaticImage
              width={930}
              src="../images/about/will_paige_software_engineer_mtb.png"
              alt="Will Paige software engineer mtb"
              placeholder="blurred"
              loading="lazy"
            />
          </Image>

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

          <Image caption="A moody winters morning surfing on Bantham beach, Uk circa 2019">
            <StaticImage
              width={930}
              src="../images/about/will_paige_software_engineer_surfer.png"
              alt="Will Paige software engineer surfing"
              placeholder="blurred"
              loading="lazy"
            />
          </Image>

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

          <Image caption="A winter in Morzine, France circa 2012">
            <StaticImage
              width={930}
              src="../images/about/will_paige_software_engineer_snowboard.png"
              alt="Will Paige software engineer snowboard"
              placeholder="blurred"
              loading="lazy"
            />
          </Image>
          <FooterSmall />
        </Grid>
      </Content>
    </App>
  );
}

AboutPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(AboutPage);

export function Head() {
  return <SEO title="About" />;
}
