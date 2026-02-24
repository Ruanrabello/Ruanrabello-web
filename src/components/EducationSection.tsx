import { motion } from "framer-motion";
import { GraduationCap, Award, Languages } from "lucide-react";
import { SectionTitle } from "./ExperienceSection";

const education = [
  {
    title: "Bacharelado em Engenharia da Computação",
    institution: "IBMR",
    detail: "6º período",
  },
  {
    title: "Técnico em Desenvolvimento de Sistemas",
    institution: "Unicesumar",
    detail: "3º período (de 4)",
  },
];

const certificates = [
  "Microsoft Power BI – Prime Cursos",
  "Excel Avançado (Pacote Office) – Arquitettar Cursos",
  "MCTS: SQL Server – Udemy",
  "Introdução à Ciência de Dados – FGV",
  "Fundamentos de Data Science e IA – Data Science Academy",
  "Programação em Python – Prime Cursos",
  "Ferramentas de Gestão de Projetos – Senai",
];

const EducationSection = () => {
  return (
    <section id="formacao" className="py-24 px-6">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Education */}
        <div>
          <SectionTitle icon={<GraduationCap size={20} />} label="Formação Acadêmica" />
          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            {education.map((edu, i) => (
              <motion.div
                key={edu.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="card-elevated rounded-xl p-5 border border-border"
              >
                <h3 className="font-semibold text-foreground text-sm">{edu.title}</h3>
                <p className="text-primary font-mono text-xs mt-1">{edu.institution}</p>
                <span className="text-xs text-muted-foreground">{edu.detail}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div>
          <SectionTitle icon={<Languages size={20} />} label="Idiomas" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 card-elevated rounded-xl p-5 border border-border inline-block"
          >
            <p className="text-sm text-foreground">
              <span className="font-semibold">Inglês intermediário</span>
              <span className="text-muted-foreground"> – Cultura Inglesa</span>
            </p>
          </motion.div>
        </div>

        {/* Certificates */}
        <div>
          <SectionTitle icon={<Award size={20} />} label="Cursos e Certificados" />
          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            {certificates.map((cert, i) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <span className="text-primary mt-0.5 shrink-0">◆</span>
                {cert}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
