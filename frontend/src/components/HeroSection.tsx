import VideoBackground from "./VideoBackground"
import LogoMarquee from "./LogoMarquee"

export default function HeroSection() {
  return (
    <section className="dark relative min-h-screen flex flex-col overflow-hidden" style={{ backgroundColor: 'hsl(260, 87%, 3%)' }}>
      {/* ──── Background Video (looping, behind everything) ──── */}
      <VideoBackground />

      {/* ──── CSS Mesh Overlay (grid lines + glow nodes) ──── */}
      <div className="absolute inset-0 pointer-events-none z-[2]">
        <div className="absolute inset-0" style={{ backgroundColor: 'hsla(260, 87%, 3%, 0.25)' }} />
        {/* Grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Glowing ambient nodes */}
        <div className="absolute top-[25%] left-[20%] w-[150px] sm:w-[300px] h-[150px] sm:h-[300px] bg-primary/10 rounded-full blur-[60px] sm:blur-[100px] animate-pulse" />
        <div className="absolute bottom-[20%] right-[15%] w-[200px] sm:w-[450px] h-[200px] sm:h-[450px] bg-primary/5 rounded-full blur-[80px] sm:blur-[130px]" />

        {/* Blueprint line design */}
        <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="45%" x2="100%" y2="45%" stroke="hsl(var(--primary))" strokeWidth="0.5" strokeDasharray="4 12" />
          <line x1="35%" y1="0" x2="35%" y2="100%" stroke="hsl(var(--primary))" strokeWidth="0.5" strokeDasharray="4 12" />
          <circle cx="35%" cy="45%" r="4" fill="hsl(var(--primary))" className="animate-ping" />
          <circle cx="35%" cy="45%" r="3" fill="hsl(var(--primary))" />
        </svg>
      </div>

      {/* ──── Blurred Overlay Shape (centered behind content) ──── */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] sm:w-[700px] lg:w-[984px] h-[300px] sm:h-[400px] lg:h-[527px] opacity-50 bg-gray-950 blur-[50px] sm:blur-[82px] pointer-events-none z-[5]"
      />

      {/* ──── Dark overlay ──── */}
      <div className="absolute inset-0 bg-black/15 z-[15] pointer-events-none" />

      {/* ──── Hero Content (anchored to bottom-left via flex) ──── */}
      <div className="relative z-20 pointer-events-none flex-1 flex items-end w-full">
        <div className="w-full max-w-[90%] sm:max-w-md lg:max-w-2xl px-6 md:px-10 pb-8 sm:pb-12 md:pb-16 pt-28 sm:pt-32 flex flex-col justify-end">
          {/* Heading */}
          <h1
            className="text-[clamp(2.5rem,8vw,6rem)] font-bold leading-[1.05] tracking-[-0.05em] text-white mb-2 md:mb-4 uppercase opacity-0 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            360FOLEY{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(to left, #6366f1, #a855f7, #fcd34d)" }}
            >
              MARKETING
            </span>
          </h1>

          {/* Subheading */}
          <p
            className="text-white/80 text-[clamp(1rem,2.5vw,1.875rem)] font-light mb-3 md:mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            We implement security correctly.
          </p>

          {/* Description */}
          <p
            className="text-gray-400 text-[clamp(0.8rem,1.5vw,1.25rem)] font-light mb-4 md:mb-8 leading-relaxed opacity-0 animate-fade-up"
            style={{ animationDelay: "0.55s" }}
          >
            Enterprise security systems built in days. AI-powered surveillance deployed with zero-trust architecture. Smart access control set up for your entire facility. All of it done right, not just fast.
          </p>

          {/* Two CTA buttons */}
          <div
            className="flex flex-wrap gap-3 font-bold opacity-0 animate-fade-up"
            style={{ animationDelay: "0.7s" }}
          >
            <a href="#contacts" className="pointer-events-auto">
              <button className="bg-primary text-primary-foreground px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 text-xs sm:text-sm rounded-sm cursor-pointer hover:brightness-110 transition-all active:scale-[0.97] font-bold select-none">
                Book a Call
              </button>
            </a>
            <a href="#services" className="pointer-events-auto">
              <button className="bg-white/10 text-white border border-white/20 px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 text-xs sm:text-sm rounded-sm cursor-pointer hover:bg-white/20 transition-all active:scale-[0.97] font-bold select-none">
                Our Work
              </button>
            </a>
          </div>

          {/* Trust line */}
          <p
            className="text-gray-500 text-[10px] sm:text-xs font-light mt-4 sm:mt-6 md:mt-8 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.85s" }}
          >
            Trusted security partner. Columbus, OH. 12 systems deployed.
          </p>
        </div>
      </div>

      {/* ──── Logo Marquee (pinned to bottom) ──── */}
      <LogoMarquee />
    </section>
  )
}
