import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Dermage",
    role: "Estagiário em Inteligência de Mercado",
    period: "Set/2025 – Atual",
    tasks: [
      "Criação e manutenção de planilhas e relatórios automatizados, com foco em controle e padronização.",
      "Desenvolvimento de soluções de automação de processos utilizando VBA e Python.",
      "Desenvolvimento e manutenção de macros em VBA, automatizando relatórios, rotinas e fluxos internos.",
      "Consumo e integração de APIs REST com Python, utilizando requisições HTTP para coleta e tratamento de dados.",
      "Apoio na consulta, manipulação e análise de bases de dados em SQL para geração de relatórios e indicadores.",
      "Desenvolvimento de scripts para processamento, validação e transformação de dados, integrando múltiplas fontes.",
    ],
  },
  {
    company: "MI Electric Brasil",
    role: "Estagiário em Engenharia de Planejamento",
    period: "Abril/2025 – Set/2025",
    tasks: [
      "Desenvolvimento e padronização de relatórios de controle, apoiando o acompanhamento de indicadores operacionais.",
      "Acompanhamento do progresso das atividades, realizando alinhamento e validação de pendências com áreas técnicas e administrativas.",
      "Automação de rotinas operacionais e apoio na conferência de dados e notas fiscais via sistema ERP.",
      "Gestão e atualização de planilhas estruturadas em Excel Avançado, aplicadas ao controle de alocação técnica e projetos.",
      "Comunicação direta com clientes e equipes técnicas para controle de prazos e entregas.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experiencia" className="py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle icon={<Briefcase size={20} />} label="Experiência" />

        <div className="relative mt-12">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border md:left-4" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Dot */}
                <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-primary md:left-[13px]" />

                <div className="card-elevated rounded-xl p-6 border border-border hover:border-primary/20 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{exp.company}</h3>
                      <p className="text-primary font-mono text-sm">{exp.role}</p>
                    </div>
                    <span className="text-xs font-mono text-muted-foreground bg-secondary px-2 py-1 rounded w-fit">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.tasks.map((task, j) => (
                      <li key={j} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                        <span className="text-primary mt-1 shrink-0">▹</span>
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const SectionTitle = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex items-center gap-3"
  >
    <span className="text-primary">{icon}</span>
    <h2 className="text-2xl font-bold tracking-tight">{label}</h2>
    <div className="flex-1 h-px bg-border ml-4" />
  </motion.div>
);

export default ExperienceSection;
