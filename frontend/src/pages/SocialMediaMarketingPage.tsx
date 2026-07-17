import { Link } from "react-router-dom"
import {
  Megaphone,
  BarChart3,
  Users,
  Target,
  TrendingUp,
  PenTool,
  Calendar,
  ArrowRight,
  Eye,
  MessageCircle,
  CheckCircle2,
  Headphones,
  Search,
  Lightbulb,
  RefreshCw,
  DollarSign,
  Phone,
  Mail,
  Heart,
  Award,
  ArrowLeft,
} from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

import strategyImg from "@/assets/social-media-strategy.png"
import calendarImg from "@/assets/content-calendar.png"
import campaignsImg from "@/assets/social-campaigns.png"

const SERVICES = [
  {
    icon: PenTool,
    title: "Content Strategy",
    description:
      "Data-driven content calendars tailored to your audience. We create thumb-stopping visuals, copy, and video content that builds brand authority and drives engagement across every platform.",
    specs: ["Content Calendar Planning", "Brand Voice Development", "Visual Asset Creation"],
  },
  {
    icon: Target,
    title: "Paid Social Advertising",
    description:
      "Precision-targeted ad campaigns across Meta, Google, TikTok, and LinkedIn. Our certified advertising specialists help you determine the right budget and targeting to achieve the best results.",
    specs: ["Meta & Google Ads", "Retargeting Funnels", "A/B Creative Testing"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "We provide a comprehensive analysis of the strengths and weaknesses of your presence on social media platforms like Facebook, Instagram, Twitter, LinkedIn and TikTok — with actionable insights.",
    specs: ["Custom KPI Dashboards", "Weekly Performance Reports", "Competitor Benchmarking"],
  },
  {
    icon: Users,
    title: "Community Management",
    description:
      "95% of Fortune 500 companies don't just do social media management — they actively listen, engage, and respond to customer queries. We bring that same level of dedication to your brand.",
    specs: ["24/7 Comment Moderation", "DM Response Management", "Crisis Communication"],
  },
  {
    icon: Megaphone,
    title: "Influencer Marketing",
    description:
      "Strategic partnerships with creators who align with your brand. We handle outreach, negotiations, content briefs, and performance tracking end-to-end to amplify your reach.",
    specs: ["Creator Sourcing & Vetting", "Campaign Negotiation", "UGC Collection"],
  },
  {
    icon: TrendingUp,
    title: "Growth & Followership",
    description:
      "We are passionate about growing qualified followers through comprehensive and dynamic strategies. Boost the quantity and quality of your followers with a variety of social campaign tactics.",
    specs: ["Viral Content Frameworks", "Engagement Optimization", "Follower-to-Customer Funnels"],
  },
]

const STATS = [
  { value: "81%", label: "Consumers Buy from Social Referrals" },
  { value: "95%", label: "Fortune 500s Actively Engage" },
  { value: "3x", label: "Avg. Engagement Increase" },
  { value: "24/7", label: "Social Monitoring" },
]

const STRATEGY_STEPS = [
  {
    step: "01",
    icon: Headphones,
    title: "Social Listening",
    description: "We analyze your brand on social networks to see what's getting likes and comments, and identify opportunities for growth.",
  },
  {
    step: "02",
    icon: Search,
    title: "Channel Surfing",
    description: "All social platforms are channels. We know which ones are right for your brand and why — so your efforts go where they matter most.",
  },
  {
    step: "03",
    icon: Lightbulb,
    title: "Brainstorming",
    description: "We brainstorm content ideas and campaigns that are designed to make customers buy into your brand and become loyal advocates.",
  },
  {
    step: "04",
    icon: RefreshCw,
    title: "Devise & Revise",
    description: "Crafting strategies that deliver value to your business is the core of everything we do. We iterate until results are maximized.",
  },
  {
    step: "05",
    icon: DollarSign,
    title: "Driving the ROI",
    description: "All your paid campaigns are destined to wow you and your profit accounts. We tie every metric to real business outcomes.",
  },
]

const PLATFORMS = [
  { name: "Instagram", logo: "https://cdn.simpleicons.org/instagram/E4405F" },
  { name: "Facebook", logo: "https://cdn.simpleicons.org/facebook/1877F2" },
  { name: "TikTok", logo: "https://cdn.simpleicons.org/tiktok/000000" },
  { name: "LinkedIn", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" },
  { name: "X / Twitter", logo: "https://cdn.simpleicons.org/x/000000" },
  { name: "YouTube", logo: "https://cdn.simpleicons.org/youtube/FF0000" },
  { name: "Pinterest", logo: "https://cdn.simpleicons.org/pinterest/BD081C" },
  { name: "Google Ads", logo: "https://cdn.simpleicons.org/googleads/4285F4" },
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
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-pink-400 hover:text-pink-300 uppercase tracking-widest mb-8 opacity-0 animate-fade-up border border-pink-500/30 bg-pink-500/5 px-4 py-2 rounded-sm transition-all hover:bg-pink-500/10 pointer-events-auto"
            style={{ animationDelay: "0.1s" }}
          >
            <ArrowLeft className="w-4 h-4" /> Go Back
          </Link>

          <p
            className="text-xs font-semibold tracking-[0.25em] text-pink-400 uppercase mb-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            // Social Media Marketing
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
            Good social media marketing doesn't happen overnight. It takes careful strategizing, hours of brainstorming, and creative execution to get things rolling. Our social media pros put together a fool-proof digital strategy for your brand and set you on an ROI-driven path.
          </p>
          <div className="flex flex-wrap gap-3 opacity-0 animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <a href="#get-started" className="pointer-events-auto">
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

      {/* ──── Social Media Presence (image + text) ──── */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-pink-500/20 to-purple-500/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src={strategyImg}
                alt="Social media marketing strategy meeting with analytics dashboards"
                className="relative rounded-xl border border-border/40 shadow-2xl w-full object-cover aspect-[16/10]"
              />
            </div>

            {/* Content */}
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase mb-3">
                // Social Media Presence
              </p>
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-6">
                Passionate{" "}
                <span className="text-primary">Social Media Marketing</span>
              </h2>
              <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed mb-6">
                We have a full-time, in-house team of passionate social media marketing professionals. We collaborate with business owners and marketing managers to design social media campaign strategies that grow followers, engagement and loyalty.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Comprehensive social media audit and strategy",
                  "Creative campaign strategies for every major platform",
                  "Content calendars and roadmap planning",
                  "Real-time analytics and performance tracking",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground/80">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#get-started" className="inline-flex">
                <button className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white px-6 py-3 text-sm rounded-sm cursor-pointer transition-all active:scale-[0.97] font-bold select-none flex items-center gap-2">
                  Get Started <ArrowRight className="w-4 h-4" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ──── Creative Campaigns & Content Calendars (two-column feature) ──── */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-secondary/20 border-y border-border/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-line-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line-color)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Creative Campaign Strategies Card */}
            <div className="glow-card bg-background border border-border/60 rounded-xl overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src={campaignsImg}
                  alt="Dynamic social media campaign with floating social icons and neon effects"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              </div>
              <div className="p-8 pt-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Megaphone className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-bold uppercase tracking-wide">Creative Campaign Strategies</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-light">
                  Let our team design creative campaign strategies for the major social platforms that increase your following, boost your engagement and enhance the loyalty of your customers. We craft strategies that deliver real value to your business and turn casual followers into brand advocates.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Facebook", "Instagram", "TikTok", "LinkedIn", "YouTube"].map((tag) => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider bg-primary/10 text-primary px-3 py-1.5 rounded-full font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Content Calendars & Roadmap Card */}
            <div className="glow-card bg-background border border-border/60 rounded-xl overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src={calendarImg}
                  alt="Content calendar and social media planning on desktop screen"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              </div>
              <div className="p-8 pt-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-bold uppercase tracking-wide">Content Calendars & Roadmap</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-light">
                  Our social media marketing team creates strategic content calendars that allow your business to see what creative content will be posted, when it will be posted, and the cadence and content strategy for each social platform. Never miss a post with our always-on approach.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Scheduling", "Content Mix", "Brand Voice", "Analytics", "Reporting"].map((tag) => (
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
              Our deep passion for social media marketing has driven us to thoroughly study and understand the various social media platforms and how to properly leverage the power from each channel to meet your social media goals.
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

      {/* ──── Strategy Steps Section ──── */}
      <section id="get-started" className="py-24 px-6 md:px-12 lg:px-24 bg-secondary/20 border-y border-border/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-line-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line-color)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase mb-3">
              // What Is All Involved
            </p>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4">
              Social Marketing Strategy
            </h2>
            <p className="text-muted-foreground text-sm font-light leading-relaxed">
              Our holistic approach to social media marketing has provided measurable results for everything from local businesses to national e-commerce websites. Our certified advertising specialists can help you determine the right advertising budget and targeting options to achieve the best results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {STRATEGY_STEPS.map((item) => {
              const StepIcon = item.icon
              return (
                <div key={item.step} className="relative group">
                  <div className="bg-background border border-border/60 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 h-full text-center">
                    <span className="text-2xl font-bold text-primary/20 font-mono block mb-3 group-hover:text-primary/40 transition-colors">
                      — {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <StepIcon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-semibold mb-2 uppercase tracking-wide group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-xs font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ──── Platforms Section ──── */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase mb-3">
              // Social Media Platforms
            </p>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4">
              We Dominate Every Platform
            </h2>
            <p className="text-muted-foreground text-sm font-light leading-relaxed">
              Our deep passion for social media marketing has driven us to thoroughly study and understand the various social media platforms and how to properly leverage the power from each channel to meet your social media goals.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {PLATFORMS.map((platform) => (
              <div
                key={platform.name}
                className="bg-secondary/20 border border-border/50 rounded-lg p-6 flex flex-col items-center justify-center text-center group hover:border-primary/45 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-3 p-2">
                  <img
                    src={platform.logo}
                    alt={`${platform.name} logo`}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground group-hover:text-foreground transition-colors">
                  {platform.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── What You Get (Followers, Engagement, Loyalty) ──── */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-secondary/20 border-y border-border/40">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase mb-3">
              // What You Get
            </p>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4">
              The Marketing360 Foley Advantage
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Users, title: "Increase Followership", desc: "We are passionate about growing qualified followers through comprehensive and dynamic strategies. Boost the quantity and quality of your followers with a variety of social campaign tactics." },
              { icon: MessageCircle, title: "Boost Engagement", desc: "Our team designs creative campaigns and content that engages followers and enhances conversation around your brand and products or services on social media." },
              { icon: Heart, title: "Build Loyalty", desc: "In today's hyper-social world, turning your customers into advocates with reviews, social shares and word of mouth is a powerful way to market your business and build your brand." },
              { icon: Eye, title: "Brand Visibility", desc: "Increase your brand's reach and visibility with strategic content distribution and paid amplification across every major social platform." },
              { icon: BarChart3, title: "Conversion Rate Optimization", desc: "From landing page design to heatmaps and form analytics, we love to optimize for conversions. CRO is a critical aspect of our digital marketing approach." },
              { icon: Award, title: "Revenue Impact", desc: "We tie every social metric to business outcomes. Track how social media directly impacts your bottom line with transparent, data-driven reporting." },
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
            // Ready to Grow?
          </p>
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-6">
            Let's Scale Your{" "}
            <span className="text-primary text-glow">Social Presence</span>
          </h2>
          <p className="text-muted-foreground text-base font-light leading-relaxed mb-6 max-w-xl mx-auto">
            Stop leaving engagement on the table. Let our team build a social media strategy that turns followers into revenue and casual browsers into loyal brand advocates.
          </p>

          {/* Contact info row */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <span>Custom Strategies</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-primary" />
              <span>ROI-Driven Results</span>
            </div>
          </div>

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
