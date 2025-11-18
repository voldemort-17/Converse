import Ads from "./Ads"
import Birthdays from "./Birthdays"
import Friends from "./Friends"
import UserInfo from "./UserInfo"
import UserMedia from "./UserMedia"

const RightMenu = ({ userId }: { userId?: string }) => {
  return (
    <>
      <div className="flex flex-col gap-6 text-white">
        {userId ? (
          <>
            <UserInfo userId= {userId}/>
            <UserMedia userId= {userId}/>
          </>
        ) : ''}
        <Friends />
        <Birthdays />
        <Ads size="md" />
      </div>
    </>
  )
}

export default RightMenu
