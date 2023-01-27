import React from 'react';
import { cat, cats } from '@/data/cat_list';
import CatSlider from '../slider/catSlideer/CatSlider';
import CatContent from './CatContent';

type Props = {
  cat?: cat;
};

// comment for this

function Cat({ cat }: Props) {
  return (
    <div className="mt-5 lg:mt-24 space-y-64">
      {/* cat top */}
      <div className="">
        <article className="mx-auto text-center space-y-4 w-max ">
          <h1 className="text-md md:text-4xl">{cat?.bleed.th}</h1>
          <h1 className="text-sm md:text-2xl">({cat?.bleed.eng})</h1>
        </article>

        <div className="mt-24">
          <section className="lg:w-3/5  w-full mx-auto">
            <div className="lg:container flex flex-col lg:flex-row mx-auto">
              <div className="w-3/4 mx-auto lg:w-2/4 lg:w-3/5 overflow-hidden rounded-lg">
                <img src={`${cat?.img[0]}`} alt="" className="w-full" />
              </div>
              <div className=" lg:w-2/5 container mx-auto px-5  space-y-20 lg:pl-10 mt-10 lg:mt-0">
                <section className="">
                  <article className="flex lg:flex-row lg:gap-5 flex-col">
                    <p className="lg:w-2/5 font-bold text-center lg:text-start ">
                      การเลี้ยงดู
                    </p>
                    <p className="lg:w-3/5 indent-5 lg:indent-0 lg:text-start break-normal">
                      {cat?.husbandry}
                    </p>
                  </article>
                </section>
                <section className="">
                  <article className="flex lg:flex-row lg:gap-5 flex-col">
                    <p className="lg:w-2/5 font-bold text-center lg:text-start ">
                      ราคา
                    </p>
                    <p className="lg:w-3/5 text-center lg:text-start break-normal">
                      {1000}
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
          <article className="flex flex-col ">
            <p className="lg:w-1/5 text-center">ความเป็นมา</p>
            <p className="lg:w-3/4 indent-5 lg:indent-0">{cat?.derivation}</p>
          </article>
        </div>
      </div>

      {/* cat information */}
      <div className="lg:space-y-[10rem] md:space-y-10">
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
