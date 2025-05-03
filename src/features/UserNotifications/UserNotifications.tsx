import { useState } from 'react'
import NotificationItem from './components/NotificationItem';


const tabs = ["Todas", "Siguiendo", "Archivadas"];

const notificationData = [
  {
    type: "not-following",
    imageUrl: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    text: "User Name comentò en una publicacion donde reaccionaste",
    time: "hace 3h",
    read: false
  },
  {
    type: "following",
    imageUrl: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    text: "User Name te siguió",
    time: "hace 3h",
    read: false
  },
  {
    type: "comment",
    imageUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    text: "Another User comentó tu publicación",
    time: "hace 5h",
    read: true

  },
  {
    type: "archived",
    imageUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    text: "Old User archivó un mensaje",
    time: "hace 1d",
    read: false
    
  }
];

const UserNotifications = () => 
{
  const [ activeTabIndex, setActiveTabIndex ] = useState(0);

  const getNotificationCounts = () => 
  {
    const activeNotifications = notificationData.filter(notif => notif.type !== "archived");

    return {
      all: activeNotifications.length,
      following: activeNotifications.filter(notif => notif.type === "following" ||notif.type === "comment").length,
      archived: notificationData.filter(notif => notif.type === "archived").length,
    }
  }

  const getFilteredNotifications = () => 
  {
    switch (activeTabIndex) 
    {
      case 0: return notificationData.filter(notif => notif.type !== "archived");
      case 1: return notificationData.filter(notif => 
        (notif.type === "following" || notif.type === "comment") 

        
      );
      case 2: return notificationData.filter(n => n.type === "archived");
      default: return [];
    }
  }

  const counts = getNotificationCounts();
  
  return (
    <div className='max-w-lg'>
      <div role="tablist" className="tabs tabs-bordered">
        {tabs.map((tab, index) => {

          const count = index === 0 ? 
            counts.all : index === 1 ?
            counts.following: counts.archived

            return (
              <a 
                key={index}
                role="tab"
                className={`tab ${activeTabIndex === index ? 'tab-active' : ''}`}
                onClick={() => setActiveTabIndex(index)}
              >
                <span className=''>{tab}</span>
                {count > 0 && (
                  <span className='bg-buttons px-4 rounded-md'>{count}</span>
                  
                )}
              </a>
            );
        })}
      </div>

      <div className="w-full mt-4 space-y-4">
        {getFilteredNotifications().map((notif, index) => (
          
          <NotificationItem key={index} {...notif}/>
        ))}
      </div>
    </div>
  )
}

export default UserNotifications