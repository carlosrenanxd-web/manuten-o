import ContactCTA from "./ContactCTA";

const siteConfig = {
  city: "sua cidade",
  businessName: "CasaEmDia",
  reviewsCount: "+80",
};

export default function About() {
  return (
    <section id="sobre" className="py-20 sm:py-28 bg-paper">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1fr_0.9fr] gap-14 items-center">
        <div>
          <span className="font-mono text-xs tracking-widest uppercase text-signal-600 font-semibold">Sobre nós</span>
          <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl text-navy-800 tracking-tight">
            Um profissional para os quatro maiores problemas da propriedade
          </h2>
          <p className="mt-5 text-navy-500 leading-relaxed">
            Elétrica, hidráulica, pintura e manutenção geralmente exigem chamar profissionais diferentes e coordenar cada um. A
            {siteConfig.businessName} resolve isso, um único contato para diagnosticar o problema, indicar o serviço certo e executar com
            ferramentas próprias e orçamento fechado antes de começar.
          </p>
          <p className="mt-4 text-navy-500 leading-relaxed">
            Atendemos residências, apartamentos em {siteConfig.city}, com atenção especial para manutenção preventiva, revisões periódicas
            que evitam o problema antes que ele apareça.
          </p>
          <div className="mt-8">
            <ContactCTA variant="secondary" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-navy-800 text-white rounded-xl p-6 col-span-2">
            <p className="font-display font-bold text-3xl text-signal-400">{siteConfig.reviewsCount}</p>
            <p className="mt-1 text-sm text-navy-100/80">atendimentos realizados</p>
          </div>
          <div className="bg-white border border-navy-100 rounded-xl p-6">
            <p className="font-display font-bold text-3xl text-navy-800">4</p>
            <p className="mt-1 text-sm text-navy-500">áreas de serviço</p>
          </div>
          <div className="bg-white border border-navy-100 rounded-xl p-6">
            <p className="font-display font-bold text-3xl text-navy-800">100%</p>
            <p className="mt-1 text-sm text-navy-500">orçamento fechado antes</p>
          </div>
        </div>
      </div>
    </section>
  );
}
