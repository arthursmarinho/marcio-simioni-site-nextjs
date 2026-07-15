import { Mail, MessageSquare } from "lucide-react";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0B132B] text-slate-300 py-12 border-t border-white/5">
      <div className="max-w-375 mx-auto px-6 md:px-16 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-2xl font-black tracking-wider text-white uppercase">
            Márcio Simioni
          </span>
          <p className="text-xs text-slate-500 uppercase tracking-widest">
            © {currentYear} Todos os direitos reservados.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Conecte-se comigo
          </span>

          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/5541987624581?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 hover:bg-emerald-600/20 hover:text-emerald-400 rounded-full transition-all duration-300"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="w-5 h-5" />
            </a>

            <a
              href="https://instagram.com/marciosimioni_"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 hover:bg-pink-600/20 hover:text-pink-400 rounded-full transition-all duration-300"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5" />
            </a>

            <a
              href="https://youtube.com/@marcio.simioni"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 hover:bg-red-600/20 hover:text-red-500 rounded-full transition-all duration-300"
              aria-label="YouTube"
            >
              <FaYoutube className="w-5 h-5" />
            </a>

            <a
              href="mailto:contato@marciosimioni.com.br?subject=Contato"
              className="p-3 bg-white/5 hover:bg-orange-600/20 hover:text-[#F54900] rounded-full transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
