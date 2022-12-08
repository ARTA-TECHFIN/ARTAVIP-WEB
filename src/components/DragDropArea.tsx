import cn from 'classnames'
import { useState } from 'react'

type propsT = {
  children: React.ReactNode
  className?: string
  onDrop: (files: File[]) => void
}
const DragDropArea = ({ children, className, onDrop }: propsT) => {
  const [dragging, setDragging] = useState(false)

  return (
    <div
      className={cn(className, dragging && 'border-2 border-blue-600')}
      onDrop={(evt) => {
        evt.preventDefault()

        setDragging(false)

        const fileList: File[] = []
        if (evt.dataTransfer.items) {
          const itemList = Array.from(evt.dataTransfer.items)
          itemList.forEach((item, i) => {
            if (item.kind === 'file') {
              const file = item.getAsFile()
              if (file) fileList.push(file)
            }
          })
        } else {
          fileList.push(...Array.from(evt.dataTransfer.files))
        }

        onDrop(fileList)
      }}
      onDragLeave={(evt) => {
        evt.preventDefault()
        setDragging(false)
      }}
      onDragOver={(evt) => {
        evt.preventDefault()
        setDragging(true)
      }}
    >
      {children}
    </div>
  )
}

const openFilePicker = (
  onSelect: (files: File[]) => void,
  inputProps?: { accept: string } // ComponentProps<"input">
) => {
  const input = document.createElement('input')
  input.type = 'file'
  input.multiple = true
  input.accept = inputProps?.accept || ''
  input.onchange = (evt) => {
    const fileList = Array.from(input.files || [])
    onSelect(fileList)
  }
  input.click()
}

const toBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = (error) => reject(error)
  })

export { DragDropArea, openFilePicker, toBase64 }
