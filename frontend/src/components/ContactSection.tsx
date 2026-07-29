import React, { useState } from "react"
import { Send, ShieldCheck, Mail, Phone, MapPin } from "lucide-react"

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "Web Development",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.target as HTMLFormElement)

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then((res) => {
        setIsSubmitting(false)
        if (res.ok) {
          setIsSuccess(true)
        } else {
          alert("Form submission failed. Please try again.")
        }
      })
      .catch((error) => {
        console.error("Netlify form submission error:", error)
        setIsSubmitting(false)
        alert("Form submission error. Please try again.")
      })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contacts" className="pt-12 pb-24 px-6 md:px-12 lg:px-24 bg-background relative overflow-hidden">
      {/* Background glow node */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase mb-3">
            // Get In Touch
          </p>
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground">
            Contact Us
          </h2>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">

          {/* Left Column: High-Tech Glassmorphism Contact Form */}
          <div className="bg-secondary/10 border border-border/60 rounded-2xl p-6 sm:p-8 md:p-10 backdrop-blur-md relative overflow-hidden shadow-2xl flex flex-col justify-center">
            {/* Subtle indicator bar */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />

            {isSuccess ? (
              /* Success Transmission Message */
              <div className="py-10 text-center flex flex-col items-center justify-center animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary flex items-center justify-center text-primary mb-6 animate-pulse">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-primary uppercase tracking-wider mb-3 font-mono">
                  // MESSAGE SENT SUCCESSFULLY
                </h3>
                <p className="text-foreground text-sm sm:text-base font-light mb-2 max-w-md">
                  Our team will respond within 24 hours to discuss your project and answer any questions you may have.
                </p>
                <p className="text-muted-foreground text-xs font-mono max-w-sm">
                  Thank You!
                </p>
                <button
                  onClick={() => {
                    setIsSuccess(false)
                    setForm({ name: "", email: "", projectType: "Web Development", message: "" })
                  }}
                  className="mt-8 text-xs text-primary underline underline-offset-4 uppercase tracking-widest font-mono font-semibold hover:text-white transition-colors"
                >
                  Resend
                </button>
              </div>
            ) : (
              /* Contact Form */
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Netlify Form Hidden Inputs */}
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-semibold text-muted-foreground/80 block">
                      Full Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="e.g. Sterling Foley"
                        className="w-full bg-[var(--form-input-bg)] border border-border/80 rounded-lg px-4 py-3 text-sm text-foreground placeholder-muted-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-semibold text-muted-foreground/80 block">
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="e.g. sterling@foleymarketing.com"
                        className="w-full bg-[var(--form-input-bg)] border border-border/80 rounded-lg px-4 py-3 text-sm text-foreground placeholder-muted-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Type */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-semibold text-muted-foreground/80 block">
                    Select Service
                  </label>
                  <div className="relative">
                    <select
                      name="projectType"
                      value={form.projectType}
                      onChange={handleChange}
                      className="w-full bg-[var(--form-input-bg)] border border-border/80 rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 appearance-none cursor-pointer"
                    >
                      <option value="Web Development" className="bg-background">Web Development</option>
                      <option value="SEO" className="bg-background">SEO</option>
                      <option value="Social Media Marketing" className="bg-background">Social Media Marketing</option>
                      <option value="AI Automation" className="bg-background">AI Automation</option>
                    </select>
                    {/* Custom Arrow */}
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-muted-foreground">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-semibold text-muted-foreground/80 block">
                    Describe your Project
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your project, marketing goals, features required, or timeline requests..."
                    className="w-full bg-[var(--form-input-bg)] border border-border/80 rounded-lg px-4 py-3 text-sm text-foreground placeholder-muted-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 resize-none"
                  />
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground font-bold uppercase tracking-widest text-xs py-4 rounded-lg hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 select-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-primary-foreground" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Informational Content & Contact Coordinates */}
          <div className="flex flex-col justify-center space-y-8 py-6">
            <div className="space-y-4">
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                Let's Start a Conversation
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base font-light leading-relaxed">
                We're here to help you transform your ideas into reality. Reach out to us and let's discuss how we can accelerate your digital transformation journey.
              </p>
            </div>

            {/* Coordinates list */}
            <div className="space-y-6 pt-4">
              {/* Email */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-primary/10 group-hover:scale-105 transition-transform duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-semibold text-muted-foreground/60 block mb-0.5">
                    Email
                  </span>
                  <span className="text-foreground text-sm sm:text-base font-medium select-all">
                    info@marketing360.com
                  </span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-primary/10 group-hover:scale-105 transition-transform duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-semibold text-muted-foreground/60 block mb-0.5">
                    Phone
                  </span>
                  <span className="text-foreground text-sm sm:text-base font-medium select-all">
                    +1 (414) 885-9504
                  </span>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-primary/10 group-hover:scale-105 transition-transform duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-semibold text-muted-foreground/60 block mb-0.5">
                    Location
                  </span>
                  <span className="text-foreground text-sm sm:text-base font-medium">
                    Alabama | United States
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
