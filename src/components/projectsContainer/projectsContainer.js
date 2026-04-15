import React from 'react';
import App from '../app/app';
import { themeMap } from '../../constants/theme';
import Content from '../content/content';
import Grid from '../grid/grid/grid';
import HeroText from '../hero/heroText/heroText';
import FooterSmall from '../footerSmall/footerSmall';
import Tags from '../tags/tags';
import Footer from '../footer/footer';

const renderHero = (tags, title, subtitle) => {
  if (tags) {
    return (
      <HeroText smallTitle justText showDot subtitle={subtitle} content={<Tags data={tags} />}>
        {title}
      </HeroText>
    );
  }

  return (
    <HeroText smallTitle justText showDot subtitle={subtitle}>
      {title}
    </HeroText>
  );
};

function ProjectsContainer({
  children,
  title = 'Projects',
  subtitle,
  tags,
  removeRightPadding = true,
  smallFooter = true,
}) {
  return (
    <App theme={themeMap.THEME_4}>
      <Content noHero noBackground>
        <Grid fullWidthSm removeRightPadding={removeRightPadding}>
          {renderHero(tags, title, subtitle)}
        </Grid>
        <Grid removeRightPadding={removeRightPadding}>
          {children}
          {smallFooter ? <FooterSmall /> : <Footer showCurrentEmployment={false} showLanguages={false} />}
        </Grid>
      </Content>
    </App>
  );
}

export default ProjectsContainer;
