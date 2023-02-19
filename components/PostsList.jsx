import { TagIcon } from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

function PostsList({ input, posts }) {
  const filteredData = posts.filter((el) => {
    if (input === "") {
      return el;
    } else {
      return el.data.title.toLowerCase().includes(input);
    }
  });

  return (
    <div className="mt-10">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6 min-h-screen">
        {filteredData.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className="group cursor-pointer rounded-lg overflow-hidden">
              <Image
                className=" w-50 object-cover h-80 lg:group-hover:scale-105 transition-transform duration-200 ease-in-out"
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

export default PostsList;
