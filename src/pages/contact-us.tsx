import type { GetServerSideProps } from 'next'
import { useTranslation } from 'next-i18next'
import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer'
import { Seo } from 'src/components/Seo'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'

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
      title={`${t('page_title.contact_us')} | Arta TechFin`}
      description={t('page_description.contact_us')}
      keywords={t('page_keywords.contact_us')}
      ga="About Us"
    />
    <Header textColor="brown" />
    <img src='/images/about/white-2024-06-14-62049.png' alt="" className="object-cover w-full h-[152px]" />
    <div id="contact-bd">
            <div className='x-container max width contact-1'>
                <h1 >{t('page_title.contact_us')}</h1>
            </div>

    </div>
    <div style={{backgroundColor:'white'}}>
    <div style={{ display: 'flex', margin: '0 auto', width: '80%',backgroundColor:'white' }}>
      <div style={{width: '50%'}}>
         <form>
            <h1 >{t('contact_info.name')}</h1>
            <input id="name" name="name" height="30px" required className='contact-box-1-input'/>
            <h1 >{t('contact_info.maill_address')}</h1>
            <input id="name" name="name" height="30px" required className='contact-box-1-input'/>
            <h1 >{t('contact_info.topic')}</h1>
            <input id="name" name="name" required className='contact-box-1-input'/>
            <h1 >{t('contact_info.message')}</h1>
            <input id="name" name="name" required className='contact-box-1-max2'/>
         </form>
         <button className='contact-box-button'>Submit</button>
      </div>
      <div style={{width: '50%',paddingTop:'20px'}}>
          <iframe style={{border:'0'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.6422202815165!2d114.20490761001156!3d22.2915387796082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040142b4366419%3A0xf4c63e921ec2ba5b!2sK11%20ATELIER%20King's%20Road!5e0!3m2!1szh-TW!2shk!4v1679274411705!5m2!1szh-TW!2shk" width="100%" height="450" allowFullScreen></iframe>
          <div>
            <h1 className='font-weight-[bold]'>{t('contact_info.office_name')}</h1>
            <p className='text-[15px]'>{t('contact_info.office_address')}</p>
            <h1>{t('contact_info.hotline_text')}:</h1>
            <p className='text-[15px]'>{t('contact_info.hotline')}</p>
            <h1>{t('contact_info.email_text')}:</h1>
            <p className='text-[15px]'>{t('contact_info.mail')}</p>
            <h1>{t('contact_info.fax_text')}:</h1>
            <p className='text-[15px]'>{t('contact_info.fax')}</p>
          </div>
        </div> 
    </div>
    </div>

    {/* <div className="arta-about-clearfix x-column x-sm x-1-2">
       <div className='contact-box-1'>
         <div className=''>
            <h1 >{t('contact_info.name')}</h1>
            <input id="name" name="name" height="30px" required className='contact-box-1-input'/>
            <h1 >{t('contact_info.maill_address')}</h1>
            <input id="name" name="name" height="30px" required className='contact-box-1-input'/>
            <h1 >{t('contact_info.topic')}</h1>
            <input id="name" name="name" required className='contact-box-1-input'/>
            <h1 >{t('contact_info.message')}</h1>
            <input id="name" name="name" required className='contact-box-1-max2'/>
         </div>
         <button className='contact-box-button'>Submit</button>
        </div>
        <div className="contact-box">
          <iframe style={{border:'0'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.6422202815165!2d114.20490761001156!3d22.2915387796082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040142b4366419%3A0xf4c63e921ec2ba5b!2sK11%20ATELIER%20King's%20Road!5e0!3m2!1szh-TW!2shk!4v1679274411705!5m2!1szh-TW!2shk" width="600" height="450" allowFullScreen></iframe>
          <div>
            <h1 className='font-weight-[bold]'>{t('contact_info.office_name')}</h1>
            <p className='text-[15px]'>{t('contact_info.office_address')}</p>
            <h1>{t('contact_info.hotline_text')}:</h1>
            <p className='text-[15px]'>{t('contact_info.hotline')}</p>
            <h1>{t('contact_info.email_text')}:</h1>
            <p className='text-[15px]'>{t('contact_info.mail')}</p>
            <h1>{t('contact_info.fax_text')}:</h1>
            <p className='text-[15px]'>{t('contact_info.fax')}</p>
          </div>
        </div>
      </div> */}
    <img src='images/about/white-2024-06-14-62049.png' alt="" className="object-cover w-full h-[50px]" />
    <Footer textColor="white" />
    </>
  )
}

export default BussinessOverview
