import { useState } from "react";
import { ChevronDown } from "lucide-react";

const siteConfig = {
  faq: [
    {
      question: "Como funciona o orçamento?",
      answer:
        "Você entra em contato, descreve o problema (com fotos se possível) e enviamos um valor estimado. O valor final é sempre confirmado antes de iniciar o serviço.",
    },
    {
      question: "Como funciona caça vazamento?",
      answer:
        "Você entra em contato, descreve o problema (com fotos se possível), marcamos uma visita tecnica no valor de R$150.00 reais e na visita já começamos o serviço. Apos encontrado o vazamento combinamos o valor do conserto na hora.",
    },
    {
      question: "Vocês atendem em regime de urgência?",
      answer: "Sim, atendemos chamados urgentes de hidráulica. Fale com a gente para verificar disponibilidade.",
    },
    {
      question: "Fazem manutenção preventiva periódica?",
      answer: "Sim. Montamos um plano de revisão periódica para evitar problemas elétricos e hidráulicos antes que aconteçam.",
    },
    {
      question: "Quais formas de pagamento são aceitas?",
      answer: "Pix, cartão de débito, crédito e dinheiro. O valor é combinado antes do início do serviço.",
    },
    {
      question: "O serviço tem garantia?",
      answer: "Sim, todo serviço realizado tem garantia. Se o problema voltar dentro do prazo de 3 meses, retornamos sem custo adicional.",
    },
  ],
};

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-navy-100">
      <button onClick={onToggle} className="w-full flex items-center justify-between gap-4 py-5 text-left" aria-expanded={isOpen}>
        <span className="font-display font-semibold text-navy-800 text-base sm:text-lg">{item.question}</span>
        <ChevronDown size={20} className={`shrink-0 text-signal-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <p className="text-navy-500 text-sm sm:text-base leading-relaxed max-w-2xl">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-20 sm:py-28 bg-paper">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <span className="font-mono text-xs tracking-widest uppercase text-signal-600 font-semibold">Dúvidas</span>
        <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl text-navy-800 tracking-tight">Perguntas frequentes</h2>

        <div className="mt-10">
          {siteConfig.faq.map((item, i) => (
            <FAQItem key={item.question} item={item} isOpen={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
