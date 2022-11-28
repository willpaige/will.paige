import * as React from 'react';
import App from '../components/app/app';
import { themeMap } from '../constants/theme';
import { PAGES } from '../constants/pages';

function PerformancePage() {
  return (
    <App theme={themeMap.TEA_GREEN} activePage={PAGES.HOME} />
  );
}

export default PerformancePage;

export function Head() {
  return <title>Will Paige | Website Performance</title>;
}
