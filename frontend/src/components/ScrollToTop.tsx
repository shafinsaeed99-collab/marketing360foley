import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // If there's a hash, scroll to the element
      const el = document.querySelector(hash)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100)
        return
      }
    }
    // Otherwise scroll to top
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
