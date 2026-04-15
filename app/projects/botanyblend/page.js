'use client';

import React from 'react';
import Image from 'next/image';
import ProjectPage from '../../../src/components/projectPage/projectPage';
import { PROJECT_KEYS, PROJECTS } from '../../../src/content/projects';
import ContentBlock from '../../../src/components/contentBlock/contentBlock';
import ImageWrapper from '../../../src/components/image/image';
import Video from '../../../src/components/video/video';
import ScreenScroll from '../../../src/components/screenScroll/screenScroll';
import { ScreenTypes } from '../../../src/constants/screenTypes';

const imageUrl = '/images/projects/botanyblend/';

function Botanyblend() {
  const content = PROJECTS[PROJECT_KEYS.BOTANYBLEND];
  const { brief } = content;

  return (
    <ProjectPage content={content} showHero={false}>
      <ContentBlock title="Overview">
        {brief.content}
      </ContentBlock>

      <ImageWrapper>
        <Image
          src={`${imageUrl}botanyblend_logo.png`}
          alt="botanyblend - Logo design"
          width={880}
          height={600}
          style={{ width: '100%', height: 'auto' }}
        />
      </ImageWrapper>

      <ContentBlock title="Branding">
        <p>Our branding, inspired by the sophistication of Chanel and the elegance of Rodin and Herbivore Botanicals, features a clean and minimal aesthetic. A subtle icon in the form of a &apos;T&apos;, the botanical symbol for shrub, adds a touch of botanical flair.</p>
      </ContentBlock>

      <ImageWrapper>
        <Image
          src={`${imageUrl}botanyblend-aceso.png`}
          alt="botanyblend - packaging design"
          width={880}
          height={600}
          style={{ width: '100%', height: 'auto' }}
        />
      </ImageWrapper>
      <ContentBlock title="Packaging">
        <p>The packaging, designed for maximum impact and tactility, showcases eye-catching, unique bottles sourced from Italy. The clean and clinical design features a soft touch laminate and an embossed foil printed icon.</p>
      </ContentBlock>

      <Video verticalMargin src="/video/botanyblend-parallax.mp4" placeholder={`${imageUrl}botanyblend-placeholder.png`} />

      <ContentBlock title="Website">
        <p>Our website, created to elevate the customer experience, leverages the use of parallax scrolling and scenic drone videos to showcase the products in their natural glory. The white, clean design emphasizes the clinical branding with bright, professionally shot imagery that highlights the products&apos; natural essence.</p>
        <ImageWrapper caption="The use of non-uniform content gridding helped to encourage the user to scroll.">
          <Image
            src={`${imageUrl}botanyblend-product-shot.png`}
            alt="botanyblend - packaging design"
            width={880}
            height={600}
            style={{ width: '100%', height: 'auto' }}
          />
        </ImageWrapper>
        <p>The non-uniform content gridding encourages users to explore while ensuring functionality and ease of use on mobile, catering to the majority of our customers who access the site through social channels. </p>
        <ScreenScroll
          defaultScreen={ScreenTypes.MOBILE}
          mobile={
            <Image src={`${imageUrl}botanyblend-website-mobile.png`} alt="botanyblend - mobile website" width={400} height={800} style={{ width: '100%', height: 'auto' }} />
          }
          desktop={
            <Image src={`${imageUrl}botanyblend-website-desktop.png`} alt="botanyblend - desktop website" width={1200} height={800} style={{ width: '100%', height: 'auto' }} />
          }
        />
        <p>The website also avoids over-editing the images, giving customers an accurate view of our products.</p>
      </ContentBlock>
    </ProjectPage>
  );
}

export default Botanyblend;
