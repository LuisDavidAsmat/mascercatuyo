import React from 'react'

type Props = {}

const Notifications = (props: Props) => {
  return (
    <button type="button" className=''>
        <svg className="w-6 h-6 fill-current text-black dark:text-white" xmlns="http://www.w3.org/2000/svg"><path d="M.766 8.28c0-1.667.37-3.197 1.112-4.588A10.158 10.158 0 0 1 4.865.229l1.175 1.6a8.088 8.088 0 0 0-2.387 2.775c-.592 1.117-.888 2.342-.888 3.675h-2Zm18 0c0-1.334-.296-2.56-.888-3.676a8.088 8.088 0 0 0-2.387-2.775l1.175-1.6c1.25.917 2.245 2.071 2.987 3.463.742 1.391 1.113 2.92 1.113 4.587h-2Zm-16 9v-2h2v-7c0-1.384.416-2.613 1.25-3.688.833-1.075 1.916-1.78 3.25-2.113v-.7c0-.416.145-.77.437-1.062a1.446 1.446 0 0 1 1.063-.438c.416 0 .77.146 1.062.438.292.291.438.646.438 1.062v.7c1.333.334 2.416 1.038 3.25 2.113.833 1.075 1.25 2.304 1.25 3.687v7h2v2h-16Zm8 3c-.55 0-1.021-.197-1.413-.588a1.926 1.926 0 0 1-.588-1.413h4c0 .55-.195 1.021-.587 1.413a1.926 1.926 0 0 1-1.413.587Zm-4-5h8v-7c0-1.1-.392-2.042-1.175-2.826-.784-.783-1.725-1.175-2.825-1.175s-2.042.392-2.825 1.175c-.784.784-1.175 1.725-1.175 2.825v7Z" /></svg>
    </button>
  )
}

export default Notifications