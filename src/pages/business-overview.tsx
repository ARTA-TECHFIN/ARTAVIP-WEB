import type { GetServerSideProps } from 'next'
import { useTranslation } from 'next-i18next'
import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer'
import { Seo } from 'src/components/Seo'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import { textClass } from 'src/components/Text'

const fetchCmsData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_GM_HOSTING_PATH}/api/cms/business-overviews`)
  const data = await res.json()
  return data
}


export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const cms = await fetchCmsData()

  return {
    props: {
      cms: cms.data.sort((a: any, b: any) => a.attributes.priority - b.attributes.priority),
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  }
}

const BussinessOverview = (props: { cms: any }) => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const { locale } = router
  const g = (pageData: any, keyWithoutLang: string) =>
    `${pageData.attributes[`${keyWithoutLang}_${locale}`]}`
  return (
    <>
      <Seo
        title={`${t('page_title.about_us')} | Arta TechFin`}
        description={t('page_description.about_us')}
        keywords={t('page_keywords.about_us')}
        ga="About Us"
      />
      <Header textColor="brown" />
      <img src='/images/about/white-2024-06-14-62049.png' alt="" className="object-cover w-full h-[152px]" />
      <div id="business-overview-bd" className='w-full max-h-max'>
        <div className='x-container max width business-overview-1'>
          <h1 className='business-overview-1-font'>{t('about_us.business_overview')}</h1>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-x-12 md:grid-cols-4 lg:grid-cols-3  place-items-center">
          {
            props.cms.map((j: any, i: any) => {
              return (
                <div className='col-span-8 md:col-span-1 flex items-center text-center flex-col p-4' key={i}>
                  <h6 className={`${textClass.h6}`}>{g(j, 'title')}</h6>
                  <p className={`${textClass.small_text}`}>{g(j, 'description')}</p>
                </div>
              )
            })
          }
        </div>
      </div>
      <img src='/images/about/white-2024-06-14-62049.png' alt="" className="object-cover w-full h-[50px]" />
      <Footer textColor="white" />
    </>
  )
}

export default BussinessOverview
