import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { APARTMENT_TITLE } from '../Constant/constant';

const ImageSlider = ({ 
  imageArray,
  autoPlay = false, 
  autoPlayInterval = 3000,
  showIndicators = true,
  className = ''
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? imageArray.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === imageArray.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(goToNext, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, currentIndex]);

  if (!imageArray || imageArray.length === 0) {
    return (
      <div className="flex items-center justify-center p-10 text-gray-400">
        이미지가 없습니다.
      </div>
    );
  }

  return (
    <div className={`relative w-full max-w-4xl select-none ${className}`}>
      <div className="relative w-full aspect-video overflow-hidden">
        <button 
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/20 hover:bg-black/80 text-white p-3 rounded-full transition-colors"
          onClick={goToPrevious}
          aria-label="이전 이미지"
        >
          <ChevronLeft />
        </button>

        <div className="w-full h-full flex items-center justify-center">
          <img 
            src={imageArray[currentIndex].src} 
            alt={`${APARTMENT_TITLE} imageArray[currentIndex].alt` || `${APARTMENT_TITLE} 슬라이드 ${currentIndex + 1}`}
            className="w-full h-full object-fill"
          />
        </div>
        <button 
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/20 hover:bg-black/80 text-white p-3 rounded-full transition-colors"
          onClick={goToNext}
          aria-label="다음 이미지"
        >
          <ChevronRight />
        </button>
        <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
          {currentIndex + 1} / {imageArray.length}
        </div>
      </div>

      {showIndicators && (
        <div className="flex justify-center gap-2 mt-4">
          {imageArray.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${
                index === currentIndex 
                  ? 'bg-gray-800' 
                  : 'bg-gray-300 hover:bg-gray-500'
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`${index + 1}번째 이미지로 이동`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageSlider;