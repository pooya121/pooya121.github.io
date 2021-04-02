import { useEffect } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import '@/styles/globals.scss'

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  const { pathname } = useRouter()
  const lang = pathname.startsWith('/de') ? 'de' : 'en'
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])
  return <Component {...pageProps} />
}

export default App
