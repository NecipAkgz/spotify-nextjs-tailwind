/* eslint-disable @next/next/no-img-element */
import { getProviders, signIn } from 'next-auth/react'

function Login({ providers }) {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-black">
      <img
        className="mb-5 w-52"
        src="https://i.imgur.com/fPuEa9V.png"
        alt="spotify"
      />
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            className="rounded-xl bg-[#18D860] p-2 font-medium text-white"
            onClick={() => signIn(provider.id, { callbackUrl: '/' })}
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  )
}

export default Login

export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: {
      providers,
    },
  }
}
