import '../styles/globals.css';
import { StateContext } from '../context/StateContext';
import { Toaster } from 'react-hot-toast';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import Router from 'next/router';
import { useState } from 'react';
import Head from 'next/head';
import nProgress from 'nprogress';



function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false)
  Router.events.on("routeChangeStart", (url) => {
    nProgress.start();
    setLoading(true);
  });

  Router.events.on("routeChangeComplete", (url) => {
    nProgress.done();
    setLoading(false);
  })

  return (
    <>
    <Head>
    <title>Cara</title>
    `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==" crossOrigin="anonymous" referrerpolicy="no-referrer" />`
    </Head>
       <StateContext>
      <Toaster />
      <Navbar />
      <Component {...pageProps} />
      <Newsletter />
      <Footer />
    </StateContext>
    </>
  )
  
}

export default MyApp
