import { getList, getFileBySlug } from '../lib/markdownParser';

export const getAllArticles = () => {
  const articles = getList('_data/articles');

  return articles.sort((a, b) => a.createdAt - b.createdAt).reverse();
};

export const getArticleBySlug = async (slug) => {
  const article = await getFileBySlug('_data/articles', slug);

  return article;
};
