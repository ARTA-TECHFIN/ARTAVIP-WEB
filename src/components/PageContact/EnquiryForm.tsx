import { useState } from 'react'
import Image from 'next/image'

import { ButtonAnimated } from '../ButtonAnimated'
import { InputDropdown } from '../InputDropdown'
import { InputField } from '../InputField'
import { InputText } from '../InputText'
import { InputTextArea } from '../InputTextArea'
import { textClass } from '../Text'

const topicOptions = [
  { value: '', label: 'Please select' },
  { value: 'Media', label: 'Media' },
  { value: 'Other', label: 'Other' },
]

const t = {
  title: 'Enquiry Form',
  question_topic: 'What are you going to enquire?',
  question_name: 'Name',
  question_company: 'Company Name',
  question_jobTitle: 'Job Title',
  question_email: 'Email Address',
  question_phone: 'Contact Number',
  question_message: 'Brief Introduction',
  question_message_hints: 'Max. 500 characters',
  question_submit: 'Submit',

  success_title: 'Thank you!',
  success_message: '(Dummy text) Thank you for your enquiry, we will contact you very soon.',
}

const EnquiryForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [topic, setTopic] = useState('')

  const isExpanded = topic !== ''

  return (
    <div className='group/bg relative overflow-hidden md:py-[150px] py-12'>
      <div className="easeInOutSine absolute inset-0 h-full w-full scale-105 overflow-hidden duration-300 group-hover/bg:scale-100">
        <Image src='/images/asset-management/bg-introduction.png' alt="" fill className="object-cover" />
      </div>
      <div className="arta-container mx-auto py-12 relative z-1">
        <h2 className={`${textClass.h2_style2} mb-8`}>{t.title}</h2>
        {isSubmitted ? (
          <div className="min-h-[220px] w-full max-w-[820px] flex-col gap-10 bg-arta-snow-100 p-6 shadow-2xl">
            <h3 className={`${textClass.h6} mb-4`}>{t.success_title}</h3>
            <p className={`${textClass.body_regular} mb-6`}>{t.success_message}</p>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault()
              setIsSubmitted(true)
            }}
            className={
              'flex w-full max-w-[820px] flex-col gap-10 bg-arta-snow-100 p-6 shadow-2xl transition-all ease-in-out md:grid md:grid-cols-2' +
              (isExpanded ? ' md:max-h-[800px]' : ' md:max-h-[200px]')
            }
          >
            <InputField label={t.question_topic}>
              <InputDropdown
                options={topicOptions}
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              />
            </InputField>
            {isExpanded && (
              <>
                <div />
                <InputField label={t.question_name}>
                  <InputText name="name" />
                </InputField>
                <div />
                <InputField label={t.question_company}>
                  <InputText name="company" />
                </InputField>
                <InputField label={t.question_jobTitle}>
                  <InputText name="jobTitle" />
                </InputField>
                <InputField label={t.question_email}>
                  <InputText name="email" />
                </InputField>
                <InputField label={t.question_phone}>
                  <InputText name="phone" />
                </InputField>
                <InputField label={t.question_message} className="col-span-2">
                  <InputTextArea name="message" maxLength={500} />
                  <span className={`${textClass.caption} mt-2 tracking-widest text-arta-sand-100 font-bold `}>
                    {t.question_message_hints}
                  </span>
                </InputField>
                <div className="col-span-2">
                  <ButtonAnimated
                    extraProps={{ type: 'submit' }}
                    className="w-full border-arta-sand-100 text-arta-sand-100 md:w-[120px]"
                  >
                    {t.question_submit}
                  </ButtonAnimated>
                </div>
              </>
            )}
          </form>
        )}
      </div>
    </div>
    
  )
}

export { EnquiryForm }
