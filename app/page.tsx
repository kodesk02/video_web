'use client'

import { useState } from "react";
import ThumbnailGallery from "@/components/ThumbNailImg";
import Image1 from "@/public/images/jae-park-7GX5aICb5i4-unsplash.jpg";
import Image2 from "@/public/images/philcreates-pdALzg0yN-8-unsplash.jpg";
import Image3 from "@/public/images/zoe-gayah-jonker-13ky5Ycf0ts-unsplash.jpg";
import Image, { StaticImageData } from "next/image";
import Button from "@/components/Button";
import FloatingLikeButton from "@/components/FloatingLikeButton";

const GalleryWrapper = () => {
  const CHAR_INFO = [
    {
      name: 'Cat 1',
      image: Image1
    },
    {
      name: 'Cat 2',
      image: Image2
    },
    {
      name: 'Cat 3',
      image: Image3
    },
  ]

  const [currentBg, setCurrentBg] = useState(CHAR_INFO[0].image);
  const [currentName, setCurrentName] = useState(CHAR_INFO[0].name)
  const [liked, setLiked] = useState(false)
  const toggleLike = () => setLiked((prev) => !prev);

  const handleThumbnailClick = (char: {
    name: string;
    image: StaticImageData;
  }) => {
    setCurrentBg(char.image)
    setCurrentName(char.name)
  }

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
      <div className="flex px-10 py-2 overflow-hidden justify-between mb-1">
        <div>
          Hiee
        </div>
        <div
          className="font-bold text-2xl"
        // className="bg-transparent rounded-full px-8 py-1 inset-shadow-sm inset-shadow-white"
        >
          {currentName}
        </div>
        <div>
          <FloatingLikeButton
            liked={liked}
            onToggle={toggleLike} />
        </div>
      </div>


      <div className="flex py-10 overflow-hidden justify-between mb-1">
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
            <Button title={liked ? 'Like' : 'Unlike'} className=" group relative transition-all duration-300 hover:scale-105" onClick={toggleLike}/>
          </div>
          <div className="flex flex-row">
            <span>Powered By: </span>
            Game
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="border-[0.2px] w-[90%] border-[#C0C0C6]"></div>
          <ThumbnailGallery
            images={CHAR_INFO.map((char) => char.image)}
            currentBg={currentBg}
            onThumbnailClick={(img) => {
              const selectedChar = CHAR_INFO.find((char) => char.image === img)
              if (selectedChar) handleThumbnailClick(selectedChar)
            }}
          />
        </div>

      </div>
    </div>
  );
};

export default GalleryWrapper;
