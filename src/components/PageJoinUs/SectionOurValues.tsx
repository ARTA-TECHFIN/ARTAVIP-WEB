import ModuleTextColListHeader from '../ModuleTextColListHeader'
import { textClass } from '../Text'
import {MindSet, Compassionate, Integrity, Value, Diversity} from '../Svg/Icon'
import { useTranslation } from 'next-i18next'

const SectionOurValues = ({k}: any) => {
  const { t } = useTranslation('common')

  return (
    <div className="bg-arta-eggshell-100" id="our-value">
      <div className="arta-container relative mx-auto grid grid-cols-12 py-12 md:py-[201px]">
        <div className="md:col-span-4 col-span-full flex items-center">
            <ModuleTextColListHeader header={t("join_us.our_values")} headerPosition={'left'} />
        </div>
        <div className='md:col-span-8 col-span-full border-y-[1px] border-arta-russet-100 pt-8'>
            <div className={`${textClass.body_regular_verah} mx-auto mt-4 whitespace-pre-line`} dangerouslySetInnerHTML={{__html: k.our_values_description}} />

            <div className='grid grid-cols-10 gird-gap-x-12'>
                <div className='col-span-5 md:col-span-2 flex items-center text-center flex-col p-8'>
                  <MindSet/>
                  <p className={`mt-4 ${textClass.small_text_style2}`}>{`Entrepreneurial Mindset`}</p>
                </div>
                <div className='col-span-5 md:col-span-2 flex items-center text-center flex-col p-8'>
                  <Compassionate/>
                  <p className={`mt-4 ${textClass.small_text_style2}`}>{`Compassionate`}</p>
                </div>
                <div className='col-span-5 md:col-span-2 flex items-center text-center flex-col p-8'>
                  <Integrity/>
                  <p className={`mt-4 ${textClass.small_text_style2}`}>{`Integrity and Trust`}</p>
                </div>
                <div className='col-span-5 md:col-span-2 flex items-center text-center flex-col p-8'>
                  <Value/>
                  <p className={`mt-4 ${textClass.small_text_style2}`}>{`Create Shared Value`}</p>
                </div>
                <div className='col-span-5 md:col-span-2 flex items-center text-center flex-col p-8'>
                  <Diversity/>
                  <p className={`mt-4 ${textClass.small_text_style2}`}>{`Embrace Diversity`}</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SectionOurValues
