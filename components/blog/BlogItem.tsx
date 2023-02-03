import { blog } from '@/data/blogs';
import Link from 'next/link';
import React from 'react';
import { BsChevronDoubleRight } from 'react-icons/bs';
type Props = {
  blog: blog;
};

function BlogItem({ blog }: Props) {
  return (
    <div className="border rounded-xl overflow-hidden">
      {/* <Link href={`/blogs/${blog.id}`}></Link>  */}
      <div className="flex h-full">
        <div className="border-r w-64">
          <img src="/cats/persian/05.png" alt="" className="object-center" />
        </div>
        <div className="w-4/5 flex justify-between flex-col p-3 ">
          <article className="">
            <Link href={`/blogs/${blog.id}`}>
              <h1 className="text-sky-600 hover:text-sky-500 text-xl leading-10 line-clamp-1">
                {blog.head}
              </h1>
            </Link>
            <p className="line-clamp-2 text-slate-700 indent-10">
              {blog.subtitle ? blog.subtitle : blog.contents}
            </p>
          </article>
          <Link
            href={`/blogs/${blog.id}`}
            className="self-end bg-sky-500 rounded-xl px-3 py-1 text-white hover:bg-yellow-500 duration-200"
          >
            <button className="flex items-center">
              อ่านเพิ่มเติม
              <BsChevronDoubleRight className="inline-block" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogItem;
