import * as React from 'react';
import App from '../components/app/app';
import Content from '../components/content/content';
import { themeMap } from '../constants/theme';
import Footer from '../components/footer/footer';
import {PAGES} from "../constants/pages";

function ServicesPage() {
  return (
    <App theme={themeMap.THEME_5} activePage={PAGES.SERVICES}>
      <Content>
        <p className="lead">About</p>
        <Footer />
      </Content>
    </App>
  );
}

export default ServicesPage;

export function Head() {
  return <title>Home Page</title>;
}
