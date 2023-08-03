import { Form } from "../components/Form";
import { Sosmed } from "../components/Sosmed";
import { motion } from "framer-motion";

const container = {
  hidden: {
    opacity: 0,
    y: "-30vw",
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const container2 = {
  hidden: {
    opacity: 0,
    y: "30vw",
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const Contact = () => {
  return (
    <section className="pt-16 lg:pt-32 mb-12">
      <div className="container xl:px-44">
        <div className="flex flex-wrap pt-16">
          <motion.div className="w-full lg:w-1/2 mb-10" variants={container} initial="hidden" animate="visible" transition={{ type: "spring", duration: 2 }}>
            <h1 className="font-bold text-5xl text-secondary mb-2">GET IN TOUCH</h1>
            <h3 className="font-semibold text-2xl text-primary">We are looking forward to start a project with you</h3>
            <div className="flex mt-6 gap-6">
              <Sosmed />
            </div>
          </motion.div>
          <motion.div className="w-full lg:w-1/2" variants={container2} initial="hidden" animate="visible" transition={{ type: "spring", duration: 2 }}>
            <Form />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
