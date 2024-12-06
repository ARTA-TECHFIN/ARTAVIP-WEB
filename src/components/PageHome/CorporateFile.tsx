import { FC } from 'react'
import { useRouter } from 'next/router'
import { ButtonAnimated } from '../ButtonAnimated'

type propsT = {
  data: any
}
const CorporateFile: FC<propsT> = ({
  data,
}) => {
  const router = useRouter()
  const { locale } = router
  const g = (keyWithoutLang: string) => `${data.data.attributes[`${keyWithoutLang}_${locale}`]}`
  const file= data.data.attributes.files
  const file2= data.data.attributes.files2
  const file3= data.data.attributes.files3
  const z = (pageData: any, keyWithoutLang: string) => `${pageData[`${keyWithoutLang}_${locale}`]}`


  return (
    <div id='securities-tm' className='text-arta-sand-100 person_lf'>
      <div className='h4-light-text pt-8'>
         {g('title_1')}
        <div className='small-text p-2'>
        {file.map((j: any, i: any) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <li><button onClick={() => {
              router.push(`${z(j,'link')}`)
            }}>{z(j,'file_name')}</button></li>
        )
         })}
        </div>
      </div>
      <hr className='securities-hr'></hr>
      <div className='h4-light-text pt-4'>
        {g('title_2')}
        <div className='small-text p-2'>
        {file2.map((j: any, i: any) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <li><button onClick={() => {
              router.push(`${z(j,'link')}`)
            }}>{z(j,'file_name')}</button></li>
        )
         })}
        </div>
      </div>
      <hr className='securities-hr'></hr>
      <div className='h4-light-text pt-4'>
        {g('title_3')}
        <div className='small-text p-2'>
        {file3.map((j: any, i: any) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <li><button onClick={() => {
              router.push(`${z(j,'link')}`)
            }}>{z(j,'file_name')}</button></li>
        )
         })}
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

export default CorporateFile
