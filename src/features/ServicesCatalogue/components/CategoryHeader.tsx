import React from 'react'
import { Link } from 'react-router';

interface CategoryHeaderProps {
    categoryLabel: string;
    resultsCounter: number;
  }
  
export const CategoryHeader: React.FC<CategoryHeaderProps> = ({ categoryLabel, resultsCounter }) => 
(
    <>
        <h1 className="text-center uppercase pt-8 font-bold text-2xl text-black dark:text-white">
            {categoryLabel}
        </h1>
        <h2 className="w-5/6 inline-flex bg-red-500 border-t bg-gradient-to-b from-gray-50 to-gray-50 py-2 px-2 text-left text-xl text-black">
            {resultsCounter} resultados
        </h2>
        <Link
        to="/"
        className=""
        >                
            <button type="button" className=" sticky top-[4.5rem] bg-orange-400  p-3 rounded-full">
                <svg className=" h-8 w-8 stroke-white stroke-2 bg-transparent cursor-pointer " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.391 4.262a1 1 0 0 0-1.46.035l-6.177 6.919a1 1 0 0 0-.254.666V19.5a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V16a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3.5a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7.591a1 1 0 0 0-.287-.7l-6.822-6.947Z"/></svg>
            </button>
        </Link>  
    
    </>
);

export default CategoryHeader