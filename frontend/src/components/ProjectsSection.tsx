const PROJECTS = [
  {
    title: "Aegis Logistics Hub",
    description: "Thermal perimeter defense and autonomous AI fence monitoring across 400,000 sq ft of distribution space. Integrates active detection barriers and alerts local dispatch within 2 seconds.",
    tags: ["Surveillance", "Logistics", "Active Guarding"],
    metrics: "400k sq ft secured",
    svg: (
      <svg className="w-full h-full bg-[var(--svg-bg)]" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Grid Background */}
        <defs>
          <pattern id="grid1" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid1)" />
        {/* Perimeter Outline */}
        <path d="M 40 40 L 360 40 L 360 200 L 40 200 Z" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1.5" strokeDasharray="4 4" />
        {/* Radar wave */}
        <circle cx="200" cy="120" r="70" stroke="rgba(168, 85, 247, 0.15)" strokeWidth="1" />
        <circle cx="200" cy="120" r="40" stroke="rgba(168, 85, 247, 0.25)" strokeWidth="1" />
        {/* Target Scanner */}
        <line x1="200" y1="120" x2="260" y2="60" stroke="#a855f7" strokeWidth="1.5" opacity="0.8">
          <animateTransform attributeName="transform" type="rotate" from="0 200 120" to="360 200 120" dur="8s" repeatCount="indefinite" />
        </line>
        {/* Threat Markers */}
        <circle cx="150" cy="90" r="4" fill="#a855f7" className="animate-ping" />
        <circle cx="150" cy="90" r="3" fill="#a855f7" />
        <circle cx="260" cy="160" r="3" fill="#a855f7" opacity="0.6" />
        <path d="M 140 80 L 160 80 M 150 70 L 150 90" stroke="#a855f7" strokeWidth="0.5" opacity="0.5" />
        {/* Hud Text */}
        <text x="50" y="65" fill="#a855f7" fontSize="10" fontFamily="monospace" opacity="0.8">// ZONE 4 ACTIVE</text>
        <text x="50" y="185" fill="rgba(255,255,255,0.4)" fontSize="9" fontFamily="monospace">PERIMETER_STATUS: SECURE</text>
      </svg>
    )
  },
  {
    title: "Data Vault 7",
    description: "Sub-millisecond hardware-level lockouts and zero-trust microsegmentation. Protects 140 server cabinets with biometric cabinets, facial mapping sensors, and optical fiber loop sensors.",
    tags: ["Data Center", "Access Control", "Zero-Trust"],
    metrics: "140 cabinets shielded",
    svg: (
      <svg className="w-full h-full bg-[var(--svg-bg)]" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="url(#grid1)" />
        {/* Server Node Connections */}
        <path d="M 60 120 L 150 120 L 200 70 L 290 70 M 200 70 L 200 170 L 290 170" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
        <path d="M 150 120 L 200 170" stroke="#a855f7" strokeWidth="2" opacity="0.7" />
        {/* Nodes */}
        <circle cx="60" cy="120" r="6" fill="#1e1e1e" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
        <circle cx="150" cy="120" r="6" fill="#a855f7" stroke="#101010" strokeWidth="2" />
        <circle cx="200" cy="70" r="5" fill="#1e1e1e" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
        <circle cx="200" cy="170" r="5" fill="#a855f7" stroke="#101010" strokeWidth="2" />
        <circle cx="290" cy="70" r="5" fill="#1e1e1e" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
        <circle cx="290" cy="170" r="6" fill="#a855f7" stroke="#101010" strokeWidth="2" className="animate-pulse" />
        {/* Status Indicators */}
        <rect x="310" y="60" width="40" height="20" rx="3" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" />
        <text x="317" y="73" fill="rgba(255,255,255,0.5)" fontSize="8" fontFamily="monospace">LOCK</text>
        <rect x="310" y="160" width="40" height="20" rx="3" fill="rgba(168,85,247,0.08)" stroke="#a855f7" />
        <text x="315" y="173" fill="#a855f7" fontSize="8" fontFamily="monospace">READY</text>
        {/* Hud Text */}
        <text x="50" y="45" fill="#a855f7" fontSize="10" fontFamily="monospace" opacity="0.8">// PORT_KEY: DECRYPTED</text>
      </svg>
    )
  },
  {
    title: "Apex Towers",
    description: "Biometric security integration and facial scanning automation mapping 4,000+ daily corporate employees. Fully synchronized gate relays prevent unauthorized entry and tailgating.",
    tags: ["Corporate", "Biometrics", "Gate Integration"],
    metrics: "4,000+ staff managed",
    svg: (
      <svg className="w-full h-full bg-[var(--svg-bg)]" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="url(#grid1)" />
        {/* Facial mesh nodes */}
        <path d="M 160 80 L 200 50 L 240 80 L 230 140 L 200 170 L 170 140 Z" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        <path d="M 200 50 L 200 170 M 160 80 L 240 80 M 170 140 L 230 140" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />
        {/* Scanner overlay */}
        <line x1="140" y1="100" x2="260" y2="100" stroke="#a855f7" strokeWidth="2" opacity="0.8">
          <animate attributeName="y1" values="60;160;60" dur="4s" repeatCount="indefinite" />
          <animate attributeName="y2" values="60;160;60" dur="4s" repeatCount="indefinite" />
        </line>
        {/* Nodes */}
        <circle cx="200" cy="50" r="3" fill="#a855f7" />
        <circle cx="160" cy="80" r="3" fill="#a855f7" />
        <circle cx="200" cy="80" r="3" fill="#a855f7" />
        <circle cx="240" cy="80" r="3" fill="#a855f7" />
        <circle cx="185" cy="110" r="2.5" fill="#a855f7" />
        <circle cx="215" cy="110" r="2.5" fill="#a855f7" />
        <circle cx="200" cy="130" r="3" fill="#a855f7" />
        <circle cx="200" cy="170" r="3" fill="#a855f7" />
        {/* Hud details */}
        <rect x="270" y="40" width="90" height="45" rx="4" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" />
        <text x="278" y="55" fill="rgba(255,255,255,0.5)" fontSize="7" fontFamily="monospace">ID: AUTH_OK</text>
        <text x="278" y="67" fill="rgba(255,255,255,0.5)" fontSize="7" fontFamily="monospace">MATCH: 99.82%</text>
        <text x="278" y="79" fill="#a855f7" fontSize="7" fontFamily="monospace">DOOR: UNLOCKED</text>
      </svg>
    )
  }
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 bg-background relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase mb-3">
              // Proven Shielding
            </p>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">
              Deployed Security Systems
            </h2>
          </div>
          <p className="text-muted-foreground text-sm md:text-base font-light max-w-sm leading-relaxed">
            A selective overview of operational facilities secured by Sentinel AI neural nodes.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="bg-secondary/10 border border-border/50 rounded-xl overflow-hidden flex flex-col hover:border-primary/40 transition-all duration-300 group hover:shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
            >
              {/* SVG Mock Image / Diagram */}
              <div className="h-48 relative overflow-hidden border-b border-border/40 select-none">
                <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-500 ease-out">
                  {project.svg}
                </div>
                {/* Glowing subtle filter overlay */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/2 transition-colors duration-300 pointer-events-none" />
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  {/* Tag List */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] uppercase tracking-widest font-semibold text-primary/80 bg-primary/5 border border-primary/20 px-2 py-0.5 rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Project Name */}
                  <h3 className="text-lg font-semibold text-foreground uppercase mb-2 group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed font-light mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Metrics log footer */}
                <div className="border-t border-border/40 pt-4 flex items-center justify-between text-[10px] sm:text-xs font-mono">
                  <span className="text-muted-foreground/60">// METRIC_LOG:</span>
                  <span className="text-foreground font-semibold uppercase">{project.metrics}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
