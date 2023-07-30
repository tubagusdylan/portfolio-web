/* eslint-disable no-unused-vars */
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <header className="bg-transparent absolute top-0 left-0 w-full z-10">
        <Navbar />
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
