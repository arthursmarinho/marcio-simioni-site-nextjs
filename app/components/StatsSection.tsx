"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { STATS } from "../data/content";
import { Reveal } from "./Reveal";
import {
  Calendar,
  Users,
  Clock,
  GraduationCap,
  Compass,
  Layers,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
function AnimatedNumber({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 70, damping: 22 });

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  useEffect(() => {
    if (reduce && ref.current) {
      ref.current.textContent = `${value.toLocaleString("pt-BR")}${suffix}`;
      return;
    }

    const unsubscribe = spring.on("change", (latest) => {
      if (!ref.current) return;
      ref.current.textContent = `${Math.round(latest).toLocaleString("pt-BR")}${suffix}`;
    });
    return unsubscribe;
  }, [reduce, spring, suffix, value]);

  return (
    <span ref={ref} className="tabular-nums">
      0{suffix}
    </span>
  );
}

export default function StatsSection() {
  const stats = [
    {
      value: "15+",
      label: "Anos de Experiência",
      icon: Calendar,
      description: "De atuação prática no mercado.",
    },
    {
      value: "1.000+",
      label: "Líderes Desenvolvidos",
      icon: Users,
      description: "Que passaram por programas e processos de desenvolvimento.",
    },
    {
      value: "2.000+",
      label: "Horas de Mentoria Individual",
      icon: Clock,
      description: "Focadas no desenvolvimento de competências de liderança.",
    },
    {
      value: "4.000+",
      label: "Horas de Cursos e Workshops",
      icon: GraduationCap,
      description: "Treinamentos, palestras e oficinas presenciais e online.",
    },
    {
      value: "800+",
      label: "Processos de Mentoria Coordenados",
      icon: Compass,
      description: "Acompanhamento estratégico e estruturado.",
    },
    {
      value: "100+",
      label: "Programas Elaborados",
      icon: Layers,
      description:
        "E executados sob medida para o desenvolvimento de lideranças.",
    },
  ];
  return(
    <section className="py-16 px-6 bg-blue-200 lg:py-24" id="sobre">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">
            Resultados e Impacto
          </span>
          <h2 className="text-3xl text-blue-700 font-bold tracking-tight sm:text-4xl font-arvo">
            Experiência em Números
          </h2>
          <div className="h-1 w-12 bg-primary mx-auto rounded-full mt-2" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden transition-all duration-300 hover:shadow-md hover:border-primary/20 bg-linear-to-b from-card to-muted/10"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <CardContent className="p-6 sm:p-8 flex items-start gap-4">
                  <div className="p-3 bg-muted group-hover:bg-primary/10 text-muted-foreground group-hover:text-primary rounded-xl transition-colors duration-300 shrink-0">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-3xl text-blue-800 sm:text-4xl font-extrabold tracking-tight block font-arvo">
                      {stat.value}
                    </span>
                    <h3 className="text-sm text-blue-700 font-bold  leading-snug">
                      {stat.label}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed pt-1">
                      {stat.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
          </div>
      </div>
    </section>
  )
}
