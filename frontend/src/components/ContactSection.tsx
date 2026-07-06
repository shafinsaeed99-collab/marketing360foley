import React, { useState } from "react"
import { Send, ShieldCheck } from "lucide-react"

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "Logistics Hub",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate secure network transaction
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contacts" className="py-24 px-6 md:px-12 lg:px-24 bg-background relative overflow-hidden">
      {/* Background glow node */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase mb-3">
            // Secure Transmissions
          </p>
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4">
            Connect Tactical Hub
          </h2>
          <p className="text-muted-foreground text-sm font-light max-w-lg mx-auto">
            Establish a secure connection with our security engineers. We will analyze your site metrics and design a custom deployment package.
          </p>
        </div>

        {/* High-Tech Glassmorphism Card */}
        <div className="bg-secondary/10 border border-border/60 rounded-2xl p-6 sm:p-10 md:p-12 backdrop-blur-md relative overflow-hidden shadow-2xl">
          {/* Subtle indicator bar */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />

          {isSuccess ? (
            /* Success Transmission Message */
            <div className="py-10 text-center flex flex-col items-center justify-center animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary flex items-center justify-center text-primary mb-6 animate-pulse">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-primary uppercase tracking-wider mb-3 font-mono">
                // LINK ESTABLISHED
              </h3>
              <p className="text-foreground text-sm sm:text-base font-light mb-2 max-w-md">
                Secure packet successfully transmitted to Sentinel Command.
              </p>
              <p className="text-muted-foreground text-xs font-mono max-w-sm">
                PORT_COMM_OK: An operations coordinator is analyzing your parameters. Response scheduled within 6 hours.
              </p>
              <button
                onClick={() => {
                  setIsSuccess(false)
                  setForm({ name: "", email: "", projectType: "Logistics Hub", message: "" })
                }}
                className="mt-8 text-xs text-primary underline underline-offset-4 uppercase tracking-widest font-mono font-semibold hover:text-white transition-colors"
              >
                Establish New Transmission
              </button>
            </div>
          ) : (
            /* Contact Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-semibold text-muted-foreground/80 block">
                    Full Name / Designation
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. Director Sterling"
                      className="w-full bg-neutral-900/60 border border-border/80 rounded-lg px-4 py-3 text-sm text-foreground placeholder-muted-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-semibold text-muted-foreground/80 block">
                    Secure Communications Channel
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="e.g. sterling@facility.secure"
                      className="w-full bg-neutral-900/60 border border-border/80 rounded-lg px-4 py-3 text-sm text-foreground placeholder-muted-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* Project Type */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-semibold text-muted-foreground/80 block">
                  Target Facility Type
                </label>
                <div className="relative">
                  <select
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange}
                    className="w-full bg-neutral-900/80 border border-border/80 rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 appearance-none cursor-pointer"
                  >
                    <option value="Logistics Hub" className="bg-neutral-900">Logistics Hub / Distribution Center</option>
                    <option value="Data Center" className="bg-neutral-900">Data Center / High-Security Vaults</option>
                    <option value="Corporate Office" className="bg-neutral-900">Corporate HQ / High-Traffic Entrance</option>
                    <option value="Industrial Site" className="bg-neutral-900">Industrial Facility / Perimeter Defense</option>
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
                  Security Parameters / Scope Details
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Describe your site parameters, approximate entry coordinates, hardware count (cameras/scanners), and deadline requests..."
                  className="w-full bg-neutral-900/60 border border-border/80 rounded-lg px-4 py-3 text-sm text-foreground placeholder-muted-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 resize-none"
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
                    ENCRYPTING PACKET...
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    TRANSMIT SECURE LINK
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
