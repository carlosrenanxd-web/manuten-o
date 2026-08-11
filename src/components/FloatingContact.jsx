import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { useContactDrawer } from "../context/ContactDrawerContext";

export default function FloatingContact() {
  const [visible, setVisible] = useState(false);
  const { openDrawer } = useContactDrawer();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={openDrawer}
      aria-label="Solicitar orçamento"
      className={`fixed bottom-5 right-5 z-40 grid place-items-center w-14 h-14 rounded-full bg-amber-500 text-navy-800 shadow-xl shadow-black/20 transition-all duration-300 hover:scale-105 active:scale-95 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
    >
      <MessageCircle size={26} strokeWidth={2.2} />
    </button>
  );
}