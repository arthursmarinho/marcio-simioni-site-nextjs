"use client";

import React, { useState } from "react";
import { Play, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Testimonial {
  id: number;
  type: "video" | "text";
  name: string;
  company: string;
  role: string;
  text?: string;
  youtubeVideoId?: string;
  videoTitle?: string;
}

export default function TestimonialsCarousel() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] =
    useState<Testimonial | null>(null);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      type: "video",
      name: "Daniel Spinelli",
      company: "maisPS",
      role: 'Consultor e diretor da maisPS; Mentor/Palestrante; Autor do best-seller "A potência da Liderança Consciente"',
      youtubeVideoId: "MW9PU9uqyNQ",
      videoTitle: "Feedback sobre o programa",
    },
    {
      id: 2,
      type: "text",
      name: "Gisele Monteiro",
      company: "Copel Comercializadora",
      role: "Superintendente de Regulação",
      text: "Fui convidada, junto com outros gerentes e profissionais da minha área, para uma reunião longa de trabalho e confesso que fui contrariada, pela quantidade de demandas pendentes que tinha por fazer. Esta reunião foi conduzida pelo Márcio, que acabou nos desarmando de uma forma muito gentil com sua didática, atenção e empatia. Ele quebrou as barreiras, despertou minha curiosidade sobre o tema discutido e conseguiu envolver todos no trabalho para que o resultado fosse o melhor.",
    },
    {
      id: 3,
      type: "video",
      name: "Rafael Eichelberger",
      company: "Copel Distribuição",
      role: "Gerente da área de gestão de distribuição",
      youtubeVideoId: "EukQF7KnkPQ",
    },
    {
      id: 4,
      type: "text",
      name: "Ana Slvia Alves Borgo",
      company: "Faktor Consulting",
      role: "Psicóloga, Mestra em Administração, Consultora Organizacional e Didata formadora em processos de grupo pela SBDG-RS",
      text: "Márcio possui valores, características pessoais e competências técnicas, que são fundamentais para um consultor e facilitador de grupos. Os valores que se destacam são integridade, respeito e ética profissional. Os relacionamentos interpessoais são favorecidos, principalmente, por características pessoais como um ótimo ouvinte, empático e acolhedor, que facilitam a formação e manutenção dos vínculos pessoais e profissionais. Suas competências técnicas como consultor e como facilitador de grupos, são resultados de sua dedicação e comprometimento com seu autodesenvolvimento, atualização constante e, principalmente, o compromisso ético de oferecer o melhor às empresas-clientes. Tive o privilégio de coordená-lo na Formação de Desenvolvimento de Grupos da SBDG e, hoje, sinto muito orgulho de ver o seu crescimento e suas conquistas. Um profissional que eu recomendo!",
    },
    {
      id: 5,
      type: "video",
      name: "João Guilherme Victorio Fontão",
      company: "Thutor Consultoria",
      role: "Diretor",
      youtubeVideoId: "aznelIIUeMo",
    },
    {
      id: 6,
      type: "text",
      name: "Pamela Vilma Suzin",
      company: "Copel Holding",
      role: "Gerente da Área de Saúde e Qualidade de Vida",
      text: "Tive o prazer de trabalhar com o Márcio na Companhia Paranaense de Energia – Copel Distribuição, na área de Treinamento e Desenvolvimento. Gostaria de expressar minha profunda gratidão e reconhecimento pelo seu trabalho excepcional e profissionalismo exemplar.Márcio não mede esforços para garantir que todas as tarefas sejam concluídas com máxima eficiência e qualidade. Ele é um colega excepcional, sempre disposto a oferecer ajuda e compartilhar conhecimentos, promovendo um ambiente de trabalho harmonioso, productivo e inovador. A paixão pelo que faz é evidente e contagiante em todos os aspectos de sua atuação. Sua dedicação, competência e entusiasmo são inspiradores em todos os trabalhos que realiza, seu legado a cada projeto realizado!",
    },
    {
      id: 7,
      type: "video",
      name: "Ubirajara Brum da Silva",
      company: "Copel Distribuição",
      role: "Superintendente de Ouvidoria",
      youtubeVideoId: "m8Ia67cKmRA",
    },
    {
      id: 8,
      type: "text",
      name: "Pamela Vilma Suzin",
      company: "Copel Holding",
      role: "Gerente da Área de Saúde e Qualidade de Vida",
      text: "Tive o prazer de trabalhar com o Márcio na Companhia Paranaense de Energia – Copel Distribuição, na área de Treinamento e Desenvolvimento. Gostaria de expressar minha profunda gratidão e reconhecimento pelo seu trabalho excepcional e profissionalismo exemplar.Márcio não mede esforços para garantir que todas as tarefas sejam concluídas com máxima eficiência e qualidade. Ele é um colega excepcional, sempre disposto a oferecer ajuda e compartilhar conhecimentos, promovendo um ambiente de trabalho harmonioso, produtivo e inovador. A paixão pelo que faz é evidente e contagiante em todos os aspectos de sua atuação. Sua dedicação, competência e entusiasmo são inspiradores em todos os trabalhos que realiza, seu legado a cada projeto realizado!",
    },
    {
      id: 9,
      type: "video",
      name: "Marcelo Gonçalvez Santos",
      company: "Copel Distribuição",
      role: "Gerente da Área de Gestão de Invocação",
      youtubeVideoId: "R8cXEv_nK2o",
    },
    {
      id: 10,
      type: "text",
      name: "Rafael Radaskievicz",
      company: "Copel Distribuição",
      role: "Gerente de Engenharia",
      text: "Tive a grata oportunidade de participar de um processo de desenvolvimento de competências conduzido pelo Marcio logo após assumir uma nova posição na empresa em que trabalhávamos. Posso afirmar que seus conhecimentos e habilidades foram determinantes para que eu pudesse lograr êxito no processo, estabelecendo objetivos e diretrizes de curto e médio prazo, que me auxiliaram a extrair maior valor e atingir meus objetivos pessoais. A  maestria do Marcio foi fundamental para que eu pudesse desenvolver o auto-conhecimento, crítica e estabelecimento de desafios, facilitando e catalisando o atingimento dos resultados pretendidos.",
    },
    {
      id: 11,
      type: "video",
      name: "Diogo Mantovani",
      company: "Copel Distribuição",
      role: "Gerente da Área de Faturamento Grandes Clientes",
      youtubeVideoId: "IZyWVKUMDCw",
    },
    {
      id: 12,
      type: "text",
      name: "Claudinei Neumann",
      company: "Copel Distribuição",
      role: "Gerente de Faturamento",
      text: "Caro Márcio, Gostaria de expressar minha mais profunda gratidão por todas as sessões do processo de desenvolvimento individual que tivemos focado em concentração. Desde o momento em que começamos essa jornada juntos, experimentei uma transformação notável em minha capacidade de concentração e foco. Suas orientações perspicazes e técnicas eficazes me ajudaram a superar obstáculos que pareciam insuperáveis. Aprendi a direcionar minha energia de forma mais eficiente, a eliminar distrações e a cultivar um estado de atenção plena que antes parecia escapar-me. Além disso, quero agradecer a paciência e empatia que você demonstrou em cada sessão. Sua habilidade de compreender minhas necessidades individuais e adaptar seu método para atender a elas foi fundamental para o meu progresso. Hoje, sinto-me mais confiante e produtivo do que nunca, e devo isso em grande parte ao seu apoio dedicação e expertise. Estou verdadeiramente grato por ter você como meu orientador e por todo o conhecimento valioso que você compartilhou comigo. Espero continuar aplicando as lições que aprendi durante nosso tempo juntos e levar adiante o crescimento pessoal que alcançamos. Mais uma vez, obrigado(a) por tudo. Gratidão!! Gratidão!! Gratidão!!!! Um Forte abraço, muito SUCESSO em sua jornada!!",
    },
    {
      id: 13,
      type: "video",
      name: "Louanne Mellina Paludo",
      company: "Copel Distribuição",
      role: "Analista de RH",
      youtubeVideoId: "Jhg7zzt7abY",
    },
  ];

  const handleOpenPopup = (testimonial: Testimonial) => {
    setSelectedTestimonial(testimonial);
    setIsOpen(true);
  };

  return (
    <div className="py-16 px-6 lg:py-24 bg-muted/30 overflow-hidden">
      <div className="max-w-[1900px] mx-auto space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">
            Depoimentos
          </span>
          <h2 className="text-3xl text-blue-700 font-bold tracking-tight sm:text-4xl font-arvo">
            O que dizem quem ja assistiu
          </h2>
          <p className="text-muted-foreground">
            Histórias reais de líderes e profissionais que transformaram sua
            atuação após as palestras.
          </p>
          <div className="h-1 w-12 bg-primary mx-auto rounded-full mt-2" />
        </div>

        <div className="relative px-4 sm:px-12 max-w-7xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((item) => {
                const isLongText = item.text && item.text.length > 200;

                const displayText = isLongText
                  ? `${item.text?.substring(0, 200)}...`
                  : item.text;

                return (
                  <CarouselItem
                    key={item.id}
                    className="pl-4 md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1 h-full">
                      <Card className="overflow-hidden bg-card border-border h-full flex flex-col justify-between">
                        <CardContent className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
                          <div className="flex-1">
                            {item.type === "video" && item.youtubeVideoId ? (
                              <div className="space-y-4">
                                <a
                                  href={`https://www.youtube.com/watch?v=${item.youtubeVideoId}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="group relative block aspect-video w-full overflow-hidden rounded-lg bg-black border border-border shadow-xs"
                                >
                                  <img
                                    src={`https://img.youtube.com/vi/${item.youtubeVideoId}/hqdefault.jpg`}
                                    alt={
                                      item.videoTitle || "Depoimento em vídeo"
                                    }
                                    className="w-full h-full object-cover opacity-85 group-hover:opacity-70 transition-all duration-300 group-hover:scale-103"
                                  />
                                  <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="p-4 bg-primary text-primary-foreground rounded-full shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                                      <Play className="h-5 w-5 fill-current pl-0.5" />
                                    </div>
                                  </div>
                                  <span className="absolute bottom-3 right-3 text-[10px] bg-black/85 text-white px-2.5 py-1 rounded font-medium tracking-wide">
                                    Assistir Depoimento
                                  </span>
                                </a>
                                {item.videoTitle && (
                                  <p className="text-sm font-medium italic text-muted-foreground">
                                    "{item.videoTitle}"
                                  </p>
                                )}
                              </div>
                            ) : (
                              <div className="space-y-4">
                                <Quote className="h-8 w-8 text-primary/25 shrink-0" />
                                <div className="text-foreground/90 leading-relaxed text-sm sm:text-base italic">
                                  <span>"{displayText}"</span>
                                  {isLongText && (
                                    <button
                                      type="button"
                                      onClick={() => handleOpenPopup(item)}
                                      className="text-xs text-muted-foreground hover:text-foreground font-semibold ml-1.5 cursor-pointer transition-colors inline-flex items-center align-middle"
                                    >
                                      mais
                                    </button>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>

                          <div className="pt-5 border-t border-border/60 mt-6">
                            <h3 className="font-semibold text-lg sm:text-base line-clamp-1">
                              {item.name}
                            </h3>
                            <p className="text-sm text-muted-foreground mt-0.5 font-medium line-clamp-1">
                              {item.company}
                            </p>
                            <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                              {item.role}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            <div className="hidden sm:block">
              <CarouselPrevious className="-left-4 lg:-left-12" />
              <CarouselNext className="-right-4 lg:-right-12" />
            </div>
          </Carousel>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-lg p-6 sm:p-8 rounded-lg">
          <DialogHeader className="space-y-4">
            <Quote className="h-8 w-8 text-primary/25 shrink-0" />
            <DialogTitle className="sr-only">
              Depoimento de {selectedTestimonial?.name}
            </DialogTitle>
          </DialogHeader>

          {selectedTestimonial && (
            <div className="space-y-6">
              <p className="text-foreground/90 leading-relaxed text-sm sm:text-base italic whitespace-pre-line">
                "{selectedTestimonial.text}"
              </p>

              <div className="pt-4 border-t border-border/60">
                <h4 className="font-semibold text-base text-foreground">
                  {selectedTestimonial.name}
                </h4>
                <p className="text-sm text-muted-foreground mt-0.5 font-medium">
                  {selectedTestimonial.company}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {selectedTestimonial.role}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
