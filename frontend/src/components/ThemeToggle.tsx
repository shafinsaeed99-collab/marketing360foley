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

  // Set initial class on mount
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
    }
  }, [])

  return (
    <button
      onClick={() => setIsDark((prev) => !prev)}
      className="relative w-10 h-10 rounded-full border border-border/60 bg-nav-button flex items-center justify-center hover:border-primary/50 hover:shadow-[0_0_12px_rgba(168,85,247,0.25)] transition-all duration-300 cursor-pointer select-none group"
      aria-label="Toggle theme"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {/* Sun icon (visible in dark mode) */}
      <Sun
        className={`w-4.5 h-4.5 absolute transition-all duration-300 ${
          isDark
            ? "opacity-100 rotate-0 scale-100 text-amber-400"
            : "opacity-0 rotate-90 scale-0 text-amber-400"
        }`}
      />
      {/* Moon icon (visible in light mode) */}
      <Moon
        className={`w-4.5 h-4.5 absolute transition-all duration-300 ${
          isDark
            ? "opacity-0 -rotate-90 scale-0 text-primary"
            : "opacity-100 rotate-0 scale-100 text-primary"
        }`}
      />
    </button>
  )
}
