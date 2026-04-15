'use client';

import React from 'react';
import Image from 'next/image';
import ProjectPage from '../../../src/components/projectPage/projectPage';
import { PROJECT_KEYS, PROJECTS } from '../../../src/content/projects';
import ScreenScroll from '../../../src/components/screenScroll/screenScroll';
import ContentBlock from '../../../src/components/contentBlock/contentBlock';
import ImageWrapper from '../../../src/components/image/image';

const imageUrl = '/images/projects/sama/';

function Sama() {
  const content = PROJECTS[PROJECT_KEYS.SAMA];
  const { brief, process, solution } = content;

  return (
    <ProjectPage content={content}>
      <ContentBlock title="Brief" subtitle={brief.title}>
        {brief.content}
      </ContentBlock>

      <ImageWrapper caption="A muted colour scheme helped to create a calm and sensual brand">
        <Image src={`${imageUrl}sama-theme.png`} alt="Sama Health & Well being - branding" width={800} height={600} style={{ width: '100%', height: 'auto' }} />
      </ImageWrapper>

      <ContentBlock title="The Process">
        {process}
      </ContentBlock>

      <ImageWrapper caption="The background on the header subtly animates" fullWidth>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${imageUrl}sama-header.gif`} alt="Sama header" />
      </ImageWrapper>

      <ContentBlock title="The Solution">
        {solution}
      </ContentBlock>

      <ScreenScroll
        mobile={
          <Image src={`${imageUrl}sama-mobile-full.png`} alt="Sama Health & Well being - website" width={400} height={800} style={{ width: '100%', height: 'auto' }} />
        }
        desktop={
          <Image src={`${imageUrl}sama-full-screen.png`} alt="Sama Health & Well being - website" width={1200} height={800} style={{ width: '100%', height: 'auto' }} />
        }
      />

      <ImageWrapper caption="A quick-links image block on the homepage allowed for key sections of the site to be surfaced to encourage users to navigate,">
        <Image src={`${imageUrl}sama-module.png`} alt="Sama Health & Well being - quick links" width={800} height={600} style={{ width: '100%', height: 'auto' }} />
      </ImageWrapper>

      <ImageWrapper caption="A simple blog/posts page which uses the less is more approach allows for content to be readable an engageable.">
        <Image src={`${imageUrl}sama-content.png`} alt="Sama Health & Well being - Blog post" width={800} height={600} style={{ width: '100%', height: 'auto' }} />
      </ImageWrapper>
    </ProjectPage>
  );
}

export default Sama;
