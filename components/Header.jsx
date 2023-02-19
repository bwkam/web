import Link from "next/link";
import { useState } from "react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { MoonIcon, RocketLaunchIcon, SunIcon } from "@heroicons/react/24/solid";
import { themeState } from "@/atoms/theme";
import { useRecoilState } from "recoil";
import { FaGithub, FaMoon, FaNewspaper, FaSearch, FaSun } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { IoMdContact } from "react-icons/io";
import { BsQuestionCircle } from "react-icons/bs";
import "@fontsource/dosis";

function Header() {
  const [clicked, setClicked] = useState(false);
  const [theme, setTheme] = useRecoilState(themeState);

  function openMenu() {
    setClicked(true);
  }

  function closeMenu() {
    setClicked(false);
  }

  function changeTheme() {
    setTheme(theme === true ? false : true);
  }

  return (
    <div>
      {/* lg >= */}
      <div className="hidden lg:flex justify-between  items-center px-10  pt-8">
        <div className="flex items-center space-x-2 text-3xl  font-bold cursor-pointer">
          <div>
            <Link href="/" className="text-mauve">
              bw
            </Link>
            <span
              className={`underline text-mauve ${
                theme === true ? "decoration-white" : "decoration-black"
              }`}
            >
              k
            </span>
          </div>
          <RocketLaunchIcon className="h-6 text-red" />
        </div>
        <div className="flex w-full text-xxl font-semibold space-x-20 justify-end text-sapphire items-center">
          <Link className="hover:text-pink" href="/">
            Home
          </Link>
          <Link className="hover:text-pink" href="/about">
            About
          </Link>
          <Link className="hover:text-pink" href="/blog">
            Blog
          </Link>
          <Link className="hover:text-pink" href="/contact">
            Contact
          </Link>
          <div className="h-full">|</div>
          <div className="flex space-x-5">
            <FaGithub className="text-3xl cursor-pointer text-sapphire" />
            {theme === true ? (
              <FaSun
                className=" cursor-pointer text-3xl text-pink"
                onClick={changeTheme}
              />
            ) : (
              <FaMoon
                className="cursor-pointer text-3xl text-pink"
                onClick={changeTheme}
              />
            )}
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="flex lg:hidden w-full justify-between items-center px-10 pt-8 ">
        <div className="flex items-center space-x-2 text-3xl  font-bold cursor-pointer">
          <div>
            <Link href="/" className="text-mauve">
              bw
            </Link>
            <span
              className={`underline text-mauve  ${
                theme === true ? "decoration-white" : "decoration-black"
              }`}
            >
              k
            </span>
          </div>
          <RocketLaunchIcon className="h-6 text-red" />
        </div>
        <div className="flex space-x-5">
          <FaGithub className="text-3xl cursor-pointer text-sapphire" />
          {theme === true ? (
            <FaSun
              className=" cursor-pointer text-3xl text-pink"
              onClick={changeTheme}
            />
          ) : (
            <FaMoon
              className="cursor-pointer text-3xl text-pink"
              onClick={changeTheme}
            />
          )}
        </div>
      </div>
      <div
        className={`lg:hidden fixed bottom-3 bg-crust flex justify-center items-center ${
          theme === true ? "text-white border-white" : "text-black border-black"
        } text-3xl left-[50%] rounded-full z-[99] space-x-3 px-3 py-2 translate-x-[-50%] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60  border-2 shadow-xl`}
      >
        <Link href="/">
          <AiFillHome />
        </Link>
        <Link href="/contact">
          <IoMdContact />
        </Link>
        <Link href="/about">
          <BsQuestionCircle />
        </Link>
        <div>|</div>
        <FaGithub className="text-3xl cursor-pointer text-green" />
        <Link href="/blog">
          <FaNewspaper className="text-3xl cursor-pointer text-red" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
