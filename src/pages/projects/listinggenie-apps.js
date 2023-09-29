import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import ProjectPage from '../../components/projectPage/projectPage';
import { PROJECT_KEYS, PROJECTS } from '../../content/projects';
import ContentBlock from '../../components/contentBlock/contentBlock';
import Image from '../../components/image/image';
import { SEO } from '../../components/seo/seo';
import listingGenieVideo from '../../video/listinggenie-ios-app.mp4';
import videoPlaceHolder from '../../images/projects/listinggenie/listinggenie-ios-app-placeholder.png';
import appStoreImage from '../../images/projects/listinggenie/listinggenie-app-store.png';
import playStoreImage from '../../images/projects/listinggenie/listinggenie-play-store.png';
import appScreensImage from '../../images/projects/listinggenie/listinggenie-app-screens.png';
import Video from "../../components/video/video";

function ListingGenieApps() {
  const content = PROJECTS[PROJECT_KEYS.LISTINGGENIE_APP];
  const { brief, process, solution } = content;

  return (
    <ProjectPage content={content}>
      <ContentBlock title="Brief" subtitle={brief.title}>
        {brief.content}
      </ContentBlock>

      <Video halfWidth verticalMargin src={listingGenieVideo} placeholder={videoPlaceHolder} />

      <ContentBlock title="The Process">
        {process}
      </ContentBlock>

      <Image caption="ListingGenie on the App Store" fullWidth>
        <img
          src={appStoreImage}
          alt="ListingGenie on the App Store"
        />
      </Image>

      <Image caption="ListingGenie on the Android Play Store" fullWidth>
        <img
          src={playStoreImage}
          alt="ListingGenie on the Play Store"
        />
      </Image>

      <ContentBlock title="The Solution">
        {solution}
      </ContentBlock>

      <Image caption="iOs App Screenshots" fullWidth>
        <img
          src={appScreensImage}
          alt="iOs App Screenshots"
        />
      </Image>
    </ProjectPage>
  );
}

export default ListingGenieApps;

export function Head() {
  return <SEO title="Projects - ListingGenie iOs & Android Apps" />;
}
