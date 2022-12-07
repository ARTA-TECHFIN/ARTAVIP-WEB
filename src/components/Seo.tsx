import Head from 'next/head'

type propsT = {
  title?: string
  description?: string
  keywords?: string
}
const Seo = ({ title = 'ARTA WEB', description = 'Arta', keywords = '' }: propsT) => {
  return (
    <Head>
      <title>{title} | Arta TechFin</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export { Seo }
