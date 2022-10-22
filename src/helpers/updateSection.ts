import { gsap } from 'gsap'

export const scrolling = {
  enabled: false,
  events: 'scroll,wheel,touchmove,pointermove'.split(','),
  prevent: (e: Event) => e.preventDefault(),
  disable() {
    if (scrolling.enabled) {
      scrolling.enabled = false
      window.addEventListener('scroll', gsap.ticker.tick, { passive: true })
      scrolling.events.forEach((e, i) =>
        (i ? document : window).addEventListener(e, scrolling.prevent, {
          passive: false,
        })
      )
    }
  },
  enable() {
    if (!scrolling.enabled) {
      scrolling.enabled = true
      window.removeEventListener('scroll', gsap.ticker.tick)
      scrolling.events.forEach((e, i) =>
        (i ? document : window).removeEventListener(e, scrolling.prevent)
      )
    }
  },
}



export function updateSectionScroll(
  section: Element,
) {
  if (scrolling.enabled) {
    scrolling.disable();
    const classy = section.classList.contains('double');

    gsap.to(window, {
      scrollTo: { y: section, autoKill: false },
      onComplete: !classy ? scrolling.enable : scrolling.disable,
      duration: 1,
    })
  }
}