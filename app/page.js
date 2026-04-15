'use client';

import React from 'react';
import { useDispatch } from 'react-redux';
import App from '../src/components/app/app';
import Content from '../src/components/content/content';
import { themeMap } from '../src/constants/theme';
import { PAGES } from '../src/constants/pages';
import { home } from '../src/content/home';
import HeroIndex from '../src/components/hero/heroIndex/heroIndex';
import Grid from '../src/components/grid/grid/grid';
import { setActivePage } from '../src/state/navigation/navigation-action';
import Footer from '../src/components/footer/footer';

export default function IndexPage() {
  const dispatch = useDispatch();
  dispatch(setActivePage(PAGES.HOME));

  return (
    <App theme={themeMap.THEME_1}>
      <Grid removeRightPadding fullWidthSm>
        <HeroIndex />
      </Grid>
      <Content>
        <Grid>
          {home.CONTENT}
          <Footer />
        </Grid>
      </Content>
    </App>
  );
}
