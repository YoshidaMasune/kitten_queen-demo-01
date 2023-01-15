import React, { useEffect, useRef, useState } from 'react';
import SlideItem from './SlideItem';

interface Props {
  heads: Array<{ img: string; head: string; content: string }>;
}

interface dot {
  index: number;
  currentIndex: number;
  setCurrentIndex: (value: number | ((prev: number) => number)) => void;
}

// components children -----------

const Dot = ({ index, currentIndex, setCurrentIndex }: dot) => {
  const click = () => {
    setCurrentIndex(index);
  };

  return (
    <li
      onClick={click}
      className={`bg-sky-500  rounded-full cursor-pointer w-14 h-1 md:w-24
      ${index == currentIndex ? 'bg-yellow-400' : ''}`}
    ></li>
  );
};

// components children -----------

// >>>>>>>>>>>>>>> main component <<<<<<<<<<<< //

function Slideshow({ heads }: Props) {
  const slideBar: any = useRef();
  const [scroll, setScroll] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  /**
   *  slide btn start ---------------------------------------
   */

  const nextBtn = (e: any) => {
    if (currentIndex === heads.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prev) => (prev += 1));
    }
  };

  const prevBtn = (e: any) => {
    if (currentIndex <= 0) {
      setCurrentIndex(heads.length - 1);
    } else {
      setCurrentIndex((prev) => (prev -= 1));
    }
  };

  /**
   *  slide btn end -------------------------------------------
   */

  console.log(currentIndex);

  return (
    <div className="relative overflow-hidden h-[30vh] lg:h-[50vh]">
      {/* slide bar */}
      <div ref={slideBar} className="flex ">
        {heads.map((i, index) => (
          <SlideItem
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            index={index}
            key={index}
            img={i.img}
            content={i.content}
            head={i.head}
          />
        ))}
      </div>

      <button
        onClick={prevBtn}
        className="absolute left-0 top-[50%] -translate-y-[50%] h-full text-yellow-600 text-4xl"
      >
        &#10094;
      </button>

      <button
        onClick={nextBtn}
        className="absolute right-0 top-[50%] -translate-y-[50%] h-full text-yellow-600 text-4xl"
      >
        &#10095;
      </button>

      <ul className="absolute bottom-2 left-2/4 -translate-x-2/4 flex gap-4">
        {heads.map((i, index) => {
          return (
            <Dot
              key={index}
              index={index}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Slideshow;
