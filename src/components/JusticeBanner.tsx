import { motion } from "framer-motion";
import justiceScales from "@/assets/justice-scales.jpg";

const JusticeBanner = () => {
  return (
    <section className="relative h-72 md:h-96 overflow-hidden">
      <img
        src={justiceScales}
        alt="Balança da justiça"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-primary/70" />
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center px-6"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Justiça e dedicação em cada caso
          </h2>
          <p className="font-body text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Cada cliente é único. Cada direito merece ser defendido com comprometimento e excelência.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default JusticeBanner;
