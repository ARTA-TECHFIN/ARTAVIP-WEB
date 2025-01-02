import type { GetServerSideProps } from 'next'
import { useTranslation } from 'next-i18next'
import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer'
import { Seo } from 'src/components/Seo'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import { ButtonAnimated } from 'src/components/ButtonAnimated'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { InputDropdown } from 'src/components/InputDropdown'
import { InputField } from 'src/components/InputField'
import { InputText } from 'src/components/InputText'
import { InputTextArea } from 'src/components/InputTextArea'
import headerJson from 'apidata/header.json'

interface FormValues {
  topic: string
  name: string
  account_number: string
  mail_address: string
  phone: string
  currency: string
  amount: string
  locale: string
}

const useEnquiryForm = (t: any,g: any,locale:any) => {
  const {
    handleSubmit,
    formState: { errors },
    ...formStatus
  } = useForm<FormValues>({
    resolver: (data) => {
      data.topic = g(headerJson,'withdrawal_title')
      const errors: Partial<Record<keyof FormValues, { message: string }>> = {}

      data.locale=locale
      if (!data.name) errors.name = { message: t('warning.required') }
      if (!data.account_number) errors.account_number = { message: t('warning.required') }
      if (!data.phone) errors.phone = { message: t('warning.required') }
      if (!data.amount) errors.amount = { message: t('warning.required') }
      if (!data.currency) errors.currency = { message: t('warning.required') }
      if (!data.mail_address) errors.mail_address = { message: t('warning.required') }
      else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.mail_address))
        errors.mail_address = { message: t('warning.invalid_format') }
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


export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  }
}

const Withdrwal = (props: { cms: any, fax: any, mail: any, title: any }) => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const { locale } = router
  const lan= {locale}

  console.log("sdsfss:"+locale)
  const g = (pageData: any, keyWithoutLang: string) =>`${pageData[`${keyWithoutLang}_${locale}`]}`
  const { register, errors, watch, onSubmit, submitStatus } = useEnquiryForm(t,g,locale)

  const r = {
    title: g(headerJson,'withdrawal_title'),
    name: g(headerJson,'contact_full_name'),
    account_number: g(headerJson,'account_number'),
    mail_address: g(headerJson,'email'),
    phone: g(headerJson,'phone'),
    currency: g(headerJson,'withdrawal_currency'),
    amount: g(headerJson,'withdrawal_amt'),
    remark: g(headerJson,'remark'),
    withdrawal_remark: g(headerJson,'withdrawal_remark'),
    question_message_hints: t('contact_us.max_500_characters'),
    question_submit: g(headerJson,'submit'),

    success_title: g(headerJson,'success_title'),
    success_message: g(headerJson,'success_message'),
  }
  const TOPIC_TYPES = {
    HKD: 'HKD',
    CNY: 'CNY',
    USD: 'USD',
  }
  const topicOptions = [
    { value: TOPIC_TYPES.HKD, label: g(headerJson,'hkd') },
    { value: TOPIC_TYPES.CNY, label: g(headerJson,'cny') },
    { value: TOPIC_TYPES.USD, label: g(headerJson,'usd') },
  ]

  return (
    <>
      <Seo
        title={`Arta AM`}
        description=''
        keywords=''
        ga=""
      />
      <Header textColor="brown" />
      <img src='/images/about/white-2024-06-14-62049.png' alt="" className="object-cover w-full h-[152px]" />
      <div className='bg-white p-4'>
        <div className="flex flex-col items-center justify-center">
          <div className='col-span-4 md:col-span-1 flex flex-col p-4 contact-form-fix wide-customer'>
            <h1 className='h2-text mt-2 font-bold tracking-widest text-arta-sand-100'>{g(headerJson,'withdrawal_title')}</h1>
            {submitStatus.isSuccess ? (
              <div className="min-h-[220px] w-full max-w-[820px] flex-col gap-10 bg-arta-snow-100 p-6 shadow-2xl">
                <h3 className={`h6-text mb-4`}>{r.success_title}</h3>
                <p className={`body-regular-text mb-6`}>{r.success_message}</p>
              </div>
            ) : (
              <form onSubmit={onSubmit}>
                <fieldset
                  disabled={submitStatus.isLoading}
                  className={
                    'flex w-full max-w-[920px] flex-col gap-10 bg-arta-snow-100 p-6 shadow-2xl transition-all ease-in-out md:grid md:grid-cols-2 '
                  }
                >
                  <InputField label={r.name} error={errors.name?.message} className="col-span-1">
                    <InputText {...register('name')} />
                  </InputField>
                  <InputField label={r.account_number} error={errors.account_number?.message} className="col-span-1">
                    <InputText {...register('account_number')} />
                  </InputField>
                  <InputField label={r.mail_address} error={errors.mail_address?.message} className="col-span-1">
                    <InputText {...register('mail_address')} />
                  </InputField>
                  <InputField label={r.phone} error={errors.phone?.message} className="col-span-1">
                    <InputText {...register('phone')} />
                  </InputField>
                  {/* <InputField label={r.currency} error={errors.currency?.message} className="col-span-1">
                    <InputText {...register('currency')} />
                  </InputField> */}
                  <InputField label={r.currency} error={errors.currency?.message} className="col-span-1">
                    <InputDropdown options={topicOptions} {...register('currency')} />
                  </InputField>
                  <InputField label={r.amount} error={errors.amount?.message} className="col-span-1">
                    <InputText {...register('amount')} />
                  </InputField>
                  <div className='grid p-2 w-full rounded-lg bg-[#F3F2F4] col-span-full'>
                    <span className={`caption-text mt-2 font-bold tracking-widest text-arta-sand-100 `} >
                      {r.withdrawal_remark}
                    </span>
                  </div>
                 

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
                </fieldset>
              </form>
            )}
          </div>
        </div>
      </div>
      <Footer textColor="white" />
    </>
  )
}

export default Withdrwal
