/* eslint-disable react/prop-types */
export const Button = ({ children, width }) => {
  return (
    <button className="border border-secondary p-2 rounded-md text-primary text-sm hover:bg-secondary hover:text-white lg:text-lg transition ease-in-out duration-300" style={{ width }}>
      {children}
    </button>
  );
};
