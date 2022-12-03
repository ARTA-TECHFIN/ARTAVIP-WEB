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
  briefIntroduction: string
}
const useApplyForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    ...formStatus
  } = useForm<formValuesT>({
    resolver: (data) => {
      const errors: Partial<Record<keyof formValuesT, { message: string }>> = {}

      if (!data.firstName) errors.firstName = { message: 'Please enter your first name' }
      if (!data.lastName) errors.lastName = { message: 'Please enter your last name' }
      if (!data.emailAddress) errors.emailAddress = { message: 'Please enter your email address' }
      else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.emailAddress))
        errors.emailAddress = { message: 'Please enter a valid email address' }
      if (!data.contactNumber)
        errors.contactNumber = { message: 'Please enter your contact number' }
      if (!data.lastSalary) errors.lastSalary = { message: 'Please enter your last salary' }
      else if (!/^\d+$/.test(data.lastSalary))
        errors.lastSalary = { message: 'Please enter a valid last salary' }
      if (!data.expectedSalary)
        errors.expectedSalary = { message: 'Please enter your expected salary' }
      else if (!/^\d+$/.test(data.expectedSalary))
        errors.expectedSalary = { message: 'Please enter a valid expected salary' }
      // TODO: add validation for cvUpload
      // if (!data.cvUpload) errors.cvUpload = { message: 'Please upload your CV' }
      if (!data.briefIntroduction)
        errors.briefIntroduction = { message: 'Please enter your brief introduction' }
      else if (data.briefIntroduction.length > 500)
        errors.briefIntroduction = { message: 'Please enter less than 500 characters' }

      return { values: data, errors }
    },
  })

  const submitStatus = useMutation({
    mutationFn: async (data: any) => {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        body: JSON.stringify({ ...data, enquiryType: 'job_apply' }),
      })
      if (!response.ok) throw new Error('Network response was not ok')
    },
  })

  const onSubmit = handleSubmit(async (data) => submitStatus.mutate(data))

  return { onSubmit, submitStatus, ...formStatus, errors }
}

const ApplyForm = (props: { job: jobDetailsT }) => {
  const { job } = props
  const { t } = useTranslation('common')

  const { onSubmit, submitStatus, errors, register } = useApplyForm()

  if (submitStatus.isSuccess) {
    // TODO: Show success message
    return <div>Success</div>
  }

  return (
    <form onSubmit={onSubmit}>
      <fieldset disabled={submitStatus.isLoading}>
        <div className="hidden">
          {/* May add more job details here */}
          <InputText {...register('jobTitle')} defaultValue={job.job_title} />
        </div>
        <h2 className={`${textClass.h2_style2} mb-8`}>{`${t('join_us.application_form')}`}</h2>
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
            <InputField label={`${t('join_us.linkedin')}*`} error={errors.linkedin?.message}>
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

          <div className="col-span-full">
            <InputField label={`${t('join_us.cv_upload')}*`}>
              <InputFile />
            </InputField>
          </div>

          <div className="col-span-full">
            <InputField
              label={`${t('join_us.brief_introduction')}*`}
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

          <ButtonAnimated
            extraProps={{ type: 'submit' }}
            className="w-full border-arta-sand-100 text-arta-sand-100 md:w-[120px]"
          >
            {t('join_us.submit')}
          </ButtonAnimated>
        </div>
      </fieldset>
    </form>
  )
}

export default ApplyForm
