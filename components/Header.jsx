import Link from "next/link";
import { useState } from "react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { MoonIcon, RocketLaunchIcon, SunIcon } from "@heroicons/react/24/solid";
import { themeState } from "@/atoms/theme";
import { useRecoilState } from "recoil";
import { FaGithub } from "react-icons/fa";

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
      <div className="hidden lg:flex justify-between shadow-2xl items-center px-20 h-18 py-2">
        <div className="flex items-center space-x-2 text-3xl  font-bold cursor-pointer">
          <div>
            <Link href="/" className="text-mauve">
              bw
            </Link>
            <span className="underline text-mauve decoration-white">k</span>
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
          <Link className="hover:text-pink" href="/contact">
            Contact
          </Link>
          <FaGithub className="text-3xl cursor-pointer text-sapphire" />
          {theme === true ? (
            <SunIcon
              className="h-8 cursor-pointer hover:text-white"
              onClick={changeTheme}
            />
          ) : (
            <MoonIcon className="h-8 cursor-pointer" onClick={changeTheme} />
          )}
        </div>
      </div>

      {/* mobile */}
      <div className="lg:hidden shadow-2xl items-center h-18 py-2 px-5">
        <div className="flex w-full justify-between">
          <div className="flex items-center space-x-2 text-3xl  font-bold cursor-pointer">
            <div>
              <Link href="/" className="text-mauve">
                bw
                <span
                  className={`underline text-mauve decoration-white ${
                    theme === true ? "decoration-white" : "decoration-black"
                  }`}
                >
                  k
                </span>
              </Link>
            </div>
            <RocketLaunchIcon className="h-6 text-red" />
          </div>
          <div className="flex items-center space-x-3">
            <Link href="/">
              <FaGithub className="text-3xl text-sapphire cursor-pointer" />
            </Link>
            {theme === true ? (
              <SunIcon
                className="h-8 cursor-pointer text-sapphire hover:text-white"
                onClick={changeTheme}
              />
            ) : (
              <MoonIcon
                className="h-8 text-sapphire cursor-pointer"
                onClick={changeTheme}
              />
            )}

            <Bars3Icon
              className="h-10 lg:hidden cursor-pointer rounded-lg"
              onClick={openMenu}
            />
          </div>
        </div>
        <div
          className={`fixed top-0 ${
            clicked === false ? "right-[-250px]" : "right-0"
          } w-[240px] h-screen z-50 bg-crust p-5
      text-white duration-300 lg:hidden`}
        >
          <div className="w-full">
            <div className="flex justify-end w-full cursor-pointer">
              <XMarkIcon onClick={closeMenu} className="h-10" />
            </div>
            <div className="flex flex-col space-y-5 p-10 text-xl font-semibold">
              <Link className="hover:text-pink" href="/">
                Home
              </Link>
              <Link className="hover:text-pink" href="/about">
                About
              </Link>
              <Link className="hover:text-pink" href="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
