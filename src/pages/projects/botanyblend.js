import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import ProjectPage from '../../components/projectPage/projectPage';
import { PROJECT_KEYS, PROJECTS } from '../../content/projects';
import ContentBlock from '../../components/contentBlock/contentBlock';
import Image from '../../components/image/image';
import botanyVideo from '../../video/botanyblend-parallax.mp4';
import Video from '../../components/video/video';
import ScreenScroll from '../../components/screenScroll/screenScroll';
import {ScreenTypes} from "../../constants/screenTypes";
import videoPlaceHolder from "../../images/projects/botanyblend/botanyblend-placeholder.png";
import {SEO} from "../../components/seo/seo";

const imageUrl = '../../images/projects/botanyblend/';

function Botanyblend() {
  const content = PROJECTS[PROJECT_KEYS.BOTANYBLEND];
  const { brief } = content;

  return (
    <ProjectPage content={content} showHero={false}>
      <ContentBlock title="Overview">
        {brief.content}
      </ContentBlock>

      <Image>
        <StaticImage
          src={`${imageUrl}botanyblend_logo.png`}
          alt="botanyblend - Logo design"
          width={880}
          quality={100}
        />
      </Image>

      <ContentBlock title="Branding">
        <p>Our branding was clean and minimal in keeping with our competitors Rodin and Herbivore Botanicals. We wanted to create a Chanel- Esq approach to clean beauty, which was often labelled as 'hippy.'</p>
        <p>We also added some subtle iconography in the form of the 'T', the botanical symbol for shrub.</p>
      </ContentBlock>

      <Image>
        <StaticImage
          src={`${imageUrl}botanyblend-aceso.png`}
          alt="botanyblend - packaging design"
          width={880}
          quality={100}
        />
      </Image>
      <ContentBlock title="Packaging">
        <p>Clean, clinical packaging that was tactile with a soft touch laminate and embossed foil printed icon.</p>
        <p>The bottles were eye-catching and unique and were sourced from Italy.</p>
      </ContentBlock>

      <Video verticalMargin src={botanyVideo} placeholder={videoPlaceHolder} />

      <ContentBlock title="Website">
        <p>We wanted to stand out in the crowd and didn't want to create another e-commerce platform. We needed to make more of an experience to increase engagement.</p>
        <p>To do this, we leveraged parallax scrolling to display content. We used crisp imagery and added scenic drone videos.</p>
        <p>We kept the site clean and white with bright imagery to emphasise the clinical branding.</p>
        <Image caption="The use of non-uniform content gridding helped to encourage the user to scroll.">
          <StaticImage
            src={`${imageUrl}botanyblend-product-shot.png`}
            alt="botanyblend - packaging design"
            width={880}
            quality={100}
          />
        </Image>
        <p>Clear, bright, professionally shot imaging was used throughout the website. We ensured the images were not over-edited, giving a more accurate view of our products.</p>
        <p>We also ensured that any contrasting imagery used similar colours to the products to help evoke a sense of calm and to highlight their natural essence.</p>
        <ScreenScroll
          defaultScreen={ScreenTypes.MOBILE}
          mobile={(
            <StaticImage
              src={`${imageUrl}botanyblend-website-mobile.png`}
              alt="botanyblend - desktop website"
              quality={100}
            />
          )}
          desktop={(
            <StaticImage
              src={`${imageUrl}botanyblend-website-desktop.png`}
              alt="botanyblend - mobile website"
              quality={100}
            />
          )}
        />
        <p>As most of our customers arrived from various social channels and on mobile, we ensured that the site was highly functional and easy to use on mobile.</p>
      </ContentBlock>
    </ProjectPage>
  );
}

export default Botanyblend;

export function Head() {
  return <SEO title="Projects - Botanyblend" />;
}
