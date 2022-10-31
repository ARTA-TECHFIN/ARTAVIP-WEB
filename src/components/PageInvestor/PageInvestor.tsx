import type { NextPage } from 'next'

import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer'
import { Seo } from 'src/components/Seo'
import { HeroBanner } from '../HeroBanner'


const cms = {
  heroBanner: {
    title: 'Investor Relataion',
    description: `Established in October 2021, ARTA TechFin Corporation Limited (“ARTA TechFin”) (0279.HK) is a Hong Kong-based financial services institution that aspires to enhance applications in finance through the use of technology (“Technology in Finance” or “TechFin”).`,
    image: '/images/investor-relations/banner.png',
    mobileImage: '/images/investor-relations/banner.png',
  },
}


const PageInvestorPage: NextPage = () => {
  return (
    <>
      <Seo />
      <Header textColor="brown" />
      <main className="flex flex-col">
        <HeroBanner
          title={cms.heroBanner.title}
          description={cms.heroBanner.description}
          image={cms.heroBanner.image}
          mobileImage={cms.heroBanner.mobileImage}
        />
      </main>
      <Footer textColor="brown" />
    </>
  )
}

export default PageInvestorPage
