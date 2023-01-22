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
        <div className="w-full border-b ">
          <HeadTitle th="เกรร็ดความรู้" />
        </div>
        <div className=" flex gap-20">
          <div className=" shrink-0 basis-auto grid  grid-cols-2 w-3/5  gap-10">
            {knowlage_list.map((knowlage, index) => (
              <KnowlageItem data={knowlage} />
            ))}
          </div>

          <div className="basis-auto grow ">
            <div className="sticky top-[10px]">dfsdfsdafasd</div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default index;
