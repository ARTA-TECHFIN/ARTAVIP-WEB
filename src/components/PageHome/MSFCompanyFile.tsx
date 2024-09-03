import { FC } from 'react'
import { textClass } from '../Text'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import homepageJson from 'apidata/homepage-cf.json'
import { ButtonAnimated } from '../ButtonAnimated'

const MSFCompanyFile: FC<{}> = ({ }) => {
  const homeData = homepageJson
  const router = useRouter()

  return (
    <div id='securities-tm' className='text-arta-sand-100 person_lf'>
      <div className='h4-light-text pt-8'>
        {homeData.company_1}
        <div className='small-text p-2'>
          <li>{homeData.company_2}</li>
          <li>{homeData.company_3}</li>
          <li>{homeData.company_4}</li>
          <li>{homeData.company_5}</li>
          <li>{homeData.company_6}</li>
          <li>{homeData.company_7}</li>
          <li>{homeData.company_8}</li>
          <li>{homeData.company_10}</li>
          <li>{homeData.company_11}</li>
          <li><button onClick={() => {
            router.push(`${homeData.company_link_8}`)
          }}>{homeData.company_12}</button></li>
          <li>{homeData.company_13}</li>
          <li>{homeData.company_14}</li>
          <li>{homeData.company_15}</li>
          <li>{homeData.company_16}</li>
          <li>{homeData.company_17}</li>
        </div>
      </div>
      <hr className='securities-hr'></hr>
      <div className='h4-light-text pt-4'>
        {homeData.company_18}
        <div className='small-text p-2'>
          <li><button onClick={() => {
            router.push(`${homeData.company_link_5}`)
          }}>{homeData.company_22}</button></li>
        </div>
      </div>
      <hr className='securities-hr'></hr>
      <div className='h4-light-text pt-4'>
        {homeData.company_23}
        <div className='small-text p-2'>
          <li><button onClick={() => {
            router.push(`${homeData.company_link_2}`)
          }}>{homeData.company_19}</button></li>
          <li><button onClick={() => {
            router.push(`${homeData.company_link_3}`)
          }}>{homeData.company_20}</button></li>
          <li><button onClick={() => {
            router.push(`${homeData.company_link_4}`)
          }}>{homeData.company_21}</button></li>
          <li><button onClick={() => {
              router.push(`${homeData.company_link_1}`)
            }}>{homeData.company_24}</button>
          </li>
          <li><button onClick={() => {
            router.push(`${homeData.company_link_6}`)
          }}>{homeData.company_26}</button></li>
        </div>
        <hr className='securities-hr'></hr>
        <ButtonAnimated
          as="a"
          href={`${homeData.company_link_9}`}
          className="mt-4 border-arta-sand-100 text-arta-sand-100 small-text">
          {homeData.company_25}
        </ButtonAnimated>
      </div>
    </div>
  )
}

export default MSFCompanyFile
