'use client';

import React from 'react';
import ProjectPage from '../../../src/components/projectPage/projectPage';
import { PROJECT_KEYS, PROJECTS } from '../../../src/content/projects';
import ContentBlock from '../../../src/components/contentBlock/contentBlock';
import ImageWrapper from '../../../src/components/image/image';
import Video from '../../../src/components/video/video';

const imageUrl = '/images/projects/listinggenie/';

function ListingGenieApps() {
  const content = PROJECTS[PROJECT_KEYS.LISTINGGENIE_APP];
  const { brief, process, solution } = content;

  return (
    <ProjectPage content={content}>
      <ContentBlock title="Brief" subtitle={brief.title}>
        {brief.content}
      </ContentBlock>

      <Video halfWidth verticalMargin src="/video/listinggenie-ios-app.mp4" placeholder={`${imageUrl}listinggenie-ios-app-placeholder.png`} />

      <ContentBlock title="The Process">
        {process}
      </ContentBlock>

      <ImageWrapper caption="ListingGenie on the App Store" fullWidth>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${imageUrl}listinggenie-app-store.png`} alt="ListingGenie on the App Store" />
      </ImageWrapper>

      <ImageWrapper caption="ListingGenie on the Android Play Store" fullWidth>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${imageUrl}listinggenie-play-store.png`} alt="ListingGenie on the Play Store" />
      </ImageWrapper>

      <ContentBlock title="The Solution">
        {solution}
      </ContentBlock>

      <ImageWrapper caption="iOs App Screenshots" fullWidth>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${imageUrl}listinggenie-app-screens.png`} alt="iOs App Screenshots" />
      </ImageWrapper>
    </ProjectPage>
  );
}

export default ListingGenieApps;
