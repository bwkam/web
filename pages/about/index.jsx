import Meta from "@/components/Meta";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import "@fontsource/dosis";
import { useRecoilValue } from "recoil";
import { themeState } from "@/atoms/theme";

function About() {
  return (
    <div className="flex flex-col min-h-screen py-10">
      <Meta
        title={"About | Beshoy Kamel"}
        keywords="beshoy kamel, bwkam, about beshoy kamel, about bwkam, who is beshoy kamel, who is bwkam"
        description="About Beshoy Kamel"
        image="/home.jpg"
        width={1200}
        height={630}
      />
      <div className="flex justify-center font-bold leading-10 items-center px-40 py-10 text-subtext1 text-2xl">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                `
                hi, I'm just a regular 15 years old kid with abnormal enthusiasm for Computer Science and FOSS. I've been passionate about computers ever since I was a kid, thanks to my father who exposed this tech to me at a very young age. I'm a self taught programmer, I kicked off my journey by playing with Roblox Studio, eventually, I decided to learn low level programming, move to Linux, learn React/NextJS, and adopt HaxeFlixel as my primary game engine. I'm currently attempting to recreate software such as window managers, terminal emulators, useful web apps...etc.
              `
              )
              .pauseFor(2500)
              .start();
          }}
          options={{
            delay: 50,
          }}
        />
      </div>

      {/* skills */}
      <div className="flex flex-col justify-center items-center space-y-5">
        <motion.h2
          initial={{
            x: -100,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
          className={`text-4xl font-bold ${
            useRecoilValue(themeState) === true ? "text-white" : "text-black"
          }`}
        >
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  `
               Skills`
                )
                .pauseFor(2500)
                .start();
            }}
            options={{
              delay: 20,
            }}
          />
        </motion.h2>
        <div className="text-mauve text-xl font-light">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  `
                Below are technologies and tools I use at my work 👇`
                )
                .pauseFor(2500)
                .start();
            }}
            options={{
              delay: 70,
            }}
          />
        </div>

        {/* <ul className="flex flex-col space-y-5 text-subtext0 text-lg list-disc list-inside">
          <li>OS: Arch Linux 🐧</li>
          <li>WM/DE: Qtile, Hyprland, and GNOME 💨</li>
          <li>Languages: Python, NodeJS, C/C++, Lua, HTML, CSS, and Haxe 🐍</li>
          <li>Front-end Frameworks: React/NextJS 🖌️</li>
          <li>Primary CSS framework: TailwindCSS 💙 </li>
          <li>Game engine: Haxeflixel 🌈</li>
        </ul> */}
        <div className="flex justify-center">
          <img src="https://skillicons.dev/icons?i=js,html,css,react,nextjs,haxe,haxeflixel,c,tailwindcss,linux,git,firebase,mongodb,nodejs,express,figma,ps,bash,neovim,vim,github,markdown,postman,py,vscode,&perline=10&theme=dark" />
        </div>
      </div>
    </div>
  );
}

export default About;
