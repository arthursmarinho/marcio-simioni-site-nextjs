"use client";

import Image from "next/image";
import { Users, Clock, Video, ShieldAlert } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Content() {
  const temasLideranca = [
    "Gestão do tempo",
    "Adaptabilidade e resiliência frente às mudanças",
    "Organização e planejamento",
    "Delegar e acompanhar",
    "Confiança",
    "Rituais de gestão",
    "Comunicação",
    "Desenvolvimento de talentos",
    "Segurança psicológica",
    "Visão sistêmica",
    "Transição de carreira",
  ];

  const temasSeguranca = [
    "Hábitos Seguros",
    "Procedimentos que salvam vidas",
    "Percepção de risco",
  ];

  return (
    <div
      className="min-h-screen bg-[#ECFDF5] py-20 text-[#0B132B] flex justify-center"
      id="empresas"
    >
      <main className="max-w-7xl mx-auto w-full px-6 lg:px-12 space-y-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex justify-center items-center h-[500px] relative">
            <div className="relative w-full max-w-[380px] h-[400px] border border-slate-300 rounded-2xl bg-white/60 backdrop-blur-sm shadow-xl flex items-end justify-center">
              <div className="absolute -top-16 bottom-0 w-[110%] h-[115%] pointer-events-none">
                <Image
                  src="/marcio-content.png"
                  alt="Márcio Simioni"
                  fill
                  priority
                  className="object-contain object-bottom scale-105"
                />
              </div>

              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-[#0B132B] text-white py-3 px-6 rounded-xl border border-white/10 shadow-2xl text-center w-[85%] z-10">
                <p className="text-[#F54900] font-black text-sm tracking-widest uppercase">
                  MÁRCIO SIMIONI
                </p>
                <p className="text-white/70 text-xs mt-0.5">
                  Palestrante em Liderança & Segurança
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="text-[#F54900] font-bold text-xs tracking-widest uppercase block">
              O Foco das Palestras
            </span>

            <h1 className="text-4xl lg:text-5.5xl font-black tracking-tight leading-tight text-[#0B132B] uppercase">
              Gestão de Pessoas, Liderança e Comportamento Seguro
            </h1>

            <div className="text-base leading-relaxed text-[#0B132B]/85 space-y-4 max-w-2xl">
              <p>
                Mais do que transmitir conhecimento, uma palestra deve provocar
                reflexões, gerar inspiração e incentivar mudanças concretas de
                comportamento. Com abordagem fundamentada na experiência
                prática, as palestras conectam os conceitos à realidade dos
                líderes nas organizações, despertando o desejo de aplicar novos
                conhecimentos em seu ambiente de trabalho.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-300">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/40 border border-slate-200">
                <Users className="h-5 w-5 text-[#F54900] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[#0B132B]">
                    Tópicos de Liderança
                  </h4>
                  <p className="text-xs text-slate-600">
                    Para todos os níveis de gestão.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/40 border border-slate-200">
                <ShieldAlert className="h-5 w-5 text-[#F54900] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[#0B132B]">
                    Tópicos de Segurança
                  </h4>
                  <p className="text-xs text-slate-600">
                    Para todos os profissionais da organização.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="flex flex-wrap gap-6 pt-2 text-xs text-slate-600 font-medium "
              id="temas"
            >
              <span className="flex items-center gap-1.5">
                <Video className="h-4 w-4 text-[#F54900]" />
                Formato:{" "}
                <strong className="text-[#0B132B]">Online ou Presencial</strong>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-[#F54900]" />
                Duração:{" "}
                <strong className="text-[#0B132B]">40 a 60 minutos</strong>
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-8 pt-8 border-t border-slate-300">
          <div className="space-y-1">
            <span className="text-[#F54900] font-bold text-xs tracking-widest uppercase block">
              Temas das Palestras
            </span>
            <h2 className="text-3xl font-blTemas das Palesack text-[#0B132B] uppercase">
              Conteúdos que geram mudança real
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <Card className="bg-white border border-slate-200 shadow-lg rounded-2xl flex flex-col justify-between overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#F54900] text-white flex items-center justify-center font-black text-sm">
                    A
                  </div>
                  <CardTitle className="text-xl font-black uppercase text-[#0B132B]">
                    Liderança
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3.5">
                  {temasLideranca.map((tema, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 text-sm text-[#0B132B]/90"
                    >
                      <span className="text-[#F54900] text-lg leading-none mt-[-2px]">
                        •
                      </span>
                      <span>{tema}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border border-slate-200 shadow-lg rounded-2xl flex flex-col justify-between overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#F54900]/90 text-white flex items-center justify-center font-black text-sm">
                    B
                  </div>
                  <CardTitle className="text-xl font-black uppercase text-[#0B132B]">
                    Segurança no Trabalho
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 gap-y-3.5">
                  {temasSeguranca.map((tema, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 text-sm text-[#0B132B]/90"
                    >
                      <span className="text-[#F54900] text-lg leading-none mt-[-2px]">
                        •
                      </span>
                      <span>{tema}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-500 leading-relaxed">
                  Voltados a criar cultura de segurança e reduzir riscos no dia
                  a dia — aplicáveis a todos os profissionais da organização.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
