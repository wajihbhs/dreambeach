export function useReveal() {
  function observe(selector = '.reveal') {
    const elements = document.querySelectorAll(selector)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12 },
    )
    elements.forEach((el) => observer.observe(el))
  }

  return { observe }
}
