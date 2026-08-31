"use client"
import { useApp } from "@/app/context/AppContext"
import { HamburgerIcon, LocationEdit, MailIcon, MenuIcon, PhoneIcon, X } from 'lucide-react'
import Image from 'next/image'
import Link from "next/link"
import React, { useState } from 'react'
import { FaDiscord, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiChatBubbleBottomCenterText } from 'react-icons/hi2'
import { LuMoon, LuSun } from 'react-icons/lu'

const Nav = () => {
    const [toggle, setToggle] = useState<boolean>(false)
    const handleToggle = () => setToggle(!toggle)
    const { theme, toggleTheme } = useApp();


    return (
        <>
            <div id='home' className="sr-only"></div>
            <div className="topnav bg-white text-black dark:bg-[#07111F] dark:text-[#F8FAFC] hidden lg:block">
                <div className="max-w-[80%] mx-auto">
                    <div className="topnav flex items-center justify-between py-2 text-[#285483] dark:text-white">
                        <div className="flex gap-10 text-[12px] shrink-0">
                            <a href="mailto:micahshegabo1@gmail.com" className="flex items-center gap-1.5"> <MailIcon className='h-5' /> <span>micahshegabo1@gmail.com</span></a>

                            <a href="tel: +2348168077767" className="flex items-center gap-1.5"> <PhoneIcon className='h-5' /> <span>0099977775</span></a>

                            <p className="flex items-center gap-1.5"><LocationEdit className='h-5' /> Nigeria, West Africa</p>
                        </div>

                        <div className="flex items-center gap-4 dark:text-white text-[#2563EB]">
                            <Link target="_blank" rel="noopener noreferrer" prefetch={false} href="http://www.linkedin.com/in/joshua-micah-41a409161"><FaLinkedin  /></Link>
                            <Link target="_blank" rel="noopener noreferrer" prefetch={false} href="https://github.com/MJOSH-119900"><FaGithub  /></Link>
                            <Link href="https://www.facebook.com/profile.php?id=100091890610919" rel="noopener noreferrer" prefetch={false}><FaFacebook  /></Link>
                            <Link href="https://discord.com/channels/@me" rel="noopener noreferrer" prefetch={false}><FaDiscord  /></Link>
                        </div>
                    </div>
                </div>
            </div>


            <div className='sticky top-0  bg-white text-black dark:bg-[#07111F] dark:text-[#F8FAFC] trasform transition-all duration-300 z-30 '>
                <div className="main-nav shadow-xs shadow-[#2563EB] dark:shadow-[#1E293B] py-4 relative">
                    <div className="max-w-[80%] mx-auto flex items-center justify-between">
                        <Image src="/images/mj-logo.png" alt="MJ logo" width={50} height={50} />

                        <div className="hidden items-center gap-8 lg:flex">

                            {/* Links */}
                            <a href="#home" className="text-[#285483] dark:text-white transition-colors hover:text-[#2563EB]">Home</a>
                            <a href="#about" className="text-[#285483] dark:text-white transition-colors hover:text-[#2563EB]">About</a>
                            <a href="#experience" className="text-[#285483] dark:text-white transition-colors hover:text-[#2563EB]">Experience</a>
                            <a href="#skills" className="text-[#285483] dark:text-white transition-colors hover:text-[#2563EB]">Skills</a>
                            <a href="#project" className="text-[#285483] dark:text-white transition-colors hover:text-[#2563EB]">Projects</a>
                        </div>

                        {/* button and dark/light mode toggle */}
                        <div className="hidden items-center justify-between gap-6 lg:flex">

                            <a href="#contact" className="bg-[#2563EB] text-white flex items-center gap-2 px-6 py-2 rounded-sm w-auto whitespace-nowrap " >
                                <span>Connect</span>
                                <HiChatBubbleBottomCenterText />
                            </a>


                            {/* <div className="bg-[#0D1B2A] p-2 items-center justify-center rounded-full"><LuMoon className='h-6 w-6' /></div> */}
                            <button
                                onClick={toggleTheme}
                                className={`dark:bg-[#0D1B2A] bg-[#25a6eb52] text-[#2563EB] p-2 items-center justify-center rounded-full`}
                            >
                                {theme === "light" ? (<LuMoon className='h-6 w-6' />) : (<LuSun className='h-6 w-6' />)}
                            </button>
                        </div>
                    </div>
                </div>

                {/* small screen nav */}
                <div className="lg:hidden">
                    <button onClick={handleToggle} className="absolute rounded-2xl hover:text-[#2563EB] focus:outline-none top-6 right-10 md:top-5 md:right-20 z-10">
                        {!toggle ? (<MenuIcon className="h-8 w-8 md:h-10 md:w-10" />) : (<X className="h-8 w-8 md:h-10 md:w-10 stick top-0" />)}
                    </button>

                    <div className="absolute top-0 right-0 bg-[#13306de1] w-full overflow-y-hidden">
                        <div className="flex flex-col items-center justify-center">
                            {toggle && (
                                <div className="flex flex-col items-start justify-start font-bold gap-4 py-30">
                                    <div className="absolute top-20 left-0 right-50 min-w-300 h-1 bg-[#978e3b1f] z-50"></div>

                                    {/* Links */}
                                    <a onClick={handleToggle} href="#home" className="text-white transition-colors hover:text-[#2563EB]">Home</a>
                                    <a onClick={handleToggle} href="#about" className="text-white transition-colors hover:text-[#2563EB]">About</a>
                                    <a onClick={handleToggle} href="#experience" className="text-white transition-colors hover:text-[#2563EB]">Experience</a>
                                    <a onClick={handleToggle} href="#skills" className="text-white transition-colors hover:text-[#2563EB]">Skills</a>
                                    <a onClick={handleToggle} href="#project" className="text-white transition-colors hover:text-[#2563EB]">Projects</a>

                                    {/* button and dark/light mode toggle */}
                                    <div className="flex items-center justify-center py-10 gap-5">
                                        <a onClick={handleToggle} href="#contact" className="bg-[#2563EB] text-white flex items-center gap-2 px-6 py-2 rounded-sm w-auto whitespace-nowrap " >
                                            <span>Connect</span>
                                            <HiChatBubbleBottomCenterText />
                                        </a>

                                        {/* <div className="bg-[#0D1B2A] p-2 items-center justify-center rounded-full"><LuMoon className='h-6 w-6' /></div> */}
                                        <button
                                            onClick={toggleTheme}
                                            className={`bg-[#0D1B2A] text-[#2563EB] p-2 items-center justify-center rounded-full`}
                                        >
                                            {theme === "light" ? (<LuMoon className='h-6 w-6' />) : (<LuSun className='h-6 w-6' />)}
                                        </button>
                                    </div>


                                    {/* socials */}
                                    <div className="flex items-center gap-10 text-white">
                                        <Link onClick={handleToggle} href="#"><FaLinkedin className="w-6 h-6" /></Link>
                                        <Link onClick={handleToggle} href="#"><FaGithub className="w-6 h-6" /></Link>
                                        <Link onClick={handleToggle} href="#"><FaFacebook className="w-6 h-6" /></Link>
                                        <Link onClick={handleToggle} href="#"><FaDiscord className="w-6 h-6" /></Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Nav