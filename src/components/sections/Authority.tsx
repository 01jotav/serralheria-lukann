import { ShieldCheck, Microscope, Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WA_MESSAGES, whatsappWithText } from "@/lib/site";

const WHATSAPP = whatsappWithText(WA_MESSAGES.authority);

export default function Authority() {
  return (
    <section className="relative w-full bg-zinc-950 py-24 md:py-32">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Texto — protagonista: a OBRA do cliente */}
          <div className="order-2 lg:order-1 lg:col-span-7">
            <div className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-amber-500">
              Execução técnica
            </div>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-zinc-50 md:text-5xl">
              Cada cordão de solda na sua obra passa por inspeção técnica.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-zinc-400 md:text-lg">
              Seu projeto sai da prancheta com cálculo estrutural, vai pro corte com
              tolerância milimétrica e chega à obra com cada ponto de solda conferido.
              Nada de acabamento apressado, medida "no olho" ou aço de procedência duvidosa.
            </p>

            <div className="mt-8 space-y-4">
              <Feature
                icon={<Ruler />}
                title="Medição técnica no local"
                desc="Vamos até sua obra com trena a laser e esquadro. Toda peça sai no milímetro do projeto."
              />
              <Feature
                icon={<Microscope />}
                title="Aço certificado com rastreabilidade"
                desc="Nota fiscal e laudo de cada lote. Espessura e liga dimensionadas para a carga real de uso."
              />
              <Feature
                icon={<ShieldCheck />}
                title="Inspeção ponto a ponto"
                desc="Cordões de solda conferidos visualmente e, quando o projeto exige, com teste de penetração."
              />
            </div>

            {/* Almir como assinatura/selo — não mais protagonista */}
            <div className="mt-10 flex items-center gap-4 rounded-lg border border-zinc-800 bg-zinc-900/40 p-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-500 font-extrabold">
                AB
              </div>
              <div className="text-sm">
                <div className="font-semibold text-zinc-100">
                  Execução técnica assinada por Almir Balhejo
                </div>
                <div className="text-zinc-400">
                  Mestre serralheiro — +15 anos em estruturas metálicas pesadas.
                </div>
              </div>
            </div>

            <Button asChild size="lg" className="mt-8 bg-amber-500 text-zinc-950 hover:bg-amber-400">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                Conversar sobre a minha obra
              </a>
            </Button>
          </div>

          {/* Imagem */}
          <div className="relative order-1 lg:order-2 lg:col-span-5">
            <div className="absolute -inset-4 bg-gradient-to-br from-amber-500/30 via-transparent to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80"
                alt="Mestre serralheiro executando solda de alta precisão"
                className="aspect-[4/5] w-full object-cover grayscale-[30%]"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-transparent p-6">
                <div className="text-xs uppercase tracking-[0.3em] text-amber-500">
                  Ofício técnico
                </div>
                <div className="mt-1 text-lg font-extrabold text-zinc-50">
                  Precisão em cada ponto de solda
                </div>
              </div>
            </div>
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
