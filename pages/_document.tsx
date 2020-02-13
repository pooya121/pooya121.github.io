import Document, { Html, Head, Main, NextScript } from 'next/document'

interface Props {
  lang: string
  dir: string
}

class MyDocument extends Document<Props> {
  static async getInitialProps(ctx: any) {
    const store = ctx.store as import('@/store').Store
    const { dir, lang } = store.getState().locale
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps, lang, dir }
  }

  render() {
    const { lang, dir } = this.props
    return (
      <Html dir={dir} lang={lang}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
