import React, { useState } from 'react';
import { cats, cat } from '@/data/cat_list';
import Link from 'next/link';
import index from '@/pages/blogs';
import HeadTitle from '@/components/HeadTitle';

type Props = {};

interface catItem {
  cat: cat;
  index: number;
}

// >>>>>>>>>> slide items cats <<<<<<<<<<

const CatItem = ({ cat, index }: catItem) => {
  return (
    <div className="inline-block w-[200px] h-[250px] flex flex-col transtion-transform duration-300 relative hover:z-10 rounded-lg overflow-hidden shadow-lg drop-shadow-lg">
      <Link
        href={`/cats/${cat.id}`}
        className="flex flex-auto overflow-hidden h-3/5  "
      >
        <img
          src={`${cat.img[0]}`}
          alt=""
          className="object-cover object-right-top w-full"
        />
      </Link>

      <article className="flex-auto h-2/5 flex flex-col justify-between w-full mx-auto lg:mt-2">
        <h2 className="text-center text-sky-500 text-md ">{cat.bleed.th}</h2>
        <p className="indent-3 line-clamp-2 text-gray-600 px-6 text-sm">
          {cat.derivation}
        </p>
        <Link
          href={`/cats/${cat.id}`}
          className="self-end p-2 text-xs text-yellow-800 "
        >
          อ่านเพิ่มเติม &#10095;&#10095;
        </Link>
      </article>
    </div>
  );
};

// >>>>>>>>>> slide items cats <<<<<<<<<< //

function CatSlider({}: Props) {
  return (
    <div className="mt-20">
      <div>
        <HeadTitle th="10 อันดับสายพันธุ์เเมว" eng="10 bleeds cat" />
      </div>
      <div className="mt-20 w-3/4 mx-auto grid grid-flow-col gap-x-5 auto-cols-max p-10 overflow-auto">
        {cats.map((i, index) => (
          <CatItem key={index} cat={i} index={index} />
        ))}
      </div>
    </div>
  );
}

export default CatSlider;
