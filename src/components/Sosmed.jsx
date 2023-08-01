import { FaInstagram, FaLinkedin, FaGithub, FaTiktok } from "react-icons/fa6";

export const Sosmed = () => {
  return (
    <>
      <div className="bg-white shadow-md p-2 rounded-full hover:-translate-y-2 transition ease-in-out duration-500">
        <a href="#" target="_blank">
          <FaInstagram size={30} className="text-tertiary" />
        </a>
      </div>
      <div className="bg-white shadow-md p-2 rounded-full hover:-translate-y-2 transition ease-in-out duration-500">
        <a href="#" target="_blank">
          <FaLinkedin size={30} className="text-tertiary" />
        </a>
      </div>
      <div className="bg-white shadow-md p-2 rounded-full hover:-translate-y-2 transition ease-in-out duration-500">
        <a href="#" target="_blank">
          <FaGithub size={30} className="text-tertiary" />
        </a>
      </div>
      <div className="bg-white shadow-md p-2 rounded-full hover:-translate-y-2 transition ease-in-out duration-500">
        <a href="#" target="_blank">
          <FaTiktok size={30} className="text-tertiary" />
        </a>
      </div>
    </>
  );
};
