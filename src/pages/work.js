import * as React from 'react';
import App from '../components/app/app';
import Content from '../components/content/content';
import { themeMap } from '../constants/theme';
import { PAGES } from '../constants/pages';
import Timeline from '../components/timeline/timeline';
import HeroText from '../components/hero/heroText/heroText';
import { contentContainer } from '../scss/work.module.scss';
import { WORK } from '../content/work';
import Footer from '../components/footer/footer';
import Grid from '../components/grid/grid/grid';

function WorkPage() {
  return (
    <App theme={themeMap.CAMBRIDGE_BLUE} activePage={PAGES.WORK}>
      <Content className={contentContainer} noHero>
        <Grid fullWidthSm>
          <HeroText justText showDot>
            Work
          </HeroText>
        </Grid>
        <Grid>
          <Timeline content={WORK} />
          <Footer showLanguages={false} showCurrentEmployment={false} />
        </Grid>
      </Content>
    </App>
  );
}

export default WorkPage;

export function Head() {
  return <title>Will Paige employment history</title>;
}
