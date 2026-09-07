import React, { useState, useRef } from "react"
import { Link } from "react-router-dom"
import {
  CheckCircle2,
  Send,
  Globe,
  MapPin,
  Clock,
  Zap,
  ArrowRight,
  User,
  Building2,
  Mail,
  Phone,
  Briefcase,
  Layers,
  ChevronDown,
  ShieldCheck,
  Lock,
  ArrowLeft
} from "lucide-react"

interface AuditFormData {
  name: string
  business: string
  email: string
  phone: string
  websiteOrSocial: string
  whatYouDo: string
  serviceNeeded: string
  botField: string
}

export default function FreeAudit() {
  const [formData, setFormData] = useState<AuditFormData>({
    name: "",
    business: "",
    email: "",
    phone: "",
    websiteOrSocial: "",
    whatYouDo: "Restaurants & Retail",
    serviceNeeded: "Web Development",
    botField: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [activeService, setActiveService] = useState<string>("Web Development")
  const nameInputRef = useRef<HTMLInputElement>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
    if (e.target.name === "serviceNeeded") {
      setActiveService(e.target.value)
    }
  }

  // Handle clicking on any Service card
  const handleSelectService = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      serviceNeeded: service
    }))
    setActiveService(service)

    const formSection = document.getElementById("free-audit-section")
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" })
    }

    setTimeout(() => {
      if (nameInputRef.current) {
        nameInputRef.current.focus()
      }
    }, 450)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const payload: Record<string, string> = {
      "form-name": "free-audit",
      name: formData.name,
      business: formData.business,
      email: formData.email,
      phone: formData.phone,
      websiteOrSocial: formData.websiteOrSocial,
      whatYouDo: formData.whatYouDo,
      serviceNeeded: formData.serviceNeeded
    }

    if (formData.botField) {
      payload["bot-field"] = formData.botField
    }

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(payload).toString()
    })
      .then((res) => {
        setIsSubmitting(false)
        if (res.ok || res.status === 200 || res.status === 0) {
          setIsSuccess(true)
        } else {
          setIsSuccess(true)
        }
      })
      .catch((error) => {
        console.warn("Netlify form submission notice:", error)
        setIsSubmitting(false)
        setIsSuccess(true)
      })
  }

  const scrollToAudit = (e: React.MouseEvent) => {
    e.preventDefault()
    const el = document.getElementById("free-audit-section")
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
    setTimeout(() => {
      if (nameInputRef.current) {
        nameInputRef.current.focus()
      }
    }, 450)
  }

  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault()
    const el = document.getElementById("services-section")
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="bg-[#0d0f12] text-white min-h-screen font-sans selection:bg-primary selection:text-white">
      {/* ===========================================
          HEADER
          =========================================== */}
      <header className="border-b border-[#2a2d31]/80 sticky top-0 z-50 bg-[#0d0f12]/95 backdrop-blur-md">
        <div className="max-w-[1000px] mx-auto px-6 sm:px-8 py-5 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-lg sm:text-xl font-semibold tracking-tight select-none hover:opacity-90 transition-opacity">
            <span className="text-primary font-bold">MARKETING360</span> <span className="text-white font-bold">FOLEY</span>
          </Link>

          {/* Navigation links with middle dots */}
          <nav className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-[#9ca3af]">
            <a href="#services-section" onClick={scrollToServices} className="hover:text-white transition-colors cursor-pointer">
              Services
            </a>
            <span className="text-[#4b5563]">·</span>
            <a href="#free-audit-section" onClick={scrollToAudit} className="hover:text-white transition-colors cursor-pointer">
              Free Audit
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-[1000px] mx-auto">
        {/* ===========================================
            1. HERO SECTION
            =========================================== */}
        <section className="px-6 sm:px-8 py-16 sm:py-20 md:py-24 border-b border-[#2a2d31]/80">
          <div className="max-w-[780px]">
            {/* Back Button */}
            <div className="mb-6">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#9ca3af] hover:text-white bg-[#1a1d21] hover:bg-[#22272e] border border-[#2a2d31] hover:border-primary/40 px-3.5 py-1.5 rounded-full transition-all duration-200 group cursor-pointer shadow-sm"
              >
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform text-primary" />
                <span>Back to Home</span>
              </Link>
            </div>

            {/* Eyebrow */}
            <p className="text-xs font-semibold tracking-[0.15em] text-[#9ca3af] uppercase mb-4">
              FOLEY, ALABAMA · GULF COAST
            </p>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-white leading-[1.15] mb-5">
              Get Found. Get Chosen. Get Automated.
            </h1>

            {/* Subtitle */}
            <p className="text-[#9ca3af] text-base sm:text-lg leading-relaxed mb-8 max-w-[700px]">
              The Gulf Coast agency that puts local businesses on page 1 — and uses AI to answer every lead, book every appointment, and follow up while you sleep.
            </p>

            {/* CTA Button */}
            <div>
              <a
                href="#free-audit-section"
                onClick={scrollToAudit}
                className="inline-flex items-center justify-center bg-primary hover:brightness-110 active:scale-[0.98] text-primary-foreground text-sm sm:text-base font-bold px-7 py-3.5 rounded-full shadow-[0_4px_20px_rgba(168,85,247,0.35)] hover:shadow-[0_6px_25px_rgba(168,85,247,0.5)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                Get My Free Local Visibility Audit
              </a>
            </div>
          </div>
        </section>

        {/* ===========================================
            2. COMPETITION / PROBLEM SECTION (MODERN ELEVATED)
            =========================================== */}
        <section className="px-6 sm:px-8 py-16 sm:py-20 border-b border-[#2a2d31]/80 relative overflow-hidden">
          {/* Subtle ambient backdrop glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/5 blur-[100px] pointer-events-none rounded-full" />

          <div className="relative z-10 max-w-[820px]">
            {/* Modern Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-semibold tracking-wider uppercase mb-5 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              The Reality of Local Search
            </div>

            {/* Headline with subtle gradient highlight */}
            <h2 className="text-2xl sm:text-3xl md:text-[2rem] font-bold text-white tracking-tight leading-[1.25] mb-4">
              Your customers are searching right now.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-primary to-indigo-300">
                Are they finding you or your competitor?
              </span>
            </h2>

            {/* Context Paragraph */}
            <p className="text-[#9ca3af] text-base sm:text-lg leading-relaxed mb-8">
              Thousands search daily for what you sell — from beach traffic on Highway 59 to locals downtown. When there's friction in your digital presence, they don't wait — they call the next name.
            </p>

            {/* 3 Core Points / Modern Leak Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-7">
              {/* Card 1: Slow Website */}
              <div className="bg-[#1a1d21]/90 border border-[#2a2d31] hover:border-primary/40 rounded-xl p-5 transition-all duration-200 group hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-3.5 group-hover:scale-105 transition-transform">
                    <Globe className="w-5 h-5" />
                  </div>
                  <h3 className="text-white font-bold text-base mb-1.5 flex items-center justify-between">
                    Slow Website
                    <span className="text-[10px] font-bold text-red-400 bg-red-500/10 px-2 py-0.5 rounded uppercase tracking-wider">
                      Lost Leads
                    </span>
                  </h3>
                  <p className="text-[#9ca3af] text-xs sm:text-sm leading-relaxed">
                    Visitors bounce in 3 seconds before seeing what you have to offer.
                  </p>
                </div>
              </div>

              {/* Card 2: Stale Google Listing */}
              <div className="bg-[#1a1d21]/90 border border-[#2a2d31] hover:border-primary/40 rounded-xl p-5 transition-all duration-200 group hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-3.5 group-hover:scale-105 transition-transform">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="text-white font-bold text-base mb-1.5 flex items-center justify-between">
                    Stale Listing
                    <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded uppercase tracking-wider">
                      Page 2 Trap
                    </span>
                  </h3>
                  <p className="text-[#9ca3af] text-xs sm:text-sm leading-relaxed">
                    Buried on Google Maps where 90% of local customers never look.
                  </p>
                </div>
              </div>

              {/* Card 3: Unanswered Forms */}
              <div className="bg-[#1a1d21]/90 border border-[#2a2d31] hover:border-primary/40 rounded-xl p-5 transition-all duration-200 group hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-primary mb-3.5 group-hover:scale-105 transition-transform">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h3 className="text-white font-bold text-base mb-1.5 flex items-center justify-between">
                    Unanswered Form
                    <span className="text-[10px] font-bold text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded uppercase tracking-wider">
                      Missed Sales
                    </span>
                  </h3>
                  <p className="text-[#9ca3af] text-xs sm:text-sm leading-relaxed">
                    Leads go cold while you're busy handling customers on the job.
                  </p>
                </div>
              </div>
            </div>

            {/* Modern Solution Banner */}
            <div className="bg-gradient-to-r from-primary/15 via-[#1a1d21] to-primary/10 border border-primary/30 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-[0_4px_20px_rgba(168,85,247,0.1)]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold shrink-0 shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                  <Zap className="w-4 h-4 fill-current" />
                </div>
                <div>
                  <p className="text-sm sm:text-base font-semibold text-white">
                    We fix all three. <span className="text-primary font-bold">Fast &amp; Automated.</span>
                  </p>
                  <p className="text-xs text-[#9ca3af]">
                    Rank #1 locally, capture every lead instantly, and turn traffic into paying clients.
                  </p>
                </div>
              </div>

              <a
                href="#free-audit-section"
                onClick={scrollToAudit}
                className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-white bg-primary/20 hover:bg-primary/30 border border-primary/40 px-4 py-2.5 rounded-lg transition-all cursor-pointer whitespace-nowrap self-start sm:self-center"
              >
                <span>Check Your Score</span>
                <ArrowRight className="w-3.5 h-3.5 text-primary" />
              </a>
            </div>
          </div>
        </section>

        {/* ===========================================
            3. SERVICES SECTION
            =========================================== */}
        <section id="services-section" className="px-6 sm:px-8 py-14 sm:py-16 border-b border-[#2a2d31]/80 scroll-mt-20">
          <div className="max-w-[780px] mb-8">
            <p className="text-xs font-semibold tracking-[0.15em] text-[#9ca3af] uppercase mb-2">
              SERVICES
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Four ways we grow your business
            </h2>
          </div>

          {/* 2x2 Grid with Interactive Service Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {/* Card 1: Web Development */}
            <div
              onClick={() => handleSelectService("Web Development")}
              className={`rounded-xl p-6 sm:p-7 transition-all duration-200 cursor-pointer border ${
                activeService === "Web Development"
                  ? "bg-[#1a1d21] border-primary shadow-[0_0_20px_rgba(168,85,247,0.2)]"
                  : "bg-[#1a1d21] border-[#2a2d31] hover:border-[#3b424a] hover:-translate-y-0.5"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Web Development
                </h3>
                {activeService === "Web Development" && (
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                    Selected
                  </span>
                )}
              </div>
              <p className="text-[#9ca3af] text-sm sm:text-base">
                A site that sells, not just sits there.
              </p>
            </div>

            {/* Card 2: SEO */}
            <div
              onClick={() => handleSelectService("SEO")}
              className={`rounded-xl p-6 sm:p-7 transition-all duration-200 cursor-pointer border ${
                activeService === "SEO"
                  ? "bg-[#1a1d21] border-primary shadow-[0_0_20px_rgba(168,85,247,0.2)]"
                  : "bg-[#1a1d21] border-[#2a2d31] hover:border-[#3b424a] hover:-translate-y-0.5"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  SEO
                </h3>
                {activeService === "SEO" && (
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                    Selected
                  </span>
                )}
              </div>
              <p className="text-[#9ca3af] text-sm sm:text-base">
                Found first, chosen first.
              </p>
            </div>

            {/* Card 3: Social Media */}
            <div
              onClick={() => handleSelectService("Social Media Marketing")}
              className={`rounded-xl p-6 sm:p-7 transition-all duration-200 cursor-pointer border ${
                activeService === "Social Media Marketing"
                  ? "bg-[#1a1d21] border-primary shadow-[0_0_20px_rgba(168,85,247,0.2)]"
                  : "bg-[#1a1d21] border-[#2a2d31] hover:border-[#3b424a] hover:-translate-y-0.5"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Social Media
                </h3>
                {activeService === "Social Media Marketing" && (
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                    Selected
                  </span>
                )}
              </div>
              <p className="text-[#9ca3af] text-sm sm:text-base">
                Fans who become customers.
              </p>
            </div>

            {/* Card 4: AI Automation */}
            <div
              onClick={() => handleSelectService("AI Automation")}
              className={`rounded-xl p-6 sm:p-7 transition-all duration-200 cursor-pointer border ${
                activeService === "AI Automation"
                  ? "bg-[#1a1d21] border-primary shadow-[0_0_20px_rgba(168,85,247,0.2)]"
                  : "bg-[#1a1d21] border-[#2a2d31] hover:border-[#3b424a] hover:-translate-y-0.5"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  AI Automation
                </h3>
                {activeService === "AI Automation" && (
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                    Selected
                  </span>
                )}
              </div>
              <p className="text-[#9ca3af] text-sm sm:text-base">
                Every lead handled, even off the clock.
              </p>
            </div>
          </div>
        </section>

        {/* ===========================================
            4. FREE AUDIT CTA / FORM SECTION (MODERN ELEVATED)
            =========================================== */}
        <section
          id="free-audit-section"
          className="px-6 sm:px-8 py-20 sm:py-24 border-b border-[#2a2d31]/80 text-center scroll-mt-20 relative overflow-hidden"
        >
          {/* Subtle ambient backdrop radial glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-primary/10 blur-[130px] pointer-events-none rounded-full" />

          <div className="relative z-10 max-w-[700px] mx-auto">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-semibold tracking-wider uppercase mb-4 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              100% Free · No Obligation
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
              Start with a free{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-primary to-indigo-300">
                Local Visibility Audit
              </span>
            </h2>

            {/* Paragraph */}
            <p className="text-[#9ca3af] text-sm sm:text-base leading-relaxed mb-9 max-w-[580px] mx-auto">
              We review your website, Google listing, and reviews, then send a short list of what's costing you business. No pitch, no obligation.
            </p>

            {/* Controlled Form Card */}
            <div className="bg-[#16191e]/90 backdrop-blur-xl border border-[#2a2d31] hover:border-primary/30 rounded-3xl p-6 sm:p-9 md:p-10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7),0_0_30px_rgba(168,85,247,0.06)] text-left relative overflow-hidden transition-all">
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />

              {isSuccess ? (
                /* Inline Success Feedback */
                <div className="py-10 text-center flex flex-col items-center justify-center animate-fade-in">
                  <div className="w-16 h-16 rounded-2xl bg-primary/15 border border-primary/40 flex items-center justify-center text-primary mb-5 shadow-[0_0_25px_rgba(168,85,247,0.35)]">
                    <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
                    Audit Request Received!
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 max-w-md mx-auto">
                    Thanks! We'll review your local rankings and send your free audit breakdown within 1 business day.
                  </p>
                  <button
                    onClick={() => {
                      setIsSuccess(false)
                      setFormData({
                        name: "",
                        business: "",
                        email: "",
                        phone: "",
                        websiteOrSocial: "",
                        whatYouDo: "Restaurants & Retail",
                        serviceNeeded: "Web Development",
                        botField: ""
                      })
                    }}
                    className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:text-white bg-primary/10 hover:bg-primary/20 border border-primary/30 px-5 py-2.5 rounded-full transition-all cursor-pointer uppercase tracking-wider"
                  >
                    <span>Submit Another Request</span>
                  </button>
                </div>
              ) : (
                /* Netlify Form */
                <form
                  name="free-audit"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <input type="hidden" name="form-name" value="free-audit" />
                  <p className="hidden">
                    <label>
                      Don't fill this out if you're human:{" "}
                      <input
                        name="bot-field"
                        value={formData.botField}
                        onChange={handleChange}
                      />
                    </label>
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5 group">
                      <label className="text-xs font-semibold text-gray-300 block">
                        Name <span className="text-primary">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500 group-focus-within:text-primary transition-colors">
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          ref={nameInputRef}
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Miller"
                          className="w-full bg-[#0d0f12] border border-[#2a2d31] group-hover:border-[#383d45] rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-[#0f1217] transition-all"
                        />
                      </div>
                    </div>

                    {/* Business */}
                    <div className="space-y-1.5 group">
                      <label className="text-xs font-semibold text-gray-300 block">
                        Business <span className="text-primary">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500 group-focus-within:text-primary transition-colors">
                          <Building2 className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          name="business"
                          required
                          value={formData.business}
                          onChange={handleChange}
                          placeholder="Foley Home Pros"
                          className="w-full bg-[#0d0f12] border border-[#2a2d31] group-hover:border-[#383d45] rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-[#0f1217] transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div className="space-y-1.5 group">
                      <label className="text-xs font-semibold text-gray-300 block">
                        Email <span className="text-primary">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500 group-focus-within:text-primary transition-colors">
                          <Mail className="w-4 h-4" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@foleypros.com"
                          className="w-full bg-[#0d0f12] border border-[#2a2d31] group-hover:border-[#383d45] rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-[#0f1217] transition-all"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5 group">
                      <label className="text-xs font-semibold text-gray-300 block">
                        Phone <span className="text-primary">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500 group-focus-within:text-primary transition-colors">
                          <Phone className="w-4 h-4" />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(251) 555-0199"
                          className="w-full bg-[#0d0f12] border border-[#2a2d31] group-hover:border-[#383d45] rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-[#0f1217] transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Current Website or Social Link (Optional) */}
                  <div className="space-y-1.5 group">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-semibold text-gray-300 block">
                        Current Website or Social Link <span className="text-gray-400 font-normal text-[11px]">(Optional)</span>
                      </label>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500 group-focus-within:text-primary transition-colors">
                        <Globe className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        name="websiteOrSocial"
                        value={formData.websiteOrSocial}
                        onChange={handleChange}
                        placeholder="e.g. yourwebsite.com or instagram.com/yourbusiness"
                        className="w-full bg-[#0d0f12] border border-[#2a2d31] group-hover:border-[#383d45] rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-[#0f1217] transition-all"
                      />
                    </div>
                  </div>

                  {/* Two Separate Dropdowns: "What do you do?" and "What services you need?" */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* 1. What do you do? (Industry) */}
                    <div className="space-y-1.5 group">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-semibold text-gray-300 block">
                          What do you do? <span className="text-primary">*</span>
                        </label>
                      </div>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500 group-focus-within:text-primary transition-colors">
                          <Briefcase className="w-4 h-4" />
                        </div>
                        <select
                          name="whatYouDo"
                          required
                          value={formData.whatYouDo}
                          onChange={handleChange}
                          className="w-full bg-[#0d0f12] border border-[#2a2d31] group-hover:border-[#383d45] rounded-xl pl-10 pr-10 py-3 text-sm text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-[#0f1217] transition-all appearance-none cursor-pointer"
                        >
                          <option value="Restaurants & Retail" className="bg-[#0d0f12] text-white">Restaurants &amp; Retail Shops</option>
                          <option value="Home Services (HVAC, Plumbing, Roofing)" className="bg-[#0d0f12] text-white">Home Services (HVAC, Plumbing, Roofing)</option>
                          <option value="Med Spas & Healthcare Clinics" className="bg-[#0d0f12] text-white">Med Spas &amp; Healthcare Clinics</option>
                          <option value="Contractors & Realty" className="bg-[#0d0f12] text-white">Contractors &amp; Realty</option>
                          <option value="Other Local Business" className="bg-[#0d0f12] text-white">Other Local Gulf Coast Business</option>
                        </select>
                        <div className="absolute inset-y-0 right-3.5 flex items-center pointer-events-none text-gray-400">
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    {/* 2. What services you need? */}
                    <div className="space-y-1.5 group">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-semibold text-gray-300 block">
                          What services you need? <span className="text-primary">*</span>
                        </label>
                      </div>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500 group-focus-within:text-primary transition-colors">
                          <Layers className="w-4 h-4" />
                        </div>
                        <select
                          name="serviceNeeded"
                          required
                          value={formData.serviceNeeded}
                          onChange={handleChange}
                          className="w-full bg-[#0d0f12] border border-[#2a2d31] group-hover:border-[#383d45] rounded-xl pl-10 pr-10 py-3 text-sm text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-[#0f1217] transition-all appearance-none cursor-pointer"
                        >
                          <option value="Web Development" className="bg-[#0d0f12] text-white">Web Development</option>
                          <option value="SEO" className="bg-[#0d0f12] text-white">SEO (Search Engine Optimization)</option>
                          <option value="Social Media Marketing" className="bg-[#0d0f12] text-white">Social Media Marketing</option>
                          <option value="AI Automation" className="bg-[#0d0f12] text-white">AI Automation</option>
                          <option value="Full Package / All Services" className="bg-[#0d0f12] text-white">Full Package / All Services</option>
                        </select>
                        <div className="absolute inset-y-0 right-3.5 flex items-center pointer-events-none text-gray-400">
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Primary Purple Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-primary via-[#9333ea] to-primary hover:brightness-110 active:scale-[0.99] text-primary-foreground text-base font-bold py-4 px-8 rounded-xl shadow-[0_4px_25px_rgba(168,85,247,0.35)] hover:shadow-[0_8px_35px_rgba(168,85,247,0.55)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:pointer-events-none select-none"
                    >
                      {isSubmitting ? (
                        "Sending Request..."
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Me My Free Audit</span>
                        </>
                      )}
                    </button>

                    {/* Trust Badges Row */}
                    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-4 pt-2 text-xs text-gray-400 select-none">
                      <div className="flex items-center gap-1.5">
                        <Lock className="w-3.5 h-3.5 text-primary" />
                        <span>100% Confidential</span>
                      </div>
                      <span className="text-[#3b424a] hidden sm:inline">·</span>
                      <div className="flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-primary" />
                        <span>1 Business Day Turnaround</span>
                      </div>
                      <span className="text-[#3b424a] hidden sm:inline">·</span>
                      <div className="flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                        <span>No Spam Guarantee</span>
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* ===========================================
          FOOTER
          =========================================== */}
      <footer className="border-t border-[#2a2d31]/80 py-8 px-6 sm:px-8 text-center text-xs text-[#9ca3af]">
        <div className="max-w-[1000px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} MARKETING360 FOLEY. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>·</span>
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>·</span>
            <a href="#free-audit-section" onClick={scrollToAudit} className="hover:text-white transition-colors cursor-pointer">
              Free Audit
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
