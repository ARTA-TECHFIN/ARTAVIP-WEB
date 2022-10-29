import type { NextPage } from 'next'

import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer'
import { Seo } from 'src/components/Seo'
import { HeroBanner } from '../HeroBanner'
import { ModuleTextSection } from '../ModuleTextSection'
import { ModuleTextColList } from '../ModuleTextColList'

const cms = {
  heroBanner: {
    title: 'Asset Management',
    description: `We provide professional investment management and advisory primarily to institutional clients and family offices, allowing them to tap the flexibility and diversity of investment products and asset classes.`,
    image: '/images/asset-management/banner.jpg',
    label: 'Our Businesses',
  },
  section1: {
    title: 'Introduction',
    body: `Our Asset Management division provides professional investment management, advisory, and securities brokerage services primarily to institutional clients and family offices, allowing them to tap the flexibility and diversity of investment products and asset classes available in Hong Kong and international markets. Our goal is to generate optimal risk-adjusted investment returns, offer balanced asset and liability management (especially for insurance companies) and provide investment solutions customized for our valued clients’ unique needs and risk appetite. `,
    bgImage: '',
  },
  section2: {
    header: 'What is Asset Management',
    title: 'Title',
    list: [
      {
        title: 'Investment Advisor & Manager',
        body: `As a tech-enabled leading asset management house in Hong Kong, we leverage our unique position and ecosystem resources to provide tailor-made investment advisory and management services. Our extensive investment experience, exclusive access to certain investment opportunities and a global tech-driven and ESG-compliant mindset enable us to identify subtle market trends and intricate investment opportunities in today's fast-moving markets, demonstrating our competitive edges in servicing our institutional and family office clients.`,
      },
      {
        title: 'Fund of Funds (FoF)',
        body: `We collaborate with global financial institutions in setting up co-branded FoF products and services in Hong Kong for local and cross-border businesses and concentrate on creating value through asset allocation and fund/manager selection. The FoF methodology and system are mutually developed and endorsed by global financial institutions and us, both aiming for an international gold standard.`,
      },
    ],
  },
}

const PageBusinessesPage: NextPage = () => {
  return (
    <>
      <Seo />
      <Header textColor="brown" />
      <main className="flex flex-col bg-arta-page-background text-arta-sand-100">
        <HeroBanner
          title={cms.heroBanner.title}
          description={cms.heroBanner.description}
          image={cms.heroBanner.image}
          label={cms.heroBanner.label}
        />
        <ModuleTextSection
          title={cms.section1.title}
          description={cms.section1.body}
          bgImage={cms.section1.bgImage}
        />
        <ModuleTextColList
          header={cms.section2.header}
          title={cms.section2.title}
          list={cms.section2.list}
        />
      </main>
      <Footer textColor="brown" />
    </>
  )
}

export default PageBusinessesPage
