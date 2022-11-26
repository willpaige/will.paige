import * as React from 'react';
import App from '../components/app/app';
import Content from '../components/content/content';
import { themeMap } from '../constants/theme';
import Footer from '../components/footer/footer';
import {PAGES} from "../constants/pages";

function AboutPage() {
  return (
    <App theme={themeMap.OLD_LAVENDER} activePage={PAGES.SERVICES}>
      <Content>
        <p className="lead">About</p>
        <Footer />
      </Content>
    </App>
  );
}

export default AboutPage;

export function Head() {
  return <title>Home Page</title>;
}
