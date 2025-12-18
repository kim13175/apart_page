import { useState } from "react";
import { APART_IMAGE } from "../Constant/constant";

const ApartGallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className="w-full mx-auto">
            <div className="flex flex-wrap w-full items-center justify-center font-bold">
                {APART_IMAGE.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`p-2 md:p-4 transition-all duration-300 hover-effect text-xs sm:text-md md:text-lg
                        ${currentIndex === index 
                            ? 'text-amber-600 border-amber-600' 
                            : 'text-gray-600 hover:text-amber-500'
                        }`}
                    >
                        {image.alt.replace("구산 롯데 캐슬 ", "")}
                    </button>
                ))}
            </div>
            <div className="relative w-full overflow-hidden shadow-lg bg-gray-100">
                <img
                    src={APART_IMAGE[currentIndex].src}
                    alt={APART_IMAGE[currentIndex].alt}
                    className="w-full h-[400px] sm:h-[500px] md:h-[600px] object-fill transition-opacity duration-500 ease-in-out"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/60 p-6">
                    <p className="text-white text-sm font-bold">{APART_IMAGE[currentIndex].alt}</p>
                </div>
            </div>
        </div>
    )
}

export default ApartGallery