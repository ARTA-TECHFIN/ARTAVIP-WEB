import { ButtonAnimated } from '../ButtonAnimated'
import { textClass } from '../Text'

const SectionThankYou = () => {
  return (
    <div className="bg-arta-eggshell-100">
      <div className="arta-container mx-auto py-[88px]">
        <div className="bg-white p-12 shadow-blogPost">
          <h2 className={textClass.h6}>Thank you!</h2>
          <div className="mt-8 space-y-4 text-base">
            <p>
              {`Thank you for your prompt action in wanting to be part of the ARTA’s journey. We
              thank you for your application.`}
            </p>
            <p>
              Our Human Capital Management team will carefully review your application and will
              contact you should your profile meet our business requirements. If you do not hear
              from us for more than 4 weeks, please do assume your application has been
              unsuccessful.
            </p>
            <p>
              For more updates on ARTA TechFin, do visit our LinkedIn page:
              <a
                href="https://www.linkedin.com/company/arta-techfin-corporation-limited"
                target="_blank"
                rel="noreferrer"
              >{' '}
                https://www.linkedin.com/company/arta-techfin-corporation-limited
              </a>
            </p>
          </div>
          <ButtonAnimated className="w-full border-arta-sand-100 text-arta-sand-100 md:w-[174px] mt-8">
            {`View other jobs`}
          </ButtonAnimated>
        </div>
      </div>
    </div>
  )
}

export default SectionThankYou
