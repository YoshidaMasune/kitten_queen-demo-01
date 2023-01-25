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
        <div>
          {/* head */}
          <div>
            <article>
              <h1>บทความ</h1>
              <h1>ที่เกี่ยวข้องกับเเมว</h1>
            </article>
          </div>

          {/* container */}

          <div className="flex flex-row  container mx-auto">
            {/* blogs conainer */}

            <section className="shrink-0 w-3/5 basis-auto">
              <div className="">
                {blogs.map((data, index) => (
                  <BlogItem key={index} blog={data} />
                ))}
              </div>
            </section>

            {/* aside content */}
            <section>
              <div className="basis-auto grow hidden mt-5 lg:block">
                <AsideBlog />
              </div>
            </section>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default index;
