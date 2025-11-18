import { Ellipsis, Heart, SmilePlus } from "lucide-react"
import Image from "next/image"

const Comments = () => {
    return (
        <>
            <div className="flex flex-col gap-4">
                <div className="flex gap-4 items-center">
                    <Image src='https://images.pexels.com/photos/32763750/pexels-photo-32763750.jpeg' alt='Avatar' height={32} width={32} className="cursor-pointer rounded-[50%] w-8 h-8 object-cover" />
                    <div className="flex gap-2 flex-1 bg-[#222] items-center p-2 rounded-lg">
                        {/* TEXT Data  */}
                        <input name="" id="" className="flex-1 p-1 rounded-md bg-transparent font-medium outline-none" placeholder="Write a comment..."></input>
                        <SmilePlus className="cursor-pointer text-[#aaa]" />
                    </div>
                </div>
                <div className="flex gap-4 items-start">
                    <Image src='https://images.pexels.com/photos/32763750/pexels-photo-32763750.jpeg' alt='Avatar' height={40} width={40} className="cursor-pointer rounded-[50%] w-10 h-10 object-cover" />
                    <div className="flex gap-2 flex-1 flex-col items-start rounded-lg">
                        {/* TEXT Data  */}
                        <div className="flex w-full items-center justify-between">
                            <div className="flex font-medium flex-1">Cristino Ronaldo</div>
                            <Ellipsis className="cursor-pointer" />
                        </div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis excepturi dicta molestiae. Quibusdam consequatur dolore consectetur quidem delectus. Dignissimos nisi tempora eveniet rerum! Quidem, reprehenderit quibusdam adipisci maiores corpo.</div>
                        <div className="flex gap-4 my-2 items-center text-sm">
                            <div className="flex gap-1 items-center"><Heart className="cursor-pointer" size={14}/>1 <span className="hidden md:inline">Likes</span></div>
                            <div className="text-[#aaa]">|</div>
                            <div className="cursor-pointer">Reply</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Comments
