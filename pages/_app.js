import { SessionProvider } from 'next-auth/react'
import Head from 'next/head'
import { RecoilRoot } from 'recoil'
import '../styles/globals.css'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <Head>
          <title>Nextjs Spotify</title>
          <link rel="icon" href="/spotify-icon.svg" />
        </Head>
        <Component {...pageProps} />
      </RecoilRoot>
    </SessionProvider>
  )
}

export default MyApp
