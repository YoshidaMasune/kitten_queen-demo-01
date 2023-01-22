import Layout from '@/components/Layout';
import React from 'react';
import { knowlage_list, knowlage } from '@/data/knowlage';
import Knowlage from '@/components/knowlage/Knowlage';
import HeadTitle from '@/components/HeadTitle';
import KnowlageItem from '@/components/knowlage/KnowlageItem';

type Props = {};

function index({}: Props) {
  return (
    <Layout>
      <div className="container mx-auto my-20">
        <div className="w-3/5 border-b pb-10">
          <article>
            <h2 className="text-md lg:text-4xl tracking-wider">
              <span className="text-sky-500">เกร็ดความ</span>
              <span className="text-yellow-500">รู้ของน้องเเมว</span>
            </h2>
          </article>
        </div>
        <div className=" flex gap-20 mt-20">
          <div className=" shrink-0 basis-auto grid  grid-cols-2 w-3/5  gap-20 mt-20">
            {knowlage_list.map((knowlage, index) => (
              <KnowlageItem data={knowlage} />
            ))}
          </div>

          <div className="basis-auto grow ">
            <div className="sticky top-32 p-10 border-t">dfsdfsdafasd</div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default index;
