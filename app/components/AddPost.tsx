import { Calendar1, CameraIcon, LaughIcon, PenSquare, SmilePlus, Video } from "lucide-react"
import Image from "next/image"

const AddPost = () => {
    return (
        <div className="p-4 bg-[#121212] justify-between flex rounded-lg text-sm gap-4 shadow-md text-[#aaa]">
            {/* IMAGE  */}
            <Image src='https://images.pexels.com/photos/32763750/pexels-photo-32763750.jpeg' alt='Avatar' height={48} width={48} className="cursor-pointer rounded-[50%] w-12 h-12 object-cover" />
            <div className="flex flex-col flex-1">
                <div className="flex gap-4 flex-1 items-end">
                    {/* TEXT Data  */}
                    <textarea name="" id="" className="bg-[#222] flex-1 p-2 rounded-md font-medium outline-none" placeholder="what's on your mind?"></textarea>
                    <SmilePlus className="cursor-pointer" />
                </div>
                <div className="flex gap-4 items-center mt-4 flex-wrap">
                    <div className="flex items-center gap-2 font-bold cursor-pointer"><CameraIcon />Photo</div>
                    <div className="flex items-center gap-2 font-bold cursor-pointer"><Video />Video</div>
                    <div className="flex items-center gap-2 font-bold cursor-pointer"><PenSquare />Poll</div>
                    <div className="flex items-center gap-2 font-bold cursor-pointer"><Calendar1 />Event</div>
                </div>
            </div>
        </div>
    )
}

export default AddPost
