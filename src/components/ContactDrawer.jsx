import { useState } from "react";
import { X, Send } from "lucide-react";
import { useContactDrawer } from "../context/ContactDrawerContext";

const siteConfig = {
    whatsappNumber: "5584988968082",
    phone: "(84) 98896-8082",
};

const servicos = [
    "Hidráulica",
    "Elétrica",
    "Pintura",
    "Gás",
    "Manutenção",
    "Consultoria água",
    "Outro",
];

const formasPagamento = ["Pix", "Dinheiro", "Cartão de crédito", "Cartão de débito"];

export default function ContactDrawer() {
    const { open, closeDrawer } = useContactDrawer();
    const [form, setForm] = useState({
        nome: "",
        endereco: "",
        servico: servicos[0],
        pagamento: formasPagamento[0],
        descricao: "",
    });

    const handleChange = (field) => (e) => {
        setForm((f) => ({ ...f, [field]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const mensagem = `Olá! Gostaria de solicitar um orçamento.

Nome: ${form.nome}
Endereço: ${form.endereco}
Serviço: ${form.servico}
Forma de pagamento: ${form.pagamento}
Descrição: ${form.descricao}`;

        const hasWhats = Boolean(siteConfig.whatsappNumber);
        const href = hasWhats
            ? `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(mensagem)}`
            : `tel:${siteConfig.phone.replace(/\D/g, "")}`;

        window.open(href, hasWhats ? "_blank" : "_self");
        closeDrawer();
    };

    return (
        <>
            {/* Fundo escurecido */}
            <div
                onClick={closeDrawer}
                className={`fixed inset-0 z-[60] bg-navy-900/50 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
            />

            {/* Painel lateral */}
            <div
                role="dialog"
                aria-modal="true"
                aria-label="Formulário de orçamento"
                className={`fixed top-0 right-0 z-[70] h-full w-full sm:w-[420px] bg-white shadow-2xl transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex items-center justify-between px-6 h-16 border-b border-navy-100">
                    <h2 className="font-display font-bold text-lg text-navy-800">Solicitar orçamento</h2>
                    <button
                        type="button"
                        onClick={closeDrawer}
                        aria-label="Fechar"
                        className="p-2 rounded-md text-navy-400 hover:text-navy-800 hover:bg-navy-50 transition-colors"
                    >
                        <X size={22} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-6 overflow-y-auto h-[calc(100%-4rem)]">
                    <div>
                        <label className="block text-sm font-semibold text-navy-700 mb-1.5">Nome completo</label>
                        <input
                            required
                            type="text"
                            value={form.nome}
                            onChange={handleChange("nome")}
                            placeholder="Seu nome"
                            className="w-full rounded-lg border border-navy-200 px-4 py-2.5 text-sm text-navy-800 focus:outline-none focus:ring-2 focus:ring-signal-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-navy-700 mb-1.5">Endereço completo</label>
                        <textarea
                            required
                            value={form.endereco}
                            onChange={handleChange("endereco")}
                            placeholder="Rua, número, bairro, cidade"
                            rows={2}
                            className="w-full rounded-lg border border-navy-200 px-4 py-2.5 text-sm text-navy-800 focus:outline-none focus:ring-2 focus:ring-signal-500 resize-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-navy-700 mb-1.5">Tipo de serviço</label>
                        <select
                            value={form.servico}
                            onChange={handleChange("servico")}
                            className="w-full rounded-lg border border-navy-200 px-4 py-2.5 text-sm text-navy-800 focus:outline-none focus:ring-2 focus:ring-signal-500 bg-white"
                        >
                            {servicos.map((s) => (
                                <option key={s} value={s}>
                                    {s}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-navy-700 mb-1.5">Forma de pagamento</label>
                        <select
                            value={form.pagamento}
                            onChange={handleChange("pagamento")}
                            className="w-full rounded-lg border border-navy-200 px-4 py-2.5 text-sm text-navy-800 focus:outline-none focus:ring-2 focus:ring-signal-500 bg-white"
                        >
                            {formasPagamento.map((p) => (
                                <option key={p} value={p}>
                                    {p}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-navy-700 mb-1.5">Descrição do serviço</label>
                        <textarea
                            required
                            value={form.descricao}
                            onChange={handleChange("descricao")}
                            placeholder="Conte um pouco sobre o que você precisa"
                            rows={4}
                            className="w-full rounded-lg border border-navy-200 px-4 py-2.5 text-sm text-navy-800 focus:outline-none focus:ring-2 focus:ring-signal-500 resize-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-navy-800 font-display font-semibold py-3.5 transition-colors active:scale-95"
                    >
                        <Send size={18} strokeWidth={2.4} />
                        Enviar solicitação
                    </button>
                </form>
            </div>
        </>
    );
}