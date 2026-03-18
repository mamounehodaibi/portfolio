import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="section-container">
        <div className="overflow-hidden mb-12">
          <div className="marquee-track flex whitespace-nowrap">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="counter-text mx-8 opacity-10">MAMOUNE HODAIBI</span>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mamoune Hodaibi. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {[
              { icon: Github, href: "https://github.com/mamounehodaibi", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/mamoune-hodaibi", label: "LinkedIn" },
              { icon: Mail, href: "mailto:mamounehodaibi@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                aria-label={label}>
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
