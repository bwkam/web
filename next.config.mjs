import remarkFrontmatter from 'remark-frontmatter';
import rehypeHighlight from 'rehype-highlight';

export default {
   
  webpack: (config, options) => {
    config.resolve.fallback = { fs: false };
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          options: {
            providerImportSource: '@mdx-js/react',
            remarkPlugins: [remarkFrontmatter],
            rehypePlugins: [rehypeHighlight],
          },
        },
      ],
    });

    return config;
  },
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  
};

 const isGithubActions = process.env.GITHUB_ACTIONS || false

    let assetPrefix = ''
    let basePath = '/'

    if (isGithubActions) {
      const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

      assetPrefix = `/${repo}/`
      basePath = `/${repo}`
}