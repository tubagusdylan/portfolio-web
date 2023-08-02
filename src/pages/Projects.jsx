import { ProjectWrap } from "../components/ProjectWrap";
import project1 from "../img/project1.png";
import project2 from "../img/project2.png";

export const Projects = () => {
  return (
    <section className="pt-32 lg:pt-36 min-h-screen bg-gradient-to-tl from-secondary to-white">
      <div className="container xl:px-44">
        <div className="w-full xl:w-10/12 xl:mx-auto gap-3 lg:gap-0 flex flex-wrap pb-20 justify-center items-center">
          <ProjectWrap source={project1} title={"Web portfolio"} href={"https://tubagusdylan.github.io/portfolio-tailwindcss/"}>
            A frontend training project that built with tailwindcss technology
          </ProjectWrap>
          <ProjectWrap source={project2} title={"Quiz App"} href={"https://quiz-app-v1-reactjs.vercel.app/"}>
            A quiz app which implement API from opentdb.com. Built with React JS technology
          </ProjectWrap>
        </div>
      </div>
    </section>
  );
};
