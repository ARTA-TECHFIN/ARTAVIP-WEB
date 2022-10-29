import type { NextPage } from 'next'

import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer'
import { Seo } from 'src/components/Seo'

const PageInvestorPage: NextPage = () => {
  return (
    <>
      <Seo />
      <Header textColor="brown" />
      <main className="flex flex-col"></main>
      <Footer textColor="brown" />
    </>
  )
}

export default PageInvestorPage
