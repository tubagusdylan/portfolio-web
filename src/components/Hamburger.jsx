/* eslint-disable react/prop-types */
export const Hamburger = ({ onMenuShow, hamStyle }) => {
  return (
    <button className={`block ${hamStyle} md:hidden`} onClick={onMenuShow}>
      <span className="hamburger-line transition duration-200 ease-in-out origin-top-left"></span>
      <span className="hamburger-line transition duration-200 ease-in-out"></span>
      <span className="hamburger-line transition duration-200 ease-in-out origin-bottom-left"></span>
    </button>
  );
};
