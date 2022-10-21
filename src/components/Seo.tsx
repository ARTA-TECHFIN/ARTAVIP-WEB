import Head from 'next/head'

type propsT = {
  title?: string
  description?: string
}
const Seo = ({ title = 'ARTA WEB', description = 'Arta' }: propsT) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export { Seo }
