
import Image from 'next/image'
import React from 'react'
import { FaKey, FaKeyboard, FaShieldAlt } from "react-icons/fa"
import { FaCircleCheck } from "react-icons/fa6"

const Skills = () => {
    return (
        <div id="skills" className="py-20">
            <div className="w-[80%] mx-auto mt-15">
                <h4 className="text-[#25a6eb] tracking-wider uppercase mb-5">technical skills</h4>
                <div className="flex items-center justify-center gap-4">
                    <div className="relative">
                        {/* 1st card core frameworks */}
                        <div className="absolute flex flex-col gap-5 items-center p-5 rounded-md bg-[#0D1B2A] shadow-sm shadow-[#38BDF8] top-0 left-20 w-90 h-40">
                            <h5>Core Frameworks</h5>
                            <div className="flex items-start justify-between gap-10 text-[#94A3B8]">
                                <div className="flex flex-col gap-2 items-center justify-between">
                                    <Image
                                        src="/images/react.svg"
                                        alt="MJ logo"
                                        width={30}
                                        height={30}
                                        className=""
                                    />
                                    <p className="text-[14px]">React</p>
                                </div>
                                <div className="flex flex-col gap-2 items-center justify-between">
                                    <Image
                                        src="/images/nextjs.svg"
                                        alt="MJ logo"
                                        width={30}
                                        height={30}
                                        className=""
                                    />
                                    <p className="text-[14px]">Next.js</p>
                                </div>
                            </div>
                        </div>

                        {/* 2nd card styling and tools */}
                        <div className="absolute flex flex-col gap-5 items-center p-4 rounded-md bg-[#0D1B2A] shadow-sm shadow-[#38BDF8] top-0 right-20">
                            <h5>Security & Specialized</h5>
                            <div className="flex items-start justify-between gap-10 text-[#94A3B8]">
                                <div className="flex flex-col gap-2 items-center justify-between">
                                    <FaShieldAlt className="w-6 h-6 text-[#2563EB]" />
                                    <p className="text-[14px] text-center">Web Security</p>
                                </div>
                                <div className="flex flex-col gap-2 items-center justify-between">
                                    <FaKey className="w-6 h-6 text-[#2563EB]" />
                                    <p className="text-[14px]  text-center">NextAuth</p>
                                </div>
                                <div className="flex flex-col gap-2 items-center justify-between">
                                    <FaCircleCheck className="w-6 h-6 text-[#2563EB]" />
                                    <p className="text-[14px] text-center">Secure API </p>
                                </div>
                                <div className="flex flex-col gap-2 items-center justify-between">
                                    <FaKeyboard className="w-6 h-6 text-[#2563EB]" />
                                    <p className="text-[14px] text-center">Next.js</p>
                                </div>
                            </div>
                        </div>

                        {/* absolute tree */}
                        <div className="bg-[#0D1B2A] w-5 h-100 left-0 top-0 flex items-center justify-center  relative"></div>
                        {/*card holders */}
                        <div className="absolute bg-[#38bff885] max-w-md w-20 h-5 left-5 top-4 flex items-center justify-center rounded-r-4xl -z-10"></div>
                        <div className="absolute bg-[#38bff885] w-20 h-5 right-5 top-10 flex items-center justify-center rounded-l-4xl -z-10"></div>
                        <div className="absolute bg-[#38bff885] w-20 h-5 right-5 top-56 flex items-center justify-center rounded-l-4xl -z-10"></div>
                        <div className="absolute bg-[#38bff885] w-20 h-5 left-5 top-62 flex items-center justify-center rounded-r-4xl -z-10"></div>
                        {/* absolute tree */}

                    {/* 3rd card */}
                    <div className="absolute flex flex-col gap-5 items-center p-5 rounded-md bg-[#0D1B2A] shadow-sm shadow-[#38BDF8] top-52 left-20">
                        <h5>Languages</h5>
                        <div className="flex items-start justify-between gap-10 text-[#94A3B8]">
                            <div className="flex flex-col gap-2 items-center justify-between">
                                <Image
                                    src="/images/javascript.svg"
                                    alt="MJ logo"
                                    width={30}
                                    height={30}
                                    className=""
                                />
                                <p className="text-[14px]">Tailwind CSS</p>
                            </div>
                            <div className="flex flex-col gap-2 items-center justify-between">
                                <Image
                                    src="/images/typescript.svg"
                                    alt="MJ logo"
                                    width={30}
                                    height={30}
                                    className=""
                                />
                                <p className="text-[14px]">Next.js</p>
                            </div>
                            <div className="flex flex-col gap-2 items-center justify-between">
                                <Image
                                    src="/images/html5.svg"
                                    alt="MJ logo"
                                    width={30}
                                    height={30}
                                    className=""
                                />
                                <p className="text-[14px]">Tailwind CSS</p>
                            </div>
                            <div className="flex flex-col gap-2 items-center justify-between">
                                <Image
                                    src="/images/css3.svg"
                                    alt="MJ logo"
                                    width={30}
                                    height={30}
                                    className=""
                                />
                                <p className="text-[14px]">Next.js</p>
                            </div>
                        </div>
                    </div>

                    {/* 4th card */}
                    <div className=" absolute flex flex-col gap-5 items-center p-5 rounded-md bg-[#0D1B2A] shadow-sm shadow-[#38BDF8] top-52 right-20">
                        <h5>Styling and Tools</h5>
                        <div className="flex items-start justify-between gap-10 text-[#94A3B8]">
                            <div className="flex flex-col gap-2 items-center justify-between">
                                <Image
                                    src="/images/tailwindcss.svg"
                                    alt="MJ logo"
                                    width={30}
                                    height={30}
                                    className=""
                                />
                                <p className="text-[14px]">Tailwind CSS</p>
                            </div>
                            <div className="flex flex-col gap-2 items-center justify-between">
                                <Image
                                    src="/images/vscode.svg"
                                    alt="MJ logo"
                                    width={30}
                                    height={30}
                                    className=""
                                />
                                <p className="text-[14px]">Next.js</p>
                            </div>
                            <div className="flex flex-col gap-2 items-center justify-between">
                                <Image
                                    src="/images/git.svg"
                                    alt="MJ logo"
                                    width={30}
                                    height={30}
                                    className=""
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
                                <p className="text-[14px]">Next.js</p>
                            </div>
                        </div>
                    </div>
                    </div>



                </div>
            </div>

        </div>
    )
}

export default Skills