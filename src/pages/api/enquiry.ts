import type { NextApiRequest, NextApiResponse } from 'next'

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('[Enquiry Form submitted]. req.body', req.body)
  await delay(3000)
  res.status(200).json({})
}
