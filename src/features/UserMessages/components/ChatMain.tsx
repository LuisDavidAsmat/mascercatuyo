import React from 'react'
import UserCard from '../../UserNetwork/components/UserCard'
import ChatMessageBubble from './ChatMessageBubble'


const ChatMain: React.FC = () => 
{
  return (
    <div className="basis-8/12 ">
        <header className='p-4'>
            <UserCard 
                imageUrl={'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'} 
                username={'Emilia Ramirez'} 
                extraInfo={'emiram@outlook.com'} 
            />
        </header>
        <hr className='border-[.08rem] '/>
        <div className="bg-orange-50 h-min-screen">
            <ChatMessageBubble 
                type="start"
                sender="Emili"
                time="12:45"
                message="You were the Chosen One!"
                imageUrl="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                bubbleColor="bg-white"
            />
            
            <ChatMessageBubble
                type="end"
                sender="Anakin"
                time="12:46"
                message="I hate you!"
                imageUrl="https://images.pexels.com/photos/4126749/pexels-photo-4126749.jpeg"
                bubbleColor="bg-orange-100"
            />
        </div> 
    </div>
  )
}

export default ChatMain