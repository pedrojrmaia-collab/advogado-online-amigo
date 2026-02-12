import { motion } from "framer-motion";
import { Shield, Heart, FileText, Clock, Scale, Users } from "lucide-react";

const services = [
  {
    icon: Clock,
    title: "Aposentadoria",
    description: "Por idade, tempo de contribuição, especial e por invalidez. Análise completa do seu caso.",
  },
  {
    icon: Heart,
    title: "Auxílio-Doença",
    description: "Orientação e acompanhamento para obtenção e manutenção do benefício por incapacidade.",
  },
  {
    icon: Shield,
    title: "BPC/LOAS",
    description: "Benefício assistencial para idosos e pessoas com deficiência em situação de vulnerabilidade.",
  },
  {
    icon: Users,
    title: "Pensão por Morte",
    description: "Garantia dos direitos dos dependentes com agilidade e sensibilidade no momento difícil.",
  },
  {
    icon: FileText,
    title: "Revisão de Benefício",
    description: "Revisão de valores e correção de irregularidades em benefícios já concedidos.",
  },
  {
    icon: Scale,
    title: "Planejamento Previdenciário",
    description: "Estudo personalizado para a melhor estratégia de aposentadoria no momento certo.",
  },
];

const Services = () => {
  return (
    <section id="areas" className="py-24 bg-warm">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
            Áreas de Atuação
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Soluções completas em{" "}
            <span className="text-gradient-gold">Direito Previdenciário</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                <service.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-card-foreground mb-3">
                {service.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
