'use client';

import React from 'react';
import Image from 'next/image';
import ProjectPage from '../../../src/components/projectPage/projectPage';
import { PROJECT_KEYS, PROJECTS } from '../../../src/content/projects';
import ScreenScroll from '../../../src/components/screenScroll/screenScroll';
import ContentBlock from '../../../src/components/contentBlock/contentBlock';
import Video from '../../../src/components/video/video';

const imageUrl = '/images/projects/listinggenie/';

function ListingGenieWebsite() {
  const content = PROJECTS[PROJECT_KEYS.LISTINGGENIE_WEBSITE];
  const { brief, process, solution } = content;

  return (
    <ProjectPage content={content}>
      <ContentBlock title="Brief" subtitle={brief.title}>
        {brief.content}
      </ContentBlock>

      <Video verticalMargin src="/video/listinggenie-website.mp4" placeholder={`${imageUrl}listinggenie-video-placeholder.png`} />

      <ContentBlock title="The Process">
        {process}
      </ContentBlock>

      <ScreenScroll
        mobile={
          <Image src={`${imageUrl}listinggenie-mobile-website.png`} alt="ListingGenie - mobile website" width={400} height={800} style={{ width: '100%', height: 'auto' }} />
        }
        desktop={
          <Image src={`${imageUrl}listinggenie-desktop-website.png`} alt="ListingGenie - desktop website" width={1200} height={800} style={{ width: '100%', height: 'auto' }} />
        }
      />

      <ContentBlock title="The Solution">
        {solution}
      </ContentBlock>
    </ProjectPage>
  );
}

export default ListingGenieWebsite;
