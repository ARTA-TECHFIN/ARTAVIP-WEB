/* eslint-disable */
import { useEffect } from 'react'
import Header from 'src/components/Header/Header'
import { Seo } from 'src/components/Seo'
import { HeroBanner } from '../HeroBanner'
import { reportCmsT } from 'src/domains/investor'
import { FC } from 'react'
import { TabBar2 } from 'src/components/TabBar2'
import { links } from 'src/domains/links'
import Router from 'next/router'
import { ButtonAnimated } from 'src/components/ButtonAnimated'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { InputDropdown } from 'src/components/InputDropdown'
import { InputField } from 'src/components/InputField'
import { InputText } from 'src/components/InputText'
import { useRouter } from 'next/router'
import homepageJson from 'apidata/homepage.json'
import headerJson from 'apidata/header.json'
import Footer from 'src/components/Footer'
import { useTranslation } from 'next-i18next'

const TABS = {
  aspiring: 'aspiring',
  riverchain: 'riverchain',
  advisor: 'advisor',
  aaml: 'aaml',
} as const

interface FormValues {
  password: string
}

type tabsT = keyof typeof TABS

type propsT = {
  data: any
  tabType: tabsT
  hideTab?: boolean
  hidePw?: boolean
  simpleHeader?: boolean
  gaLog?: boolean
  children: React.ReactNode
}

const useEnquiryForm = (t: any, g: any) => {
  const {
    handleSubmit,
    formState: { errors },
    ...formStatus
  } = useForm<FormValues>({
    resolver: (data) => {
      const errors: Partial<Record<keyof FormValues, { message: string }>> = {}

      if (!data.password) errors.password = { message: t('warning.required') }
      if (data.password != 'Art@Fund5') errors.password = {
        message: 'Wrong.password '
      }
      if (data.password == 'Art@Fund5') {
        var overlay = document.getElementById("need_password");
        if(overlay != null){
          overlay.style.display = "none";
        }
        var fundList = document.getElementById("fund_list");
        if(fundList != null){
          fundList.style.display = "block";
        }
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


const Onboarding: FC<propsT> = ({
  tabType,
  data,
  hideTab = false,
  hidePw = false,
  children,
  gaLog = false,
}) => {

  const { locale } = useRouter()

  const tabInfoMap = {
    [TABS.aaml]: {
      title: data.title.sub_title_4,
      link: data.title.link_4,
      value: 'aaml',
    },
    [TABS.riverchain]: {
      title: data.title.sub_title_2,
      link: data.title.link_2,
      value: 'riverchain',
    },
    [TABS.aspiring]: {
      title: data.title.sub_title_1,
      link: data.title.link_1,
      value: 'aspiring',
    },
    [TABS.advisor]: {
      title: data.title.sub_title_3,
      link: data.title.link_3,
      value: 'advisor',
    },

  }
  const tabList = Object.values(tabInfoMap)

  useEffect(() => {
    if (tabType === 'aspiring' && document.getElementById('tab')) {
      // @ts-ignore
      document.getElementById('tab').scrollLeft = document.getElementById('tab')?.scrollWidth
    }

    if (tabType === 'riverchain' && document.getElementById('tab')) {
      // @ts-ignore
      document.getElementById('tab').scrollLeft = document.getElementById('tab')?.scrollWidth - 100
    }

    if (tabType === 'advisor' && document.getElementById('tab')) {
      // @ts-ignore
      document.getElementById('tab').scrollLeft = document.getElementById('tab')?.scrollWidth
    }

    if (tabType === 'aaml' && document.getElementById('tab')) {
      // @ts-ignore
      document.getElementById('tab').scrollLeft = document.getElementById('tab')?.scrollWidth
    }

    var overlay = document.getElementById("need_password");
    if(overlay != null){
      overlay.style.display = "block";
    }
    var fundList = document.getElementById("fund_list");
    if(fundList != null){
      fundList.style.display = "none";
    }
  }, [])

  const { t } = useTranslation('common')
  const g = (pageData: any, keyWithoutLang: string) => `${pageData[`${keyWithoutLang}_${locale}`]}`
  const { register, errors, watch, onSubmit, submitStatus } = useEnquiryForm(t, g)
  return (
    <>
      <Seo
        title={`Home | Arta AM`}
        description=''
        keywords=''
        ga="Homepage"
      />
      <Header textColor="brown" />
      <img src='/images/about/white-2024-06-14-62049.png' alt="" className="object-cover w-full h-[220px]" />
      <main className="flex flex-col">
        <div className="bg-arta-eggshell-100 pt-0 pb-6 md:pt-16 md:pb-[106px] " id="content">
          <div className="arta-container mx-auto homes_fund" id="need_password">
            <form onSubmit={onSubmit}>
              <fieldset
                disabled={submitStatus.isLoading}
                className={
                  'flex w-full max-w-[500px] flex-col gap-10 bg-arta-snow-100 p-6 shadow-2xl transition-all ease-in-out md:grid md:grid-cols-4 '
                }
              >
                <InputField label={g(headerJson,'fund_pw_label')} error={errors.password?.message} className="col-span-4">
                  <InputText {...register('password')} />
                </InputField>

                <div className="col-span-1">
                  <ButtonAnimated
                    extraProps={{ type: 'submit' }}
                    className="w-full border-arta-sand-100 text-arta-sand-100 md:w-[120px]"
                  >
                    {g(headerJson,'submit')}
                  </ButtonAnimated>
                </div>
                <div className="col-span-1"></div>
                {/* <div className="col-span-1">
                  <ButtonAnimated
                    extraProps={{ type: 'cancel' }}
                    href={links.home}
                    className="w-full border-arta-sand-100 text-arta-sand-100 md:w-[120px]"
                  >
                    {g(headerJson,'return')}
                  </ButtonAnimated>
                </div> */}
              </fieldset>
            </form>
          </div>

          <div className="arta-container mx-auto homes_fund" id="fund_list">
            <div className='text-arta-sand-100 pt-2 top-text'>{data.title.header}</div>
            {!hideTab && (
              <div id="tab" className="arta-hide-scrollbar -mx-6 overflow-scroll md:mx-0">
                <TabBar2
                  className={`${locale == 'en'
                    ? 'min-w-[750px] lg:min-w-[650px]'
                    : 'min-w-[550px] lg:min-w-[500px]'
                    } pl-6`}
                  tabs={tabList.map((t) => {
                    return { label: t.title, value: t.value }
                  })}
                  selectedTab={tabType}
                  setSelectedTab={(_, index) =>
                    Router.push(tabList[index].link, undefined, { scroll: false })
                  }
                />
              </div>
            )}
            {children}
            <div className='small-text pt-4 text-arta-sand-100'>{data.title.remark}</div>
          </div>
        </div>
      </main>
      <Footer textColor="white" />
    </>
  )
}

export { TABS }
export default Onboarding
