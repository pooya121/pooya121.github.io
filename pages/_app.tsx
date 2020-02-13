import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import App, { AppProps } from 'next/app'

import ThemeProvidor from '@/components/theme-providor'
import GlobalStyles from '@/components/global-styles'
import { getDefaultTheme } from '@/store/theme/themes'
import { Store, makeStore } from '@/store'

// basic styles
import '@/styles/sass/index.sass'

interface Props extends AppProps {
  store: Store
}

class CustomApp extends App<Props> {
  static async getInitialProps({ Component, ctx, store }: any) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
    return { pageProps, store }
  }
  componentDidMount() {
    const store = this.props.store
    const initState = store.getState()
    let lastDir = initState.locale.dir
    let lastLang = initState.locale.lang
    store.dispatch({ type: 'SET_THEME', ...getDefaultTheme() })
    store.subscribe(() => {
      const {
        locale: { lang, dir }
      } = store.getState()
      if (lastDir !== dir) {
        window.document.documentElement.dir = dir
        lastDir = dir
      }
      if (lastLang !== lang) {
        window.document.documentElement.lang = lang
        lastLang = lang
      }
    })
  }

  render() {
    const { Component, pageProps, store } = this.props
    return (
      <Provider store={store}>
        <ThemeProvidor>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvidor>
      </Provider>
    )
  }
}

/** @todo type check later */
export default withRedux(makeStore as any)(CustomApp)
