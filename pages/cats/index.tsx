import Layout from '@/components/Layout';
import React from 'react';
import { cats } from '@/data/cat_list';
import Head from 'next/head';
import { CatItem } from '@/components/slider/catSlideer/CatSlider';
import { knowlage_list } from '@/data/knowlage';

function index() {
  return (
    <div>
      <Head>
        <title>{}</title>
      </Head>
      <Layout>
        <div className="my-20 space-y-20">
          <section className="container mx-auto">
            <article className="text-md lg:text-4xl text-yellow-600 ">
              <span>10 สายพันธุ์เเมว </span>
              <span className="text-sky-600">ยอดนิยม</span>
            </article>
          </section>
          <section className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-20">
              {cats.map((cat, index) => {
                return (
                  <div
                    key={index}
                    className="relative mx-auto hover:scale-125 traisition-transform ease-in-out duration-300 "
                  >
                    <div className="z-20 absolute -top-3 -left-3 shadow-md p-2 rounded-full bg-sky-500 h-10 w-10">
                      <p className="text-white text-center hover:scale-150 transition-all duration-100 cursor-default">
                        {cat.id}
                      </p>
                    </div>
                    <div className="z-10">
                      <CatItem cat={cat} index={index} />
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="container mx-auto">
            <div className="grid grid-flow-row auto-cols-auto lg:grid-flow-col items-center justify-items-center gap-y-10">
              {knowlage_list.map((data, index) => {
                const length = knowlage_list.length;
                if (index >= length - 2) {
                  return (
                    <div className=" bg-yellow-200 rounded-lg p-4 w-4/5 ">
                      <article>
                        <h2 className="text-2xl text-sky-600 text-end">
                          {data.head}
                        </h2>
                        <p className="indent-5">{data.content}</p>
                      </article>
                    </div>
                  );
                }
              })}
            </div>
          </section>
        </div>
      </Layout>
    </div>
  );
}

export default index;
