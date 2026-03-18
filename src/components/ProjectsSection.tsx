import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Muslim Prayer App",
    description: "A full-featured Muslim prayer companion with accurate prayer times, Qibla direction, and daily Quran content. Built with JavaScript for web and mobile.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/mamounehodaibi/muslim-prayer-app",
    demo: "#",
    year: "2025",
  },
  {
    title: "SOC Dashboard",
    description: "A Security Operations Center dashboard for monitoring threats, incidents, and alerts in real time. Built for cybersecurity analysts.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/mamounehodaibi/soc-dashboard",
    demo: "#",
    year: "2025",
  },
  {
    title: "ZoneTempo",
    description: "A TypeScript application for managing time zones and scheduling across multiple regions. Clean UI with real-time clock synchronization.",
    tech: ["TypeScript", "React", "CSS"],
    github: "https://github.com/mamounehodaibi/zonetempo",
    demo: "#",
    year: "2025",
  },
  {
    title: "LogParser",
    description: "A cybersecurity tool for parsing and analyzing server and system logs. Identifies anomalies, failed logins, and suspicious activity patterns.",
    tech: ["HTML", "JavaScript", "Python"],
    github: "https://github.com/mamounehodaibi/logparser",
    demo: "#",
    year: "2025",
  },
  {
    title: "PhishScan",
    description: "A phishing detection and URL scanning tool. Analyzes links for malicious patterns, suspicious domains, and social engineering indicators.",
    tech: ["HTML", "JavaScript", "Security"],
    github: "https://github.com/mamounehodaibi/phishscan",
    demo: "#",
    year: "2025",
  },
  {
    title: "Resena Backend",
    description: "A backend API service for managing reviews and ratings. RESTful architecture with authentication, data validation, and persistent storage.",
    tech: ["HTML", "JavaScript", "API"],
    github: "https://github.com/mamounehodaibi/resena-backend",
    demo: "#",
    year: "2025",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-gap relative">
      <div className="divider-glow mb-24" />
      <div className="section-container">
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="heading-section">
          Portfolio
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="heading-large mb-16">
          Selected<br /><span className="text-primary">projects.</span>
        </motion.h2>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.div key={project.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }} className="card-dark group">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="mono-text text-primary">0{i + 1}</span>
                    <span className="mono-text text-muted-foreground">{project.year}</span>
                    <div className="h-px flex-1 bg-border" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-500">
                    {project.title}
                  </h3>
                  <p className="body-text text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="badge-tech">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4 md:flex-col md:items-end">
                  <a href={project.github} target="_blank" rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                    <Github size={16} /> Code
                  </a>
                  {project.demo !== "#" && (
                    <a href={project.demo} target="_blank" rel="noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                      <ExternalLink size={16} /> Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProjectsSection;
