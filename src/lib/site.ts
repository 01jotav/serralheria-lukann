/**
 * Configuração central da Serralheria Lukann.
 * Alterar aqui propaga para toda a landing (Header, Hero, Authority, Footer, etc).
 */

export const SITE = {
  name: "Serralheria Lukann",
  tagline: "Estruturas metálicas e portões sob medida",

  // Contato
  whatsapp: {
    display: "(51) 99828-2939",
    // formato wa.me: +55 + DDD + 9 + número (total 13 dígitos)
    url: "https://wa.me/5551998282939",
    number: "5551998282939",
  },
  instagram: {
    handle: "@serralherialukann",
    url: "https://www.instagram.com/serralherialukann/",
  },

  // Endereço
  address: {
    street: "Rua Oscar Ferreira, 280",
    neighborhood: "Parque dos Maias",
    city: "Porto Alegre",
    state: "RS",
    country: "BR",
    full: "Rua Oscar Ferreira, 280 — Parque dos Maias — Porto Alegre / RS",
    // URL usada no iframe de mapa embedado
    mapsEmbed:
      "https://www.google.com/maps?q=Rua+Oscar+Ferreira,+280+-+Parque+dos+Maias,+Porto+Alegre+-+RS&output=embed&z=17&t=m",
    mapsLink:
      "https://www.google.com/maps/search/?api=1&query=Rua+Oscar+Ferreira+280+Parque+dos+Maias+Porto+Alegre+RS",
  },

  // Cidades atendidas
  areaServed: ["Porto Alegre", "Alvorada", "Cachoeirinha", "Viamão", "Gravataí", "Canoas"],

  // Horário
  hours: {
    weekdays: "Seg a Sex · 08h às 18h",
    saturday: "Sáb · 08h às 12h",
  },
} as const;

/**
 * Gera URL do WhatsApp com mensagem pré-preenchida.
 */
export function whatsappWithText(text: string) {
  return `https://wa.me/${SITE.whatsapp.number}?text=${encodeURIComponent(text)}`;
}

/**
 * Mensagens pré-preenchidas para cada CTA do site.
 * Cada seção envia uma mensagem diferente — assim, quando o lead chega no
 * WhatsApp, conseguimos identificar qual parte do site converteu.
 */
export const WA_MESSAGES = {
  header:
    "Olá! Vim pelo site da Serralheria Lukann e gostaria de fazer um orçamento.",

  heroPrimary:
    "Olá! Vim pelo site da Serralheria Lukann e quero conversar sobre um projeto.",

  quickQuote:
    "Olá! Vim pelo site da Serralheria Lukann e quero um orçamento.\n\n" +
    "📸 Foto do local: (anexo)\n" +
    "📍 Cidade/bairro: \n" +
    "🔧 O que preciso: ",

  authority:
    "Olá! Vim pelo site da Serralheria Lukann e quero conversar sobre a execução técnica de um projeto.",

  portfolioItem: (title: string, location: string) =>
    `Olá! Vi a obra "${title}" (${location}) no site da Serralheria Lukann e quero um orçamento para algo similar.`,

  faq: "Olá! Vim pelo site da Serralheria Lukann e tenho uma dúvida que não encontrei no FAQ.",

  footerFinal:
    "Olá! Vim pelo site da Serralheria Lukann e quero pedir um orçamento.",
} as const;
