import { Ornament } from "../components/Ornament";

export const Home = () => {
  return (
    <section className="pt-44 h-[100vh]">
      <Ornament />
      <div className="container xl:px-36">
        <div className="w-full lg:w-[600px] mx-auto text-center">
          <span className="font-semibold mb-4 block text-lg">Hello, I am</span>
          <h1 className="font-bold text-2xl text-primary mb-2 lg:text-4xl">Tubagus Dylan</h1>
          <span className="block text-4xl font-bold text-secondary mb-6 lg:text-6xl">IoT Enthusiast</span>
          <p className="mb-6 text-lg lg:text-xl text-tertiary opacity-75">I am an Electrical Engineering with 2 Years experience of hardware IoT development and 1 years of frontend development.</p>
          <div className="flex w-full justify-between items-center"></div>
        </div>
      </div>
    </section>
  );
};
