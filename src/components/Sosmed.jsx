import { FaInstagram, FaLinkedin, FaGithub, FaTiktok } from "react-icons/fa6";

export const Sosmed = () => {
  return (
    <>
      <div className="bg-white shadow-md p-2 rounded-full hover:-translate-y-2 transition ease-in-out duration-500">
        <a href="https://www.instagram.com/tubagusdylan/" target="_blank" rel="noreferrer">
          <FaInstagram size={30} className="text-tertiary" />
        </a>
      </div>
      <div className="bg-white shadow-md p-2 rounded-full hover:-translate-y-2 transition ease-in-out duration-500">
        <a href="https://www.linkedin.com/in/tubagusdylan" target="_blank" rel="noreferrer">
          <FaLinkedin size={30} className="text-tertiary" />
        </a>
      </div>
      <div className="bg-white shadow-md p-2 rounded-full hover:-translate-y-2 transition ease-in-out duration-500">
        <a href="https://github.com/tubagusdylan" target="_blank" rel="noreferrer">
          <FaGithub size={30} className="text-tertiary" />
        </a>
      </div>
      <div className="bg-white shadow-md p-2 rounded-full hover:-translate-y-2 transition ease-in-out duration-500">
        <a href="https://www.tiktok.com/@tubagusdylan" target="_blank" rel="noreferrer">
          <FaTiktok size={30} className="text-tertiary" />
        </a>
      </div>
    </>
  );
};
