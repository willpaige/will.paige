import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { PAGES } from '../constants/pages';
import { themeMap } from '../constants/theme';
import App from '../components/app/app';
import Content from '../components/content/content';
import { PROJECTS } from '../content/projects';
import Grid from '../components/grid/grid/grid';
import FooterSmall from '../components/footerSmall/footerSmall';
import HeroText from '../components/hero/heroText/heroText';
import ContentList from '../components/contentList/contentList';
import { setActivePage } from '../state/navigation/navigation-action';

function ProjectsPage({ dispatch }) {
  dispatch(setActivePage(PAGES.PROJECTS));

  return (
    <App theme={themeMap.THEME_4}>
      <Content noHero noBackground>
        <Grid fullWidthSm removeRightPadding>
          <HeroText justText showDot>
            Projects
          </HeroText>
        </Grid>
        <Grid removeRightPadding>
          <ContentList data={PROJECTS} />
          <FooterSmall />
        </Grid>
      </Content>
    </App>
  );
}

export default connect()(ProjectsPage);

ProjectsPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export function Head() {
  return <title>Will Paige | Working Projects</title>;
}
