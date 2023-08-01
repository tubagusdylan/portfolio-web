import { Form } from "../components/Form";
import { Sosmed } from "../components/Sosmed";

export const Contact = () => {
  return (
    <section className="pt-16 lg:pt-32 mb-12">
      <div className="container xl:px-44">
        <div className="flex flex-wrap pt-16">
          <div className="w-full lg:w-1/2 mb-10">
            <h1 className="font-bold text-5xl text-secondary mb-2">GET IN TOUCH</h1>
            <h3 className="font-semibold text-2xl text-primary">We are looking forward to start a project with you</h3>
            <div className="flex mt-6 gap-6">
              <Sosmed />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};
