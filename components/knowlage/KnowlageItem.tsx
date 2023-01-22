import React from 'react';
import { knowlage } from '@/data/knowlage';
import Link from 'next/link';

interface Props {
  data?: knowlage;
}

function KnowlageItem({ data }: Props) {
  return (
    <div className="rounded-lg  overflow-hidden shadow-lg hover:shadow-sky-300">
      <Link href={`/knowlage/${data?.id}`}>
        <div className="relative overflow-hidden">
          <div className="h-full ">
            <img
              src="/cats/persian/06.png"
              alt=""
              className="lg:h-64 h-32 object-cover object-center"
            />
          </div>
          <div className="absolute bottom-0 h-2/4 bg-yellow-100 bg-opacity-50 w-full backdrop-blur-sm">
            <article className="p-3">
              <h3 className="text-slate-800 text-sm lg:text-lg text-semibold line-clamp-2">
                {data?.head}
              </h3>
            </article>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default KnowlageItem;
