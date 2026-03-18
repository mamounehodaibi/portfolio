import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, hsla(0,85%,55%,0.3), transparent 70%)" }} />

      <div className="relative section-container text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.25, 0.1, 0, 1] }}>
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <p className="mono-text text-primary tracking-[0.4em]">AVAILABLE FOR WORK</p>
          </div>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.15, ease: [0.25, 0.1, 0, 1] }}
          className="heading-display text-foreground mb-4">
          Mamoune<br />
          <span className="text-primary glow-text">Hodaibi</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.25, ease: [0.25, 0.1, 0, 1] }}
          className="mono-text text-primary tracking-[0.3em] mb-4">
          FULL STACK DEVELOPER & IT SPECIALIST
        </motion.p>

        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0, 1] }}
          className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed">
          IT Specialist & Full Stack Developer based in Valencia, Spain.
          Passionate about cybersecurity, automation, and clean interfaces.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.45, ease: [0.25, 0.1, 0, 1] }}
          className="flex flex-wrap justify-center gap-4 mb-16">
          <a href="#projects" className="btn-glow">View Projects</a>
          <a href="#contact" className="btn-ghost">Contact Me</a>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-12">
          {[{ value: "3+", label: "Years Experience" }, { value: "4+", label: "Certifications" }, { value: "6+", label: "Projects Built" }].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-primary">{stat.value}</p>
              <p className="mono-text text-muted-foreground uppercase tracking-widest mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
            <ArrowDown size={20} className="text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
export default HeroSection;
