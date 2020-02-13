import { Fragment } from 'react'

import { Global } from '@emotion/core'

import Home from '@/pages/home'
import enLocale from '@/locales/en.json'
import enFonts from '@/styles/en-fonts'

type Store = import('@/store').Store
interface PageContext {
  store: Store
}

const Page = () => (
  <Fragment>
    <Global styles={enFonts} />
    <Home />
  </Fragment>
)

Page.getInitialProps = async ({ store }: PageContext) => {
  store.dispatch({ type: 'SET_LOCALE', ...enLocale })
  return {}
}

export default Page
