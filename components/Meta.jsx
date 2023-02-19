import Head from "next/head";

const Meta = ({ title, keywords, image, description, width, height }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={`/blog/${title}`} />
      <meta
        property="og:image"
        content={`/${image.toLowerCase().replace(/\s/g, "-")}`}
      />
      <meta property="og:site_name" content="Beshoy Kamel" />
      <meta property="og:description" content={description} />
      <meta property="og:image:width" content={width} />
      <meta property="og:image:height" content={height} />
      <meta charSet="utf-8"></meta>
    </Head>
  );
};

export default Meta;

// let's set a default title
Meta.defaultProps = {
  title: "bwkam blog post",
};
