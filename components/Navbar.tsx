import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import SearchBar from './Searchbar';

interface navLink {
  to: string;
  content: string;
}

const NavLink = ({ to, content }: navLink) => {
  // edit li when hover add bg-sky-300 in className

  const [hover, setHover] = React.useState(false);
  return (
    <li
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={` ${hover ? 'text-sky-600' : ''}`}
    >
      <Link href={to}>{content}</Link>
    </li>
  );
};

function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const isClient = typeof window === 'object';
  const windowRef = useRef(isClient ? window : null);

  useEffect(() => {
    if (!isClient) {
      return;
    }
    const handleScroll = () => {
      const currentScrollPos = windowRef.current.pageYOffset;
      const visible = prevScrollPos > currentScrollPos;
      setPrevScrollPos(currentScrollPos);
      setVisible(visible);
    };

    windowRef.current.addEventListener('scroll', handleScroll);
    return () => {
      windowRef.current.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, isClient]);

  return (
    <nav
      className={`bg-white sticky  ${
        visible ? 'top-0' : '-top-[200px]'
      } z-50 shadow-md transition-all duration-300`}
    >
      <div className="">
        {/* top bar */}
        <section className="md:container px-4 mx-auto flex justify-between items-center">
          <div className="flex container mx-auto">
            <div className="flex">
              <img src="/logo/logo_cat.png" className="w-[4rem]" alt="" />
              <article className="self-center gap-2 hidden md:flex">
                <h1 className="text-4xl text-sky-500">kitten</h1>
                <h1 className="text-4xl text-yellow-500">queens</h1>
              </article>
            </div>
          </div>
          <div className="">
            <SearchBar />
          </div>
        </section>

        {/* navigation bar */}
        <section className="w-full bg-slate-200 py-4 ">
          <ul className="flex gap-3 w-fit mx-auto">
            <NavLink to="/" content="หน้าเเรก" />
            <NavLink to="/cats" content="10 สายพันธุ์เเมว" />
            <NavLink to="/knowlage" content="เกร็ดความรู้" />
            <NavLink to="/blogs" content="บทความ" />
          </ul>
        </section>
      </div>
    </nav>
  );
}

export default Navbar;
