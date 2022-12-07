import { useEffect } from 'react';

function isTouchDevice() {
  if (typeof window === 'undefined') return null;

  return (
    'ontouchstart' in window || navigator.maxTouchPoints > 0
    // ||(navigator.msMaxTouchPoints > 0) seems to be deprecated
  );
}

function useAppHeight() {
  useEffect(() => {
    // for mobile devices
    let outerHeight = 0;
    const handleResize = () => {
      const root = document.documentElement;
      if (window.outerHeight !== outerHeight) {
        root.style.setProperty(`--app-height`, `${window.innerHeight}px`);
        outerHeight = window.outerHeight;
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
}

export { isTouchDevice, useAppHeight };
