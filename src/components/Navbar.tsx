import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Experiência", href: "#experiencia" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Formação", href: "#formacao" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : ""
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-black text-lg tracking-tight">
          R<span className="text-primary">.</span>R
        </a>
        <div className="flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium hidden sm:block"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:ruanben7@gmail.com"
            className="text-xs font-mono px-3 py-1.5 rounded-md border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Contato
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
