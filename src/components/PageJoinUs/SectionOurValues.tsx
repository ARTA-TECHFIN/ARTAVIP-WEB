import ModuleTextColListHeader from '../ModuleTextColListHeader'
import { textClass } from '../Text'
import {MindSet, Compassionate, Integrity, Value, Diversity} from '../Svg/Icon'

const SectionOurValues = () => {
  return (
    <div className="bg-arta-eggshell-100">
      <div className="arta-container relative mx-auto grid grid-cols-12 py-12 md:py-[201px]">
        <div className="md:col-span-4 col-span-full flex items-center">
            <ModuleTextColListHeader header={`Our Values`} headerPosition={'left'} />
        </div>
        <div className='md:col-span-8 col-span-full border-y-[1px] border-arta-russet-100 pt-8'>
            <p className={`${textClass.body_regular_verah}`}>{`Values are the DNA of ARTA to create a kindred spirit in the workplace. We love to work with people sharing the same beliefs and mentality. It is crucial to drive our business forward and go beyond our boundaries.`}</p>

            <div className='grid grid-cols-10 gird-gap-x-12'>
                <div className='col-span-2 flex items-center text-center flex-col p-8'>
                  <MindSet/>
                  <p className={`mt-4 ${textClass.small_text_style2}`}>{`Entrepreneurial Mindset`}</p>
                </div>
                <div className='col-span-2 flex items-center text-center flex-col p-8'>
                  <Compassionate/>
                  <p className={`mt-4 ${textClass.small_text_style2}`}>{`Compassionate`}</p>
                </div>
                <div className='col-span-2 flex items-center text-center flex-col p-8'>
                  <Integrity/>
                  <p className={`mt-4 ${textClass.small_text_style2}`}>{`Integrity and Trust`}</p>
                </div>
                <div className='col-span-2 flex items-center text-center flex-col p-8'>
                  <Value/>
                  <p className={`mt-4 ${textClass.small_text_style2}`}>{`Create Shared Value`}</p>
                </div>
                <div className='col-span-2 flex items-center text-center flex-col p-8'>
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
