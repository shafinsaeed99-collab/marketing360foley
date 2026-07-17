import { useRef, useEffect } from "react"

const PROJECTS = [
  {
    title: "FireWorks Nation",
    description: "Thermal perimeter defense and autonomous AI fence monitoring across 400,000 sq ft of distribution space. Integrates active detection barriers and alerts local dispatch within 2 seconds.",
    tags: ["Surveillance", "Logistics", "Active Guarding"],
    metrics: "400k sq ft secured",
    link: "https://fireworksnation.com/",
    image: "/fireworksnation-landing.png",
  },
  {
    title: "Sweet Paradise",
    description: "Sub-millisecond hardware-level lockouts and zero-trust microsegmentation. Protects 140 server cabinets with biometric cabinets, facial mapping sensors, and optical fiber loop sensors.",
    tags: ["Data Center", "Access Control", "Zero-Trust"],
    metrics: "140 cabinets shielded",
    link: "https://sweetparadise360.com/",
    image: "/sweetparadise-landing.png",
  },
  {
    title: "PM Plastic",
    description: "Biometric security integration and facial scanning automation mapping 4,000+ daily corporate employees. Fully synchronized gate relays prevent unauthorized entry and tailgating.",
    tags: ["Corporate", "Biometrics", "Gate Integration"],
    metrics: "4,000+ staff managed",
    link: "https://pmplastic.com/",
    image: "/pmplastic-landing.png",
  }
]

function FireworksCard({ project }: { project: typeof PROJECTS[0] }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load()
    }
  }, [])

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => console.log("Video play interrupted:", err))
    }
  }

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="bg-secondary/10 border border-border/50 rounded-xl overflow-hidden flex flex-col hover:border-primary/40 transition-all duration-300 group hover:shadow-[0_4px_30px_rgba(0,0,0,0.4)] cursor-pointer no-underline text-inherit h-full min-h-[380px]"
    >
      {/* 75% height preview demo container */}
      <div className="h-[285px] relative overflow-hidden border-b border-border/40 select-none bg-background flex flex-col">
        {/* Browser Bar decoration */}
        <div className="h-6 bg-secondary/30 border-b border-border/30 px-3 flex items-center gap-1.5 shrink-0 z-10 relative">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500/60" />
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/60" />
          <span className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
          <span className="text-[9px] text-muted-foreground/60 font-mono ml-3 select-none tracking-tight">fireworksnation.com</span>
        </div>
        
        {/* Video Player wrapper */}
        <div className="relative w-full flex-1 overflow-hidden bg-black flex items-center justify-center">
          <video
            ref={videoRef}
            className="w-full h-full object-cover object-top"
            muted
            playsInline
            preload="auto"
            loop
          >
            <source src="/fireworksnation-demo.webm#t=0.1" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* 25% height title container */}
      <div className="h-[95px] flex items-center justify-center p-6 bg-transparent">
        <h3 className="text-sm font-bold tracking-[0.2em] text-foreground uppercase group-hover:text-primary transition-colors duration-300 text-center">
          FIREWORKS NATION
        </h3>
      </div>
    </a>
  )
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 bg-background relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">
              Our Projects
            </h2>
          </div>
          <p className="text-muted-foreground text-sm md:text-base font-light max-w-sm leading-relaxed">
            A showcase of the businesses we've helped grow through innovative marketing, web development, and AI-powered solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PROJECTS.map((project) => {
            const isFireworks = project.title.toLowerCase() === "fireworks nation"

            if (isFireworks) {
              return <FireworksCard key={project.title} project={project} />
            }

            return 'link' in project && project.link ? (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary/10 border border-border/50 rounded-xl overflow-hidden flex flex-col hover:border-primary/40 transition-all duration-300 group hover:shadow-[0_4px_30px_rgba(0,0,0,0.4)] cursor-pointer no-underline text-inherit"
              >
                {/* Image / SVG Diagram */}
                <div className="h-48 relative overflow-hidden border-b border-border/40 select-none">
                  <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-500 ease-out">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top"
                      />
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
              </a>
            ) : (
              <div
                key={project.title}
                className="bg-secondary/10 border border-border/50 rounded-xl overflow-hidden flex flex-col hover:border-primary/40 transition-all duration-300 group hover:shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
              >
                {/* Image / SVG Diagram */}
                <div className="h-48 relative overflow-hidden border-b border-border/40 select-none">
                  <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-500 ease-out">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top"
                      />
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
            )
          })}
        </div>
      </div>
    </section>
  )
}
