import '../styles/globals.css'
import Head from 'next/head'
import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {

  return (
  <>
  <Head>
    <title>All 7z</title>
    <link rel="icon" href="/favicon.ico" />
       <meta name="viewport" content="initial-scale=1.0, width=device-width" />
       <meta name="description" content="All 7z: Music, Lifestyle, Merch" />
       <meta name="robots" content="index, follow"/>
       <meta property="og:title" content="All 7z: Music, Lifestyle, Merch"/>
       <meta property="og:site_name" content="All 7z Brand"/>
       <meta property="og:description" content="Explore the All 7z Brand. West Coast Music, Lifestyle, Merch"/>
       <meta property="twitter:title" content="All 7z: Music, Lifestyle, Merch"/>
       <meta property="twitter:description" content="Explore the All 7z Brand. West Coast Music, Lifestyle, Merch"/>
  </Head>
  <Layout>
      <Component {...pageProps} />
  </Layout>
  </>
  )
}

export default MyApp
