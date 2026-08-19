import { Laptop2Icon, LocationEdit, MailIcon, PhoneIcon } from "lucide-react";
import { FaDiscord, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Form from "../components/Form";
import Image from "next/image";
import { GraduationCap } from "lucide-react";
import React from "react";


const Contact = () => {
  return (
    <div className="py-20 relative">
      <div className="w-[80%] mx-auto mt-15">
        <h4 className="text-[#25a6eb] tracking-wider uppercase mb-5">
          Education & Qualification
        </h4>
        <div className="flex items-start justify-between relative">
          {/* cybersecurity */}
          <div className=" flex items-start gap-5 z-10">
            <div className="bg-linear-to-r from-[#0d1b2a86] w-15 h-15 via-[#25a6eb79] to-[#0d1b2a86] flex items-center justify-center rounded-full shrink-0">
              <GraduationCap className="w-8 h-8" />
            </div>
            <div className="flex flex-col items-start justify-start gap-2">
              <h4>BSc in Cybersecurity</h4>
              <h5 className="text-[#25a6eb]">
                Federal University of Technology
              </h5>
              <h5 className="text-[#94A3B8]">2015 - 2021</h5>
            </div>
          </div>

          {/* qualificatio absolute vertical lines demacation */}
          <div className="bg-[#0D1B2A] w-1 h-40  flex items-center justify-center -z-10"></div>

          {/* {Qualification} */}
          <div className=" flex items-start">
            <div className="flex flex-col items-start justify-start gap-2">
              <h4>Qualification</h4>
              <p className="text-[14px] text-[#94A3B8] border-2 border-[#0D1B2A] p-2 rounded-md">
                {" "}
                OWASP Top 10{" "}
              </p>
            </div>
          </div>

          {/* qualificatio absolute vertical lines demacation 2*/}
          <div className="bg-[#0D1B2A] w-1 h-40  flex items-center justify-center -z-10"></div>

          {/* Coursework */}
          <div className=" flex items-start">
            <div className="flex flex-col items-start justify-start gap-2">
              <h4>Relevant Coursework</h4>
              <ul className="list-disc text-[14px] text-[#94A3B8] ml-5">
                <li>Network Security</li>
                <li>Cryptography</li>
                <li>Operating System Security</li>
                <li>Web Security</li>
              </ul>
            </div>
          </div>
        </div>
 
        {/*card holders */}
        <div className="absolute bg-[#0D1B2A] w-80 h-10 right-0 top-4 flex rounded-bl-full items-center justify-center -z-10"></div>
        <div className="absolute bg-[#0D1B2A] w-2000 h-1 right-0 top-4 flex items-center justify-center -z-10"></div>

        {/* **************************************** contact section **************************************************************************/}
        <div  id="contact"  className="">
          <h4 className="text-[#25a6eb] tracking-wider uppercase mb-5">
            contact
          </h4>
          <div className="flex items-start justify-between gap-5">
            {/* Contacts  1st */}
            <div className="flex flex-col gap-10 text-[12px]">
              <div className="flex gap-4">
                <MailIcon className="h-6 clas text-[#2563EB]" />
                <div className="flex flex-col items-start">
                  <h6>Email</h6>
                  <a
                    href="mailto:micahshegabo1@gmail.com"
                    className="flex items-center gap-1.5 text-[#94A3B8]"
                  >
                    micahshegabo1@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <PhoneIcon className="h-6 text-[#2563EB]" />
                <div className="flex flex-col items-start">
                  <h6>Phone</h6>
                  <a
                    href="tel: +2348168077767"
                    className="flex items-center gap-1.5 text-[#94A3B8]"
                  >
                    <span>+00 999 777 875</span>
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <LocationEdit className="h-6 text-[#2563EB]" />
                <div className="">
                  <h6>Location</h6>

                  <p className="flex items-center gap-1.5 text-[#94A3B8]">
                    Nigeria, West Africa
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Laptop2Icon className="h-6 text-[#2563EB]" />
                <div className="">
                  <h6>Availablity</h6>

                  <p className="flex items-center gap-1.5 text-[#94A3B8]">
                    Freelance & Full-time
                  </p>
                </div>
              </div>
            </div>

            {/* Form 2nd */}
            <Form />

            {/* qualificatio absolute vertical lines demacation 3rd */}
            <div className="bg-[#0D1B2A] w-1 min-h-64  flex items-center justify-center -z-10"></div>

            {/* text and image */}
            <div className="flex items-center justify-between bg-[#0d1b2a7c] rounded-md p-5">
              <div className="flex flex-col gap-4 lg:mt-10">
                <h3>Let's  <span className="text-[#2563EB] font-extrabold">build something </span>great together!</h3>
                <div className="text-[14px] text-[#94A3B8] flex flex-col gap-20 lg:gap-20">
                  <p className="flex ">
                    Have a project in mind or just want to say hello? I'd love
                    to hear from you.
                  </p>

                  <div className="flex items-center gap-10">
                    <FaLinkedin className="w-6 h-6" />{" "}
                    <FaGithub className="w-6 h-6" />{" "}
                    <FaFacebook className="w-6 h-6" />{" "}
                    <FaDiscord className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Image
        src="/images/laptop.png"
        alt="logo"
        width={1000}
        height={40}
        className="w-70 bottom-40 lg:min-w-sm object-cover -z-10 absolute lg:bottom-30 right-24 lg:right-30"
      />
    </div>
  );
};

export default Contact;
