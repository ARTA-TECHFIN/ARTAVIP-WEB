import contactJson from 'apidata/contact.json'

// TODO: generate this from cms
export type getFooterCmsT = any

const fetchFooterData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOSTING_PATH}/api/cms/contact-us`)
  const data = await res.json()
  return data
}

const massageData = (
  footerData: any,
  locale: string | undefined = 'en'
) => {
  const g = (keyWithoutLang: string) => `${footerData.data.attributes[`${keyWithoutLang}_${locale}`]}`

  return {
    description: g("description"),
    address: g("address"),
    social_media_link_linkedin: footerData.data.attributes.social_media_link_linkedin,
    social_media_link_twitter: footerData.data.attributes.social_media_link_twitter,
    social_media_link_facebook: footerData.data.attributes.social_media_link_facebook,
    footer_tel: footerData.data.attributes.footer_tel,
    footer_fax: footerData.data.attributes.footer_fax,
    footer_email: footerData.data.attributes.footer_email,
    social_media_link_wechat: "https://dhrhnojxde2hk.cloudfront.net/Screenshot_2022_11_22_at_6_14_02_PM_81ff5d37a4.png"
  }
}

export const getFooterCms = async ({ lang }: { lang: string | undefined }) => {
  const useLocalCms = process.env.USE_LOCAL_CMS_DATA === 'true'
  const footerData = useLocalCms ? contactJson : await fetchFooterData()

  return massageData(footerData, lang)
}
