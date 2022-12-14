import React from 'react';
import Layout from './src/components/layout/layout';
import { ReduxWrapper } from './src/state/redux-wrapper';
import RootElement from './src/components/rootElement/rootElement';

export const onRouteUpdate = ({ location }) => {
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }
  const pagePath = location ? location.pathname + location.search + location.hash : undefined;
  setTimeout(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', { page_path: pagePath });
    }
  }, 100);
  return true;
};

export const wrapPageElement = ({ element, props }) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Layout {...props}>{element}</Layout>;
};

export const wrapRootElement = ({ element }) => {
  return (
    <RootElement>
      <ReduxWrapper element={element} />
    </RootElement>
  );
};
