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
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  Globe,
  Smartphone,
  Phone,
  Mail,
  MessageSquare,
  FileText,
  Zap,
  Search,
  LayoutGrid,
  MousePointerClick,
  Shield,
} from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

import heroImg from "@/assets/web-design-hero.png"
import uxUiImg from "@/assets/ux-ui-design.png"
import ecommerceImg from "@/assets/ecommerce-web.png"

const SERVICES = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "We work with your team to develop beautiful design mockups highlighting your ideal goals, keeping in mind best practices and mobile-first implementation. Our user-centered approach ensures every interaction feels intuitive and engaging.",
    specs: ["Wireframing & Prototyping", "User Flow Mapping", "Design System Creation"],
  },
  {
    icon: Monitor,
    title: "Responsive Development",
    description:
      "Every site we build is fully responsive across all devices. Our web design solutions balance contemporary aesthetics with mobile-ready, responsive functionality to maximize performance and conversions across all screen sizes.",
    specs: ["Mobile-First Approach", "Cross-Browser Testing", "Retina-Ready Assets"],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description:
      "Whether you need a Shopify ecommerce storefront, a WordPress lead-generation machine, or a custom-built platform — we've got you covered. Integrated payment gateways, inventory management, and checkout flows optimized for maximum revenue.",
    specs: ["Stripe / PayPal Integration", "Cart Abandonment Recovery", "Product Filtering & Search"],
  },
  {
    icon: Rocket,
    title: "One-Page Scroller / Splash Page",
    description:
      "The Splash Page/One-Page Scroller package is perfect for a company in a kickstarter phase or that doesn't require anything outside of a single scrolling website. Clean, fast, and conversion-focused — all on one beautifully crafted page.",
    specs: ["Single-Page Architecture", "Smooth Scroll Animations", "Speed-Optimized (<2s Load)"],
  },
  {
    icon: Globe,
    title: "SEO Optimization",
    description:
      "Built-in search engine optimization from the ground up. Semantic HTML, schema markup, and performance tuning to rank higher and drive organic traffic. We ensure your website is discoverable by the customers who matter most.",
    specs: ["Technical SEO Audit", "Schema Markup", "Core Web Vitals"],
  },
  {
    icon: Smartphone,
    title: "Web Applications",
    description:
      "Full-stack web applications with modern frameworks. Real-time dashboards, admin panels, SaaS platforms — architected for scale and performance. Custom software solutions tailored to your unique business requirements.",
    specs: ["React / Next.js", "REST & GraphQL APIs", "Real-Time Data Sync"],
  },
]

const PROCESS = [
  {
    step: "01",
    icon: MessageSquare,
    title: "Contact Us",
    description: "Reach out and tell us about your project. We'll listen, ask the right questions, and start understanding your vision, goals, and target audience.",
  },
  {
    step: "02",
    icon: FileText,
    title: "No Cost Consulting",
    description: "We provide a free consultation to analyze your brand, competitors, and requirements. Our team maps out the ideal strategy before any work begins.",
  },
  {
    step: "03",
    icon: PenTool,
    title: "Design & Develop",
    description: "High-fidelity mockups, interactive prototypes, and clean performant code — all reviewed and iterated until every pixel is approved and every feature works flawlessly.",
  },
  {
    step: "04",
    icon: Rocket,
    title: "Get Proposal & Launch",
    description: "Receive a detailed proposal, review the final product, and launch with confidence. Performance audits, SEO checks, and ongoing support keep you ahead of the competition.",
  },
]

const TECH_STACK = [
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "Wix", logo: "https://cdn.simpleicons.org/wix/0C6EFC" },
  { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "WordPress", logo: "https://cdn.simpleicons.org/wordpress/21759B" },
  { name: "Shopify", logo: "https://cdn.simpleicons.org/shopify/7AB55C" },
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
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-purple-400 hover:text-purple-300 uppercase tracking-widest mb-8 opacity-0 animate-fade-up border border-purple-500/30 bg-purple-500/5 px-4 py-2 rounded-sm transition-all hover:bg-purple-500/10 pointer-events-auto"
            style={{ animationDelay: "0.1s" }}
          >
            <ArrowLeft className="w-4 h-4" /> Go Back
          </Link>

          <p
            className="text-xs font-semibold tracking-[0.25em] text-purple-400 uppercase mb-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            // Website Design Services
          </p>
          <h1
            className="text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[1.05] tracking-[-0.04em] text-white mb-6 uppercase opacity-0 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Engaging{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(to left, #6366f1, #a855f7, #ec4899)" }}
            >
              Web Design
            </span>
          </h1>
          <p
            className="text-white/70 text-lg md:text-xl font-light max-w-2xl mb-8 leading-relaxed opacity-0 animate-fade-up"
            style={{ animationDelay: "0.45s" }}
          >
            We build engaging websites that guide customers from homepage to checkout without sacrificing user experience. Our web design solutions balance contemporary aesthetics with mobile-ready, responsive functionality to maximize performance and conversions across all devices.
          </p>
          <div className="flex flex-wrap gap-3 opacity-0 animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <a href="#get-started" className="pointer-events-auto">
              <button className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 text-sm rounded-sm cursor-pointer transition-all active:scale-[0.97] font-bold select-none">
                Get Started
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

      {/* ──── Web Build Section (image + text side by side) ──── */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-purple-500/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src={heroImg}
                alt="Modern web design workspace showing multiple devices displaying beautifully designed websites"
                className="relative rounded-xl border border-border/40 shadow-2xl w-full object-cover aspect-[16/10]"
              />
            </div>

            {/* Content */}
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase mb-3">
                // Web Build
              </p>
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-6">
                Custom Website{" "}
                <span className="text-primary">Development</span>
              </h2>
              <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed mb-6">
                Whether you need a Shopify ecommerce storefront, a WordPress lead-generation machine, or a fully custom web application — we've got you covered. Our development team builds high-performance websites from the ground up, tailored to your specific business goals and audience.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Custom-coded websites built for speed and scalability",
                  "WordPress & Shopify development expertise",
                  "Full-stack applications with modern frameworks",
                  "Mobile-first responsive design on every project",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground/80">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#get-started" className="inline-flex">
                <button className="bg-primary text-primary-foreground px-6 py-3 text-sm rounded-sm cursor-pointer hover:brightness-110 transition-all active:scale-[0.97] font-bold select-none flex items-center gap-2">
                  Start Your Project <ArrowRight className="w-4 h-4" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ──── UX/UI Design & Performance Web (two-column feature) ──── */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-secondary/20 border-y border-border/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-line-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line-color)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* UX/UI Design Card */}
            <div className="glow-card bg-background border border-border/60 rounded-xl overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src={uxUiImg}
                  alt="Designer working on UX/UI wireframes and mockups with purple ambient lighting"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              </div>
              <div className="p-8 pt-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <PenTool className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-bold uppercase tracking-wide">UX/UI Design</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-light">
                  We work with your team to develop beautiful design mockups highlighting your ideal goals, keeping in mind best practices and mobile-first implementation. Every interface is crafted with user psychology in mind — designing experiences that convert visitors into loyal customers through intuitive navigation and stunning visual hierarchy.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Wireframing", "Prototyping", "User Research", "Design Systems", "Accessibility"].map((tag) => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider bg-primary/10 text-primary px-3 py-1.5 rounded-full font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Performance Web Card */}
            <div className="glow-card bg-background border border-border/60 rounded-xl overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src={ecommerceImg}
                  alt="E-commerce website with modern interface displayed on screen"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              </div>
              <div className="p-8 pt-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-bold uppercase tracking-wide">Performance Web</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-light">
                  The complete Performance Web package begins with strategy and user experience (UX) phases and then finishes with a complete user interface design (UI) and copywriting. We create custom mockups that allow us to innovate outside the typical template format, annotating the pages for development and delivering a fully custom-coded, high-performance website.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Strategy", "Custom Code", "Copywriting", "SEO", "Analytics"].map((tag) => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider bg-primary/10 text-primary px-3 py-1.5 rounded-full font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
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
              End-to-end web solutions — from wireframe to deployment. Every project is built for speed, accessibility, and conversion. We offer small and large businesses the best creative and affordable website design services.
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

      {/* ──── Get Started Process Section ──── */}
      <section id="get-started" className="py-24 px-6 md:px-12 lg:px-24 bg-secondary/20 border-y border-border/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-line-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line-color)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase mb-3">
              // How To Get Started
            </p>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4">
              Get Started
            </h2>
            <p className="text-muted-foreground text-sm font-light leading-relaxed">
              Getting your dream website built is simpler than you think. Our streamlined process takes you from first contact to launch with full transparency and zero hassle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map((item, idx) => {
              const StepIcon = item.icon
              return (
                <div key={item.step} className="relative group">
                  {/* Connector line */}
                  {idx < PROCESS.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-[calc(100%+0.5rem)] w-[calc(100%-3rem)] h-[1px] bg-border/60">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary" />
                    </div>
                  )}

                  <div className="bg-background border border-border/60 rounded-xl p-8 hover:border-primary/50 transition-all duration-300 h-full">
                    <div className="flex items-center gap-3 mb-5">
                      <span className="text-3xl font-bold text-primary/20 font-mono group-hover:text-primary/40 transition-colors">
                        {item.step}
                      </span>
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <StepIcon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-3 uppercase tracking-wide group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              )
            })}
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
              We leverage the most powerful and modern tools in the industry to deliver exceptional results. From React to WordPress, we choose the right technology for your project.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto">
            {TECH_STACK.map((tech) => (
              <div
                key={tech.name}
                className="bg-secondary/20 border border-border/50 rounded-lg p-6 flex flex-col items-center justify-center text-center group hover:border-primary/45 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-3 p-2">
                  <img
                    src={tech.logo}
                    alt={`${tech.name} logo`}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
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
            <p className="text-muted-foreground text-base font-light leading-relaxed">
              We are a leading website design services agency that offers small and large businesses the best creative and affordable website design services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Sparkles, title: "Pixel-Perfect Design", desc: "Every element is meticulously crafted. We obsess over spacing, typography, and color so your brand looks premium and stands out from the competition." },
              { icon: Code2, title: "Clean Code", desc: "No bloated templates. Hand-written, performant code that's easy to maintain, scales with your business, and loads lightning fast." },
              { icon: Layers, title: "Full-Stack Delivery", desc: "Design, development, deployment, and ongoing support — we handle every layer of your digital presence from start to finish." },
              { icon: MousePointerClick, title: "Conversion-Focused", desc: "We build websites that guide customers from homepage to checkout. Every design decision is made with conversion and user experience in mind." },
              { icon: Search, title: "SEO Built-In", desc: "Semantic HTML, fast load times, schema markup, and accessibility compliance — SEO isn't an afterthought, it's built into every page from the start." },
              { icon: Shield, title: "Ongoing Support", desc: "Post-launch maintenance, security updates, analytics monitoring, and iterative improvements to keep your site performing at its best — 24/7." },
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
          <p className="text-muted-foreground text-base font-light leading-relaxed mb-6 max-w-xl mx-auto">
            Whether you need a brand-new website, a redesign, or a custom web application — we deliver results that exceed expectations. Get in touch and let us know about your project today.
          </p>

          {/* Contact info row */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <span>Available Mon–Fri</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <LayoutGrid className="w-4 h-4 text-primary" />
              <span>Custom Solutions</span>
            </div>
          </div>

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
