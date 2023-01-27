import React, { useState } from 'react';
import { cats, cat } from '@/data/cat_list';
import Link from 'next/link';
import HeadTitle from '@/components/HeadTitle';
import { FiChevronLeft, FiChevronRight, FiChevronsRight } from 'react-icons/fi';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import './Slider.css';

type Props = {};

interface catItem {
  cat: cat;
  index: number;
}

// >>>>>>>>>> slide items cats <<<<<<<<<<

export const CatItem = ({ cat, index }: catItem) => {
  return (
    <div className="w-[200px] h-[250px] flex flex-col hover:z-10 rounded-lg overflow-hidden shadow-lg drop-shadow-lg">
      <Link
        href={`/cats/${cat.id}`}
        className="flex flex-auto overflow-hidden h-3/5  "
      >
        <img
          src={`${cat.img[0]}`}
          alt=""
          className="object-cover hover:scale-125 duration-200 object-right-top w-full"
        />
      </Link>

      <article className=" mt-4 flex-auto h-2/5 flex flex-col justify-between w-full mx-auto lg:mt-2">
        <h2 className="text-center text-sky-500 text-md ">{cat.bleed.th}</h2>
        <p className="indent-3 line-clamp-2 text-gray-600 px-6 text-sm">
          {cat.derivation}
        </p>
        <Link
          href={`/cats/${cat.id}`}
          className="self-end p-2 text-xs text-yellow-800 flex items-center hover:text-sky-600"
        >
          อ่านเพิ่มเติม <FiChevronsRight />
        </Link>
      </article>
    </div>
  );
};

// >>>>>>>>>> slide items cats <<<<<<<<<< //

function CatSlider({}: Props) {
  // create slider in nextjs with teranslateX  tailwind
  const [sliderRef, setSliderRef] = useState<any>();

  const [sliderSettings, setSliderSettings] = useState({
    dots: true,
    infinite: false,
    speed: 200,
    slidesToShow: 5,
    slidesToScroll: 5,
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

  // className="grid lg:w-2/4 w-full grid-flow-col auto-cols-max transition-transform duration-300 delay-100"

  return (
    <div className="my-20 lg:container mx-auto">
      <div className="w-fit mx-auto">
        <HeadTitle th="10 อันดับสายพันธุ์เเมว" eng="10 bleeds cat" />
      </div>
      <div className="relative w-3/4 mx-auto">
        <div className="mt-20 w-full ">
          <Slider
            className="p-5 shadow-inner"
            ref={setSliderRef}
            {...sliderSettings}
          >
            {cats.map((i, index) => (
              <CatItem key={index} cat={i} index={index} />
            ))}
          </Slider>
        </div>
        <button
          onClick={sliderRef?.slickPrev}
          className="opacity-20 hover:opacity-75  transition-opacity duration-300 z-20 absolute h-full  left-0 top-0"
        >
          <FiChevronLeft className="text-4xl text-sky-800" />
        </button>
        <button
          onClick={sliderRef?.slickNext}
          className="opacity-20 hover:opacity-75 transition-opacity duration-300 z-20 absolute h-full opacity-1 right-0 top-0 "
        >
          <FiChevronRight className="text-4xl text-yellow-900 " />
        </button>
      </div>
    </div>
  );
}

export default CatSlider;
