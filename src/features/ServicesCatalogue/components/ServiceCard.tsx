import React from 'react'
import { categories } from '../../../config/constants';
import { Link } from 'react-router';
import ImgHolder from '../../../components/ImgHolder';


interface ServiceCardProps 
{
  service: 
  {
    id: number;
    category: string;
    description: string;
    city: string;
    state: string;
  };
  currentCategory: string | undefined;
}


const ServiceCard: React.FC<ServiceCardProps> = ({ service, currentCategory }) => 
{
  return (
    <div className="flex flex-col border rounded-md text-black dark:text-white dark:bg-stone-800 overflow-hidden shadow-sm hover:shadow-md transition-all h-full">
      <ImgHolder 
        imgPath={'https://media.istockphoto.com/id/1428071835/photo/man-an-electrical-technician-working-in-a-switchboard-with-fuses.jpg?s=1024x1024&w=is&k=20&c=siUQWIxuONfYjICMMHoeYIhzgpEf3ky8GJeKqnZa1BE='} 
        customClass='w-full aspect-video overflow-hidden'
      />

      <div className="flex flex-col p-3 flex-1">
        <span className="block text-xs sm:text-[0.5rem] text-left uppercase truncate mb-1 text-gray-500 dark:text-gray-400">
          {categories.find(category => category.value === service.category)?.label || ''}
        </span>

        <h2 className="text-center mb-2">
          <Link
            to={`/servicio/${currentCategory}/${service.id}`}
            className="text-lg font-semibold underline sm:text-md line-clamp-2"
          >
            {service.description}
          </Link>
        </h2>

        <div className="mt-auto text-center text-sm sm:text-xs text-gray-600 dark:text-gray-300">
          {service.city}, {service.state}
        </div>
      </div>
    </div>
  )
}

export default ServiceCard