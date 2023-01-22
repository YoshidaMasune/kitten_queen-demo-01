import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { knowlage, knowlage_list } from '@/data/knowlage';
import Head from 'next/head';
import Layout from '@/components/Layout';
import Loading from '@/components/Loading';
import Knowlage from '@/components/knowlage/Knowlage';

function Kid() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { kid } = router.query;
  const [knowlage, setKnowlage] = useState<knowlage>();

  useEffect(() => {
    setLoading(true);
    if (kid === undefined) {
      return;
    } else {
      knowlage_list.map((knowlage, index) => {
        if (knowlage.id === Number(kid)) {
          setKnowlage(knowlage);
        }
      });
    }
    setLoading(false);
  }, [kid]);

  return (
    <div>
      <Layout>
        <Head>
          <title>KQ</title>
        </Head>
        <div>{loading ? <Loading /> : <Knowlage data={knowlage} />}</div>
      </Layout>
    </div>
  );
}

export default Kid;
