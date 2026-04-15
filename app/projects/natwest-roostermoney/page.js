'use client';

import React from 'react';
import Image from 'next/image';
import ProjectPage from '../../../src/components/projectPage/projectPage';
import { PROJECT_KEYS, PROJECTS } from '../../../src/content/projects';
import ScreenScroll from '../../../src/components/screenScroll/screenScroll';
import ContentBlock from '../../../src/components/contentBlock/contentBlock';
import ImageWrapper from '../../../src/components/image/image';

const imageUrl = '/images/projects/roostermoney/roostermoney_';

function RoosterMoney() {
  const content = PROJECTS[PROJECT_KEYS.ROOSTERMONEY];
  const { brief, process, solution } = content;

  return (
    <ProjectPage content={content}>
      <ContentBlock title="Brief" subtitle={brief.title}>
        {brief.content}
      </ContentBlock>

      <ImageWrapper caption="Pre-designed, pre-built components can effectively be dragged and dropped into place">
        <Image src={`${imageUrl}app_of_the_day.png`} alt="Rooster money app of the day" width={800} height={600} style={{ width: '100%', height: 'auto' }} />
      </ImageWrapper>

      <ContentBlock title="The Process">
        {process}
      </ContentBlock>

      <ImageWrapper caption="Pre-designed, pre-built components can effectively be dragged and dropped into place">
        <Image src={`${imageUrl}graduation_component.png`} alt="Rooster money graduation component" width={800} height={600} style={{ width: '100%', height: 'auto' }} />
      </ImageWrapper>

      <ContentBlock title="The Solution">
        {solution}
      </ContentBlock>

      <ScreenScroll
        mobile={
          <Image src={`${imageUrl}website-mobile.png`} alt="RoosterMoney - website on mobile" width={400} height={800} style={{ width: '100%', height: 'auto' }} />
        }
        desktop={
          <Image src={`${imageUrl}website-desktop.png`} alt="RoosterMoney - website on desktop" width={1200} height={800} style={{ width: '100%', height: 'auto' }} />
        }
      />
    </ProjectPage>
  );
}

export default RoosterMoney;
