import React from 'react';

interface Props {
  img?: string;
  head?: string;
  info?: string;
  secondary?: boolean;
}

function CatContent({ head, img, info, secondary }: Props) {
  return (
    <div className="w-full lg:w-3/4 mx-auto ">
      <div
        className={`flex gap-5 ${
          secondary ? 'lg:flex-row-reverse' : 'lg:flex-row'
        } flex-col-reverse`}
      >
        <section className="w-full lg:w-2/4">
          <article className="lg:text-lg space-y-10 px-0 xl:px-32 pt-10">
            <h3 className="text-center font-bold lg:text-start">{head}</h3>
            <p className="leading-[3.5rem] pl-4">{info}</p>
          </article>
        </section>
        <section className="w-3/4 mx-auto lg:w-2/4 h-[555px] overflow-hidden rounded-lg">
          <img src={`${img}`} alt="" className="object-top-center" />
        </section>
      </div>
    </div>
  );
}

export default CatContent;
