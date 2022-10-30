import type { NextApiRequest, NextApiResponse } from 'next'

const apiEndpoint = process.env.REPORT_API_ENDPOINT
const apiKey = process.env.REPORT_API_KEY
const pageSize = 10

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const { page, year, lang, reportType } = req.query // reportType: r, acl

  const yearOrLatest = year || 'latest'
  const endpoint = `${apiEndpoint}/${lang}/byType/${reportType}/${yearOrLatest}/${pageSize}?apikey=${apiKey}&page=${page}`
  const response = await fetch(endpoint)
  const result = await response.json()

  res.status(response.status).json(result)
}
