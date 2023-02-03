import React, { useEffect, useState } from 'react';
import { cats, cat } from '@/data/cat_list';
import Link from 'next/link';
import HeadTitle from '@/components/HeadTitle';
import { FiChevronLeft, FiChevronRight, FiChevronsRight } from 'react-icons/fi';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

interface SlickCat {
  cat: cat;
  current: number;
  index: number;
}

const CatSlickItem = ({ cat, current, index }: SlickCat) => {
  const [focus, setFocus] = useState(true);

  useEffect(() => {
    if (current == index) {
      setFocus(true);
    } else {
      setFocus(false);
    }
  }, [current]);

  return (
    <div
      className={`w-full mx-auto flex flex-col shadow-md h-64 lg:h-[30rem] rounded-lg overflow-hidden ${
        focus ? 'scale-100' : 'scale-75'
      } ease-in duration-100`}
    >
      <div className="h-3/5  w-full overflow-hidden mx-auto">
        <img
          src={`${cat.img[0]}`}
          alt="cat"
          className="w-full hover:scale-125 ease-out duration-75 object-cover object-center"
        />
      </div>

      <article className="flex-1 flex flex-col mt-3 space-y-3 p-2">
        <h3 className="text-center text-md lg:text-2xl font-semibold text-sky-500">
          {cat.bleed.th}
        </h3>
        <p className="line-clamp-3 indent-10">{cat.derivation}</p>
        <button className="bg-sky-500 px-2 py-1 w-max self-end text-white rounded-lg hover:bg-yellow-500 ease-in-out duration-100">
          <Link href={`cats/${cat.id}`}>อ่านเพิ่มเติม</Link>
        </button>
      </article>
    </div>
  );
};

function CatSlider({}: Props) {
  const [sliderRef, setSliderRef] = useState<any>();
  const [current, setCurrent] = useState(0);

  const [sliderSettings, setSliderSettings] = useState({
    focusOnSelect: true,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrow: false,
    centerMode: true,
    afterChange: (current: any) => setCurrent(current),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // dots: true,
        },
      },
    ],
  });

  return (
    <div className="my-20 lg:container mx-auto">
      <div className="w-fit mx-auto">
        <HeadTitle th="10 อันดับสายพันธุ์เเมว" eng="10 bleeds cat" />
      </div>
      <div className="relative mt-20 mx-auto">
        <div className="">
          <Slider
            className="w-4/5 mx-auto"
            ref={setSliderRef}
            {...sliderSettings}
          >
            {cats.map((i, index) => {
              return (
                <CatSlickItem
                  cat={i}
                  current={current}
                  index={index}
                  key={index}
                />
              );
            })}
          </Slider>
        </div>
        {/* <button
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
        </button> */}
      </div>
    </div>
  );
}

export default CatSlider;
