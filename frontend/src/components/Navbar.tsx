import { useState } from "react"
import { Button } from "./ui/Button"

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about-us" },
  { label: "Projects", href: "#projects" },
  { label: "Team", href: "#team" },
  { label: "Contacts", href: "#contacts" }
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 sm:px-8 lg:px-16 py-5 bg-transparent backdrop-blur-[2px]">
        {/* Left: Logo */}
        <a href="#" className="text-foreground text-xl font-semibold tracking-tight select-none">
          SENTINEL<span className="text-primary font-bold">.</span>
        </a>

        {/* Center: Nav links (desktop) */}
        <div className="hidden md:flex gap-8 items-center">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: CTA + Hamburger */}
        <div className="flex items-center gap-4">
          <a href="#contacts" className="hidden md:inline-flex">
            <Button variant="navCta" size="lg" className="px-6 py-2.5">
              Get Quote
            </Button>
          </a>

          {/* Hamburger button (mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] cursor-pointer select-none"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-[2px] bg-foreground rounded-full transition-all duration-300 origin-center ${
                isOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-foreground rounded-full transition-all duration-300 ${
                isOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-foreground rounded-full transition-all duration-300 origin-center ${
                isOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* ──── Mobile Fullscreen Menu ──── */}
      <div
        className={`fixed inset-0 z-40 flex flex-col transition-all duration-500 md:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/30 backdrop-blur-2xl border border-white/5 shadow-[inset_0_1px_20px_rgba(255,255,255,0.05)]"
          onClick={() => setIsOpen(false)}
        />

        {/* Menu content */}
        <div className="relative z-10 flex flex-col items-center justify-center flex-1 gap-6 px-6">
          {NAV_LINKS.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-2xl font-semibold text-foreground/90 hover:text-primary uppercase tracking-widest transition-all duration-300 ${
                isOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: isOpen ? `${idx * 80}ms` : "0ms" }}
            >
              {link.label}
            </a>
          ))}

          {/* CTA in mobile menu */}
          <a
            href="#contacts"
            onClick={() => setIsOpen(false)}
            className={`mt-6 transition-all duration-300 ${
              isOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: isOpen ? `${NAV_LINKS.length * 80}ms` : "0ms" }}
          >
            <Button variant="navCta" size="lg" className="px-8 py-3 text-base">
              Get Quote
            </Button>
          </a>
        </div>
      </div>
    </>
  )
}
