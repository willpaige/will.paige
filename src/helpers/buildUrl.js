import { PAGES, PAGES_PATHS } from '../constants/pages';

export const buildProjectsUrl = (slug) => `${PAGES_PATHS[PAGES.PROJECTS].url}${slug}/`;
