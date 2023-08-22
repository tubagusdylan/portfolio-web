import { ProjectWrap } from "../components/ProjectWrap";
import { motion } from "framer-motion";
import project1 from "../img/project1.png";
import project2 from "../img/project2.png";
import project3 from "../img/project3.png";
import project4 from "../img/project4.png";
import hardware_1 from "../img/hardware_1.png";
import hardware_2 from "../img/hardware_2.png";

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
    <section className="pt-32 lg:pt-36 min-h-screen">
      <div className="container xl:px-44">
        <motion.h1 className="xl:pl-32 font-bold text-primary text-3xl mb-6 text-center xl:text-left" variants={title} initial="hidden" animate="visible" transition={{ type: "spring" }}>
          My Latest Project
        </motion.h1>
        <h2 className="text-secondary font-semibold text-lg xl:pl-32">Web</h2>
        <motion.div className="w-full xl:w-10/12 xl:mx-auto gap-3 lg:gap-0 flex flex-wrap mb-10 items-center" variants={container} initial="hidden" animate="visible" transition={{ type: "spring", duration: 2 }}>
          <ProjectWrap source={project4} title={"Product Catalog"} href={"https://ecommerce-catalog-opal.vercel.app/"}>
            A simple product catalog which implement API from fakestoreapi. Built with Vue JS
          </ProjectWrap>
          <ProjectWrap source={project1} title={"Shopping List App"} href={"https://daftar-belanja-app.vercel.app/"}>
            A simple shopping list app that implement CRUD. Built with Vue JS.
          </ProjectWrap>
          <ProjectWrap source={project3} title={"Authentication Page"} href={"https://github.com/tubagusdylan/jwt-auth"}>
            An authentication page, built with React JS, Express JS, and MySQL databases.
          </ProjectWrap>
          <ProjectWrap source={project2} title={"Quiz App"} href={"https://quiz-app-v1-reactjs.vercel.app/"}>
            A quiz app which implement API from opentdb.com. Built with React JS technology
          </ProjectWrap>
        </motion.div>
        <h2 className="text-secondary font-semibold text-lg xl:pl-32">Hardware</h2>
        <motion.div className="w-full xl:w-10/12 xl:mx-auto gap-3 lg:gap-0 flex flex-wrap mb-10 justify-center items-center" variants={container} initial="hidden" animate="visible" transition={{ type: "spring", duration: 2 }}>
          <ProjectWrap source={hardware_1} title={"Flood Detection Prototype"} href="#">
            A prototype that can detect flood. It has two sensors, one for measure distance between water and the ground. Another one is for detect the water it self.
          </ProjectWrap>
          <ProjectWrap source={hardware_2} title={"Energy Consumption Monitoring"} href="#">
            A prototype for monitoring energy consumption on a electronics hardware. It use PZEM-004t sensor.
          </ProjectWrap>
        </motion.div>
      </div>
    </section>
  );
};
