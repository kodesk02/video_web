import React from "react";
import Image, { StaticImageData } from 'next/image'
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { ScrollBar } from "./ui/scroll-area";

type ThumbnailGalleryProps = {
    images: StaticImageData[];
    currentBg: StaticImageData;
    onThumbnailClick: (image: StaticImageData) => void;
};

const ThumbnailGallery: React.FC<ThumbnailGalleryProps> = ({
    images,
    currentBg,
    onThumbnailClick,
}) => {
    return (
        <ScrollArea className="w-full overflow-x-auto">
        <div className="flex justify-center gap-3 mt-4 w-max mx-auto px-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => onThumbnailClick(image)}
              className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                currentBg === image
                  ? "border-blue-500 scale-105"
                  : "border-transparent hover:scale-105 hover:border-gray-300"
              }`}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      

    );
};

export default ThumbnailGallery;
