import { ProjectWrap } from "../components/ProjectWrap";
import { motion } from "framer-motion";
import project1 from "../img/project1.png";
import project2 from "../img/project2.png";

const container = {
  hidden: {
    opacity: 0,
    y: "30vh",
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const title = {
  hidden: {
    x: "-10vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

export const Projects = () => {
  return (
    <section className="pt-32 lg:pt-36 min-h-screen bg-gradient-to-tl from-secondary to-white">
      <div className="container xl:px-44">
        <motion.h1 className="xl:pl-32 font-bold text-primary text-3xl mb-6 text-center xl:text-left" variants={title} initial="hidden" animate="visible" transition={{ type: "spring" }}>
          My Latest Project
        </motion.h1>
        <motion.div className="w-full xl:w-10/12 xl:mx-auto gap-3 lg:gap-0 flex flex-wrap pb-20 justify-center items-center" variants={container} initial="hidden" animate="visible" transition={{ type: "spring", duration: 2 }}>
          <ProjectWrap source={project1} title={"Web portfolio"} href={"https://tubagusdylan.github.io/portfolio-tailwindcss/"}>
            A frontend training project that built with tailwindcss technology
          </ProjectWrap>
          <ProjectWrap source={project2} title={"Quiz App"} href={"https://quiz-app-v1-reactjs.vercel.app/"}>
            A quiz app which implement API from opentdb.com. Built with React JS technology
          </ProjectWrap>
        </motion.div>
      </div>
    </section>
  );
};
