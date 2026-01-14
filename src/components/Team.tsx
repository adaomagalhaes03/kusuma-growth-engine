import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import teamImage from "@/assets/team-kusuma.jpeg";
import parallaxBg from "@/assets/parallax-bg.jpg";

const leadership = [
  { name: "Bernardo Onésimo", role: "CEO" },
  { name: "António dos Santos", role: "Vice-CEO" },
  { name: "Daisy Renata", role: "Secretária" },
];

const departments = [
  {
    name: "Legislação",
    members: [
      { name: "Evandra", role: "Diretora Fiscal" },
      { name: "Mário", role: "Dir. Direito Constitucional" },
    ],
  },
  {
    name: "Financeiro",
    members: [{ name: "Ariel", role: "Diretor Financeiro" }],
  },
  {
    name: "Informática",
    members: [{ name: "Benjamim", role: "Diretor de TI" }],
  },
  {
    name: "Marketing",
    members: [
      { name: "Daniel Renato", role: "Diretor" },
      { name: "Igidio", role: "Vice-Diretor" },
    ],
  },
  {
    name: "Atendimento",
    members: [
      { name: "Benizia", role: "Diretora" },
      { name: "Marieth", role: "Vice-Diretora" },
    ],
  },
];

export const Team = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      id="equipe"
      ref={containerRef}
      className="relative overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${parallaxBg})` }}
        />
        <div className="absolute inset-0 bg-background/90" />
      </motion.div>

      <div className="section-padding relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="container-custom"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold tracking-wider uppercase text-sm">
              Nossa Equipa
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mt-4 mb-6">
              Conheça o <span className="gradient-text">Time</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Uma equipa jovem e altamente capacitada, comprometida com a excelência
              e a inovação no setor de consultoria.
            </p>
          </div>

          {/* Team Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mb-16 max-w-4xl mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
            <img
              src={teamImage}
              alt="Equipa Kusuma Consultoria"
              className="relative rounded-3xl w-full object-cover shadow-2xl"
            />
          </motion.div>

          {/* Leadership */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h3 className="text-xl font-serif font-bold text-center mb-8">
              Direção Geral
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {leadership.map((person, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="glass-card rounded-xl px-8 py-6 text-center min-w-[200px]"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-primary-foreground">
                    {person.name.charAt(0)}
                  </div>
                  <h4 className="font-semibold text-foreground">{person.name}</h4>
                  <p className="text-sm text-secondary">{person.role}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Departments */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4"
          >
            {departments.map((dept, idx) => (
              <div
                key={idx}
                className="glass-card rounded-xl p-5 hover-lift"
              >
                <h4 className="text-sm font-bold text-secondary mb-3">{dept.name}</h4>
                <ul className="space-y-2">
                  {dept.members.map((member, mIdx) => (
                    <li key={mIdx} className="text-sm">
                      <span className="font-medium text-foreground">{member.name}</span>
                      <br />
                      <span className="text-xs text-muted-foreground">{member.role}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
