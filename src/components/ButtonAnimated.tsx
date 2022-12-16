import Link from 'next/link'
import cn from 'classnames'

type propsT = {
  as?: 'a' | 'button'
  href?: string
  children: any
  className?: string
  borderWidth?: 1 | 2
  extraProps?: any
  external?: boolean
}
const ButtonAnimated = (props: propsT) => {
  const {
    as = 'button',
    href = '',
    children,
    className,
    borderWidth = 1,
    extraProps,
    external = false,
  } = props

  const Component = as === 'a' ? (external ? 'a' : Link) : 'button'

  return (
    <Component
      href={href}
      className={cn(
        'arta-transition-fix',
        'px-8 py-2 font-Neue text-sm md:text-base',
        'group relative inline-flex items-center justify-center overflow-hidden',
        'rounded-full', // border-white
        // 'font-Neue text-[3.6em] text-white',
        // 'py-[0.5em] px-[2em]  lg:px-[3em] lg:text-[1em]',
        // 'transition duration-300 ease-out',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className?.indexOf('border-arta-sand-100') != -1
          ? 'group-hover-bg-arta-sand-100'
          : className?.indexOf('border-arta-black') != -1
          ? 'group-hover-bg-arta-black'
          : 'group-hover-bg-arta-p4-eggshell',
        borderWidth === 1 ? 'border' : 'border-2',
        className
      )}
      target={external ? '_blank' : '_self'}
      {...extraProps}
    >
      <span className="ease flex h-full w-full transform items-center justify-center transition-all duration-300">
        {children}
      </span>
    </Component>
  )
}

export { ButtonAnimated }
