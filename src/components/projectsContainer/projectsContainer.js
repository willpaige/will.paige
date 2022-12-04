import React from 'react';
import PropTypes from 'prop-types';
import App from '../app/app';
import { themeMap } from '../../constants/theme';
import Content from '../content/content';
import Grid from '../grid/grid/grid';
import HeroText from '../hero/heroText/heroText';
import FooterSmall from '../footerSmall/footerSmall';

function ProjectsContainer(props) {
  const { children, title, subtitle } = props;

  return (
    <App theme={themeMap.THEME_4}>
      <Content noHero noBackground>
        <Grid fullWidthSm removeRightPadding>
          <HeroText justText showDot subtitle={subtitle}>
            {title}
          </HeroText>
        </Grid>
        <Grid removeRightPadding>
          {children}
          <FooterSmall />
        </Grid>
      </Content>
    </App>
  );
}

ProjectsContainer.defaultProps = {
  title: 'Projects',
  subtitle: undefined,
};

ProjectsContainer.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.node,
  subtitle: PropTypes.string,
};

export default ProjectsContainer;
