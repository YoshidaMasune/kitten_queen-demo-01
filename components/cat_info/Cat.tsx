import React from 'react';
import { cat, cats } from '@/data/cat_list';
import CatSlider from '../slider/catSlideer/CatSlider';

type Props = {
  cat?: cat;
};

interface catContent {
  img: string;
  head: string;
  info: string;
}

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
        <div className="container mx-auto py-32 ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            officiis architecto velit rem. Atque, obcaecati tempore quod totam
            assumenda maiores earum impedit recusandae deleniti, aut hic
            necessitatibus dolorum, facilis officia!
          </p>
        </div>
      </div>

      {/* cat slide */}

      <div>
        <CatSlider />
      </div>
    </div>
  );
}

export default Cat;
