import React from 'react';

interface Props {
  img?: string;
  head?: string;
  info?: string;
  secondary?: boolean;
}

function CatContent({ head, img, info, secondary }: Props) {
  return (
    <div className="w-3/4 mx-auto h-[555px] overflow-y-hidden">
      <div className={`flex ${secondary ? 'flex-row-reverse' : 'flex-row'} `}>
        <section className="w-2/4">
          <article className="lg:text-lg space-y-10 px-32 pt-10">
            <h3>{head}</h3>
            <p className="leading-[3.5rem] pl-10">{info}</p>
          </article>
        </section>
        <section className="w-2/4">
          <img src={img} alt="" />
        </section>
      </div>
    </div>
  );
}

export default CatContent;
