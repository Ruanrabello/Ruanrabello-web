import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { SectionTitle } from "./ExperienceSection";

const skills = [
  {
    name: "Power BI",
    desc: "Dashboards e relatórios dinâmicos",
    level: 80,
  },
  {
    name: "Excel Avançado",
    desc: "VBA, Tabelas dinâmicas, Power Query, Power Pivot",
    level: 90,
  },
  {
    name: "SQL",
    desc: "Queries, extração e manipulação de dados",
    level: 75,
  },
  {
    name: "Python",
    desc: "Automação, manipulação de dados, APIs",
    level: 70,
  },
  {
    name: "APIs REST",
    desc: "Consumo, integração e tratamento de dados",
    level: 65,
  },
  {
    name: "Git & GitHub",
    desc: "Versionamento de código",
    level: 60,
  },
];

const SkillsSection = () => {
  return (
    <section id="habilidades" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle icon={<Code2 size={20} />} label="Habilidades" />

        <div className="grid sm:grid-cols-2 gap-4 mt-12">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="card-elevated rounded-xl p-5 border border-border hover:border-primary/20 transition-colors group"
            >
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>
                <span className="font-mono text-xs text-muted-foreground">{skill.level}%</span>
              </div>
              <p className="text-xs text-muted-foreground mb-3">{skill.desc}</p>
              <div className="w-full h-1 rounded-full bg-secondary overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-primary"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.08 + 0.3, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
