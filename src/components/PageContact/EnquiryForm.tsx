import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'

import { ButtonAnimated } from '../ButtonAnimated'
import { InputDropdown } from '../InputDropdown'
import { InputField } from '../InputField'
import { InputText } from '../InputText'
import { InputTextArea } from '../InputTextArea'
import { textClass } from '../Text'

const TOPIC_TYPES = {
  default: '',
  media: 'Media',
  other: 'Other',
}

const topicOptions = [
  { value: TOPIC_TYPES.default, label: 'Please select' },
  { value: TOPIC_TYPES.media, label: 'Media' },
  { value: TOPIC_TYPES.other, label: 'Other' },
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

interface FormValues {
  topic: string
  name: string
  company: string
  jobTitle: string
  email: string
  phone: string
  message: string
}

const useEnquiryForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    ...formStatus
  } = useForm<FormValues>({
    resolver: (data) => {
      const errors: Partial<Record<keyof FormValues, { message: string }>> = {}

      if (!data.name) errors.name = { message: 'Please enter your name' }
      if (!data.email) errors.email = { message: 'Please enter your email address' }
      else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email))
        errors.email = { message: 'Please enter a valid email address' }
      if (!data.message) errors.message = { message: 'Please enter your message' }
      else if (data.message.length > 500)
        errors.message = { message: 'Please enter less than 500 characters' }

      if (data.topic === TOPIC_TYPES.media) {
        if (!data.company) errors.company = { message: 'Please enter your company name' }
        if (!data.jobTitle) errors.jobTitle = { message: 'Please enter your job title' }
        if (!data.phone) errors.phone = { message: 'Please enter your contact number' }
      }

      return { values: data, errors }
    },
  })

  const submitStatus = useMutation({
    mutationFn: async (data: any) => {
      const response = await fetch('/api/enquiry', { method: 'POST', body: JSON.stringify(data) })
      if (!response.ok) throw new Error('Network response was not ok')
    },
  })

  const onSubmit = handleSubmit((data) => submitStatus.mutate(data))

  return {
    ...formStatus,
    errors,
    onSubmit,
    submitStatus,
  }
}

const EnquiryForm = () => {
  const { register, errors, watch, onSubmit, submitStatus } = useEnquiryForm()

  const topic = watch('topic') || TOPIC_TYPES.default
  const isExpanded = topic !== TOPIC_TYPES.default

  const isMediaTopic = topic === TOPIC_TYPES.media

  return (
    <div className="group/bg relative overflow-hidden py-12 md:py-[150px]">
      <div className="easeInOutSine absolute inset-0 h-full w-full scale-105 overflow-hidden duration-300 group-hover/bg:scale-100">
        <Image
          src="/images/asset-management/bg-introduction.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="arta-container relative z-1 mx-auto py-12">
        <h2 className={`${textClass.h2_style2} mb-8`}>{t.title}</h2>
        {submitStatus.isSuccess ? (
          <div className="min-h-[220px] w-full max-w-[820px] flex-col gap-10 bg-arta-snow-100 p-6 shadow-2xl">
            <h3 className={`${textClass.h6} mb-4`}>{t.success_title}</h3>
            <p className={`${textClass.body_regular} mb-6`}>{t.success_message}</p>
          </div>
        ) : (
          <form onSubmit={onSubmit}>
            <fieldset
              disabled={submitStatus.isLoading}
              className={
                'flex w-full max-w-[820px] flex-col gap-10 bg-arta-snow-100 p-6 shadow-2xl transition-all ease-in-out md:grid md:grid-cols-2' +
                (isExpanded ? ' md:max-h-[1000px]' : ' md:max-h-[200px]')
              }
            >
              <InputField label={t.question_topic}>
                <InputDropdown options={topicOptions} {...register('topic')} />
              </InputField>
              {isExpanded && (
                <>
                  <div />
                  <InputField label={t.question_name} error={errors.name?.message}>
                    <InputText {...register('name')} />
                  </InputField>
                  {isMediaTopic && (
                    <>
                      <div />
                      <InputField label={t.question_company} error={errors.company?.message}>
                        <InputText {...register('company')} />
                      </InputField>
                      <InputField label={t.question_jobTitle} error={errors.jobTitle?.message}>
                        <InputText {...register('jobTitle')} />
                      </InputField>
                    </>
                  )}
                  <InputField label={t.question_email} error={errors.email?.message}>
                    <InputText {...register('email')} />
                  </InputField>
                  {isMediaTopic && (
                    <InputField label={t.question_phone} error={errors.phone?.message}>
                      <InputText {...register('phone')} />
                    </InputField>
                  )}
                  <InputField
                    label={t.question_message}
                    error={errors.message?.message}
                    className="col-span-2"
                  >
                    <InputTextArea {...register('message')} />
                    <span
                      className={`${textClass.caption} mt-2 font-bold tracking-widest text-arta-sand-100 `}
                    >
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
            </fieldset>
          </form>
        )}
      </div>
    </div>
  )
}

export { EnquiryForm }
