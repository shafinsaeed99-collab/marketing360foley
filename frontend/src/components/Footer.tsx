import { Link } from "react-router-dom"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-hero-bg py-16 px-6 md:px-12 lg:px-24 border-t border-border/40 text-muted-foreground relative z-10 overflow-hidden">
      {/* Structural layout grid */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Left Side: Logo and Address */}
        <div className="text-center md:text-left space-y-2">
          <Link to="/" className="text-lg font-semibold tracking-tight uppercase select-none">
            <span className="text-primary font-bold">MARKETING360</span> <span className="text-foreground font-bold">FOLEY</span>
          </Link>
          <p className="text-[10px] sm:text-xs font-light text-muted-foreground/60 tracking-wider">
            Operational Hub: Foley, AL. Serving clients globally.
          </p>
        </div>

        {/* Center: Legal / Links */}
        <div className="flex flex-wrap justify-center gap-6 text-[10px] sm:text-xs uppercase tracking-widest font-medium">
          <Link to="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
        </div>

        {/* Right Side: Copyright */}
        <div className="text-center md:text-right text-[10px] sm:text-xs font-mono text-muted-foreground/50 tracking-wider">
          &copy; {currentYear} MARKETING360 FOLEY // ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  )
}
