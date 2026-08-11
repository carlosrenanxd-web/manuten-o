import { ArrowRight, Droplets } from "lucide-react";

const precos = [
    {
        titulo: "Visita técnica",
        descricao: "Diagnóstico completo do problema.",
        valor: "R$ 150",
    },
    {
        titulo: "Caça vazamento",
        descricao: "Localização de vazamentos aparentes e ocultos.",
        valor: "R$ 300",
    },
    {
        titulo: "Troca de torneira",
        descricao: "Substituição e instalação completa.",
        valor: "R$ 100",
    },
    {
        titulo: "Troca de registro",
        descricao: "Troca com teste de funcionamento.",
        valor: "R$ 150",
    },
    {
        titulo: "Chuveiro comum",
        descricao: "Instalação e testes.",
        valor: "R$ 100",
    },
    {
        titulo: "Chuveiro elétrico",
        descricao: "Instalação elétrica e hidráulica.",
        valor: "R$ 150",
    },
];

export default function ServicoHidraulica() {
    return (
        <div className="bg-paper pt-10">
            {/* Hero */}
            <section className="pb-20 py-20 sm:py-28">
                <div className="max-w-6xl mx-auto px-5 sm:px-8">
                    <span className="inline-flex items-center gap-2 rounded-full bg-cyan-100 px-4 py-2 text-xs font-bold uppercase tracking-wider text-cyan-700">
                        <Droplets size={15} /> Serviços hidráulicos
                    </span>
                    <div className="max-w-3xl mt-4">
                        <span className="font-mono text-xs tracking-widest uppercase text-signal-600 font-semibold">
                            Detalhes do serviço de hidráulica
                        </span>

                        <h1 className="mt-3 font-display font-bold text-4xl text-navy-800">Como funciona nosso atendimento hidráulico</h1>

                        <p className="mt-5 text-lg text-navy-500 leading-relaxed">
                            Atuamos em reparos hidráulicos residenciais, identificando a causa do problema antes de executar qualquer serviço. Nosso
                            objetivo é oferecer uma solução definitiva, evitando retrabalho e gastos desnecessários.
                        </p>
                    </div>
                </div>
            </section>

            {/* Processo */}
            <section className="pb-20">
                <div className="max-w-6xl mx-auto px-5 sm:px-8">
                    <h2 className="text-3xl font-bold text-navy-800">Como trabalhamos</h2>

                    <div className="grid md:grid-cols-2 gap-6 mt-10">
                        <div className="bg-white rounded-xl p-6 border">
                            <h3 className="font-semibold text-lg text-navy-800">1. Avaliação</h3>

                            <p className="mt-3 text-navy-500">
                                Identificamos a origem do problema e verificamos todas as instalações para garantir que o reparo seja feito corretamente.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-6 border">
                            <h3 className="font-semibold text-lg text-navy-800">2. Diagnóstico</h3>

                            <p className="mt-3 text-navy-500">
                                Explicamos ao cliente o que causou o defeito e apresentamos a melhor solução antes de iniciar qualquer intervenção.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-6 border">
                            <h3 className="font-semibold text-lg text-navy-800">3. Orçamento</h3>

                            <p className="mt-3 text-navy-500">
                                O orçamento é transparente, sem cobranças escondidas e aprovado pelo cliente antes da execução.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-6 border">
                            <h3 className="font-semibold text-lg text-navy-800">4. Execução</h3>

                            <p className="mt-3 text-navy-500">
                                Após a aprovação, realizamos o serviço utilizando materiais de qualidade e seguindo boas práticas hidráulicas.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* TABELA DE VALORES */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-5">

                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="mt-5 text-4xl md:text-5xl font-bold text-navy-800">Tabela de serviços</h2>

                        <p className="mt-4 text-lg text-navy-500">
                            Valores iniciais para os serviços hidráulicos mais solicitados.
                        </p>
                    </div>


                    <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

                        {precos.map((item) => (
                            <div key={item.titulo} className="relative overflow-hidden rounded-3xl bg-white border border-slate-200 p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl group">

                                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-cyan-400 to-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                                <div className="flex justify-between items-start">
                                    <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-cyan-100 to-blue-100">
                                        <Droplets size={32} className="text-cyan-600" />
                                    </div>

                                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                                        Disponível
                                    </span>
                                </div>


                                <h3 className="mt-8 text-2xl font-bold text-navy-800">{item.titulo}</h3>

                                <p className="mt-3 min-h-[50px] text-sm leading-relaxed text-navy-500">
                                    {item.descricao}
                                </p>


                                <div className="mt-8 rounded-2xl bg-slate-50 p-5">
                                    <span className="block text-xs font-semibold uppercase text-slate-500">
                                        A partir de
                                    </span>

                                    <strong className="mt-1 block text-4xl font-black text-navy-800">
                                        {item.valor}
                                    </strong>
                                </div>


                                <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-navy-800 py-3 font-semibold text-white transition hover:bg-cyan-600">
                                    Solicitar serviço <ArrowRight size={18} />
                                </button>

                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="pb-24 py-20">
                <div className="max-w-6xl mx-auto px-5 sm:px-8">
                    <div className="rounded-2xl bg-navy-800 p-10 text-center">
                        <h2 className="text-3xl font-bold text-white">Precisa de um serviço hidráulico?</h2>

                        <p className="mt-4 text-navy-200">Entre em contato agora mesmo e solicite seu orçamento sem compromisso.</p>

                        <button className="mt-8 rounded-xl bg-signal-500 px-8 py-4 font-semibold text-navy-900">Solicitar orçamento</button>
                    </div>
                </div>
            </section>
        </div>
    );
}
