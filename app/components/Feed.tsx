import { Bookmark, Ellipsis, Heart, MessageSquare, MessagesSquare, Save, Send } from "lucide-react"
import Image from "next/image"
import Comments from "./Comments"

const Feed = () => {
    return (
        <div className="p-4 bg-[#121212] flex flex-col rounded-lg text-sm gap-4 shadow-md text-white">
            <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    <div className="flex flex-1 items-center gap-4 font-bold text-white">
                        <Image src='https://images.pexels.com/photos/32763750/pexels-photo-32763750.jpeg' alt='Avatar' height={40} width={40} className="cursor-pointer rounded-[50%] w-10 h-10 object-cover" />
                        <span className="cursor-pointer">Cristino Ronaldo</span>
                    </div>
                    <Ellipsis className="cursor-pointer" />
                </div>
                <Image src='https://images.pexels.com/photos/32763750/pexels-photo-32763750.jpeg' alt='Avatar' height={40} width={40} className="cursor-pointer rounded-lg w-full h-[400px] object-cover" />
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim quia dicta qui minima autem, numquam eius odio quasi officiis minus, temporibus dolorum possimus? Porro quo adipisci temporibus voluptate. Illum modi totam deserunt fugiat, praesentium ullam vero voluptate, nemo nesciunt nostrum illo incidunt consectetur similique placeat unde id, ex omnis aut temporibus soluta atque? Numquam, adipisci temporibus. Commodi, voluptates ratione nam quas tempora ex! Perferendis doloremque iusto velit atque aperiam, exercitationem, ea vero omnis doloribus quisquam porro possimus eaque distinctio. Fuga sed iste voluptatem odit perspiciatis possimus optio error repellendus?</div>
                <div className="flex justify-between my-3">
                    <div className="flex gap-5">
                        <div className="flex gap-2"><Heart className="cursor-pointer"/>1 <span className="hidden md:inline">Likes</span></div>
                        <div className="flex gap-2"><MessageSquare className="cursor-pointer"/>1 <span className="md:inline hidden">Comments</span></div>
                        <Send className="cursor-pointer"/>
                    </div>
                    <Bookmark className="cursor-pointer"/>
                </div>
                <Comments/>
                <div className="w-full h-[0.4] bg-[#aaa] rounded-sm"></div>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    <div className="flex flex-1 items-center gap-4 font-bold text-white">
                        <Image src='https://images.pexels.com/photos/32763750/pexels-photo-32763750.jpeg' alt='Avatar' height={40} width={40} className="cursor-pointer rounded-[50%] w-10 h-10 object-cover" />
                        <span className="cursor-pointer">Cristino Ronaldo</span>
                    </div>
                    <Ellipsis className="cursor-pointer" />
                </div>
                <Image src='https://images.pexels.com/photos/32763750/pexels-photo-32763750.jpeg' alt='Avatar' height={40} width={40} className="cursor-pointer rounded-lg w-full h-[400px] object-cover" />
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim quia dicta qui minima autem, numquam eius odio quasi officiis minus, temporibus dolorum possimus? Porro quo adipisci temporibus voluptate. Illum modi totam deserunt fugiat, praesentium ullam vero voluptate, nemo nesciunt nostrum illo incidunt consectetur similique placeat unde id, ex omnis aut temporibus soluta atque? Numquam, adipisci temporibus. Commodi, voluptates ratione nam quas tempora ex! Perferendis doloremque iusto velit atque aperiam, exercitationem, ea vero omnis doloribus quisquam porro possimus eaque distinctio. Fuga sed iste voluptatem odit perspiciatis possimus optio error repellendus?</div>
                <div className="flex justify-between my-3">
                    <div className="flex gap-5">
                        <div className="flex gap-2"><Heart className="cursor-pointer"/>1 <span className="hidden md:inline">Likes</span></div>
                        <div className="flex gap-2"><MessageSquare className="cursor-pointer"/>1 <span className="md:inline hidden">Comments</span></div>
                        <Send className="cursor-pointer"/>
                    </div>
                    <Bookmark className="cursor-pointer"/>
                </div>
                <Comments/>
                <div className="w-full h-[0.4] bg-[#aaa] rounded-sm"></div>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    <div className="flex flex-1 items-center gap-4 font-bold text-white">
                        <Image src='https://images.pexels.com/photos/32763750/pexels-photo-32763750.jpeg' alt='Avatar' height={40} width={40} className="cursor-pointer rounded-[50%] w-10 h-10 object-cover" />
                        <span className="cursor-pointer">Cristino Ronaldo</span>
                    </div>
                    <Ellipsis className="cursor-pointer" />
                </div>
                <Image src='https://images.pexels.com/photos/32763750/pexels-photo-32763750.jpeg' alt='Avatar' height={40} width={40} className="cursor-pointer rounded-lg w-full h-[400px] object-cover" />
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim quia dicta qui minima autem, numquam eius odio quasi officiis minus, temporibus dolorum possimus? Porro quo adipisci temporibus voluptate. Illum modi totam deserunt fugiat, praesentium ullam vero voluptate, nemo nesciunt nostrum illo incidunt consectetur similique placeat unde id, ex omnis aut temporibus soluta atque? Numquam, adipisci temporibus. Commodi, voluptates ratione nam quas tempora ex! Perferendis doloremque iusto velit atque aperiam, exercitationem, ea vero omnis doloribus quisquam porro possimus eaque distinctio. Fuga sed iste voluptatem odit perspiciatis possimus optio error repellendus?</div>
                <div className="flex justify-between my-3">
                    <div className="flex gap-5">
                        <div className="flex gap-2"><Heart className="cursor-pointer"/>1 <span className="hidden md:inline">Likes</span></div>
                        <div className="flex gap-2"><MessageSquare className="cursor-pointer"/>1 <span className="md:inline hidden">Comments</span></div>
                        <Send className="cursor-pointer"/>
                    </div>
                    <Bookmark className="cursor-pointer"/>
                </div>
                <Comments/>
                <div className="w-full h-[0.4] bg-[#aaa] rounded-sm"></div>
            </div>
        </div>
    )
}

export default Feed
