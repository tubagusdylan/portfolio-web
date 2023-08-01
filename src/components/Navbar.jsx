import logo from "../img/logo.png";
import { Hamburger } from "./Hamburger";
import { Button } from "./Button";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const [hamStyle, setHamStyle] = useState("");
  const [isShowMenu, setIsShowMenu] = useState(false);

  const handleMenu = () => {
    !isShowMenu ? setHamStyle("hamburger-active") : setHamStyle("");
    setIsShowMenu(!isShowMenu);
  };

  return (
    <div className="container xl:px-44">
      <div className="flex justify-between items-center py-4  relative">
        <div>
          <img src={logo} alt="logo" width={50} className="lg:w-16" />
        </div>
        <div>
          <Hamburger onMenuShow={handleMenu} hamStyle={hamStyle} />
          <nav className="w-full max-w-[200px] absolute right-12 top-12 bg-white p-5 rounded-lg shadow-md md:block md:static md:bg-transparent md:shadow-none md:rounded-none md:max-w-full" hidden={!isShowMenu}>
            <ul className="block text-sm md:flex lg:text-lg">
              <li className="group my-3">
                <NavLink to="/" className="group-hover:text-secondary md:mx-4 lg:mx-8 group-hover:underline underline-offset-8">
                  Home
                </NavLink>
              </li>
              <li className="group my-3">
                <NavLink to="/about" className="group-hover:text-secondary md:mx-4 lg:mx-8 group-hover:underline underline-offset-8">
                  About
                </NavLink>
              </li>
              <li className="group my-3">
                <NavLink to="/projects" className="group-hover:text-secondary md:mx-4 lg:mx-8 group-hover:underline underline-offset-8">
                  Projects
                </NavLink>
              </li>
              <li className="group my-3">
                <NavLink to="/contact" className="group-hover:text-secondary md:mx-4 lg:mx-8 group-hover:underline underline-offset-8">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="w-full md:hidden my-1">
              <Button width={"100%"}>Download CV</Button>
            </div>
          </nav>
        </div>
        <div className="hidden md:block">
          <Button>Download CV</Button>
        </div>
      </div>
    </div>
  );
};
