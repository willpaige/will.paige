import * as React from 'react';
import ProjectPage from '../../components/projectPage/projectPage';
import { PROJECT_KEYS, PROJECTS } from '../../content/projects';

function Botanyblend() {
  const content = PROJECTS[PROJECT_KEYS.BOTANYBLEND];

  return (
    <ProjectPage content={content} />
  );
}

export default Botanyblend;

export function Head() {
  return <title>Will Paige - Projects - Botanyblend</title>;
}
