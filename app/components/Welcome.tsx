"use client";

import { Button } from "@/components/ui/button";
import { ArrowRightIcon, ChevronRightIcon, PlayIcon } from "lucide-react";
import Image from "next/image";
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
    <div className="flex-1 min-h-screen relative w-full text-white py-16 md:py-24 overflow-hidden flex items-center">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videofundo.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10 pointer-events-none" />

      <div className="relative z-20 max-w-375 mx-auto px-6 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        <div className="flex flex-col gap-6 max-w-xl order-2 md:order-1 text-center md:text-left items-center md:items-start">
          <h1 className="uppercase text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none text-white drop-shadow-md">
            Formando líderes com{" "}
            <span className="text-yellow-500">consistência e segurança</span>
          </h1>

          <p className="text-white/90 text-sm md:text-base lg:text-xl leading-relaxed font-light drop-shadow">
            Palestras para novos gestores recém-chegados à liderança e
            profissionais em preparação para cargos gerenciais. Desenvolva as
            competências necessárias para liderar pessoas de verdade.
          </p>

          <div className="pt-2 space-y-4 space-x-2 md:space-x-4">
            <button className="bg-yellow-500 text-black px-6 py-4 rounded-4xl font-medium">
              <a className="flex flex-row items-center gap-2 " href="#empresas">
                Contratar Palestra <ArrowRightIcon className="ml-2 h-4 w-4" />
              </a>
            </button>
            <button className="bg-gray-700 text-white px-6 py-4 rounded-4xl font-medium">
              <a className="flex flex-row items-center gap-2 " href="#depoimentos">
                Ver depoimentos{" "}
                <PlayIcon className="text-yellow-500 ml-2 h-4 w-4" />
              </a>
            </button>
          </div>
        </div>

        <div className="relative flex justify-center items-center order-1 md:order-2">
          <div className="w-full max-w-xs md:max-w-md relative aspect-square md:aspect-auto md:h-112.5 flex items-end justify-center">
            <div className=" text-center text-white/50 border border-white/20 border-dashed rounded-lg p-8 w-full h-full flex items-center justify-center backdrop-blur-sm bg-black/20">
              <Image
                loading="eager"
                src="/marcio-welcome.png"
                alt="Foto do Márcio Simioni"
                width={350}
                height={350}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
