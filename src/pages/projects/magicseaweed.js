import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import ProjectPage from '../../components/projectPage/projectPage';
import { PROJECT_KEYS, PROJECTS } from '../../content/projects';
import Image from '../../components/image/image';
import Chart from '../../images/projects/magicseaweed/magicseaweed_chart.gif';
import ContentBlock from '../../components/contentBlock/contentBlock';
import { SEO } from '../../components/seo/seo';

function MagicSeaweed() {
  const content = PROJECTS[PROJECT_KEYS.MAGICSEAWEED];
  const { brief, process, solution } = content;

  return (
    <ProjectPage content={content}>
      <ContentBlock title="The Brief" subtitle={brief.title}>
        {brief.content}
      </ContentBlock>

      <Image caption="Clean grids and vivid photography helps to break the layout out">
        <StaticImage
          src="../../images/projects/magicseaweed/magicseaweed_photo.png"
          alt="MagicSeaweed homepage"
        />
      </Image>

      <ContentBlock title="The Process">
        {process}
      </ContentBlock>

      <Image caption="Charts animate to encourage engagement" fullWidth>
        <img
          src={Chart}
          alt="MagicSeaweed charts and homepage"
        />
      </Image>

      <ContentBlock title="The Solution">
        {solution}
      </ContentBlock>

      <Image caption="Lighthouse website performance scores" centered>
        <StaticImage
          src="../../images/projects/magicseaweed/magicseaweed_performance.png"
          alt="MagicSeaweed performance"
          objectFit="contain"
        />
      </Image>
    </ProjectPage>
  );
}

export default MagicSeaweed;

export function Head() {
  return <SEO title="Projects - MagicSeaweed" />;
}
