import { useRef, useEffect, useState } from "react"

const PROJECTS = [
  {
    title: "FireWorks Nation",
    description: "Thermal perimeter defense and autonomous AI fence monitoring across 400,000 sq ft of distribution space. Integrates active detection barriers and alerts local dispatch within 2 seconds.",
    tags: ["Surveillance", "Logistics", "Active Guarding"],
    metrics: "400k sq ft secured",
    link: "https://fireworksnation.com/",
    image: "/fireworksnation-landing.png",
    livePreview: true,
    domain: "fireworksnation.com",
    iframeWidth: 1280,
    iframeHeight: 3680,
  },
  {
    title: "Sweet Paradise",
    description: "Sub-millisecond hardware-level lockouts and zero-trust microsegmentation. Protects 140 server cabinets with biometric cabinets, facial mapping sensors, and optical fiber loop sensors.",
    tags: ["Data Center", "Access Control", "Zero-Trust"],
    metrics: "140 cabinets shielded",
    link: "https://sweetparadise360.com/",
    iframeSrc: "https://dulcet-griffin-e914c3.netlify.app/",
    image: "/sweetparadise-landing.png",
    livePreview: true,
    domain: "sweetparadise360.com",
    iframeWidth: 1280,
    iframeHeight: 6300,
  },
  {
    title: "PM Plastic",
    description: "Biometric security integration and facial scanning automation mapping 4,000+ daily corporate employees. Fully synchronized gate relays prevent unauthorized entry and tailgating.",
    tags: ["Corporate", "Biometrics", "Gate Integration"],
    metrics: "4,000+ staff managed",
    link: "https://pmplastic.com/",
    image: "/pmplastic-landing.png",
    livePreview: true,
    domain: "pmplastic.com",
    iframeWidth: 1280,
    iframeHeight: 5500,
  }
]

function LivePreviewCard({ project }: { project: typeof PROJECTS[0] }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(0.25)

  const domain = ('domain' in project && project.domain) ? project.domain as string : new URL(project.link).hostname
  const iframeW = ('iframeWidth' in project && project.iframeWidth) ? (project.iframeWidth as number) : 1280
  const iframeH = ('iframeHeight' in project && project.iframeHeight) ? (project.iframeHeight as number) : 3680
  const srcUrl = ('iframeSrc' in project && project.iframeSrc) ? (project.iframeSrc as string) : project.link

  // Dynamically calculate scale so the iframe fits the card width
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const updateScale = () => {
      const containerWidth = container.clientWidth
      setScale(containerWidth / iframeW)
    }

    updateScale()
    const observer = new ResizeObserver(updateScale)
    observer.observe(container)
    return () => observer.disconnect()
  }, [iframeW])

  // Animate the wrapper to scroll the iframe view from top to bottom
  useEffect(() => {
    const wrapper = wrapperRef.current
    const container = containerRef.current
    if (!wrapper || !container) return

    const iframeVisualHeight = iframeH * scale
    const containerHeight = container.clientHeight
    const scrollDistance = iframeVisualHeight - containerHeight

    if (scrollDistance <= 0) return

    // Smooth pacing: ~30ms per pixel
    const duration = scrollDistance * 30

    const animation = wrapper.animate(
      [
        { transform: "translateY(0)" },
        { transform: `translateY(-${scrollDistance}px)` },
      ],
      {
        duration,
        iterations: Infinity,
        direction: "normal",
        easing: "linear",
      }
    )

    return () => animation.cancel()
  }, [scale, iframeH])

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-secondary/10 border border-border/50 rounded-xl overflow-hidden flex flex-col hover:border-primary/40 transition-all duration-300 group hover:shadow-[0_4px_30px_rgba(0,0,0,0.4)] cursor-pointer no-underline text-inherit h-[340px]"
    >
      {/* 85% height preview container */}
      <div className="flex-[85] relative overflow-hidden border-b border-border/40 select-none bg-background flex flex-col min-h-0">
        {/* Browser Bar decoration */}
        <div className="h-6 bg-secondary/40 border-b border-border/30 px-3 flex items-center gap-1.5 shrink-0 z-10 relative">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500/70" />
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/70" />
          <span className="w-1.5 h-1.5 rounded-full bg-green-500/70" />
          <span className="text-[9px] text-muted-foreground/50 font-mono ml-2 select-none tracking-tight">{domain}</span>
        </div>
        
        {/* Live scrolling iframe preview */}
        <div ref={containerRef} className="relative w-full flex-1 overflow-hidden bg-black min-h-0">
          <div
            ref={wrapperRef}
            className="will-change-transform"
            style={{ width: "100%", height: iframeH * scale }}
          >
            <iframe
              src={srcUrl}
              title={`${project.title} website preview`}
              scrolling="no"
              style={{
                width: `${iframeW}px`,
                minWidth: `${iframeW}px`,
                maxWidth: "none",
                height: `${iframeH}px`,
                minHeight: `${iframeH}px`,
                maxHeight: "none",
                border: "none",
                overflow: "hidden",
                transformOrigin: "top left",
                transform: `scale(${scale})`,
                pointerEvents: "none",
                display: "block",
              }}
              tabIndex={-1}
              loading="eager"
            />
          </div>
        </div>
      </div>

      {/* 15% height title container */}
      <div className="flex-[15] flex items-center justify-center px-3 bg-transparent shrink-0">
        <h3 className="text-xs font-bold tracking-[0.2em] text-foreground uppercase group-hover:text-primary transition-colors duration-300 text-center">
          {project.title.toUpperCase()}
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
            if ('livePreview' in project && project.livePreview) {
              return <LivePreviewCard key={project.title} project={project} />
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
                <div className="h-40 relative overflow-hidden border-b border-border/40 select-none">
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
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Tag List */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
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
                    <h3 className="text-base font-semibold text-foreground uppercase mb-1.5 group-hover:text-primary transition-colors duration-200">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-xs leading-relaxed font-light mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Metrics log footer */}
                  <div className="border-t border-border/40 pt-3 flex items-center justify-between text-[10px] font-mono">
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
                <div className="h-40 relative overflow-hidden border-b border-border/40 select-none">
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
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Tag List */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
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
                    <h3 className="text-base font-semibold text-foreground uppercase mb-1.5 group-hover:text-primary transition-colors duration-200">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-xs leading-relaxed font-light mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Metrics log footer */}
                  <div className="border-t border-border/40 pt-3 flex items-center justify-between text-[10px] font-mono">
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
