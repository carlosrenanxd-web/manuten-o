import { Star, CheckCircle2 } from "lucide-react";
import ContactCTA from "./ContactCTA";

const siteConfig = {
  rating: "5.0",
  reviewsCount: "+80",

  services: [
    {
      code: "CON",
      icon: "ClipboardList",
      title: "Consultoria água",
      description: "Consultoria técnica especializada em economia e uso consciente da água, com diagnóstico de vazamentos, sugestões de melhorias hidráulicas e soluções sob medida para condomínios, residências e comércios.",
      link: "/servicos/consultoria",
    },
    {
      code: "HID",
      icon: "Droplets",
      title: "Serviços de Hidráulica",
      description: "Vazamentos, entupimentos, troca de registros e instalação de torneiras e chuveiros.",
    },
    {
      code: "ELE",
      icon: "Zap",
      title: "Serviços de Elétrica",
      description: "Instalação, troca de disjuntores, tomadas e reparo de curto-circuito. Serviço seguro e dentro das normas.",
    },
    {
      code: "PIN",
      icon: "PaintRoller",
      title: "Serviços de Pintura",
      description: "Pintura residencial interna e externa, retoques e preparo de superfície com acabamento profissional.",
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
    },
  ],
};

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy-800 pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* grid technical background */}
      <div className="absolute inset-0 bg-grid-lines bg-[size:44px_44px] opacity-[0.15] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-signal-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-mono font-medium tracking-wide uppercase text-signal-400 bg-signal-500/10 border border-signal-500/30 rounded-full px-3 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-signal-400 animate-pulse" />
            Atendimento disponível
          </span>

          <h1 className="mt-6 font-display font-bold text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] text-white tracking-tight">
            Sua propriedade em dia:
            <span className="block text-signal-400">elétrica, hidráulica e pintura</span>
            num só lugar.
          </h1>

          <p className="mt-6 text-navy-100/90 text-base sm:text-lg max-w-xl leading-relaxed">
            Da tomada que não funciona à parede que precisa de tinta nova. Diagnóstico correto, orçamento fechado antes de começar e
            garantia em todo serviço.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <ContactCTA variant="primary" />
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 font-display font-semibold text-sm sm:text-base text-navy-100 border border-navy-500 hover:border-signal-400 hover:text-signal-400 transition-colors"
            >
              Ver serviços
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3 text-sm text-navy-100/80">
            <span className="flex items-center gap-1 text-amber-500 font-semibold">
              <Star size={16} fill="currentColor" strokeWidth={0} />
              {siteConfig.rating}
            </span>
            <span className="w-1 h-1 rounded-full bg-navy-400" />
            <span>{siteConfig.reviewsCount} atendimentos realizados</span>
          </div>
        </div>

        {/* Signature element: work-order ticket card */}
        <div className="relative mx-auto w-full max-w-sm">
          <div className="ticket-clip bg-paper border border-navy-100 shadow-2xl shadow-black/30 p-6 sm:p-7 rotate-1">
            <div className="flex items-start justify-between border-b border-solid border-navy-200 pb-4">
              <div>
                <p className="font-mono text-[11px] tracking-widest text-navy-400 uppercase">Ordem de Serviço</p>
                <p className="font-mono font-semibold text-navy-700 text-lg">OS #0247</p>
              </div>
              <span className="font-mono text-[11px] font-semibold bg-signal-500/10 text-signal-600 border border-signal-500/30 rounded px-2 py-1">
                ABERTA
              </span>
            </div>

            <ul className="mt-4 space-y-3">
              {siteConfig.services.map((s) => (
                <li key={s.code} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-signal-500 shrink-0" strokeWidth={2.2} />
                  <span className="font-mono text-[11px] font-semibold text-navy-400 w-9">{s.code}</span>
                  <span className="text-sm text-navy-700 font-medium">{s.title}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 pt-4 border-t border-solid border-navy-200 text-center">
              <span className="text-xs text-navy-400">Visita tecnica + diagnóstico + orçamento</span>
              <span className="inline-flex items-center rounded-xl border0 bg-amber-500 mt-3 px-4 py-2 text-sm font-bold text-white">
                A COMBINAR
              </span>
            </div>
          </div>

          <div className="absolute -bottom-4 -left-4 -z-10 w-full h-full ticket-clip bg-signal-500/25 -rotate-2" />
        </div>
      </div>
    </section>
  );
}
