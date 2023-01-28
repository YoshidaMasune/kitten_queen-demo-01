import { knowlage_list } from '@/data/knowlage';
import Link from 'next/link';
import React from 'react';

type Props = {};

function AsideBlog({}: Props) {
  return (
    <>
      <div className="sticky top-32 p-10 border-t w-fit ml-4 bg-white   ">
        <article>
          <p className="text-2xl">บทความน่าสนใจ</p>
        </article>
        <div className="grid grid-flow-row ml-4 divide-y gap-y-5 mt-4 ">
          {knowlage_list.map((data, index) => {
            if (index > 3) {
              return;
            }
            return (
              <Link key={data.id} href={`/knowlage/${data.id}`}>
                <p className="py-2">{data.head}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default AsideBlog;
