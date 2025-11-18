import { UserCheck } from "lucide-react"
import Image from "next/image"

const LeftProfileCard = () => {
    return (
        <>
            <div className="flex flex-col gap-6 p-4 bg-[#121212] rounded-lg">
                <div className="h-20 relative">
                    <Image src='https://images.pexels.com/photos/1420440/pexels-photo-1420440.jpeg' width={80} height={80} alt="Image" className="rounded-lg w-full h-20" />
                    <Image src='https://images.pexels.com/photos/19920245/pexels-photo-19920245.jpeg' width={80} height={80} alt="Image" className="object-cover rounded-full m-auto w-12 h-12 absolute left-0 right-0 -bottom-6 ring-1 ring-white" />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="w-full m-auto font-bold text-center">Cristino Ronaldo</div>
                    <div className="flex gap-2 text-sm font-bold items-center justify-center text-[#aaa]"><UserCheck size={16}/>500 Followers</div>
                    <button className="p-2 w-full rounded-lg bg-blue-500 cursor-pointer text-sm font-bold">My Profile</button>
                </div>
            </div>
        </>
    )
}

export default LeftProfileCard
