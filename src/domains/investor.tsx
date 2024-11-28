import { langT } from './i18n'

const host = process.env.NEXT_PUBLIC_GM_HOSTING_PATH
const reportEndpoint = `${host}/api/report-list`
const advancedReportEndpoint = `${host}/api/advanced-report-list`

const fileType = {
  ANN: 'Announcement',
  RAN: 'Result announcement',
  AR: 'Annual report',
  IR: 'Interim report',
  ESR: 'Environmental and social responsibility report',
  NDR: 'Next day disclosure return',
  MR: 'Monthly returns',
  PF: 'Proxy form',
  CIR: 'Circulars',
  LD: 'Listing document',
  CD: 'Constitutional document',
}

type fileTypeT = keyof typeof fileType

export interface reportItemT {
  doc_date: string // "2022-07-15",
  filetype: fileTypeT
  // filetype2: string
  headline: string // "Annual Report 2021\/2022",
  headline_en: string // "Annual Report 2021\/2022",
  headline_tc: string // "Annual Report 2021\/2022",
  headline_sc: string // "Annual Report 2021\/2022",
  overseas_announcement: number
  url: string // "https:\/\/doc.irasia.com\/listco\/hk\/artatechfin\/annual\/2022\/ar2022.pdf",
  file: string // "https:\/\/doc.irasia.com\/listco\/hk\/artatechfin\/annual\/2022\/ar2022.pdf",
  file_en: string // "https:\/\/doc.irasia.com\/listco\/hk\/artatechfin\/annual\/2022\/ar2022.pdf",
  file_tc: string // "https:\/\/doc.irasia.com\/listco\/hk\/artatechfin\/annual\/2022\/ar2022.pdf",
  file_sc: string // "https:\/\/doc.irasia.com\/listco\/hk\/artatechfin\/annual\/2022\/ar2022.pdf",
  file_id: number
  cover_url: string // "https:\/\/www.irasia.com\/listco\/hk\/artatechfin\/annual\/cover2022.jpg",
  cover_hires_url: null
  updatetime: string // "2022-07-15 17:07:25"
}

export interface reportItemT2 {
  attributes: {
  doc_date: string // "2022-07-15",
  filetype: fileTypeT
  // filetype2: string
  headline: string // "Annual Report 2021\/2022",
  headline_en: string // "Annual Report 2021\/2022",
  headline_tc: string // "Annual Report 2021\/2022",
  headline_sc: string // "Annual Report 2021\/2022",
  overseas_announcement: number
  url: string // "https:\/\/doc.irasia.com\/listco\/hk\/artatechfin\/annual\/2022\/ar2022.pdf",
  file: string // "https:\/\/doc.irasia.com\/listco\/hk\/artatechfin\/annual\/2022\/ar2022.pdf",
  pdf_en: string // "https:\/\/doc.irasia.com\/listco\/hk\/artatechfin\/annual\/2022\/ar2022.pdf",
  pdf_tc: string // "https:\/\/doc.irasia.com\/listco\/hk\/artatechfin\/annual\/2022\/ar2022.pdf",
  pdf_sc: string // "https:\/\/doc.irasia.com\/listco\/hk\/artatechfin\/annual\/2022\/ar2022.pdf",
  file_id: number
  cover_url: string // "https:\/\/www.irasia.com\/listco\/hk\/artatechfin\/annual\/cover2022.jpg",
  cover_hires_url: null
  updatetime: string // "2022-07-15 17:07:25"
  }
}

export interface reportAnnounceItemT {
  doc_date: string // "2022-07-15",
  filetype: fileTypeT
  // filetype2: string
  headline: string // "Annual Report 2021\/2022",
  overseas_announcement: number
  file: string // "https:\/\/doc.irasia.com\/listco\/hk\/artatechfin\/annual\/2022\/ar2022.pdf",
  file_id: number
  cover_url: string // "https:\/\/www.irasia.com\/listco\/hk\/artatechfin\/annual\/cover2022.jpg",
  cover_hires_url: null
  updatetime: string // "2022-07-15 17:07:25"
}

interface apiResponseT<listItemT extends unknown> {
  status: number
  message: string
  data: {
    lang: string
    company: string
    type: 'r' | 'acl' | 'b03' | 't26' | 't11t13' | 'c' | 'l'
    // keyword: null
    page: number
    take: number | null
    total: number
    results: listItemT[]
  }
}

export interface advancedReportItemT {
  year: string // "2022",
  doc_date: string // "2022-07-15",
  filetype: fileTypeT
  // filetype2: string
  headline: string // "Annual Report 2021\/2022",
  url: string // "https:\/\/doc.irasia.com\/listco\/hk\/artatechfin\/annual\/2022\/ar2022.pdf",
}

interface apiResponse2T<listItemT extends unknown> {
  status: number
  message: string
  data: {
    lang: string
    company: string
    max_year: number
    min_year: number
    results: listItemT[]
  }
}

export interface reportRequestT {
  lang: langT
  page: number
  year?: number | null
  reportType: 'r' | 'acl' | 'b03' | 't26' | 't11t13' | 'c' | 'l'
}

export interface advancedReportRequestT {
  lang: langT
  reportType: 'reports' | 'results'
}

export const getReportList = async ({ lang, page, year, reportType }: reportRequestT) => {
  const endpoint =
    reportEndpoint + `?lang=${lang}&reportType=${reportType}&year=${year || ''}&page=${page}`
  const res = await fetch(endpoint)
  const result = await res.json()

  if (result.status !== 200) throw new Error(result.message)

  return result as apiResponseT<reportItemT>
}

export const getAdvancedReportList = async ({ lang, reportType }: advancedReportRequestT) => {
  const endpoint = advancedReportEndpoint + `?lang=${lang}&reportType=${reportType}`
  const res = await fetch(endpoint)

  const result = await res.json()
  if (result.status !== 200) throw new Error(result.message)

  return result as apiResponse2T<advancedReportItemT>
}

// TODO: generate this from cms
export type reportCmsT = Awaited<ReturnType<typeof getReportCms>>

export const getReportCms = async ({ lang }: { lang: langT }) => {
  // TODO: get cms from api
  return {
    heroBanner: {
      title: 'Investor Relation',
      description: `Established in October 2021, Arta AM Corporation Limited (“Arta AM”) (0279.HK) is a Hong Kong-based financial services institution that aspires to enhance applications in finance through the use of technology (“Technology in Finance” or “TechFin”).`,
      image: '/images/investor-relations/top-banner.jpg',
      mobileImage: '/images/investor-relations/mobile-top-banner.png',
      label: '',
    },
  }
}
