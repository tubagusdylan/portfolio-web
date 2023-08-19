/* eslint-disable no-unused-vars */
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { Navbar } from "./components/Navbar";
import { useState, useEffect } from "react";

function App() {
  const [navFixed, setNavFixed] = useState("");

  useEffect(() => {
    handleNav();
  }, []);

  function handleNav() {
    window.onscroll = () => {
      window.scrollY > 0 ? setNavFixed("navbar-fixed") : setNavFixed("");
    };
  }

  return (
    <>
      <header className={`bg-transparent absolute top-0 left-0 w-full z-10 ${navFixed}`}>
        <Navbar />
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
