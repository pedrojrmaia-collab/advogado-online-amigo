import { Scale } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Scale className="w-5 h-5 text-gold" />
            <span className="font-heading text-lg font-bold text-primary-foreground">
              <span className="text-gold">Dr.</span> Advogado
            </span>
          </div>
          <p className="font-body text-sm text-primary-foreground/60 text-center">
            © {new Date().getFullYear()} — Todos os direitos reservados. OAB/UF 000.000
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
