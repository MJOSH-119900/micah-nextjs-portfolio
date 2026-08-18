import { ChartBarIncreasingIcon, LucideIcon } from "lucide-react";
import React from "react";
import { BsPerson } from "react-icons/bs";

interface AboutCards {
  id: number;
  icons: LucideIcon;
  title: string;
  text: string
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
    title: "security Forcused",
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
]


const About = () => {
  return (
    <div id="about" className="py-20">
      <div className="w-[80%] mx-auto mt-15">
        <h4 className="text-[#25a6eb] tracking-wider uppercase mb-5">about me</h4>
        <div className="flex items-start justify-center text-[14px] gap-4">
          {/* 1st */}
          <div className="w-[60%] flex items-start gap-6 relative">
            <div className=" border border-[#1E293B] max-w-md max-h-16 rounded-lg">
              <BsPerson className="w-15 h-15" />
            </div>
            <div className="flex flex-col gap-4">
              <h2>Building secure, accessible and <br />fast web experiences.</h2>
              <div className="flex flex-1 flex-col gap-2 text-[14px] text-[#94A3B8] tracking-wide mr-10">
                <p>
                  I&apos;m a Frontend Developer with a Cybersecurity background. I
                  build responsive, accessible and high-performance applications
                  using React, Next.js and modern tools.
                </p>
                <p>
                  My cybersecurity knowledge helps me write cleaner code,
                  implement secure best authentication, protect user data and
                  follow best security practices from the front-end to the
                  backend.
                </p>
              </div>
            </div>
            
            {/* absolute vertical line */}
            <div className="bg-[#0D1B2A] w-2 md:min-h-120 lg:min-h-85 left-0 top-0"></div>
          </div>

          {/* 2nd */}
          <div className="grid grid-rows-1">
            <div className="grid grid-cols-1 md:grid-cols-2 items-start justify-start gap-8 md:gap-20 lg:gap-4">
              {aboutCards.map((cards: AboutCards) => {
                const Icon = cards.icons
                return (
                  <div key={cards.id} className="flex items-center">
                    <div className={`min-h-40 max-w-60 p-4 rounded-md grid gap-4 shadow-sm shadow-[#38BDF8] ${cards.bgColor}`}>
                      <Icon className={`w-5 h-5 ${cards.icons}`} />
                      <h5 className="flex flex-1 items-center ">{cards.title}</h5>
                      <p className=" text-[14px] text-[#94A3B8] flex flex-1">{cards.text}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
