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
    appendDots: (dots: any) => <ul>{dots}</ul>,
    dotsClass: 'grid grid-flow-col w-2/5 mx-auto gap-x-6 ',
    customPaging: (i: number) => (
      <div className="rounded-lg overflow-hidden">
        <Image
          src={`${imgs![i]}`}
          width={100}
          height={100}
          alt="cats"
          className="object-cover w-full object-center"
        />
      </div>
    ),
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
