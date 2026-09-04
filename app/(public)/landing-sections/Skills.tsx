import Image from "next/image";
import React from "react";
import { FaKey, FaKeyboard, FaShieldAlt } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";

const Skills = () => {
  return (
    <div id="skills" className="py-20">
      <div className="container-custom">
        <h4 className="text-[#25a6eb] tracking-wider uppercase mb-15 text-center md:text-start">
          technical skills
        </h4>
        {/* large screen -------------------------------------------------------------------------------------------- */}
        <div className="flex items-center justify-center gap-4">
          <div className="relative hidden lg:flex">
            {/* 1st card core frameworks */}
            <div className="absolute flex flex-col gap-5 items-center py-5 rounded-md dark:bg-[#0D1B2A] bg-white text-[#285483] dark:text-white shadow-sm shadow-[#38BDF8] top-0 left-20 w-full min-w-85 min-h-40">
              <h5>Core Frameworks</h5>
              <div className="w-full flex flex-wrap items-center justify-center gap-10 dark:text-[#94A3B8] text-[#285483]">
                <div className="flex flex-col gap-2 items-center">
                  <Image
                    src="/images/react.svg"
                    alt="MJ logo"
                    width={30}
                    height={30}
                    className="w-5 md:h-5 lg:w-8 lg:h-8"
                  />
                  <p className="text-[14px]">React</p>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <Image
                    src="/images/nextjs.svg"
                    alt="MJ logo"
                    width={30}
                    height={30}
                    className="w-5 md:h-5 lg:w-8 lg:h-8"
                  />
                  <p className="text-[14px]">Next.js</p>
                </div>
              </div>
            </div>

            {/* 2nd card styling and tools */}
            <div className="absolute flex flex-col gap-5 items-center py-4 px-5 rounded-md dark:bg-[#0D1B2A] bg-white  text-[#285483] dark:text-white shadow-sm shadow-[#38BDF8] top-0 right-20 w-full min-w-90 max-h-40">
              <h5>Security & Specialized</h5>
              <div className="w-full flex items-start justify-center gap-10 dark:text-[#94A3B8] text-[#285483]">
                <div className="flex flex-col gap-2 items-center">
                  <FaShieldAlt className="w-5 md:h-5 lg:w-8 lg:h-8 text-[#2563EB]" />
                  <p className="text-[14px] text-center">Web Security</p>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <FaKey className="w-5 md:h-5 lg:w-8 lg:h-8 text-[#2563EB]" />
                  <p className="text-[14px]  text-center">NextAuth</p>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <FaCircleCheck className="w-5 md:h-5 lg:w-8 lg:h-8 text-[#2563EB]" />
                  <p className="text-[14px] text-center">Secure API </p>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <FaKeyboard className="w-5 md:h-5 lg:w-8 lg:h-8 text-[#2563EB]" />
                  <p className="text-[14px] text-center">Next.js</p>
                </div>
              </div>
            </div>

            {/* absolute tree */}
            <div className=" dark:bg-[#0D1B2A] bg-[#25a6eb15] w-5 min-h-92 left-0 top-0 flex items-center justify-center  relative"></div>
            {/*card holders */}
            <div className="absolute  dark:bg-[#0D1B2A] bg-[#25a6eb15] w-1000 h-5 left-5 top-4 flex items-center justify-center rounded-r-4xl -z-10"></div>
            <div className="absolute  dark:bg-[#0D1B2A] bg-[#25a6eb15] w-1000 h-5 right-5 top-10 flex items-center justify-center rounded-l-4xl -z-10"></div>
            <div className="absolute  dark:bg-[#0D1B2A] bg-[#25a6eb15] w-1000 h-5 right-5 top-56 flex items-center justify-center rounded-l-4xl -z-10"></div>
            <div className="absolute  dark:bg-[#0D1B2A] bg-[#25a6eb15] w-1000 h-5 left-5 top-62 flex items-center justify-center rounded-r-4xl -z-10"></div>
            {/* absolute tree */}

            {/* 3rd card */}
            <div className="absolute flex flex-col gap-5 items-center p-5 rounded-md dark:bg-[#0D1B2A] bg-white text-[#285483] dark:text-white shadow-sm shadow-[#38BDF8] top-52 left-20 max-w-90 max-h-40">
              <h5>Languages</h5>
              <div className="w-full flex items-start justify-center gap-10 dark:text-[#94A3B8] text-[#285483]">
                <div className="flex flex-col gap-2 items-center justify-between">
                  <Image
                    src="/images/javascript.svg"
                    alt="MJ logo"
                    width={30}
                    height={30}
                    className="w-5 md:h-5 lg:w-8 lg:h-8"
                  />
                  <p className="text-[14px]">Tailwind CSS</p>
                </div>
                <div className="flex flex-col gap-2 items-center justify-between">
                  <Image
                    src="/images/typescript.svg"
                    alt="MJ logo"
                    width={30}
                    height={30}
                    className="w-5 md:h-5 lg:w-8 lg:h-8"
                  />
                  <p className="text-[14px]">TypeScript</p>
                </div>
                <div className="flex flex-col gap-2 items-center justify-between">
                  <Image
                    src="/images/html5.svg"
                    alt="MJ logo"
                    width={30}
                    height={30}
                    className="w-5 md:h-5 lg:w-8 lg:h-8"
                  />
                  <p className="text-[14px]">Tailwind CSS</p>
                </div>
                <div className="flex flex-col gap-2 items-center justify-between">
                  <Image
                    src="/images/css3.svg"
                    alt="MJ logo"
                    width={30}
                    height={30}
                    className="w-5 md:h-5 lg:w-8 lg:h-8"
                  />
                  <p className="text-[14px]">CSS</p>
                </div>
              </div>
            </div>

            {/* 4th card */}
            <div className=" absolute flex flex-col gap-5 items-center p-5 rounded-md dark:bg-[#0D1B2A] bg-white text-[#285483] dark:text-white shadow-sm shadow-[#38BDF8] top-52 right-20 max-w-90 max-h-40">
              <h5>Styling and Tools</h5>
              <div className="w-full flex items-start justify-center gap-10 dark:text-[#94A3B8] text-[#285483]">
                <div className="flex flex-col gap-2 items-center justify-between">
                  <Image
                    src="/images/tailwindcss.svg"
                    alt="MJ logo"
                    width={30}
                    height={30}
                    className="w-5 md:h-5 lg:w-8 lg:h-8"
                  />
                  <p className="text-[14px]">Tailwind CSS</p>
                </div>
                <div className="flex flex-col gap-2 items-center justify-between">
                  <Image
                    src="/images/vscode.svg"
                    alt="MJ logo"
                    width={30}
                    height={30}
                    className="w-5 md:h-5 lg:w-8 lg:h-8"
                  />
                  <p className="text-[14px]">VsCode</p>
                </div>
                <div className="flex flex-col gap-2 items-center justify-between">
                  <Image
                    src="/images/git.svg"
                    alt="MJ logo"
                    width={30}
                    height={30}
                    className="w-5 md:h-5 lg:w-8 lg:h-8"
                  />
                  <p className="text-[14px]">Tailwind CSS</p>
                </div>
                <div className="flex flex-col gap-2 items-center justify-between">
                  <Image
                    src="/images/github.svg"
                    alt="MJ logo"
                    width={30}
                    height={30}
                    className="bg-white rounded-full"
                  />
                  <p className="text-[14px]">GitHub</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* large screen -------------------------------------------------------------------------------------------- */}


        {/* small - medium screen **************************************************************************************** */}

        <div className="relative md:block lg:hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* 1st card core frameworks */}
            <div className="w-full max-w-sm min-h-40 flex flex-col gap-5 items-center p-4 rounded-md dark:bg-[#0D1B2A] bg-white shadow-sm shadow-[#38BDF8]">
              <h5>Core Frameworks</h5>
              <div className="w-full flex items-start justify-center gap-10 dark:text-[#94A3B8] text-[#285483]">
                <div className="flex flex-col gap-2 items-center">
                  <Image
                    src="/images/react.svg"
                    alt="MJ logo"
                    width={30}
                    height={30}
                    className="w-5 md:h-5 lg:w-8 lg:h-8"
                  />
                  <p className="text-xs md:text-sm">React</p>
                </div>
                <div className="flex flex-col gap-2 items-center justify-between">
                  <Image
                    src="/images/nextjs.svg"
                    alt="MJ logo"
                    width={30}
                    height={30}
                    className="w-5 md:h-5 lg:w-8 lg:h-8"
                  />
                  <p className="text-xs md:text-sm">Next.js</p>
                </div>
              </div>
            </div>

            {/* 2nd card styling and tools */}
            <div className="w-full max-w-sm min-h-40 flex flex-col gap-5 items-center p-4 rounded-md dark:bg-[#0D1B2A] bg-white shadow-sm shadow-[#38BDF8]">
              <h5>Security & Specialized</h5>

              <div className="w-full flex items-start justify-center gap-6 dark:text-[#94A3B8] text-[#285483]">
                <div className="flex flex-col gap-2 items-center">
                  <FaShieldAlt className="w-5 h-5 lg:h-6 lg:w-6 text-[#2563EB]" />
                  <p className="text-xs md:text-sm text-center">Web Security</p>
                </div>

                <div className="flex flex-col gap-2 items-center">
                  <FaKey className="w-5  h-5 lg:h-6 lg:w-6 text-[#2563EB]" />
                  <p className="text-xs md:text-sm text-center">NextAuth</p>
                </div>

                <div className="flex flex-col gap-2 items-center">
                  <FaCircleCheck className="w-5 h-5 lg:h-6 lg:w-6 text-[#2563EB]" />
                  <p className="text-xs md:text-sm text-center">Secure API</p>
                </div>

                <div className="flex flex-col gap-2 items-center">
                  <FaKeyboard className="w-5 h-5 lg:h-6 lg:w-6 text-[#2563EB]" />
                  <p className="text-xs md:text-sm text-center">Next.js</p>
                </div>
              </div>
            </div>

            {/* absolute tree */}
            <div className="dark:bg-[#0D1B2A] bg-[#25a6eb52] w-5 min-h-150 left-42 top-0 flex items-center justify-center -z-10 absolute md:hidden"></div>
            {/*card holders */}
            <div className="absolute dark:bg-[#0D1B2A] bg-[#25a6eb52] w-5 h-20 left-40 top-30 items-center justify-center -z-10 hidden md:block "></div>
            <div className="absolute dark:bg-[#0D1B2A] bg-[#25a6eb52] w-60 h-5 right-50 top-15 items-center justify-center -z-10 hidden md:block "></div>
            <div className="absolute dark:bg-[#0D1B2A] bg-[#25a6eb52] w-5 h-20 right-40 top-30 items-center justify-center -z-10 hidden md:block "></div>
            <div className="absolute dark:bg-[#0D1B2A] bg-[#25a6eb52] w-60 h-5 left-50 top-62 items-center justify-center -z-10 hidden md:block "></div>
            {/* absolute tree */}

            {/* 3rd card */}
            <div className="w-full max-w-sm min-h-40 flex flex-col gap-5 items-center p-4 rounded-md dark:bg-[#0D1B2A] bg-white shadow-sm shadow-[#38BDF8]">
              <h5>Languages</h5>
              <div className="w-full flex items-start justify-center gap-10 dark:text-[#94A3B8] text-[#285483]">
                <div className="flex flex-col gap-2 items-center">
                  <Image
                    src="/images/javascript.svg"
                    alt="MJ logo"
                    width={30}
                    height={30}
                    className="w-5 md:h-5 lg:w-8 lg:h-8"
                  />
                  <p className="text-xs md:text-sm">Tailwind CSS</p>
                </div>
                <div className="flex flex-col gap-2 items-center justify-between">
                  <Image
                    src="/images/typescript.svg"
                    alt="MJ logo"
                    width={30}
                    height={30}
                    className="w-5 md:h-5 lg:w-8 lg:h-8"
                  />
                  <p className="text-xs md:text-sm">TypeScript</p>
                </div>
                <div className="flex flex-col gap-2 items-center justify-between">
                  <Image
                    src="/images/html5.svg"
                    alt="MJ logo"
                    width={30}
                    height={30}
                    className="w-5 md:h-5 lg:w-8 lg:h-8"
                  />
                  <p className="text-xs md:text-sm">Tailwind CSS</p>
                </div>
                <div className="flex flex-col gap-2 items-center justify-between">
                  <Image
                    src="/images/css3.svg"
                    alt="MJ logo"
                    width={30}
                    height={30}
                    className="w-5 md:h-5 lg:w-8 lg:h-8"
                  />
                  <p className="text-xs md:text-sm">CSS</p>
                </div>
              </div>
            </div>

            {/* 4th card */}
            <div className="w-full max-w-sm min-h-40 flex flex-col gap-5 items-center p-4 rounded-md dark:bg-[#0D1B2A] bg-white shadow-sm shadow-[#38BDF8]">
              <h5>Styling and Tools</h5>
              <div className="w-full flex items-start justify-center gap-10 dark:text-[#94A3B8] text-[#285483]">
                <div className="flex flex-col gap-2 items-center">
                  <Image
                    src="/images/tailwindcss.svg"
                    alt="MJ logo"
                    width={30}
                    height={30}
                    className="w-5 md:h-5 lg:w-8 lg:h-8"
                  />
                  <p className="text-xs md:text-sm">Tailwind CSS</p>
                </div>
                <div className="flex flex-col gap-2 items-center justify-between">
                  <Image
                    src="/images/vscode.svg"
                    alt="MJ logo"
                    width={30}
                    height={30}
                    className="w-5 md:h-5 lg:w-8 lg:h-8"
                  />
                  <p className="text-xs md:text-sm">VsCode</p>
                </div>
                <div className="flex flex-col gap-2 items-center justify-between">
                  <Image
                    src="/images/git.svg"
                    alt="MJ logo"
                    width={30}
                    height={30}
                    className="w-5 md:h-5 lg:w-8 lg:h-8"
                  />
                  <p className="text-xs md:text-sm">Tailwind CSS</p>
                </div>
                <div className="flex flex-col gap-2 items-center justify-between">
                  <Image
                    src="/images/github.svg"
                    alt="MJ logo"
                    width={30}
                    height={30}
                    className="bg-white rounded-full w-5 md:h-5 lg:w-8 lg:h-8"
                  />
                  <p className="text-xs md:text-sm">Github</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
