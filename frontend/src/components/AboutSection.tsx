export default function AboutSection() {
  const stats = [
    { value: "15+", label: "Active Clients" },
    { value: "50+", label: "Active Projects" },
    { value: "24/7", label: "Dedicated Support" },
    { value: "99%", label: "Success Ratio" }
  ]

  return (
    <section id="about-us" className="py-24 px-6 md:px-12 lg:px-24 bg-hero-bg/50 border-y border-border/40 relative overflow-hidden">
      {/* Visual background lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-line-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line-color)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Side: Narrative Content */}
        <div className="space-y-6">
          <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">
            // Who We Are
          </p>
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight leading-none text-foreground">
            One Agency<br />
            <span className="text-primary text-glow">One Source </span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-light">
            Founded by experienced digital strategists and creative developers, Marketing360 Foley was built to solve the challenges businesses face with fragmented marketing, outdated websites, and digital strategies that fail to generate meaningful growth. We created a unified ecosystem that combines web development, SEO, digital marketing, branding, and AI-powered solutions into one seamless experience—helping businesses build a stronger online presence and turn visitors into loyal customers.
          </p>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-light">
            We don't rely on generic templates. We don't chase empty metrics. We create tailored digital strategies that align with your business goals, optimize every customer interaction, and deliver measurable results. Whether you're launching a new brand, scaling your business, or modernizing your online presence, we help you grow faster and stay ahead in today's competitive digital landscape.
          </p>
        </div>

        {/* Right Side: Grid of Statistics */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-secondary/20 border border-border/50 rounded-lg p-6 sm:p-8 flex flex-col justify-center items-center text-center relative overflow-hidden group hover:border-primary/45 transition-all duration-300 shadow-sm"
            >
              {/* Subtle corner highlight */}
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-transparent group-hover:border-primary/80 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-transparent group-hover:border-primary/80 transition-colors duration-300" />

              <span className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300 font-mono mb-2">
                {stat.value}
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
