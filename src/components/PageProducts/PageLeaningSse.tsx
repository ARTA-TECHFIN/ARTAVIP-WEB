import { FC } from 'react'
import { textClass } from '../Text'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

const PageLeaningSse: FC<{ k: any }> = ({ k }) => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const { locale } = router
  const g = (pageData: any, keyWithoutLang: string) => `${pageData.attributes[`${keyWithoutLang}_${locale}`]}`

  return (
    <div id='securities-tm' className='text-arta-sand-100'>
       <div style={{ alignItems: 'center', justifyContent: 'center', paddingTop: '30px', backgroundColor: 'white' }}
          dangerouslySetInnerHTML={{ __html: g(k, 'headline') }}></div>
        <div style={{ backgroundColor: 'white' }}>
          <table style={{ fontSize: '15px', paddingTop: '30px', backgroundColor: 'white', marginLeft: 'auto', marginRight: 'auto' }}
            dangerouslySetInnerHTML={{ __html: g(k, 'info') }}></table>
        </div>
    </div>
  )
}

export default PageLeaningSse
