import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, Github, Mail, MapPin } from "lucide-react"
import ProjectCard from "@/components/project-card"
import SkillBadge from "@/components/skill-badge"
import ExperienceCard from "@/components/experience-card"
import EducationCard from "@/components/education-card"
import ContactForm from "@/components/contact-form"
import { HeroSection } from "@/components/hero-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">Waqar Safdar</div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#experience" className="text-sm font-medium hover:text-primary transition-colors">
              Experience
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
            <Button size="sm" asChild>
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
          </nav>
          <Button variant="outline" size="icon" className="md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <main className="container py-10">
        <HeroSection />

        {/* About Section */}
        <section id="about" className="py-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-lg mb-4">
                Hello! I'm Waqar, a passionate Frontend Developer with a keen eye for creating engaging user interfaces
                and seamless user experiences.
              </p>
              <p className="mb-4">
                With expertise in modern JavaScript frameworks and libraries, I transform design concepts into
                responsive, interactive web applications that deliver exceptional user experiences across all devices.
              </p>
              <p>
                I'm constantly learning and exploring new technologies to stay at the forefront of web development
                trends. When I'm not coding, you can find me exploring design inspiration, contributing to open-source
                projects, or enjoying outdoor activities.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="bg-muted p-6 rounded-lg max-w-md">
                <h3 className="font-medium text-lg mb-4">Quick Facts</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Based in Lahore, Pakistan</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-primary"
                    >
                      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                    <span>3+ years of experience</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-primary"
                    >
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                    <span>BSc in Computer Science</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-primary"
                    >
                      <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12" />
                      <circle cx="17" cy="7" r="5" />
                    </svg>
                    <span>Frontend Specialist</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <SkillBadge name="HTML5" level={90} />
            <SkillBadge name="CSS3" level={85} />
            <SkillBadge name="JavaScript" level={90} />
            <SkillBadge name="TypeScript" level={80} />
            <SkillBadge name="React" level={85} />
            <SkillBadge name="Next.js" level={80} />
            <SkillBadge name="Tailwind CSS" level={90} />
            <SkillBadge name="Redux" level={75} />
            <SkillBadge name="Responsive Design" level={95} />
            <SkillBadge name="Git" level={85} />
            <SkillBadge name="Figma" level={70} />
            <SkillBadge name="UI/UX Principles" level={75} />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="E-Commerce Dashboard"
              description="A comprehensive dashboard for e-commerce store management with real-time analytics, inventory management, and order processing."
              image="/placeholder.svg?height=200&width=400"
              tags={["React", "Redux", "Tailwind CSS", "Chart.js"]}
              demoLink="https://example.com"
              repoLink="https://github.com"
            />
            <ProjectCard
              title="Travel Booking Platform"
              description="A responsive travel booking platform with search functionality, user authentication, and payment integration."
              image="/placeholder.svg?height=200&width=400"
              tags={["Next.js", "TypeScript", "Stripe", "Firebase"]}
              demoLink="https://example.com"
              repoLink="https://github.com"
            />
            <ProjectCard
              title="Social Media App"
              description="A social networking application with real-time messaging, post creation, and user profiles."
              image="/placeholder.svg?height=200&width=400"
              tags={["React", "Node.js", "Socket.io", "MongoDB"]}
              demoLink="https://example.com"
              repoLink="https://github.com"
            />
            <ProjectCard
              title="Task Management Tool"
              description="A Kanban-style task management application with drag-and-drop functionality, task assignments, and progress tracking."
              image="/placeholder.svg?height=200&width=400"
              tags={["React", "TypeScript", "React DnD", "Redux"]}
              demoLink="https://example.com"
              repoLink="https://github.com"
            />
            <ProjectCard
              title="Weather Application"
              description="A weather forecast application with location detection, 7-day forecasts, and interactive weather maps."
              image="/placeholder.svg?height=200&width=400"
              tags={["JavaScript", "Weather API", "Leaflet.js", "CSS3"]}
              demoLink="https://example.com"
              repoLink="https://github.com"
            />
            <ProjectCard
              title="Portfolio Website"
              description="A personal portfolio website showcasing projects, skills, and professional experience with a modern, responsive design."
              image="/placeholder.svg?height=200&width=400"
              tags={["Next.js", "Tailwind CSS", "Framer Motion"]}
              demoLink="https://example.com"
              repoLink="https://github.com"
            />
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
          <div className="space-y-8">
            <ExperienceCard
              company="TechSolutions Inc."
              position="Senior Frontend Developer"
              period="Jan 2022 - Present"
              description="Lead frontend development for multiple client projects, mentored junior developers, and implemented best practices for code quality and performance optimization."
              achievements={[
                "Reduced page load time by 40% through code optimization and lazy loading",
                "Implemented a component library that increased development speed by 30%",
                "Led the migration from legacy code to a modern React-based architecture",
              ]}
            />
            <ExperienceCard
              company="WebCraft Studios"
              position="Frontend Developer"
              period="Mar 2020 - Dec 2021"
              description="Developed responsive web applications using React and collaborated with designers to implement pixel-perfect UI components."
              achievements={[
                "Built 5+ client websites with responsive designs and cross-browser compatibility",
                "Integrated third-party APIs for payment processing and data visualization",
                "Implemented automated testing that reduced bug reports by 25%",
              ]}
            />
            <ExperienceCard
              company="Digital Innovations"
              position="Junior Web Developer"
              period="Jun 2019 - Feb 2020"
              description="Assisted in the development of web applications and maintained existing websites while learning modern frontend technologies."
              achievements={[
                "Contributed to the development of a customer portal used by 10,000+ users",
                "Refactored CSS to improve maintainability and reduce file size by 20%",
                "Created interactive form components with client-side validation",
              ]}
            />
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Education & Certifications</h2>
          <div className="space-y-6">
            <EducationCard
              institution="University of Computer Science"
              degree="Bachelor of Science in Computer Science"
              period="2015 - 2019"
              description="Focused on software development, web technologies, and user interface design."
            />
            <EducationCard
              institution="Frontend Masters"
              degree="Advanced React Patterns Certification"
              period="2021"
              description="Comprehensive training on advanced React patterns, hooks, and state management."
            />
            <EducationCard
              institution="Google"
              degree="Mobile Web Specialist Certification"
              period="2020"
              description="Certification focused on creating fast, reliable, and engaging web experiences for mobile users."
            />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-lg mb-6">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:waqar.safdar@example.com" className="hover:text-primary transition-colors">
                    waqar.safdar@example.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Lahore, Pakistan</span>
                </div>
                <div className="flex gap-4 mt-6">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                    <span className="sr-only">Twitter</span>
                  </a>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Waqar Safdar. All rights reserved.
            </p>
          </div>
          <div className="flex gap-6">
            <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
