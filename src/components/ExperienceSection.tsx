import { motion } from "framer-motion";
import { Download } from "lucide-react";

const timeline = [
  {
    period: "10/2023 – Present",
    title: "IT Consultant",
    org: "Freelance / Remote",
    description: "Developing and maintaining secure websites using HTML, CSS, and JavaScript. Automating deployment and maintenance tasks with Bash and Python. Implementing cybersecurity best practices to protect sensitive client data.",
    achievements: ["Web Dev", "Automation", "Cybersecurity"],
    type: "work",
  },
  {
    period: "05/2022 – 08/2022",
    title: "System Admin / Intern",
    org: "Oficina De Notario — Valencia, Spain",
    description: "Managed Windows and Linux servers ensuring uptime and performance. Configured LAN, DHCP, DNS, VPN, and Active Directory. Monitored systems with Nagios and resolved technical incidents.",
    achievements: ["Nagios", "Active Directory", "VPN"],
    type: "work",
  },
  {
    period: "01/2022 – 04/2022",
    title: "Help Desk Technician",
    org: "CapsuleCom — Valencia, Spain",
    description: "Provided technical support to end users covering hardware, software, and networking. Managed support tickets and documented resolutions. Assisted in preventive and corrective IT infrastructure maintenance.",
    achievements: ["Tech Support", "Ticketing", "Networking"],
    type: "work",
  },
  {
    period: "Completed",
    title: "Desarrollo de Aplicaciones Multiplataforma",
    org: "Implika — Valencia, Spain",
    description: "Studied cross-platform application development, software engineering principles, and modern development practices.",
    achievements: ["Software Dev", "Multiplataforma"],
    type: "education",
  },
  {
    period: "Graduated",
    title: "Grado Asociado en Administración de Empresas",
    org: "FSJESJ — El Jadida, Morocco",
    description: "Foundation in business administration, management, and organizational systems.",
    achievements: ["Business", "Management"],
    type: "education",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-gap relative">
      <div className="divider-glow mb-24" />
      <div className="section-container">
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="heading-section">
          Experience & Education
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="heading-large mb-16">
          My journey<br /><span className="text-primary">so far.</span>
        </motion.h2>

        <div className="relative">
          <div className="absolute left-[7px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-transparent" />
          <div className="space-y-16">
            {timeline.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-2 z-10">
                  <div className={`w-4 h-4 rounded-full bg-background border-2 glow-box ${item.type === "work" ? "border-primary" : "border-primary/50"}`} />
                </div>
                <div className={`flex-1 pl-10 md:pl-0 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <span className="mono-text text-primary">{item.period}</span>
                  <h3 className="text-xl font-bold text-foreground mt-2">{item.title}</h3>
                  <p className="text-sm text-primary/80 mb-3">{item.org}</p>
                  <p className="body-text text-sm mb-4">{item.description}</p>
                  <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                    {item.achievements.map((a) => (
                      <span key={a} className="badge-tech">{a}</span>
                    ))}
                  </div>
                </div>
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center">
          <a href="#" className="btn-ghost">
            <Download size={16} />
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
};
export default ExperienceSection;
