import { Link } from "react-router-dom"
import {
  Palette,
  Monitor,
  ShoppingCart,
  Rocket,
  Layers,
  Code2,
  PenTool,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Globe,
  Smartphone,
} from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const SERVICES = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Pixel-perfect interfaces crafted with user psychology in mind. We design experiences that convert visitors into customers through intuitive navigation and stunning visual hierarchy.",
    specs: ["Wireframing & Prototyping", "User Flow Mapping", "Design System Creation"],
  },
  {
    icon: Monitor,
    title: "Responsive Development",
    description:
      "Every site we build is fully responsive across all devices. From ultra-wide monitors to mobile screens — your brand looks flawless everywhere.",
    specs: ["Mobile-First Approach", "Cross-Browser Testing", "Retina-Ready Assets"],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description:
      "Custom storefronts built for conversion. Integrated payment gateways, inventory management, and checkout flows optimized for maximum revenue.",
    specs: ["Stripe / PayPal Integration", "Cart Abandonment Recovery", "Product Filtering & Search"],
  },
  {
    icon: Rocket,
    title: "Landing Pages",
    description:
      "High-impact landing pages designed to capture leads and drive action. A/B tested layouts with conversion-focused copy and strategic CTA placement.",
    specs: ["A/B Split Testing", "Lead Capture Forms", "Speed-Optimized (<2s Load)"],
  },
  {
    icon: Globe,
    title: "SEO Optimization",
    description:
      "Built-in search engine optimization from the ground up. Semantic HTML, schema markup, and performance tuning to rank higher and drive organic traffic.",
    specs: ["Technical SEO Audit", "Schema Markup", "Core Web Vitals"],
  },
  {
    icon: Smartphone,
    title: "Web Applications",
    description:
      "Full-stack web applications with modern frameworks. Real-time dashboards, admin panels, SaaS platforms — architected for scale and performance.",
    specs: ["React / Next.js", "REST & GraphQL APIs", "Real-Time Data Sync"],
  },
]

const PROCESS = [
  {
    step: "01",
    title: "Discovery",
    description: "We analyze your brand, competitors, and target audience to define the perfect digital strategy.",
  },
  {
    step: "02",
    title: "Design",
    description: "High-fidelity mockups and interactive prototypes reviewed until every pixel is approved.",
  },
  {
    step: "03",
    title: "Develop",
    description: "Clean, performant code built with modern frameworks. Fully responsive and accessibility-compliant.",
  },
  {
    step: "04",
    title: "Deploy",
    description: "Launch with confidence. Performance audits, SEO checks, and ongoing support to keep you ahead.",
  },
]

const TECH_STACK = [
  { name: "React", letter: "R" },
  { name: "Next.js", letter: "N" },
  { name: "TypeScript", letter: "T" },
  { name: "Tailwind", letter: "Tw" },
  { name: "Figma", letter: "Fi" },
  { name: "Node.js", letter: "No" },
  { name: "Vercel", letter: "V" },
  { name: "PostgreSQL", letter: "Pg" },
]

export default function WebDesignPage() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      {/* ──── Hero Section (always dark) ──── */}
      <section
        className="dark relative min-h-[85vh] flex flex-col justify-end overflow-hidden"
        style={{ backgroundColor: "hsl(260, 87%, 3%)" }}
      >
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px]"
          />
          <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] left-[5%] w-[350px] h-[350px] bg-indigo-500/8 rounded-full blur-[100px]" />

          {/* Floating code brackets decoration */}
          <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
            <text x="70%" y="25%" fill="#a855f7" fontSize="120" fontFamily="monospace" opacity="0.15">{"<"}</text>
            <text x="80%" y="45%" fill="#a855f7" fontSize="80" fontFamily="monospace" opacity="0.1">{"/>"}</text>
            <line x1="0" y1="75%" x2="100%" y2="75%" stroke="#a855f7" strokeWidth="0.5" strokeDasharray="4 12" />
            <line x1="60%" y1="0" x2="60%" y2="100%" stroke="#a855f7" strokeWidth="0.5" strokeDasharray="4 12" />
            <circle cx="60%" cy="75%" r="4" fill="#a855f7" className="animate-ping" />
            <circle cx="60%" cy="75%" r="3" fill="#a855f7" />
          </svg>
        </div>

        <div className="absolute inset-0 bg-black/20 pointer-events-none" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pb-16 pt-32">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-gray-500 text-xs font-mono mb-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <Link to="/" className="hover:text-purple-400 transition-colors pointer-events-auto">HOME</Link>
            <span>/</span>
            <span>SERVICES</span>
            <span>/</span>
            <span className="text-purple-400">WEB DESIGN</span>
          </div>

          <p
            className="text-xs font-semibold tracking-[0.25em] text-purple-400 uppercase mb-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            // Digital Craftsmanship
          </p>
          <h1
            className="text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[1.05] tracking-[-0.04em] text-white mb-6 uppercase opacity-0 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Web Design{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(to left, #6366f1, #a855f7, #ec4899)" }}
            >
              & Dev
            </span>
          </h1>
          <p
            className="text-white/70 text-lg md:text-xl font-light max-w-2xl mb-8 leading-relaxed opacity-0 animate-fade-up"
            style={{ animationDelay: "0.45s" }}
          >
            We craft stunning, high-performance websites that convert visitors into customers. From concept to launch — pixel-perfect design meets clean, scalable code.
          </p>
          <div className="flex flex-wrap gap-3 opacity-0 animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <a href="#contact-cta" className="pointer-events-auto">
              <button className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 text-sm rounded-sm cursor-pointer transition-all active:scale-[0.97] font-bold select-none">
                Start a Project
              </button>
            </a>
            <a href="#services-grid" className="pointer-events-auto">
              <button className="bg-white/10 text-white border border-white/20 px-8 py-4 text-sm rounded-sm cursor-pointer hover:bg-white/20 transition-all active:scale-[0.97] font-bold select-none">
                View Services
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* ──── Services Grid ──── */}
      <section id="services-grid" className="py-24 px-6 md:px-12 lg:px-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16 max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase mb-3">
              // What We Build
            </p>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4">
              Design & Development Services
            </h2>
            <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed">
              End-to-end web solutions — from wireframe to deployment. Every project is built for speed, accessibility, and conversion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {SERVICES.map((service) => {
              const IconComponent = service.icon
              return (
                <div
                  key={service.title}
                  className="glow-card bg-secondary/30 border border-border/60 rounded-xl p-8 hover:border-primary/50 transition-all duration-500 group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-nav-button flex items-center justify-center border border-border/80 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300 uppercase tracking-wide">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-light">
                      {service.description}
                    </p>
                  </div>
                  <div className="border-t border-border/40 pt-4 mt-auto">
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground/60 font-semibold mb-2 block">
                      Deliverables:
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

      {/* ──── Process Section ──── */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-secondary/20 border-y border-border/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-line-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line-color)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase mb-3">
              // How We Work
            </p>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4">
              Our Process
            </h2>
            <p className="text-muted-foreground text-sm font-light leading-relaxed">
              A streamlined four-phase approach that takes your project from concept to launch with precision and transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map((item, idx) => (
              <div key={item.step} className="relative group">
                {/* Connector line */}
                {idx < PROCESS.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(100%+0.5rem)] w-[calc(100%-3rem)] h-[1px] bg-border/60">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary" />
                  </div>
                )}

                <div className="bg-secondary/30 border border-border/60 rounded-xl p-8 hover:border-primary/50 transition-all duration-300 h-full">
                  <span className="text-4xl font-bold text-primary/20 font-mono block mb-4 group-hover:text-primary/40 transition-colors">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-semibold mb-3 uppercase tracking-wide group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── Tech Stack ──── */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase mb-3">
              // Tools We Use
            </p>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4">
              Tech Stack
            </h2>
            <p className="text-muted-foreground text-sm font-light leading-relaxed">
              We leverage the most powerful and modern tools in the industry to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto">
            {TECH_STACK.map((tech) => (
              <div
                key={tech.name}
                className="bg-secondary/20 border border-border/50 rounded-lg p-6 flex flex-col items-center justify-center text-center group hover:border-primary/45 transition-all duration-300"
              >
                <div className="liquid-glass w-14 h-14 rounded-xl flex items-center justify-center mb-3">
                  <span className="text-primary text-lg font-bold font-mono group-hover:scale-110 transition-transform">
                    {tech.letter}
                  </span>
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground group-hover:text-foreground transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── Why Choose Us ──── */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-secondary/20 border-y border-border/40">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase mb-3">
              // Why Us
            </p>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4">
              Built Different
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Sparkles, title: "Pixel-Perfect Design", desc: "Every element is meticulously crafted. We obsess over spacing, typography, and color so your brand looks premium." },
              { icon: Code2, title: "Clean Code", desc: "No bloated templates. Hand-written, performant code that's easy to maintain and scales with your business." },
              { icon: Layers, title: "Full-Stack Delivery", desc: "Design, development, deployment, and ongoing support — we handle every layer of your digital presence." },
              { icon: PenTool, title: "Design-First Process", desc: "We design in Figma with full interactivity before writing a single line of code. You approve what you see." },
              { icon: CheckCircle2, title: "SEO Built-In", desc: "Semantic HTML, fast load times, schema markup, and accessibility compliance — SEO isn't an afterthought." },
              { icon: ArrowRight, title: "Ongoing Support", desc: "Post-launch maintenance, analytics monitoring, and iterative improvements to keep your site performing." },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wide mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ──── CTA Section ──── */}
      <section id="contact-cta" className="py-24 px-6 md:px-12 lg:px-24 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase mb-3">
            // Ready to Launch?
          </p>
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-6">
            Let's Build Your{" "}
            <span className="text-primary text-glow">Digital Presence</span>
          </h2>
          <p className="text-muted-foreground text-base font-light leading-relaxed mb-10 max-w-xl mx-auto">
            Whether you need a brand-new website, a redesign, or a custom web application — we deliver results that exceed expectations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/#contacts" className="pointer-events-auto">
              <button className="bg-primary text-primary-foreground px-8 py-4 text-sm rounded-sm cursor-pointer hover:brightness-110 transition-all active:scale-[0.97] font-bold select-none">
                Get a Free Quote
              </button>
            </Link>
            <Link to="/" className="pointer-events-auto">
              <button className="bg-secondary text-foreground border border-border px-8 py-4 text-sm rounded-sm cursor-pointer hover:brightness-95 transition-all active:scale-[0.97] font-bold select-none">
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
