import Link from 'next/link';
import React from 'react';

interface navLink {
  to: string;
  content: string;
}

const NavLink = ({ to, content }: navLink) => {
  return (
    <li>
      <Link href={to}>{content}</Link>
    </li>
  );
};

function Navbar() {
  return (
    <nav>
      <div className="">
        {/* top bar */}
        <section className="md:container px-4 mx-auto flex justify-between items-center">
          <div className="flex container mx-auto">
            <div className="flex">
              <img src="/logo/logo_cat.png" className="w-24" alt="" />
              <article className="self-center gap-2 hidden md:flex">
                <h1 className="text-4xl text-sky-500">kitten</h1>
                <h1 className="text-4xl text-yellow-500">queens</h1>
              </article>
            </div>
          </div>
          <div className="">
            <form className="flex items-center">
              <input
                type="text"
                className="focus:outline-none border p-2 rounded-lg"
                placeholder="search"
              />
              <span>
                <button>search</button>
              </span>
            </form>
          </div>
        </section>

        {/* navigation bar */}
        <section className="w-full bg-gray-200 py-4 ">
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
