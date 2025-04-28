import React from 'react'

interface ChatMessageBubbleProps 
{
    type: "start" | "end";
    sender: string;
    time: string;
    message: string;
    imageUrl: string;
    bubbleColor: string;
}

const ChatMessageBubble: React.FC<ChatMessageBubbleProps> = ({ type, sender, time, message, imageUrl, bubbleColor }) => 
{

  return (    
    <div className={`chat p-4 ${type === 'start' ? 'chat-start' : 'chat-end'}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={imageUrl} alt={sender} />
        </div>
      </div>
      <div className="chat-header">
        {sender}
        <time className="text-xs opacity-50">{time}</time>
      </div>
      <div className={`chat-bubble ${bubbleColor} text-black`}>
        {message}
      </div>
      <div className="chat-footer opacity-50">{type === 'start' ? 'Delivered' : `Seen at ${time}`}</div>
    </div>
    
  )
}

export default ChatMessageBubble