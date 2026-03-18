import { motion } from "framer-motion";

const certifications = [
  { name: "CompTIA Network+", issuer: "CompTIA", status: "Preparing", description: "Networking fundamentals, infrastructure, and troubleshooting." },
  { name: "CompTIA Security+", issuer: "CompTIA", status: "Preparing", description: "Cybersecurity threats, vulnerabilities, and risk management." },
  { name: "freeCodeCamp: Frontend", issuer: "freeCodeCamp", status: "Completed", description: "Responsive web design, HTML, CSS, and JavaScript fundamentals." },
  { name: "JavaScript Algorithms", issuer: "freeCodeCamp", status: "Completed", description: "Data structures, algorithms, and functional programming in JS." },
  { name: "CSS & Styling", issuer: "freeCodeCamp", status: "Completed", description: "Advanced CSS, animations, flexbox, and grid layout systems." },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="section-gap relative">
      <div className="divider-glow mb-24" />
      <div className="section-container">
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="heading-section">
          Certifications
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="heading-large mb-16">
          Credentials &<br /><span className="text-primary">achievements.</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.div key={cert.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }} className="card-dark group">
              <div className="flex items-start justify-between mb-4">
                <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border mono-text ${
                  cert.status === "Completed"
                    ? "text-emerald-400 border-emerald-500/30 bg-emerald-500/10"
                    : "text-amber-400 border-amber-500/30 bg-amber-500/10"
                }`}>
                  {cert.status}
                </span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">{cert.name}</h3>
              <p className="mono-text text-primary mb-3">{cert.issuer}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default CertificationsSection;
