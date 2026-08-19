import { ChartBarIncreasingIcon, LucideIcon } from "lucide-react";
import React from "react";
import { BsPerson } from "react-icons/bs";

interface AboutCards {
  id: number;
  icons: LucideIcon;
  title: string;
  text: string;
  bgColor: string;
}

const aboutCards: AboutCards[] = [
  {
    id: 1,
    icons: ChartBarIncreasingIcon,
    title: "Performance First",
    text: "Building fast, optimized interfaces with excellent Core web Vitals.",
    bgColor: "bg-[#0D1B2A]",
  },
  {
    id: 2,
    icons: ChartBarIncreasingIcon,
    title: "Security Forcused",
    text: "Applying cybersecurity principles to protect users and application.",
    bgColor: "bg-[#0D1B2A]",
  },
  {
    id: 3,
    icons: ChartBarIncreasingIcon,
    title: "Clean & Maintainable",
    text: "Writing reusable, modular and well-documented code.",
    bgColor: "bg-[#0D1B2A]",
  },
  {
    id: 4,
    icons: ChartBarIncreasingIcon,
    title: "Great User Experience",
    text: "Desiging inituitive interfaces that users love to use.",
    bgColor: "bg-[#0D1B2A]",
  },
];

const About = () => {
  return (
    <div id="about" className="py-20 relative">
      <div className="w-[80%] mx-auto mt-15">
        <h4 className="text-[#25a6eb] tracking-wider uppercase mb-5">
          about me
        </h4>
        <div className="flex flex-col md:flex-row items-start justify-center text-[14px] gap-10">
          {/* 1st */}
          <div className="w-full md:w-[60%] lg:md:w-[40%] flex flex-col md:items-start gap-2 md:gap-6 relative">
            {/* icon and title */}
            <div className="flex items-start gap-2">
              <BsPerson className="md:min-w-15 md:min-h-15 min-w-10 min-h-10 border border-[#1E293B] rounded-lg" />
              <h2 className="text-justify">Building secure, accessible and fast web experiences.</h2>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2 text-[14px] text-[#94A3B8] text-justify lg:text-start tracking-wide">
                <p>
                  I&apos;m a Frontend Developer with a Cybersecurity background.
                  I build responsive, accessible and high-performance
                  applications using React, Next.js and modern tools.
                </p>
                <p>
                  My cybersecurity knowledge helps me write cleaner code,
                  implement secure best authentication, protect user data and
                  follow best security practices from the front-end to the
                  backend.
                </p>
              </div>
            </div>
          </div>

          {/* absolute vertical line */}
          <div className="hidden md:block bg-[#0D1B2A] w-2 md:min-h-90 lg:min-h-85  left-0 top-0"></div>

          {/* 2nd */}
          <div className="grid grid-rows-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4">
              {aboutCards.map((cards: AboutCards) => {
                const Icon = cards.icons;
                return (
                  <div
                    key={cards.id}
                    className="flex flex-col md:flex-row items-center justify-center text-center md:text-start"
                  >
                    <div
                      className={`md:min-h-40 md:max-w-70 p-2 lg:p-4 rounded-md shadow-sm shadow-[#38BDF8] ${cards.bgColor}`}
                    >
                      <div className="flex items-center justify-center text-center md:items-start md:justify-start">
                        <Icon className={`min-w-10 min-h-10 ${cards.icons}`} />
                      </div>
                      <h5 className="py-4">{cards.title}</h5>
                      <p className=" text-[14px] text-[#94A3B8]">
                        {cards.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/*card holders */}
        <div className="absolute bg-[#0D1B2A] w-80 h-10 right-0 top-4 flex rounded-bl-full items-center justify-center -z-10"></div>
        <div className="absolute bg-[#0D1B2A] w-2000 h-1 right-0 top-4 flex items-center justify-center -z-10"></div>
      </div>
    </div>
  );
};

export default About;
