import { getList } from '../lib/markdownParser';

export const getAllProjects = () => {
  const projects = getList('_data/projects');

  return projects.sort((a, b) => a.createdAt - b.createdAt).reverse();
};
