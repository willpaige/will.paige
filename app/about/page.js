'use client';

import React from 'react';
import Image from 'next/image';
import classnames from 'classnames';
import { useDispatch } from 'react-redux';
import App from '../../src/components/app/app';
import Content from '../../src/components/content/content';
import { themeMap } from '../../src/constants/theme';
import { PAGES } from '../../src/constants/pages';
import { about } from '../../src/content/about';
import { setActivePage } from '../../src/state/navigation/navigation-action';
import Title from '../../src/components/title/title';
import CurrentEmployment from '../../src/components/currentEmployment/currentEmployment';
import Languages from '../../src/components/languages/languages';
import Hero from '../../src/components/hero/hero';
import HeroText from '../../src/components/hero/heroText/heroText';
import FooterSmall from '../../src/components/footerSmall/footerSmall';
import HeroImage from '../../src/components/hero/heroImage/heroImage';
import Grid from '../../src/components/grid/grid/grid';
import {
  aboutList,
  aboutListIcon,
  aboutListItem,
  aboutRow,
  firstRow,
  heroImage,
  noMarginBottom,
} from '../../src/scss/about.module.scss';
import ImageWrapper from '../../src/components/image/image';

const renderList = (list) => {
  return (
    <ul className={aboutList}>
      {list.map((item => {
        const { icon, content } = item;

        return (
          <li className={aboutListItem} key={content}>
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
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

export default function AboutPage() {
  const dispatch = useDispatch();
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
            <Image
              src="/images/about/will_paige_software_engineer_madeira.png"
              alt={image.alt}
              width={800}
              height={1000}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
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

          <ImageWrapper caption="A summer's evening biking somewhere on Dartmoor, Uk circa 2022">
            <Image
              width={930}
              height={620}
              src="/images/about/will_paige_software_engineer_mtb.png"
              alt="Will Paige software engineer mtb"
              style={{ width: '100%', height: 'auto' }}
            />
          </ImageWrapper>

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

          <ImageWrapper caption="A moody winters morning surfing on Bantham beach, Uk circa 2019">
            <Image
              width={930}
              height={620}
              src="/images/about/will_paige_software_engineer_surfer.png"
              alt="Will Paige software engineer surfing"
              style={{ width: '100%', height: 'auto' }}
            />
          </ImageWrapper>

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

          <ImageWrapper caption="A winter in Morzine, France circa 2012">
            <Image
              width={930}
              height={620}
              src="/images/about/will_paige_software_engineer_snowboard.png"
              alt="Will Paige software engineer snowboard"
              style={{ width: '100%', height: 'auto' }}
            />
          </ImageWrapper>
          <FooterSmall />
        </Grid>
      </Content>
    </App>
  );
}
