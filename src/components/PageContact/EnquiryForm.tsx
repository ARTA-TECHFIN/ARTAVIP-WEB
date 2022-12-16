import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'

import { ButtonAnimated } from '../ButtonAnimated'
import { InputDropdown } from '../InputDropdown'
import { InputField } from '../InputField'
import { InputText } from '../InputText'
import { InputTextArea } from '../InputTextArea'
import { textClass } from '../Text'
import { useTranslation } from 'next-i18next'

interface FormValues {
  topic: string
  name: string
  company: string
  jobTitle: string
  email: string
  phone: string
  message: string
}

const TOPIC_TYPES = {
  default: '',
  media: 'Media',
  other: 'Other',
}

const useEnquiryForm = (t: any) => {
  const {
    handleSubmit,
    formState: { errors },
    ...formStatus
  } = useForm<FormValues>({
    resolver: (data) => {
      const errors: Partial<Record<keyof FormValues, { message: string }>> = {}

      if (!data.name) errors.name = { message: t('warning.required') }
      if (!data.email) errors.email = { message: t('warning.required') }
      else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email))
        errors.email = { message: t('warning.invalid_format') }
      if (!data.message) errors.message = { message: t('warning.required') }
      else if (data.message.length > 500) errors.message = { message: t('warning.word_count_500') }

      if (data.topic === TOPIC_TYPES.media) {
        if (!data.company) errors.company = { message: t('warning.required') }
        if (!data.jobTitle) errors.jobTitle = { message: t('warning.required') }
        if (!data.phone) errors.phone = { message: t('warning.required') }
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
  const { t } = useTranslation('common')
  const { register, errors, watch, onSubmit, submitStatus } = useEnquiryForm(t)

  const TOPIC_TYPES = {
    default: '',
    media: 'Media',
    other: 'Other',
  }

  const topicOptions = [
    { value: TOPIC_TYPES.default, label: t('contact_us.select') },
    { value: TOPIC_TYPES.media, label: t('contact_us.media') },
    { value: TOPIC_TYPES.other, label: t('contact_us.others') },
  ]

  const r = {
    title: t('contact_us.enquiry_form'),
    question_topic: t('contact_us.category_question'),
    question_name: t('contact_us.name'),
    question_company: t('contact_us.company_name'),
    question_jobTitle: t('contact_us.job_title'),
    question_email: t('contact_us.email_address'),
    question_phone: t('contact_us.contact_number'),
    question_message: t('contact_us.brief_introduction'),
    question_message_hints: t('contact_us.max_500_characters'),
    question_submit: t('contact_us.submit'),

    success_title: t('contact_us.thanks_title'),
    success_message: t('contact_us.thanks_message'),
  }

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
        <h2 className={`${textClass.h2_style2} mb-8`}>{r.title}</h2>
        {submitStatus.isSuccess ? (
          <div className="min-h-[220px] w-full max-w-[820px] flex-col gap-10 bg-arta-snow-100 p-6 shadow-2xl">
            <h3 className={`${textClass.h6} mb-4`}>{r.success_title}</h3>
            <p className={`${textClass.body_regular} mb-6`}>{r.success_message}</p>
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
              <InputField label={r.question_topic}>
                <InputDropdown options={topicOptions} {...register('topic')} />
              </InputField>
              {isExpanded && (
                <>
                  <div />
                  <InputField label={r.question_name} error={errors.name?.message}>
                    <InputText {...register('name')} />
                  </InputField>
                  {isMediaTopic && (
                    <>
                      <div />
                      <InputField label={r.question_company} error={errors.company?.message}>
                        <InputText {...register('company')} />
                      </InputField>
                      <InputField label={r.question_jobTitle} error={errors.jobTitle?.message}>
                        <InputText {...register('jobTitle')} />
                      </InputField>
                    </>
                  )}
                  <InputField label={r.question_email} error={errors.email?.message}>
                    <InputText {...register('email')} />
                  </InputField>
                  {isMediaTopic && (
                    <InputField label={r.question_phone} error={errors.phone?.message}>
                      <InputText {...register('phone')} />
                    </InputField>
                  )}
                  <InputField
                    label={r.question_message}
                    error={errors.message?.message}
                    className="col-span-2"
                  >
                    <InputTextArea {...register('message')} />
                    <span
                      className={`${textClass.caption} mt-2 font-bold tracking-widest text-arta-sand-100 `}
                    >
                      {r.question_message_hints}
                    </span>
                  </InputField>
                  <div className="col-span-2">
                    <ButtonAnimated
                      extraProps={{ type: 'submit' }}
                      className="w-full border-arta-sand-100 text-arta-sand-100 md:w-[120px]"
                    >
                      {r.question_submit}
                      {submitStatus.isLoading && (
                        <img
                          className="absolute right-2 top-[7px] h-6 w-6"
                          src="/images/loading.svg"
                        />
                      )}
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
