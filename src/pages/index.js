import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import App from '../components/app/app';
import Content from '../components/content/content';
import Footer from '../components/footer/footer';
import { themeMap } from '../constants/theme';
import { PAGES } from '../constants/pages';
import { home } from '../content/home';
import HeroIndex from '../components/hero/heroIndex/heroIndex';
import Grid from '../components/grid/grid/grid';
import { setActivePage } from '../state/navigation/navigation-action';
import {SEO} from "../components/seo/seo";

function IndexPage({ dispatch }) {
  dispatch(setActivePage(PAGES.HOME));

  return (
    <App theme={themeMap.THEME_1}>
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

IndexPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(IndexPage);

export function Head() {
  return <SEO />;
}
