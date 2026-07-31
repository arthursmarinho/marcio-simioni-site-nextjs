export const WHATSAPP_URL =
  "https://wa.me/5541987624581?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

export const EMAIL = "contato@marciosimioni.com.br";

export const SOCIAL = {
  instagram: "https://instagram.com/marciosimioni_",
  youtube: "https://youtube.com/@marcio.simioni",
} as const;

export const NAV = [
  { label: "Início", href: "#inicio" },
  { label: "Para Empresas", href: "#foco" },
  { label: "Temas", href: "#temas" },
  { label: "Sobre", href: "#impacto" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
] as const;

export const LEADERSHIP_TOPICS = [
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
] as const;

export const SAFETY_TOPICS = [
  "Hábitos Seguros",
  "Procedimentos que salvam vidas",
  "Percepção de risco",
] as const;

export const STATS = [
  {
    value: 15,
    suffix: "+",
    label: "Anos de Experiência",
    detail: "De atuação prática no mercado.",
  },
  {
    value: 1000,
    suffix: "+",
    label: "Líderes Desenvolvidos",
    detail: "Que passaram por programas e processos de desenvolvimento.",
  },
  {
    value: 2000,
    suffix: "+",
    label: "Horas de Mentoria Individual",
    detail: "Focadas no desenvolvimento de competências de liderança.",
  },
  {
    value: 4000,
    suffix: "+",
    label: "Horas de Cursos e Workshops",
    detail: "Treinamentos, palestras e oficinas presenciais e online.",
  },
  {
    value: 800,
    suffix: "+",
    label: "Processos de Mentoria Coordenados",
    detail: "Acompanhamento estratégico e estruturado.",
  },
  {
    value: 100,
    suffix: "+",
    label: "Programas Elaborados",
    detail: "E executados sob medida para o desenvolvimento de lideranças.",
  },
] as const;

export type Testimonial =
  | {
      kind: "quote";
      name: string;
      company: string;
      role: string;
      quote: string;
    }
  | {
      kind: "video";
      name: string;
      company: string;
      role: string;
      youtubeId: string;
      title?: string;
    };

export const TESTIMONIALS: Testimonial[] = [
  {
    kind: "video",
    name: "Daniel Spinelli",
    company: "maisPS",
    role: 'Consultor e diretor da maisPS; Mentor/Palestrante; Autor do best-seller "A potência da Liderança Consciente"',
    youtubeId: "MW9PU9uqyNQ",
    title: "Feedback sobre o programa",
  },
  {
    kind: "quote",
    name: "Gisele Monteiro",
    company: "Copel Comercializadora",
    role: "Superintendente de Regulação",
    quote:
      "Fui convidada, junto com outros gerentes e profissionais da minha área, para uma reunião longa de trabalho e confesso que fui contrariada, pela quantidade de demandas pendentes que tinha por fazer.",
  },
  {
    kind: "video",
    name: "Rafael Eichelberger",
    company: "Copel Distribuição",
    role: "Gerente da área de gestão de distribuição",
    youtubeId: "EukQF7KnkPQ",
  },
  {
    kind: "quote",
    name: "Ana Silvia Alves Borgo",
    company: "Faktor Consulting",
    role: "Psicóloga, Mestra em Administração, Consultora Organizacional e Didata formadora em processos de grupo pela SBDG-RS",
    quote:
      "Márcio possui valores, características pessoais e competências técnicas, que são fundamentais para um consultor e facilitador de grupos. Os valores que se destacam são integridade, respeito e ética.",
  },
  {
    kind: "video",
    name: "João Guilherme Victorio Fontão",
    company: "Thutor Consultoria",
    role: "Diretor",
    youtubeId: "aznelIIUeMo",
  },
  {
    kind: "quote",
    name: "Pamela Vilma Suzin",
    company: "Copel Holding",
    role: "Gerente da Área de Saúde e Qualidade de Vida",
    quote:
      "Tive o prazer de trabalhar com o Márcio na Companhia Paranaense de Energia – Copel Distribuição, na área de Treinamento e Desenvolvimento. Gostaria de expressar minha profunda gratidão e reconhecimento.",
  },
  {
    kind: "video",
    name: "Ubirajara Brum da Silva",
    company: "Copel Distribuição",
    role: "Superintendente de Ouvidoria",
    youtubeId: "m8Ia67cKmRA",
  },
  {
    kind: "quote",
    name: "Claudinei Neumann",
    company: "Copel Distribuição",
    role: "Gerente de Faturamento",
    quote:
      "Caro Márcio, Gostaria de expressar minha mais profunda gratidão por todas as sessões do processo de desenvolvimento individual que tivemos focado em concentração. Desde o momento em que começamos essa jornada.",
  },
  {
    kind: "video",
    name: "Marcelo Gonçalvez Santos",
    company: "Copel Distribuição",
    role: "Gerente da Área de Gestão de Inovação",
    youtubeId: "R8cXEv_nK2o",
  },
  {
    kind: "quote",
    name: "Rafael Radaskievicz",
    company: "Copel Distribuição",
    role: "Gerente de Engenharia",
    quote:
      "Tive a grata oportunidade de participar de um processo de desenvolvimento de competências conduzido pelo Marcio logo após assumir uma nova posição na empresa em que trabalhávamos.",
  },
  {
    kind: "video",
    name: "Diogo Mantovani",
    company: "Copel Distribuição",
    role: "Gerente da Área de Faturamento Grandes Clientes",
    youtubeId: "IZyWVKUMDCw",
  },
  {
    kind: "video",
    name: "Louanne Mellina Paludo",
    company: "Copel Distribuição",
    role: "Analista de RH",
    youtubeId: "Jhg7zzt7abY",
  },
];
