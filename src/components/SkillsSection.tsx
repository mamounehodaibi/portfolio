import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Systems & Networks",
    skills: ["Windows/Linux Servers", "TCP/IP", "VPN", "Active Directory", "DHCP", "DNS", "Nagios"],
  },
  {
    title: "Scripting & Dev",
    skills: ["Python", "Bash", "JavaScript", "TypeScript", "React", "Next.js", "HTML", "CSS", "Git"],
  },
  {
    title: "Cybersecurity",
    skills: ["Firewalls", "IDS/IPS", "Access Control", "Data Protection", "Incident Response", "PhishScan"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Docker", "PostgreSQL", "Redis", "Prisma", "Microsoft Office", "GitHub", "Node.js"],
  },
];

const proficiencies = [
  { name: "Windows/Linux Servers", level: 90 },
  { name: "Bash / Python", level: 85 },
  { name: "HTML / CSS / JS", level: 88 },
  { name: "TCP/IP & Networking", level: 85 },
  { name: "Cybersecurity", level: 78 },
  { name: "React / Next.js", level: 80 },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-gap relative">
      <div className="divider-glow mb-24" />
      <div className="section-container">
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="heading-section">
          Skills & Tools
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="heading-large mb-16">
          Technologies I<br /><span className="text-primary">work with.</span>
        </motion.h2>

        {/* Skill bars */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {proficiencies.map((skill, i) => (
            <motion.div key={skill.name} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-foreground">{skill.name}</span>
                <span className="mono-text text-primary">{skill.level}%</span>
              </div>
              <div className="h-px w-full bg-border">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.1 + 0.3, ease: "easeOut" }}
                  style={{ height: "1px", background: "hsl(0, 85%, 55%)" }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Category cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div key={cat.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.15 }}
              className="card-dark">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <h3 className="mono-text text-foreground uppercase tracking-[0.2em]">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <motion.span key={skill} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 + j * 0.05 }} className="badge-tech">
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default SkillsSection;
