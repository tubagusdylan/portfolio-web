/* eslint-disable react/prop-types */
import { FaXmark } from "react-icons/fa6";

export const PopUp = ({ children, background, color, closePopUp }) => {
  return (
    <div className={`absolute flex items-center -top-6 right-0 ${background} ${color} rounded-md py-2 px-2`}>
      <span className="mr-2">{children}</span>
      <FaXmark size={20} className="hover:text-white cursor-pointer" onClick={closePopUp} />
    </div>
  );
};
