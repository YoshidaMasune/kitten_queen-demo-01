import Layout from '@/components/Layout';
import React from 'react';
import { knowlage_list, knowlage } from '@/data/knowlage';
import KnowlageItem from '@/components/knowlage/KnowlageItem';
import AsideBlog from '@/components/blog/AsideBlog';

type Props = {};

function index({}: Props) {
  return (
    <Layout>
      <div className="w-4/5 sm:w-3/5 lg:w-3/5 md:w-3/4 px-4 mx-auto mt-10 mb-20">
        <div className="w-full lg:w-3/5 lg:mx-0 mx-auto border-b pb-10">
          <article className="lg:text-start text-center">
            <h2 className="text-lg lg:text-4xl tracking-wider">
              <span className="text-sky-500">เกร็ดความ</span>
              <span className="text-yellow-500">รู้ของน้องเเมว</span>
            </h2>
          </article>
        </div>
        <div className="flex ">
          <div className="lg:border-r lg:pr-5 shrink-0 basis-auto w-full lg:w-3/5 mt-10 lg:mt-20">
            <div className="grid  grid-cols-1 md:grid-cols-2  lg:gap-20 gap-10">
              {knowlage_list.map((knowlage, index) => (
                <KnowlageItem key={index} data={knowlage} />
              ))}
            </div>
          </div>
          <div className="basis-auto grow hidden mt-5 lg:block">
            <AsideBlog />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default index;
