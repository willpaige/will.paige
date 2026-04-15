'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { AiOutlineLeft } from '@react-icons/all-files/ai/AiOutlineLeft';
import ProjectsContainer from '../projectsContainer/projectsContainer';
import { backButton, titleClass } from './projectPage.module.scss';
import { PAGES } from '../../constants/pages';
import { setActivePage } from '../../state/navigation/navigation-action';
import Title from '../title/title';
import ContentBlock from '../contentBlock/contentBlock';

function ProjectPage({ content, children, showHero = true }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    title, subtitle, tags, hero, blurb, role
  } = content;

  dispatch(setActivePage(PAGES.PROJECTS));

  const goBack = () => {
    router.back();
  };

  return (
    <ProjectsContainer title={title} subtitle={subtitle} tags={tags} removeRightPadding={false} smallFooter>
      {showHero && hero}
      <Title className={titleClass} type="h2">{blurb}</Title>
      <ContentBlock title="Role">
        <p>{role}</p>
      </ContentBlock>
      {children}
      <a className={backButton} role="button" onClick={() => goBack()}>
        <AiOutlineLeft />
        Back
      </a>
    </ProjectsContainer>
  );
}

export default ProjectPage;
