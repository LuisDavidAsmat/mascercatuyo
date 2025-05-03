import { useState } from 'react'
import UserActivity from '../../UserActivity/UserActivity';
import UserNetwork from '../../UserNetwork/UserNetwork';
import UserMessages from '../../UserMessages/UserMessages';
import UserNotifications from '../../UserNotifications/UserNotifications';


const tabsTitles: string[] = ['Activity', 'Your Community', 'Messages','Notifications' ];
const tabContents = 
[
    UserActivity,
    UserNetwork,
    UserMessages,
    UserNotifications
];


const ProfileTabs = () => 
{

    const [ activeTabIndex, setActiveTabIndex ] = useState(0);

    const CurrentTab = tabContents[activeTabIndex]
  return (
    <div className="basis-5/6 px-4 py-3 ">
        <div role="tablist" className="tabs tabs-boxed bg-gray-100 rounded-none ">
            {tabsTitles.map((tab, index) => (
                <a 
                    key={index}
                    role='tab'
                    className={`tab ml-1 transition-colors duration-200 rounded-none 
                        ${index === activeTabIndex 
                            ? 'bg-buttons border-gray-400 text-gray-800 border font-medium text-md'  
                            : 'text-gray-400 '
                        } 
                        `
                    }
                    onClick={() => setActiveTabIndex(index)}
                >
                    {tab}
                </a>
            ))}
        </div>

        <div className="p-4 bg-base-200 bg-white">
            <CurrentTab />
        </div>
    </div>
  )
}

export default ProfileTabs