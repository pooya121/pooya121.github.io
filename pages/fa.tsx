import Home from '@/pages/home'
import faLocale from '@/locales/fa.json'
import faFonts from '@/styles/fa-fonts'

import { Fragment } from 'react'
import { Global } from '@emotion/core'

type Store = import('@/store').Store
interface PageContext {
  store: Store
}

const Page = () => (
  <Fragment>
    <Global styles={faFonts} />
    <Home />
  </Fragment>
)

Page.getInitialProps = async ({ store }: PageContext) => {
  store.dispatch({ type: 'SET_LOCALE', ...faLocale })
  return {}
}

export default Page
