import esp from "../icons/esp.svg";
import arduino from "../icons/arduino.svg";
import easyeda from "../icons/easyeda.png";
import c from "../icons/c.svg";
import cpp from "../icons/cpp.svg";
import js from "../icons/js.svg";
import nodejs from "../icons/nodejs.svg";
import python from "../icons/python.svg";
import react from "../icons/react.svg";
import tailwind from "../icons/tailwind.svg";
import boostrap from "../icons/bootstrap.svg";

import { SkillWrap } from "./SkillWrap";

export const Skill = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container xl:px-44 text-white">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 mb-10">
            <h1 className="text-2xl font-bold tracking-wider mb-4">Hardware Skills</h1>
            <div className="flex flex-wrap gap-4">
              <SkillWrap source={esp}>ESP32</SkillWrap>
              <SkillWrap source={arduino}>Arduino</SkillWrap>
              <SkillWrap source={easyeda}>EasyEda</SkillWrap>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h1 className="text-2xl font-bold tracking-wider mb-4">Programming Skills</h1>
            <div className="flex flex-wrap gap-4">
              <SkillWrap source={c}>C</SkillWrap>
              <SkillWrap source={cpp}>C++</SkillWrap>
              <SkillWrap source={js}>JS</SkillWrap>
              <SkillWrap source={python}>Python</SkillWrap>
              <SkillWrap source={nodejs}>Node JS</SkillWrap>
              <SkillWrap source={react}>React JS</SkillWrap>
              <SkillWrap source={tailwind}>Tailwind</SkillWrap>
              <SkillWrap source={boostrap}>Bootstrap</SkillWrap>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
