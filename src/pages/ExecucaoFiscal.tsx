import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Unlock, FileSearch, ShieldCheck, Handshake, Scale, MessageCircle, Phone, Mail, MapPin } from "lucide-react";


const WHATSAPP_URL =
  "https://wa.me/5586998348891?text=Ol%C3%A1%2C%20recebi%20uma%20cita%C3%A7%C3%A3o%20de%20execu%C3%A7%C3%A3o%20fiscal%20e%20preciso%20de%20ajuda%20urgente";

const ADDRESS = "Rua Cinegrafista Marques, 561 - Fátima, Teresina/PI";
const MAPS_URL =
  "https://maps.google.com/?q=Rua+Cinegrafista+Marques,+561+-+Fátima,+Teresina+-+PI";

const cards = [
  {
    icon: Unlock,
    title: "Desbloqueio de Contas e Bens",
    text: "Ação imediata contra penhoras online (Sisbajud) e restrições de veículos (Renajud). Nosso foco inicial é buscar a liberação rápida do seu fluxo de caixa.",
  },
  {
    icon: FileSearch,
    title: "Exceção de Pré-Executividade",
    text: "Defesa sem garantir o juízo, quando cabível. Atuação para extinguir a dívida rapidamente através da identificação ágil de erros do Fisco em matérias que o juiz pode conhecer de ofício.",
  },
  {
    icon: ShieldCheck,
    title: "Embargos à Execução",
    text: "A defesa ampla, no prazo da lei. Construção de argumentação técnica robusta para discutir o débito em profundidade, envolvendo origem, cálculos e prescrição.",
  },
  {
    icon: Handshake,
    title: "Transação Tributária",
    text: "Reduções e prazos previstos em lei. Avaliação técnica para identificar modalidades de acordo com a Fazenda Pública que permitam a redução de juros e multas de forma vantajosa e compatível com a sua capacidade de pagamento.",
  },
  {
    icon: Scale,
    title: "Soluções Estratégicas Complementares",
    text: "Qual instrumento cabe depende do exame dos autos, do título e das garantias. Nossa análise técnica minuciosa mapeia outras diversas alternativas legais e administrativas aplicáveis especificamente ao seu caso, sempre atuando antes do fim do prazo e do bloqueio.",
  },
];

const contacts = [
  { icon: MessageCircle, label: "WhatsApp", value: "(86) 99834-8891", href: WHATSAPP_URL },
  { icon: Phone, label: "Telefone", value: "(86) 99834-8891", href: "tel:+5586998348891" },
  { icon: Mail, label: "E-mail", value: "nelsonmaiaadv@gmail.com", href: "mailto:nelsonmaiaadv@gmail.com" },
  { icon: MapPin, label: "Endereço", value: ADDRESS, href: MAPS_URL },
];

const faq = [
  {
    question: "Discutir a dívida não vai piorar minha situação com o fisco?",
    answer:
      "Não. A defesa é um direito processual, exercida dentro do próprio processo, e não gera represália — os prazos e as cobranças correm de qualquer forma, com ou sem defesa.",
  },
  {
    question: "Não é melhor simplesmente pagar?",
    answer:
      "Às vezes é — e um bom exame diz isso com franqueza. Pagar, discutir, transacionar ou aguardar são decisões que dependem do que a análise do título e dos cálculos mostrar.",
  },
  {
    question: "Preciso de advogado da minha cidade?",
    answer:
      "Não. A execução fiscal federal corre em meio eletrônico e a defesa independe de presença física. O escritório atua em processos de todo o país.",
  },
  {
    question: "Já fui citado. Ainda dá tempo?",
    answer:
      "Depende da data da citação e da fase do processo — por isso a análise do prazo é a primeira coisa que o escritório verifica. Quanto antes o exame começar, mais alternativas existem.",
  },
  {
    question: "Quanto custa a análise?",
    answer:
      "Os honorários dependem da complexidade do caso e são sempre formalizados em contrato escrito, apresentado antes de qualquer contratação.",
  },
];

const ExecucaoFiscal = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-40">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <p className="font-heading text-lg md:text-xl font-bold text-primary-foreground">
            Nelson Maia <span className="text-gold">Advocacia Tributária</span>
          </p>
          <p className="font-body text-xs text-primary-foreground/60 italic">
            Dr. Pedro Nelson Maia
          </p>
        </div>
      </header>

      {/* Bloco 1 — Hero */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="relative container mx-auto px-6 lg:px-12 pt-40 pb-28 md:pt-48 md:pb-36">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="text-gold font-body text-xs tracking-[0.3em] uppercase mb-6">
              Defesa em Execução Fiscal
            </p>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground leading-tight mb-6">
              Seu patrimônio está sob risco de{" "}
              <span className="text-gradient-gold">bloqueio judicial</span> por uma Execução Fiscal?
            </h1>
            <p className="font-body text-base md:text-lg text-primary-foreground/80 leading-relaxed mb-10 max-w-2xl">
              Atuamos com rapidez e estratégia técnica para evitar o travamento das suas contas
              bancárias. Protegemos a operação da sua empresa e a integridade dos seus bens
              pessoais contra ações agressivas do Fisco.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl bg-gold px-7 py-4 font-body font-semibold text-gold-foreground shadow-lg transition-all hover:shadow-xl hover:brightness-110"
            >
              <MessageCircle className="w-5 h-5" />
              Analisar Minha Citação com Advogado Especialista
            </a>
          </motion.div>
        </div>
      </section>

      {/* Bloco 2 — Solução técnica */}
      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-14"
          >
            <p className="text-gold font-body text-xs tracking-[0.3em] uppercase mb-4">
              A Solução Técnica
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Como protegemos o seu patrimônio
            </h2>
          </motion.div>

          <div className="grid gap-8 md:gap-10 lg:grid-cols-3">
            {cards.slice(0, 3).map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-card p-8 md:p-9 shadow-sm transition-all hover:border-gold/50 hover:shadow-lg"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <card.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {card.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">{card.text}</p>
              </motion.div>
            ))}
            <div className="lg:col-span-3 flex flex-col lg:flex-row justify-center gap-8 md:gap-10">
              {cards.slice(3).map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="w-full lg:w-1/3 rounded-2xl border border-border bg-card p-8 md:p-9 shadow-sm transition-all hover:border-gold/50 hover:shadow-lg"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <card.icon className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {card.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">{card.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bloco 3 — Autoridade e Contato */}
      <section className="bg-primary py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-14"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Nelson Maia <span className="text-gradient-gold">Advocacia Tributária</span>
            </h2>
            <p className="font-body text-base md:text-lg text-primary-foreground/80 leading-relaxed mb-8">
              Sob a condução do Dr. Pedro Nelson Maia, entregamos excelência na resolução de
              problemas tributários complexos. Na execução fiscal, o tempo corre contra o seu
              patrimônio. Não deixe o prazo da sua defesa expirar. Entre em contato para uma
              avaliação rigorosa do seu caso.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl bg-gold px-7 py-4 font-body font-semibold text-gold-foreground transition-all hover:brightness-110"
            >
              <MessageCircle className="w-5 h-5" />
              Falar com o advogado agora
            </a>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contacts.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group rounded-2xl border border-primary-foreground/10 p-6 transition-all hover:border-gold/50 hover:bg-primary-foreground/5"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-foreground/10 transition-colors group-hover:bg-gold/20">
                  <item.icon className="h-5 w-5 text-gold" />
                </div>
                <p className="font-body text-xs uppercase tracking-wider text-primary-foreground/60 mb-1">
                  {item.label}
                </p>
                <p className="font-body font-medium leading-snug text-primary-foreground">
                  {item.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary border-t border-primary-foreground/10 py-10">
        <div className="container mx-auto px-6 lg:px-12 text-center md:text-left">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="font-heading text-base font-semibold text-primary-foreground">
              Nelson Maia <span className="text-gold">Advocacia Tributária</span>
            </p>
            <div className="font-body text-xs text-primary-foreground/70 space-y-1">
              <p>{ADDRESS}</p>
              <p>(86) 99834-8891 · nelsonmaiaadv@gmail.com</p>
              <p className="text-primary-foreground/50">OAB/PI 24.263 | CNPJ: 57.314.555/0001-25</p>
            </div>
          </div>
          <p className="mt-8 border-t border-primary-foreground/10 pt-6 font-body text-xs text-primary-foreground/50 text-center">
            © {new Date().getFullYear()} Nelson Maia Advocacia Tributária — Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Botão flutuante WhatsApp */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp sobre execução fiscal"
        className="fixed bottom-20 right-5 md:bottom-24 md:right-6 z-50 flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-[hsl(142,70%,45%)] text-[hsl(0,0%,100%)] shadow-lg transition-all hover:scale-110 hover:bg-[hsl(142,70%,40%)] hover:shadow-xl"
      >
        <MessageCircle className="h-7 w-7 md:h-8 md:w-8" />
      </a>
    </div>
  );
};

export default ExecucaoFiscal;
