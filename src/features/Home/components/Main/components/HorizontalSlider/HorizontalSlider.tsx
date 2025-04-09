import React, { useRef } from 'react'
import CategoryCard from './components/CategoryCard'
import './components/CategoryCard.css'



const HorizontalSlider: React.FC = () => 
{
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => 
  {
    if(carouselRef.current)
    {
      carouselRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };


  return (
    <section className='relative mt-14 px-4 py-12'>
      <button
        onClick={scrollLeft}
        className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-buttons p-2 rounded-full shadow-lg z-10'
      >
        <svg className='w-6 h-6 stroke-black' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 19l-7-7 7-7' />
        </svg>
      </button>

      <div className="carousel-container overflow-x-auto scroll-smooth " ref={carouselRef}>
        <CategoryCard />

      </div>
      
      <button
        onClick={scrollRight}
        className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-buttons p-2 rounded-full shadow-lg z-10'
      >
        <svg className='w-6 h-6 stroke-black' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7' />
        </svg>
      </button>
    </section>
  )
}

export default HorizontalSlider