import type { NextApiRequest, NextApiResponse } from 'next'

const apiEndpoint = process.env.REPORT_ADVANCED_API_ENDPOINT

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const { lang, reportType } = req.query

  const endpoint = `${apiEndpoint}/${reportType}_${lang}.php`
  const response = await fetch(endpoint)
//   const result = await response.json()
const result = await response.json()
  res.status(response.status).json(result)
}
