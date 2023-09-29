import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import ProjectPage from '../../components/projectPage/projectPage';
import { PROJECT_KEYS, PROJECTS } from '../../content/projects';
import ScreenScroll from '../../components/screenScroll/screenScroll';
import ContentBlock from '../../components/contentBlock/contentBlock';
import { SEO } from '../../components/seo/seo';
import listingGenieVideo from '../../video/listinggenie-website.mp4';
import videoPlaceHolder from '../../images/projects/listinggenie/listinggenie-video-placeholder.png';
import Video from '../../components/video/video';

const imageUrl = '../../images/projects/listinggenie/';

function ListingGenieWebsite() {
  const content = PROJECTS[PROJECT_KEYS.LISTINGGENIE_WEBSITE];
  const { brief, process, solution } = content;

  return (
    <ProjectPage content={content}>
      <ContentBlock title="Brief" subtitle={brief.title}>
        {brief.content}
      </ContentBlock>

      <Video verticalMargin src={listingGenieVideo} placeholder={videoPlaceHolder} />

      <ContentBlock title="The Process">
        {process}
      </ContentBlock>

      <ScreenScroll
        mobile={(
          <StaticImage
            src={`${imageUrl}listinggenie-mobile-website.png`}
            alt="ListingGenie - mobile website"
          />
        )}
        desktop={(
          <StaticImage
            src={`${imageUrl}listinggenie-desktop-website.png`}
            alt="ListingGenie - desktop website"
          />
        )}
      />

      <ContentBlock title="The Solution">
        {solution}
      </ContentBlock>
    </ProjectPage>
  );
}

export default ListingGenieWebsite;

export function Head() {
  return <SEO title="Projects - ListingGenie website design and branding" />;
}
