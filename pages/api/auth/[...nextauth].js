import NextAuth from 'next-auth'
import SpotifyProvider from 'next-auth/providers/spotify'
import spotifyApi, { LOGIN_URL } from '../../../lib/spotify'

async function refreshAccessToken(token) {
  try {
    spotifyApi.setAccessToken(token.accessToken)
    spotifyApi.setRefreshToken(token.refreshToken)

    const { body: refreshToken } = await spotifyApi.refreshAccessToken()
    console.log('REFRESH TOKEN IS', refreshToken)

    return {
      ...token,
      accessToken: refreshToken.access_token,
      accessTokenExpires: Date.now() + refreshToken.expires_in * 1000,
      refreshToken: refreshToken.refresh_token ?? token.refreshToken,
    }
  } catch (error) {
    console.log(error)

    return {
      ...token,
      error: 'Refresh token failed',
    }
  }
}

export default NextAuth({
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      authorization: LOGIN_URL,
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, account, user }) {
      // initial sign in
      if (account) {
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          username: account.providerAccountId,
          accessTokenExpires: account.expires_at * 1000,
        }
      }

      // return previous token if the access token not expired yet
      if (Date.now() < token.accessTokenExpires) {
        console.info('Access Token is Valid')
        return token
      }

      // Access token has expired, refresh it
      console.info('Access Token has expired, refreshing...')
      return await refreshAccessToken(token)
    },

    async session({ session, token }) {
      session.user.accessToken = token.accessToken
      session.user.refreshToken = token.refreshToken
      session.user.username = token.username

      return session
    },
  },
  secret: process.env.JWT_SECRET,
})
