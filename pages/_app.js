import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Nextjs Spotify</title>
        <link rel="icon" href="/spotify-icon.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
