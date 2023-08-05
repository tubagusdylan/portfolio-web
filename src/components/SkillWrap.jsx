/* eslint-disable react/prop-types */
export const SkillWrap = ({ children, source }) => {
  return (
    <div className="p-4 text-sm shadow-md rounded-lg bg-slate-600 w-1/3 lg:w-1/5 hover:translate-y-3 transition ease-in-out duration-300">
      <img src={source} alt="eps32" width={45} className="mx-auto" />
      <span className="block pt-2 text-center">{children}</span>
    </div>
  );
};
