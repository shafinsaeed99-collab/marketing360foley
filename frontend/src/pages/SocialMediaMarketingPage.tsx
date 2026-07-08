import { Link } from "react-router-dom"
import {
  Megaphone,
  BarChart3,
  Users,
  Zap,
  Target,
  TrendingUp,
  PenTool,
  Calendar,
  ArrowRight,
  Eye,
  MessageCircle,
  Share2,
} from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const SERVICES = [
  {
    icon: PenTool,
    title: "Content Strategy",
    description:
      "Data-driven content calendars tailored to your audience. We create thumb-stopping visuals, copy, and video content that builds brand authority and drives engagement.",
    specs: ["Content Calendar Planning", "Brand Voice Development", "Visual Asset Creation"],
  },
  {
    icon: Target,
    title: "Paid Advertising",
    description:
      "Precision-targeted ad campaigns across Meta, Google, TikTok, and LinkedIn. We optimize for ROAS with continuous A/B testing and audience refinement.",
    specs: ["Meta & Google Ads", "Retargeting Funnels", "A/B Creative Testing"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "Real-time dashboards tracking every metric that matters. Weekly performance reports with actionable insights to scale what's working and cut what's not.",
    specs: ["Custom KPI Dashboards", "Weekly Performance Reports", "Competitor Benchmarking"],
  },
  {
    icon: Users,
    title: "Community Management",
    description:
      "Active engagement with your audience 24/7. We respond to comments, manage DMs, moderate discussions, and nurture your community into loyal brand advocates.",
    specs: ["24/7 Comment Moderation", "DM Response Automation", "Crisis Communication"],
  },
  {
    icon: Megaphone,
    title: "Influencer Marketing",
    description:
      "Strategic partnerships with creators who align with your brand. We handle outreach, negotiations, content briefs, and performance tracking end-to-end.",
    specs: ["Creator Sourcing & Vetting", "Campaign Negotiation", "UGC Collection"],
  },
  {
    icon: TrendingUp,
    title: "Growth Hacking",
    description:
      "Viral loops, referral programs, and engagement strategies designed to accelerate follower growth organically. We turn followers into customers.",
    specs: ["Viral Content Frameworks", "Engagement Automation", "Follower-to-Customer Funnels"],
  },
]

const STATS = [
  { value: "500%", label: "Avg. ROAS" },
  { value: "2M+", label: "Impressions / Month" },
  { value: "85%", label: "Engagement Increase" },
  { value: "40+", label: "Brands Scaled" },
]

const PLATFORMS = [
  { name: "Instagram", letter: "Ig", color: "from-pink-500 to-purple-600" },
  { name: "Facebook", letter: "Fb", color: "from-blue-600 to-blue-500" },
  { name: "TikTok", letter: "Tk", color: "from-gray-800 to-gray-600" },
  { name: "LinkedIn", letter: "Li", color: "from-blue-700 to-blue-500" },
  { name: "X / Twitter", letter: "X", color: "from-gray-700 to-gray-500" },
  { name: "YouTube", letter: "Yt", color: "from-red-600 to-red-500" },
  { name: "Pinterest", letter: "Pi", color: "from-red-700 to-red-500" },
  { name: "Google Ads", letter: "G", color: "from-green-600 to-yellow-500" },
]

export default function SocialMediaMarketingPage() {
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
          <div className="absolute top-[15%] left-[10%] w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[15%] right-[10%] w-[350px] h-[350px] bg-blue-500/8 rounded-full blur-[100px]" />

          {/* Social media bubbles decoration */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {/* Floating circles representing social platforms */}
            <circle cx="75%" cy="20%" r="30" fill="none" stroke="rgba(168, 85, 247, 0.15)" strokeWidth="1" />
            <circle cx="75%" cy="20%" r="50" fill="none" stroke="rgba(168, 85, 247, 0.08)" strokeWidth="1" />
            <circle cx="75%" cy="20%" r="70" fill="none" stroke="rgba(168, 85, 247, 0.04)" strokeWidth="1" />

            <circle cx="85%" cy="50%" r="20" fill="none" stroke="rgba(236, 72, 153, 0.15)" strokeWidth="1" />
            <circle cx="85%" cy="50%" r="40" fill="none" stroke="rgba(236, 72, 153, 0.08)" strokeWidth="1" />

            <circle cx="70%" cy="70%" r="25" fill="none" stroke="rgba(99, 102, 241, 0.15)" strokeWidth="1" />
            <circle cx="70%" cy="70%" r="45" fill="none" stroke="rgba(99, 102, 241, 0.08)" strokeWidth="1" />

            {/* Connection lines */}
            <line x1="75%" y1="20%" x2="85%" y2="50%" stroke="rgba(168, 85, 247, 0.1)" strokeWidth="0.5" strokeDasharray="4 8" />
            <line x1="85%" y1="50%" x2="70%" y2="70%" stroke="rgba(168, 85, 247, 0.1)" strokeWidth="0.5" strokeDasharray="4 8" />

            {/* Pulsing node */}
            <circle cx="75%" cy="20%" r="5" fill="#a855f7" className="animate-ping" />
            <circle cx="75%" cy="20%" r="4" fill="#a855f7" />
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
            <span className="text-pink-400">SOCIAL MEDIA MARKETING</span>
          </div>

          <p
            className="text-xs font-semibold tracking-[0.25em] text-pink-400 uppercase mb-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            // Growth Engine
          </p>
          <h1
            className="text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[1.05] tracking-[-0.04em] text-white mb-6 uppercase opacity-0 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Social Media{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(to left, #ec4899, #a855f7, #6366f1)" }}
            >
              Marketing
            </span>
          </h1>
          <p
            className="text-white/70 text-lg md:text-xl font-light max-w-2xl mb-8 leading-relaxed opacity-0 animate-fade-up"
            style={{ animationDelay: "0.45s" }}
          >
            We turn scrollers into followers and followers into customers. Data-driven strategies, thumb-stopping content, and relentless optimization across every platform.
          </p>
          <div className="flex flex-wrap gap-3 opacity-0 animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <a href="#contact-cta" className="pointer-events-auto">
              <button className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white px-8 py-4 text-sm rounded-sm cursor-pointer transition-all active:scale-[0.97] font-bold select-none">
                Scale My Brand
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

      {/* ──── Services Grid ──── */}
      <section id="services-grid" className="py-24 px-6 md:px-12 lg:px-24 bg-background relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16 max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase mb-3">
              // Full-Stack Marketing
            </p>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4">
              Marketing Services
            </h2>
            <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed">
              From content creation to paid advertising — a complete social media engine built to grow your brand and drive revenue.
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

      {/* ──── Platforms Section ──── */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-secondary/20 border-y border-border/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-line-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line-color)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase mb-3">
              // Platform Mastery
            </p>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4">
              We Dominate Every Platform
            </h2>
            <p className="text-muted-foreground text-sm font-light leading-relaxed">
              Strategic presence across all major social platforms — each with a custom approach optimized for the platform's unique algorithm and audience behavior.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {PLATFORMS.map((platform) => (
              <div
                key={platform.name}
                className="bg-secondary/20 border border-border/50 rounded-lg p-6 flex flex-col items-center justify-center text-center group hover:border-primary/45 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${platform.color} flex items-center justify-center mb-3 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300`}>
                  <span className="text-white text-lg font-bold font-mono">
                    {platform.letter}
                  </span>
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground group-hover:text-foreground transition-colors">
                  {platform.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── How It Works ──── */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase mb-3">
              // What You Get
            </p>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4">
              The SENTINEL Advantage
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Eye, title: "Brand Visibility", desc: "Increase your brand's reach and visibility with strategic content distribution and paid amplification." },
              { icon: MessageCircle, title: "Audience Engagement", desc: "Build genuine connections with your audience through authentic conversations and community building." },
              { icon: Zap, title: "Rapid Growth", desc: "Accelerate follower growth with proven frameworks and viral content strategies that compound over time." },
              { icon: Share2, title: "Organic Reach", desc: "Algorithm-friendly content strategies that maximize organic reach without solely depending on paid spend." },
              { icon: Calendar, title: "Consistent Presence", desc: "Never miss a post. Automated scheduling and pre-planned content calendars keep your brand always-on." },
              { icon: ArrowRight, title: "Revenue Impact", desc: "We tie every social metric to business outcomes. Track how social directly impacts your bottom line." },
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
      <section id="contact-cta" className="py-24 px-6 md:px-12 lg:px-24 bg-secondary/20 border-t border-border/40 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase mb-3">
            // Ready to Grow?
          </p>
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-6">
            Let's Scale Your{" "}
            <span className="text-primary text-glow">Social Presence</span>
          </h2>
          <p className="text-muted-foreground text-base font-light leading-relaxed mb-10 max-w-xl mx-auto">
            Stop leaving engagement on the table. Let our team build a social media strategy that turns followers into revenue.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/#contacts" className="pointer-events-auto">
              <button className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white px-8 py-4 text-sm rounded-sm cursor-pointer transition-all active:scale-[0.97] font-bold select-none">
                Get a Free Audit
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
