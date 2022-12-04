import React from 'react';
import PropTypes from 'prop-types';
import ProjectsContainer from "../projectsContainer/projectsContainer";
import {navigate} from "gatsby";
import {AiOutlineLeft} from "@react-icons/all-files/ai/AiOutlineLeft";
import {backButton} from "./projectPage.module.scss";
import Tags from "../tags/tags";
import Video from "../video/video";

const goBack = () => {
  navigate(-1);
};

const renderBackButton = () => {
  return (
    <a className={backButton} role='button' onClick={() => goBack()}>
      <AiOutlineLeft />
      Back
    </a>
  );
}

function ProjectPage({content}) {
  const { title, subtitle, tags, video, thumbnail } = content;

  return (
    <ProjectsContainer title={title} subtitle={subtitle}>
      {video ? (
        <Video src={video.src} placeholder={video.placeholder} />
      ) : thumbnail}

      <Tags data={tags} />


      {renderBackButton()}
    </ProjectsContainer>
  );
}

ProjectPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  content: PropTypes.object.isRequired,
};

export default ProjectPage;
