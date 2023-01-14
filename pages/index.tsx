import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import Layout from '@/components/Layout';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>kq</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo/logo_cat.png" />
      </Head>
      <main>
        <Layout>
          <Header />
          <div className="bg-gray-100">
            <section className="lg:container mx-auto py-24 px-24">
              <article className="w-fit mx-auto text-center">
                <h2 className="text-yellow-700 text-xl">do you know</h2>
                <h1 className="text-sky-600 text-4xl mt-5">รู้หรือไม่</h1>
              </article>

              {/* knowlage container */}
              <div className="flex flex-col gap-64 mt-20">
                {/* knowlage item */}
                <div className="flex flex-col md:flex-row gap-3">
                  <div className="flex-1">
                    <article>
                      <h2 className="text-2xl text-sky-900">
                        การแตะจมูกเป็นการทักทายอย่างหนึ่ง
                      </h2>
                      <p className="mt-5 leading-[4rem] ml-3">
                        เวลาที่เห็นแมวเอาจมูกมาแตะกันไม่ใช่เรื่องผิดปกติอะไร
                        เพราะอาการดังกล่าวเป็นแค่การทักทายแบบแมวทั่วไป
                        แต่อย่างไรพวกมันจะทักทายด้วยวิธีดังกล่าวกับแมวที่คุ้นเคยเท่านั้น
                        ในขณะเดียวกันก็เป็นวิธีที่การสื่อสารเพื่อเช็กข้อมูลว่า
                        อีกฝ่ายเป็นอย่างไรบ้างนั่นเอง
                      </p>
                    </article>
                  </div>
                  <div className="flex-1">
                    <img src="/logo/logo_cat.png" className="w-64" alt="" />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-3">
                  <div className="flex-1">
                    <img src="/logo/logo_cat.png" className="w-64" alt="" />
                  </div>
                  <div className="flex-1">
                    <article>
                      <h2 className="text-2xl text-sky-900">
                        การแตะจมูกเป็นการทักทายอย่างหนึ่ง
                      </h2>
                      <p className="mt-5 leading-[4rem] ml-3">
                        เวลาที่เห็นแมวเอาจมูกมาแตะกันไม่ใช่เรื่องผิดปกติอะไร
                        เพราะอาการดังกล่าวเป็นแค่การทักทายแบบแมวทั่วไป
                        แต่อย่างไรพวกมันจะทักทายด้วยวิธีดังกล่าวกับแมวที่คุ้นเคยเท่านั้น
                        ในขณะเดียวกันก็เป็นวิธีที่การสื่อสารเพื่อเช็กข้อมูลว่า
                        อีกฝ่ายเป็นอย่างไรบ้างนั่นเอง
                      </p>
                    </article>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Layout>
      </main>
    </>
  );
}
