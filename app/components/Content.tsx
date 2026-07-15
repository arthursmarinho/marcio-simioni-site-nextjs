import Image from "next/image";
import {
  Compass,
  Users,
  Clock,
  Video,
  MapPin,
  ShieldAlert,
  BrainCircuit,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Content() {
  const temasLideranca = [
    "Gestão do tempo",
    "Adaptabilidade e resiliência",
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

  const stats = [
    { value: "15 +", label: "Anos de Experiência" },
    {
      value: "1000 +",
      label:
        "Líderes que passaram por programas e processos de desenvolvimento",
    },
    {
      value: "2000 +",
      label:
        "Horas de desenvolvimento de competências de liderança, em processos individuais",
    },
    {
      value: "4000 +",
      label: "Horas de cursos, treinamentos, workshops e oficinas para líderes",
    },
    { value: "800 +", label: "Processos de mentoria coordenados" },
    {
      value: "100 +",
      label:
        "Programas elaborados e executados para desenvolvimento de liderança",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20 text-black" id="empresas">
      <main className="bg-background p-6 lg:p-12 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto w-full space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-border pb-8">
            <div className="lg:col-span-8 space-y-2">
              <h1 className="text-4xl font-bold tracking-tight lg:text-5xl font-arvo">
                Palestras & Workshops
              </h1>
              <p className="text-muted-foreground max-w-2xl">
                Propostas dinâmicas focadas em gerar impacto imediato e
                transformar a atuação profissional a partir do primeiro dia.
              </p>
            </div>

            <div className="lg:col-span-4">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-md border border-border bg-muted p-1">
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                  <Image
                    src="https://media.istockphoto.com/id/1783743772/pt/foto/female-speaker-giving-a-presentation-during-business-seminar-at-convention-center.jpg?s=612x612&w=0&k=20&c=Eu3tg-7ShCwjCpzPEK0_dvQffIgjHLSVSkoQSKvbeiM="
                    alt="Palestra e Workshop"
                    fill
                    sizes="(max-w: 1024px) 100vw, 30vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <Card className="lg:col-span-4 flex flex-col justify-between border-primary/10 bg-gradient-to-b from-card to-muted/20">
              <CardHeader className="space-y-4">
                <div className="p-3 bg-primary/10 text-primary w-fit rounded-xl">
                  <Sparkles className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl font-arvo">
                  A Filosofia
                </CardTitle>
                <div className="text-base leading-relaxed text-foreground/80 space-y-4">
                  <p>
                    Ainda que se trate de uma exposição breve, uma palestra
                    eficaz deve ser planejada para{" "}
                    <strong>inspirar as pessoas</strong> a aprimorarem sua
                    atuação prática imediatamente ao retornarem às suas rotinas.
                  </p>
                  <p>
                    Isso só acontece quando a condução é feita com base em{" "}
                    <strong>experiência real</strong>, conectando o público ao
                    dia a dia de forma genuína.
                  </p>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/10 text-xs text-muted-foreground">
                  "Foco em gerar ação e mudança de comportamento real."
                </div>
              </CardContent>
            </Card>

            <div className="lg:col-span-5 flex flex-col gap-6">
              <Card className="flex-1">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-lg">
                      <BrainCircuit className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-arvo">
                        Liderança
                      </CardTitle>
                      <CardDescription>
                        Temas estruturados para gestão e desenvolvimento
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {temasLideranca.map((tema, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="font-normal text-xs py-1 px-2.5 bg-secondary/50 hover:bg-secondary"
                      >
                        {tema}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-destructive/20 bg-destructive/5">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-destructive/10 text-destructive rounded-lg">
                      <ShieldAlert className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-arvo text-destructive">
                        Segurança no Trabalho
                      </CardTitle>
                      <CardDescription>
                        Consciência, preservação e percepção de risco
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-2">
                    {temasSeguranca.map((tema, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-sm text-foreground/95"
                      >
                        <ChevronRight className="h-4 w-4 text-destructive shrink-0" />
                        <span>{tema}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-3 flex flex-col gap-6">
              <Card className="flex-1">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 text-muted-foreground text-xs uppercase font-semibold tracking-wider">
                    <Users className="h-4 w-4 text-primary" />
                    <span>Público-Alvo</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">
                      Gestão
                    </h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Todos os níveis de liderança corporativa.
                    </p>
                  </div>
                  <div className="border-t border-border pt-3">
                    <h4 className="text-sm font-semibold text-foreground">
                      Operacional & Técnico
                    </h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Todos os profissionais da organization.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-muted/40 border-muted">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-background rounded-lg border border-border">
                      <Clock className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground block">
                        Duração
                      </span>
                      <span className="text-sm font-semibold text-foreground">
                        40 a 60 minutos
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-2 border-t border-border/60">
                    <div className="p-2 bg-background rounded-lg border border-border">
                      <Video className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground block">
                        Formato
                      </span>
                      <span className="text-sm font-semibold text-foreground flex items-center gap-1.5">
                        Online ou Presencial
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
