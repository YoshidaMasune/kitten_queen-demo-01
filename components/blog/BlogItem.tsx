import { blog } from '@/data/blogs';
import Link from 'next/link';
import React from 'react';

type Props = {
  blog: blog;
};

function BlogItem({ blog }: Props) {
  return (
    <div className="mt-10 h-32">
      <Link href={`/blogs/${blog.id}`}>
        <div>
          <div>
            <article>
              <h1>{blog.head}</h1>
              <p className="line-clamp-2 indent-10">{blog.subtitle}</p>
            </article>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default BlogItem;
