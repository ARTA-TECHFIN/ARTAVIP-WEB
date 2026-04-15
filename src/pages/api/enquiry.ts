import type { NextApiRequest, NextApiResponse } from 'next'
import { useRouter } from 'next/router'
import nodemailer from 'nodemailer'
import  mailJson from 'apidata/mail.json'
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
const EMAIL_GM_RECIPIENT ='cs.am@artaam.com'
// const EMAIL_GM_RECIPIENT ='guang.li@artatechfin.com'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const reqMessage = JSON.parse(req.body)

    const g = (pageData: any, locale: any, keyWithoutLang: string) =>`${pageData[`${keyWithoutLang}_${locale}`]}`
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
    let html=''
    // eslint-disable-next-line react-hooks/rules-of-hooks
    console.log("now:"+reqMessage.locale)
    if(reqMessage.locale ==="en"){
      html = `
      <p>${g(mailJson,reqMessage.locale,'withdral_h1')} ${sensitize(reqMessage.name)},</p>
      <p>${g(mailJson,reqMessage.locale,'withdral_h2')}</p>
      <p>Full Name: ${sensitize(reqMessage.name)}（${sensitize(reqMessage.contract_no)}）</p>
      ${sensitize(reqMessage.mail_address) ? `<p>Email: ${sensitize(reqMessage.mail_address)}</p>` : ''}
       <p>Phone: ${sensitize(reqMessage.phone)}</p>
      <p>Withdrawal Amount:  ${sensitize(reqMessage.currency)} ${sensitize(reqMessage.amount)}</p>
      <p>${g(mailJson,reqMessage.locale,'withdral_h3')}</p>
      <p>${g(mailJson,reqMessage.locale,'withdral_h4')}</p>
      <p>${g(mailJson,reqMessage.locale,'withdral_h5')}</p>
      <p>${g(mailJson,reqMessage.locale,'withdral_h6')}</p>
      `
    }
    if(reqMessage.locale ==="sc"){
      html = `<p>${g(mailJson,reqMessage.locale,'withdral_h1')}</p>
      <p>${g(mailJson,reqMessage.locale,'withdral_h2')}</p>
      <p>姓名: ${sensitize(reqMessage.name)}（${sensitize(reqMessage.contract_no)}）</p>
      ${sensitize(reqMessage.mail_address) ? `<p>邮箱: ${sensitize(reqMessage.mail_address)}</p>` : ''}
       <p>电话: ${sensitize(reqMessage.phone)}</p>
      <p>转出金额:  ${sensitize(reqMessage.currency)} ${sensitize(reqMessage.amount)}</p>
      <p>${g(mailJson,reqMessage.locale,'withdral_h3')}</p>
      <p>${g(mailJson,reqMessage.locale,'withdral_h4')}</p>
      <p>${g(mailJson,reqMessage.locale,'withdral_h5')}</p>
      <p>${g(mailJson,reqMessage.locale,'withdral_h6')}</p>`
    }
    if(reqMessage.locale ==="tc"){
      html = `<p>${g(mailJson,reqMessage.locale,'withdral_h1')}</p>
      <p>${g(mailJson,reqMessage.locale,'withdral_h2')}</p>
      <p>姓名: ${sensitize(reqMessage.name)}（${sensitize(reqMessage.contract_no)}）</p>
      ${sensitize(reqMessage.mail_address) ? `<p>郵箱: ${sensitize(reqMessage.mail_address)}</p>` : ''}
       <p>電話: ${sensitize(reqMessage.phone)}</p>
      <p>轉出金額:  ${sensitize(reqMessage.currency)} ${sensitize(reqMessage.amount)}</p>
      <p>${g(mailJson,reqMessage.locale,'withdral_h3')}</p>
      <p>${g(mailJson,reqMessage.locale,'withdral_h4')}</p>
      <p>${g(mailJson,reqMessage.locale,'withdral_h5')}</p>
      <p>${g(mailJson,reqMessage.locale,'withdral_h6')}</p>`
    }

    

    if(!reqMessage.mail_address){
      console.log('mail_address is empty: ')
      throw new Error('Network response was not ok')
    }   

    const message = {
      from: EMAIL_SENDER,
      to: reqMessage.mail_address,
      cc: EMAIL_GM_RECIPIENT,
      subject: `${g(mailJson,reqMessage.locale,'withdral_h0')} - ${reqMessage.name}- （${reqMessage.contract_no}）`,
      text: toPlainText(html),
      html,
    }
    // console.log('Sending email: ', message)
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
