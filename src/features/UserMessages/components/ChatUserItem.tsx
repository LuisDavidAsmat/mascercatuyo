import React from 'react'

interface ChatUserItemProps 
{
    name: string;
    time: string;
    message: string;
    imageUrl: string;
}

const ChatUserItem: React.FC<ChatUserItemProps> = ({ name, time, message, imageUrl }) => 
{
  return (
    <li className='flex items-center text-sm gap-2'>
      <div className="avatar">
        <div className="h-10 w-10 rounded-full">
          <img src={imageUrl} alt={name} />
        </div>
      </div>
      <section className='w-full px-1 flex flex-col justify-center'>
        <div className="w-full flex justify-between items-center">
          <span className='font-bold'>{name}</span>
          <span>{time}</span>
        </div>
        <div className="w-full flex justify-between items-center">
          <span className='w-40 truncate'>{message}</span>
          <span className='w-2 h-2 bg-amber-500 rounded-full'></span>
        </div>
      </section>
      
    </li>
  )
}

export default ChatUserItem