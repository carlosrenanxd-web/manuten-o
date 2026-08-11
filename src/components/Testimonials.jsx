import { Star } from "lucide-react";

const siteConfig = {
  testimonials: [
    {
      name: "Marcos Silva",
      neighborhood: "Centro",
      quote: "Chamei para trocar o disjuntor e aproveitei pra revisar toda a fiação da casa. Serviço limpo e explicado passo a passo.",
    },
    {
      name: "Ana Beatriz",
      neighborhood: "Jardim das Flores",
      quote: "Pintaram a sala e o corredor em um dia só. Cuidado com os móveis e acabamento impecável.",
    },
    {
      name: "Carlos Eduardo",
      neighborhood: "Bela Vista",
      quote: "Vazamento embaixo da pia resolvido no mesmo dia. Preço justo e ainda deram dica de manutenção preventiva.",
    },
  ],
};

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-xl">
          <span className="font-mono text-xs tracking-widest uppercase text-signal-600 font-semibold">Depoimentos</span>
          <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl text-navy-800 tracking-tight">O que dizem os clientes</h2>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {siteConfig.testimonials.map((t) => (
            <div key={t.name} className="bg-paper rounded-xl p-6 border border-navy-100">
              <div className="flex gap-0.5 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-4 text-sm text-navy-700 leading-relaxed">"{t.quote}"</p>
              <div className="mt-5 pt-4 border-t border-navy-100">
                <p className="font-display font-semibold text-navy-800 text-sm">{t.name}</p>
                <p className="text-xs text-navy-400">{t.neighborhood}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
