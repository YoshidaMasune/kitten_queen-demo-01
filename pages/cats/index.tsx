import Layout from '@/components/Layout';
import React from 'react';
import { cats } from '@/data/cat_list';
import Head from 'next/head';

function index() {
  return (
    <div>
      <Head>
        <title>{}</title>
      </Head>
      <Layout>
        <div></div>
      </Layout>
    </div>
  );
}

export default index;
