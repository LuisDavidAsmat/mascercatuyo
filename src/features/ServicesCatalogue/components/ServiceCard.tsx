import React, { useEffect, useState } from 'react'
import { categories } from '../../../config/constants';
import { Link } from 'react-router';
import ImgHolder from '../../../components/ImgHolder';
import apiClient from '../../../services/apiClient';


interface ServiceCardProps 
{
  service: 
  {
    id: number;
    category: string;
    description: string;
    city: string;
    state: string;
    userId: number;
  };
  currentCategory: string | undefined;
}

const fallbackImages = [
  'https://plus.unsplash.com/premium_photo-1664298059861-1560b39fb890?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D']


const ServiceCard: React.FC<ServiceCardProps> = ({ service, currentCategory }) => 
{
    const [userImages, setUserImages] = useState<string[]>([]);

  useEffect(() => 
    {
      console.log(service.userId);
      
      const fetchUserImages = async () => 
      {
        try 
        {
          const response = await apiClient.get<string[]>(`/user/img/urls`, 
          {
            params: {
              userId: service?.userId,
            }
          });
  
          setUserImages(response.data?.length > 0 ? response.data : fallbackImages);
        } 
        catch (error) {
          console.error('Error fetching user images:', error);
          setUserImages(fallbackImages); // Use fallback on error
          throw new Error("Unable to obtain user images.")
          
        }
      }
  
      fetchUserImages();
  
    }, [service?.userId])



  return (
    <div className="flex flex-col border rounded-md text-black dark:text-white dark:bg-stone-800 overflow-hidden shadow-sm hover:shadow-md transition-all h-full">
      
      {/* {userImages.map((image, index) => ( */}
        <ImgHolder 
          imgPath={userImages[0]} 
          // key={index}
          customClass='w-full aspect-video overflow-hidden'
        />

      {/* ))} */}

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