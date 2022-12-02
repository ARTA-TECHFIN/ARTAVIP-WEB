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


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    console.log('[Enquiry Form submitted]. req.body: ', req.body || 'No body')

    if (process.env.EMAIL_HOST) {
      const message = {
        // 554 error if from is not set
        // https://www.courier.com/error-solutions/amazon-ses-554-message-rejected-email-address-is-not-verified/
        // need to confirm email address in AWS SES
        // sender address must be verified with Amazon SES.
        // recipient address must be verified with Amazon SES if sandbox mode is enabled.
        from: 'noreply@artatechfin.com',
        to: `${process.env.ENQUIRY_RECIPIENT_EMAIL || 'katie.hu@keysocapp.com,jason@y714.com'}`,
        subject: `Media Enquiry from ${req.body.name}`,
        text: 'Plaintext version of the message',
        html: `<p>Name: ${req.body.name}</p><p>Company Name: ${req.body.email}</p><p>Job Title: ${req.body.job_title}</p><p>Email Address: ${req.body.email}</p><p>Contact Number: ${req.body.phone}</p><p>Enquiry Details: ${req.body.message}</p><p>${JSON.stringify(req.body)}</p>`,
      }

      await transporter.sendMail(message)
    } else {
      await delay(1000)
    }

    res.status(200).json({})
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal server error' })
  }
}
