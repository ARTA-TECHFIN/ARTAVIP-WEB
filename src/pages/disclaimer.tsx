import { GetServerSideProps } from 'next'
import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer'
import { useRouter } from 'next/router'
import { ButtonAnimated } from 'src/components/ButtonAnimated'
import { Seo } from 'src/components/Seo'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

const fetchCmsData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_ARTAVIP_HOSTING_PATH}/api/cms/home-disclaimer`)
  const data = await res.json()
  return data
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const cms = await fetchCmsData()

  return {
    props: {
      cms: cms.data,
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  }
}

const Disclaimer = (props: { cms: any }) => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const { locale } = router
  const g = (pageData: any, keyWithoutLang: string) =>`${pageData.attributes[`${keyWithoutLang}_${locale}`]}`

  return (
    <>
      <Seo
        title={`Home | Arta VIP`}
        description=''
        keywords=''
        ga="Disclaimer"
      />
      <Header textColor="brown" />
      <img src='/images/about/white-2024-06-14-62049.png' alt="" className="object-cover w-full h-[152px]" />
      <div style={{backgroundColor:'white',padding:'3%'}} dangerouslySetInnerHTML={{ __html: g(props.cms, 'statement') }}></div>
      
      <img src='/images/about/white-2024-06-14-62049.png' alt="" className="object-cover w-full h-[200px]" />
      <Footer textColor="white" />
    </>
  )
}

export default Disclaimer
