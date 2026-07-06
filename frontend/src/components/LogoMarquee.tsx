const LOGOS = [
  { name: "Aegis", letter: "A" },
  { name: "Nexus", letter: "N" },
  { name: "Prysma", letter: "P" },
  { name: "Cirrus", letter: "C" },
  { name: "Vortex", letter: "V" },
  { name: "Halcyn", letter: "H" },
]

export default function LogoMarquee() {
  return (
    <div className="w-full pb-6 sm:pb-10 relative z-20 pointer-events-auto opacity-0 animate-fade-up" style={{ animationDelay: "1s" }}>
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center gap-6 sm:gap-8 md:gap-12 px-6">
        {/* Left side: static text */}
        <div className="text-foreground/50 text-xs sm:text-sm shrink-0 leading-relaxed text-center sm:text-left">
          Relied on by brands<br />across the globe
        </div>

        {/* Right side: infinite scrolling marquee */}
        <div className="overflow-hidden flex-1 w-full [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]">
          <div className="flex animate-marquee w-max">
            {/* Duplicate the logos array for seamless infinite loop */}
            {[...LOGOS, ...LOGOS].map((logo, idx) => (
              <div
                key={`${logo.name}-${idx}`}
                className="flex items-center gap-2 sm:gap-3 mx-4 sm:mx-8 shrink-0"
              >
                {/* Liquid glass icon */}
                <div className="liquid-glass w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center">
                  <span className="text-primary text-xs sm:text-sm font-bold">{logo.letter}</span>
                </div>
                <span className="text-sm sm:text-base font-semibold text-foreground whitespace-nowrap">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
