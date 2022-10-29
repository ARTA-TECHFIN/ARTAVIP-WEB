import { Fragment } from 'react'
import { Hr } from 'src/components/Hr'
import { textClass } from 'src/components/Text'

type listT = {
  title: string
  body: string
}

type propsT = {
  header: string
  title: string
  list: listT[]
  headerPosition?: 'left' | 'right'
}

// TODO: list body support html
// TODO: animation
// TODO: responsive
// TODO: headerPosition
const ModuleTextColList = ({ header, title, list }: propsT) => {
  return (
    <div className="arta-container relative grid grid-cols-12 py-36">
      <div className="col-span-4 flex items-center">
        <h2 className={textClass.h2_style2}>{header}</h2>
      </div>
      <div className="col-span-8">
        <h3 className={textClass.h3_style2}>{title}</h3>
        <Hr />
        {list.map((item, index) => (
          <Fragment key={index}>
            <h4 className={`${textClass.title} mb-2`}>{item.title}</h4>
            <p className={`${textClass.body_regular} max-w-[80%]`}>{item.body}</p>
            <Hr />
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export { ModuleTextColList }
