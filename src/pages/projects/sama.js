import * as React from 'react';
import ProjectPage from '../../components/projectPage/projectPage';
import { PROJECT_KEYS, PROJECTS } from '../../content/projects';

function Sama() {
  const content = PROJECTS[PROJECT_KEYS.SAMA];

  return (
    <ProjectPage content={content} />
  );
}

export default Sama;

export function Head() {
  return <title>Will Paige - Projects - Botanyblend</title>;
}
