import UserCard from '../../UserNetwork/components/UserCard'


const UserMessagesHeader = () => {
  return (
    <header className='flex items-center justify-end p-2 border rounded-md'>
      <div className="flex items-center gap-4">
        <UserCard 
          imageUrl={'https://images.pexels.com/photos/4126749/pexels-photo-4126749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} 
          username={'Emilia Ramirez'} 
          extraInfo={'emiram@outlook.com'} 
        />
        <button className="flex flex-col p-0 m-0 cursor-pointer" type='button'>
          <svg className={`h-3 w-3 stroke-black stroke-2 rotate-180
          dark:stroke-white
          `} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 9l-6 6-6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>      
            
          <svg className={`h-3 w-3 stroke-black stroke-2
          dark:stroke-white
          `} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 9l-6 6-6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>      
        </button>
        
      </div>
    </header>
  )
}

export default UserMessagesHeader;