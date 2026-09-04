import { ArrowUp, CopyrightIcon } from "lucide-react"
const Footer = () => {
    return (
        <div className="relative">
            <div className="container-custom py-6">
                <div className="flex flex-col md:flex-row items-center md:justify-between gap-5">
                    <div className="flex flex-col md:flex-row items-center text-[#2563EB] dark:text-white md:gap-10">
                        <h2>M.J</h2>
                        <p className="text-[12px] dark:text-[#94A3B8] text-[#285483] items-center hidden md:flex "><CopyrightIcon className="h-3" /> 2025 Micah, All rights reseved.</p>
                    </div>

                    <div className="flex items-center gap-10">
                        <p className="text-[12px] dark:text-[#94A3B8] text-[#285483] flex items-center">Privacy Policy</p>
                        <p className="text-[12px] dark:text-[#94A3B8] text-[#285483] flex items-center">Terms & Conditions</p>

                        <a href="#home" className="hidden md:block"><button className="dark:bg-[#0D1B2A] bg-[#2563EB] text-white flex items-center justify-center rounded-md"><ArrowUp  /></button></a>
                        
                    </div>

                    <p className="text-[12px] dark:text-[#94A3B8] text-[#285483] flex md:hidden items-center"><CopyrightIcon className="h-3" /> 2025 Micah, All rights reseved.</p>

                </div>
            </div>
            {/*card holders */}
            <div className="absolute dark:bg-[#0D1B2A] bg-[#28548323] w-80 h-10 left-0 top-4 flex rounded-br-full items-center justify-center -z-10"></div>
            <div className="absolute dark:bg-[#0D1B2A] bg-[#28548323] w-2000 dark:h-1 h-px right-0 top-4 flex items-center justify-center -z-10"></div>
        </div>
    )
}

export default Footer