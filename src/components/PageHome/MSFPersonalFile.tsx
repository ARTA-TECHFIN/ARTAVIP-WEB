import { FC } from 'react'
import { textClass } from '../Text'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import homepageJson from 'apidata/homepage.json'
import { ButtonAnimated } from '../ButtonAnimated'

const MSFPersonalFile: FC<{}> = ({ }) => {
  const homeData = homepageJson
  const router = useRouter()

  return (
    <div id='securities-tm' className='text-arta-sand-100 person_lf'>
      <div className='h4-light-text pt-8'>
        {homeData.person_1}
        <div className='small-text p-2'>
          <li>{homeData.person_2}</li>
          <li>{homeData.person_3}</li>
          <li>{homeData.person_4}</li>
        </div>
      </div>
      <hr className='securities-hr'></hr>
      {/* <div className='h4-light-text pt-4'>
        {homeData.person_5}
        <div className='small-text p-2'>
          <li><button onClick={() => {
            router.push(`${homeData.person_link_4}`)
          }}>{homeData.person_8}</button></li>
        </div>
      </div> */}
      <hr className='securities-hr'></hr>
      <div className='h4-light-text pt-4'>
        {homeData.person_9}
        <div className='small-text p-2'>
          <li><button onClick={() => {
            router.push(`${homeData.person_link_7}`)
          }}>{homeData.person_13}</button></li>
          <li><button onClick={() => {
            router.push(`${homeData.person_link_2}`)
          }}>{homeData.person_6}</button>
          <button onClick={() => {
            router.push(`${homeData.person_link_2_1}`)
          }}>{homeData.person_6_1}</button></li>
          {/* <li><button onClick={() => {
            router.push(`${homeData.person_link_3}`)
          }}>{homeData.person_7}</button></li>
          <li><button onClick={() => {
              router.push(`${homeData.person_link_1}`)
            }}>{homeData.person_10}</button>
          </li> */}
        </div>
        <hr className='securities-hr'></hr>
        <ButtonAnimated
          as="a"
          href={`${homeData.person_link_8}`}
          className="mt-4 border-arta-sand-100 text-arta-sand-100 small-text">
          {homeData.person_11}
        </ButtonAnimated>
      </div>
    </div>
  )
}
export default MSFPersonalFile
