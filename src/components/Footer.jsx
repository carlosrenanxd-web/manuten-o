import { Wrench } from "lucide-react";

const siteConfig = {
  businessName: "CasaEmDia",
};

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-900 py-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid place-items-center w-8 h-8 rounded-md bg-signal-500 text-navy-900">
            <Wrench size={16} strokeWidth={2.6} />
          </span>
          <span className="font-display font-bold text-white">{siteConfig.businessName}</span>
        </a>
        <p className="text-navy-300/60 text-sm text-center">
          © {year} {siteConfig.businessName}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
