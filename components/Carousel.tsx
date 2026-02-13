import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(slideInterval);
  }, [currentIndex]); // Re-run effect when index changes to reset timer

  return (
    <div className="relative w-full h-full group">
      {/* Images */}
      <div className="w-full h-full rounded-xl overflow-hidden bg-slate-900 relative">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
             <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-indigo-500/10 z-10 pointer-events-none"></div>
      </div>

      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/40 transition-colors z-20">
        <ChevronLeftIcon onClick={prevSlide} className="size-6" />
      </div>

      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/40 transition-colors z-20">
        <ChevronRightIcon onClick={nextSlide} className="size-6" />
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
        {images.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`transition-all duration-300 cursor-pointer rounded-full ${
              currentIndex === slideIndex ? 'bg-white w-8' : 'bg-white/50 w-2 hover:bg-white/80'
            } h-2`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
