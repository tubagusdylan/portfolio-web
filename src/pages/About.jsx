import { Button } from "../components/Button";
import foto from "../img/foto.png";
import { Skill } from "../components/Skill";
import { motion } from "framer-motion";

const container = {
  hidden: {
    opacity: 0,
    x: "-30vw",
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const container2 = {
  hidden: {
    opacity: 0,
    x: "30vw",
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

export const About = () => {
  return (
    <>
      <section className="lg:pt-36 pt-16">
        <div className="container xl:px-44">
          <div className="flex flex-wrap mb-20">
            <motion.div className="w-full mb-10 lg:w-1/2 pt-16" variants={container} initial="hidden" animate="visible" transition={{ type: "spring", duration: 2 }}>
              <h3 className="font-semibold text-secondary mb-1 lg:text-lg">TENTANG SAYA</h3>
              <h1 className="font-bold text-3xl mb-4 text-primary">Seorang Pembelajar</h1>
              <p className="text-tertiary opacity-80 text-base mb-6 xl:mb-12 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ullam dolores, rem repellendus ipsam deserunt deleniti eveniet esse natus distinctio mollitia, hic ad reprehenderit. Vel nam aperiam quibusdam modi ratione?
              </p>
              <Button>Services</Button>
            </motion.div>
            <motion.div className="w-full lg:w-1/2 xl:pl-40" variants={container2} initial="hidden" animate="visible" transition={{ type: "spring", duration: 2 }}>
              <div className="relative w-full">
                <img src={foto} alt="foto" className="w-[250px] mx-auto" />
                <span className="absolute -top-20 left-1/2  scale-75 lg:scale-100 -translate-x-1/2 -z-10">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width={500}>
                    <path
                      fill="#F77F4B"
                      d="M23.7,-44.9C29.6,-37.7,32.5,-29.1,33.9,-21.4C35.2,-13.6,35.1,-6.8,43,4.6C50.9,16,66.9,31.9,67.7,43.5C68.6,55,54.3,62.2,40.5,58.5C26.7,54.9,13.3,40.5,-0.2,40.8C-13.7,41.1,-27.4,56.2,-33,55.1C-38.6,53.9,-36,36.6,-42.8,24.7C-49.7,12.9,-66,6.4,-67.8,-1.1C-69.7,-8.6,-57.1,-17.2,-50.4,-29.2C-43.6,-41.3,-42.7,-56.9,-35.3,-63.2C-27.9,-69.5,-13.9,-66.6,-2.5,-62.2C8.9,-57.9,17.8,-52.1,23.7,-44.9Z"
                      transform="translate(100 100)"
                    />
                  </svg>
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Skill />
    </>
  );
};
