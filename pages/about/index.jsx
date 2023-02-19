import Meta from "@/components/Meta";

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
      <div className="flex justify-center items-center px-40 py-10 text-subtext1 text-2xl">
        <p className="font-bold leading-10">
          Just another 15 years old kid with abnormal enthusiasm for Computer
          Science. I'm also a FOSS lover and I like learning about how low level
          operations are done such as Xorg which is also another topic I'm
          interested at. I'm good at front-end web development and can help with
          building optimized and elegant websites for you, just hit me up ⚡ ❤️
        </p>
      </div>
      {/* skills */}
      <div className="flex flex-col justify-center items-center space-y-5">
        <h2 className="text-4xl text-white font-bold cons">Skills</h2>
        <p className="text-mauve text-xl font-light">
          Below are technologies and tools I use at my work 👇
        </p>
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
