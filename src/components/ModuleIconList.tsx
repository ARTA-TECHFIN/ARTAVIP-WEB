import Image from 'next/image'

type iconT = {
  icon: string
  title: string
  body: string
}

type propsT = {
  iconList: iconT[]
}

const ModuleIconList = (props: propsT) => {
  return (
    <div>
      {props.iconList.map((item, index) => (
        <div key={index}>
          <Image src={item.icon} alt="" fill />
          <h4>{item.title}</h4>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  )
}

export { ModuleIconList }
