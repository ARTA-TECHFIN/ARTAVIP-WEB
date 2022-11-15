import { ButtonAnimated } from '../ButtonAnimated'
import { InputDropdown } from '../InputDropdown'
import { InputField } from '../InputField'
import { InputText } from '../InputText'
import { InputTextArea } from '../InputTextArea'
import { textClass } from '../Text'

const topicOptions = [
  { value: 'General', label: 'General' },
  { value: 'Media', label: 'Media' },
  { value: 'Other', label: 'Other' },
]

const t = {
  title: 'Enquiry Form',
  question_topic: 'What are you going to enquire?',
  question_name: 'Name',
  question_company: 'Company Name',
  question_jobTitle: 'Job Title',
  question_email: 'Email Address',
  question_phone: 'Contact Number',
  question_message: 'Brief Introduction',
  question_message_hints: 'Max. 500 characters',
  question_submit: 'Submit',
}

const EnquiryForm = () => {
  return (
    <div className="arta-container bg-arta-sand-200 py-12">
      <h2 className={`${textClass.h2_style2} mb-6`}>{t.title}</h2>
      <form className="grid gap-10 bg-arta-snow-100 p-6 shadow-2xl">
        <InputField label={t.question_topic}>
          <InputDropdown options={topicOptions} name="topic" />
        </InputField>
        <InputField label={t.question_name}>
          <InputText name="name" />
        </InputField>
        <InputField label={t.question_company}>
          <InputText name="company" />
        </InputField>
        <InputField label={t.question_jobTitle}>
          <InputText name="jobTitle" />
        </InputField>
        <InputField label={t.question_email}>
          <InputText name="email" />
        </InputField>
        <InputField label={t.question_phone}>
          <InputText name="phone" />
        </InputField>
        <InputField label={t.question_message}>
          <InputTextArea name="message" />
          <span className={`${textClass.caption} mt-2 text-arta-sand-100`}>
            {t.question_message_hints}
          </span>
        </InputField>
        <ButtonAnimated
          extraProps={{ type: 'submit' }}
          className="w-full border-arta-sand-100 text-arta-sand-100 "
        >
          {t.question_submit}
        </ButtonAnimated>
      </form>
    </div>
  )
}

export { EnquiryForm }
