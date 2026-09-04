import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaSquareUpRight } from "react-icons/fa6";

const Projects = () => {
  return (
    <div id="project" className="py-20">
      <div className="container-custom">
        <h4 className="text-[#25a6eb] tracking-wider uppercase mb-15 text-center md:text-start">
          Featured Projects
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* 1st */}
          <div className="flex flex-col gap-2 shadow-sm shadow-[#25a6eb] dark:bg-[#0D1B2A] dark:text-white text-[#285483] rounded-md p-5">
             <div className="relative w-full h-64 overflow-hidden rounded-md">
              <Image
                src="/shobhub.png"
                alt="ShopHub project"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-fit"
              />
            </div>
            <div className="flex items-center gap-10">
              <h3 className="text-[#25a6eb]">01</h3>
              <h4>ShopHub E-commerce</h4>
            </div>
            <p className="text-xs md:text-sm text-[#285483] dark:text-white">
              Full-stack Next.js app featuring a comprehensive admin dashboard, secure authentication,
              role-based access control, and protected routes.
            </p>

            <div className="flex flex-col text-[#285483] dark:text-white items-start gap-2">
              <div className="flex items-center gap-2">
                <Check className="text-green-600" />
                <p className="text-xs md:text-sm">
                  Protected routes & server-side rendering
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-green-600" />
                <p className="text-xs md:text-sm">Admin dashboard layout with management interfaces</p>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-green-600" />
                <p className="text-xs md:text-sm">
                  Role-based access for Admin/Users
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-green-600" />
                <p className="text-xs md:text-sm">Dedicated customer management and business analytics pages</p>
              </div>
              <div className="flex items-center justify-between gap-1 lg:gap-4">
                <div className="border-2 border-[#25a6eb1a] p-1.5 rounded-md">
                  <p className="text-xs md:text-sm text-[#285483] dark:text-white">Next.js</p>
                </div>
                <div className="border-2 border-[#25a6eb1a] p-1.5 rounded-md">
                  <p className="text-xs md:text-sm text-[#285483] dark:text-white">React</p>
                </div>
                <div className="border-2 border-[#25a6eb1a] p-1.5 rounded-md">
                  <p className="text-xs md:text-sm text-[#285483] dark:text-white">TypeScript</p>
                </div>
                <div className="border-2 border-[#25a6eb1a] p-1.5 rounded-md">
                  <p className="text-xs md:text-sm text-[#285483] dark:text-white">TailwindCSS</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Link
                  target="_blank"  rel="noopener noreferrer" prefetch={false}
                  href="https://variety-shophub.netlify.app/"
                  className="flex items-center text-[14px] text-[#25a6eb] font-semibold gap-2"
                >
                  Live Demo <FaSquareUpRight />
                </Link>{" "}
                |
                <Link
                  target="_blank"  rel="noopener noreferrer" prefetch={false}
                  href="https://github.com/ekekasiemobi/shophub"
                  className="flex items-center text-[14px] text-[#25a6eb] font-semibold gap-2"
                >
                  Github <FaSquareUpRight />
                </Link>
              </div>
            </div>
          </div>

          {/*2nd */}
          <div className="flex flex-col gap-2 shadow-sm shadow-[#25a6eb] dark:bg-[#0D1B2A] dark:text-white text-[#285483] rounded-md p-5">
            <div className="relative w-full h-64 overflow-hidden rounded-md">
              <Image
                src="/vendora.png"
                alt="Vendora project"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-fit"
              />
            </div>
            <div className="flex items-center gap-10">
              <h3 className="text-[#25a6eb]">02</h3>
              <h4>Carts E-commerce</h4>
            </div>
            <p className="text-xs md:text-sm text-[#285483] dark:text-white">
              Modern e-commerce platform with Next.js<br />{" "}
              payments and secure checkout flow
            </p>

            <div className="flex flex-col text-[#285483] dark:text-white items-start gap-2">
              <div className="flex items-center gap-2">
                <Check className="text-green-600" />
                <p className="text-xs md:text-sm">
                  Complete Auth Flow: User registration, sign-in, and forgot password flows
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-green-600" />
                <p className="text-xs md:text-sm">Role-based access control (RBAC) and robust protected routing</p>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-green-600" />
                <p className="text-xs md:text-sm">
                  Secure API architecture with input validation and data handling
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-green-600" />
                <p className="text-xs md:text-sm">Hybrid rendering using both Server-Side (SSR) and Client-Side rendering</p>
              </div>
              <div className="flex items-center justify-between gap-1 lg:gap-4 md:mt-5 lg:mt-0 whitespace-pre-wrap">
                <div className="border-2 border-[#25a6eb1a] p-1.5 rounded-md">
                  <p className="text-xs md:text-sm text-[#285483] dark:text-white">Next.js</p>
                </div>
                <div className="border-2 border-[#25a6eb1a] p-1.5 rounded-md">
                  <p className="text-xs md:text-sm text-[#285483] dark:text-white">TypeScript</p>
                </div>
                <div className="border-2 border-[#25a6eb1a] p-1.5 rounded-md">
                  <p className="text-xs md:text-sm text-[#285483] dark:text-white">TailwindCSS</p>
                </div>                
                <div className="border-2 border-[#25a6eb1a] p-1.5 rounded-md">
                  <p className="text-xs md:text-sm text-[#285483] dark:text-white">NextAuth</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Link
                  target="_blank"  rel="noopener noreferrer" prefetch={false}
                  href="https://vendora-cart.vercel.app"
                  className="flex items-center text-[14px] text-[#25a6eb] font-semibold gap-2"
                >
                  Live Demo <FaSquareUpRight />
                </Link>{" "}
                |
                <Link
                  target="_blank"  rel="noopener noreferrer" prefetch={false}
                  href="https://github.com/BintaHL/market-square"
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
