'use client';

import React from 'react';
import Image from 'next/image';
import { PROJECT_KEYS, PROJECTS } from '../../../src/content/projects';
import ContentBlock from '../../../src/components/contentBlock/contentBlock';
import ProjectPage from '../../../src/components/projectPage/projectPage';
import ImageWrapper from '../../../src/components/image/image';
import ScreenScroll from '../../../src/components/screenScroll/screenScroll';
import { ScreenTypes } from '../../../src/constants/screenTypes';

const imageUrl = '/images/projects/superyachttenders/';

function SuperYachtTenders() {
  const content = PROJECTS[PROJECT_KEYS.SUPER_YACHT_TENDERS];
  const { brief, process, solution } = content;

  return (
    <ProjectPage content={content} showHero={false}>
      <ContentBlock title="Overview" subtitle={brief.title}>
        {brief.content}
      </ContentBlock>

      <ImageWrapper caption="SuperYachtTenders's logo">
        <Image src={`${imageUrl}super_yacht_tenders-logo.png`} alt="The Super Yacht Tenders logo" width={800} height={600} style={{ width: '100%', height: 'auto' }} />
      </ImageWrapper>

      <ContentBlock title="The Process">
        {process}
      </ContentBlock>

      <ImageWrapper caption="A clean detailed product overview with print and enquire functions">
        <Image src={`${imageUrl}super_yacht_tenders_product-page.png`} alt="Super yacht tenders detailed product overview" width={800} height={600} style={{ width: '100%', height: 'auto' }} />
      </ImageWrapper>

      <ContentBlock title="The Solution">
        {solution}
      </ContentBlock>
      <ScreenScroll
        defaultScreen={ScreenTypes.DESKTOP}
        mobile={
          <Image src={`${imageUrl}super_yacht_tenders-mobile.png`} alt="SuperYachtTenders - mobile website" width={400} height={800} style={{ width: '100%', height: 'auto' }} />
        }
        desktop={
          <Image src={`${imageUrl}super_yacht_tenders-desktop.png`} alt="SuperYachtTenders - desktop website" width={1200} height={800} style={{ width: '100%', height: 'auto' }} />
        }
      />
    </ProjectPage>
  );
}

export default SuperYachtTenders;
