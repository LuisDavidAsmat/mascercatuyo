import React from 'react'
import { UserInfoForList } from '../types/UserNetwork'



const UserCard: React.FC<UserInfoForList> = ({ imageUrl, username, extraInfo }) => 
{    
  return (
    <div className="py-1 flex items-center gap-4 ">
      <div className="avatar">
        <div className="w-10 rounded-full">
          <img src={imageUrl} />
        </div>
      </div>
      <section className='text-sm'>
        <h4>{username}</h4>
        <span>{extraInfo}</span>
      </section>
    </div>
  )
}

export default UserCard