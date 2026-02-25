import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Linkedin, Github } from "lucide-react";
import ruanPhoto from "@/assets/ruan.jfif";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Background grid effect */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(175 70% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(175 70% 50%) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />
      
      {/* Glow orbs */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-1/4 -left-32 w-72 h-72 rounded-full bg-primary/5 blur-[100px]" />

      <div className="relative z-10 max-w-5xl w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex-shrink-0"
        >
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
            {/* Glow ring behind photo */}
            <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-primary/40 to-primary/10 blur-lg" />
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/60 to-transparent" />
            <img
              src={ruanPhoto}
              alt="Ruan Rabello - Estudante de Engenharia da Computação"
              className="relative w-full h-full rounded-full object-cover border-2 border-primary/30"
            />
          </div>
          {/* Decorative badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-card border border-border text-xs font-mono text-primary whitespace-nowrap"
          >
            💻 Eng. Computação
          </motion.div>
        </motion.div>

        {/* Text content */}
        <div className="flex-1 text-center lg:text-left">
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
            className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3 text-sm text-muted-foreground"
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
            className="mt-10 flex justify-center lg:justify-start"
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
