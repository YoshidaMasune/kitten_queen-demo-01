import React from 'react';
import { blog } from '@/data/blogs';
import AsideBlog from './AsideBlog';

type Props = {
  blog?: blog;
};

function Blog({ blog }: Props) {
  return (
    <div className="mt-20 container mx-auto">
      <div className="flex">
        <section className="shrink-0 w-3/5 basis-auto">
          <article>
            <h2 className="text-sky-700 text-2xl">{blog?.head}</h2>
          </article>

          {/* blog contents */}
          <div className=" ml-6 leading-[2.5rem] text-slate-800 text-lg tracking-wider">
            {/* sub content */}
            <div className="indent-5">
              <p>{blog?.subtitle}</p>
            </div>

            {/* contents */}
            <div className="space-y-7 mt-10">
              {blog?.contents?.map((data) => {
                return <p className="indent-4">{data}</p>;
              })}
            </div>

            {/* content Blogs */}
            <div className="space-y-10">
              {blog?.contentBlogs?.map((data, index) => {
                return (
                  <div>
                    <p className="text-xl">{data.title}</p>
                    <p className="indent-10">{data.content}</p>
                  </div>
                );
              })}
            </div>

            {/* content List */}

            <div>
              {blog?.contentLists?.map((data) => {
                return (
                  <div>
                    <p className="text-lg">{data.title}</p>
                    <div className="ml-3 space-y-5 mt-2">
                      {data.content.map((data, index) => {
                        return (
                          <div>
                            <span>{index + 1}.</span>
                            <span className="ml-5">{data}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className=" basis-auto grow hidden mt-5 lg:block">
          <AsideBlog />
        </section>
      </div>
    </div>
  );
}

export default Blog;
