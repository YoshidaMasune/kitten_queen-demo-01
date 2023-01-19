import React from 'react';
import { cat, cats } from '@/data/cat_list';
import CatSlider from '../slider/catSlideer/CatSlider';
import CatContent from './CatContent';

type Props = {
  cat?: cat;
};

interface catContent {}

// comment for this

function Cat({ cat }: Props) {
  return (
    <div className="mt-24 space-y-64">
      {/* cat top */}
      <div className="">
        <article className="mx-auto text-center space-y-4 w-max ">
          <h1 className="text-4xl">{cat?.bleed.th}</h1>
          <h1 className="text-2xl">({cat?.bleed.eng})</h1>
        </article>

        <div className="mt-24">
          <section className="w-3/5  mx-auto">
            <div className="container mx-auto flex">
              <div className="w-3/5">
                <img src={`${cat?.img[0]}`} alt="" />
              </div>
              <div className="w-2/5 space-y-10">
                <section>
                  <article className="flex ">
                    <p className=" w-full">การเลี้ยงดู</p>
                    <p className="break-normal">
                      {cat?.husbandry}
                      {cat?.husbandry}
                    </p>
                  </article>
                </section>
                <section>
                  <article className="flex ">
                    <p className=" w-full">การเลี้ยงดู</p>
                    <p className="break-normal">
                      {cat?.husbandry}
                      {cat?.husbandry}
                    </p>
                  </article>
                </section>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* cat history */}

      <div className="bg-sky-200">
        <div className="w-3/4 mx-auto py-32 ">
          <article className="flex ">
            <p className="w-1/5 text-center">ความเป็นมา</p>
            <p className="w-3/4">{cat?.derivation}</p>
          </article>
        </div>
      </div>

      {/* cat information */}
      <div className="space-y-24">
        <CatContent
          img={cat?.general_nature.img}
          info={cat?.general_nature.info}
          head="ลักษณะทั่วไป"
        />
        <CatContent
          img={cat?.general_character.img}
          info={cat?.general_character.info}
          head="ลักษณะนิสัย"
          secondary={true}
        />
      </div>
      {/* cat slide */}

      <div>
        <CatSlider />
      </div>

      {/* create section */}
    </div>
  );
}

export default Cat;
