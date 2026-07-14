"use client";

import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
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
    <div className="flex-1 min-h-screen relative w-full text-white  md:py-24 overflow-hidden flex items-center">
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
        <div className="flex flex-col gap-6 max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none text-white drop-shadow-md">
            Olá, sou o<br />
            Márcio Simioni
          </h1>

          <p className="text-white/90 text-sm md:text-base leading-relaxed font-light drop-shadow">
            Meu trabalho é inspirado na convicção de que pequenas mudanças geram
            grandes transformações!
          </p>

          <div className="pt-2">
            <Button
              variant="outline"
              className="bg-to-black animate-pulse px-10 py-6 text-xl"
            >
              Saiba Mais <ChevronRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="relative flex justify-center items-center">
          <div className="w-full max-w-md relative aspect-square md:aspect-auto md:h-112.5 flex items-end justify-center">
            <div className="text-center text-white/50 border border-white/20 border-dashed rounded-lg p-8 w-full h-full flex items-center justify-center backdrop-blur-sm bg-black/20">
              <Image
                src="/marcio-simioni.png"
                alt="Foto do Márcio Simioni"
                width={330}
                height={330}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
