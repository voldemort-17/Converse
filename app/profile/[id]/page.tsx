import Feed from "@/app/components/Feed";
import LeftMenu from "@/app/components/LeftMenu";
import RightMenu from "@/app/components/RightMenu";
import Image from "next/image";

const ProfilePage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return (
    <>
      <div className="flex gap-6 pt-6">
        <div className="hidden xl:block w-[20%]"><LeftMenu userId={id} type="profile" /></div>
        <div className="w-full lg:w-[70%] xl:w-[50%]">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-center flex-col gap-4">
              <div className="w-full h-64 relative">
                <Image src='https://images.pexels.com/photos/34095239/pexels-photo-34095239.jpeg' fill alt="Image" className="rounded-lg object-cover" />
                <Image src='https://images.pexels.com/photos/34721374/pexels-photo-34721374.jpeg' width={128} height={128} alt="Image" className="rounded-full w-32 h-32 m-auto absolute left-0 right-0 -bottom-16 ring-4 ring-white object-cover" />
              </div>
              <h1 className="mt-18 text-2xl font-bold text-white">Cristino Ronaldo</h1>
              <div className="flex items-center gap-10 font-bold text-[#aaa] text-lg">
                <div className="flex flex-col gap-1 items-center"><span>140</span>Posts</div>
                <div className="flex flex-col gap-1 items-center"><span>1.2K</span>Followers</div>
                <div className="flex flex-col gap-1 items-center"><span>140</span>Following</div>
              </div>
            </div>
            <Feed />
          </div>
        </div>
        <div className="hidden lg:block w-[30%]"><RightMenu userId={id} /></div>
      </div></>
  )
}

export default ProfilePage;
