import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import logoKusuma from "@/assets/logo-kusuma.jpg";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

const quickLinks = [
  { name: "Sobre Nós", href: "#sobre" },
  { name: "Serviços", href: "#servicos" },
  { name: "Equipe", href: "#equipe" },
  { name: "Blog", href: "#blog" },
  { name: "Contato", href: "#contato" },
];

const services = [
  "Auditoria Financeira",
  "Consultoria Contabilística",
  "Conformidade Fiscal",
  "Criação de Empresas",
  "Formação Profissional",
];

export const Footer = ({ onOpenModal }: { onOpenModal: () => void }) => {
  return (
    <footer id="contato" className="bg-card border-t border-border relative overflow-hidden">
      {/* CTA Section */}
      <div className="section-padding border-b border-border">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-4xl font-serif font-bold mb-4">
                Pronto para <span className="gradient-text">transformar</span> seu negócio?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Entre em contato conosco e descubra como podemos ajudar sua empresa
                a alcançar novos patamares.
              </p>
              <button onClick={onOpenModal} className="btn-gold">
                Solicitar Proposta
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <img
                src={logoKusuma}
                alt="Kusuma Consultoria"
                className="h-16 mb-6"
              />
              <p className="text-muted-foreground text-sm mb-6">
                Transformando negócios, impulsionando resultados. Cultivando
                crescimento empresarial.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif font-bold text-lg mb-6">Links Rápidos</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-serif font-bold text-lg mb-6">Serviços</h4>
              <ul className="space-y-3">
                {services.map((service, idx) => (
                  <li key={idx}>
                    <span className="text-muted-foreground text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-serif font-bold text-lg mb-6">Contato</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm">
                    contato@kusumaconsultoria.com
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm">
                    +244 923 456 789
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm">
                    100% Virtual - Espaço Lusófono
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © 2026 Kusuma Consultoria. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
