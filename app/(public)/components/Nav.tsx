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
                <div className="container-custom">
                    <div className="topnav flex items-center justify-between py-2 text-[#285483] dark:text-white">
                        <div className="flex gap-10 text-[12px] shrink-0">
                            <a href="mailto:micahshegabo1@gmail.com" className="flex items-center gap-1.5"> <MailIcon className='h-5' /> <span>micahshegabo1@gmail.com</span></a>

                            <a href="tel: +2348168077767" className="flex items-center gap-1.5"> <PhoneIcon className='h-5' /> <span>0099977775</span></a>

                            <p className="flex items-center gap-1.5"><LocationEdit className='h-5' /> Nigeria, West Africa</p>
                        </div>

                        <div className="flex items-center gap-4 dark:text-white text-[#2563EB]">
                            <Link target="_blank" rel="noopener noreferrer" prefetch={false} href="http://www.linkedin.com/in/joshua-micah-41a409161"><FaLinkedin /></Link>
                            <Link target="_blank" rel="noopener noreferrer" prefetch={false} href="https://github.com/MJOSH-119900"><FaGithub /></Link>
                            <Link target="_blank" rel="noopener noreferrer" prefetch={false} href="https://www.facebook.com/profile.php?id=100091890610919"><FaFacebook /></Link>
                            <Link target="_blank" rel="noopener noreferrer" prefetch={false} href="https://discord.com/channels/@me"><FaDiscord /></Link>
                        </div>
                    </div>
                </div>
            </div>


            <div className='sticky top-0  bg-white text-black dark:bg-[#07111F] dark:text-[#F8FAFC] trasform transition-all duration-300 z-30 '>
                <div className="main-nav shadow-xs shadow-[#2563EB] dark:shadow-[#1E293B] py-4 relative">
                    <div className="container-custom flex items-center justify-between">
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
                                className={`dark:bg-[#0D1B2A] bg-[#25a6eb52] text-[#2563EB] shadow-sm shadow-[#2563EB] dark:shadow-[#25a6eb52] p-2 items-center justify-center rounded-full`}
                            >
                                {theme === "light" ? (<LuMoon className='h-6 w-6' />) : (<LuSun className='h-6 w-6' />)}
                            </button>
                        </div>
                    </div>
                </div>

                {/* -----------------------------------------small screen nav ----------------------------------------------------------*/}    
                <div className="lg:hidden">
                    {/* Menu Button */}
                    <button
                        onClick={handleToggle}
                        aria-label={toggle ? "Close menu" : "Open menu"}
                        className="absolute top-6 right-10 md:top-5 md:right-20 z-50 rounded-2xl focus:outline-none"
                    >
                        {!toggle ? (
                            <MenuIcon className="h-8 w-8 md:h-10 md:w-10 text-[#285483]" />
                        ) : (
                            <X className="h-8 w-8 md:h-10 md:w-10 text-[#2563EB]" />
                        )}
                    </button>

                    {/* Mobile Menu Overlay */}
                    {toggle && (
                        <div className="fixed inset-0 top-20.5 z-40 w-full overflow-y-auto bg-[#132f6dd5]">
                            <div className="flex min-h-screen flex-col items-center justify-start overflow-y-auto pt-24 pb-10">
                                <div className="flex w-full max-w-sm flex-col items-start gap-6 px-10 font-bold">

                                    <a onClick={handleToggle} href="#home" className="text-white transition-colors hover:text-[#2563EB]">Home</a>
                                    <a onClick={handleToggle} href="#about" className="text-white transition-colors hover:text-[#2563EB]">About</a>
                                    <a onClick={handleToggle} href="#experience" className="text-white transition-colors hover:text-[#2563EB]">Experience</a>
                                    <a onClick={handleToggle} href="#skills" className="text-white transition-colors hover:text-[#2563EB]">Skills</a>
                                    <a onClick={handleToggle} href="#project" className="text-white transition-colors hover:text-[#2563EB]">Projects</a>

                                    {/* Connect + Theme */}
                                    <div className="flex items-center justify-center py-10 gap-5">
                                        <a onClick={handleToggle} href="#contact" className="bg-[#2563EB] text-white flex items-center gap-2 px-6 py-2 rounded-sm w-auto whitespace-nowrap " >
                                            <span>Connect</span>
                                            <HiChatBubbleBottomCenterText />
                                        </a>

                                        <button
                                            onClick={toggleTheme}
                                            className={`bg-[#0D1B2A] text-[#2563EB] p-2 items-center justify-center rounded-full`}
                                        >
                                            {theme === "light" ? (<LuMoon className='h-6 w-6' />) : (<LuSun className='h-6 w-6' />)}
                                        </button>
                                    </div>

                                    {/* Social Links */}
                                    <div className="flex items-center gap-10 pt-4 text-white text-lg">
                                        <Link target="_blank" rel="noopener noreferrer" prefetch={false} href="http://www.linkedin.com/in/joshua-micah-41a409161"><FaLinkedin /></Link>
                                        <Link target="_blank" rel="noopener noreferrer" prefetch={false} href="https://github.com/MJOSH-119900"><FaGithub /></Link>
                                        <Link target="_blank" rel="noopener noreferrer" prefetch={false} href="https://www.facebook.com/profile.php?id=100091890610919"><FaFacebook /></Link>
                                        <Link target="_blank" rel="noopener noreferrer" prefetch={false} href="https://discord.com/channels/@me"><FaDiscord /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>


            </div>
        </>
    )

}

export default Nav