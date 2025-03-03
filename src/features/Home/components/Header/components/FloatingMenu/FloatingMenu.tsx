import React from 'react'
import { Link } from 'react-router';

type Props = {}

interface MenuOption {
    text: string;
    link: string;
    icon?: React.ReactNode;
}

interface FloatinMenuProps 
{
    options: MenuOption[];
    background?: string;
    onClose?:() => void;
}

const FloatingMenu: React.FC<FloatinMenuProps> = ({ options, background = "bg-white", onClose }) => {

    return (
        <div className={`absolute top-10 w-44 flex flex-col flex-start gap-4 rounded-md shadow-lg p-4 bg-white border dark:border-neutral-500 dark:bg-neutral-600`}>
            <button type='button' className="w-full flex justify-end ">
                <svg
                    className="h-5 w-5 stroke-black stroke-2 bg-transparent cursor-pointer fill-none dark:stroke-neutral-400 dark:hover:stroke-neutral-300"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={onClose} 
                >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m14.5 9.5-5 5m0-5 5 5" strokeLinecap="round" />
                </svg>
            </button>

            <hr className='border w-full'/>

            {options.map((option, index) => (
                <Link key={index} to={option.link} className={`py-2 w-full rounded-md text-sm ${background} dark:bg-stone-500`}  >
                    {option.icon && <span className="">{option.icon}</span>}
                    {option.text}
                </Link>
            ))}
        </div>
    )
  
}

export default FloatingMenu