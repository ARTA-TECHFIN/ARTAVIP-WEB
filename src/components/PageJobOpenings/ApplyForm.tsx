import { InputField } from '../InputField'
import { InputText } from '../InputText'
import { InputTextArea } from '../InputTextArea'
import { InputFile } from '../InputFile'
import { textClass } from '../Text'
import { ButtonAnimated } from '../ButtonAnimated'

const Applyform = () => {
  return (
    <form>
      <fieldset>
        <h2 className={`${textClass.h2_style2} mb-8`}>{`Apply`}</h2>
        <div className="grid grid-cols-2 gap-x-8 gap-y-6">
          <div className="col-span-1">
            <InputField label="First name*">
              <InputText placeholder="Tai Man" />
            </InputField>
          </div>
          <div className="col-span-1">
            <InputField label="Surname*">
              <InputText placeholder="Chan" />
            </InputField>
          </div>
          <div className="col-span-1">
            <InputField label="Email*">
              <InputText placeholder="abc@abc.com" />
            </InputField>
          </div>
          <div className="col-span-1">
            <InputField label="Contact number*">
              <InputText />
            </InputField>
          </div>
          <div className="col-span-1">
            <InputField label="Linkedin Profile*">
              <InputText />
            </InputField>
          </div>
          <div className="col-span-1"></div>
          <div className="col-span-1">
            <InputField label="Latest Monthly Basic Salary*">
              <InputText placeholder="HKD" />
            </InputField>
          </div>

          <div className="col-span-1">
            <InputField label="Expected Salary*">
              <InputText placeholder="HKD" />
            </InputField>
          </div>

          <div className="col-span-full">
            <InputField label="CV upload*">
              <InputFile />
            </InputField>
          </div>

          <div className="col-span-full">
            <InputField label="Brief introduction">
              <InputTextArea />
              <span
                className={`${textClass.caption} mt-2 font-bold tracking-widest text-arta-sand-100 `}
              >
                Max. 500 characters
              </span>
            </InputField>
          </div>

          <ButtonAnimated
            extraProps={{ type: 'submit' }}
            className="w-full border-arta-sand-100 text-arta-sand-100 md:w-[120px]"
          >
            {`submit`}
          </ButtonAnimated>
        </div>
      </fieldset>
    </form>
  )
}

export default Applyform
