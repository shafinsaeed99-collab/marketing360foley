import { Link } from "react-router-dom"
import { Mail, Phone } from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      {/* ──── Hero/Header Section ──── */}
      <section
        className="dark relative min-h-[50vh] flex flex-col justify-end overflow-hidden"
        style={{ backgroundColor: "hsl(260, 87%, 3%)" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px]"
          />
          <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-[10%] left-[5%] w-[250px] h-[250px] bg-indigo-500/8 rounded-full blur-[80px]" />
        </div>

        <div className="absolute inset-0 bg-black/20 pointer-events-none" />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-10 pb-16 pt-32">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-gray-500 text-xs font-mono mb-8">
            <Link to="/" className="hover:text-purple-400 transition-colors pointer-events-auto">HOME</Link>
            <span>/</span>
            <span className="text-purple-400">PRIVACY POLICY</span>
          </div>

          <p className="text-xs font-semibold tracking-[0.25em] text-purple-400 uppercase mb-4">
            // Legal Parameters
          </p>
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.04em] text-white mb-6 uppercase">
            Privacy{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(to left, #6366f1, #a855f7, #ec4899)" }}
            >
              Policy
            </span>
          </h1>
          <p className="text-white/70 text-lg font-light max-w-2xl leading-relaxed">
            Last Updated: July 17, 2026. This Privacy Policy details our practices regarding the collection, validation, and safeguarding of information across all digital interfaces managed by MARKETING360 FOLEY.
          </p>
        </div>
      </section>

      {/* ──── Content Section ──── */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-background relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 text-foreground/80 font-light leading-relaxed space-y-10">

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold uppercase tracking-wide text-foreground">
              1. Information Collection
            </h2>
            <p>
              We collect information that you voluntarily provide when registering an account, submitting contact inquiries, requesting free quotes, or consulting with our strategic advisors. This may include, but is not limited to, your name, telephone number, corporate email address, business location, and custom project requirements.
            </p>
            <p>
              Additionally, our servers automatically log technical diagnostics such as your IP address, browser metadata, operational system tags, and user path navigation records across our web domains to enhance performance.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold uppercase tracking-wide text-foreground">
              2. How We Use Information
            </h2>
            <p>
              All captured data is strictly utilized to provide, maintain, and optimize our digital growth services, custom web design setups, and workflow automation systems. Specifically, we process information to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Formulate digital marketing strategy plans and competitive audits.</li>
              <li>Coordinate user interface mockups and technical project blueprints.</li>
              <li>Deliver weekly analytical metrics and web traffic reports.</li>
              <li>Execute fail-safe communication protocols with client administrators.</li>
              <li>Fulfill statutory legal compliance requirements.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold uppercase tracking-wide text-foreground">
              3. Data Security &amp; Zero-Trust Protocols
            </h2>
            <p>
              MARKETING360 FOLEY enforces strict information security procedures. All data transmission loops utilize secure socket layers (SSL/TLS encryption) and database microsegmentation criteria. Our administrative backend implements continuous device validation metrics, guaranteeing that access permissions are isolated and validated continuously.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold uppercase tracking-wide text-foreground">
              4. Cookies &amp; Tracking Technologies
            </h2>
            <p>
              We deploy browser cookies, beacons, and local storage objects to track analytics parameters, customize your user interface theme preference (Light/Dark themes), and identify user session pathways. You can manage cookie preferences directly inside your system browser settings, though disabling these triggers may restrict certain interactive elements.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold uppercase tracking-wide text-foreground">
              5. Third-Party Integrations
            </h2>
            <p>
              Certain custom services require integration with secure third-party processors (e.g., Stripe for payment portals, simpleicons CDN for tech logos, Google Analytics trackers). These external platforms maintain independent privacy frameworks. We advise checking their respective legal documentation before initiating data validation loops.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold uppercase tracking-wide text-foreground">
              6. Policy Updates
            </h2>
            <p>
              We reserve the right to modify or replace this Privacy Policy at any time. Significant updates will be highlighted via site notices or sent directly to active account contacts. Continuous interaction with our systems following policy revisions confirms your agreement with updated legal parameters.
            </p>
          </div>

          <div className="space-y-4 pt-6 border-t border-border/40">
            <h2 className="text-lg font-semibold uppercase tracking-wide text-foreground">
              Contact Privacy Department
            </h2>
            <p>
              For questions regarding our information safeguards or to request data record removals, please contact our compliance desk:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2 text-sm">
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" /> info@marketing360.com
              </span>
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" /> +1 (414) 885-9504
              </span>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}
