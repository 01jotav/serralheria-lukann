import { Gem, CalendarClock, Sparkles, Ruler } from "lucide-react";

const items = [
  {
    icon: Gem,
    title: "Materiais de primeira linha",
    desc: "Aço certificado, tubos com espessura dimensionada por projeto e acabamentos anticorrosivos de alto desempenho.",
  },
  {
    icon: CalendarClock,
    title: "Prazos cumpridos com rigor",
    desc: "Cronograma assinado no orçamento. Entrega e instalação dentro do combinado — sem atrasos, sem surpresas.",
  },
  {
    icon: Sparkles,
    title: "Acabamento premium",
    desc: "Cordões de solda uniformes, lixamento fino, pintura eletrostática e nivelamento milimétrico em cada peça.",
  },
  {
    icon: Ruler,
    title: "Precisão sob medida",
    desc: "Medição técnica no local, desenho 3D do projeto e ajuste exato às dimensões reais da sua obra.",
  },
];

export default function Differentials() {
  return (
    <section className="relative w-full overflow-hidden bg-zinc-950 py-24 md:py-32">
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="container relative mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-amber-500">
              Por que Lukann
            </div>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-zinc-50 md:text-5xl">
              Quatro pilares que sustentam cada projeto.
            </h2>
            <p className="mt-6 text-zinc-400 md:text-lg">
              Robustez estrutural, precisão técnica e uma postura profissional que você sente
              desde a primeira visita até a última solda.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-7">
            {items.map((it) => (
              <div
                key={it.title}
                className="group relative rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 transition-colors hover:border-amber-500/40"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-md border border-amber-500/30 bg-amber-500/10 text-amber-500">
                  <it.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-extrabold text-zinc-50">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
