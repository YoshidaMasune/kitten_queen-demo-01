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
      <div className="flex flex-col ">
        {/* <div className=" sticky top-0 z-30 w-full basis-auto"> */}
        <Navbar />
        {/* </div> */}
        <section className="grow shrink-0 min-h-[70vh] basis-auto">
          {children}
        </section>
        <div className="basis-auto ">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Layout;
