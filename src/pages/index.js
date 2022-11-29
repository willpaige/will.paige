import * as React from 'react';
import App from '../components/app/app';
import Content from '../components/content/content';
import Footer from '../components/footer/footer';
import HeroIndex from '../components/hero/heroIndex/heroIndex';
import { themeMap } from '../constants/theme';
import { PAGES } from '../constants/pages';
import { home } from '../content/home';
import Grid from "../components/grid/grid/grid";

function IndexPage() {
  return (
    <App theme={themeMap.TEA_GREEN} activePage={PAGES.HOME}>
      <Grid>
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
