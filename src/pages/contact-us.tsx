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

const fetchCmsData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_GM_HOSTING_PATH}/api/cms/contact-us`)
  const data = await res.json()
  return data
}

const fetchTitle = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_GM_HOSTING_PATH}/api/cms/page-title?populate=*`)
  const data = await res.json()
  return data
}

interface FormValues {
  name: string
  mail_address: string
  topic: string
  message: string
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
      if (!data.mail_address) errors.mail_address = { message: t('warning.required') }
      else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.mail_address))
        errors.mail_address = { message: t('warning.invalid_format') }
      if (!data.message) errors.message = { message: t('warning.required') }
      else if (data.message.length > 500) errors.message = { message: t('warning.word_count_500') }

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
  const cms = await fetchCmsData()
  const titleData = await fetchTitle()
  const t = (keyWithoutLang: string) => `${titleData.data.attributes.aboutUs[`${keyWithoutLang}_${locale}`]}`
  
  return {
    props: {
      cms: cms.data,
      fax: cms.data.attributes.fax,
      mail: cms.data.attributes.mail,
      title: t('contact_us'),
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  }
}

const BussinessOverview = (props: { cms: any, fax: any, mail: any, title: any }) => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const { register, errors, watch, onSubmit, submitStatus } = useEnquiryForm(t)
  const { locale } = router
  const g = (pageData: any, keyWithoutLang: string) =>
    `${pageData.attributes[`${keyWithoutLang}_${locale}`]}`

  const r = {
    name: t('contact_info.name'),
    mail_address: t('contact_info.maill_address'),
    topic: t('contact_info.topic'),
    message: t('contact_info.message'),
    question_message_hints: t('contact_us.max_500_characters'),
    question_submit: t('contact_us.submit'),

    success_title: t('contact_us.thanks_title'),
    success_message: t('contact_us.thanks_message'),
  }

  return (
    <>
      <Seo
        title={`${props.title} | Arta TechFin`}
        description={props.title}
        keywords={props.title}
        ga="About Us"
      />
      <Header textColor="brown" />
      <img src='/images/about/white-2024-06-14-62049.png' alt="" className="object-cover w-full h-[152px]" />
      <div id="contact-bd">
        <div className='x-container max width contact-1'>
          <h1 >{props.title}</h1>
        </div>
      </div>
      <div className='bg-white p-4'>
        <div className="mt-8 grid grid-cols-2 gap-x-6 md:grid-cols-2 lg:grid-cols-2">
          <div className='col-span-8 md:col-span-1 flex flex-col p-4 contact-form-fix'>
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
                    'flex w-full max-w-[820px] flex-col gap-10 bg-arta-snow-100 p-6 shadow-2xl transition-all ease-in-out md:grid md:grid-cols-2 '
                  }
                >
                  <InputField label={r.name} error={errors.name?.message} className="col-span-2">
                    <InputText {...register('name')} />
                  </InputField>
                  <InputField label={r.mail_address} error={errors.mail_address?.message} className="col-span-2">
                    <InputText {...register('mail_address')} />
                  </InputField>
                  <InputField label={r.topic} error={errors.topic?.message} className="col-span-2">
                    <InputText {...register('topic')} />
                  </InputField>
                  <InputField
                    label={r.message}
                    error={errors.message?.message}
                    className="col-span-2"
                  >
                    <InputTextArea {...register('message')} />
                    <span
                      className={`caption-text mt-2 font-bold tracking-widest text-arta-sand-100 `}
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
                </fieldset>
              </form>
            )}
          </div>
          <div className='col-span-8 md:col-span-1 flex flex-col p-4'>
            <iframe style={{ border: '0' }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.6422202815165!2d114.20490761001156!3d22.2915387796082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040142b4366419%3A0xf4c63e921ec2ba5b!2sK11%20ATELIER%20King's%20Road!5e0!3m2!1szh-TW!2shk!4v1679274411705!5m2!1szh-TW!2shk" width="100%" height="450" allowFullScreen></iframe>
            <div className='pt-4'>
              <h1 className='h6-text'>{g(props.cms, 'office_name')}</h1>
              <p className='small-text'>{g(props.cms, 'address')}</p>
              <h1 className='h6-text'>{g(props.cms, 'hotline_text')}</h1>
              <p className='small-text'>{g(props.cms, 'hotline')}</p>
              <h1 className='h6-text'>{g(props.cms, 'email_text')}</h1>
              <p className='small-text'>{props.mail}</p>
              <h1 className='h6-text'>{g(props.cms, 'fax_text')}</h1>
              <p className='small-text'>{props.fax}</p>
            </div>
          </div>
        </div>
      </div>

      <img src='images/about/white-2024-06-14-62049.png' alt="" className="object-cover w-full h-[50px]" />
      <Footer textColor="white" />
    </>
  )
}

export default BussinessOverview
