"use client"
import Link from "next/link";
import { useState } from "react"

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="md:hidden">
        <div className="flex flex-col gap-[4.5] cursor-pointer" onClick={() => setIsOpen((prev) => !prev)}>
            <div className={`w-6 h-1 bg-[#EAEAEA] rounded-sm ${isOpen ? "rotate-45" : ''} origin-left ease-in-out duration-500`}/>
            <div className={`w-6 h-1 bg-[#EAEAEA] rounded-sm ${isOpen ? "opacity-0" : ''} ease-in-out duration-500`}/>
            <div className={`w-6 h-1 bg-[#EAEAEA] rounded-sm ${isOpen ? "-rotate-45": ''} origin-left ease-in-out duration-500`}/>
        </div>

        {isOpen && (
            <div className="absolute w-full h-[calc(100vh-56px)] top-14 left-0 bg-[#121212] text-[#EAEAEA] font-bold flex flex-col items-center justify-center gap-12 z-100 duration-500 ease-in-out">
                <Link href="/profile/1" className="hover:text-[#00A8E8] cursor-pointer">Home</Link>
                <Link href="/" className="hover:text-[#00A8E8] cursor-pointer">Friends</Link>
                <Link href="/" className="hover:text-[#00A8E8] cursor-pointer">Groups</Link>
                <Link href="/" className="hover:text-[#00A8E8] cursor-pointer">Stories</Link>
                <Link href="/" className="hover:text-[#00A8E8] cursor-pointer">LogIn</Link>
            </div>
        )}
      </div>
    </>
  )
}

export default MobileMenu
