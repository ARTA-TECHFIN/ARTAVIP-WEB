import Link from 'next/link'
import cn from 'classnames'

type propsT = {
  as?: 'a' | 'button'
  href?: string
  children: string
  className?: string
  borderWidth?: 1 | 2
  extraProps?: any
}
const ButtonAnimated = (props: propsT) => {
  const { as = 'button', href = '', children, className, borderWidth = 1, extraProps } = props

  const Component = as === 'a' ? Link : 'button'

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
        'transition duration-300 ease-out',
        borderWidth === 1 ? 'border' : 'border-2',
        className
      )}
      {...extraProps}
    >
      <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center space-x-4 bg-[#f1eded45] duration-300 will-change-transform group-hover:translate-x-0">
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
        <span>{children}</span>
      </span>
      <span className="ease absolute flex h-full w-full transform items-center justify-center transition-all duration-300 group-hover:translate-x-full">
        {children}
      </span>
      <span className="invisible relative">{children}</span>
    </Component>
  )
}

export { ButtonAnimated }
