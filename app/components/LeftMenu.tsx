import Ads from "./Ads"
import LeftMenuBar from "./LeftMenuBar"
import LeftProfileCard from "./LeftProfileCard"

const LeftMenu = ({userId, type}: {userId?: string, type: "home" | "profile"}) => {
    return (
        <>
            <div className="flex flex-col gap-6 text-white">
                {type === "home" && <LeftProfileCard/>}
                <LeftMenuBar/>
                <Ads size="sm" />
            </div>
        </>
    )
}

export default LeftMenu
