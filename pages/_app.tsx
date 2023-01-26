import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { Roboto, Kanit, Mali, Imprima } from '@next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: '500',
});

const kanit = Kanit({
  weight: ['300'],
  subsets: ['thai', 'latin'],
});

const mali = Mali({
  weight: ['400'],
  subsets: ['thai', 'latin'],
});

const imprima = Imprima({
  weight: ['400'],
  subsets: ['latin'],
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${kanit.className}`}>
      <Component {...pageProps} />
    </main>
  );
}
