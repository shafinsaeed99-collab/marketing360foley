import { Link } from "react-router-dom"
import {
  Cpu,
  Zap,
  Layers,
  Database,
  Terminal,
  Settings2,
  ArrowRight,
  CheckCircle2,
  Phone,
  Mail,
  Shield,
  Bot,
  GitBranch,
  Network,
  Binary,
  Workflow,
  Sparkles,
  ArrowLeft
} from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

import heroImg from "@/assets/ai-automation-hero.png"
import workflowImg from "@/assets/intelligent-workflow.png"
import agentImg from "@/assets/agentic-ai.png"

const CORE_SERVICES = [
  {
    icon: Bot,
    title: "Cognitive AI Agents",
    description:
      "We design autonomous AI agents capable of reasoning, calling APIs, and executing tasks to resolve complex customer inquiries, manage scheduling, and run support pipelines 24/7.",
    specs: ["Multi-Agent Orchestration", "API Action Integration", "Contextual Reasoning Loops"],
  },
  {
    icon: Workflow,
    title: "Intelligent Process Automation (IPA)",
    description:
      "Connect databases, legacy systems, CRMs, and custom scripts into cohesive end-to-end automated pipelines. We eliminate manual copy-pasting and data entry once and for all.",
    specs: ["Cross-Platform Data Sync", "Automated Form Processing", "System State Triggers"],
  },
  {
    icon: Sparkles,
    title: "LLM & RAG Architectures",
    description:
      "Tailor-made Retrieval-Augmented Generation systems leveraging your proprietary data. Ensure AI actions are grounded, highly accurate, and secure within your facility's parameters.",
    specs: ["Vector Database Vector Search", "Private LLM Hosting Options", "Prompt Alignment & Guardrails"],
  },
  {
    icon: Database,
    title: "Intelligent Document Processing (IDP)",
    description:
      "Utilize advanced OCR and deep learning models to parse, extract, and categorize key information from unstructured invoices, receipts, contracts, and forms automatically.",
    specs: ["Structured JSON Outputs", "99%+ Accuracy Verification", "ERP/CRM Direct Injection"],
  },
  {
    icon: GitBranch,
    title: "API & Webhook Orchestration",
    description:
      "Build custom middleware loops connecting all your SaaS platforms. We synchronize inventory, trigger cross-channel notifications, and coordinate marketing actions securely.",
    specs: ["Robust Rate-Limit Management", "Automated Retries & Logging", "Custom Webhook Receivers"],
  },
  {
    icon: Binary,
    title: "Automated Growth Funnels",
    description:
      "Automate lead qualification, scoring, and follow-ups. Build high-performance workflows that instantly capture and route prospective customer requests to the correct desks.",
    specs: ["AI Lead Qualification", "Custom Email Sequence Loops", "Instant Meeting Booking Sync"],
  },
]

const STATS = [
  { value: "90%", label: "Manual Effort Reduction" },
  { value: "10x", label: "Operational Speed Increase" },
  { value: "24/7", label: "Autonomous Operations" },
  { value: "0%", label: "System Synced Discrepancies" },
]

const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Discovery",
    subtitle: "Identify manual bottlenecks",
    description:
      "We trace your operations and identify the highest impact manual bottlenecks. We map out data flows, dependencies, and potential API integrations.",
  },
  {
    step: "02",
    title: "Architecture",
    subtitle: "Build pipelines & align models",
    description:
      "We design custom workflows, connect API loops, align LLM parameters, and configure secure vector stores with your business data.",
  },
  {
    step: "03",
    title: "Launch",
    subtitle: "Automation deployment & telemetry",
    description:
      "We launch your automated pipelines with strict fail-safes and complete logging dashboards, continuously tuning accuracy and operational speed.",
  },
]

export default function AiAutomationPage() {
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
          <div className="absolute top-[15%] left-[10%] w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[15%] right-[10%] w-[350px] h-[350px] bg-indigo-500/8 rounded-full blur-[100px]" />

          {/* Holographic AI pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
            <line x1="10%" y1="20%" x2="90%" y2="80%" stroke="hsl(var(--primary))" strokeWidth="0.5" strokeDasharray="5 15" />
            <line x1="90%" y1="20%" x2="10%" y2="80%" stroke="hsl(var(--primary))" strokeWidth="0.5" strokeDasharray="5 15" />
            <circle cx="50%" cy="50%" r="6" fill="hsl(var(--primary))" className="animate-ping" />
            <circle cx="50%" cy="50%" r="4" fill="hsl(var(--primary))" />
            <circle cx="30%" cy="35%" r="4" fill="hsl(var(--primary))" />
            <circle cx="70%" cy="65%" r="4" fill="hsl(var(--primary))" />
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
            // Intelligent Systems
          </p>
          <h1
            className="text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[1.05] tracking-[-0.04em] text-white mb-6 uppercase opacity-0 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            AI &amp; Workflow{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(to left, #6366f1, #a855f7, #ec4899)" }}
            >
              Automation
            </span>
          </h1>
          <p
            className="text-white/70 text-lg md:text-xl font-light max-w-2xl mb-8 leading-relaxed opacity-0 animate-fade-up"
            style={{ animationDelay: "0.45s" }}
          >
            Optimize your operations, eliminate manual bottlenecks, and scale your business using cutting-edge Agentic AI and Intelligent Process Automation.
          </p>
          <div className="flex flex-wrap gap-3 opacity-0 animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <a href="#get-started" className="pointer-events-auto">
              <button className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 text-sm rounded-sm cursor-pointer transition-all active:scale-[0.97] font-bold select-none">
                Start Automating
              </button>
            </a>
            <a href="#services-grid" className="pointer-events-auto">
              <button className="bg-white/10 text-white border border-white/20 px-8 py-4 text-sm rounded-sm cursor-pointer hover:bg-white/20 transition-all active:scale-[0.97] font-bold select-none">
                View Capabilities
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
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-purple-500/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src={heroImg}
                alt="Futuristic intelligent agents illustration representing AI automation workflows"
                className="relative rounded-xl border border-border/40 shadow-2xl w-full object-cover aspect-[16/10]"
              />
            </div>

            {/* Content */}
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase mb-3">
                // Operational Excellence
              </p>
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-6">
                Autonomous Systems for the <span className="text-primary">Modern Enterprise</span>
              </h2>
              <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed mb-6">
                Automating operations with custom LLM integrations, retrieval-augmented generation (RAG) structures, and custom API loops. We build secure intelligent agents that handle complex business logic, support pipelines, document processing, and system syncs with zero human supervision needed.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Secure RAG pipelines aligned with your specific database values",
                  "Automated robotic screen tasks for legacy platforms",
                  "Instant notification loops and webhooks orchestration",
                  "Continuous latency and accuracy audit checks",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground/80">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#get-started" className="inline-flex">
                <button className="bg-primary text-primary-foreground px-6 py-3 text-sm rounded-sm cursor-pointer hover:brightness-110 transition-all active:scale-[0.97] font-bold select-none flex items-center gap-2">
                  Diagnose Bottlenecks <ArrowRight className="w-4 h-4" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ──── Dual Feature Cards (Workflow + Agentic AI) ──── */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-secondary/20 border-y border-border/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-line-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line-color)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Workflow Card */}
            <div className="glow-card bg-background border border-border/60 rounded-xl overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src={workflowImg}
                  alt="Visual representation of automated workflow pipelines with glowing icons"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              </div>
              <div className="p-8 pt-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Workflow className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-bold uppercase tracking-wide">Intelligent Workflows</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-light">
                  Connect database updates, legacy systems, CRM management, and messaging APIs into a single seamless loop. Our automation engineers script multi-system integrations to ensure zero data discrepancies and lightning-fast speed, keeping your departments continuously aligned.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["System Integration", "Data Sync", "Automated Triggers", "CRM Pipelines"].map((tag) => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider bg-primary/10 text-primary px-3 py-1.5 rounded-full font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Agentic AI Card */}
            <div className="glow-card bg-background border border-border/60 rounded-xl overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src={agentImg}
                  alt="Holographic representation of task queues and agentic AI brains"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              </div>
              <div className="p-8 pt-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Bot className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-bold uppercase tracking-wide">Agentic AI &amp; LLMs</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-light">
                  Deploy custom generative AI models trained on your brand guidelines. Our cognitive systems parse emails, draft high-quality content, score incoming operational threats, and execute multi-step action plans based on contextual business criteria.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Cognitive Reasoning", "Private LLMs", "Task Orchestration", "Natural Language"].map((tag) => (
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

      {/* ──── Core Capabilities Grid ──── */}
      <section id="services-grid" className="py-24 px-6 md:px-12 lg:px-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16 max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase mb-3">
              // Core Capabilities
            </p>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4">
              AI Automation Services
            </h2>
            <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed">
              We leverage data architecture and custom cognitive scripting to deliver robust operational scaling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {CORE_SERVICES.map((service) => {
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

      {/* ──── Roadmap Workflow Section ──── */}
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
              Our 3-step automation framework maps out manual bottlenecks and deploys robust, secure pipelines with fail-safes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {WORKFLOW_STEPS.map((item, idx) => (
              <div key={item.step} className="relative group">
                {/* Connector line */}
                {idx < WORKFLOW_STEPS.length - 1 && (
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
              We focus strictly on secure, scalable pipelines with built-in zero-trust security and custom cognitive engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Cpu, title: "Custom Built", desc: "No generic templates. We code bespoke logic designed to slide directly into your specific database configurations and software stack." },
              { icon: Shield, title: "Enterprise Security", desc: "Built-in zero-trust authentication criteria ensures all proprietary business data stays fully private and encrypted." },
              { icon: Zap, title: "Scalability Focused", desc: "Optimized script engines capable of processing millions of webhook notifications and database transactions daily." },
              { icon: Terminal, title: "Interactive Mockups", desc: "Validate pipeline loops and prompt compliance scopes in a test sandbox environment before pushing to production." },
              { icon: Network, title: "Actionable Telemetry", desc: "Trace pipeline operational latency, LLM cost metrics, automation run counts, and error-rates via clear UI dashboard logs." },
              { icon: Settings2, title: "Always-On Failbacks", desc: "Integrated warning mechanisms notify our engineers immediately in the event that an API endpoint suffers downtime." },
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
            <span className="text-primary text-glow">Automation Roadmap</span>
          </h2>
          <p className="text-muted-foreground text-base font-light leading-relaxed mb-6 max-w-xl mx-auto">
            Whether you require LLM optimization, custom database webhooks, or robotic support agents — we construct secure operational pathways that deliver results.
          </p>

          {/* Contact info row */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <span>Free Automation Analysis</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <span>Tailored Integration Maps</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              <span>Enterprise Data Compliance</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/#contacts" className="pointer-events-auto">
              <button className="bg-primary text-primary-foreground px-8 py-4 text-sm rounded-sm cursor-pointer hover:brightness-110 transition-all active:scale-[0.97] font-bold select-none">
                Start Automation Audit
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
