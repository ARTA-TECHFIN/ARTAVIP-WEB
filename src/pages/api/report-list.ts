import type { NextApiRequest, NextApiResponse } from 'next'

const apiEndpoint = process.env.REPORT_API_ENDPOINT
const apiKey = process.env.REPORT_API_KEY
const pageSizeDefault = 10

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const { page, year, lang, reportType, pageSize } = req.query // reportType: r, acl

  const yearOrLatest = year || 'latest'
  const pageSizeOrAll = '' // yearOrLatest === 'latest' ? '' : `/${pageSize || pageSizeDefault}`
  const endpoint = `${apiEndpoint}/${lang}/byType/${reportType}/${yearOrLatest}${pageSizeOrAll}?apikey=${apiKey}&page=${page}`
  const response = await fetch(endpoint)
  const result = await response.json()

  res.status(response.status).json(result)
}
