import type { NextApiRequest, NextApiResponse } from 'next'

import nodemailer from 'nodemailer'

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const transporter = nodemailer.createTransport({
  host: 'smtp-mail.outlook.com',
  port: 587,
  secure: false,
  logger: true,
  auth: {
    user: 'inquiry@artatechfin.com',
    pass: 'Art@279279',
  },
})

// recipient address must be verified with Amazon SES if sandbox mode is enabled.
const EMAIL_SENDER = 'inquiry@artatechfin.com'
const EMAIL_GM_RECIPIENT ='cs@artatechfin.com'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const reqMessage = JSON.parse(req.body)

    // enquiryType: falsy/enquiry or job-apply

    const sensitize = (str: string | undefined) => str?.replace(/</g, '&lt;').replace(/>/g, '&gt;')
    const toPlainText = (str: string | undefined) => str?.replace(/<[^>]*>/g, '')
    const toHumanCase = (str: string | undefined) =>
      str
        ?.replace(/_./g, (s) => s[1].toUpperCase())
        .replace(/^[a-z]/, (s) => s.toUpperCase())
        .replace(/[a-z][A-Z]/g, (s) => s[0] + ' ' + s[1])

    const { cvUpload, cvUploadName, ...bodyObj } = reqMessage

    delete bodyObj.acceptedTerms
    delete bodyObj.enquiryType

    const html = Object.entries(bodyObj)
      .map(
        ([key, value]) => {
          return `<p>${toHumanCase(key)}: ${sensitize(value as string) || '--'}</p>`
        }
      )
      .join('\n')

    const message = {
      from: EMAIL_SENDER,
      to: EMAIL_GM_RECIPIENT,
      subject: `Inquiry from [artagm.com] -  ${reqMessage.name}`,
      text: toPlainText(html),
      html,
    }
    console.log('Sending email: ', message)
    await transporter.sendMail(message)


    res.status(200).json({})
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '8mb',
    },
  },
}
