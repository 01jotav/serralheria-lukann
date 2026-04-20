import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { SITE, WA_MESSAGES, whatsappWithText } from "@/lib/site";
import { MapPin, Phone, MessageCircle, Clock, ExternalLink } from "lucide-react";

// Lucide não expõe mais o ícone do Instagram por questão de marca — usamos inline.
function Instagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer
      id="contato"
      className="relative w-full overflow-hidden border-t border-zinc-900 bg-zinc-950"
    >
      {/* Final CTA */}
      <div className="relative border-b border-zinc-900">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-amber-500/10 via-transparent to-transparent" />
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-brand-navy/30 blur-[140px]" />
        <div className="container relative mx-auto max-w-5xl px-6 py-20 text-center md:py-28">
          <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-zinc-50 sm:text-3xl md:text-5xl">
            Seu projeto merece aço executado com precisão.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-zinc-400 md:text-lg">
            Envie as medidas, fotos ou a planta. Retornamos com um orçamento
            técnico, cronograma e proposta em até 24h úteis.
          </p>
          <Button
            asChild
            size="xl"
            className="mt-10 bg-amber-500 text-zinc-950 shadow-[0_0_40px_-10px_rgba(245,158,11,0.7)] hover:bg-amber-400"
          >
            <a href={whatsappWithText(WA_MESSAGES.footerFinal)} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Pedir meu orçamento agora
            </a>
          </Button>
        </div>
      </div>

      {/* Contato + mapa */}
      <div className="container mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Bloco de contato e marca */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <Logo width={56} className="h-14 w-14 object-cover" />
              <div>
                <div className="text-xl font-extrabold tracking-tight text-zinc-50">
                  {SITE.name}
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-amber-500">
                  {SITE.tagline}
                </div>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-zinc-400">
              Estruturas metálicas pesadas, portões sob medida e soldas de alta
              resistência. Ofício técnico, aço certificado e acabamento premium.
            </p>

            <div className="mt-8 space-y-4">
              <ContactLine
                icon={<MapPin />}
                label="Endereço"
                value={
                  <a
                    href={SITE.address.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-amber-500"
                  >
                    {SITE.address.street}
                    <br />
                    {SITE.address.neighborhood} — {SITE.address.city} / {SITE.address.state}
                    <ExternalLink className="ml-1 inline h-3 w-3 shrink-0" />
                  </a>
                }
              />
              <ContactLine
                icon={<Phone />}
                label="WhatsApp"
                value={
                  <a
                    href={whatsappWithText(WA_MESSAGES.header)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-500"
                  >
                    {SITE.whatsapp.display}
                  </a>
                }
              />
              <ContactLine
                icon={<Instagram />}
                label="Instagram"
                value={
                  <a
                    href={SITE.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-500"
                  >
                    {SITE.instagram.handle}
                  </a>
                }
              />
              <ContactLine
                icon={<Clock />}
                label="Horário"
                value={
                  <>
                    {SITE.hours.weekdays}
                    <br />
                    {SITE.hours.saturday}
                  </>
                }
              />
            </div>
          </div>

          {/* Google Maps embed */}
          <div className="lg:col-span-3">
            <div className="mb-3 flex items-center justify-between">
              <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-500">
                Onde estamos
              </h4>
              <a
                href={SITE.address.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-400 hover:text-amber-500"
              >
                Abrir no Google Maps
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
            {/*
              Mapa como preview "estático": o iframe fica visível mas sem
              interação (pointer-events: none na camada superior), evitando
              que o pino fique dessincronizado quando o usuário arrasta.
              Para navegar, abre direto no Google Maps (melhor UX em mobile
              porque usa o GPS do aparelho).
            */}
            <a
              href={SITE.address.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label="Abrir localização no Google Maps"
            >
              <div className="relative h-[280px] w-full sm:h-[360px]">
                <iframe
                  title="Localização da Serralheria Lukann"
                  src={SITE.address.mapsEmbed}
                  className="absolute inset-0 h-full w-full"
                  style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg) saturate(0.6)" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                {/* Camada de captura — bloqueia interação com o iframe */}
                <div className="absolute inset-0 bg-transparent" />
              </div>

              {/* Overlay central com CTA */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-zinc-950/40 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 shadow-xl">
                  <ExternalLink className="h-4 w-4" />
                  Abrir no Google Maps
                </div>
              </div>

              {/* Badge de endereço no canto — honesto, sem fingir pino */}
              <div className="pointer-events-none absolute bottom-3 left-3 right-3 rounded-md border border-zinc-800 bg-zinc-950/90 px-3 py-2 text-xs text-zinc-100 backdrop-blur sm:right-auto sm:max-w-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-amber-500" />
                  <span className="font-semibold">
                    {SITE.address.street} — {SITE.address.neighborhood}
                  </span>
                </div>
                <div className="mt-0.5 pl-[22px] text-[11px] text-zinc-400">
                  Toque para abrir no app de mapas
                </div>
              </div>
            </a>
            <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3">
              {SITE.areaServed.map((city) => (
                <div
                  key={city}
                  className="flex items-center gap-2 rounded-md border border-zinc-800 bg-zinc-900/40 px-3 py-2 text-xs text-zinc-300"
                >
                  <MapPin className="h-3.5 w-3.5 text-amber-500" />
                  {city}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-900 pt-8 text-xs text-zinc-500 md:flex-row">
          <div>
            © {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.
          </div>
          <div className="uppercase tracking-widest">
            Aço · Precisão · Durabilidade
          </div>
        </div>
      </div>
    </footer>
  );
}

function ContactLine({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex gap-3">
      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900 text-amber-500">
        <div className="[&>svg]:h-4 [&>svg]:w-4">{icon}</div>
      </div>
      <div className="text-sm">
        <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
          {label}
        </div>
        <div className="text-zinc-300">{value}</div>
      </div>
    </div>
  );
}
