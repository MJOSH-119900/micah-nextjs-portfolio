import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaSquareUpRight } from "react-icons/fa6";

const Projects = () => {
  return (
    <div id="experience" className="py-20">
      <div className="max-w-[80%] mx-auto mt-15">
        <h4 className="text-[#25a6eb] tracking-wider uppercase mb-5">
          projects
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* 1st */}
          <div className="flex flex-col gap-2 border-2 border-[#0D1B2A] rounded-md p-5">
            <Image
              src="/images/person1.png"
              alt=""
              width={1000}
              height={50}
              className=" max-h-40 object-full rounded-md "
            />
            <div className="flex items-center gap-10">
              <h3 className="text-[#25a6eb]">01</h3>
              <h4>Secure Next.js Application</h4>
            </div>
            <p className="text-[14px] text-[#94A3B8]">
              Full-stack Next.js app with secure authentication, <br />{" "}
              role-based access control, and protected routes
            </p>

            <div className="flex flex-col text-[#94A3B8] items-start gap-2">
              <div className="flex items-center gap-2">
                <Check className="text-green-600" />
                <p className="text-[14px]">
                  NextAuth for secure authentication
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-green-600" />
                <p className="text-[14px]">Role-based access (Admin / User)</p>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-green-600" />
                <p className="text-[14px]">
                  Protected routes & server-side rendering
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-green-600" />
                <p className="text-[14px]">Optimized for performance</p>
              </div>
              <div className="flex flex-1 items-center justify-between">
                <div className="border-2 border-[#0D1B2A] p-1.5 rounded-md">
                  <p className="text-[14px] text-[#94A3B8]">Next.js</p>
                </div>
                <div className="border-2 border-[#0D1B2A] p-1.5 rounded-md">
                  <p className="text-[14px] text-[#94A3B8]">React</p>
                </div>
                <div className="border-2 border-[#0D1B2A] p-1.5 rounded-md">
                  <p className="text-[14px] text-[#94A3B8]">Tailwind CSS</p>
                </div>
                <div className="border-2 border-[#0D1B2A] p-1.5 rounded-md">
                  <p className="text-[14px] text-[#94A3B8]">NextAuth</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Link
                  href="#"
                  className="flex items-center text-[14px] text-[#25a6eb] font-semibold gap-2"
                >
                  Live Demo <FaSquareUpRight />
                </Link>{" "}
                |
                <Link
                  href="#"
                  className="flex items-center text-[14px] text-[#25a6eb] font-semibold gap-2"
                >
                  Github <FaSquareUpRight />
                </Link>
              </div>
            </div>
          </div>

            {/*2nd */}
          <div className="flex flex-col gap-2 border-2 border-[#0D1B2A] rounded-md p-5">
            <Image
              src="/images/person1.png"
              alt=""
              width={1000}
              height={50}
              className="max-h-40 object-full rounded-md "
            />
            <div className="flex items-center gap-10">
              <h3 className="text-[#25a6eb]">01</h3>
              <h4>Secure Next.js Application</h4>
            </div>
            <p className="text-[14px] text-[#94A3B8]">
              Full-stack Next.js app with secure authentication, <br />{" "}
              role-based access control, and protected routes
            </p>

            <div className="flex flex-col text-[#94A3B8] items-start gap-2">
              <div className="flex items-center gap-2">
                <Check className="text-green-600" />
                <p className="text-[14px]">
                  NextAuth for secure authentication
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-green-600" />
                <p className="text-[14px]">Role-based access (Admin / User)</p>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-green-600" />
                <p className="text-[14px]">
                  Protected routes & server-side rendering
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-green-600" />
                <p className="text-[14px]">Optimized for performance</p>
              </div>
              <div className="flex flex-1 items-center justify-between">
                <div className="border-2 border-[#0D1B2A] p-1.5 rounded-md">
                  <p className="text-[14px] text-[#94A3B8]">Next.js</p>
                </div>
                <div className="border-2 border-[#0D1B2A] p-1.5 rounded-md">
                  <p className="text-[14px] text-[#94A3B8]">React</p>
                </div>
                <div className="border-2 border-[#0D1B2A] p-1.5 rounded-md">
                  <p className="text-[14px] text-[#94A3B8]">Tailwind CSS</p>
                </div>
                <div className="border-2 border-[#0D1B2A] p-1.5 rounded-md">
                  <p className="text-[14px] text-[#94A3B8]">NextAuth</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Link
                  href="#"
                  className="flex items-center text-[14px] text-[#25a6eb] font-semibold gap-2"
                >
                  Live Demo <FaSquareUpRight />
                </Link>{" "}
                |
                <Link
                  href="#"
                  className="flex items-center text-[14px] text-[#25a6eb] font-semibold gap-2"
                >
                  Github <FaSquareUpRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
