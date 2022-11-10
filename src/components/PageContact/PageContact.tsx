import type { NextPage } from 'next'

import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer'
import { Seo } from 'src/components/Seo'

import { HeroBanner } from '../HeroBanner'
import Enquiry  from './Enquiry'


const cms = {
  heroBanner: {
    title: 'Contact Us',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    image: '/images/contact-us/banner.png',
    mobileImage: '/images/contact-us/mobile-banner.png',
  }
    
}


const PageContactPage: NextPage = () => {
  return (
    <>
      <Seo />
      <Header textColor="brown" />
      <main className="flex flex-col text-arta-sand-100">
        <HeroBanner
          title={cms.heroBanner.title}
          description={cms.heroBanner.description}
          image={cms.heroBanner.image}
          mobileImage={cms.heroBanner.mobileImage}
        />
         <div className='overflow-hidden bg-arta-eggshell-100'>
            <Enquiry/>
        </div>
      </main>
      <Footer textColor="brown" />
    </>
  )
}

export default PageContactPage
