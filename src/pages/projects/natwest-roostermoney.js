import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import ProjectPage from '../../components/projectPage/projectPage';
import { PROJECT_KEYS, PROJECTS } from '../../content/projects';
import ScreenScroll from '../../components/screenScroll/screenScroll';
import ContentBlock from '../../components/contentBlock/contentBlock';
import Image from '../../components/image/image';
import {SEO} from "../../components/seo/seo";

const imageUrl = '../../images/projects/roostermoney/roostermoney_';
function RoosterMoney() {
  const content = PROJECTS[PROJECT_KEYS.ROOSTERMONEY];
  const { brief, process, solution } = content;

  return (
    <ProjectPage content={content}>
      <ContentBlock title="Brief" subtitle={brief.title}>
        {brief.content}
      </ContentBlock>

      <Image caption={'Pre-designed, pre-built components can effectively be dragged and dropped into place'}>
        <StaticImage src={`${imageUrl}app_of_the_day.png`} alt={'Rooster money app of the day'} />
      </Image>

      <ContentBlock title="The Process">
        {process}
      </ContentBlock>

      <Image caption={'Pre-designed, pre-built components can effectively be dragged and dropped into place'}>
        <StaticImage src={`${imageUrl}graduation_component.png`} alt={'Rooster money app of the day'} />
      </Image>

      <ContentBlock title="The Solution">
        {solution}
      </ContentBlock>

      <ScreenScroll
        mobile={
          <StaticImage
            src={`${imageUrl}website-mobile.png`}
            alt="RoosterMoney - website on mobile"
          />
        }
        desktop={
          <StaticImage
            src={`${imageUrl}website-desktop.png`}
            alt="RoosterMoney - website on desktop"
          />
        }
      />

    </ProjectPage>
  );
}

export default RoosterMoney;

export function Head() {
  return <SEO title="Projects - Botanyblend" />;
}
