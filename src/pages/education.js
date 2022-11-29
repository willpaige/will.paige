import * as React from 'react';
import { themeMap } from '../constants/theme';
import { PAGES } from '../constants/pages';
import { EDUCATION } from '../content/education';
import App from '../components/app/app';
import Content from '../components/content/content';
import Footer from '../components/footer/footer';
import Timeline from '../components/timeline/timeline';
import HeroText from '../components/hero/heroText/heroText';
import Grid from '../components/grid/grid/grid';
import { heroTitle } from '../scss/education.module.scss';

function EducationPage() {
  return (
    <App theme={themeMap.OLD_LAVENDER} activePage={PAGES.EDUCATION}>
      <Content noHero>
        <Grid>
          <HeroText className={heroTitle} title="Education" />
          <Timeline content={EDUCATION.TIME_LINE} />
          <Footer showLanguages={false} showCurrentEmployment={false} />
        </Grid>
      </Content>
    </App>
  );
}

export default EducationPage;

export function Head() {
  return <title>Will Paige education history</title>;
}
