import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import App from '../components/app/app';
import Content from '../components/content/content';
import Footer from '../components/footer/footer';
import { themeMap } from '../constants/theme';
import { PAGES } from '../constants/pages';
import { home } from '../content/home';
import Grid from '../components/grid/grid/grid';
import HeroIndex from '../components/hero/heroIndex/heroIndex';

function IndexPage() {
  return (
    <App theme={themeMap.TEA_GREEN} activePage={PAGES.HOME}>
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

export default IndexPage;

export function Head() {
  return <title>Will Paige | Software Engineer</title>;
}
