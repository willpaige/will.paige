'use client';

import React from 'react';
import Image from 'next/image';
import App from '../../src/components/app/app';
import { PAGES } from '../../src/constants/pages';
import Grid from '../../src/components/grid/grid/grid';
import HeroText from '../../src/components/hero/heroText/heroText';
import Content from '../../src/components/content/content';
import FooterSmall from '../../src/components/footerSmall/footerSmall';
import Title from '../../src/components/title/title';
import ImageWrapper from '../../src/components/image/image';

export default function PerformancePage() {
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
          <ImageWrapper>
            <Image
              src="/images/performance/website-performance-mobile-14_12_22.png"
              alt="will.paige.me.uk website performance"
              width={1200}
              height={800}
              priority
              style={{ width: '100%', height: 'auto' }}
            />
          </ImageWrapper>

          <Title type="h4">
            Desktop:
          </Title>
          <ImageWrapper>
            <Image
              src="/images/performance/website-performance-desktop-14_12_22.png"
              alt="will.paige.me.uk website performance"
              width={800}
              height={600}
              style={{ width: '100%', height: 'auto' }}
            />
          </ImageWrapper>
          <p>Date: Wednesday 14th December 2022</p>
          <FooterSmall />
        </Grid>
      </Content>
    </App>
  );
}
