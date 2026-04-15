'use client';

import React from 'react';
import { useDispatch } from 'react-redux';
import { themeMap } from '../../src/constants/theme';
import { PAGES } from '../../src/constants/pages';
import { EDUCATION } from '../../src/content/education';
import App from '../../src/components/app/app';
import Content from '../../src/components/content/content';
import Footer from '../../src/components/footer/footer';
import Timeline from '../../src/components/timeline/timeline';
import HeroText from '../../src/components/hero/heroText/heroText';
import Grid from '../../src/components/grid/grid/grid';
import { setActivePage } from '../../src/state/navigation/navigation-action';

export default function EducationPage() {
  const dispatch = useDispatch();
  dispatch(setActivePage(PAGES.EDUCATION));

  return (
    <App theme={themeMap.THEME_3}>
      <Content noHero>
        <Grid fullWidthSm>
          <HeroText smallTitle justText showDot>
            Education
          </HeroText>
        </Grid>
        <Grid>
          <Timeline content={EDUCATION.TIME_LINE} />
          <Footer showLanguages={false} showCurrentEmployment={false} />
        </Grid>
      </Content>
    </App>
  );
}
