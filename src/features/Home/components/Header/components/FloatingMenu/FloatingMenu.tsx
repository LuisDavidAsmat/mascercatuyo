import React from 'react'
import { Link } from 'react-router';


interface MenuOption {
    text: string;
    link?: string;
    icon?: React.ReactNode;
    onClick?: () => void;
}

interface FloatinMenuProps 
{
    options: MenuOption[];
    background?: string;
    onClose?:() => void;
}

const FloatingMenu: React.FC<FloatinMenuProps> = ({ options, background = "bg-white", onClose }) => {

    return (
        <div 
        className={`absolute top-10 w-56 flex flex-col flex-start gap-4 rounded-md shadow-lg p-4 bg-white border 
        
        dark:border-neutral-500 dark:bg-neutral-600`}>
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
                option.link? (
                    <Link key={index} to={option.link} 
                    className=
                    {`flex items-center gap-3 p-2 w-full rounded-md  ${background} 
                    hover:bg-stone-300 transition-all duration-300 
                    focus:shadow-[inset_-1px_1px_5px_0px_rgba(7,7,7,0.75)] focus:bg-[#CDCFCF] focus:text-gray-500            
                    dark:bg-stone-500 dark:hover:bg-stone-400 dark:focus:bg-stone-400
                    `} 
                    onClick={option.onClick}
                    >
                        
                        {option.icon && <span className="">{option.icon}</span>}
                        {option.text}
                    </Link>
                ) : (
                    <button
                        key={index}
                        className={``}
                        onClick={option.onClick}
                    >
                        {option.icon && <span>{option.icon}</span>}
                        {option.text}
                    </button>
                )
                
            ))}
        </div>
    )
  
}

export default FloatingMenu