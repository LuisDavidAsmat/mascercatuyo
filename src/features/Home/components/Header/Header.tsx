import ImgHolder from "../../../../components/ImgHolder";

import FollowRelationships from "./components/FollowRelationships/FollowRelationships";
import Notifications from "./components/Notifications/Notifications";
import SearchForm from "./components/SeachForm/SearchForm";
import UserLocation from "./components/UserLocation/UserLocation";
import UserMenu from "./components/UserMenu/UserMenu";

function Header() 
{    
    return (
        <header className="px-8 py-3 flex flex-col gap-0 
        bg-white text-black text-sm
        dark:bg-neutral-800 dark:text-white
        sm:px-14 sm:gap-0 sm:justify-between sm:items-center sm:flex-row
        ">
            <div className="flex items-center gap-6">
                <ImgHolder imgPath={"svg/logo.svg"} customClass="w-14"/>
                <SearchForm />
            </div>
            <UserMenu/>
            <FollowRelationships />                
            <Notifications />
            <UserLocation mapDimensions={'w-[25rem] h-[16rem]'} isFloating={true} isPopup={true}/>                
        </header>
        
    );
}

export default Header;