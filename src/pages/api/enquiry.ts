import type { NextApiRequest, NextApiResponse } from 'next'

import nodemailer from 'nodemailer'

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: 587,
  secure: false,
  logger: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

// recipient address must be verified with Amazon SES if sandbox mode is enabled.
const EMAIL_SENDER = 'noreply@artatechfin.com'
const ENQUIRT_EMAIL_RECIPIENT =
  process.env.ENQUIRY_RECIPIENT_EMAIL || 'katie.hu@keysocapp.com,jason@y714.com'

const JOIN_US_EMAIL_RECIPIENT =
  process.env.JOIN_US_RECIPIENT_EMAIL || 'katie.hu@keysocapp.com,jason@y714.com'

const ENQUIRY_TYPE = {
  enquiry: 'enquiry',
  job_apply: 'job_apply',
} as const

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const reqMessage = JSON.parse(req.body)

    // enquiryType: falsy/enquiry or job-apply
    const enquiryType = reqMessage.enquiryType || ENQUIRY_TYPE.enquiry

    if (!Object.values(ENQUIRY_TYPE).includes(enquiryType))
      throw new Error(
        `Invalid enquiry type. Expected: ${Object.values(ENQUIRY_TYPE)}, got: ${enquiryType}`
      )

    const sensitize = (str: string | undefined) => str?.replace(/</g, '&lt;').replace(/>/g, '&gt;')
    const toPlainText = (str: string | undefined) => str?.replace(/<[^>]*>/g, '')
    const toHumanCase = (str: string | undefined) =>
      str
        ?.replace(/_./g, (s) => s[1].toUpperCase())
        .replace(/^[a-z]/, (s) => s.toUpperCase())
        .replace(/[a-z][A-Z]/g, (s) => s[0] + ' ' + s[1])

    if (process.env.EMAIL_HOST) {
      if (enquiryType === ENQUIRY_TYPE.job_apply) {
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
          to: JOIN_US_EMAIL_RECIPIENT,
          subject: `[artatechfin.com] ${reqMessage.jobTitle} - ${reqMessage.firstName} ${reqMessage.lastName}`,
          text: toPlainText(html),
          html,
          attachments: [
            {
              filename: reqMessage.cvUploadName,
              content: reqMessage.cvUpload.split('base64,')[1],
              encoding: 'base64',
            },
            // for example:
            // {
            //   filename: 'text1.txt',
            //   content: 'aGVsbG8gd29ybGQh',
            //   encoding: 'base64',
            // },
          ],
        }
        console.log('Sending email: ', message)
        await transporter.sendMail(message)
      } else {
        const html = `
  <p>Name: ${sensitize(reqMessage.name)}</p>
  ${sensitize(reqMessage.company) ? `<p>Company Name: ${sensitize(reqMessage.company)}</p>` : ''}
  ${sensitize(reqMessage.jobTitle) ? `<p>Job Title: ${sensitize(reqMessage.jobTitle)}</p>` : ''}
  <p>Email Address: ${sensitize(reqMessage.email)}</p>
  ${sensitize(reqMessage.phone) ? `<p>Contact Number: ${sensitize(reqMessage.phone)}</p>` : ''}
  <p>Enquiry Details: ${sensitize(reqMessage.message)}</p>`

        const message = {
          from: EMAIL_SENDER,
          to: ENQUIRT_EMAIL_RECIPIENT,
          subject: `${reqMessage.topic} Enquiry from ${reqMessage.name}`,
          text: toPlainText(html),
          html,
        }
        console.log('Sending email: ', message)
        await transporter.sendMail(message)
      }
    } else {
      await delay(1000)
    }

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
