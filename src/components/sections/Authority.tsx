import { Award, ShieldCheck, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP = "https://wa.me/5551999999999";

export default function Authority() {
  return (
    <section className="relative w-full bg-zinc-950 py-24 md:py-32">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image placeholder */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-br from-amber-500/30 via-transparent to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80"
                alt="Almir Balhejo — mestre serralheiro"
                className="aspect-[4/5] w-full object-cover grayscale-[30%]"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-transparent p-6">
                <div className="text-xs uppercase tracking-[0.3em] text-amber-500">Mestre Serralheiro</div>
                <div className="mt-1 text-2xl font-extrabold text-zinc-50">Almir Balhejo</div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <div className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-amber-500">
              Autoridade técnica
            </div>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-zinc-50 md:text-5xl">
              A mão que desenha a solda define a vida útil da estrutura.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-zinc-400 md:text-lg">
              Sob a liderança técnica de <span className="font-semibold text-zinc-100">Almir Balhejo</span>,
              cada projeto é calculado, cortado e soldado com rigor de engenharia.
              Especialista em estruturas complexas — mezaninos industriais, portões automatizados
              pesados e reforços estruturais — Almir atua pessoalmente na execução e na inspeção
              de cada cordão de solda.
            </p>

            <div className="mt-8 space-y-4">
              <Feature icon={<Award />} title="Mais de 15 anos de ofício" desc="Experiência em serralheria industrial, residencial e arquitetônica." />
              <Feature icon={<ShieldCheck />} title="Rigor em soldas e materiais" desc="Eletrodos certificados, aço SAE tratado e inspeção ponto a ponto." />
              <Feature icon={<Wrench />} title="Engenharia sob medida" desc="Projetos calculados para cargas reais, clima e uso final." />
            </div>

            <Button asChild size="lg" className="mt-10 bg-amber-500 text-zinc-950 hover:bg-amber-400">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                Falar com o Almir agora
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-amber-500/30 bg-amber-500/10 text-amber-500">
        <div className="[&>svg]:h-5 [&>svg]:w-5">{icon}</div>
      </div>
      <div>
        <h3 className="font-semibold text-zinc-100">{title}</h3>
        <p className="text-sm text-zinc-400">{desc}</p>
      </div>
    </div>
  );
}
