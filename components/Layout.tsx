import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

type Props = {
  children: any;
};

function Layout({ children }: Props) {
  return (
    <div>
      <Navbar />
      <section>{children}</section>
      <Footer />
    </div>
  );
}

export default Layout;
