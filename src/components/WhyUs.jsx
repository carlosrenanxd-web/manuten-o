import { Timer, Search, ShieldCheck, Wallet } from "lucide-react";

const icons = { Timer, Search, ShieldCheck, Wallet };

const siteConfig = {
  businessName: "Condominio em dia",

  whyUs: [
    {
      icon: "Timer",
      title: "Atendimento ágil",
      description: "Chegamos rápido após a confirmação do orçamento.",
    },
    {
      icon: "Search",
      title: "Diagnóstico correto",
      description: "Identificamos a causa real do problema, não só o sintoma.",
    },
    {
      icon: "ShieldCheck",
      title: "Serviço com garantia",
      description: "Todo reparo sai com garantia por escrito.",
    },
    {
      icon: "Wallet",
      title: "Orçamento fechado",
      description: "Valor combinado antes de começar. Sem surpresas.",
    },
  ],
};

export default function WhyUs() {
  return (
    <section className="py-20 sm:py-24 bg-navy-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-lines bg-[size:44px_44px] opacity-[0.08] pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-xl">
          <span className="font-mono text-xs tracking-widest uppercase text-signal-400 font-semibold">
            Por que a {siteConfig.businessName}
          </span>
          <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Trabalho com responsabilidade do inicio à entrega
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.whyUs.map((item) => {
            const Icon = icons[item.icon];
            return (
              <div key={item.title} className="border-l-2 border-signal-500 pl-5">
                <Icon size={24} className="text-signal-400" strokeWidth={2} />
                <h3 className="mt-4 font-display font-semibold text-white text-base">{item.title}</h3>
                <p className="mt-2 text-sm text-navy-100/70 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
