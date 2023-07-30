import logo from "../img/logo.png";
import { Hamburger } from "./Hamburger";
import { Button } from "./Button";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="container">
      <div className="flex justify-between items-center p-4 relative">
        <div>
          <img src={logo} alt="logo" width={50} />
        </div>
        <div>
          <Hamburger />
          <nav className="absolute right-12 top-12 bg-white p-5 rounded-lg shadow-md">
            <ul className="text-sm">
              <li className="group">
                <Link to="/">Home</Link>
              </li>
              <li className="group my-3">
                <Link to="/about">About</Link>
              </li>
              <li className="group my-3">
                <Link to="/projects">Projects</Link>
              </li>
              <li className="group my-3">
                <Link to="/services">Services</Link>
              </li>
              <li className="group my-3">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <Button>Download CV</Button>
          </nav>
        </div>
        <div className="hidden lg:block">
          <Button>Download CV</Button>
        </div>
      </div>
    </div>
  );
};
