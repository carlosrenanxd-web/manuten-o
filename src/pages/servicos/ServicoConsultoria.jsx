import { ArrowRight, ClipboardCheck } from "lucide-react";

const precos = [
    {
        titulo: "Consultoria elétrica",
        descricao: "Avaliação completa da instalação elétrica do imóvel.",
        valor: "R$ 150",
    },
    {
        titulo: "Consultoria hidráulica",
        descricao: "Análise de tubulações, vazamentos e consumo de água.",
        valor: "R$ 150",
    },
    {
        titulo: "Relatório técnico completo",
        descricao: "Relatório detalhado com diagnóstico e recomendações.",
        valor: "R$ 280",
    },
    {
        titulo: "Vistoria pré-reforma",
        descricao: "Avaliação elétrica e hidráulica antes de iniciar obras.",
        valor: "R$ 220",
    },
    {
        titulo: "Consultoria de economia",
        descricao: "Identificação de desperdícios de água e energia.",
        valor: "R$ 180",
    },
    {
        titulo: "Acompanhamento de obra",
        descricao: "Visitas periódicas para conferir a execução dos serviços.",
        valor: "R$ 350",
    },
];

export default function ServicoConsultoria() {
    return (
        <div className="bg-paper pt-10">
            {/* Hero */}
            <section className="py-20 sm:py-28">
                <div className="max-w-6xl mx-auto px-5 sm:px-8">
                    <span className="inline-flex items-center gap-2 rounded-full bg-cyan-100 px-4 py-2 text-xs font-bold uppercase tracking-wider text-cyan-700">
                        <ClipboardCheck size={15} /> Consultoria geral
                    </span>
                    <div className="max-w-3xl mt-4">
                        <span className="font-mono text-xs tracking-widest uppercase text-signal-600 font-semibold">
                            Detalhes do serviço de consultoria
                        </span>

                        <h1 className="mt-3 font-display font-bold text-4xl text-navy-800">Como funciona nossa consultoria técnica</h1>

                        <p className="mt-5 text-lg text-navy-500 leading-relaxed">
                            Oferecemos consultoria completa em instalações elétricas, hidráulicas e demais sistemas do imóvel, ajudando você a
                            identificar problemas, evitar retrabalho e tomar decisões seguras antes de contratar qualquer serviço ou reforma.
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
                            <h3 className="font-semibold text-lg text-navy-800">1. Avaliação inicial</h3>

                            <p className="mt-3 text-navy-500">
                                Analisamos o imóvel de forma ampla, verificando instalações elétricas, hidráulicas e demais pontos de atenção.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-6 border">
                            <h3 className="font-semibold text-lg text-navy-800">2. Diagnóstico</h3>

                            <p className="mt-3 text-navy-500">
                                Apresentamos um panorama claro dos problemas encontrados e dos riscos envolvidos em cada um deles.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-6 border">
                            <h3 className="font-semibold text-lg text-navy-800">3. Recomendações</h3>

                            <p className="mt-3 text-navy-500">
                                Indicamos as melhores soluções técnicas, com prioridades e estimativas, sem compromisso de contratação.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-6 border">
                            <h3 className="font-semibold text-lg text-navy-800">4. Relatório final</h3>

                            <p className="mt-3 text-navy-500">
                                Entregamos um laudo por escrito, que pode ser usado para orçar obras ou negociar com outros prestadores.
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
                            Valores iniciais para os serviços de consultoria mais solicitados.
                        </p>
                    </div>


                    <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

                        {precos.map((item) => (
                            <div key={item.titulo} className="relative overflow-hidden rounded-3xl bg-white border border-slate-200 p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl group">

                                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-cyan-400 to-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                                <div className="flex justify-between items-start">
                                    <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-cyan-100 to-blue-100">
                                        <ClipboardCheck size={32} className="text-cyan-600" />
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
                        <h2 className="text-3xl font-bold text-white">Precisa de uma consultoria técnica?</h2>

                        <p className="mt-4 text-navy-200">Entre em contato agora mesmo e solicite sua avaliação sem compromisso.</p>

                        <button className="mt-8 rounded-xl bg-signal-500 px-8 py-4 font-semibold text-navy-900">Solicitar consultoria</button>
                    </div>
                </div>
            </section>
        </div>
    );
}