import React, { useEffect, useRef, useState } from 'react';
import SlideItem from './SlideItem';

interface Props {
  heads: Array<{img: string, head: string, content: string}>;
}

function Slideshow({ heads }: Props) {
  const slideBar: any = useRef();
  const [scroll, setScroll] = useState(0);

  console.log(scroll);

  const nextBtn = (e: any) => {
    const width: number = slideBar.current.clientWidth;

    console.log(scroll);
  };

  const prevBtn = (e: any) => {
    const width = slideBar.current.clientWidth;

    slideBar.current.style.transform = `translateX(${0}px)`;
  };

  return (
    //  slider bar *

    <div className="relative overflow-hidden h-[50vh]">
      {/* slide bar */}
      <div
        ref={slideBar}
        className="flex absolute transition-transform ease-in-out delay-200 duration-300"
      >
        {heads.map((i) => (
          <SlideItem img={i.img} content={i.content} head={i.head} />
        ))}
      </div>

      <button
        onClick={prevBtn}
        className="absolute left-0 top-[50%] -translate-y-[50%]"
      >
        prev
      </button>

      <button
        onClick={nextBtn}
        className="absolute right-0 top-[50%] -translate-y-[50%]"
      >
        next
      </button>
    </div>
  );
}

export default Slideshow;
