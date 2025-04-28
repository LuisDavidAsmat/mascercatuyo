import ChatUserItem from "./ChatUserItem"

const ChatSidebar: React.FC = () => 
{
  return (
    <div className="basis-4/12 border-r">
        <header className="my-4 px-4 flex justify-between items-center gap-2">
            <label htmlFor="default-search" className="text-gray-900 sr-only  ">Search</label>
            <div className="py-1 px-2 bg-white rounded-lg flex items-center gap-2 border">
                <input type="search" id="default-search" className='bg-white py-1 px-2 text-sm border-none outline-none rounded-md' placeholder='Buscar chat'/>
                
                <svg className="w-3 h-3 text-black stroke-2 dark:text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>L
                </svg>                
            </div>
            <button type="button">
            <svg className='w-5 h-5 cursor-pointer' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.75 13.5a3.251 3.251 0 0 1 3.163 2.498L21.25 16a.75.75 0 0 1 .102 1.493l-.102.007h-9.337a3.251 3.251 0 0 1-6.326 0H2.75a.75.75 0 0 1-.102-1.493L2.75 16h2.837a3.251 3.251 0 0 1 3.163-2.5Zm0 1.5a1.75 1.75 0 0 0-1.652 1.172l-.021.063-.039.148a1.756 1.756 0 0 0 .02.815l.04.13.025.069a1.75 1.75 0 0 0 3.28-.069l.04-.13-.018.06a1.75 1.75 0 0 0 .048-.815l-.03-.137-.02-.07-.047-.134A1.75 1.75 0 0 0 8.75 15Zm6.5-11a3.251 3.251 0 0 1 3.163 2.5h2.837a.75.75 0 0 1 .102 1.493L21.25 8h-2.837a3.251 3.251 0 0 1-6.326 0H2.75a.75.75 0 0 1-.102-1.493L2.75 6.5l9.337-.002A3.251 3.251 0 0 1 15.25 4Zm0 1.5a1.75 1.75 0 0 0-1.652 1.173l-.021.062-.038.148a1.757 1.757 0 0 0 .019.815l.04.13.025.069a1.75 1.75 0 0 0 3.28-.068l.04-.131-.018.06a1.75 1.75 0 0 0 .048-.815l-.03-.137-.02-.07-.047-.134A1.75 1.75 0 0 0 15.25 5.5Z"/></svg>
            </button>
        </header>
        <hr className='border-[.08rem]'/>
        <div className="my-4 px-4">
            <ul className='space-y-7'>
                <ChatUserItem 
                    name="User Surname" 
                    time="13:08 pm" 
                    message="Disculpe, podría posponer el servicio"
                    imageUrl="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
                <ChatUserItem 
                    name="User Surname" 
                    time="13:08 pm" 
                    message="Disculpe, podría posponer el servicio"
                    imageUrl="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
                <ChatUserItem 
                    name="User Surname" 
                    time="13:08 pm" 
                    message="Disculpe, podría posponer el servicio"
                    imageUrl="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
                
            </ul>
        </div>
    </div>
  )
}

export default ChatSidebar