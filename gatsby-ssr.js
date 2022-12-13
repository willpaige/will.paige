import React from 'react';
import Layout from './src/components/layout/layout';
import RootElement from './src/components/rootElement/rootElement';
import { ReduxWrapper } from './src/state/redux-wrapper';

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

export const wrapRootElement = ({ element }) => {
  return (
    <RootElement>
      <ReduxWrapper element={element} />
    </RootElement>
  );
};
