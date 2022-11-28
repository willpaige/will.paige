import * as React from 'react';
import App from '../components/app/app';
import Content from '../components/content/content';
import Footer from '../components/footer/footer';
import HeroIndex from '../components/hero/heroIndex/heroIndex';
import { themeMap } from '../constants/theme';
import { PAGES } from '../constants/pages';
import { home } from '../content/home';

function IndexPage() {
  return (
    <App theme={themeMap.TEA_GREEN} activePage={PAGES.HOME}>
      <HeroIndex />
      <Content>
        {home.CONTENT}
        <Footer />
      </Content>
    </App>
  );
}

export default IndexPage;

export function Head() {
  return <title>Will Paige | Software Engineer</title>;
}
