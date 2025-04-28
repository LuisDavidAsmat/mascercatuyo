import ChatMain from './components/ChatMain'
import ChatSidebar from './components/ChatSidebar'
import UserMessagesHeader from './components/UserMessagesHeader'


const UserMessages = () => 
{
  return (
    <>
      <UserMessagesHeader />
      <main className='mt-4 flex border-[.09rem] rounded-xl'>
        <ChatSidebar />
        <ChatMain />
      </main>
    </>
  )
}

export default UserMessages