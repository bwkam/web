import { themeState } from "@/atoms/theme";
import { useRecoilValue } from "recoil";
import { motion } from "framer-motion";

const MDXComponents = {
  h1: (props) => (
    <div className="flex items-center space-x-2">
      <span className="text-5xl text-sapphire font-bold">#</span>
      <motion.h1
        className="text-5xl py-5 font-bold text-peach"
        initial={{
          opacity: 0,
          x: -250,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          type: "tween",
          duration: 0.5,
        }}
        {...props}
      />
    </div>
  ),
  h2: (props) => (
    <div className="flex items-center">
      <span className="text-3xl text-sapphire font-bold">&#60;</span>
      <h2 className="text-3xl text-subtext1 py-4 font-semibold" {...props} />
      <span className="text-3xl text-sapphire font-bold pl-2"> /&#62;</span>
    </div>
  ),
  p: (props) => (
    <p
      className={`font-bold text-xxl py-5 ${
        ThemeState() === true ? "text-white" : "text-black"
      }`}
      {...props}
    />
  ),
  li: (props) => (
    <li
      className="font-extrabold text-mauve list-disc list-inside"
      {...props}
    />
  ),
  ol: (props) => <ol className="py-5" {...props} />,
  ul: (props) => <ol className="py-5" {...props} />,
  pre: (props) => <pre className="py-7" {...props} />,
  img: (props) => (
    <img className="py-10 object-cover bg-cover mx-auto" {...props} />
  ),
  blockquote: (props) => (
    <blockquote className={`text-4xl font-light`} {...props} />
  ),
  h3: (props) => (
    <h3
      className={`${ThemeState() === true ? "text-white" : "text-black"}`}
      {...props}
    />
  ),
};

export function ThemeState() {
  const theme = useRecoilValue(themeState);
  return theme;
}

export default MDXComponents;
