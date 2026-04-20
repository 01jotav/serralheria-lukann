import { cn } from "@/lib/utils";

/**
 * Logo oficial da Serralheria Lukann.
 * A logo tem fundo azul-marinho (cor da marca) — aparece como "chapa" sobre o preto.
 */
export function Logo({
  className,
  width = 56,
}: {
  className?: string;
  width?: number;
}) {
  return (
    <img
      src="/logo.jpg"
      alt="Serralheria Lukann"
      width={width}
      height={width}
      className={cn("rounded-md shadow-lg", className)}
    />
  );
}
