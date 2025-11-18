import { BaggageClaim, Ban, Briefcase, Calendar, GraduationCap, Locate, MapPinned, PaperclipIcon } from "lucide-react"
import Link from "next/link"

const UserInfo = ({userId}: {userId: string}) => {
    return (
        <>
            <div className="flex flex-col gap-4 p-4 bg-[#121212] rounded-lg">
                <div className="text-sm flex justify-between w-full">
                    <div className="font-medium text-[#aaa] ">User Information</div>
                    <Link href='/' className="font-medium text-blue-500 cursor-pointer">See all</Link>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex flex-1 items-center gap-2 text-lg text-white">
                        <span className="cursor-pointer font-bold">Cristino Ronaldo</span>
                        <span className="text-sm text-[#aaa]">@Yashshz</span>
                    </div>
                </div>
                <div className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sint explicabo aliquid dignissimos placeat soluta sed qui optio? Iure nisi consequuntur minima neque.</div>
                <div className="text-xs text-[#aaa] flex flex-col gap-3">
                    <div className="flex items-center"><MapPinned size={14}  className="mr-2"/>Living in &nbsp;<span className="font-bold">Portugal</span></div>
                    <div className="flex items-center"><GraduationCap size={14} className="mr-2"/>Studied in &nbsp; <span className="font-bold">Ed tech uni.</span></div>
                    <div className="flex items-center"><Briefcase size={14} className="mr-2"/>Works in &nbsp;<span className="font-bold">Apple.inc</span></div>
                </div>
                <div className="flex w-full justify-between">
                    <Link href='/' className="flex gap-2 text-sm items-center"><PaperclipIcon size={14} className="text-[#aaa] cursor-pointer"/><span className="font-bold text-blue-500">Yash.dev</span></Link>
                    <div className="flex gap-2 text-sm items-center text-[#aaa]"><Calendar size={14}/>Joined Nov 12, 2024</div>
                </div>
                <button className="p-2 w-full rounded-lg bg-blue-500 cursor-pointer text-sm font-bold">Following</button>
                <div className="text-sm flex w-full items-center gap-2 cursor-pointer text-red-500"><Ban size={14}/>Block User</div>
            </div>
        </>
    )
}

export default UserInfo
