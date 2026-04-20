import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DoorOpen, Building2, Flame, ArrowRight } from "lucide-react";

const services = [
  {
    icon: DoorOpen,
    title: "Portões e Grades Automatizadas",
    description:
      "Portões basculantes, deslizantes e pivotantes com motorização pesada, reforços estruturais e acabamento anticorrosivo.",
  },
  {
    icon: Building2,
    title: "Estruturas Metálicas e Mezaninos",
    description:
      "Projetos calculados para cargas reais: mezaninos industriais, escadas metálicas, coberturas e galpões em aço certificado.",
  },
  {
    icon: Flame,
    title: "Manutenções e Soldas de Alta Resistência",
    description:
      "Soldas MIG/TIG/eletrodo, reforços estruturais, reparos de emergência e recuperação de peças em aço e ferro.",
  },
];

// Catálogo completo — cada termo é uma busca que queremos ranquear
const catalog = [
  "Portão basculante",
  "Portão deslizante",
  "Portão pivotante",
  "Portão social",
  "Grade de proteção",
  "Grade para janela",
  "Escada metálica",
  "Escada caracol",
  "Corrimão de inox",
  "Mezanino industrial",
  "Estrutura de galpão",
  "Cobertura metálica",
  "Cobertura em policarbonato",
  "Guarda-corpo",
  "Pergolado de aço",
  "Porta de aço",
  "Reforço estrutural",
  "Solda MIG / TIG",
  "Reparo de portão automático",
  "Automação de portão",
];

export default function Services() {
  return (
    <section id="servicos" className="relative w-full bg-zinc-950 py-24 md:py-32">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-amber-500">
            O que fazemos
          </div>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-zinc-50 md:text-5xl">
            Três frentes, um padrão: aço pesado executado com precisão.
          </h2>
          <p className="mt-4 text-zinc-400 md:text-lg">
            Do desenho técnico à instalação, cada serviço segue o mesmo protocolo de resistência e durabilidade.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((s) => (
            <Card
              key={s.title}
              className="group relative overflow-hidden border-zinc-800 bg-zinc-900/40 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/40 hover:bg-zinc-900"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-md border border-amber-500/30 bg-amber-500/10 text-amber-500">
                  <s.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl text-zinc-50">{s.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-zinc-400">{s.description}</CardDescription>
                <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Saber mais <ArrowRight className="h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Catálogo expandido — SEO long-tail */}
        <div className="mt-20 rounded-2xl border border-zinc-900 bg-zinc-900/30 p-8 md:p-12">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h3 className="text-xl font-extrabold text-zinc-50 md:text-2xl">
                E também executamos:
              </h3>
              <p className="mt-1 text-sm text-zinc-400">
                Não encontrou o que precisa? Chama no WhatsApp que avaliamos.
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {catalog.map((item) => (
              <span
                key={item}
                className="inline-flex items-center rounded-md border border-zinc-800 bg-zinc-900/60 px-3 py-1.5 text-xs font-medium text-zinc-300 transition-colors hover:border-amber-500/40 hover:text-amber-500"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
