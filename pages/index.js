import Head from "next/head";
import Link from "next/link";
import "@fontsource/dosis";
import { GetStaticProps } from "next";
import { getPosts } from "@/scripts/utils";
import Image from "next/image";
import { TagIcon } from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/24/solid";
import Typewriter from "typewriter-effect";
import { themeState } from "@/atoms/theme";
import { useRecoilValue } from "recoil";
import Meta from "@/components/Meta";

export default function Home({ posts }) {
  const theme = useRecoilValue(themeState);
  return (
    <div className="font-dosis ">
      <Meta
        title={"Beshoy Kamel"}
        keywords="beshoy kamel, bwkam, beshoy kamel github, bwkam github"
        description="Beshoy Kamel's personal website"
        image="home.jpg"
        width={1200}
        height={630}
      />
      {/* simple intro */}
      <section className="flex flex-col h-80 justify-center items-center space-y-2">
        <h1 className="text-pink text-6xl font-extrabold">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "bwkam"
                )
                .start();
            }}
            options={{
              delay: 70,
            }}
          />
        </h1>
        <p className="text-green text-2xl">
          A <span className="underline">full-stack</span> developer. 😺
        </p>
        <div
          className={`w-full pt-2 max-w-2xl px-20 lg:px-0 font-semibold  text-xxl ${
            theme === true ? "text-white" : "text-black"
          }`}
        >
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "Simple is merely programmer's paradise they say, but some of us still enjoy drowning in obsolete, partially documented, and buggy code, and fix it themselves."
                )
                .pauseFor(2500)
                .start();
            }}
            options={{
              delay: 50,
            }}
          />
        </div>
      </section>
      {/* <div className='flex justify-center'>
        <button className='rounded-2xl bg-crust p-4 text-white text-2xl font-light shadow-xl hover:text-sky'><Link href="/blog">Check out my blog</Link></button>
      </div> */}

      <section className="grid grid-cols-1 gap-3 p-2 sm:p-10">
        {posts.slice(0, 3).sort((a, b) => a.data.id - b.data.id).reverse().map((post) => (
          console.log(post.data.id),
          <Link key={post.data.id} href={`/blog/${post.slug}`}>
            <div className="group cursor-pointer rounded-lg overflow-hidden">
              <Image
                className=" w-50 object-cover bg-cover h-80 lg:group-hover:scale-105 transition-transform duration-200 ease-in-out"
                src={require("../images/" + post.data.image.path)}
                width={post.data.image.width}
                height={post.data.image.height}
                alt="cover image"
              />
              <div className="bg-crust flex flex-col p-2 space-y-2 py-3">
                <h3 className="text-subtext0 text-2xl text-center font-bold">
                  {post.data.title}
                </h3>
                <div className="flex items-center justify-center text-subtext1 space-x-1">
                  <ClockIcon className="h-4" />
                  <h5>published on {post.data.publishedOn}</h5>
                </div>
                <div className="flex justify-center">
                  <h5 className="text-peach font-semibold">
                    {post.data.excerpt}
                  </h5>
                </div>
                <div className="flex justify-end text-sapphire items-center space-x-1">
                  <TagIcon className="h-4" />
                  <h6>{post.data.tags}</h6>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}

export const getStaticProps = () => {
  const posts = getPosts();

  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
};
