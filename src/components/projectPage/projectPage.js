import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import { AiOutlineLeft } from '@react-icons/all-files/ai/AiOutlineLeft';
import ProjectsContainer from '../projectsContainer/projectsContainer';
import { backButton, titleClass } from './projectPage.module.scss';
import {PAGES} from "../../constants/pages";
import {setActivePage} from "../../state/navigation/navigation-action";
import {connect} from "react-redux";
import Title from "../title/title";
import ContentBlock from "../contentBlock/contentBlock";

const goBack = () => {
  navigate(-1);
};

const renderBackButton = () => {
  return (
    <a className={backButton} role="button" onClick={() => goBack()}>
      <AiOutlineLeft />
      Back
    </a>
  );
};

function ProjectPage(props) {
  const { content, children, dispatch, showHero } = props;
  const {
    title, subtitle, tags, hero, blurb, role
  } = content;

  dispatch(setActivePage(PAGES.PROJECTS));

  return (
    <ProjectsContainer title={title} subtitle={subtitle} tags={tags} removeRightPadding={false}>
      {showHero && hero}
      <Title className={titleClass} type="h2">{blurb}</Title>
      <ContentBlock title="Role">
        <p>{role}</p>
      </ContentBlock>
      {children}
      {renderBackButton()}
    </ProjectsContainer>
  );
}

ProjectPage.defaultProps = {
  showHero: true,
};

ProjectPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  content: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  dispatch: PropTypes.func.isRequired,
  showHero: PropTypes.bool,
};

export default connect()(ProjectPage);


