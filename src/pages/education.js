import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { themeMap } from '../constants/theme';
import { PAGES } from '../constants/pages';
import { EDUCATION } from '../content/education';
import App from '../components/app/app';
import Content from '../components/content/content';
import Footer from '../components/footer/footer';
import Timeline from '../components/timeline/timeline';
import HeroText from '../components/hero/heroText/heroText';
import Grid from '../components/grid/grid/grid';
import { setActivePage } from '../state/navigation/navigation-action';
import { SEO } from '../components/seo/seo';

function EducationPage({ dispatch }) {
  dispatch(setActivePage(PAGES.EDUCATION));

  return (
    <App theme={themeMap.THEME_3}>
      <Content noHero>
        <Grid fullWidthSm>
          <HeroText smallTitle justText showDot>
            Education
          </HeroText>
        </Grid>
        <Grid>
          <Timeline content={EDUCATION.TIME_LINE} />
          <Footer showLanguages={false} showCurrentEmployment={false} />
        </Grid>
      </Content>
    </App>
  );
}

EducationPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(EducationPage);

export function Head() {
  return <SEO title="Education History" />;
}
