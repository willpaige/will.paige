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
        <p>Our branding, inspired by the sophistication of Chanel and the elegance of Rodin and Herbivore Botanicals, features a clean and minimal aesthetic. A subtle icon in the form of a 'T', the botanical symbol for shrub, adds a touch of botanical flair.</p>
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
        <p>The packaging, designed for maximum impact and tactility, showcases eye-catching, unique bottles sourced from Italy. The clean and clinical design features a soft touch laminate and an embossed foil printed icon.</p>
      </ContentBlock>

      <Video verticalMargin src={botanyVideo} placeholder={videoPlaceHolder} />

      <ContentBlock title="Website">
        <p>Our website, created to elevate the customer experience, leverages the use of parallax scrolling and scenic drone videos to showcase the products in their natural glory. The white, clean design emphasizes the clinical branding with bright, professionally shot imagery that highlights the products' natural essence.</p>
        <Image caption="The use of non-uniform content gridding helped to encourage the user to scroll.">
          <StaticImage
            src={`${imageUrl}botanyblend-product-shot.png`}
            alt="botanyblend - packaging design"
            width={880}
            quality={100}
          />
        </Image>
        <p>The non-uniform content gridding encourages users to explore while ensuring functionality and ease of use on mobile, catering to the majority of our customers who access the site through social channels. </p>
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
        <p>The website also avoids over-editing the images, giving customers an accurate view of our products.</p>
      </ContentBlock>
    </ProjectPage>
  );
}

export default Botanyblend;

export function Head() {
  return <SEO title="Projects - Botanyblend website design and development" />;
}
