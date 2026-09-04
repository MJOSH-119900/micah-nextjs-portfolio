import { Laptop2Icon, LocationEdit, MailIcon, PhoneIcon } from "lucide-react";
import { FaDiscord, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Form from "../components/Form";
import Image from "next/image";
import { GraduationCap } from "lucide-react";
import React from "react";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="py-20 relative">
      <div className="container-custom mt-15">
        <h4 className="text-[#25a6eb] tracking-wider uppercase mb-15 text-center md:text-start">
          Education & Qualification
        </h4>
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-10 md:gap-0 mx-10 relative">
          {/* cybersecurity */}
          <div className=" flex items-start justify-start gap-5 z-10">
            <div className="bg-linear-to-r from-[#0d1b2a86] w-15 h-15 via-[#25a6eb79] to-[#0d1b2a86] flex items-center justify-center rounded-full shrink-0">
              <GraduationCap className="w-8 h-8" />
            </div>
            <div className="flex flex-col items-start justify-start  text-[#285483] dark:text-white gap-2">
              <h4>BSc in Cybersecurity</h4>
              <h5 className="text-[#25a6eb]">
                Federal University of Technology
              </h5>
              <h5 className="dark:text-[#94A3B8] text-[#285483]">2015 - 2021</h5>
            </div>
          </div>

          {/* qualificatio absolute vertical lines demacation 1*/}
          <div className=" dark:bg-[#0D1B2A] bg-[#28548323]  h-1 w-full md:w-1 md:h-40 flex items-center justify-center -z-10"></div>

          {/* {Qualification} */}
          <div className=" flex items-center md:items-start  justify-center md:justify-start">
            <div className="flex flex-col items-start justify-start  text-[#285483] dark:text-white gap-2">
              <h4>Qualification</h4>
              <p className="text-[14px] dark:text-[#94A3B8] text-[#285483] border-2 border-[#285483] dark:border-[#0D1B2A] p-2 rounded-md">
                {" "}
                OWASP Top 10{" "}
              </p>
            </div>
          </div>

          {/* qualificatio absolute vertical lines demacation 2*/}
          <div className=" dark:bg-[#0D1B2A] bg-[#28548323] h-1 w-full md:w-1 md:h-40 flex items-center justify-center -z-10 "></div>

          {/* Coursework */}
          <div className=" flex items-start">
            <div className="flex flex-col items-start justify-start  text-[#285483] dark:text-white gap-2">
              <h4>Relevant Coursework</h4>
              <ul className="list-disc text-[14px] dark:text-[#94A3B8] text-[#285483] ml-5">
                <li>Network Security</li>
                <li>Cryptography</li>
                <li>Operating System Security</li>
                <li>Web Security</li>
              </ul>
            </div>
          </div>
        </div>

        {/*card holders */}
        <div className="absolute dark:bg-[#0D1B2A] bg-[#28548323] w-80 h-10 right-0 top-4 flex rounded-bl-full items-center justify-center -z-10"></div>
        <div className="absolute dark:bg-[#0D1B2A] bg-[#28548323] w-2000 dark:h-1 h-px right-0 top-4 flex items-center justify-center -z-10"></div>

        {/* **************************************** contact section **************************************************************************/}
        <div id="contact" className="mt-15">
          <h4 className="text-[#25a6eb] tracking-wider uppercase mb-15">
            contact
          </h4>
          {/* contact, form and Contact Banner text */}
          <div className="flex flex-col-reverse lg:flex-row items-start justify-between gap-20 lg:gap-0">
            {/* Contacts  1st */}
            <div className="w-full flex flex-col items-start justify-center gap-10 md:gap-0 text-[12px] dark:bg-[#0d1b2a7c] bg-[#25a6eb52] dark:text-[#94A3B8] text-[#285483] px-5 min-h-71 rounded-md  relative">
              <div className="w-full flex items-start lg:justify-center  gap-4 min-w-55 p-2 dark:bg-[#0d1b2a7c] bg-[#25a6eb52] shadow-xs shadow-[#38BDF8]">
                <MailIcon className="h-6 clas text-[#2563EB]" />
                <div className="flex flex-col items-start">
                  <h6>Email</h6>
                  <a
                    href="mailto:micahshegabo1@gmail.com"
                    className="flex items-center gap-1.5 dark:text-[#94A3B8] text-white"
                  >
                    micahshegabo1@gmail.com
                  </a>
                </div>
              </div>

              <div className="w-full flex items-start lg:justify-center  gap-4 min-w-55 p-2 dark:bg-[#0d1b2a7c] bg-[#25a6eb52] shadow-xs shadow-[#38BDF8]">
                <PhoneIcon className="h-6 text-[#2563EB]" />
                <div className="flex flex-col items-start">
                  <h6>Phone</h6>
                  <a
                    href="tel: +2348168077767"
                    className="flex items-center gap-1.5 dark:text-[#94A3B8] text-white"
                  >
                    <span>+00 999 777 875</span>
                  </a>
                </div>
              </div>

              <div className="w-full flex items-start lg:justify-center  gap-4 min-w-55 p-2 dark:bg-[#0d1b2a7c] bg-[#25a6eb52] shadow-xs shadow-[#38BDF8]">
                <LocationEdit className="h-6 text-[#2563EB]" />
                <div className="">
                  <h6 className="font-extrabold">Location</h6>

                  <p className="flex items-center gap-1.5 dark:text-[#94A3B8]  text-white">
                    Nigeria, West Africa
                  </p>
                </div>
              </div>

              <div className="w-full flex items-start lg:justify-center  gap-4 min-w-55 p-2 dark:bg-[#0d1b2a7c] bg-[#25a6eb52] shadow-xs shadow-[#38BDF8]">
                <Laptop2Icon className="h-6 text-[#2563EB]" />
                <div className="">
                  <h6>Availablity</h6>

                  <p className="flex items-center gap-1.5 dark:text-[#94A3B8] text-white">
                    Freelance & Full-time
                  </p>
                </div>
              </div>

              {/* Image on small - medium screen */}
              <div className="flex items-end justify-end">
                <Image
                  src="/images/Laptop.png"
                  alt="logo"
                  width={1000}
                  height={40}
                  className="w-70 md:w-100 lg:min-w-xs object-cover absolute -z-10 bottom-12 md:bottom-0 right-0 lg:hidden"
                />
              </div>
            </div>

            {/* Form for small and large screen */}
            <div className="w-full md:hidden min-h-72 lg:block">
              <Form />
            </div>


            {/* text and image */}
            <div className="w-full flex items-center justify-between dark:bg-[#0d1b2a7c] bg-[#25a6eb52] dark:text-[#94A3B8] text-white  rounded-md px-5 py-2 gap-20 min-h-71">
              <div className="flex flex-col gap-4 lg:mt-10">
                <h3 className="">
                  Let's{" "}
                  <span className="text-[#2563EB] font-extrabold px-0.5">
                    build something
                  </span>
                  great together!
                </h3>
                <div className="text-[14px] dark:text-[#94A3B8] text-white w-full flex flex-col items-center justify-center gap-20 lg:gap-20 relative">
                  <div className="flex items-center justify-center  text-justify font-bold ">
                    <p>Have a project in mind or just want to say hello? I'd love
                      to hear from you.</p>
                  </div>

                  <div className="flex items-center gap-10 dark:text-[#94A3B8] text-[#2563EB] shadow-sm shadow-[#2563EB] rounded-sm p-2 mb-0 md:-mb-10 lg:mb-0">
                    <Link target="_blank" rel="noopener noreferrer" prefetch={false} href="http://www.linkedin.com/in/joshua-micah-41a409161" className=" bg-white dark:bg-transparent rounded-full shadow-sm shadow-[#2563EB]"><FaLinkedin className="w-6 h-6 rounded-full shadow-sm shadow-[#2563EB]" /></Link>
                    <Link target="_blank" rel="noopener noreferrer" prefetch={false} href="https://github.com/MJOSH-119900" className=" bg-white dark:bg-transparent rounded-full shadow-sm shadow-[#2563EB]"><FaGithub className="w-6 h-6" /></Link>
                    <Link target="_blank" rel="noopener noreferrer" prefetch={false} href="https://www.facebook.com/profile.php?id=100091890610919" className=" bg-white dark:bg-transparent rounded-full shadow-sm shadow-[#2563EB]"><FaFacebook className="w-6 h-6" /></Link>
                    <Link target="_blank" rel="noopener noreferrer" prefetch={false} href="https://discord.com/channels/@me" className=" bg-white dark:bg-transparent rounded-full shadow-sm shadow-[#2563EB]"><FaDiscord className="w-6 h-6" /></Link>
                  </div>
                  {/* image laptop to large screen  */}
                  <Image
                    src="/images/Laptop.png"
                    alt="logo"
                    width={1000}
                    height={40}
                    className="w-70 md:w-100 lg:min-w-xs object-cover absolute -z-10 bottom-8 hidden lg:block"
                  />
                </div>
              </div>

              {/* Form for medium screen */}
              <div className="w-full hidden md:flex md:bg-white lg:hidden">
                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
