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
        <link rel="icon" href="/logo/logo_cat.png" />
        <title>KQ</title>
      </Head>
      <div className="flex flex-col h-[100vh]">
        <div className=" flex-basis-auto">
          <Navbar />
        </div>
        <section className="grow shrink-0 flex-basis-auto">{children}</section>
        <div className="flex-basis-auto">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Layout;
