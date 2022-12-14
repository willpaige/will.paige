import React from 'react';
import Layout from './src/components/layout/layout';
import RootElement from './src/components/rootElement/rootElement';
import { ReduxWrapper } from './src/state/redux-wrapper';
import { siteFonts } from './src/constants/theme';

export const onRenderBody = ({ setHeadComponents }) => {
  const buildFonts = () => {
    const arr = [];

    siteFonts.forEach((obj) => {
      const { title, fonts } = obj;

      fonts.forEach(font => {
        arr.push(
          <link
            key={font}
            rel="preload"
            href={`/fonts/${title}/${font}`}
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />,
        );
      });
    });

    return arr;
  };

  setHeadComponents(buildFonts());
};

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
