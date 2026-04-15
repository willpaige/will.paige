'use client';

import React from 'react';
import App from '../../src/components/app/app';
import Content from '../../src/components/content/content';
import { themeMap } from '../../src/constants/theme';
import Footer from '../../src/components/footer/footer';
import { PAGES } from '../../src/constants/pages';

export default function ServicesPage() {
  return (
    <App theme={themeMap.THEME_5} activePage={PAGES.SERVICES}>
      <Content>
        <p className="lead">About</p>
        <Footer />
      </Content>
    </App>
  );
}
