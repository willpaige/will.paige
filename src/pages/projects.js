import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { PAGES } from '../constants/pages';
import { PROJECTS } from '../content/projects';
import ContentList from '../components/contentList/contentList';
import { setActivePage } from '../state/navigation/navigation-action';
import ProjectsContainer from '../components/projectsContainer/projectsContainer';
import { SEO } from '../components/seo/seo';

function ProjectsPage({ dispatch }) {
  dispatch(setActivePage(PAGES.PROJECTS));

  return (
    <ProjectsContainer smallFooter={false}>
      <ContentList data={PROJECTS} />
    </ProjectsContainer>
  );
}

export default connect()(ProjectsPage);

ProjectsPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export function Head() {
  return <SEO title="Working Projects" />;
}
