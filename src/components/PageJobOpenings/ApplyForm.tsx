import { InputField } from '../InputField'
import { InputText } from '../InputText'
import { InputTextArea } from '../InputTextArea'
import { InputFile } from '../InputFile'
import { textClass } from '../Text'
import { ButtonAnimated } from '../ButtonAnimated'
import { useTranslation } from 'next-i18next'

const Applyform = () => {
  const { t } = useTranslation('common')
  return (
    <form>
      <fieldset>
        <h2 className={`${textClass.h2_style2} mb-8`}>{`${t("join_us.application_form")}`}</h2>
        <div className="grid grid-cols-2 gap-x-8 gap-y-6">
          <div className="col-span-1">
            <InputField label={`${t("join_us.first_name")}*`}>
              <InputText placeholder="Tai Man" />
            </InputField>
          </div>
          <div className="col-span-1">
            <InputField label={`${t("join_us.last_name")}*`}>
              <InputText placeholder="Chan" />
            </InputField>
          </div>
          <div className="col-span-1">
            <InputField label={`${t("join_us.email_address")}*`}>
              <InputText placeholder="abc@abc.com" />
            </InputField>
          </div>
          <div className="col-span-1">
            <InputField label={`${t("join_us.contact_number")}*`}>
              <InputText />
            </InputField>
          </div>
          <div className="col-span-1">
            <InputField label={`${t("join_us.linkedin")}*`}>
              <InputText />
            </InputField>
          </div>
          <div className="col-span-1"></div>
          <div className="col-span-1">
            <InputField label={`${t("join_us.last_salary")}*`}>
              <InputText placeholder={t("join_us.dollar")} />
            </InputField>
          </div>

          <div className="col-span-1">
            <InputField label={`${t("join_us.expected_salary")}*`}>
              <InputText placeholder={t("join_us.dollar")} />
            </InputField>
          </div>

          <div className="col-span-full">
            <InputField label={`${t("join_us.cv_upload")}*`}>
              <InputFile />
            </InputField>
          </div>

          <div className="col-span-full">
            <InputField label={`${t("join_us.brief_introduction")}*`}>
              <InputTextArea />
              <span
                className={`${textClass.caption} mt-2 font-bold tracking-widest text-arta-sand-100 `}
              >
                {t("join_us.upload_limitation")}
              </span>
            </InputField>
          </div>

          <ButtonAnimated
            extraProps={{ type: 'submit' }}
            className="w-full border-arta-sand-100 text-arta-sand-100 md:w-[120px]"
          >
            {t("join_us.submit")}
          </ButtonAnimated>
        </div>
      </fieldset>
    </form>
  )
}

export default Applyform
