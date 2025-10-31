'use client'

import { useState } from "react";
import ThumbnailGallery from "@/components/ThumbNailImg";
import Image1 from "@/public/images/jae-park-7GX5aICb5i4-unsplash.jpg";
import Image2 from "@/public/images/philcreates-pdALzg0yN-8-unsplash.jpg";
import Image3 from "@/public/images/zoe-gayah-jonker-13ky5Ycf0ts-unsplash.jpg";
import Image from "next/image";
import Button from "@/components/Button";

const GalleryWrapper = () => {
  const images = [Image1, Image2, Image3];

  const [currentBg, setCurrentBg] = useState(images[0]);

  return (
    <div className="max-h-screen text-white flex flex-col overflow-hidden">
      <Image
        src={currentBg}
        alt="Background"
        fill
        className="object-cover -z-10"
        priority
      />

      <div className="relative bg-black/10" />
      <div className="flex px-10 overflow-hidden justify-between mb-1">
        <div>
          Hiee
        </div>
        <div>
          Hello
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-15 h-18">
        <div className="flex px-10 overflow-hidden justify-between mb-1">
          <div>
            Full Profile
          </div>
          <div className="flex gap-4 ">
            <Button title={"Invite"} className=" group relative transition-all duration-300 hover:scale-105" />
            <Button title={"Like"} className=" group relative transition-all duration-300 hover:scale-105" />
          </div>
          <div className="flex flex-row">
            <span>Powered By: </span>
            Game
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="border-[0.2px] w-[90%] border-[#C0C0C6]"></div>
          <ThumbnailGallery
            images={images}
            currentBg={currentBg}
            onThumbnailClick={setCurrentBg}
          />
        </div>

      </div>
    </div>
  );
};

export default GalleryWrapper;
