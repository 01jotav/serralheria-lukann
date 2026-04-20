import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

/**
 * Galeria de obras.
 *
 * Quando chegarem fotos reais, basta trocar `src` para o caminho local
 * (ex: "/obras/portao-pivotante-petropolis-poa-01.jpg").
 * Ver convenção de nomes em `public/obras/README.md`.
 */
const items = [
  {
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80",
    alt: "Portão pivotante em aço executado pela Serralheria Lukann",
    title: "Portão pivotante em aço",
    caption: "Residência — Porto Alegre / RS",
  },
  {
    src: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1400&q=80",
    alt: "Mezanino industrial com 12m de vão livre",
    title: "Mezanino industrial com 12m de vão livre",
    caption: "Galpão logístico — Cachoeirinha / RS",
  },
  {
    src: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1400&q=80",
    alt: "Solda TIG em estrutura de aço inox",
    title: "Solda TIG em estrutura de aço inox",
    caption: "Reforço estrutural — Alvorada / RS",
  },
  {
    src: "https://images.unsplash.com/photo-1530469525856-cf37954301f7?auto=format&fit=crop&w=1400&q=80",
    alt: "Escada metálica com guarda-corpo",
    title: "Escada metálica com guarda-corpo milimétrico",
    caption: "Edifício comercial — Zona Norte POA",
  },
  {
    src: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1400&q=80",
    alt: "Cobertura metálica de grande vão",
    title: "Cobertura metálica de grande vão",
    caption: "Indústria metalúrgica — Região Metropolitana",
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
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-zinc-50 md:text-5xl">
            Aço em obra. Sem filtros, sem improvisos.
          </h2>
          <p className="mt-4 text-zinc-400 md:text-lg">
            Uma amostra das entregas recentes — do detalhe do cordão de solda ao portão instalado.
          </p>
        </div>

        <div className="mt-16 px-4 md:px-16">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent>
              {items.map((it) => (
                <CarouselItem key={it.title} className="md:basis-1/2 lg:basis-1/3">
                  <div className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
                    <div className="aspect-[4/5] overflow-hidden">
                      <img
                        src={it.src}
                        alt={it.alt}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <h3 className="text-lg font-extrabold leading-tight text-zinc-50">{it.title}</h3>
                      <p className="mt-1 text-xs uppercase tracking-wider text-amber-500">{it.caption}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-zinc-800 bg-zinc-900/70 text-zinc-100 hover:bg-amber-500 hover:text-zinc-950" />
            <CarouselNext className="border-zinc-800 bg-zinc-900/70 text-zinc-100 hover:bg-amber-500 hover:text-zinc-950" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
