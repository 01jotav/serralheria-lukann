import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { WA_MESSAGES, whatsappWithText } from "@/lib/site";
import { MessageCircle } from "lucide-react";

/**
 * Galeria de obras.
 *
 * Quando chegarem fotos reais, basta trocar `src` para o caminho local
 * (ex: "/obras/portao-pivotante-petropolis-poa-01.jpg").
 * Ver convenção de nomes em `public/obras/README.md`.
 */
const items = [
  {
    src: "/obras/portao-basculante-branco-sarandi-poa-02.jpg",
    alt: "Portão residencial branco com frisos horizontais de ventilação — instalado pela Serralheria Lukann em Sarandi, Porto Alegre",
    title: "Portão residencial branco com frisos de ventilação",
    caption: "Residência — Sarandi / POA",
  },
  {
    src: "/obras/portao-preto-fosco-petropolis-poa-03.jpg",
    alt: "Portão metálico preto fosco com detalhes superiores vazados — Serralheria Lukann, bairro Petrópolis, Porto Alegre",
    title: "Portão preto fosco com detalhes vazados",
    caption: "Residência — Petrópolis / POA",
  },
  {
    src: "/obras/portao-porta-social-canoas-04.jpg",
    alt: "Portão duplo de garagem com porta social integrada em tela metálica expansiva — Serralheria Lukann em Canoas",
    title: "Portão duplo com porta social integrada",
    caption: "Residência — Canoas / RS",
  },
  {
    src: "/obras/portao-horizontal-alvorada-01.jpg",
    alt: "Fechamento metálico horizontal em barras de aço com portão pedestre lateral — Serralheria Lukann, Alvorada",
    title: "Fechamento horizontal em barras de aço",
    caption: "Residência — Alvorada / RS",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative w-full bg-zinc-950 py-24 md:py-32">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-amber-500">
            Projetos executados
          </div>
          <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-zinc-50 sm:text-3xl md:text-5xl">
            Aço em obra. Sem filtros, sem improvisos.
          </h2>
          <p className="mt-4 text-zinc-400 md:text-lg">
            Uma amostra das entregas recentes. <span className="text-amber-500">Clique em qualquer obra</span> pra pedir um orçamento semelhante.
          </p>
        </div>

        <div className="relative mt-16 px-0 sm:px-4 md:px-16">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent>
              {items.map((it) => (
                <CarouselItem key={it.title} className="md:basis-1/2 lg:basis-1/3">
                  <a
                    href={whatsappWithText(
                      WA_MESSAGES.portfolioItem(it.title, it.caption)
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 transition-colors hover:border-amber-500/60"
                  >
                    <div className="aspect-[4/5] overflow-hidden">
                      <img
                        src={it.src}
                        alt={it.alt}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

                    {/* CTA: aparece no hover no desktop, fica discreto em mobile */}
                    <div className="absolute inset-0 hidden items-center justify-center bg-zinc-950/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:flex">
                      <div className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 shadow-lg">
                        <MessageCircle className="h-4 w-4" />
                        Quero um assim
                      </div>
                    </div>

                    {/* Mobile: chip discreto sempre visível no canto */}
                    <div className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-amber-500 px-2.5 py-1 text-[11px] font-semibold text-zinc-950 shadow-lg md:hidden">
                      <MessageCircle className="h-3 w-3" />
                      Quero um assim
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <h3 className="text-lg font-extrabold leading-tight text-zinc-50">{it.title}</h3>
                      <p className="mt-1 text-xs uppercase tracking-wider text-amber-500">{it.caption}</p>
                    </div>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 border-zinc-800 bg-zinc-900/90 text-zinc-100 hover:bg-amber-500 hover:text-zinc-950 md:-left-12" />
            <CarouselNext className="right-2 border-zinc-800 bg-zinc-900/90 text-zinc-100 hover:bg-amber-500 hover:text-zinc-950 md:-right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
