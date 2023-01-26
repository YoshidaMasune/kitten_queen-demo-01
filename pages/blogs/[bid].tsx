import React, { useEffect, useState } from 'react';
import { blogs, blog } from '@/data/blogs';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import Loading from '@/components/Loading';
import Blog from '@/components/blog/Blog';

type Props = {};

function Bid({}: Props) {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<blog>();
  const { bid } = useRouter().query;

  useEffect(() => {
    setLoading(true);
    if (bid === undefined) {
      return;
    } else {
      blogs.map((data, index) => {
        if (data.id === Number(bid)) {
          setBlog(data);
        }
      });
      setLoading(false);
    }
  }, [bid]);

  console.log(bid);

  return (
    <>
      <Layout>{loading ? <Loading /> : <Blog blog={blog} />}</Layout>
    </>
  );
}

export default Bid;
