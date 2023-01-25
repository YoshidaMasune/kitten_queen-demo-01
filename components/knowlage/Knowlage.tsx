import { knowlage } from '@/data/knowlage';
import React from 'react';
import AsideBlog from '../blog/AsideBlog';

type Props = {
  data?: knowlage;
};

function Knowlage({ data }: Props) {
  return (
    <div className="mb-20">
      <div className="lg:container w-full mx-auto mt-20">
        <div className="flex">
          <div className="lg:w-3/5 w-full  ">
            <div>
              <article className="border-b pb-5">
                <h1 className="text-4xl text-yellow-700">{data?.head}</h1>
              </article>
            </div>
            <div className="border-r">
              <div>
                <article>
                  <p className="indent-5 text-slate-500 leading-[3rem] text-lg">
                    {data?.content}
                  </p>
                </article>
              </div>
              <div>
                <div className="border rounded-lg w-4/5 mx-auto overflow-hidden">
                  <img src={`/cats/USAshorthair/06.png`} alt="" />
                </div>
              </div>
            </div>
            <div className="w-fit self-end mt-10">
              <a
                className="text-blue-800 hover:text-red-500"
                href="https://google.com"
              >
                ที่มา www.google.com
              </a>
            </div>
          </div>
          <div className="basis-auto grow hidden mt-5 lg:block">
            <AsideBlog />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Knowlage;
