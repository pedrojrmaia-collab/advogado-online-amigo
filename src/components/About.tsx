import { motion } from "framer-motion";
import advogadoSobre from "@/assets/advogado-sobre.jpeg";

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={advogadoSobre}
                alt="Sobre o advogado"
                className="w-full h-[500px] object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
              Sobre Mim
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Comprometido com a sua{" "}
              <span className="text-gradient-gold">segurança jurídica</span>
            </h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">
              Com anos de experiência em Direito Previdenciário, minha missão é ajudar trabalhadores e segurados a conquistarem seus benefícios junto ao INSS com agilidade e segurança.
            </p>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8">
              Acredito que cada cliente merece um atendimento personalizado, com transparência em cada etapa do processo. Trabalho para simplificar o que parece complexo e garantir que seus direitos sejam respeitados.
            </p>
            <div className="grid grid-cols-3 gap-6">
              {[
                { number: "500+", label: "Clientes atendidos" },
                { number: "95%", label: "Aprovação" },
                { number: "10+", label: "Anos de experiência" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-heading text-2xl md:text-3xl font-bold text-gold">{stat.number}</p>
                  <p className="font-body text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
