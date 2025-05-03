import React, { useEffect, useState } from 'react';
import apiClient from '../services/apiClient';
import { useAuthStore } from '../stores/auth.store';


interface CarouselProps 
{
  userIdP?: number;
}

const Carousel: React.FC<CarouselProps> = ({userIdP}) => 
{
  const fallbackImages = [
    'https://plus.unsplash.com/premium_photo-1664298059861-1560b39fb890?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1663045495725-89f23b57cfc5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1661884973994-d7625e52631a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1664299069577-11579b487e6c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1661342406124-740ae7a0dd0e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [userImages, setUserImages] = useState<string[]>([]);
  const { userBasicInfo } = useAuthStore();

  useEffect(() => 
  {
    const fetchUserImages = async () => 
    {
      try 
      {
        const userId = userIdP ? userIdP : userBasicInfo?.userId;

        const response = await apiClient.get<string[]>(`/user/img/urls`, 
        {
          params: {
            userId: userId,
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

  }, [userBasicInfo?.userId])

  const goToSlide = (event: React.MouseEvent<HTMLButtonElement>,index: number) => 
  {
    event.preventDefault();
    setCurrentIndex(index);
  };

  return (
    <div className="relative sm:max-w-lg sm:mx-auto overflow-hidden rounded-lg shadow-lg">
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {userImages.map((image, index) => (
          <div key={index} className="sm:min-w-full w-full h-80 rounded-lg flex-shrink-0 border-2">
            <img
              src={image}
              alt={`Slide ${index}`}
              className="sm:w-full w-full h-full object-cover rounded-md"
              onError={(e) => {
                // Fallback to placeholder if image fails to load
                e.currentTarget.src = 'https://via.placeholder.com/800x400?text=Image+Not+Available';
              }}
            />
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 p-2 bg-white rounded-xl">
        {userImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-500 ${
              index === currentIndex ? 'bg-orange-500 h-3.5 w-3.5 ' : 'bg-orange-400 opacity-65'
            }`}
            onClick={(event) => goToSlide(event, index)}
          />
        ))}
      </div>
      
      {/* <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="sm:min-w-full w-full h-80 rounded-lg flex-shrink-0 border-2">
            <img
              src={image}
              alt={`Slide ${index}`}
              className="sm:w-full w-full h-full object-cover rounded-md"
            />
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 p-2 bg-white rounded-xl">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-500 ${
              index === currentIndex ? 'bg-orange-500 h-3.5 w-3.5 ' : 'bg-orange-400 opacity-65'
            }`}
            onClick={(event) => goToSlide(event, index)}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Carousel;