import * as React from 'react';
import App from '../components/app/app';
import Content from '../components/content/content';
import { themeMap } from '../constants/theme';
import { PAGES } from '../constants/pages';
import Footer from '../components/footer/footer';
import Timeline from '../components/timeline/timeline';
import HeroText from '../components/hero/heroText/heroText';
import { heroTitle } from '../scss/education.module.scss';

const content = [
  {
    key: 'bournemouth',
    letter: 'B',
    title: 'Bournemouth University / Uk',
    subTitle: '2005 - 2009',
    copy: <p>2:2 | Product design (bSc Hons)</p>,
  }, {
    key: 'toulouse',
    letter: 'T',
    title: 'Toulouse International School / France',
    subTitle: '2001 - 2005',
    copy: <p>29 POINTS | International Baccalaureate</p>,
  }, {
    key: 'ivybridge',
    letter: 'I',
    title: 'Ivybridge Community College / Uk',
    subTitle: '1992 - 2001',
    copy: <p>Multiple GCSE's</p>,
  },
];

function AboutPage() {
  return (
    <App theme={themeMap.OLD_LAVENDER} activePage={PAGES.EDUCATION}>
      <Content noHero>
        <HeroText className={heroTitle} title="Education" />
        <Timeline content={content} />
        <Footer showLanguages={false} showCurrentEmployment={false} />
      </Content>
    </App>
  );
}

export default AboutPage;

export function Head() {
  return <title>Will Paige education history</title>;
}
