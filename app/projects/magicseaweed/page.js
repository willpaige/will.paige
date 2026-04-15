'use client';

import React from 'react';
import Image from 'next/image';
import ProjectPage from '../../../src/components/projectPage/projectPage';
import { PROJECT_KEYS, PROJECTS } from '../../../src/content/projects';
import ImageWrapper from '../../../src/components/image/image';
import ContentBlock from '../../../src/components/contentBlock/contentBlock';

function MagicSeaweed() {
  const content = PROJECTS[PROJECT_KEYS.MAGICSEAWEED];
  const { brief, process, solution } = content;

  return (
    <ProjectPage content={content}>
      <ContentBlock title="The Brief" subtitle={brief.title}>
        {brief.content}
      </ContentBlock>

      <ImageWrapper caption="Clean grids and vivid photography helps to break the layout out">
        <Image
          src="/images/projects/magicseaweed/magicseaweed_photo.png"
          alt="MagicSeaweed homepage"
          width={800}
          height={600}
          style={{ width: '100%', height: 'auto' }}
        />
      </ImageWrapper>

      <ContentBlock title="The Process">
        {process}
      </ContentBlock>

      <ImageWrapper caption="Charts animate to encourage engagement" fullWidth>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/projects/magicseaweed/magicseaweed_chart.gif"
          alt="MagicSeaweed charts and homepage"
        />
      </ImageWrapper>

      <ContentBlock title="The Solution">
        {solution}
      </ContentBlock>

      <ImageWrapper caption="Lighthouse website performance scores" centered>
        <Image
          src="/images/projects/magicseaweed/magicseaweed_performance.png"
          alt="MagicSeaweed performance"
          width={800}
          height={600}
          style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
        />
      </ImageWrapper>
    </ProjectPage>
  );
}

export default MagicSeaweed;
