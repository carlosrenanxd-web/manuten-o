import { useState, useEffect } from "react";
import { Menu, X, Wrench, Mail, Phone } from "lucide-react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import ContactCTA from "./ContactCTA";

const siteConfig = {
  businessName: "Condominio Em Dia",
  email: "contato@condemdia.com.br",
  phone: "(84) 98896-8082",
  social: {
    instagram: "https://instagram.com/casaemdia",
    facebook: "https://facebook.com/casaemdia",
  },
};

const links = [
  { href: "#top", label: "Inicio" },
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "Perguntas" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className={`bg-navy-900 overflow-hidden transition-all duration-300 ${scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"}`}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-9 flex items-center justify-center gap-6 text-xs text-navy-200">
          <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-1.5 hover:text-signal-400 transition-colors">
            <Mail size={14} />
            <span className="hidden sm:inline">{siteConfig.email}</span>
          </a>
          <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="flex items-center gap-1.5 hover:text-signal-400 transition-colors">
            <Phone size={14} />
            <span>{siteConfig.phone}</span>
          </a>
          <div className="flex items-center gap-3">
            <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-signal-400 transition-colors">
              <FaInstagram size={14} />
            </a>
            <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-signal-400 transition-colors">
              <FaFacebookF size={14} />
            </a>
          </div>
        </div>
      </div>

      <div
        className={`transition-all duration-300 ${scrolled
          ? "bg-navy-800/95 backdrop-blur shadow-lg mx-auto mt-1 max-w-6xl rounded-2xl"
          : "bg-navy-800 mx-0 mt-0 max-w-none rounded-none"
          }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 group">
            <span className="grid place-items-center w-9 h-9 rounded-md bg-signal-500 text-navy-900">
              <Wrench size={18} strokeWidth={2.6} />
            </span>
            <span className="font-display font-bold text-lg text-white tracking-tight">{siteConfig.businessName}</span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-navy-100 hover:text-signal-400 transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <ContactCTA variant="primary" className="!px-5 !py-2.5 !text-sm" />
          </div>

          <button
            className="lg:hidden text-white p-2 -mr-2"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden bg-navy-800 rounded-2xl border-navy-600/60 px-5 pb-6 pt-2">
            <nav className="flex flex-col gap-1">
              {links.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="py-3 text-navy-100 font-medium border-b border-navy-600/40 last:border-0">
                  {item.label}
                </a>
              ))}
            </nav>
            <ContactCTA variant="primary" className="w-full mt-4" />
          </div>
        )}
      </div>
    </header>
  );
}