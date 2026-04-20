import { Button } from "@/components/ui/button";
import { WA_MESSAGES, whatsappWithText } from "@/lib/site";
import { Camera, MapPin, Wrench, Check, MessageCircle } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: Camera,
    title: "Uma foto do local",
    desc: "Do portão antigo, do muro, da planta, do vão — o que você tiver.",
  },
  {
    n: "02",
    icon: MapPin,
    title: "Cidade ou bairro",
    desc: "Para avaliar logística de entrega e agendar a visita técnica.",
  },
  {
    n: "03",
    icon: Wrench,
    title: "O que você precisa",
    desc: "Portão, grade, escada, mezanino, reparo… Em uma linha basta.",
  },
];

const prefilledMsg = WA_MESSAGES.quickQuote;

export default function QuickQuote() {
  return (
    <section className="relative w-full overflow-hidden bg-zinc-950 py-24 md:py-32">
      {/* background accents */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
      <div className="pointer-events-none absolute -left-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-brand-navy/30 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-amber-500/10 blur-[120px]" />

      <div className="container relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-amber-500">
            Orçamento em 3 mensagens
          </div>
          <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-zinc-50 sm:text-3xl md:text-5xl">
            Você não precisa medir, visitar nem preencher formulário.
          </h2>
          <p className="mt-4 text-zinc-400 md:text-lg">
            Manda três coisas simples no WhatsApp. Nossa equipe técnica retorna
            com o orçamento preliminar no mesmo dia — e só agenda a visita ao
            local se você quiser fechar.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Steps */}
          <div className="space-y-4">
            {steps.map((s) => (
              <div
                key={s.n}
                className="group relative flex items-start gap-5 rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 transition-colors hover:border-amber-500/40"
              >
                <div className="flex shrink-0 flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md border border-amber-500/30 bg-amber-500/10 text-amber-500">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div className="mt-2 text-xs font-extrabold tracking-widest text-zinc-600">
                    {s.n}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-zinc-50">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}

            <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:items-center">
              <Button
                asChild
                size="xl"
                className="group w-full bg-amber-500 text-zinc-950 shadow-[0_0_40px_-10px_rgba(245,158,11,0.7)] hover:bg-amber-400 sm:w-auto"
              >
                <a
                  href={whatsappWithText(prefilledMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Começar agora no WhatsApp
                </a>
              </Button>
              <div className="flex items-center gap-2 text-xs text-zinc-500">
                <Check className="h-4 w-4 text-amber-500" />
                Sem formulário · sem cadastro · resposta no mesmo dia
              </div>
            </div>
          </div>

          {/* Preview da conversa */}
          <div className="relative">
            <div className="pointer-events-none absolute -inset-2 rounded-3xl bg-gradient-to-br from-amber-500/10 via-transparent to-brand-navy/20 blur-2xl sm:-inset-6" />
            <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/80 shadow-2xl">
              {/* header fake do chat */}
              <div className="flex items-center gap-3 border-b border-zinc-800 bg-zinc-900 px-4 py-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-navy text-[10px] font-extrabold text-white">
                  SL
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-zinc-100">
                    Serralheria Lukann
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-emerald-400">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </span>
                    online
                  </div>
                </div>
                <MessageCircle className="h-5 w-5 text-emerald-500" />
              </div>

              {/* mensagens */}
              <div
                className="space-y-3 px-4 py-6"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 20% 10%, rgba(245,158,11,0.04), transparent 40%), radial-gradient(circle at 80% 90%, rgba(30,58,111,0.08), transparent 40%)",
                }}
              >
                {/* Mensagem do cliente — imagem simulada */}
                <Bubble from="client">
                  <div className="mb-1.5 flex aspect-video items-center justify-center overflow-hidden rounded-md bg-zinc-800">
                    <img
                      src="/obras/portao-preto-fosco-petropolis-poa-03.jpg"
                      alt=""
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <span>Boa tarde! Quero trocar meu portão por um assim.</span>
                  <Time>14:02</Time>
                </Bubble>

                <Bubble from="client">
                  <span>
                    📍 Bairro Petrópolis — POA
                    <br />
                    🔧 Portão de garagem, largura ~3,5m
                  </span>
                  <Time>14:02</Time>
                </Bubble>

                {/* Resposta Lukann */}
                <Bubble from="lukann">
                  <span>
                    Olá! Tudo bem? Recebi as fotos. Consigo passar um orçamento
                    preliminar ainda hoje, e agendo visita técnica pra medir no
                    local se estiver de acordo. 👍
                  </span>
                  <Time>14:18</Time>
                </Bubble>

                <Bubble from="lukann">
                  <span>
                    Modelo semelhante: R$ X.XXX,XX · prazo de 18 dias úteis
                    após aprovação. Posso detalhar tudo?
                  </span>
                  <Time>14:19</Time>
                </Bubble>
              </div>
            </div>

            <p className="mt-4 text-center text-xs italic text-zinc-500">
              * Exemplo ilustrativo de uma conversa real.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Bubble({
  from,
  children,
}: {
  from: "client" | "lukann";
  children: React.ReactNode;
}) {
  const isClient = from === "client";
  return (
    <div className={`flex ${isClient ? "justify-end" : "justify-start"}`}>
      <div
        className={`relative max-w-[80%] rounded-2xl px-3.5 py-2 text-sm leading-snug shadow-md ${
          isClient
            ? "rounded-br-sm bg-emerald-900/60 text-emerald-50"
            : "rounded-bl-sm bg-zinc-800 text-zinc-100"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function Time({ children }: { children: React.ReactNode }) {
  return (
    <span className="ml-2 inline-block text-[10px] text-zinc-400/70">
      {children}
    </span>
  );
}
