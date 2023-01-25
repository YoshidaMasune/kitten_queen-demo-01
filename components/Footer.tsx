import Link from 'next/link';
import React from 'react';
import SearchBar from './Searchbar';

type Props = {};

function Footer({}: Props) {
  return (
    <div className="pt-10 bg-sky-700">
      <footer className="h-64 flex w-3/4 mx-auto flex-col lg:justify-between lg:flex-row px-4">
        <section>
          <article>
            <p>เกี่ยวกับเรา</p>

            <ul className="ml-5">
              <li>test</li>
              <li>test</li>
              <li>test</li>
            </ul>
          </article>
        </section>
        <section>
          <article>
            <p>หมวดหมู่</p>
            <ul className="ml-5">
              <li>
                <Link href={'/'}>หน้าเเรก</Link>
              </li>
              <li>
                <Link href={'/blogs'}>บทความ</Link>
              </li>
              <li>
                <Link href={'/knowlage'}>เกร็ดความรู้</Link>
              </li>
              <li>
                <Link href={'/cats'}>10 สายพันธุ์เเมว</Link>
              </li>
            </ul>
          </article>
        </section>
        <section>
          <SearchBar />
        </section>
      </footer>
    </div>
  );
}

export default Footer;
