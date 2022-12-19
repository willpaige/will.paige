import * as React from 'react';
import App from '../components/app/app';
import { themeMap } from '../constants/theme';
import { PAGES } from '../constants/pages';
import Grid from '../components/grid/grid/grid';
import HeroText from '../components/hero/heroText/heroText';
import Content from '../components/content/content';
import FooterSmall from '../components/footerSmall/footerSmall';
import {StaticImage} from "gatsby-plugin-image";
import Title from "../components/title/title";
import Image from "../components/image/image";

function PerformancePage() {
  return (
    <App activePage={PAGES.PERFORMANCE}>
      <Grid>
        <HeroText justText showDot>
          Performance
        </HeroText>
      </Grid>
      <Content noBackground>
        <Grid>
          <Title type={'h2'}>
            will.paige.me.uk website performance
          </Title>

          <Title type={'h4'}>
            Mobile:
          </Title>
          <Image>
            <StaticImage
              src="../images/performance/website-performance-mobile-14_12_22.png"
              alt="will.paige.me.uk website performance"
              loading="eager"
              quality={100}
            />
          </Image>

          <Title type="h4">
            Desktop:
          </Title>
          <Image>
            <StaticImage
              src="../images/performance/website-performance-desktop-14_12_22.png"
              alt="will.paige.me.uk website performance"
              width={800}
              quality={100}
            />
          </Image>
          <p>Date: Wednesday 14th December 2022</p>
          <FooterSmall />
        </Grid>
      </Content>
    </App>
  );
}

export default PerformancePage;

export function Head() {
  return <title>Will Paige | Website Performance</title>;
}
