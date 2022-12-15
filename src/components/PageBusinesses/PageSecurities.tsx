import React, { FC } from 'react'

import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer'
import { Seo } from 'src/components/Seo'
import { HeroBanner } from '../HeroBanner'
import { ModuleTextSection } from '../ModuleTextSection'
import { ModuleTextColList } from '../ModuleTextColList'
import { ModuleIconList } from '../ModuleIconList'
import BusinessPageModules from '../BusinessPageModules'
import { useTranslation } from 'next-i18next'

const cms = {
  heroBanner: {
    title: 'Securities Banking',
    description: `We offer trading services on an all-in-one platform on various products as well as comprehensive risk management.`,
    image: '/images/asset-management/banner.png',
    mobileImage: '/images/asset-management/mobile-banner.png',
    label: 'Our Businesses',
  },
  section1: {
    title: 'Trading',
    body: `Our Trading division provides trading platform services supporting different products which include stocks, futures, options, fixed income, funds, CFD, swap, structured products and virtual assets. Our clients include financial institutions, family offices, high-net-worth investors and retail investors. We also manage credit and market risk of clients’ and house positions.`,
    bgImage: '/images/asset-management/bg-introduction.png',
  },
  section2: {
    iconList: [
      {
        icon: '/images/asset-management/icons/1.png',
        title: 'Agency Services',
        body: `We offer a wide range of investment products in different markets for our clients to achieve their wealth management goals according to their risk profiles.  We also provide mobile and web applications for clients to keep track of investment performance and rebalance their different investment products in one platform.`,
      },
      {
        icon: '/images/asset-management/icons/2.png',
        title: 'Trading Services',
        body: `We provide flow wealth management products, including ELN, Accumulator/Decummulator and Range Accrual on single and baskets of various asset classes on different markets.  We will tailor-make products to satisfy the needs of sophisticated investors, including institutions and corporates. We also source liquidity and facilitate clients on fixed incomes and virtual assets trading.`,
      },
      {
        icon: '/images/asset-management/icons/3.png',
        title: 'Risk Management',
        body: `We are the first line of defence in managing credit and market risk exposure. We proactively manage our house positions and hedge dynamically to secure our sales margin and maintain our risk exposure within the limit.`,
      },
      {
        icon: '/images/asset-management/icons/1.png',
        title: 'Agency Services',
        body: `We offer a wide range of investment products in different markets for our clients to achieve their wealth management goals according to their risk profiles.  We also provide mobile and web applications for clients to keep track of investment performance and rebalance their different investment products in one platform.`,
      },
      {
        icon: '/images/asset-management/icons/1.png',
        title: 'Agency Services',
        body: `We offer a wide range of investment products in different markets for our clients to achieve their wealth management goals according to their risk profiles.  We also provide mobile and web applications for clients to keep track of investment performance and rebalance their different investment products in one platform.`,
      },
      {
        icon: '/images/asset-management/icons/1.png',
        title: 'Agency Services',
        body: `We offer a wide range of investment products in different markets for our clients to achieve their wealth management goals according to their risk profiles.  We also provide mobile and web applications for clients to keep track of investment performance and rebalance their different investment products in one platform.`,
      },
    ],
  },
  section3: {
    title: 'Prime Services',
    body: `Our Prime Services division offers fund managers, family offices and institutional asset managers tailored solutions, including trading & execution services, portfolio financing, capital introduction and more. Backed by innovative technology, experienced client services team, and comprehensive risk management, we aspire to provide clients with an all-in-one platform and a new experience in traditional prime finance.`,
    bgImage: '/images/asset-management/bg-introduction.png',
  },
  section4: {
    headerPosition: 'right' as const,
    header: 'Prime Services',
    title: 'Prime services title',
    list: [
      {
        title: 'Trading & Execution Services',
        body: `We provide trading services & facilities on a wide range of investment products, including global equities, fixed income, swaps/CFDs, F&O, FX, structured products & virtual assets. We offer clients the flexibility to place orders through our application, connecting to their OEMS, along with supporting bespoke orders reinforced by our 24/5 trading team and best execution practice. `,
      },
      {
        title: 'Portfolio Financing',
        body: `We provide our clients with short-locate and flexible financing solutions, supported by an easy-to-use platform, along with cross-assets margin capabilities. Our SBL & Risk team prides to manage inventories and our financing desk efficiently to enhance our clients’ capabilities to generate additional alpha in their portfolios.`,
      },
      {
        title: 'Capital Introduction',
        body: `With our extensive ecosystem and pedigree of family offices and investor networks, we invite our clients to leverage our network and events to present their products to potential investors. We leverage blockchain technology for our clients to digitalize fund data and showcase performances, strategies and market views to our community and potential investors in a controlled and diligent environment. `,
      },
    ],
  },
}

const PageSecurities: FC<{ k: any; locale: string }> = ({ k, locale }) => {
  const { t } = useTranslation('common')

  return (
    <>
      <Seo
        title={`${t('page_title.global_markets')} | Arta TechFin`}
        description={t('page_description.global_markets')}
        keywords={t('page_keywords.global_markets')}
        ga="OB - Securities Brokerage"
      />
      <Header textColor="white" />
      <main className="flex flex-col bg-arta-page-background text-arta-sand-100">
        <HeroBanner
          title={t('page_title.global_markets')}
          description={k.heroBanner.description}
          image={k.heroBanner.image}
          mobileImage={k.heroBanner.mobileImage}
          label={t('page_title.our_businesses')}
        />

        <BusinessPageModules locale={locale} components={k.components} />
      </main>
      <Footer textColor="brown" />
    </>
  )
}

export default PageSecurities
