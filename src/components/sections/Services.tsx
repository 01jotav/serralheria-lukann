import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DoorOpen, Building2, Flame, ArrowRight } from "lucide-react";

const services = [
  {
    icon: DoorOpen,
    title: "Portões e Grades Automatizadas",
    description:
      "Portões basculantes, deslizantes e pivotantes com motorização de linha pesada, reforços estruturais e acabamento anticorrosivo.",
  },
  {
    icon: Building2,
    title: "Estruturas Metálicas e Mezaninos",
    description:
      "Projetos calculados para cargas reais: mezaninos industriais, escadas metálicas, coberturas e galpões com aço certificado.",
  },
  {
    icon: Flame,
    title: "Manutenções e Soldas de Alta Resistência",
    description:
      "Soldas MIG/TIG/eletrodo revestido, reforços estruturais, reparos de emergência e recuperação de peças em aço e ferro.",
  },
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
      </div>
    </section>
  );
}
