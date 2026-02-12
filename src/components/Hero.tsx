import { motion } from "framer-motion";
import advogadoHero from "@/assets/advogado-hero.jpeg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70" />
      
      {/* Image side */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
        <img
          src={advogadoHero}
          alt="Advogado previdenciarista"
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-32">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-6"
          >
            Advocacia Previdenciária
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6"
          >
            Seu direito à{" "}
            <span className="text-gradient-gold">aposentadoria</span>{" "}
            merece atenção especializada
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-primary-foreground/80 font-body text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
          >
            Atendimento humanizado e dedicado para garantir seus benefícios previdenciários com segurança e transparência.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contato"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-gold text-gold-foreground font-body font-semibold text-base hover:opacity-90 transition-opacity"
            >
              Agende uma Consulta
            </a>
            <a
              href="#areas"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-primary-foreground/30 text-primary-foreground font-body font-medium text-base hover:bg-primary-foreground/10 transition-colors"
            >
              Áreas de Atuação
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-gold" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
