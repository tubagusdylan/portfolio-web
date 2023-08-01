import esp from "../icons/esp.svg";
import arduino from "../icons/arduino.svg";
import easyeda from "../icons/easyeda.png";

export const Skill = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container xl:px-44 text-white">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 mb-10">
            <h1 className="text-2xl font-bold tracking-wider mb-4">Hardware Skills</h1>
            <div className="flex flex-wrap gap-4">
              <div className="p-3 shadow-md rounded-lg bg-slate-600 w-1/5 hover:translate-y-3 transition ease-in-out duration-300">
                <img src={esp} alt="eps32" width={45} className="mx-auto" />
                <span className="block pt-2 text-center">ESP32</span>
              </div>
              <div className="p-3 shadow-md rounded-lg bg-slate-600 w-1/5 hover:translate-y-3 transition ease-in-out duration-300">
                <img src={arduino} alt="arduino" width={45} className="mx-auto" />
                <span className="block pt-2 text-center">Arduino</span>
              </div>
              <div className="p-3 shadow-md rounded-lg bg-slate-600 w-1/5 hover:translate-y-3 transition ease-in-out duration-300">
                <img src={easyeda} alt="easyeda" width={45} className="mx-auto" />
                <span className="block pt-2 text-center">EasyEda</span>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h1 className="text-2xl font-bold tracking-wider mb-4">Programming Skills</h1>
          </div>
        </div>
      </div>
    </section>
  );
};
