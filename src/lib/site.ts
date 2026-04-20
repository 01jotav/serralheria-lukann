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
      "https://www.google.com/maps?q=Rua+Oscar+Ferreira+280+Parque+dos+Maias+Porto+Alegre+RS&output=embed&z=16",
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
 * Ex: whatsappWithText("Olá, quero um orçamento")
 */
export function whatsappWithText(text: string) {
  return `https://wa.me/${SITE.whatsapp.number}?text=${encodeURIComponent(text)}`;
}
