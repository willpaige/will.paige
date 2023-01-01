import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { PROJECT_KEYS, PROJECTS } from '../../content/projects';
import ContentBlock from '../../components/contentBlock/contentBlock';
import { SEO } from '../../components/seo/seo';
import ProjectPage from '../../components/projectPage/projectPage';
import Image from '../../components/image/image';
import ScreenScroll from '../../components/screenScroll/screenScroll';
import { ScreenTypes } from '../../constants/screenTypes';

const imageUrl = '../../images/projects/superyachttenders/';

function SuperYachtTenders() {
  const content = PROJECTS[PROJECT_KEYS.SUPER_YACHT_TENDERS];
  const { brief, process, solution } = content;

  return (
    <ProjectPage content={content} showHero={false}>
      <ContentBlock title="Overview" subtitle={brief.title}>
        {brief.content}
      </ContentBlock>

      <Image caption={"SuperYachtTenders's logo"}>
        <StaticImage
          src={`${imageUrl}super_yacht_tenders-logo.png`}
          alt="The Super Yacht Tenders logo"
          quality={100}
        />
      </Image>

      <ContentBlock title="The Process">
        {process}
      </ContentBlock>

      <Image caption="A clean detailed product overview with print and enquire functions">
        <StaticImage
          src={`${imageUrl}super_yacht_tenders_product-page.png`}
          alt="Super yacht tenders detailed product overview"
          quality={100}
        />
      </Image>

      <ContentBlock title="The Solution">
        {solution}
      </ContentBlock>
      <ScreenScroll
        defaultScreen={ScreenTypes.DESKTOP}
        mobile={(
          <StaticImage
            src={`${imageUrl}super_yacht_tenders-mobile.png`}
            alt="SuperYachtTenders - desktop website"
            quality={100}
          />
        )}
        desktop={(
          <StaticImage
            src={`${imageUrl}super_yacht_tenders-desktop.png`}
            alt="SuperYachtTenders - mobile website"
            quality={100}
          />
        )}
      />
    </ProjectPage>
  );
}

export default SuperYachtTenders;

export function Head() {
  return <SEO title="Projects - Super Yacht Tenders Website design" />;
}
