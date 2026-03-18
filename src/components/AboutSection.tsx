import { motion } from "framer-motion";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "10+", label: "Projects Built" },
  { value: "4", label: "Languages Spoken" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-gap relative">
      <div className="divider-glow mb-24" />
      <div className="section-container">
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="heading-section">
          About Me
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="heading-large mb-12">
          A developer who builds<br /><span className="text-primary">with purpose.</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="space-y-6">
            <p className="body-text">
              I'm a Full Stack Developer and IT Specialist based in Valencia, Spain, with 3+ years of hands-on experience in system administration, cybersecurity, and web development.
            </p>
            <p className="body-text">
              My approach combines technical precision with creative thinking — I believe the best software comes from understanding both the code and the people who use it.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} className="space-y-6">
            <p className="body-text">
              I build and maintain secure web applications, automate infrastructure tasks with Bash and Python, and implement cybersecurity best practices across every project I touch.
            </p>
            <p className="body-text">
              Currently pursuing CompTIA Security+ and Network+ certifications, and always open to exciting collaborations and new challenges.
            </p>
          </motion.div>
        </div>

        {/* Info grid */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.35 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { label: "Location", value: "Valencia, Spain" },
            { label: "Email", value: "mamounehodaibi@gmail.com" },
            { label: "Languages", value: "EN, ES, FR, AR" },
            { label: "Status", value: "Available for work" },
          ].map((item) => (
            <div key={item.label} className="card-dark">
              <p className="mono-text text-muted-foreground uppercase tracking-widest mb-1">{item.label}</p>
              <p className="text-sm text-foreground font-medium">{item.value}</p>
            </div>
          ))}
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 * i }}
              className="text-center md:text-left">
              <p className="counter-text-filled mb-2">{stat.value}</p>
              <p className="mono-text text-muted-foreground tracking-widest uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
