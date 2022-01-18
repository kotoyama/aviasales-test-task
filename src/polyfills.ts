export async function loadPolyfills() {
  if (typeof window.IntersectionObserver === 'undefined') {
    await import('intersection-observer')
  }

  if (!('scrollBehavior' in document.documentElement.style)) {
    const smoothscroll = await import('smoothscroll-polyfill')
    smoothscroll.polyfill()
  }
}
