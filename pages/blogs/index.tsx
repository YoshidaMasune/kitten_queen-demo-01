import HeadTitle from '@/components/HeadTitle';
import Layout from '@/components/Layout';
import BlogItem from '@/components/blog/BlogItem';
import { blogs } from '@/data/blogs';
import React from 'react';
import AsideBlog from '@/components/blog/AsideBlog';

type Props = {};

function index({}: Props) {
  return (
    <>
      <Layout>
        <div className="mb-20">
          {/* head */}
          <div className="container mx-auto mt-20">
            <article className="text-4xl space-y-5 tracking-wider">
              <h1 className="text-sky-600">บทความ</h1>
              <h1 className="text-yellow-800">ที่เกี่ยวข้องกับเเมว</h1>
            </article>
          </div>

          {/* container */}

          <div className="flex flex-row w-full lg:w-3/5 mx-auto">
            {/* blogs conainer */}

            <section className="shrink-0 w-full lg:w-3/5 basis-auto mt-20">
              <div className="grid grid-flow-row auto-rows-[10rem] gap-y-5">
                {blogs.map((data, index) => (
                  <BlogItem key={index} blog={data} />
                ))}
              </div>
            </section>

            {/* aside content */}
            <section className="basis-auto grow hidden mt-5 lg:block">
              <AsideBlog />
            </section>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default index;
