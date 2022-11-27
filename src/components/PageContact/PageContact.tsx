import { FC } from 'react'

import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer'
import { Seo } from 'src/components/Seo'

import { HeroBanner } from '../HeroBanner'
import Enquiry from './Enquiry'
import { EnquiryForm } from './EnquiryForm'

const PageContactPage: FC<{ t: any, locale: string }> = ({ t, locale }) => {
  return (
    <>
      <Seo />
      <Header textColor="brown" />
      <main className="flex flex-col text-arta-sand-100">
        <HeroBanner
          title={t.heroBanner.title}
          description={t.heroBanner.description}
          image={t.heroBanner.image}
          mobileImage={t.heroBanner.mobileImage}
        />
        <div className="overflow-hidden bg-arta-eggshell-100">
          <Enquiry t={t} />
        </div>
        <EnquiryForm />
      </main>
      <Footer textColor="brown" />
    </>
  )
}

export default PageContactPage
