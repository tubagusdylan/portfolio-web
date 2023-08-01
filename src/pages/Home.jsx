import { Ornament } from "../components/Ornament";
import { Sosmed } from "../components/Sosmed";

export const Home = () => {
  return (
    <section className="pt-44 h-[100vh]">
      <Ornament />
      <div className="container xl:px-36">
        <div className="w-full lg:w-[600px] mx-auto text-center">
          <span className="font-semibold mb-4 block text-lg">Hello, I am</span>
          <h3 className="font-bold text-2xl text-primary mb-2 lg:text-4xl">Tubagus Dylan</h3>
          <h1 className="block text-4xl font-bold text-secondary mb-6 lg:text-6xl">IoT Enthusiast</h1>
          <p className="mb-6 text-lg lg:text-xl text-tertiary opacity-75">I am an Electrical Engineering Student with 2 Years experience of hardware IoT Development and 1 years of Frontend Development.</p>
          <div className="flex w-[70%] md:w-[55%] lg:w-1/2 justify-between items-center mx-auto mt-14">
            <Sosmed />
          </div>
        </div>
      </div>
    </section>
  );
};
