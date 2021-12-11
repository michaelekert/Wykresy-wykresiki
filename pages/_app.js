import '../styles/globals.css'
import Layout from "../components/layout";
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {

  return(
      <Layout>
          <Head>
              <title>Wykresy i wykresiki</title>
          </Head>
        <Component {...pageProps} />
      </Layout>
  )
}


