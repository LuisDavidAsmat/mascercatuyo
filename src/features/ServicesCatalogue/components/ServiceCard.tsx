import React from 'react'
import { categories } from '../../../config/constants';
import { Link } from 'react-router';


interface ServiceCardProps 
{
    service: {
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
    <div className="w-44 h-56 border rounded-md text-black dark:text-white dark:bg-stone-800">
        <figure className="h-36">
            <img
            src="https://media.istockphoto.com/id/1428071835/photo/man-an-electrical-technician-working-in-a-switchboard-with-fuses.jpg?s=1024x1024&w=is&k=20&c=siUQWIxuONfYjICMMHoeYIhzgpEf3ky8GJeKqnZa1BE="
            alt="Shoes"
            className="rounded-t-md w-full h-full " />
        </figure >
        <span className="block mt-1 p-1 uppercase text-xs sm:text-[0.5rem] text-left truncate">
            
            {categories.find(category => category.value === service.category)?.label || '' }
        </span>
        
        <h2 className="text-center px-1">
            <Link to={`/servicio/${currentCategory}/${service.id}`} className="mt-4 text-lg underline font-semibold sm:text-md"> {service.description} 
            </Link>
        </h2>
        <span className="text-md sm:text-xs">{service.city}, {service.state}</span>
    </div>
  )
}

export default ServiceCard