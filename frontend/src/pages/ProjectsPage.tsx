import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ContactSection from "@/components/ContactSection"

const ALL_PROJECTS = [
  {
    title: "Fireworks Nation",
    link: "https://fireworksnation.com/",
    image: "/assets/projects/fireworks-nation.jpg",
  },
  {
    title: "Sweet Paradise",
    link: "https://sweetparadise360.com/",
    image: "/assets/projects/project-2.jpg",
  },
  {
    title: "PM Plastic",
    link: "https://pmplastic.com/",
    image: "/assets/projects/project-3.jpg",
  },
  {
    title: "Fleet Reps",
    link: "https://fleetreps.com",
    image: "/assets/projects/fleet-reps.jpg",
  },
  {
    title: "Jims Scrap Metals",
    link: "https://jimsscrapmetals.com/",
    image: "/assets/projects/jims-scrap-metals.jpg",
  },
  {
    title: "Counter Form",
    link: "https://counter-form.com/",
    image: "/assets/projects/counter-form.jpg",
  },
  {
    title: "Transformed Culinary Solutions",
    link: "https://transformedculinarysolutions.com/",
    image: "/assets/projects/transformed-culinary-solutions.jpg",
  },
  {
    title: "Bayside Garden Center",
    link: "https://baysidegardencenter.com/",
    image: "/assets/projects/bayside-garden-center.jpg",
  },
  {
    title: "GemRock Inns",
    link: "https://gemrockins.com/",
    image: "/assets/projects/gemrock-inns.jpg",
  },
  {
    title: "Van Technologies",
    link: "https://vantechnologies.com/",
    image: "/assets/projects/van-technologies.jpg",
  },
  {
    title: "Noomi Health",
    link: "https://noomihealth.com/",
    image: "/assets/projects/noomi-health.jpg",
  },
  {
    title: "Barkdoll Massage Therapy",
    link: "https://barkdollmassagetherapy.com/",
    image: "/assets/projects/barkdoll-massage-therapy.jpg",
  },
  {
    title: "Valley Cabinet Inc",
    link: "https://www.valleycabinetinc.com/",
    image: "/assets/projects/valley-cabinet-inc.jpg",
  },
  {
    title: "Halloween Express San Diego",
    link: "https://halloweenexpresssandiego.com",
    image: "/assets/projects/halloween-express-san-diego.jpg",
  },
  {
    title: "Coco's Remodeling MKE",
    link: "https://cocosremodelingmke.com/",
    image: "/assets/projects/cocos-remodeling-mke.jpg",
  },
  {
    title: "Gaidish",
    link: "https://gaidish.com/",
    image: "/assets/projects/gaidish.jpg",
  },
  {
    title: "Nusslock Interiors",
    link: "https://nusslockinteriors.com/",
    image: "/assets/projects/nusslock-interiors.jpg",
  },
]

export default function ProjectsPage() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 pb-16 px-6 md:px-12 lg:px-24 bg-background relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs uppercase font-mono tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Complete Portfolio
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight mb-4">
            Our Projects
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl font-light leading-relaxed">
            A comprehensive showcase of custom websites, marketing campaigns, and digital platforms we've designed and delivered for our clients.
          </p>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="pb-24 px-6 md:px-12 lg:px-24 bg-background relative z-10 flex-1">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {ALL_PROJECTS.map((project) => (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card group bg-secondary/10 border border-border/50 rounded-xl overflow-hidden flex flex-col hover:border-primary/40 transition-all duration-300 hover:shadow-[0_4px_30px_rgba(0,0,0,0.4)] cursor-pointer no-underline text-inherit"
              >
                {/* Static Screenshot Image Container */}
                <div className="h-52 relative overflow-hidden border-b border-border/40 select-none bg-background">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Subtle filter overlay */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300 pointer-events-none" />
                </div>

                {/* Project Title Container */}
                <div className="p-4 flex items-center justify-center bg-transparent shrink-0">
                  <h3 className="text-sm md:text-base font-bold tracking-widest text-foreground uppercase group-hover:text-primary transition-colors duration-200 text-center">
                    {project.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  )
}
