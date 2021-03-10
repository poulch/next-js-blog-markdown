import Head from 'next/Head';
import Layout from '../../components/Layout';
import { getAllArticles, getArticleBySlug } from '../../services/articles';

export const getStaticPaths = () => {
  const articles = getAllArticles();

  return {
    paths: articles.map((article) => ({
      params: { slug: article.slug }
    })),
    fallback: false
  };
};

export const getStaticProps = async ({ params }) => {
  const article = await getArticleBySlug(params.slug);

  return {
    props: { article }
  };
};

export default function Article({ article }) {
  return (
    <Layout>
      <Head>
        <title>{article.title}</title>
        <link href="https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css" rel="stylesheet" />
      </Head>
      <div>
        <h1 className="text-center text-3xl mb-10">{article.title}</h1>
        <div
          className="max-w-3xl mx-auto articleBody"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>
    </Layout>
  );
}
