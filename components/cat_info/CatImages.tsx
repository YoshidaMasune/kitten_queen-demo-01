import React, { useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
type Props = {
  imgs?: string[];
};

function CatImages({ imgs }: Props) {
  const [sliderSettings, setSliderSettings] = useState({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrow: false,
  });
  return (
    <div className="relative">
      {/* main image */}
      <Slider {...sliderSettings} className="">
        {imgs?.map((img, index) => {
          return (
            <Image
              key={index}
              src={`${img}`}
              width={300}
              height={300}
              alt="cats"
              className="object-contain h-96 hover:scale-105 transition-transform esae-in duration-200"
            />
          );
        })}
      </Slider>
    </div>
  );
}

export default CatImages;
