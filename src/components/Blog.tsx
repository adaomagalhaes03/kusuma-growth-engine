import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, ArrowRight, Clock } from "lucide-react";

const articles = [
  {
    title: "Como preparar sua empresa para uma auditoria financeira",
    excerpt:
      "Descubra os passos essenciais para garantir que sua empresa esteja pronta para uma auditoria sem complicações.",
    date: "10 Jan 2026",
    readTime: "5 min",
    category: "Auditoria",
  },
  {
    title: "Tendências de contabilidade digital para 2026",
    excerpt:
      "As novas tecnologias que estão transformando o setor contabilístico e como sua empresa pode se beneficiar.",
    date: "08 Jan 2026",
    readTime: "7 min",
    category: "Tecnologia",
  },
  {
    title: "Conformidade fiscal: evite multas e penalidades",
    excerpt:
      "Guia completo sobre como manter sua empresa em conformidade com as obrigações fiscais e tributárias.",
    date: "05 Jan 2026",
    readTime: "6 min",
    category: "Fiscal",
  },
];

export const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-card relative overflow-hidden">
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
            Blog & Artigos
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mt-4 mb-6">
            Últimas <span className="gradient-text">Publicações</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mantenha-se atualizado com as últimas novidades e insights do setor.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="glass-card rounded-2xl overflow-hidden hover-lift group cursor-pointer"
            >
              {/* Placeholder Image */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-secondary text-secondary-foreground text-xs font-bold rounded-full">
                  {article.category}
                </span>
              </div>

              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-serif font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {article.excerpt}
                </p>

                <span className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                  Ler mais
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
