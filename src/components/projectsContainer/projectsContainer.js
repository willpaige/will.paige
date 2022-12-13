import React from 'react';
import PropTypes from 'prop-types';
import App from '../app/app';
import { themeMap } from '../../constants/theme';
import Content from '../content/content';
import Grid from '../grid/grid/grid';
import HeroText from '../hero/heroText/heroText';
import FooterSmall from '../footerSmall/footerSmall';
import Tags from "../tags/tags";

const renderHero = (tags, title, subtitle) => {
  if (tags) {
    return (
      <HeroText smallTitle justText showDot subtitle={subtitle} content={<Tags data={tags} />}>
        {title}
      </HeroText>
    );
  };

  return (
    <HeroText smallTitle justText showDot subtitle={subtitle}>
      {title}
    </HeroText>
  );
};

function ProjectsContainer(props) {
  const { children, title, subtitle, tags, removeRightPadding } = props;

  return (
    <App theme={themeMap.THEME_4}>
      <Content noHero noBackground>
        <Grid fullWidthSm removeRightPadding={removeRightPadding}>
          {renderHero(tags, title, subtitle)}
        </Grid>
        <Grid removeRightPadding={removeRightPadding}>
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
  tags: undefined,
  removeRightPadding: true,
};

ProjectsContainer.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.node,
  subtitle: PropTypes.string,
  removeRightPadding: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  tags: PropTypes.array,
};

export default ProjectsContainer;
