import { FC } from 'react'

import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer'
import { Seo } from 'src/components/Seo'
import { useRouter } from 'next/router'
import parse from 'html-react-parser'
import { PageAboutCmsT } from 'src/pages/products/products-securities'
import { useTranslation } from 'next-i18next'

const PageProductsSecurities: FC<{ k: PageAboutCmsT; locale: string; u: any }> = ({ k,u }) => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const { locale } = router
  const g = (pageData: any, keyWithoutLang: string) =>`${pageData[`${keyWithoutLang}_${locale}`]}`

  return (
    <>
      <Seo
        title={`${t('page_title.securities')} | Arta TechFin`}
        description={t('page_title.securities')}
        keywords={t('page_title.securities')}
        ga="Securities"
      />
      <Header textColor="brown" />
      <img src='/images/about/white-2024-06-14-62049.png' alt="" className="object-cover w-full h-[152px]" />
      <div id="securities-bd">
            <div className='x-container max width contact-1'>
                <h1 >{t('page_title.securities')}</h1>
            </div>
      </div>
      <div id="securities-bd-text">
          <h1 style={{ fontSize: '25px' ,display:'flex', alignItems:'center', justifyContent:'center',paddingBottom:'50px'}}>{k.description}</h1>
          <hr className='securities-hr'></hr>
          <h1 style={{ fontSize: '35px' ,display:'flex', alignItems:'center', justifyContent:'center',paddingTop:'30px',paddingBottom:'30px',fontWeight:'bold',color:'black'}}>{k.priority}</h1>
          
            {
              k.avg.map((j:any, i:any) => {
                return (
                    <div className="securities-box"  key={i}>
                      <h1 className='text-[35px] text-black'>{g(j, 'title')}</h1>
                      <p className='text-[15px]'>{g(j, 'description')}</p>
                      <img src={j.adv_icon_url} alt="" className='mx-auto' />
                    </div>
                )
              })
            }
         <div style={{ fontSize: '25px' , alignItems:'center', justifyContent:'center',paddingTop:'30px'}} dangerouslySetInnerHTML={{__html: k.link}}></div>
      </div>
      
      <div id='securities-tm'>
        <h1 style={{ fontSize: '25px' ,display:'flex', alignItems:'center', justifyContent:'center',paddingTop:'50px',paddingBottom:'30px',fontWeight:'bold'}}>{g(u, 'trade')}</h1>
        <p style={{ fontSize: '15px' ,display:'flex', alignItems:'center', justifyContent:'center'}}>{g(u, 'trade_1')}</p>
        <h1 style={{ fontSize: '25px' ,display:'flex', alignItems:'center', justifyContent:'left',backgroundColor:'grey',height:'60px',width:'80%',position:"relative",left:'10%'}}>{g(u, 'trade_2')}</h1>
        <div id="securities-trade-box">
          <hr className='securities-hr'></hr>
          <div className='wrap'>
              <div className='left'>{g(u, 'trade_3')}</div>
              <div className='right'>{g(u, 'trade_4')}</div>
          </div>
          <hr className='securities-hr'></hr>
          <div className='wrap'>
              <div className='left'>{g(u, 'trade_5')}</div>
              <div className='right'>{g(u, 'trade_6')}</div>
          </div>
        </div>
        <div style={{paddingTop:'10px'}}></div>
        <h1 style={{ fontSize: '25px' ,display:'flex', alignItems:'center', justifyContent:'left',backgroundColor:'grey',height:'60px',width:'80%',position:"relative",left:'10%'}}>{g(u, 'trade_7')}</h1>
        <div id="securities-trade-box">
          <hr className='securities-hr'></hr>
          <div className='wrap'>
              <div className='left'>{g(u, 'trade_8')}</div>
              <div className='right'>{g(u, 'trade_9')}</div>
          </div>
          <hr className='securities-hr'></hr>
          <div className='wrap'>
              <div className='left'>{g(u, 'trade_10')}</div>
              <div className='right'>{g(u, 'trade_11')}</div>
          </div>
          <div className='wrap'>
              <div className='left'>{g(u, 'trade_12')}</div>
              <div className='right'>{g(u, 'trade_13')}</div>
          </div>
        </div>
        <h1 style={{ fontSize: '15px' ,display:'flex', alignItems:'center', justifyContent:'left',backgroundColor:'white',height:'60px',width:'80%',position:"relative",left:'10%'}}>{g(u, 'trade_14')}</h1>
        <hr className='securities-gap-hr'></hr>

        {/* US Stock */}
        <h1 style={{ fontSize: '25px' ,display:'flex', alignItems:'center', justifyContent:'center',paddingTop:'50px',paddingBottom:'30px',fontWeight:'bold'}}>{g(u, 'trade_15')}</h1>
        <h1 style={{ fontSize: '25px' ,display:'flex', alignItems:'center', justifyContent:'left',backgroundColor:'grey',height:'60px',width:'80%',position:"relative",left:'10%'}}>{g(u, 'trade_16')}</h1>
        <div id="securities-trade-box">
          <hr className='securities-hr'></hr>
          <div className='wrap'>
              <div className='left'>{g(u, 'trade_16')}</div>
              <div className='right'>{g(u, 'trade_17')}</div>
          </div>
        </div>
        <div style={{paddingTop:'10px'}}></div>
        <h1 style={{ fontSize: '25px' ,display:'flex', alignItems:'center', justifyContent:'left',backgroundColor:'grey',height:'60px',width:'80%',position:"relative",left:'10%'}}>{g(u, 'trade_18')}</h1>
        <div id="securities-trade-box">
          <hr className='securities-hr'></hr>
          <div className='wrap'>
              <div className='left'>{g(u, 'trade_19')}</div>
              <div className='right'>{g(u, 'trade_20')}</div>
          </div>
          <hr className='securities-hr'></hr>
          <div className='wrap'>
              <div className='left'>{g(u, 'trade_21')}</div>
              <div className='right'>{g(u, 'trade_22')}</div>
          </div>
        </div>
        <div style={{paddingTop:'30px'}}></div>
        <h1 style={{ fontSize: '15px' ,display:'flex', alignItems:'center', justifyContent:'left',backgroundColor:'white',height:'60px',width:'80%',position:"relative",left:'10%'}} dangerouslySetInnerHTML={{__html: g(u, 'trade_23')}}></h1>

      </div>


      <img src='/images/about/white-2024-06-14-62049.png' alt="" className="object-cover w-full h-[90px]" />
      <Footer textColor="white" />
    </>
  )
}

export default PageProductsSecurities
