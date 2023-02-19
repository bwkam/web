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
  for (const post of getPosts()) {
    if (post.data.title === title) {
      const wordsPerMinute = 200;
      const noOfWords = post.content.split(/\s/g).length;
      const minutes = noOfWords / wordsPerMinute;
      const readTime = Math.ceil(minutes);
      return readTime;
    }
  }
}
