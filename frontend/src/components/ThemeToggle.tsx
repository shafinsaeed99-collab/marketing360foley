import { useState, useEffect } from "react"
import { Sun, Moon } from "lucide-react"

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme")
      if (saved) return saved === "dark"
      return true // default to dark
    }
    return true
  })

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      root.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [isDark])

  // Remove no-transition class shortly after initial mount to prevent flash
  useEffect(() => {
    const timer = setTimeout(() => {
      document.documentElement.classList.remove("no-transition")
      document.body.classList.remove("no-transition")
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <button
      type="button"
      onClick={() => setIsDark((prev) => !prev)}
      className="relative w-10 h-10 rounded-full border border-border/60 bg-nav-button flex items-center justify-center hover:border-primary/50 hover:shadow-[0_0_12px_rgba(168,85,247,0.25)] transition-all duration-300 ease-in-out cursor-pointer select-none group overflow-hidden"
      aria-label="Toggle theme"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {/* Sun icon (visible in dark mode) */}
        <Sun
          className={`w-4.5 h-4.5 absolute transition-all duration-300 ease-in-out transform ${
            isDark
              ? "opacity-100 rotate-0 scale-100 text-amber-400"
              : "opacity-0 rotate-90 scale-50 text-amber-400 pointer-events-none"
          }`}
        />
        {/* Moon icon (visible in light mode) */}
        <Moon
          className={`w-4.5 h-4.5 absolute transition-all duration-300 ease-in-out transform ${
            isDark
              ? "opacity-0 -rotate-90 scale-50 text-primary pointer-events-none"
              : "opacity-100 rotate-0 scale-100 text-primary"
          }`}
        />
      </div>
    </button>
  )
}
