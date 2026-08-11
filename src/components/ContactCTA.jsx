import { MessageCircle } from "lucide-react";
import { useContactDrawer } from "../context/ContactDrawerContext";

export default function ContactCTA({
  className = "",
  variant = "primary",
  label,
}) {
  const { openDrawer } = useContactDrawer();

  const styles = {
    primary:
      "bg-amber-500 hover:bg-amber-600 text-navy-800 shadow-lg shadow-amber-500/20",

    secondary:
      "bg-white hover:bg-navy-50 text-navy-700 border border-navy-200",

    ghost:
      "bg-signal-500 hover:bg-signal-600 text-white",
  };

  return (
    <button
      type="button"
      onClick={openDrawer}
      className={`
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-lg
        px-6
        py-3.5
        font-display
        font-semibold
        text-sm
        sm:text-base
        whitespace-nowrap
        shrink-0
        transition-transform
        active:scale-95
        hover:-translate-y-0.5
        ${styles[variant]}
        ${className}
      `}
    >
      <MessageCircle size={18} strokeWidth={2.2} />

      <span className="whitespace-nowrap">
        {label || "Solicitar orçamento"}
      </span>
    </button>
  );
}