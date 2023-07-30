/* eslint-disable react/prop-types */
export const Button = ({ children }) => {
  return <button className="w-full border border-secondary p-2 rounded-md text-primary text-sm hover:bg-secondary hover:text-white lg:text-lg">{children}</button>;
};
