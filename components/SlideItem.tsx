import React from 'react';

interface itemSlide {
  img: string;
  head: string;
  content: string;
}

/**
 *
 * @param props =
 *    {img: 'slids/[filename].png',
 *     head: sting
 *     content: string
 *    }
 * @returns
 *
 * jsx.element
 *
 */

const SlideItem = (props: itemSlide) => {
  return (
    <div className="flex flex-1 min-w-[100vw]">
      <div
        style={{ backgroundImage: `url(${props.img})` }}
        className="flex-auto h-[50vh] w-4/6 bg-sky-300  bg-no-repeat bg-cover bg-center"
      ></div>
      <article className=" flex-auto text-center mt-20 space-y-5 w-2/6 px-10">
        {/* head of content */}
        <h2 className="">{props.head}</h2>

        {/* content */}
        <p className="line-clamp-3 px-10">{props.content}</p>

        <button className="p-3 bg-sky-400 rounded-full ">อ่านต่อ</button>
      </article>
    </div>
  );
};

export default SlideItem;
