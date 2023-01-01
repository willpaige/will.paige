import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import ProjectPage from '../../components/projectPage/projectPage';
import { PROJECT_KEYS, PROJECTS } from '../../content/projects';
import ContentBlock from '../../components/contentBlock/contentBlock';
import Image from '../../components/image/image';
import ScreenScroll from '../../components/screenScroll/screenScroll';
import { ScreenTypes } from '../../constants/screenTypes';
import { SEO } from '../../components/seo/seo';

const imageUrl = '../../images/projects/willpowerfitness/';

function WillpowerFitness() {
  const content = PROJECTS[PROJECT_KEYS.WILLPOWER_FITNESS];
  const { brief, process, solution } = content;

  return (
    <ProjectPage content={content} showHero={false}>
      <ContentBlock title="The Brief" subtitle={brief.title}>
        {brief.content}
      </ContentBlock>

      <Image caption={"WillpowerFitness's old website"}>
        <StaticImage
          src={`${imageUrl}willpower_fitness-old.png`}
          alt="The old website version of willpower fitness"
          quality={100}
        />
      </Image>

      <ContentBlock title="The Process">
        {process}
      </ContentBlock>

      <ScreenScroll
        defaultScreen={ScreenTypes.DESKTOP}
        mobile={(
          <StaticImage
            src={`${imageUrl}willpowerfitness_website-mobile.png`}
            alt="Willpower Fitness - desktop website"
            quality={100}
          />
        )}
        desktop={(
          <StaticImage
            src={`${imageUrl}willpowerfitness_website-desktop.png`}
            alt="Willpower Fitness - mobile website"
            quality={100}
          />
        )}
      />

      <ContentBlock title="The Solution">
        {solution}
      </ContentBlock>
    </ProjectPage>
  );
}

export default WillpowerFitness;

export function Head() {
  return <SEO title="Projects - WillpowerFitness" />;
}
