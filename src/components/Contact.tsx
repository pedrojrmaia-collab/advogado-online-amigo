import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import advogadoContato from "@/assets/advogado-contato.jpeg";

const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-warm">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
              Contato
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Vamos conversar sobre o{" "}
              <span className="text-gradient-gold">seu caso</span>
            </h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-10">
              Entre em contato para uma consulta inicial. Estou pronto para ouvir sua história e encontrar a melhor solução para você.
            </p>

            <div className="space-y-6">
              {[
                { icon: MessageCircle, label: "WhatsApp", value: "(86) 99834-8891", href: "https://wa.me/5586998348891" },
                { icon: Phone, label: "Telefone", value: "(86) 99834-8891", href: "tel:+5586998348891" },
                { icon: Mail, label: "E-mail", value: "nelsonmaiaadv@gmail.com", href: "mailto:nelsonmaiaadv@gmail.com" },
                { icon: MapPin, label: "Endereço", value: "Rua Cinegrafista Marques, 561 - Fátima, Teresina/PI", href: "https://maps.google.com/?q=Rua+Cinegrafista+Marques,+561+-+Fátima,+Teresina+-+PI" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <item.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-body text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-body font-medium text-foreground">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative hidden lg:block"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={advogadoContato}
                alt="Advogado em atendimento"
                className="w-full h-[500px] object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gold/10 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
