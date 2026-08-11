import { Zap, Droplets, Wrench, PaintRoller, Flame, ClipboardList } from "lucide-react";
import ContactCTA from "../../components/ContactCTA";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const icons = { Zap, Droplets, Wrench, PaintRoller, Flame, ClipboardList };

const siteConfig = {
  services: [
    {
      code: "CON",
      icon: "ClipboardList",
      title: "Consultoria e diagnosticos",
      description: "Consultoria técnica especializada em economia e uso consciente da água, com diagnóstico de vazamentos, sugestões de melhorias hidráulicas e soluções sob medida para condomínios, residências e comércios.",
      link: "/servicos/consultoria",
    },
    {
      code: "HID",
      icon: "Droplets",
      title: "Serviços de Hidráulica",
      description: "Vazamentos, entupimentos, troca de registros e instalação de torneiras e chuveiros.",
      link: "/servicos/hidraulica",
    },
    {
      code: "ELE",
      icon: "Zap",
      title: "Serviços de Elétrica",
      description: "Instalação, troca de disjuntores, tomadas e reparo de curto-circuito. Serviço seguro e dentro das normas.",
      link: "/servicos/eletrica",
    },
    {
      code: "PIN",
      icon: "PaintRoller",
      title: "Serviços de Pintura",
      description: "Pintura residencial interna e externa, retoques e preparo de superfície com acabamento profissional.",
      link: "/servicos/pintura",
    },
    {
      code: "GAS",
      icon: "Flame",
      title: "Serviços de Gás",
      description: "Instalação de medidor e regulador de gás, com todo o cuidado e segurança que o serviço exige.",
      link: "/servicos/gas",
    },
    {
      code: "MAN",
      icon: "Wrench",
      title: "Serviços de Manutenção Preventiva e Corretiva",
      description: "Revisão periódica da casa ou reparo pontual de qualquer problema, antes que vire dor de cabeça.",
      link: "/servicos/manutencao",
    },
  ],
};

export default function Services() {
  return (
    <section id="servicos" className="py-20 sm:py-28 bg-paper">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="font-mono text-xs tracking-widest uppercase text-signal-600 font-semibold">O que fazemos</span>
          <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl text-navy-800 tracking-tight">
            Quatro áreas, um único profissional de confiança
          </h2>
          <p className="mt-4 text-navy-500 text-base sm:text-lg leading-relaxed">
            Cada serviço tem seu próprio código de ordem — assim você sempre sabe exatamente o que foi feito na sua casa.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 gap-5">
          {siteConfig.services.map((s) => {
            const Icon = icons[s.icon];
            return (
              <div
                key={s.code}
                className="group relative bg-white rounded-xl border border-navy-100 p-6 sm:p-7 hover:border-signal-400 hover:shadow-xl hover:shadow-navy-900/5 transition-all flex flex-col"
              >
                <div className="flex items-center justify-between">
                  <span className="grid place-items-center w-12 h-12 rounded-lg bg-navy-800 text-signal-400 group-hover:bg-signal-500 group-hover:text-navy-900 transition-colors">
                    <Icon size={22} strokeWidth={2.2} />
                  </span>
                  <span className="font-mono text-xs font-bold text-navy-300 tracking-widest">
                    {s.code}-{siteConfig.services.indexOf(s) + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-display font-semibold text-lg text-navy-800">{s.title}</h3>
                <p className="mt-2 text-sm text-navy-500 leading-relaxed">{s.description}</p>
                <div className="mt-auto pt-4 border-t border-navy-100">
                  <Link
                    to={s.link}
                    className="flex items-center justify-between text-sm font-semibold text-signal-600 hover:text-signal-500 transition-colors"
                  >
                    <span>Ver mais detalhes</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <ContactCTA variant="ghost" label="Pedir orçamento gratuito" />
        </div>
      </div>
    </section>
  );
}
