"use client";

import { Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function CallToAction() {
  const whatsappUrl =
    "https://wa.me/5541987624581?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento.";
  const emailUrl = "mailto:contato@marciosimioni.com.br?subject=Orçamento";

  return (
    <div
      className="relative w-full bg-[#0B132B] text-white py-20 md:py-28 overflow-hidden flex items-center justify-center border-t border-white/5"
      id="contatos"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,73,0,0.08)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-12 w-full">
        <div className="space-y-4">
          <span className="text-[#F54900] font-black text-xs tracking-widest uppercase block">
            Contato
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight uppercase max-w-3xl mx-auto">
            Vamos levar essa palestra <br /> para a sua equipe?
          </h2>
          <p className="text-slate-450 text-sm md:text-base max-w-xl mx-auto text-white/70 leading-relaxed">
            Fale diretamente comigo pelo WhatsApp ou e-mail para verificar
            disponibilidade de datas, formatos e temas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto pt-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col items-center justify-center p-8 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-[#F54900]/30 transition-all duration-300 shadow-xl"
          >
            <div className="w-14 h-14 rounded-full bg-[#F54900] text-[#0B132B] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-[0_0_20px_rgba(245,73,0,0.3)]">
              <FaWhatsapp className="w-7 h-7 text-[#0B132B]" />
            </div>

            <h3 className="text-lg font-black uppercase tracking-wider mt-5 mb-1 text-white">
              WhatsApp
            </h3>

            <span className="text-xs text-[#F54900] font-semibold tracking-wider flex items-center gap-1 group-hover:underline">
              Enviar mensagem <span className="text-sm">↗</span>
            </span>
          </a>

          <a
            href={emailUrl}
            className="group relative flex flex-col items-center justify-center p-8 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-[#F54900]/30 transition-all duration-300 shadow-xl"
          >
            <div className="w-14 h-14 rounded-full bg-[#F54900] text-[#0B132B] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-[0_0_20px_rgba(245,73,0,0.3)]">
              <Mail className="w-6 h-6 text-[#0B132B]" />
            </div>

            <h3 className="text-lg font-black uppercase tracking-wider mt-5 mb-1 text-white">
              E-mail
            </h3>

            <span className="text-xs text-[#F54900] font-semibold tracking-wider flex items-center gap-1 group-hover:underline break-all">
              contato@marciosimioni.com.br <span className="text-sm">↗</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
