import React from 'react'
import { UserListProps } from '../types/UserNetwork'
import UserCard from './UserCard'


const UserList: React.FC<UserListProps> = ({ title, count, users }) => {
  return (
    <div className="border border-gray-300 shadow-md rounded-lg p-4 space-y-4 w-full">
      <header className='flex justify-between items-center'>
        <h2 className='font-semibold text-lg'>{title}</h2>
        <span className='bg-buttons px-4 rounded-md'>{count}</span>
      </header>
      <hr />
      <ul className='space-y-4'>
        {users.map((user, index) => (
          <li key={index} className='hover:bg-neutral-100'>
            <UserCard {...user} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserList