import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, MessageCircle, Flame } from "lucide-react";

const WHATSAPP = "https://wa.me/5551999999999";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden border-t border-zinc-900 bg-zinc-950">
      {/* Final CTA */}
      <div className="relative border-b border-zinc-900">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-amber-500/10 via-transparent to-transparent" />
        <div className="container relative mx-auto max-w-5xl px-6 py-20 text-center md:py-28">
          <Flame className="mx-auto mb-5 h-8 w-8 text-amber-500" />
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-zinc-50 md:text-5xl">
            Seu projeto merece aço executado com precisão.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-zinc-400 md:text-lg">
            Envie as medidas, fotos ou a planta. O Almir retorna com um orçamento
            técnico, cronograma e proposta dentro de 24 horas úteis.
          </p>
          <Button
            asChild
            size="xl"
            className="mt-10 bg-amber-500 text-zinc-950 shadow-[0_0_40px_-10px_rgba(245,158,11,0.7)] hover:bg-amber-400"
          >
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Pedir meu orçamento agora
            </a>
          </Button>
        </div>
      </div>

      {/* Info grid */}
      <div className="container mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-amber-500 text-zinc-950">
                <Flame className="h-5 w-5" />
              </div>
              <div className="text-xl font-extrabold tracking-tight text-zinc-50">
                Serralheria Lukann
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400">
              Estruturas metálicas pesadas, portões sob medida e soldas de alta resistência.
              Ofício técnico, aço certificado e acabamento premium.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-500">
              Área de cobertura
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-zinc-500" /> Porto Alegre — RS
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-zinc-500" /> Alvorada — RS
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-zinc-500" /> Cachoeirinha — RS
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-zinc-500" /> Região Metropolitana
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-500">
              Contato direto
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-zinc-300">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-zinc-500" /> (51) 99999-9999
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-zinc-500" /> contato@serralherialukann.com.br
              </li>
              <li>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400"
                >
                  <MessageCircle className="h-4 w-4" />
                  Falar no WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-900 pt-8 text-xs text-zinc-500 md:flex-row">
          <div>
            © {new Date().getFullYear()} Serralheria Lukann. Todos os direitos reservados.
          </div>
          <div className="uppercase tracking-widest">
            Aço · Precisão · Durabilidade
          </div>
        </div>
      </div>
    </footer>
  );
}
