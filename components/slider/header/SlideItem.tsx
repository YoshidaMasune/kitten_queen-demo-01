import React, { useEffect, useState } from 'react';

interface itemSlide {
  img: string;
  head: string;
  content: string;
  index: number;
  currentIndex: number;
  setCurrentIndex: (value: number | ((prev: number) => number)) => void;
}

const SlideItem = (props: itemSlide) => {
  const [status, setStatus] = useState(false);

  useEffect(() => {
    setStatus(props.currentIndex === props.index ? true : false);
  }, [props.currentIndex]);

  let displayClass = ``;
  return (
    <>
      <div
        className={`flex opacity-animate ${
          status ? displayClass : ' hidden'
        } flex-1 min-w-[100vw] lg:bg-sky-100`}
      >
        <div
          style={{ backgroundImage: `url(${props.img})` }}
          className="flex-auto h-[30vh] lg:h-[50vh] w-2/6 md:w-4/6 bg-sky-100 bg-no-repeat bg-contain bg-center lg:bg-cover"
        ></div>
        <article className="flex-cols p-2 mt-3 w-4/6 md:w-2/6 px-10 lg:mt-10 lg:space-y-10">
          {/* head of content */}
          <h2 className="text-md lg:text-2xl font-bold">{props.head}</h2>

          {/* content */}
          <p className="line-clamp-3 mt-3 text-sm lg:text-xl">
            {props.content}
          </p>

          <button className="bg-sky-500 rounded-full mt-3 text-sm py-1 px-3 text-white lg:text-xl">
            อ่านต่อ
          </button>
        </article>
      </div>
    </>
  );
};

export default SlideItem;
