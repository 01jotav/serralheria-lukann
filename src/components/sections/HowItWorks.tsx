import { MessageCircle, Ruler, FileCheck, Hammer } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Você chama no WhatsApp",
    desc: "Manda fotos, medidas aproximadas ou a planta. Sem formulário, sem cadastro, sem ligação automática.",
  },
  {
    icon: Ruler,
    title: "Visita técnica gratuita",
    desc: "Vamos até sua obra medir no local, entender a carga real de uso e alinhar prazo e materiais.",
  },
  {
    icon: FileCheck,
    title: "Orçamento em até 24h",
    desc: "Proposta técnica detalhada: medidas, espessuras, acabamento, cronograma e valor fechado.",
  },
  {
    icon: Hammer,
    title: "Execução e instalação",
    desc: "Peça fabricada em oficina, transportada e instalada no prazo combinado. Sem atraso, sem surpresa.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative w-full bg-zinc-950 py-24 md:py-32">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-amber-500">
            Como funciona
          </div>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-zinc-50 md:text-5xl">
            Do WhatsApp à peça instalada em 4 passos claros.
          </h2>
          <p className="mt-4 text-zinc-400 md:text-lg">
            Sem burocracia, sem suspense. Você acompanha cada etapa.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="group relative rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 transition-colors hover:border-amber-500/40"
            >
              <div className="absolute right-5 top-5 text-5xl font-extrabold leading-none text-zinc-800 transition-colors group-hover:text-amber-500/20">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-md border border-amber-500/30 bg-amber-500/10 text-amber-500">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-extrabold text-zinc-50">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
