import { Globe } from "lucide-react";
import React from "react";
import { FaCode } from "react-icons/fa";
import { MdSecurity, MdWeb } from "react-icons/md";
import { TbDeviceLaptop } from "react-icons/tb";

const Experience = () => {
  return (
    <div id="experience" className="py-20 relative">
      <div className="w-[80%] mx-auto mt-15">
        <h4 className="text-[#25a6eb] tracking-wider uppercase mb-15 text-center md:text-start">
          Experience
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start justify-between gap-10 ">

            {/* 1st experience */}
          <div className=" flex items-start gap-5">
            <div className="bg-linear-to-r from-[#0d1b2a86] w-15 h-15 via-[#25a6eb79] to-[#0d1b2a86] flex items-center justify-center rounded-full shrink-0">
              <FaCode className="w-8 h-8" />
            </div>
              <div className="flex flex-col items-start justify-start gap-2 text-[#285483] dark:text-white">
                <h5>2023 - Present</h5>
                <h4>Front-End Engineer</h4>
                <h5 className="text-[#285483] dark:text-[#25a6eb]">Freelance / Remote</h5>
                <p className="text-[14px] dark:text-[#94A3B8] text-[#285483]">Building modern web applications <br /> with React, Next.js, and Tailwind CSS.</p>
              </div>
          </div>

            {/* 2nd experience */}
          <div className=" flex items-start gap-5">
            <div className="bg-linear-to-r from-[#0d1b2a86] w-15 h-15 via-[#25a6eb79] to-[#0d1b2a86] flex items-center justify-center rounded-full shrink-0">
              <TbDeviceLaptop className="w-8 h-8" />
            </div>
              <div className="flex flex-col items-start justify-start gap-2 text-[#285483] dark:text-white">
                <h5>2021 - 2023</h5>
                <h4>Front-End Developer</h4>
                <h5 className="text-[#285483] dark:text-[#25a6eb]">Freelance / Remote</h5>
                <p className="text-[14px] dark:text-[#94A3B8] text-[#285483]">Built responsible UX, component <br /> libraries and reusable systems. </p>
              </div>
          </div>

            {/* 3rd experience */}
          <div className=" flex items-start gap-5">
            <div className="bg-linear-to-r from-[#0d1b2a86] w-15 h-15 via-[#25a6eb79] to-[#0d1b2a86] flex items-center justify-center rounded-full shrink-0">
              <Globe className="w-8 h-8" />
            </div>
              <div className="flex flex-col items-start justify-start gap-2 text-[#285483] dark:text-white">
                <h5>2020 - 2021</h5>
                <h4>Web Developer</h4>
                <h5 className="text-[#285483] dark:text-[#25a6eb]">Freelance / Remote</h5>
                <p className="text-[14px] dark:text-[#94A3B8] text-[#285483]">Built projects using HTML, CSS, <br /> Javascript and PHP. </p>
              </div>
          </div>

            {/* 4th experience */}
          <div className=" flex items-start gap-5 z-10">
            <div className="bg-linear-to-r from-[#0d1b2a86] w-15 h-15 via-[#25a6eb79] to-[#0d1b2a86] flex items-center justify-center rounded-full shrink-0">
              <MdSecurity className="w-8 h-8" />
            </div>
              <div className="flex flex-col items-start justify-start gap-2 text-[#285483] dark:text-white">
                <h5>2015 - 2021</h5>
                <h4>Cybersecurity</h4>
                <h5 className="text-[#285483] dark:text-[#25a6eb]">Learning & Practice</h5>
                <p className="text-[14px] dark:text-[#94A3B8] text-[#285483]">Studied and gained hanhson experience in <br /> network security, vulnerability <br /> assessment and secure coding. </p>
              </div>
          </div>
            {/*card holders */}
            <div className="absolute dark:bg-[#0D1B2A] bg-[#28548323] w-80 h-10 left-0 top-4 flex rounded-br-full items-center justify-center -z-10"></div>
            <div className="absolute dark:bg-[#0D1B2A] bg-[#28548323] w-2000 dark:h-1 h-px right-0 top-4 flex items-center justify-center -z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
