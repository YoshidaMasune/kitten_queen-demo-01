import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

type Props = {
  children: any;
};

function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo/logo_cat.png" />
        <title>KQ</title>
      </Head>
      <div>
        <Navbar />
        <section>{children}</section>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
