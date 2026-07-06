import { Eye, ShieldAlert, Cpu, Radio } from "lucide-react"

const SERVICES = [
  {
    icon: Eye,
    title: "AI Surveillance",
    description: "Autonomous computer vision threat detection. Scans perimeters in real-time, matching visual data against behavioral threat indices. Zero false alarms.",
    specs: ["24/7 Live Threat Scoring", "Autonomous Object Detection", "Thermal Perimeter Guard"]
  },
  {
    icon: ShieldAlert,
    title: "Zero-Trust Architecture",
    description: "Continuous validation of every transaction and access point. Microsegmentation guarantees that a single point breach remains fully isolated.",
    specs: ["Cryptographic Device Identifiers", "Dynamic Session Validation", "Isolate Compromised Node < 50ms"]
  },
  {
    icon: Cpu,
    title: "Smart Access Control",
    description: "Cloud-managed hardware configurations. Integrated biometric scanners, digital keycards, and remote gateway locking deployable across global sites.",
    specs: ["Sub-second Authentication", "Hardware Tamper Triggers", "Biometric / MFA Lockouts"]
  },
  {
    icon: Radio,
    title: "Response Orchestration",
    description: "Direct secure channels into localized law enforcement and private security dispatchers. Fully automated threat escalation triggers.",
    specs: ["Direct Police/Private Hook", "Silent Automation Alarms", "Automated Facility Lockdowns"]
  }
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 md:px-12 lg:px-24 bg-background relative overflow-hidden">
      {/* Background glow styling */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase mb-3">
            // Core Capabilities
          </p>
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4">
            Security Done Right
          </h2>
          <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed">
            Our systems utilize advanced neural nets and zero-trust protocol to enforce strict, uncompromised physical and digital protection.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service) => {
            const IconComponent = service.icon
            return (
              <div
                key={service.title}
                className="glow-card bg-secondary/30 border border-border/60 rounded-xl p-8 hover:border-primary/50 transition-all duration-500 group flex flex-col justify-between"
              >
                <div>
                  {/* Icon & Glow */}
                  <div className="w-12 h-12 rounded-lg bg-nav-button flex items-center justify-center border border-border/80 text-primary mb-6 group-hover:shadow-[0_0_15px_rgba(119,253,12,0.3)] group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300 uppercase tracking-wide">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-light">
                    {service.description}
                  </p>
                </div>

                {/* Technical Specifications */}
                <div className="border-t border-border/40 pt-4 mt-auto">
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground/60 font-semibold mb-2 block">
                    Technical Specifications:
                  </span>
                  <ul className="space-y-1.5">
                    {service.specs.map((spec) => (
                      <li key={spec} className="text-xs text-foreground/80 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
