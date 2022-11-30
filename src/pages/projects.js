import * as React from 'react';
import {PAGES} from "../constants/pages";
import { themeMap } from '../constants/theme';
import App from "../components/app/app";
import Content from "../components/content/content";
import Grid from "../components/grid/grid/grid";
import FooterSmall from "../components/footerSmall/footerSmall";
import HeroText from "../components/hero/heroText/heroText";

function ProjectsPage() {
  return (
    <App theme={themeMap.NO_THEME} activePage={PAGES.PROJECTS}>
      <Content noHero>
        <Grid fullWidthSm>
          <HeroText justText showDot>
            Projects
          </HeroText>
        </Grid>
        <Grid>
          {/*{home.CONTENT}*/}
          <FooterSmall />
        </Grid>
      </Content>
    </App>
  );
};

export default ProjectsPage;

export function Head() {
  return <title>Will Paige | Working Projects</title>;
}
