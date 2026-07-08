import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import ServicesSection from "@/components/ServicesSection"
import AboutSection from "@/components/AboutSection"
import ProjectsSection from "@/components/ProjectsSection"
import TeamSection from "@/components/TeamSection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"
import WebDesignPage from "@/pages/WebDesignPage"
import SocialMediaMarketingPage from "@/pages/SocialMediaMarketingPage"
import ScrollToTop from "@/components/ScrollToTop"

function HomePage() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ProjectsSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/web-design" element={<WebDesignPage />} />
        <Route path="/services/social-media-marketing" element={<SocialMediaMarketingPage />} />
      </Routes>
    </BrowserRouter>
  )
}
