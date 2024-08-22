import { FC } from 'react'
import { textClass } from '../Text'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

const PageProductsSecuritiesSs: FC<{ k: any }> = ({ k }) => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const { locale } = router
  const g = (pageData: any, keyWithoutLang: string) => `${pageData[`${keyWithoutLang}_${locale}`]}`

  return (
    <div id='securities-tm' className='text-arta-sand-100'>
      {/* SS Stock */}
      <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' , paddingTop: '50px'}} className="h6-text py-8">{t('products_info.ss_trade_tips')}</h1>
      <div className={`small-text ss-trade-tips-form`} style={{ alignItems: 'center', justifyContent: 'center', paddingTop: '20px', backgroundColor: 'white'}}
        dangerouslySetInnerHTML={{ __html: g(k.tip, 'tips') }}></div>
      <hr className='securities-gap-hr'></hr>
    </div>
  )
}

export default PageProductsSecuritiesSs
