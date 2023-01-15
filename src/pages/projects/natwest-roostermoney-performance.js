import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import ProjectPage from '../../components/projectPage/projectPage';
import { PROJECT_KEYS, PROJECTS } from '../../content/projects';
import ScreenScroll from '../../components/screenScroll/screenScroll';
import ContentBlock from '../../components/contentBlock/contentBlock';
import Image from '../../components/image/image';
import {SEO} from "../../components/seo/seo";

const imageUrl = '../../images/projects/roostermoney/roostermoney_';
function RoosterMoneyPerformance() {
  const content = PROJECTS[PROJECT_KEYS.ROOSTERMONEY_PERFORMANCE];
  const { brief, process, solution } = content;

  return (
    <ProjectPage content={content}>
      <ContentBlock title="Brief" subtitle={brief.title}>
        {brief.content}
      </ContentBlock>

      <Image caption={'And old desktop performance test for the homepage'}>
        <StaticImage src={`${imageUrl}performance_old-desktop.png`} alt={'NatWest Rooster Money old desktop website performance'} />
      </Image>

      <Image caption={'And old mobile performance test for the homepage'}>
        <StaticImage src={`${imageUrl}performance_old-mobile.png`} alt={'NatWest Rooster Money old desktop website performance'} />
      </Image>

      <ContentBlock title="The Solution">
        {solution}
      </ContentBlock>

    </ProjectPage>
  );
}

export default RoosterMoneyPerformance;

export function Head() {
  return <SEO title="Projects - NatWest Rooster Money website performance improvements" />;
}
