import { Link } from "react-router-dom"
import {
  Search,
  Zap,
  Target,
  ArrowRight,
  CheckCircle2,
  Phone,
  Mail,
  Shield,
  FileSearch,
  Compass,
  LineChart,
  Activity,
  AlertCircle,
  ArrowLeft
} from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

import heroImg from "@/assets/seo-sem-hero.png"
import cmoImg from "@/assets/cmo-consultancy.png"
import auditImg from "@/assets/seo-audit.png"

const OFFERINGS = [
  {
    icon: Compass,
    title: "CMO Consultancy",
    description:
      "Depending on where your business is within its lifecycle as well as any current market challenges you're facing, our CMO consultants will provide a custom tailored plan to plot the shortest path to growth.",
    specs: ["Strategic Positioning", "Growth Mapping", "Lifecycle Analysis"],
  },
  {
    icon: Activity,
    title: "Business Health Audit",
    description:
      "We dig deep into a brand's Google Analytics data to extract insights, trends, and opportunities, as well as perform a conversion-centric website audit to better understand your customer pathways.",
    specs: ["Google Analytics Review", "Funnel Leak Identification", "Performance Benchmarking"],
  },
  {
    icon: Zap,
    title: "Conversion Rate Optimization",
    description:
      "The conversion optimization audit package assesses the convertibility of both web and mobile assets, key customer conversion pathways based on top traffic sources.",
    specs: ["A/B Testing Strategies", "User Behavior Analysis", "Checkout Flow Optimization"],
  },
  {
    icon: Target,
    title: "Competitive Analysis & Product Market Fit",
    description:
      "Our detailed competitive analysis and product marketing strategy provides a 360° view of your brand and product(s), giving you insight into their compatibility and competition within your unique verticals.",
    specs: ["Competitor Benchmarking", "Value Proposition Tuning", "Market Viability Studies"],
  },
  {
    icon: FileSearch,
    title: "Digital Discovery & Roadmap Planning",
    description:
      "The digital discovery and road map package provides an end-to-end digital marketing roadmap based on a detailed brand audit, market research, and competitive analysis.",
    specs: ["End-to-End Campaign Roadmaps", "Resource Allocation Planning", "KPI & Milestone Definition"],
  },
]

const STRATEGY_WORKFLOW = [
  {
    step: "01",
    title: "Audit",
    subtitle: "Best practices moving forward",
    description:
      "We start with a deep-dive into your unique brand and business, helping to identify potential strengths, weaknesses, and best practices moving forward.",
  },
  {
    step: "02",
    title: "Plan",
    subtitle: "Workflow to ensure success",
    description:
      "Your team of experts develops a custom plan around your brand, defining benchmarks and creating a structured workflow to ensure success.",
  },
  {
    step: "03",
    title: "Implement",
    subtitle: "Maximum ROI",
    description:
      "We put our shared plan into action, taking the time to continuously measure, analyze, and adjust it as needed for a maximum return on investment.",
  },
]

const SEO_PILLARS = [
  {
    title: "On-Page Optimization",
    description: "Tailoring every element within your site's pages to align perfectly with search algorithms and user intent.",
    items: [
      "Website Audit & Diagnostics",
      "Keyword Research & Mapping",
      "Title Tag & Meta Description Tuning",
      "URL Structuring & Rewrites",
      "Content & Blog Optimization",
      "XML Sitemap & Robots.txt Config",
      "Domain Redirect Management",
    ],
  },
  {
    title: "Off-Page SEO",
    description: "Building site authority and search relevance through strategic external channels and credibility signals.",
    items: [
      "Competitor Link Audits",
      "Local Business & Map Listings",
      "High-Quality Link Building",
      "Directory & Blog Submissions",
      "Analytics & Search Console Setup",
      "Consumer Behavior Analysis",
      "Call-to-Action Strategy Mapping",
    ],
  },
  {
    title: "Reports & Inspections",
    description: "Deep analytics processing to track search visibility improvements and continuously refine marketing action plans.",
    items: [
      "Webmaster Console Analysis",
      "Keyword Position Tracking",
      "Weekly Progress Reporting",
      "Behavior Flow Reports",
      "Strategic Action Recommendations",
      "ROI Conversion Calculations",
    ],
  },
]

const STATS = [
  { value: "81%", label: "Purchase Based on Referrals" },
  { value: "360°", label: "Brand Competition Analysis" },
  { value: "100%", label: "Tailored Growth Planning" },
  { value: "ROI", label: "Focused Marketing Strategy" },
]

export default function MarketingSeoSemPage() {
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
          <div className="absolute top-[15%] left-[10%] w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[15%] right-[10%] w-[350px] h-[350px] bg-purple-500/8 rounded-full blur-[100px]" />

          {/* Marketing line chart decoration */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 100,500 L 300,400 L 500,450 L 700,320 L 900,380 L 1100,250 L 1300,280"
              fill="none"
              stroke="rgba(99, 102, 241, 0.15)"
              strokeWidth="3"
            />
            <path
              d="M 100,500 L 300,400 L 500,450 L 700,320 L 900,380 L 1100,250 L 1300,280 L 1300,600 L 100,600 Z"
              fill="url(#grad)"
              opacity="0.03"
            />
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <circle cx="700" cy="320" r="5" fill="#6366f1" className="animate-ping" />
            <circle cx="700" cy="320" r="4" fill="#6366f1" />
            <circle cx="1100" cy="250" r="5" fill="#a855f7" className="animate-ping" />
            <circle cx="1100" cy="250" r="4" fill="#a855f7" />
          </svg>
        </div>

        <div className="absolute inset-0 bg-black/20 pointer-events-none" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pb-16 pt-32">
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-indigo-400 hover:text-indigo-300 uppercase tracking-widest mb-8 opacity-0 animate-fade-up border border-indigo-500/30 bg-indigo-500/5 px-4 py-2 rounded-sm transition-all hover:bg-indigo-500/10 pointer-events-auto"
            style={{ animationDelay: "0.1s" }}
          >
            <ArrowLeft className="w-4 h-4" /> Go Back
          </Link>

          <p
            className="text-xs font-semibold tracking-[0.25em] text-indigo-400 uppercase mb-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            // Marketing Strategy SEO/SEM
          </p>
          <h1
            className="text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[1.05] tracking-[-0.04em] text-white mb-6 uppercase opacity-0 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            SEO / SEM{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(to left, #6366f1, #a855f7, #ec4899)" }}
            >
              &amp; Strategy
            </span>
          </h1>
          <p
            className="text-white/70 text-lg md:text-xl font-light max-w-2xl mb-8 leading-relaxed opacity-0 animate-fade-up"
            style={{ animationDelay: "0.45s" }}
          >
            The forward thinking Chief Marketing leadership you've always wanted. Our data-first approach demystifies today's marketing landscape, enabling your brand to connect with the right audience for the best outcome.
          </p>
          <div className="flex flex-wrap gap-3 opacity-0 animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <a href="#get-started" className="pointer-events-auto">
              <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 text-sm rounded-sm cursor-pointer transition-all active:scale-[0.97] font-bold select-none">
                Boost Your Rankings
              </button>
            </a>
            <a href="#services-grid" className="pointer-events-auto">
              <button className="bg-white/10 text-white border border-white/20 px-8 py-4 text-sm rounded-sm cursor-pointer hover:bg-white/20 transition-all active:scale-[0.97] font-bold select-none">
                View Offerings
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* ──── Stats Section ──── */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-secondary/20 border-b border-border/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="bg-secondary/20 border border-border/50 rounded-lg p-6 sm:p-8 flex flex-col justify-center items-center text-center group hover:border-primary/45 transition-all duration-300"
              >
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

      {/* ──── Main Content Intro (Image + Text) ──── */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-indigo-500/20 to-purple-500/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src={heroImg}
                alt="Search engine optimization analytical charts on screen"
                className="relative rounded-xl border border-border/40 shadow-2xl w-full object-cover aspect-[16/10]"
              />
            </div>

            {/* Content */}
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase mb-3">
                // Strategy Philosophy
              </p>
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-6">
                Data-Driven Marketing <span className="text-primary">Architectures</span>
              </h2>
              <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed mb-6">
                Creating search engine optimization (SEO) and search engine marketing (SEM) strategy is unique for every enterprise. It begins by examining your current footprint to isolate performance roadblocks, optimizing structures, and executing strategies aligned with the strict algorithm criteria of major search providers.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Detailed Google and Bing search algorithm compliance",
                  "Comprehensive speed and code efficiency adjustments",
                  "Structured customer journey pathway diagnostics",
                  "Continuous ROI-centric campaign adjustments",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground/80">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#get-started" className="inline-flex">
                <button className="bg-primary text-primary-foreground px-6 py-3 text-sm rounded-sm cursor-pointer hover:brightness-110 transition-all active:scale-[0.97] font-bold select-none flex items-center gap-2">
                  Diagnose Your Site <ArrowRight className="w-4 h-4" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ──── Featured Columns (CMO & SEO Audits) ──── */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-secondary/20 border-y border-border/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-line-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line-color)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* CMO Consultancy Card */}
            <div className="glow-card bg-background border border-border/60 rounded-xl overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src={cmoImg}
                  alt="Board room analytics dashboards showing business metrics and growth maps"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              </div>
              <div className="p-8 pt-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Compass className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-bold uppercase tracking-wide">CMO Consultancy</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-light">
                  Our Chief Marketing Officer consultancy targets the unique lifecycle position of your business. We diagnose competitor footprints, design exact customer maps, and construct actionable growth roadmaps, providing you the forward-thinking marketing leadership your company needs.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Growth Strategy", "Market Analysis", "Consulting", "Competitor Research"].map((tag) => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider bg-primary/10 text-primary px-3 py-1.5 rounded-full font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Performance Audit Card */}
            <div className="glow-card bg-background border border-border/60 rounded-xl overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src={auditImg}
                  alt="Detailed search console and analytics report on screen"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              </div>
              <div className="p-8 pt-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <AlertCircle className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-bold uppercase tracking-wide">Business &amp; CRO Audits</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-light">
                  Deep analytics auditing extracts key performance indicators from your actual traffic flows. We analyze landing page conversion readiness, test mobile device conversion paths, and trace user routing behaviors to make sure you capture maximum value from every click.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Google Analytics", "CRO", "Site Speed Audit", "Heatmap Studies"].map((tag) => (
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

      {/* ──── Core Offerings Grid ──── */}
      <section id="services-grid" className="py-24 px-6 md:px-12 lg:px-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16 max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase mb-3">
              // Focus Areas
            </p>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4">
              Strategic Services
            </h2>
            <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed">
              We leverage data analytics and marketing automation to craft highly targeted search campaigns and business diagnostics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {OFFERINGS.map((offering) => {
              const IconComponent = offering.icon
              return (
                <div
                  key={offering.title}
                  className="glow-card bg-secondary/30 border border-border/60 rounded-xl p-8 hover:border-primary/50 transition-all duration-500 group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-nav-button flex items-center justify-center border border-border/80 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300 uppercase tracking-wide">
                      {offering.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-light">
                      {offering.description}
                    </p>
                  </div>
                  <div className="border-t border-border/40 pt-4 mt-auto">
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground/60 font-semibold mb-2 block">
                      Deliverables:
                    </span>
                    <ul className="space-y-1.5">
                      {offering.specs.map((spec) => (
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

      {/* ──── Strategy Workflow Section ──── */}
      <section id="get-started" className="py-24 px-6 md:px-12 lg:px-24 bg-secondary/20 border-y border-border/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-line-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line-color)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase mb-3">
              // Workflow Execution
            </p>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4">
              Strategic Roadmap
            </h2>
            <p className="text-muted-foreground text-sm font-light leading-relaxed">
              Our 3-step marketing framework focuses on precision analysis and continuous optimization to maximize your conversion pathways.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {STRATEGY_WORKFLOW.map((item, idx) => (
              <div key={item.step} className="relative group">
                {/* Connector line */}
                {idx < STRATEGY_WORKFLOW.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(100%+0.5rem)] w-[calc(100%-3rem)] h-[1px] bg-border/60">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary" />
                  </div>
                )}

                <div className="bg-background border border-border/60 rounded-xl p-8 hover:border-primary/50 transition-all duration-300 h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-4xl font-bold text-primary/20 font-mono group-hover:text-primary/40 transition-colors">
                      {item.step}
                    </span>
                    <span className="text-[10px] uppercase font-semibold tracking-widest text-primary/80 bg-primary/5 px-2.5 py-1 rounded">
                      {item.title}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 uppercase tracking-wide group-hover:text-primary transition-colors">
                    {item.subtitle}
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

      {/* ──── SEO/SEM Pillars Details ──── */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase mb-3">
              // Execution Elements
            </p>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4">
              SEO Strategy Pillars
            </h2>
            <p className="text-muted-foreground text-sm font-light leading-relaxed">
              We divide search optimization into three focus areas to align technical execution with search algorithms.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {SEO_PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-secondary/10 border border-border/40 rounded-xl p-8 hover:border-primary/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-wide mb-3 text-primary border-b border-border/30 pb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-light mb-6 leading-relaxed">
                    {pillar.description}
                  </p>
                  <ul className="space-y-2.5">
                    {pillar.items.map((item) => (
                      <li key={item} className="text-xs text-foreground/80 flex items-start gap-2 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/70 shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── Why Marketing360 Foley ──── */}
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
              We focus strictly on ROI-driven campaigns, optimizing user pathway architectures rather than vanity traffic metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Compass, title: "Data-First Positioning", desc: "No guesswork. We design growth templates based on analytics diagnostics, keyword metrics, and direct competitor analysis." },
              { icon: Search, title: "Algorithmic Precision", desc: "We adhere strictly to search engine communication processes to configure technical on-page & off-page signals correctly." },
              { icon: Target, title: "Funnel Diagnostics", desc: "We map traffic entries to convertibility goals, examining funnel leakages on mobile & desktop screens." },
              { icon: Zap, title: "Workflow Coordination", desc: "We collaborate with developers to script speed optimizations, correct syntax warnings, and adjust page designs." },
              { icon: LineChart, title: "Weekly Metrics Tracking", desc: "Regular performance reports outlining analytic shifts, keyword placements, and ROI metrics." },
              { icon: Shield, title: "Security & Accessibility", desc: "Semantic site structures built for fast indexing, strict security compliance, and user accessibility." },
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
            // Ready to Scale?
          </p>
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-6">
            Let's Construct Your{" "}
            <span className="text-primary text-glow">Marketing Blueprint</span>
          </h2>
          <p className="text-muted-foreground text-base font-light leading-relaxed mb-6 max-w-xl mx-auto">
            Whether you require deep SEO optimization, search campaigns, or a customized CMO growth blueprint — we provide clear paths to success.
          </p>

          {/* Contact info row */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <span>Free Diagnostics Consult</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <span>Full Strategy Roadmaps</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              <span>Search Engine Compliance</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/#contacts" className="pointer-events-auto">
              <button className="bg-primary text-primary-foreground px-8 py-4 text-sm rounded-sm cursor-pointer hover:brightness-110 transition-all active:scale-[0.97] font-bold select-none">
                Start Strategy Audit
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
