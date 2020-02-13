import Head from 'next/head'

interface Props {
  children?: never
  title: string
  description: string
}

const Heads: React.FC<Props> = ({ description, title }) => {
  return (
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <link rel="shortcut icon" href="/favicon.ico" />
      {/* SEO */}
      <title key="title">{title}</title>
      <meta name="description" content={description} />
      {/* open graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Pooya's Resume" />
      {/* <meta property="og:image" content={ogImgSrc} /> */}
      {/* twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <link rel="manifest" href="/manifest.json" />
    </Head>
  )
}

export default Heads
