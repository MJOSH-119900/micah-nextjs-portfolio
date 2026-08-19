"use Client"
import { ArrowRightIcon, Award, Code2, DownloadIcon, FolderCheck, LucideIcon, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProfileSummary {
  id: number;
  label: string;
  value: string;
  icon: LucideIcon;
  color: string;
}

const stats: ProfileSummary[] = [
  {
    id: 1,
    label: "Years of Experience",
    value: "2+",
    icon: Award,
    color: "text-blue-500",
  },
  {
    id: 2,
    label: "Projects Completed",
    value: "5.0",
    icon: FolderCheck,
    color: "text-green-500",
  },
  {
    id: 3,
    label: "Technologies Used",
    value: "12+",
    icon: Code2,
    color: "text-purple-500",
  },
  {
    id: 4,
    label: "Available for Work",
    value: "Open",
    icon: Zap,
    color: "text-amber-500",
  },
];

const Hero = () => {
  return (
    <div id="home" className="max-w-[80%] min-h-screen mx-auto">
      <div className="flex items-end justify-between gap-20">
        {/* hero write-up */}
        <div className="w-[60%] text-[16px] text-[#F8FAFC] flex flex-col gap-2 mt-10">
          <p className="text-[#25a6eb] tracking-wider uppercase">
            Hello, I&apos;m Micah
          </p>
          <h1 className="hidden lg:block">
            Mid-Level Front-End Engineer specializing in{" "}
            <span className="text-[#2563EB]">secure</span>,<br />
            <span className="text-[#2563EB]">high-performance </span> React{" "}
            <br /> and <span className="text-[#2563EB]">Next.js</span>{" "}
            applications.
          </h1>
          <h3 className="block lg:hidden">
            Mid-Level Front-End Engineer specializing in{" "}
            <span className="text-[#2563EB]">secure</span>,<br />
            <span className="text-[#2563EB]">high-performance </span> React{" "}
            <br /> and <span className="text-[#2563EB]">Next.js</span>{" "}
            applications.
          </h3>
          <p className="mb-4 text-xs md:text-sm lg:text-base ">
            I combine a background in Cybersecurity with modern front-end <br />{" "}
            tools to build safe, accessible, ans fast web experiences. <br />{" "}
            clean code. Strong security, Great UX
          </p>

          {/* button */}
          <div className="flex items-center justify-start gap-6 whitespace-nowrap">
            <Link
              href="#"
              className="border-2 border-[#2563EB] bg-[#2563EB] flex items-center gap-3 p-1 lg:px-10 lg:py-2 rounded-sm hover:bg-[#07111F] hover:border-2 hover:border-[#2563EB]"
            >
              <button className="text-xs md:text-sm lg:text-base ">View My Work</button> <ArrowRightIcon className="w-4 lg:10"/>
            </Link>

            <Link
              href="#"
              className="border-2 border-[#2563EB] flex items-center gap-3 p-1 lg:px-10 lg:py-2 rounded-sm hover:bg-[#2563EB]"
            >
              <button className="text-xs md:text-sm lg:text-base ">Download CV</button> <DownloadIcon className="w-4 lg:10"/>
            </Link>
          </div>
        </div>

        {/* hero image */}

        <div className="max-w-[40%] flex items-center justify-center relative mt-3 lg:mt-0">
          <Image
            src="/images/image-me2.png"
            alt="MJ logo"
            width={10000}
            height={490}
            className="block h-auto lg:max-w-md md:max-w-sm  overflow-hidden"
          />

          <div className="absolute lg:w-100 lg:h-100 md:w-70 md:h-70 bg-[#0D1B2A] rounded-full shadow-md shadow-[#38BDF8] rotate-180 lg:top-8 right-0 -z-10"></div>
        </div>
      </div>

      <div className="bg-[#0d1b2a32] w-full mx-auto">
        <div className="flex items-center justify-around py-10">
          <Image src="/images/security.svg" alt="shield image" width={40} height={40} className="bg-[#94a3b83b] rounded-2xl" />
          <div className="flex items-center justify-center gap-8 lg:gap-20">
            {stats.map((stat: ProfileSummary) => {
              const Icons = stat.icon
              return (
                <div key={stat.id} className="flex items-center justify-center  text-[#94A3B8]  py-2 gap-2">
                  <Icons className={`${stat.icon}`} />
                  <div className="">
                    <h5>{stat.value}</h5>
                    <p className="text-[14px]">{stat.label}</p>
                  </div>
                </div>
              )
            })}
          </div>
          <Image src="/images/security.svg" alt="shield image" width={40} height={40} className="bg-[#94a3b83b] rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
