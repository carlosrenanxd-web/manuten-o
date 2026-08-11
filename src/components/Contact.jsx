import { Phone, Mail, MapPin } from "lucide-react";
import ContactCTA from "./ContactCTA";

const siteConfig = {
  phone: "(84) 99864-8492",
  email: "contato@casaemdia.com.br",
  city: "sua cidade",
};

export default function Contact() {
  return (
    <section id="contato" className="py-20 sm:py-28 bg-navy-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-lines bg-[size:44px_44px] opacity-[0.08] pointer-events-none" />
      <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <span className="font-mono text-xs tracking-widest uppercase text-signal-400 font-semibold">Contato</span>
        <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
          Vamos resolver o que está pendente na sua casa
        </h2>
        <p className="mt-4 text-navy-100/80 max-w-xl mx-auto">Fale com a gente e receba um orçamento sem compromisso.</p>

        <div className="mt-9 flex justify-center">
          <ContactCTA variant="primary" />
        </div>

        <div className="mt-12 grid sm:grid-cols-3 gap-6 text-left">
          <div className="flex items-start gap-3 bg-navy-700/50 rounded-lg p-5 border border-navy-600/50">
            <Phone size={18} className="text-signal-400 mt-0.5 shrink-0" />
            <div>
              <p className="text-xs text-navy-200/60 uppercase tracking-wide">Telefone</p>
              <p className="text-white text-sm font-medium mt-0.5">{siteConfig.phone}</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-navy-700/50 rounded-lg p-5 border border-navy-600/50">
            <Mail size={18} className="text-signal-400 mt-0.5 shrink-0" />
            <div>
              <p className="text-xs text-navy-200/60 uppercase tracking-wide">E-mail</p>
              <p className="text-white text-sm font-medium mt-0.5">{siteConfig.email}</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-navy-700/50 rounded-lg p-5 border border-navy-600/50">
            <MapPin size={18} className="text-signal-400 mt-0.5 shrink-0" />
            <div>
              <p className="text-xs text-navy-200/60 uppercase tracking-wide">Área de atendimento</p>
              <p className="text-white text-sm font-medium mt-0.5">{siteConfig.city} e região</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
