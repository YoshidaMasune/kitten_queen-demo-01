import React, { useState } from 'react';
import YouTube from 'react-youtube';
import Slider from 'react-slick';
// type Props = {};

function VidioSlide() {
  const [sliderSettings, setSliderSettings] = useState({
    dots: true,
    infinite: false,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    arrow: false,
    responsive: [
      {
        breakpoint: 1524,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  });
  return (
    <div>
      <Slider {...sliderSettings} className="w-3/5 mx-auto"></Slider>
    </div>
  );
}

export default VidioSlide;
