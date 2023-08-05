import { Form } from "../components/Form";
import { PopUp } from "../components/popUp";
import { Sosmed } from "../components/Sosmed";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

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
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFail, setIsFail] = useState(false);

  const form = useRef(null);

  const handleClose = () => {
    setIsSuccess(false);
    setIsFail(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_jwjj0gs", "template_uq8j98r", form.current, "RfglJCLwIO1fIDrEH").then(
      (result) => {
        setUsername("");
        setEmail("");
        setMessage("");
        setIsSuccess(true);
        setIsFail(false);
        console.log(result.text);
      },
      (error) => {
        setIsSuccess(false);
        setIsFail(true);
        console.log(error.text);
      }
    );
  };

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
          <motion.div className="w-full lg:w-1/2 relative" variants={container2} initial="hidden" animate="visible" transition={{ type: "spring", duration: 2 }}>
            {isSuccess && (
              <PopUp background={"bg-teal-300"} color={"text-teal-700"} closePopUp={handleClose}>
                Success
              </PopUp>
            )}
            {isFail && (
              <PopUp background={"bg-pink-300"} color={"text-pink-700"} closePopUp={handleClose}>
                Success
              </PopUp>
            )}
            <Form
              submit={handleSubmit}
              refForm={form}
              username={username}
              email={email}
              message={message}
              onNameChange={(e) => setUsername(e.target.value)}
              onEmailChange={(e) => setEmail(e.target.value)}
              onMessageChange={(e) => setMessage(e.target.value)}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
