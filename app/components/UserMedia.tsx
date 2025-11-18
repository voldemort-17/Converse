import Image from "next/image"
import Link from "next/link"

const UserMedia = ({ userId }: { userId: string }) => {
    return (
        <>
            <div className="flex flex-col gap-4 p-4 bg-[#121212] rounded-lg">
                <div className="text-sm flex justify-between w-full">
                    <div className="font-medium text-[#aaa] ">User Media</div>
                    <Link href='/' className="font-medium text-blue-500 cursor-pointer">See all</Link>
                </div>
                <div className="flex flex-wrap gap-4">
                <Image src='https://images.pexels.com/photos/1420440/pexels-photo-1420440.jpeg' width={80} height={80} alt="Image" className="rounded-lg w-1/5 h-24" />
                <Image src='https://images.pexels.com/photos/1420440/pexels-photo-1420440.jpeg' width={80} height={80} alt="Image" className="rounded-lg w-1/5 h-24" />
                <Image src='https://images.pexels.com/photos/1420440/pexels-photo-1420440.jpeg' width={80} height={80} alt="Image" className="rounded-lg w-1/5 h-24" />
                <Image src='https://images.pexels.com/photos/1420440/pexels-photo-1420440.jpeg' width={80} height={80} alt="Image" className="rounded-lg w-1/5 h-24" />
                <Image src='https://images.pexels.com/photos/1420440/pexels-photo-1420440.jpeg' width={80} height={80} alt="Image" className="rounded-lg w-1/5 h-24" />
                <Image src='https://images.pexels.com/photos/1420440/pexels-photo-1420440.jpeg' width={80} height={80} alt="Image" className="rounded-lg w-1/5 h-24" />
                <Image src='https://images.pexels.com/photos/1420440/pexels-photo-1420440.jpeg' width={80} height={80} alt="Image" className="rounded-lg w-1/5 h-24" />
                <Image src='https://images.pexels.com/photos/1420440/pexels-photo-1420440.jpeg' width={80} height={80} alt="Image" className="rounded-lg w-1/5 h-24" />
                </div>
            </div>
        </>
    )
}

export default UserMedia
