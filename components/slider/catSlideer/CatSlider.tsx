import React, { useEffect, useState } from 'react';
import { cats, cat } from '@/data/cat_list';
import Link from 'next/link';
import HeadTitle from '@/components/HeadTitle';
import { FiChevronLeft, FiChevronRight, FiChevronsRight } from 'react-icons/fi';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import index from '@/pages/blogs';
import Image from 'next/image';
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

interface SlickCat {
  data: cat;
  current: number;
  index: number;
}

const CatSlickItem = ({ data, current, index }: SlickCat) => {
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
      className={`w-96 mx-auto shadow-md h-[30rem] rounded-lg overflow-hidden ${
        focus ? 'scale-75' : 'scale-50'
      } ease-in duration-100  `}
    >
      <div className=" mx-auto">
        <img src={`${data.img[0]}`} alt="cat" className="w-full" />
      </div>
    </div>
  );
};

function CatSlider({}: Props) {
  const [sliderRef, setSliderRef] = useState<any>();
  const [current, setCurrent] = useState(0);

  const [sliderSettings, setSliderSettings] = useState({
    focusOnSelect: true,
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrow: false,
    centerMode: true,
    afterChange: (current: any) => setCurrent(current),
  });

  return (
    <div className="my-20 lg:container mx-auto">
      <div className="w-fit mx-auto">
        <HeadTitle th="10 อันดับสายพันธุ์เเมว" eng="10 bleeds cat" />
      </div>
      <div className="relative mx-auto">
        <div className="h-auto ">
          <Slider className="" ref={setSliderRef} {...sliderSettings}>
            {cats.map((i, index) => {
              return (
                <CatSlickItem
                  data={i}
                  current={current}
                  index={index}
                  key={index}
                />
              );
            })}
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
