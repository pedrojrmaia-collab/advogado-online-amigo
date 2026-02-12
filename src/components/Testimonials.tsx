import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    text: "Consegui minha aposentadoria depois de anos tentando sozinha. O atendimento foi acolhedor e profissional do início ao fim.",
    rating: 5,
  },
  {
    name: "João Santos",
    text: "Me ajudou a revisar meu benefício e consegui um aumento significativo. Recomendo de olhos fechados!",
    rating: 5,
  },
  {
    name: "Ana Oliveira",
    text: "Profissional atencioso que realmente se preocupa com o cliente. Resolveu meu caso de auxílio-doença rapidamente.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
            Depoimentos
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            O que dizem nossos{" "}
            <span className="text-gradient-gold">clientes</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card rounded-2xl p-8 shadow-sm border border-border"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="font-body text-muted-foreground leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <p className="font-heading font-semibold text-card-foreground">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
