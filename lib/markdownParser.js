import { join } from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';
import prism from 'remark-prism';

export const getList = (path) => {
  const dirname = join(process.cwd(), path);
  const filenames = fs.readdirSync(dirname).filter((filename) => !filename.startsWith('.'));
  return filenames.map((filename) => {
    const content = fs.readFileSync(join(dirname, filename), 'utf8');
    const { data, content: fileContent } = matter(content);

    return {
      ...data,
      slug: filename.replace('.md', ''),
      content: fileContent,
      createdAt: data.date ? Number(new Date(data.date)) : null
    };
  });
};

export const getFileBySlug = async (path, slug) => {
  const filePath = join(process.cwd(), path, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content: markdownContent } = matter(fileContent);

  let content;

  if (markdownContent) {
    content = (await remark().use(html).use(prism).process(markdownContent)).toString();
  }

  return {
    ...data,
    slug,
    content,
    createdAt: data.date ? Number(new Date(data.date)) : null
  };
};
