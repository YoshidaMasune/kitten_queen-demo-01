import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { cats, cat } from '@/data/cats';
import Layout from '@/components/Layout';
import Loading from '@/components/Loading';
import Cat from '@/components/cat_info/Cat';

type Props = {};

function Cid({}: Props) {
  const router = useRouter();
  const [cat, setCat] = useState<cat>();
  const { cid } = router.query;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (cid === undefined) {
      return;
    } else {
      cats.map((cat, index) => {
        if (cat.id === Number(cid)) {
          setCat(cat);
        }
      });
    }
    setLoading(false);
  }, [cid]);

  return (
    <>
      <Layout>
        <div>{loading ? <Loading /> : <Cat cat={cat} />}</div>
      </Layout>
    </>
  );
}

export default Cid;
