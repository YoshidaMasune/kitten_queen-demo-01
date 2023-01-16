import React from 'react';
import { cats, cat } from '@/data/cats';
import Link from 'next/link';
import index from '@/pages/blogs';

type Props = {};

interface catItem {
  cat: cat;
  index: number;
}

// >>>>>>>>>> slide items cats <<<<<<<<<<

const CatItem = ({ cat, index }: catItem) => {
  return (
    <>
      <div className="lg:w-[20%] flex flex-col h-[24rem] min-w-[20%] rounded-lg overflow-hidden shadow-lg drop-shadow-lg">
        <Link
          href={`/cats/${cat.id}`}
          className="flex flex-auto overflow-hidden h-3/5  "
        >
          <img
            src={`cats/${cat.img[0]}`}
            alt=""
            className="object-cover object-right-top w-full"
          />
        </Link>

        <article className="flex-auto h-2/5 flex flex-col justify-between w-full mx-auto mt-8">
          <h2 className="text-center text-sky-500 text-lg">{cat.bleed.th}</h2>
          <p className="indent-3 line-clamp-2 text-gray-600 px-6">
            {cat.derivation}
          </p>
          <Link
            href={`/cats/${cat.id}`}
            className="self-end p-3 text-yellow-800"
          >
            อ่านเพิ่มเติม &#10095;&#10095;
          </Link>
        </article>
      </div>
    </>
  );
};

// >>>>>>>>>> slide items cats <<<<<<<<<< //

function CatSlider({}: Props) {
  return (
    <div className="">
      <div className="flex gap-3 overflow-auto">
        {cats.map((i, index) => (
          <CatItem key={index} cat={i} index={index} />
        ))}
      </div>
    </div>
  );
}

export default CatSlider;
