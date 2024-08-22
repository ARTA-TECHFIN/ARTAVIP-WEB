import { FC } from 'react'
import { textClass } from '../Text'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

const PageProductsSecuritiesUs: FC<{ k: any }> = ({ k }) => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const { locale } = router
  const g = (pageData: any, keyWithoutLang: string) => `${pageData[`${keyWithoutLang}_${locale}`]}`

  return (
    <div id='securities-tm'>
      {/* US Stock */}
      <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }} className={`${textClass.h6} py-5`}>{g(k.us, 'us_trade')}</h1>
      <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'left', backgroundColor: 'grey', width: '80%', position: "relative", left: '10%' }} className={`${textClass.title} h-10`}>{g(k.us, 'us_eastern_trade')}</h1>
      <div id="securities-trade-box">
        <hr className='securities-hr'></hr>
        <div className='wrap'>
          <div className={`left ${textClass.small_text}`}>{g(k.us, 'us_eastern_trade')}</div>
          <div className={`right ${textClass.small_text}`}>{g(k.us, 'us_eastern_trade_tm')}</div>
        </div>
      </div>
      <div style={{ paddingTop: '10px' }}></div>
      <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'left', backgroundColor: 'grey', width: '80%', position: "relative", left: '10%' }} className={`${textClass.title} h-10`}>{g(k.us, 'us_trade_hk')}</h1>
      <div id="securities-trade-box">
        <hr className='securities-hr'></hr>
        <div className='wrap'>
          <div className={`left ${textClass.small_text}`}>{g(k.us, 'us_trade_summer')}</div>
          <div className={`right ${textClass.small_text}`}>{g(k.us, 'us_trade_summer_tm')}</div>
        </div>
        <hr className='securities-hr'></hr>
        <div className='wrap'>
          <div className={`left ${textClass.small_text}`}>{g(k.us, 'us_trade_winter')}</div>
          <div className={`right ${textClass.small_text}`}>{g(k.us, 'us_trade_winter_tm')}</div>
        </div>
      </div>
      <div style={{ paddingTop: '30px' }}></div>
      <h1 style={{ width: '80%', position: "relative", left: '10%' , paddingBottom: '30px'}} className={`${textClass.small_text} h-10`} dangerouslySetInnerHTML={{ __html: g(k.us, 'us_trade_remark') }}></h1>

      <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' , paddingTop: '30px'}} className={`${textClass.h6} py-8`}>{t('products_info.us_trade_tips')}</h1>
      <div className={`${textClass.small_text}`} style={{ paddingLeft: '10%', alignItems: 'center', justifyContent: 'center', paddingTop: '30px', backgroundColor: 'white' ,paddingRight: '10%',}}
        dangerouslySetInnerHTML={{ __html: g(k.tip, 'tips') }}></div>
      <hr className='securities-gap-hr'></hr>
    </div>
  )
}

export default PageProductsSecuritiesUs
