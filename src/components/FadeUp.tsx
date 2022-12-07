import React from 'react';
import { gsap } from 'gsap';
import cn from 'classnames';

interface Props {
  children: React.ReactNode;
  className?: string;
  startPos?: number;
}

export function FadeUp({ children, className, startPos = 75 }: Props) {
  const ref = React.useRef(null);
  const [isActive, setIsActive] = React.useState(false);

  React.useEffect(() => {
    if (ref?.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: `top ${window.innerWidth > 767? startPos : 95}%`,
          onEnter: () => {
            setIsActive(() => true);
          },
        },
      });
      () => {
        tl.kill();
      };
    }
  }, [startPos]);
  return (
    <div
      className={cn(
        isActive ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0',
        className,
        `transition-all duration-[1.2s] ease-out`
      )}
      ref={ref}
    >
      {children}
    </div>
  );
}
