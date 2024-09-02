import { FC } from 'react'
import { textClass } from '../Text'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import homepageJson from 'apidata/homepage-is.json'
import { ButtonAnimated } from '../ButtonAnimated'

const MSFInstitutionFile: FC<{}> = ({ }) => {
  const homeData = homepageJson
  const router = useRouter()

  return (
    <div id='securities-tm' className='text-arta-sand-100 person_lf'>
      <div className='h4-light-text pt-8'>
        {homeData.institution_1}
        <div className='small-text p-2'>
          <li>{homeData.institution_2}</li>
          <li>{homeData.institution_3}</li>
          <li>{homeData.institution_4}</li>
          <li>{homeData.institution_5}</li>
          <li>{homeData.institution_6}</li>
          <li>{homeData.institution_7}</li>
          <li>{homeData.institution_8}</li>
          <li>{homeData.institution_9}</li>
          <li>{homeData.institution_10}</li>
        </div>
      </div>
      <hr className='securities-hr'></hr>
      <div className='h4-light-text pt-4'>
        {homeData.institution_11}
        <div className='small-text p-2'>
          <li>{homeData.institution_12}</li>
          <li><button onClick={() => {
            router.push(`${homeData.institution_link_3}`)
          }}>{homeData.institution_13}</button></li>
          <li><button onClick={() => {
            router.push(`${homeData.institution_link_2}`)
          }}>{homeData.institution_14}</button></li>
          <li><button onClick={() => {
            router.push(`${homeData.institution_link_4}`)
          }}>{homeData.institution_15}</button></li>
          <li>{homeData.institution_16}</li>
        </div>
      </div>
      <hr className='securities-hr'></hr>
      <div className='h4-light-text pt-4 pb-4'>
        {homeData.institution_17}
        <div className='small-text p-2'>
          <li>
            <button onClick={() => {
              router.push(`${homeData.institution_link_1}`)
            }}>{homeData.institution_18}</button>
          </li>
        </div>
        <hr className='securities-hr'></hr>
        <ButtonAnimated
          as="a"
          href={`${homeData.institution_link_5}`}
          className="mt-4 border-arta-sand-100 text-arta-sand-100 small-text">
          {homeData.institution_19}
        </ButtonAnimated>
      </div>
    </div>
  )
}

export default MSFInstitutionFile
