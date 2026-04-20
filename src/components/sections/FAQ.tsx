import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Vocês atendem fora de Porto Alegre?",
    a: "Sim. Atendemos toda a Região Metropolitana: Alvorada, Cachoeirinha, Viamão, Gravataí, Canoas e municípios vizinhos. Para obras fora desse raio, consulte via WhatsApp — avaliamos caso a caso.",
  },
  {
    q: "Quanto tempo leva para receber um orçamento?",
    a: "Até 24 horas úteis após a visita técnica. Se você já tem planta ou medidas, enviamos um orçamento preliminar no mesmo dia pelo WhatsApp.",
  },
  {
    q: "Qual a garantia dos serviços?",
    a: "Estruturas metálicas e portões têm garantia mínima de 12 meses contra defeitos de fabricação e solda. Componentes eletrônicos (motores, centrais) seguem a garantia do fabricante — em geral 12 a 24 meses.",
  },
  {
    q: "O pagamento pode ser parcelado?",
    a: "Sim. Trabalhamos com entrada + parcelas conforme o porte da obra. Aceitamos PIX, transferência bancária e cartão (parcelamos no cartão para projetos acima de um valor mínimo).",
  },
  {
    q: "Vocês atendem emergência ou finais de semana?",
    a: "Para manutenção de portão travado, solda urgente ou reparo estrutural, sim — avaliamos no momento da ligação. Obras novas são executadas em horário comercial.",
  },
  {
    q: "Fazem o projeto técnico ou preciso levar pronto?",
    a: "Fazemos o projeto. A partir da medição no local, desenhamos a peça, dimensionamos espessuras e materiais e só executamos depois da sua aprovação.",
  },
  {
    q: "Qual o tipo de aço que vocês utilizam?",
    a: "Aço SAE certificado, com nota fiscal e laudo de rastreabilidade. A espessura é dimensionada por projeto — não usamos perfil mais fino para reduzir custo.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative w-full bg-zinc-950 py-24 md:py-32">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-amber-500">
            Perguntas frequentes
          </div>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-zinc-50 md:text-5xl">
            Tirando as dúvidas antes do WhatsApp.
          </h2>
          <p className="mt-4 text-zinc-400 md:text-lg">
            Se faltar alguma, é só chamar — respondemos direto.
          </p>
        </div>

        <div className="mt-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-zinc-800 data-[state=open]:border-amber-500/40"
              >
                <AccordionTrigger className="text-left text-base text-zinc-100 hover:text-amber-500 hover:no-underline md:text-lg">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-zinc-400 md:text-base">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Schema.org FAQPage — gera rich result no Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
      </div>
    </section>
  );
}
