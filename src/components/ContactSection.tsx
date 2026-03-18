import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, ArrowUpRight } from "lucide-react";
import { useState, FormEvent } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-gap relative">
      <div className="divider-glow mb-24" />
      <div className="section-container">
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="heading-section">
          Get In Touch
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="heading-large mb-16">
          Your project,<br /><span className="text-primary">my challenge.</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
            <p className="body-text mb-10">
              Ready to work together? I'm always open to new opportunities, collaborations, or just a chat about technology. Reach out and let's create something great.
            </p>
            <div className="space-y-6">
              {[
                { icon: Mail, label: "mamounehodaibi@gmail.com", href: "mailto:mamounehodaibi@gmail.com" },
                { icon: Github, label: "github.com/mamounehodaibi", href: "https://github.com/mamounehodaibi" },
                { icon: Linkedin, label: "linkedin.com/in/mamoune-hodaibi", href: "https://linkedin.com/in/mamoune-hodaibi" },
              ].map(({ icon: Icon, label, href }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer"
                  className="group flex items-center gap-4 text-muted-foreground hover:text-foreground transition-all duration-300">
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-300">
                    <Icon size={16} />
                  </div>
                  <span className="text-sm">{label}</span>
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary" />
                </a>
              ))}
            </div>

            {/* Languages */}
            <div className="mt-10">
              <p className="mono-text text-muted-foreground uppercase tracking-widest mb-4">Languages</p>
              <div className="flex flex-wrap gap-2">
                {["🇬🇧 English", "🇪🇸 Spanish", "🇫🇷 French", "🇲🇦 Arabic"].map((lang) => (
                  <span key={lang} className="badge-tech">{lang}</span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }} onSubmit={handleSubmit} className="space-y-6">
            {[{ id: "name", label: "Name", type: "text", placeholder: "John Doe" },
              { id: "email", label: "Email", type: "email", placeholder: "john@example.com" }].map(({ id, label, type, placeholder }) => (
              <div key={id}>
                <label htmlFor={id} className="mono-text text-muted-foreground mb-2 block uppercase tracking-[0.2em]">{label}</label>
                <input id={id} type={type} required placeholder={placeholder}
                  value={formData[id as keyof typeof formData]}
                  onChange={(e) => setFormData({ ...formData, [id]: e.target.value })}
                  className="w-full px-0 py-3 bg-transparent text-foreground text-sm border-b border-border focus:border-primary focus:outline-none transition-colors duration-300" />
              </div>
            ))}
            <div>
              <label htmlFor="message" className="mono-text text-muted-foreground mb-2 block uppercase tracking-[0.2em]">Message</label>
              <textarea id="message" rows={4} required placeholder="Tell me about your project..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-0 py-3 bg-transparent text-foreground text-sm border-b border-border focus:border-primary focus:outline-none transition-colors duration-300 resize-none" />
            </div>
            <button type="submit" disabled={status === "sending"} className="btn-glow mt-4 disabled:opacity-50">
              <Send size={16} />
              {status === "sending" ? "Sending…" : status === "sent" ? "Sent! ✓" : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
