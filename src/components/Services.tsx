import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  FileText,
  BarChart3,
  Shield,
  TrendingUp,
  BookOpen,
  Users,
  Check,
  ArrowRight,
} from "lucide-react";
import serviceAudit from "@/assets/service-audit.jpg";
import serviceConsulting from "@/assets/service-consulting.jpg";
import serviceDigital from "@/assets/service-digital.jpg";

const services = [
  { icon: FileText, name: "Criação de empresa" },
  { icon: FileText, name: "Emissão de documentos fiscais" },
  { icon: BarChart3, name: "Auditoria das demonstrações financeiras" },
  { icon: Shield, name: "Revisão de processos contabilísticos" },
  { icon: Shield, name: "Conformidade fiscal e tributária" },
  { icon: TrendingUp, name: "Avaliação de riscos financeiros" },
  { icon: BarChart3, name: "Análise e melhoria do controlo interno" },
  { icon: BookOpen, name: "Assessoria em normas contabilísticas" },
  { icon: FileText, name: "Emissão de relatórios de auditoria" },
  { icon: TrendingUp, name: "Análise de desempenho financeiro" },
  { icon: Users, name: "Formação em boas práticas contabilísticas" },
];

const packages = [
  {
    name: "Kusuma Simplificado",
    subtitle: "Start Empresarial",
    description: "Para negócios iniciantes",
    features: ["Criação de empresa", "Documentos fiscais básicos", "Suporte inicial"],
    popular: false,
  },
  {
    name: "Kusuma Prático",
    subtitle: "Controlo e Crescimento",
    description: "Para micro e pequenas empresas estáveis",
    features: [
      "Revisão contabilística",
      "Conformidade fiscal",
      "Relatórios mensais",
      "Suporte dedicado",
    ],
    popular: false,
  },
  {
    name: "Kusuma XPlus",
    subtitle: "Auditoria e Gestão",
    description: "Para empresas que precisam de mais rigor",
    features: [
      "Auditoria completa",
      "Avaliação de riscos",
      "Controlo interno",
      "Consultoria estratégica",
      "Relatórios detalhados",
    ],
    popular: true,
  },
  {
    name: "Kusuma Premium",
    subtitle: "Empresarial 360°",
    description: "Para empresas com operações complexas",
    features: [
      "Todos os serviços incluídos",
      "Equipa dedicada",
      "Formação personalizada",
      "Suporte prioritário 24/7",
      "Estratégia de crescimento",
    ],
    popular: false,
  },
];

export const Services = ({ onOpenModal }: { onOpenModal: () => void }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<"services" | "packages">("services");

  return (
    <section id="servicos" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="container-custom relative z-10"
      >
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-secondary font-semibold tracking-wider uppercase text-sm">
            O Que Fazemos
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mt-4 mb-6">
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("services")}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              activeTab === "services"
                ? "btn-primary"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            Serviços Individuais
          </button>
          <button
            onClick={() => setActiveTab("packages")}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              activeTab === "packages"
                ? "btn-gold"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            Pacotes
          </button>
        </div>

        {/* Services Grid */}
        {activeTab === "services" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Service Images */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[serviceAudit, serviceConsulting, serviceDigital].map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: idx * 0.2, duration: 0.6 }}
                  className="relative group overflow-hidden rounded-2xl"
                >
                  <img
                    src={img}
                    alt="Serviço"
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </motion.div>
              ))}
            </div>

            {/* Services List */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="glass-card rounded-xl p-5 hover-lift group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/30 transition-colors">
                      <service.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{service.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Packages Grid */}
        {activeTab === "packages" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className={`relative glass-card rounded-2xl p-6 hover-lift ${
                  pkg.popular ? "border-2 border-secondary glow-gold" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-secondary text-secondary-foreground text-xs font-bold rounded-full">
                    Popular
                  </div>
                )}
                <h4 className="text-xl font-serif font-bold mb-1">{pkg.name}</h4>
                <p className="text-secondary text-sm font-medium mb-2">{pkg.subtitle}</p>
                <p className="text-muted-foreground text-sm mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={onOpenModal}
                  className={`w-full py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-all ${
                    pkg.popular
                      ? "btn-gold"
                      : "bg-muted hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  Solicitar
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};
