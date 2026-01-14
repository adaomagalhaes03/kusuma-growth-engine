import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Users, Globe, TrendingUp, Star } from "lucide-react";

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

const Counter = ({ end, suffix = "", duration = 2000 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const goals = [
  {
    icon: Users,
    value: 50,
    suffix: "+",
    label: "Clientes Empresariais",
    period: "1º Ano",
  },
  {
    icon: Globe,
    value: 3,
    suffix: "",
    label: "Países com Presença Digital",
    period: "1º Ano",
  },
  {
    icon: Star,
    value: 90,
    suffix: "%",
    label: "Taxa de Satisfação",
    period: "Meta",
  },
  {
    icon: TrendingUp,
    value: 200,
    suffix: "+",
    label: "Profissionais",
    period: "3º Ano",
  },
];

export const Goals = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="container-custom relative z-10"
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold tracking-wider uppercase text-sm">
            Metas de Crescimento
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mt-4 mb-6">
            Rumo ao <span className="gradient-text">Sucesso</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nossos objetivos para consolidação e expansão no espaço lusófono.
          </p>
        </div>

        {/* Goals Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {goals.map((goal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="glass-card rounded-2xl p-8 text-center hover-lift group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/30 transition-colors">
                <goal.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                <Counter end={goal.value} suffix={goal.suffix} />
              </div>
              <p className="text-foreground font-medium mb-1">{goal.label}</p>
              <span className="text-xs text-secondary font-medium">{goal.period}</span>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 glass-card rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-4 border-primary pl-6">
              <span className="text-secondary font-bold text-lg">1º Ano</span>
              <h4 className="text-xl font-serif font-bold mt-2 mb-3">Consolidação</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 50 clientes empresariais</li>
                <li>• 6 parcerias estratégicas</li>
                <li>• Presença digital em 3 países</li>
                <li>• 90% de taxa de satisfação</li>
              </ul>
            </div>
            <div className="border-l-4 border-secondary pl-6">
              <span className="text-secondary font-bold text-lg">2º e 3º Ano</span>
              <h4 className="text-xl font-serif font-bold mt-2 mb-3">Expansão e Inovação</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Plataforma própria</li>
                <li>• Mais de 200 profissionais</li>
                <li>• Equipa multidisciplinar</li>
                <li>• Presença sólida no espaço lusófono</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
