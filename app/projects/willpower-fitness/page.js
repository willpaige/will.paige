'use client';

import React from 'react';
import Image from 'next/image';
import ProjectPage from '../../../src/components/projectPage/projectPage';
import { PROJECT_KEYS, PROJECTS } from '../../../src/content/projects';
import ContentBlock from '../../../src/components/contentBlock/contentBlock';
import ImageWrapper from '../../../src/components/image/image';
import ScreenScroll from '../../../src/components/screenScroll/screenScroll';
import { ScreenTypes } from '../../../src/constants/screenTypes';

const imageUrl = '/images/projects/willpowerfitness/';

function WillpowerFitness() {
  const content = PROJECTS[PROJECT_KEYS.WILLPOWER_FITNESS];
  const { brief, process, solution } = content;

  return (
    <ProjectPage content={content} showHero={false}>
      <ContentBlock title="The Brief" subtitle={brief.title}>
        {brief.content}
      </ContentBlock>

      <ImageWrapper caption="WillpowerFitness's old website">
        <Image src={`${imageUrl}willpower_fitness-old.png`} alt="The old website version of willpower fitness" width={800} height={600} style={{ width: '100%', height: 'auto' }} />
      </ImageWrapper>

      <ContentBlock title="The Process">
        {process}
      </ContentBlock>

      <ScreenScroll
        defaultScreen={ScreenTypes.DESKTOP}
        mobile={
          <Image src={`${imageUrl}willpowerfitness_website-mobile.png`} alt="Willpower Fitness - mobile website" width={400} height={800} style={{ width: '100%', height: 'auto' }} />
        }
        desktop={
          <Image src={`${imageUrl}willpowerfitness_website-desktop.png`} alt="Willpower Fitness - desktop website" width={1200} height={800} style={{ width: '100%', height: 'auto' }} />
        }
      />

      <ContentBlock title="The Solution">
        {solution}
      </ContentBlock>
    </ProjectPage>
  );
}

export default WillpowerFitness;
