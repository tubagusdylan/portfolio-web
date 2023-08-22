/* eslint-disable react/prop-types */
export const ProjectWrap = ({ source, title, children, href }) => {
  return (
    <div className="w-full lg:w-1/2 p-4">
      <div className="rounded-lg overflow-hidden bg-white shadow-lg hover:shadow-secondary hover:-translate-y-3 hover:shadow-xl transition ease-in-out duration-300">
        <a href={href} target="_blank" rel="noreferrer">
          <img src={source} alt="project-1" className="aspect-video" />
        </a>
        <div className="my-3 p-4 h-32 overflow-hidden">
          <h2 className="font-bold text-lg text-secondary mb-2">{title}</h2>
          <p className="text-base text-primary">{children}</p>
        </div>
      </div>
    </div>
  );
};
