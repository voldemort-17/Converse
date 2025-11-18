import { CircleCheck, CircleX, Cross } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Friends = () => {
    return (
        <>
            <div className="flex flex-col gap-4 p-4 bg-[#121212] rounded-lg">
                <div className="text-sm flex justify-between w-full">
                    <div className="font-medium text-[#aaa] ">Friend Requests</div>
                    <Link href='/' className="font-medium text-blue-500 cursor-pointer">See all</Link>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex flex-1 items-center gap-3 text-sm font-bold text-white">
                        <Image src='https://images.pexels.com/photos/32763750/pexels-photo-32763750.jpeg' alt='Avatar' height={32} width={32} className="cursor-pointer rounded-[50%] w-8 h-8 object-cover" />
                        <span className="cursor-pointer">Cristino Ronaldo</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CircleCheck className="cursor-pointer text-blue-500"/>
                        <CircleX className="cursor-pointer text-red-500"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Friends
