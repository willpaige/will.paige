'use client';

import React from 'react';
import { useDispatch } from 'react-redux';
import App from '../../src/components/app/app';
import Content from '../../src/components/content/content';
import { themeMap } from '../../src/constants/theme';
import { PAGES } from '../../src/constants/pages';
import { WORK } from '../../src/content/work';
import { setActivePage } from '../../src/state/navigation/navigation-action';
import Timeline from '../../src/components/timeline/timeline';
import Footer from '../../src/components/footer/footer';
import Grid from '../../src/components/grid/grid/grid';
import HeroText from '../../src/components/hero/heroText/heroText';
import { contentContainer } from '../../src/scss/work.module.scss';

export default function WorkPage() {
  const dispatch = useDispatch();
  dispatch(setActivePage(PAGES.WORK));

  return (
    <App theme={themeMap.THEME_5}>
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
