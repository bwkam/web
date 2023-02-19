import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const getPosts = () => {
  const dirFiles = fs.readdirSync(path.join(process.cwd(), 'pages', 'blog'), {
    withFileTypes: true,
  });

  const posts = dirFiles
    .map((file) => {
      if (!file.name.endsWith('.mdx')) return;

      const fileContent = fs.readFileSync(
        path.join(process.cwd(), 'pages', 'blog', file.name),
        'utf-8'
      );
      const { data, content } = matter(fileContent);

      const slug = file.name.replace(/.mdx$/, '');
      return { data, content, slug };
    })
    .filter((post) => post);

  return posts
};

export const getReadTime = (title) => {
  const {content} = matter(fs.readFileSync(path.join(process.cwd(), 'pages', 'blog', title + '.mdx'), 'utf-8'));
  const wordsPerMinute = 200;
  const noOfWords = content.split(/\s/g).length;
  const minutes = noOfWords / wordsPerMinute;
  const readTime = Math.ceil(minutes);
  return readTime;
}
