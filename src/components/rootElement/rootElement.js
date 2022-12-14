import React from 'react';
import { Script } from 'gatsby';
import PropTypes from "prop-types";

export default function RootElement({ children }) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GTAG_KEY}`}
        strategy="off-main-thread"
        forward={[`gtag`]}
      />
      <Script
        id="gtag-config"
        strategy="off-main-thread"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
          window.gtag = function gtag(){ window.dataLayer.push(arguments);}
          gtag('js', new Date()); 
          gtag('config', '${process.env.GTAG_KEY}', { send_page_view: true })`,
        }}
      />
      {children}
    </>
  );
}

RootElement.propTypes = {
  children: PropTypes.node.isRequired,
};
