"use client"
import { LocationEdit, MailIcon, PhoneIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { FaDiscord, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiChatBubbleBottomCenterText } from 'react-icons/hi2'
import { LuMoon } from 'react-icons/lu'

const Nav = () => {
    return (
        <>
         <div id='home' className="topnav bg-[#0D1B2A] hidden lg:block">
                <div className="max-w-[80%] mx-auto">
                    <div className="topnav flex items-center justify-between py-2">
                        <div className="flex gap-10 text-[12px] shrink-0">
                            <a href="mailto:micahshegabo1@gmail.com" className="flex items-center gap-1.5"> <MailIcon className='h-5' /> <span>micahshegabo1@gmail.com</span></a>

                            <a href="tel: +2348168077767" className="flex items-center gap-1.5"> <PhoneIcon className='h-5' /> <span>0099977775</span></a>

                            <p className="flex items-center gap-1.5"><LocationEdit className='h-5' /> Nigeria, West Africa</p>
                        </div>

                        <div className="flex items-center gap-4">
                            <FaLinkedin /> <FaGithub /> <FaFacebook /> <FaDiscord />
                        </div>
                    </div>
                </div>
            </div>
        
        
        <div className='sticky top-0  bg-[#07111F] trasform transition-all duration-300 z-30'>
            <div className="main-nav shadow-sm shadow-[#1E293B] py-4 ">
                <div className="max-w-[80%] mx-auto flex items-center justify-between">
                    <Image src="/images/mj-logo.png" alt="MJ logo" width={50} height={50} />

                    <div className="hidden items-center gap-10 lg:flex">
                        <a href="#home" className="text-[#94A3B8] transition-colors hover:text-[#2563EB]">Home</a>
                        <a href="#about" className="text-[#94A3B8] transition-colors hover:text-[#2563EB]">About</a>
                        <a href="#experience" className="text-[#94A3B8] transition-colors hover:text-[#2563EB]">Experience</a>
                        <a href="#skills" className="text-[#94A3B8] transition-colors hover:text-[#2563EB]">Skills</a>
                        <a href="#project" className="text-[#94A3B8] transition-colors hover:text-[#2563EB]">Projects</a>
                    </div>

                    <div className="hidden items-center justify-between gap-6 lg:flex">
                        <a href="#contact" className="bg-[#2563EB] flex items-center gap-2 px-6 py-2 rounded-sm w-auto whitespace-nowrap " >
                            <span>Let&apos;s talk</span>
                            <HiChatBubbleBottomCenterText />
                        </a>

                        <div className="bg-[#0D1B2A] p-2 items-center justify-center rounded-full"><LuMoon className='h-6 w-6' /></div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )

}

export default Nav