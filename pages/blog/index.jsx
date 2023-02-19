import Meta from "@/components/Meta";
import PostsList from "@/components/PostsList";
import { useState } from "react";
import { getPosts } from "@/scripts/utils";
import "@fontsource/dosis";

function Blog({ posts }) {
  const [input, setInput] = useState("");

  function inputHandler(e) {
    var lowerCase = e.target.value.toLowerCase();
    setInput(lowerCase);
  }

  return (
    <div className="min-h-screen pt-20 max-w-5xl mx-auto">
      <Meta
        title="Blog | Beshoy Kamel"
        keywords="beshoy kamel's blog, bwkam's blog,  beshoy kamel, bkamel"
        image="/home.jpg"
        width={1200}
        height={630}
        description="Beshoy Kamel's blog"
      />
      <form>
        <div className="flex flex-col justify-center items-center text-3xl space-y-4 px-5">
          <label>Search Posts</label>
          <input
            className="rounded-full bg-crust  px-4 py-3 w-full shadow-lg"
            type="search"
            placeholder="Search Posts"
            onChange={inputHandler}
          />
        </div>
      </form>

      <PostsList input={input} posts={posts} />
    </div>
  );
}

export default Blog;

export const getStaticProps = () => {
  const posts = getPosts();
  return {
    props: {
      posts,
    },
  };
};
