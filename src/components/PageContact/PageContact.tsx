import { FC } from 'react'

import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer'
import { Seo } from 'src/components/Seo'

import { HeroBanner } from '../HeroBanner'
import Enquiry from './Enquiry'
import { EnquiryForm } from './EnquiryForm'

import { useTranslation } from 'next-i18next'

const PageContactPage: FC<{ k: any; locale: string }> = ({ k, locale }) => {
  const { t } = useTranslation('common')

  return (
    <>
      <Seo
        title={`${t('page_title.contact_us')} | Arta TechFin`}
        description={t('page_description.contact_us')}
        keywords={t('page_keywords.contact_us')}
        ga="Contact Us"
      />
      <Header textColor="white" />
      <main className="flex flex-col text-arta-sand-100">
        <HeroBanner
          title={t('page_title.contact_us')}
          description={k.heroBanner.description}
          image={k.heroBanner.image}
          mobileImage={k.heroBanner.mobileImage}
        />
        <div className="overflow-hidden bg-arta-eggshell-100">
          <Enquiry k={k} />
        </div>
        <EnquiryForm />
      </main>
      <Footer textColor="brown" />
    </>
  )
}

export default PageContactPage
