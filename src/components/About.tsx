import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Gem, Lightbulb, Shield, Users, Heart } from "lucide-react";

const values = [
  { icon: Gem, name: "Excelência" },
  { icon: Shield, name: "Ética" },
  { icon: Lightbulb, name: "Inovação" },
  { icon: Users, name: "Adaptabilidade" },
  { icon: Heart, name: "Comprometimento" },
  { icon: Target, name: "Confiança" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="section-padding bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container-custom relative z-10"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="text-secondary font-semibold tracking-wider uppercase text-sm">
            Quem Somos
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mt-4 mb-6">
            A <span className="gradient-text">Kusuma</span> Consultoria
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            A palavra <strong>Kusuma</strong> provém das línguas bantu, como o Kikongo e o
            Kimbundu, e significa <em>semear</em> ou <em>cultivar</em>. Simbolizamos o ato
            de fazer florescer ideias e semear o crescimento empresarial.
          </p>
        </motion.div>

        {/* Who We Are */}
        <motion.div
          variants={itemVariants}
          className="glass-card rounded-2xl p-8 md:p-12 mb-16"
        >
          <p className="text-lg text-center text-foreground/90 leading-relaxed">
            Somos uma empresa do tipo Sociedade por Quotas, <strong>100% virtual</strong>,
            composta por uma equipa jovem e altamente capacitada. Atuamos exclusivamente
            no setor de <strong>auditoria financeira e contabilística</strong>, com foco
            em micro, pequenas e médias empresas.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            variants={itemVariants}
            className="glass-card rounded-2xl p-8 hover-lift"
          >
            <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4">Missão</h3>
            <p className="text-muted-foreground leading-relaxed">
              Oferecer soluções digitais inovadoras, eficazes e personalizadas, que
              ajudem os clientes a resolver problemas e alcançar um crescimento sustentável.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="glass-card rounded-2xl p-8 hover-lift"
          >
            <div className="w-16 h-16 rounded-xl bg-secondary/20 flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4">Visão</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ser reconhecida no espaço lusófono como uma das melhores consultoras de
              auditoria, transformando negócios por meio da inovação, tecnologia e
              estratégia de classe mundial.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div variants={itemVariants} className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-serif font-bold mb-8">
            Nossos <span className="gradient-text">Valores</span>
          </h3>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="glass-card rounded-xl p-6 text-center hover-lift cursor-pointer group"
            >
              <value.icon className="w-8 h-8 mx-auto mb-3 text-primary group-hover:text-secondary transition-colors" />
              <span className="text-sm font-medium text-foreground">{value.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
