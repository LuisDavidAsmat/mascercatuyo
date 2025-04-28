import React from 'react'

interface NotificationItemProps 
{
    imageUrl: string;
    text: string;
    time: string;
}

const NotificationItem: React.FC<NotificationItemProps> = ({ imageUrl, text, time }) => {
  return (
    <div className="flex items-center gap-2">
        <div className="avatar">
            <div className="w-10 rounded-lg">
            <img src={imageUrl}/>
            </div>
        </div>
        <div className="flex flex-col">
            <span className=' text-sm'>{text}</span>
            <time  className=" text-sm opacity-50">{time}</time>
        </div>
    </div>  
  )
}

export default NotificationItem