import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Scale,
  Shield,
  Unlock,
  Briefcase,
  Receipt,
  RefreshCcw,
  ClipboardList,
  Calculator,
  Stethoscope,
  HeartPulse,
  GraduationCap,
  Car,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowRight,
  Quote,
} from "lucide-react";
import { Link } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";
import advogadoTributario from "@/assets/advogado-tributario.png";

const WHATSAPP_URL = "https://wa.me/5586998348891";

const empresarial = [
  { icon: Shield, title: "Defesa em Execução Fiscal", desc: "Estratégias robustas para suspender execuções e proteger o patrimônio empresarial." },
  { icon: Unlock, title: "Desbloqueio de Contas", desc: "Atuação ágil para liberar contas bancárias bloqueadas por penhora online (Sisbajud)." },
  { icon: Briefcase, title: "Gestão de Passivos", desc: "Diagnóstico completo e renegociação inteligente de dívidas tributárias federais, estaduais e municipais." },
  { icon: RefreshCcw, title: "Recuperação de Créditos Tributários", desc: "Identificação e restituição de tributos pagos indevidamente nos últimos cinco anos." },
  { icon: ClipboardList, title: "Reforma Tributária", desc: "Consultoria estratégica para adaptar sua empresa às mudanças do novo sistema tributário nacional." },
  { icon: Calculator, title: "Planejamento Tributário", desc: "Elisão fiscal lícita para reduzir a carga tributária e otimizar resultados." },
  { icon: Receipt, title: "Exclusão do PIS/Cofins do ICMS", desc: "Aplicação da tese do século (STF) para recuperar valores expressivos de tributos." },
  { icon: Receipt, title: "Tributação de Produtos Monofásicos", desc: "Regime diferenciado para farmácias, postos e revendas com economia tributária significativa." },
];

const pessoal = [
  { icon: Stethoscope, title: "Equiparação Hospitalar", desc: "Adequação de clínicas médicas e odontológicas com redução de até 70% na tributação." },
  { icon: HeartPulse, title: "Isenção de Imposto de Renda", desc: "Para aposentados e pensionistas portadores de doenças graves previstas em lei." },
  { icon: GraduationCap, title: "Dedução Integral de Educação", desc: "Direito de dedução total dos gastos educacionais para pessoas com TEA (autismo)." },
  { icon: Car, title: "Isenção de IPVA", desc: "Para pessoas com deficiência, autistas e seus representantes legais." },
];

const depoimentos = [
  {
    text: "A atuação na defesa da nossa execução fiscal foi cirúrgica. Conseguimos não apenas o desbloqueio rápido das contas da empresa, mas também o fôlego necessário para reestruturar nosso passivo.",
    author: "Indústria do Setor de Construção Civil",
  },
  {
    text: "O planejamento tributário nos mostrou que estávamos pagando impostos a mais por anos. A recuperação desses créditos mudou o fluxo de caixa da nossa clínica.",
    author: "Clínica Médica Especializada",
  },
  {
    text: "Enfrentei muita burocracia para conseguir a isenção do meu imposto de renda por doença grave. A assessoria jurídica foi rápida, humana e resolveu o que eu não conseguia sozinho.",
    author: "Pessoa Física / Aposentado",
  },
];

const ServiceCard = ({ icon: Icon, title, desc, i }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: i * 0.05 }}
    className="group relative bg-card border border-border/60 rounded-2xl p-7 hover:border-gold/50 hover:shadow-xl transition-all h-full"
  >
    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
      <Icon className="w-6 h-6 text-gold" />
    </div>
    <h3 className="font-heading text-lg font-semibold text-card-foreground mb-2 leading-snug">
      {title}
    </h3>
    <p className="font-body text-sm text-muted-foreground leading-relaxed">{desc}</p>
  </motion.div>
);

const ServiceCarousel = ({ items, desktopCols = "lg:grid-cols-4" }: { items: any[]; desktopCols?: string }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const cardWidth = el.scrollWidth / items.length;
      setActiveIndex(Math.round(el.scrollLeft / cardWidth));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [items.length]);

  const scrollTo = (i: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / items.length;
    el.scrollTo({ left: cardWidth * i, behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop grid */}
      <div className={`hidden md:grid sm:grid-cols-2 ${desktopCols} gap-6`}>
        {items.map((s, i) => (
          <ServiceCard key={s.title} {...s} i={i} />
        ))}
      </div>

      {/* Mobile carousel */}
      <div className="md:hidden -mx-6">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth px-6 pb-2"
          style={{ scrollbarWidth: "none" }}
        >
          {items.map((s, i) => (
            <div
              key={s.title}
              className="snap-start shrink-0 w-[82%]"
            >
              <ServiceCard {...s} i={i} />
            </div>
          ))}
          <div className="shrink-0 w-2" aria-hidden />
        </div>
        <div className="flex justify-center gap-2 mt-6">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Ir para card ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                activeIndex === i ? "w-6 bg-gold" : "w-2 bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
};


const Tributario = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Minimal top bar */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10">
        <div className="container mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <Scale className="w-6 h-6 text-gold shrink-0" />
            <span className="flex flex-col leading-tight">
              <span className="font-heading text-base sm:text-lg font-bold text-primary-foreground">
                Nelson Maia <span className="text-gold">Advocacia Tributária</span>
              </span>
              <span className="font-body text-[10px] sm:text-xs tracking-wider text-primary-foreground/60 italic">
                Dr. Pedro Nelson Maia
              </span>
            </span>
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gold text-gold-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="w-4 h-4" /> Falar agora
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(var(--gold)/0.15),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,_transparent_60%,_hsl(var(--primary)))]" />
        <div className="relative container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="text-gold font-body text-xs sm:text-sm tracking-[0.35em] uppercase mb-6">
              Direito Tributário
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.1] mb-6">
              Proteção patrimonial e{" "}
              <span className="text-gradient-gold">inteligência tributária</span>{" "}
              para o seu próximo movimento.
            </h1>
            <p className="text-primary-foreground/80 font-body text-lg leading-relaxed mb-10 max-w-2xl">
              Atuação estratégica em defesa de empresas e pessoas físicas — recuperação de créditos,
              redução de passivos e teses tributárias de alto impacto, conduzidas com excelência técnica.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-4 rounded-lg bg-gold text-gold-foreground font-body font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-gold/20"
            >
              Fale com um Advogado Especialista
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Serviços Empresariais */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-14"
          >
            <p className="text-gold font-body text-xs tracking-[0.3em] uppercase mb-4">
              Pessoa Jurídica
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Soluções tributárias para <span className="text-gradient-gold">empresas</span>
            </h2>
          </motion.div>
          <ServiceCarousel items={empresarial} desktopCols="lg:grid-cols-4" />
        </div>
      </section>

      {/* Serviços Pessoa Física */}
      <section className="py-24 bg-warm">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-14"
          >
            <p className="text-gold font-body text-xs tracking-[0.3em] uppercase mb-4">
              Pessoa Física & Especial
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Teses e benefícios para <span className="text-gradient-gold">você e sua família</span>
            </h2>
          </motion.div>
          <ServiceCarousel items={pessoal} desktopCols="lg:grid-cols-4" />
        </div>
      </section>

      {/* Prova Social */}
      <section className="py-24 bg-warm/40 border-y border-border/40">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-5">
              Impacto Gerado e <span className="text-gradient-gold">Confiança</span>
            </h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed">
              Resultados sólidos e estratégias tributárias que protegem o patrimônio
              de quem confia em nosso trabalho.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {depoimentos.map((d, i) => (
              <motion.div
                key={d.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative bg-card border border-border/60 rounded-2xl p-8 sm:p-10 hover:border-gold/50 hover:shadow-xl transition-all flex flex-col"
              >
                <Quote className="w-8 h-8 text-gold/70 mb-5" strokeWidth={1.5} />
                <p className="font-body text-base md:text-[17px] text-foreground/85 leading-relaxed italic mb-8 flex-1">
                  “{d.text}”
                </p>
                <div className="pt-5 border-t border-border/60">
                  <p className="font-heading text-sm font-semibold text-primary">
                    — {d.author}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Profissional */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl max-w-md mx-auto">
                <img
                  src={advogadoTributario}
                  alt="Dr. Pedro Nelson Maia — Advogado Tributarista"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gold/10 rounded-2xl -z-10 hidden lg:block" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-gold font-body text-xs tracking-[0.3em] uppercase mb-4">
                O Profissional
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Estratégia e <span className="text-gradient-gold">Excelência Jurídica</span>
              </h2>
              <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">
                Com expertise na resolução de problemas tributários complexos, atuo lado a lado
                com empresários, profissionais liberais e famílias na construção de soluções
                jurídicas seguras, criativas e economicamente eficientes.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed mb-10">
                Cada caso é tratado com profundidade técnica, sigilo absoluto e foco em
                resultado — porque, em matéria tributária, cada decisão impacta diretamente
                o seu patrimônio e o futuro do seu negócio.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-4 rounded-lg border-2 border-primary text-primary font-body font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Agende sua Consultoria
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-14"
          >
            <p className="text-gold font-body text-xs tracking-[0.3em] uppercase mb-4">
              Contato
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Vamos conversar sobre o <span className="text-gradient-gold">seu caso</span>
            </h2>
            <p className="text-primary-foreground/80 font-body text-lg leading-relaxed">
              Entre em contato para uma consulta inicial. Estou pronto para ouvir sua história
              e encontrar a melhor solução para você.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: MessageCircle, label: "WhatsApp", value: "(86) 99834-8891", href: WHATSAPP_URL },
              { icon: Phone, label: "Telefone", value: "(86) 99834-8891", href: "tel:+5586998348891" },
              { icon: Mail, label: "E-mail", value: "nelsonmaiaadv@gmail.com", href: "mailto:nelsonmaiaadv@gmail.com" },
              { icon: MapPin, label: "Endereço", value: "R. Gov. Tibério Nunes, 329 - Frei Serafim, Teresina - PI", href: "https://maps.google.com/?q=R.+Gov.+Tibério+Nunes,+329+-+Frei+Serafim,+Teresina+-+PI,+64000-710" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl border border-primary-foreground/10 hover:border-gold/50 hover:bg-primary-foreground/5 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-primary-foreground/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <item.icon className="w-5 h-5 text-gold" />
                </div>
                <p className="font-body text-xs uppercase tracking-wider text-primary-foreground/60 mb-1">
                  {item.label}
                </p>
                <p className="font-body text-primary-foreground font-medium leading-snug">
                  {item.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary border-t border-primary-foreground/10 py-8">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <p className="font-body text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Dr. Pedro Nelson Maia — Todos os direitos reservados. OAB/PI 24.263
          </p>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
};

export default Tributario;
