import React from "react";
import {
  Calendar,
  Users,
  Clock,
  GraduationCap,
  Compass,
  Layers,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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

  return (
    <section className="py-16 px-6 bg-green-200 lg:py-24 ">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">
            Resultados e Impacto
          </span>
          <h2 className="text-3xl text-emerald-800 font-bold tracking-tight sm:text-4xl font-arvo">
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
                    <span className="text-3xl text-emerald-800 sm:text-4xl font-extrabold tracking-tight block font-arvo">
                      {stat.value}
                    </span>
                    <h3 className="text-sm text-emerald-700 font-bold  leading-snug">
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
  );
}
