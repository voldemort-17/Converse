"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import MobileMenu from './MobileMenu';
import { HomeIcon, LogIn, PanelsTopLeft, PersonStanding, PersonStandingIcon, PlusCircleIcon, Search, Bell, MessageCircle } from 'lucide-react';
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

const Navbar = () => {
    const pathData = usePathname();
    console.log('pathData', pathData);
    return (
        <>
            <nav className='w-full flex bg-[#121212] text-[#EAEAEA] font-bold p-4 justify-between items-center'>
                <Link href="/" className='text-lg hover:text-[#00A8E8] cursor-pointer'>Converse</Link>
                <ul className='hidden md:flex gap-8 text-sm items-center'>
                    <Link href="/profile/1" className="hover:text-[#00A8E8] cursor-pointer flex items-center justify-center gap-2"><HomeIcon size={18} className='hidden lg:block' />HomePage</Link>
                    <Link href="/" className="hover:text-[#00A8E8] cursor-pointer flex items-center justify-center gap-2"><PersonStandingIcon className='hidden lg:block'/> Friends</Link>
                    <Link href="/" className="hover:text-[#00A8E8] cursor-pointer flex items-center justify-center gap-2"><PlusCircleIcon size={20} className='hidden lg:block'/>Stories</Link>
                </ul>
                <div className='hidden md:flex flex-row items-center bg-[#222] text-[#aaa] rounded-xl p-2'>
                    <input type="text" name='search' placeholder='Search...' className='bg-transparent outline-none' />
                    <Search className='cursor-pointer' />
                </div>
                <ClerkLoading>
                    <div>Loading...</div>
                </ClerkLoading>
                <ClerkLoaded>
                    <SignedIn>
                        <div className='flex items-center justify-center gap-4'>
                            <MobileMenu />
                            <PanelsTopLeft />
                            <MessageCircle/>
                            <Bell />
                            <UserButton />
                        </div>
                    </SignedIn>
                    <SignedOut>
                        <div>
                            <Link href="/sign-in" className='cursor-pointer flex items-center justify-center gap-2'><LogIn size={18} />Login</Link>
                        </div>
                    </SignedOut>
                </ClerkLoaded>
            </nav>
        </>
    )
}

export default Navbar
