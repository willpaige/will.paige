'use client';

import React from 'react';
import Image from 'next/image';
import ProjectPage from '../../../src/components/projectPage/projectPage';
import { PROJECT_KEYS, PROJECTS } from '../../../src/content/projects';
import ContentBlock from '../../../src/components/contentBlock/contentBlock';
import ImageWrapper from '../../../src/components/image/image';

const imageUrl = '/images/projects/roostermoney/roostermoney_';

function RoosterMoneyPerformance() {
  const content = PROJECTS[PROJECT_KEYS.ROOSTERMONEY_PERFORMANCE];
  const { brief, solution } = content;

  return (
    <ProjectPage content={content}>
      <ContentBlock title="Brief" subtitle={brief.title}>
        {brief.content}
      </ContentBlock>

      <ImageWrapper caption="An old desktop performance test for the homepage">
        <Image src={`${imageUrl}performance_old-desktop.png`} alt="NatWest Rooster Money old desktop website performance" width={800} height={600} style={{ width: '100%', height: 'auto' }} />
      </ImageWrapper>

      <ImageWrapper caption="An old mobile performance test for the homepage">
        <Image src={`${imageUrl}performance_old-mobile.png`} alt="NatWest Rooster Money old mobile website performance" width={800} height={600} style={{ width: '100%', height: 'auto' }} />
      </ImageWrapper>

      <ContentBlock title="The Solution">
        {solution}
      </ContentBlock>
    </ProjectPage>
  );
}

export default RoosterMoneyPerformance;
