import { Button } from "@/components/ui/button";
import { Flame, MessageCircle, MapPin } from "lucide-react";

const WHATSAPP = "https://wa.me/5551999999999";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-zinc-950">
      {/* background grid + glow */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-amber-500/20 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-600/10 blur-[120px]" />

      <div className="container relative z-10 mx-auto flex min-h-[90vh] max-w-6xl flex-col items-center justify-center px-6 py-24 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-zinc-300 backdrop-blur">
          <Flame className="h-3.5 w-3.5 text-amber-500" />
          Serralheria Lukann — Porto Alegre / RS
        </div>

        <h1 className="max-w-5xl text-4xl font-extrabold leading-[1.05] tracking-tight text-zinc-50 md:text-6xl lg:text-7xl">
          Estruturas metálicas e portões{" "}
          <span className="bg-gradient-to-br from-amber-400 via-amber-500 to-orange-600 bg-clip-text text-transparent">
            sob medida
          </span>{" "}
          feitos para durar décadas.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
          Projetos com precisão milimétrica, aço tratado e soldas de alta resistência.
          Atendemos Porto Alegre, Alvorada, Cachoeirinha e toda a Região Metropolitana.
        </p>

        <div className="mt-10 flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button asChild size="xl" className="group w-full bg-amber-500 text-zinc-950 shadow-[0_0_40px_-10px_rgba(245,158,11,0.7)] hover:bg-amber-400 sm:w-auto">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Solicitar orçamento no WhatsApp
            </a>
          </Button>
          <Button asChild size="xl" variant="outline" className="w-full border-zinc-800 bg-zinc-900/40 text-zinc-100 hover:bg-zinc-900 sm:w-auto">
            <a href="#portfolio">Ver projetos executados</a>
          </Button>
        </div>

        <div className="mt-14 grid w-full max-w-3xl grid-cols-2 gap-6 border-t border-zinc-900 pt-8 md:grid-cols-4">
          <Stat value="+15" label="Anos de ofício" />
          <Stat value="500+" label="Projetos entregues" />
          <Stat value="100%" label="Aço certificado" />
          <Stat value="3" label="Cidades atendidas" icon={<MapPin className="h-3.5 w-3.5" />} />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label, icon }: { value: string; label: string; icon?: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-3xl font-extrabold tracking-tight text-amber-500 md:text-4xl">{value}</div>
      <div className="mt-1 flex items-center gap-1.5 text-xs uppercase tracking-wider text-zinc-500">
        {icon}
        {label}
      </div>
    </div>
  );
}
