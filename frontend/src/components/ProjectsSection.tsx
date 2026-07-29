import { Link } from "react-router-dom"

const PROJECTS = [
  {
    title: "FireWorks Nation",
    link: "https://fireworksnation.com/",
    image: "/assets/projects/project-1.jpg",
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
  }
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 bg-background relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">
              Our Projects
            </h2>
          </div>
          <p className="text-muted-foreground text-sm md:text-base font-light max-w-sm leading-relaxed">
            A showcase of the businesses we've helped grow through innovative marketing, web development, and AI-powered solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PROJECTS.map((project) => (
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

        {/* View Our Other Projects Button */}
        <div className="mt-16 flex justify-center">
          <Link
            to="/projects"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#0066ff] hover:bg-[#0052cc] text-white font-extrabold text-xs md:text-sm tracking-widest uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(0,102,255,0.3)] hover:shadow-[0_6px_25px_rgba(0,102,255,0.5)] active:scale-95 text-center cursor-pointer select-none"
            style={{
              clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 100%, 0 100%)",
            }}
          >
            VIEW OUR OTHER PROJECTS
          </Link>
        </div>
      </div>
    </section>
  )
}
