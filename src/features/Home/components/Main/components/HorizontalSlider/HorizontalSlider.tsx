import React, { useState } from 'react';
import './HorizontalSlider.css'; // Create this CSS file for styling

const HorizontalSlider: React.FC = () => 
{
    const [scrollPosition, setScrollPosition] = useState(0);

    //Original Image dimensions
    // const imageWidth = 7312;
    // const imageHeight = 442;

    // custom dimensions
    const imageWidth = 3000;
    const imageHeight = 200;


    // Container dimensions (adjust as needed)
    //   const containerWidth = 800;
    const containerWidth = 1000; // Width of the visible area
    const containerHeight = 145; 


  // Handle scroll left
  const handleScrollLeft = () => {
    setScrollPosition((prev) => Math.max(prev - 100, 0)); // Scroll left by 100px
  };

  // Handle scroll right
  const handleScrollRight = () => {
    setScrollPosition((prev) => Math.min(prev + 100, imageWidth - containerWidth)); // Scroll right by 100px
  };

  return (
     <section className='mt-14 px-24 py-12'>
      <div className={`slider-container w-80 sm:w-[30rem] lg:w-[62.5rem]`} style={{  height: containerHeight }}>
        <div
          className="image-container"
          style={{
            width: imageWidth,
            height: imageHeight,
            transform: `translateX(-${scrollPosition}px)`,
          }}
        >
          <img
            src="./img/horizontal-slide-categories.png" // Replace with your image path
            alt="Wide Image"
            style={{ width: imageWidth, height: imageHeight }}
          />
        </div>
        <button className="scroll-button left" onClick={handleScrollLeft}>
          &lt;
        </button>
        <button className="scroll-button right" onClick={handleScrollRight}>
          &gt;
        </button>
      </div>
    </section>
  );
};

export default HorizontalSlider;