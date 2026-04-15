'use client';

import React from 'react';
import { useDispatch } from 'react-redux';
import { PAGES } from '../../src/constants/pages';
import { PROJECTS } from '../../src/content/projects';
import ContentList from '../../src/components/contentList/contentList';
import { setActivePage } from '../../src/state/navigation/navigation-action';
import ProjectsContainer from '../../src/components/projectsContainer/projectsContainer';

export default function ProjectsPage() {
  const dispatch = useDispatch();
  dispatch(setActivePage(PAGES.PROJECTS));

  return (
    <ProjectsContainer smallFooter={false}>
      <ContentList data={PROJECTS} />
    </ProjectsContainer>
  );
}
