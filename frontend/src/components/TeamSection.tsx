import { Terminal } from "lucide-react"

const TEAM = [
  {
    name: "Dr. Elena Vance",
    role: "Chief AI Officer",
    initials: "EV",
    bio: "Former defense AI research lead. Architected Sentinel's core behavioral neural nets and computer vision models.",
    details: "Ph.D. in Machine Learning from MIT"
  },
  {
    name: "Marcus Sterling",
    role: "Lead Security Architect",
    initials: "MS",
    bio: "Zero-trust hardware security pioneer. Designed Sentinel's sub-millisecond tamper lockouts and segmented optical loops.",
    details: "12+ Years Enterprise SecOps"
  },
  {
    name: "Sarah Chen",
    role: "Director of Operations",
    initials: "SC",
    bio: "Hardware logistics and deployment veteran. Manages global logistics grids, local responder integrations, and field technicians.",
    details: "Former VP Infrastructure Logistics"
  }
]

export default function TeamSection() {
  return (
    <section id="team" className="py-24 px-6 md:px-12 lg:px-24 bg-hero-bg/50 border-y border-border/40 relative overflow-hidden">
      {/* Background visual detail */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase mb-3">
            // Tactical Brains
          </p>
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4">
            Security Engineers
          </h2>
          <p className="text-muted-foreground text-sm font-light leading-relaxed">
            The core architects combining hardware, deep learning networks, and zero-trust engineering to defend your facility.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center">
          {TEAM.map((member) => (
            <div
              key={member.name}
              className="bg-secondary/15 border border-border/50 rounded-xl p-8 hover:border-primary/45 transition-all duration-300 group flex flex-col items-center text-center relative overflow-hidden"
            >
              {/* Profile Avatar Placeholder with Neon Glow */}
              <div className="w-24 h-24 rounded-full bg-nav-button border border-border/60 flex items-center justify-center mb-6 relative group-hover:border-primary/60 group-hover:shadow-[0_0_20px_rgba(119,253,12,0.25)] transition-all duration-300 select-none">
                {/* Initials */}
                <span className="text-2xl font-bold text-foreground font-mono group-hover:text-primary transition-colors duration-300">
                  {member.initials}
                </span>

                {/* Rotating scanner rings */}
                <div className="absolute -inset-1 border border-dashed border-primary/20 rounded-full animate-[spin_20s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -inset-2 border border-dotted border-primary/10 rounded-full animate-[spin_40s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Member Meta */}
              <h3 className="text-lg font-semibold text-foreground uppercase tracking-wide group-hover:text-primary transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-xs text-primary font-mono uppercase tracking-widest mt-1 mb-4">
                {member.role}
              </p>

              {/* Bio */}
              <p className="text-muted-foreground text-xs md:text-sm font-light leading-relaxed mb-6 flex-grow">
                {member.bio}
              </p>

              {/* Mini Terminal Highlight */}
              <div className="bg-background/80 border border-border/40 rounded px-3 py-2 w-full text-left font-mono text-[10px] text-muted-foreground/80 mb-6 flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-primary" />
                <span>{member.details}</span>
              </div>

              {/* Social links (with hover-reveal style) */}
              <div className="flex gap-4 justify-center">
                <a href="#" className="w-8 h-8 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all select-none" aria-label="LinkedIn">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all select-none" aria-label="GitHub">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all select-none" aria-label="Twitter">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
