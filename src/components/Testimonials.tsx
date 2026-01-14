import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Helena",
    company: "MH Comércio Lda",
    text: "A Kusuma transformou completamente a gestão financeira da minha empresa. Profissionais dedicados e resultados excepcionais.",
    rating: 5,
  },
  {
    name: "João Pedro",
    company: "JP Construções",
    text: "Excelente atendimento e suporte técnico. A equipa é muito profissional e sempre disponível para ajudar.",
    rating: 5,
  },
  {
    name: "Ana Carolina",
    company: "AC Serviços",
    text: "Recomendo a Kusuma a todas as empresas que procuram crescer de forma sustentável. Parceria de confiança!",
    rating: 5,
  },
  {
    name: "Carlos Manuel",
    company: "CM Tecnologia",
    text: "A auditoria realizada foi extremamente detalhada e nos ajudou a identificar oportunidades de melhoria significativas.",
    rating: 5,
  },
];

export const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="depoimentos" className="section-padding bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

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
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mt-4 mb-6">
            O Que Dizem Sobre <span className="gradient-text">Nós</span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-3xl p-8 md:p-12 text-center"
            >
              <Quote className="w-12 h-12 text-secondary/30 mx-auto mb-6" />
              
              <p className="text-xl md:text-2xl text-foreground/90 mb-8 font-serif italic leading-relaxed">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Rating */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>

              {/* Author */}
              <div>
                <h4 className="text-lg font-bold text-foreground">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-muted-foreground">
                  {testimonials[currentIndex].company}
                </p>
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "w-8 bg-secondary"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
