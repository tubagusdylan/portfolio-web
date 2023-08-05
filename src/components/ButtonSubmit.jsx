/* eslint-disable react/prop-types */
export const ButtonSubmit = ({ children, width, status }) => {
  return (
    <button
      className="flex justify-center items-center bg-secondary p-2 rounded-full text-sm hover:bg-orange-300 active:bg-orange-600 text-white lg:text-lg transition ease-in-out duration-300"
      style={{ width }}
      disabled={status === "submitting"}
    >
      {children}
    </button>
  );
};
