import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Linkedin, Github } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Background grid effect */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(175 70% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(175 70% 50%) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />
      
      {/* Glow orb */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-1/4 -left-32 w-72 h-72 rounded-full bg-primary/5 blur-[100px]" />

      <div className="relative z-10 max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-4">
            Olá, eu sou
          </p>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] mb-2">
            RUAN
            <br />
            <span className="text-gradient">RABELLO</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mt-6 max-w-xl font-light">
            Estudante de Engenharia da Computação
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap gap-4 text-sm text-muted-foreground"
        >
          <ContactChip icon={<MapPin size={14} />} text="Taquara - Rio de Janeiro, RJ" />
          <ContactChip icon={<Phone size={14} />} text="(21) 98281-2903" />
          <ContactChip icon={<Mail size={14} />} text="ruanben7@gmail.com" href="mailto:ruanben7@gmail.com" />
          <ContactChip
            icon={<Linkedin size={14} />}
            text="LinkedIn"
            href="https://linkedin.com/in/ruan-rabello-dasilva-9032b5274"
          />
          <ContactChip
            icon={<Github size={14} />}
            text="Portfólios"
            href="https://github.com/Ruanrabello/Projetos"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-16"
        >
          <a
            href="#experiencia"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Ver experiência
            <span className="animate-bounce">↓</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const ContactChip = ({ icon, text, href }: { icon: React.ReactNode; text: string; href?: string }) => {
  const Tag = href ? "a" : "span";
  return (
    <Tag
      {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
      className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary border border-border hover:border-primary/30 transition-colors"
    >
      <span className="text-primary">{icon}</span>
      {text}
    </Tag>
  );
};

export default HeroSection;
