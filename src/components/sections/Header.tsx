import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { WA_MESSAGES, whatsappWithText } from "@/lib/site";
import { MessageCircle } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-900/80 bg-zinc-950/80 backdrop-blur">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="/" className="flex items-center gap-3">
          <Logo width={40} className="h-10 w-10 object-cover" />
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="text-sm font-extrabold tracking-tight text-zinc-50">
              Serralheria Lukann
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
              Porto Alegre · RS
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-400 md:flex">
          <a href="#servicos" className="transition-colors hover:text-amber-500">Serviços</a>
          <a href="#portfolio" className="transition-colors hover:text-amber-500">Obras</a>
          <a href="#faq" className="transition-colors hover:text-amber-500">FAQ</a>
          <a href="#contato" className="transition-colors hover:text-amber-500">Contato</a>
        </nav>

        <Button
          asChild
          size="sm"
          className="bg-amber-500 text-zinc-950 hover:bg-amber-400"
        >
          <a href={whatsappWithText(WA_MESSAGES.header)} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-1.5 h-4 w-4" />
            <span className="hidden sm:inline">Orçamento</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </Button>
      </div>
    </header>
  );
}
