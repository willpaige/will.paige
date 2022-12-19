import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import ProjectPage from '../../components/projectPage/projectPage';
import { PROJECT_KEYS, PROJECTS } from '../../content/projects';
import ScreenScroll from '../../components/screenScroll/screenScroll';
import ContentBlock from '../../components/contentBlock/contentBlock';
import Image from '../../components/image/image';
import HeaderImage from '../../images/projects/sama/sama-header.gif';
import { SEO } from '../../components/seo/seo';

const imageUrl = '../../images/projects/sama/';

function Sama() {
  const content = PROJECTS[PROJECT_KEYS.SAMA];
  const { brief, process, solution } = content;

  return (
    <ProjectPage content={content}>
      <ContentBlock title="Brief" subtitle={brief.title}>
        {brief.content}
      </ContentBlock>

      <Image caption="A muted colour scheme helped to create a calm and sensual brand">
        <StaticImage
          src={`${imageUrl}sama-theme.png`}
          alt="Sama Health & Well being - branding"
        />
      </Image>

      <ContentBlock title="The Process">
        {process}
      </ContentBlock>

      <Image caption="The background on the header subtly animates" fullWidth>
        <img
          src={HeaderImage}
          alt="Sama header"
        />
      </Image>

      <ContentBlock title="The Solution">
        {solution}
      </ContentBlock>

      <ScreenScroll
        mobile={(
          <StaticImage
            src={`${imageUrl}sama-mobile-full.png`}
            alt="Sama Health & Well being - website"
          />
        )}
        desktop={(
          <StaticImage
            src={`${imageUrl}sama-full-screen.png`}
            alt="Sama Health & Well being - website"
          />
        )}
      />

      <Image caption="A quick-links image block on the homepage allowed for key sections of the site to be surfaced to encourage users to navigate,">
        <StaticImage
          src={`${imageUrl}sama-module.png`}
          alt="Sama Health & Well being - quick links"
        />
      </Image>

      <Image caption="A simple blog/posts page which uses the less is more approach allows for content to be readable an engageable.">
        <StaticImage
          src={`${imageUrl}sama-content.png`}
          alt="Sama Health & Well being - Blog post"
        />
      </Image>
    </ProjectPage>
  );
}

export default Sama;

export function Head() {
  return <SEO title="Projects - Botanyblend" />;
}
