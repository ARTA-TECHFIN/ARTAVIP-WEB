import { FC } from 'react'
import { textClass } from '../Text'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import homepageJson from 'apidata/homepage-is.json'
import { ButtonAnimated } from '../ButtonAnimated'

type propsT = {
  data: any
}

const LicensedFile: FC<propsT> = ({
  data,
}) => {
  const router = useRouter()
  const { locale } = router
  const g = (keyWithoutLang: string) => `${data.data.attributes[`${keyWithoutLang}_${locale}`]}`
  const file= data.data.attributes.li1
  const file2= data.data.attributes.li2
  const file3= data.data.attributes.li3
  const z = (pageData: any, keyWithoutLang: string) => `${pageData[`${keyWithoutLang}_${locale}`]}`

  return (
    <div id='securities-tm' className='text-arta-sand-100 person_lf'>
      <div className='h4-light-text pt-8'>
        {g('title_1')}
        <div className='small-text p-2'>
        <ul className='list-outside'>
        {file.map((j: any, i: any) => {
          var link= z(j,'link')
          if(link == '' || link == 'null'){
            return (
              // eslint-disable-next-line react/jsx-key
              <li className='whitespace-normal'>{z(j,'file_name')}</li>
          )
          }else{
            return (
              // eslint-disable-next-line react/jsx-key
              <li className='whitespace-normal'><button onClick={() => {
                router.push(`${z(j,'link')}`)
              }}>{z(j,'file_name')}</button></li>
          )
          }
         })}
         </ul>
        </div>
      </div>
      <hr className='securities-hr'></hr>
      <div className='h4-light-text pt-4'>
        {g('title_2')}
        <div className='small-text p-2'>
        <ul className='list-outside'>
        {file2.map((j: any, i: any) => {
          var link= z(j,'link')
          if(link == '' || link == 'null'){
            return (
              // eslint-disable-next-line react/jsx-key
              <li className='whitespace-normal'>{z(j,'file_name')}</li>
          )
          }else{
            return (
              // eslint-disable-next-line react/jsx-key
              <li className='whitespace-normal'><button onClick={() => {
                router.push(`${z(j,'link')}`)
              }}>{z(j,'file_name')}</button></li>
          )
          }
         })}
         </ul>
        </div>
      </div>
      <hr className='securities-hr'></hr>
      <div className='h4-light-text pt-4'>
        {g('title_3')}
        <div className='small-text p-2'>
        <ul className='list-outside'>
        {file3.map((j: any, i: any) => {
          var link= z(j,'link')
          if(link == '' || link == 'null'){
            return (
              // eslint-disable-next-line react/jsx-key
              <li className='whitespace-normal'>{z(j,'file_name')}</li>
          )
          }else{
            return (
              // eslint-disable-next-line react/jsx-key
              <li className='whitespace-normal'><button onClick={() => {
                router.push(`${z(j,'link')}`)
              }}>{z(j,'file_name')}</button></li>
          )
          }
         })}
         </ul>
        </div>
        <hr className='securities-hr'></hr>
        <ButtonAnimated
          as="a"
          href={`${g('button_link')}`}
          className="mt-4 border-arta-sand-100 text-arta-sand-100 small-text">
          {g('button')}
        </ButtonAnimated>
      </div>
    </div>
  )
}

export default LicensedFile
