import type { NextPage } from 'next'

import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer'
import { Seo } from 'src/components/Seo'
import { HeroBanner } from '../HeroBanner'
import { ModuleTextColList } from '../ModuleTextColList'

const cms = {
  heroBanner: {
    title: 'Web3 Media',
    description: `We offer trading services on an all-in-one platform on various products as well as comprehensive risk management.`,
    image: '/images/asset-management/banner.png',
    mobileImage: '/images/asset-management/mobile-banner.png',
    label: 'Our Businesses',
  },
  section1: {
    headerPosition: 'left' as const,
    header: 'Artazine',
    title: '',
    list: [
      {
        title: 'What is Artazine',
        body: `
        <p>ARTAZINE is an online Editorial destination dedicated to bridging the gap between art, culture and Web3. Our exclusive, multiplatform stories and unique insights aim to explore the ways crypto, gaming, NFTs and the latest metaverse projects are empowering a global community of emerging creators. Standing at the intersection of art and technology, we are your authoritative guide to the future of cultural-commerce. </p>
        
        <ul>
          <li>Committed to curating the most relevant cultural news and features, finding the signal amongst the noise. </li>
          <li>Exclusive interviews with industry leaders, artists, collectors and creatives, both traditional and modern. </li>
          <li>Educational content that breaks down barriers, spreads knowledge and prepares readers for the future. </li>
          <li>Cutting-edge NFT and crypto market analysis to demystify the market and promote mainstream adoption. </li>
          <li>Connecting a global community of discerning individuals across multiple mediums, offering readers seamless access to our interactive, curated content. </li>
          <li>All-around Web3 insights, educational tools and exclusive knowledge to empower the next generation.</li>
        </ul>`,
      },
    ],
  },
}

const PageWeb3Media: NextPage = () => {
  return (
    <>
      <Seo />
      <Header textColor="brown" />
      <main className="flex flex-col bg-arta-page-background text-arta-sand-100">
        <HeroBanner
          title={cms.heroBanner.title}
          description={cms.heroBanner.description}
          image={cms.heroBanner.image}
          mobileImage={cms.heroBanner.mobileImage}
          label={cms.heroBanner.label}
        />
        <ModuleTextColList
          headerPosition={cms.section1.headerPosition}
          header={cms.section1.header}
          title={cms.section1.title}
          list={cms.section1.list}
        />
      </main>
      <Footer textColor="brown" />
    </>
  )
}

export default PageWeb3Media
