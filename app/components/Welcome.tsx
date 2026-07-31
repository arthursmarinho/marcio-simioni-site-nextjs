"use client";

import { ArrowRightIcon, ChevronRightIcon, Award, Users, TrendingUp } from "lucide-react";
import { useRef, useEffect } from "react";

export default function Welcome() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Autoplay preventivo do navegador bloqueou:", error);
      });
    }
  }, []);

  return (
    <section className="flex-1 min-h-[90vh] relative w-full text-white py-20 lg:py-28 overflow-hidden flex items-center justify-center">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 scale-105"
      >
        <source src="https://marcio-simioni-site-nextjs.vercel.app/videofundo.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/60 z-10 pointer-events-none" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full flex flex-col justify-between h-full gap-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs md:text-sm font-semibold tracking-wide uppercase">
              <Award className="w-4 h-4" /> Palestras & Treinamentos Corporativos
            </div>

            <h1 className="uppercase text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.05] text-white">
              Desenvolva Líderes.{" "}
              <span className="block text-yellow-500 mt-1">Transforme Resultados.</span>
            </h1>

            <p className="text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed font-normal max-w-2xl">
              Palestras corporativas personalizadas para empresas que desejam fortalecer a liderança, desenvolver pessoas e gerar impacto real na cultura organizacional.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start">
              <a
                href="https://api.whatsapp.com/send/?phone=5541987624581&text=Ol%C3%A1%2C+gostaria+de+solicitar+um+or%C3%A7amento.&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-xl transition-all duration-200 inline-flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/20 active:scale-95"
              >
                Solicitar Proposta <ArrowRightIcon className="h-5 w-5 shrink-0" />
              </a>
              
              <a
                href="#depoimentos"
                className="bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-white/40 font-medium px-8 py-4 rounded-xl transition-all duration-200 inline-flex items-center justify-center gap-2 backdrop-blur-sm active:scale-95"
              >
                Conhecer Temas <ChevronRightIcon className="h-5 w-5 text-yellow-500 shrink-0" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 flex flex-col gap-6 shadow-2xl relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-yellow-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex flex-col gap-1">
                <span className="text-yellow-500 font-bold uppercase text-xs tracking-wider">Atendimento Exclusivo</span>
                <h3 className="text-xl font-bold text-white">Leve o Márcio Simioni para sua empresa</h3>
                <p className="text-xs text-gray-300">Agenda aberta para convenções, treinamentos e eventos corporativos em todo o Brasil.</p>
              </div>

              <div className="space-y-4 pt-2 border-t border-white/10">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-yellow-500/10 text-yellow-500 shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Conteúdo Sob Medida</h4>
                    <p className="text-xs text-gray-400">Alinhado previamente aos objetivos estratégicos do seu negócio.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-yellow-500/10 text-yellow-500 shrink-0">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Metodologia Prática</h4>
                    <p className="text-xs text-gray-400">Ferramentas aplicáveis no dia a dia da gestão e liderança.</p>
                  </div>
                </div>
              </div>

              <a
                href="https://api.whatsapp.com/send/?phone=5541987624581&text=Ol%C3%A1%2C+gostaria+de+consultar+datas+dispon%C3%ADveis.&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white/10 hover:bg-yellow-500 hover:text-black text-white text-center text-sm font-semibold py-3 rounded-lg border border-white/10 transition-all duration-200"
              >
                Consultar Disponibilidade de Data
              </a>
            </div>
          </div>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-8 border-t border-white/10">
          <div className="flex flex-col items-center lg:items-start">
            <span className="text-2xl sm:text-3xl font-black text-yellow-500">+100%</span>
            <span className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">Foco Corporativo</span>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <span className="text-2xl sm:text-3xl font-black text-yellow-500">Alta</span>
            <span className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">Transformação de Equipes</span>
          </div>
          <div className="col-span-2 md:col-span-1 flex flex-col items-center lg:items-start">
            <span className="text-2xl sm:text-3xl font-black text-yellow-500">Exclusivo</span>
            <span className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">Treinamento de Líderes</span>
          </div>
        </div>

      </div>
    </section>
  );
}