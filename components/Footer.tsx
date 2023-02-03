import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SearchBar from './Searchbar';

type Props = {};

function Footer({}: Props) {
  return (
    <div className="py-10 mt-20 bg-sky-700">
      <footer className="flex w-3/4 mx-auto flex-col lg:justify-between lg:flex-row px-4">
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
            <p className="text-lg text-white">หมวดหมู่</p>
            <ul className="ml-5">
              <li className="text-white hover:text-yellow-700">
                <Link href={'/'}>หน้าเเรก</Link>
              </li>
              <li className="text-white hover:text-yellow-700">
                <Link href={'/blogs'}>บทความ</Link>
              </li>
              <li className="text-white hover:text-yellow-700">
                <Link href={'/knowlage'}>เกร็ดความรู้</Link>
              </li>
              <li className="text-white hover:text-yellow-700">
                <Link href={'/cats'}>10 สายพันธุ์เเมว</Link>
              </li>
            </ul>
          </article>
        </section>
        <section className="space-y-3">
          <SearchBar />
          <Image
            src={`/logo/logo_cat.png`}
            width={500}
            height={500}
            className="h-32 w-auto"
            alt="cats"
          />
        </section>
      </footer>
    </div>
  );
}

export default Footer;
