import { InputField } from '../InputField'
import { InputText } from '../InputText'
import { InputTextArea } from '../InputTextArea'
import { InputFile } from '../InputFile'
import { textClass } from '../Text'
import { ButtonAnimated } from '../ButtonAnimated'
import { useTranslation } from 'next-i18next'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { jobDetailsT } from 'src/pages/job/[id]'
import { DragDropArea, openFilePicker, toBase64 } from '../DragDropArea'
import { ErrorMessage } from '../ErrorMessage'
import parse from 'html-react-parser'
import { useState } from 'react'

type formValuesT = {
  jobTitle: string
  firstName: string
  lastName: string
  emailAddress: string
  contactNumber: string
  linkedin: string
  lastSalary: string
  expectedSalary: string
  cvUpload: string
  cvUploadName: string
  briefIntroduction: string
  acceptedTerms: boolean
}
const useApplyForm = (t: any) => {
  const {
    handleSubmit,
    formState: { errors },
    ...formStatus
  } = useForm<formValuesT>({
    resolver: (data) => {
      const errors: Partial<Record<keyof formValuesT, { message: string }>> = {}

      if (!data.firstName) errors.firstName = { message: t('warning.required') }
      if (!data.lastName) errors.lastName = { message: t('warning.required') }
      if (!data.emailAddress) errors.emailAddress = { message: t('warning.required') }
      else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.emailAddress))
        errors.emailAddress = { message: t('warning.invalid_format') }
      if (!data.contactNumber) errors.contactNumber = { message: t('warning.required') }
      if (!data.lastSalary) errors.lastSalary = { message: t('warning.required') }
      else if (!/^\d+$/.test(data.lastSalary))
        errors.lastSalary = { message: t('warning.invalid_format') }
      if (!data.expectedSalary) errors.expectedSalary = { message: t('warning.required') }
      else if (!/^\d+$/.test(data.expectedSalary))
        errors.expectedSalary = { message: t('warning.invalid_format') }
      if (!data.cvUpload) errors.cvUpload = { message: t('warning.required') }

      if (data.briefIntroduction.length > 500)
        errors.briefIntroduction = { message: t('warning.word_count_500') }

      if (!data.acceptedTerms) errors.acceptedTerms = { message: t('warning.required') }

      return { values: data, errors }
    },
  })

  const submitStatus = useMutation({
    mutationFn: async (data: any) => {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        body: JSON.stringify({ ...data, enquiryType: 'job_apply' }),
      })
      if (!response.ok) throw new Error(`Network response was not ok: ${response.statusText}  `)
    },
  })

  const onSubmit = handleSubmit(async (data) => submitStatus.mutate(data))

  return { onSubmit, submitStatus, ...formStatus, errors }
}

const ApplyForm = (props: { job: jobDetailsT; setShowSuccess: (isSuccess: boolean) => void }) => {
  const { job, setShowSuccess } = props
  const { t } = useTranslation('common')
  const [fileSizeError, setFileSizeError] = useState("")

  const { onSubmit, submitStatus, errors, register, watch, setValue, trigger } = useApplyForm(t)

  if (submitStatus.isSuccess) setShowSuccess(true)

  const cvUploadName = watch('cvUploadName')
  const onFileChange = async (files: File[]) => {
    if (files.length > 0) {
      setFileSizeError("")
      const file = files[0]

      if (!file.type.includes('pdf') && !file.type.includes('word')) {
        console.error('cvUpload', 'Please upload a PDF or Word document')
        return
      }

      if (file.size > 5 * 1024000) {
        setFileSizeError(t('warning.file_size_5mb'))
        return
      }

      const base64 = await toBase64(file)

      setValue('cvUpload', base64)
      trigger('cvUpload')
      setValue('cvUploadName', file.name)
      trigger('cvUploadName')
    } else {
      setValue('cvUpload', '')
      trigger('cvUpload')
      setValue('cvUploadName', '')
      trigger('cvUploadName')
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <fieldset disabled={submitStatus.isLoading}>
        <div className="hidden">
          {/* May add more job details here */}
          <InputText {...register('jobTitle')} defaultValue={job.job_title} />
        </div>
        <h2 className={`${textClass.h2_style2} mb-8`}>{t('join_us.application_form')}</h2>
        <div className="grid grid-cols-2 gap-x-8 gap-y-6">
          <div className="col-span-1">
            <InputField label={`${t('join_us.first_name')}*`} error={errors.firstName?.message}>
              <InputText {...register('firstName')} placeholder="Tai Man" />
            </InputField>
          </div>
          <div className="col-span-1">
            <InputField label={`${t('join_us.last_name')}*`} error={errors.lastName?.message}>
              <InputText {...register('lastName')} placeholder="Chan" />
            </InputField>
          </div>
          <div className="col-span-1">
            <InputField
              label={`${t('join_us.email_address')}*`}
              error={errors.emailAddress?.message}
            >
              <InputText {...register('emailAddress')} placeholder="abc@abc.com" />
            </InputField>
          </div>
          <div className="col-span-1">
            <InputField
              label={`${t('join_us.contact_number')}*`}
              error={errors.contactNumber?.message}
            >
              <InputText {...register('contactNumber')} />
            </InputField>
          </div>
          <div className="col-span-1">
            <InputField label={`${t('join_us.linkedin')}`} error={errors.linkedin?.message}>
              <InputText {...register('linkedin')} />
            </InputField>
          </div>
          <div className="col-span-1"></div>
          <div className="col-span-1">
            <InputField label={`${t('join_us.last_salary')}*`} error={errors.lastSalary?.message}>
              <InputText {...register('lastSalary')} placeholder={t('join_us.dollar')} />
            </InputField>
          </div>

          <div className="col-span-1">
            <InputField
              label={`${t('join_us.expected_salary')}*`}
              error={errors.expectedSalary?.message}
            >
              <InputText {...register('expectedSalary')} placeholder={t('join_us.dollar')} />
            </InputField>
          </div>

          <DragDropArea className="col-span-full" onDrop={onFileChange}>
            {cvUploadName ? (
              <button
                className="w-full text-left"
                type="button"
                onClick={() => openFilePicker(onFileChange, { accept: '.doc,.pdf' })}
              >
                <div className="relative mt-2 flex h-[150px] w-full flex-col items-center justify-center rounded-lg bg-[#F3F2F4]">
                  <p className="break-all px-4 text-lg">{cvUploadName}</p>
                </div>
              </button>
            ) : (
              <button
                className="w-full text-left"
                type="button"
                onClick={() => openFilePicker(onFileChange, { accept: '.doc,.pdf' })}
              >
                <InputField label={`${t('join_us.cv_upload')}*`} error={errors.cvUpload?.message}>
                  <InputFile />
                </InputField>
              </button>
            )}
          </DragDropArea>
          {
            fileSizeError && (
              <div className="col-span-full -mt-8">
                <p className={`${textClass.caption} text-red-400 my-4`}>{fileSizeError}</p>
              </div>
            )
          }
          
          <div className="col-span-full">
            <InputField
              label={`${t('join_us.brief_introduction')}`}
              error={errors.briefIntroduction?.message}
            >
              <InputTextArea {...register('briefIntroduction')} />
              <span
                className={`${textClass.caption} mt-2 font-bold tracking-widest text-arta-sand-100 `}
              >
                {t('join_us.introduction_limitation')}
              </span>
            </InputField>
          </div>

          <div className="col-span-full">
            <InputField label="" error={errors.acceptedTerms?.message}>
              <label className="flex gap-5 items-center">
                <input type="checkbox" {...register('acceptedTerms')} />
                <p className={`${textClass.body_regular} select-none w-[90%] sm:w-auto`}>
                  {parse(t("join_us.accept_privacy_policy"))}
                </p>
              </label>
            </InputField>
          </div>

          <div className="col-span-full flex flex-col justify-start gap-2">
            {submitStatus.error ? <ErrorMessage error={submitStatus.error} /> : null}
            <ButtonAnimated
              extraProps={{ type: 'submit' }}
              className={`w-full border-arta-sand-100 text-arta-sand-100 md:w-[120px] ${submitStatus.isLoading && 'pointer-events-none'}`}
            >
              {t('join_us.submit')}
              {
                submitStatus.isLoading && <img className="absolute right-2 top-[7px] w-6 h-6" src="/images/loading.svg" />
              }
            </ButtonAnimated>
          </div>
        </div>
      </fieldset>
    </form>
  )
}

export default ApplyForm
