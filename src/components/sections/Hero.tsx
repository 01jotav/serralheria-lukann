import { Button } from "@/components/ui/button";
import { Flame, MessageCircle, ShieldCheck, Clock, Award } from "lucide-react";
import { SITE } from "@/lib/site";

const WHATSAPP = SITE.whatsapp.url;

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
      <div className="pointer-events-none absolute bottom-20 left-0 h-96 w-96 rounded-full bg-brand-navy/30 blur-[140px]" />

      <div className="container relative z-10 mx-auto flex min-h-[90vh] max-w-6xl flex-col items-center justify-center px-6 py-24 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-zinc-300 backdrop-blur">
          <Flame className="h-3.5 w-3.5 text-amber-500" />
          Serralheria em Porto Alegre · Alvorada · Cachoeirinha
        </div>

        {/* H1 centrado no cliente, não em nós */}
        <h1 className="max-w-5xl text-4xl font-extrabold leading-[1.05] tracking-tight text-zinc-50 md:text-6xl lg:text-7xl">
          Eleve o padrão da sua obra com{" "}
          <span className="bg-gradient-to-br from-amber-400 via-amber-500 to-orange-600 bg-clip-text text-transparent">
            aço sob medida
          </span>{" "}
          que dura décadas.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
          Portões, estruturas metálicas, escadas e mezaninos executados com precisão
          milimétrica, aço certificado e soldas de alta resistência.
          Orçamento técnico em até 24h.
        </p>

        {/* Stats movidas para antes dos CTAs — prova social seca */}
        <div className="mt-10 grid w-full max-w-3xl grid-cols-3 gap-4 sm:gap-8">
          <QuickStat icon={<Award />} value="+15" label="anos de ofício" />
          <QuickStat icon={<ShieldCheck />} value="500+" label="projetos entregues" />
          <QuickStat icon={<Clock />} value="24h" label="orçamento pronto" />
        </div>

        <div className="mt-10 flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button asChild size="xl" className="group w-full bg-amber-500 text-zinc-950 shadow-[0_0_40px_-10px_rgba(245,158,11,0.7)] hover:bg-amber-400 sm:w-auto">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Pedir orçamento no WhatsApp
            </a>
          </Button>
          <Button asChild size="xl" variant="outline" className="w-full border-zinc-800 bg-zinc-900/40 text-zinc-100 hover:bg-zinc-900 sm:w-auto">
            <a href="#portfolio">Ver obras executadas</a>
          </Button>
        </div>

        <p className="mt-6 text-xs uppercase tracking-widest text-zinc-500">
          Resposta rápida · Visita técnica sem compromisso
        </p>
      </div>
    </section>
  );
}

function QuickStat({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="flex flex-col items-center border-l border-zinc-800 first:border-l-0 sm:border-l">
      <div className="mb-1 text-amber-500 [&>svg]:h-4 [&>svg]:w-4">{icon}</div>
      <div className="text-3xl font-extrabold tracking-tight text-zinc-50 md:text-4xl">
        {value}
      </div>
      <div className="mt-1 text-[10px] uppercase tracking-wider text-zinc-500 sm:text-xs">
        {label}
      </div>
    </div>
  );
}
