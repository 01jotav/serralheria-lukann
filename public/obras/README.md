# Pasta de fotos de obras reais

Aqui ficam as fotos dos projetos executados pela Serralheria Lukann, usadas na
galeria do site (`Portfolio.tsx`) e, eventualmente, nas páginas de bairro.

## Convenção de nomes (OBRIGATÓRIA)

```
{tipo-do-servico}-{bairro-ou-cidade}-{numero}.{jpg|webp}
```

- **Tudo em minúsculas, sem acento, hífen como separador.**
- `tipo-do-servico` deve ser o termo que o cliente digita no Google
  (ex: `portao-pivotante`, `portao-deslizante`, `grade-janela`,
  `mezanino-industrial`, `escada-caracol`, `corrimao-inox`,
  `cobertura-metalica`, `estrutura-metalica`).
- `bairro-ou-cidade` ajuda no SEO local
  (ex: `petropolis-poa`, `alvorada`, `cachoeirinha`, `menino-deus`).
- `numero` é sequencial, começa em `01`.

### Exemplos corretos

```
portao-pivotante-petropolis-poa-01.jpg
portao-deslizante-alvorada-02.jpg
mezanino-industrial-cachoeirinha-03.jpg
escada-caracol-menino-deus-04.jpg
cobertura-metalica-viamao-05.jpg
grade-janela-cavalhada-06.jpg
```

### O que EVITAR

- ❌ `IMG_4532.jpg` (não diz nada pro Google nem pra gente)
- ❌ `Portão Pivotante 01.jpg` (espaços e maiúsculas quebram URL)
- ❌ `portão.jpg` (caractere com acento em URL dá dor de cabeça)

## Dimensões recomendadas

- **Largura mínima:** 1400px (o carousel exibe em `aspect-[4/5]`).
- **Formato preferido:** `.webp` (70% mais leve que JPG). Se não der, JPG qualidade 80%.
- **Orientação:** retrato ou quadrado funciona melhor no grid.

## Como essas fotos viram galeria no site

O componente `src/components/sections/Portfolio.tsx` lê um array `items` com
`src`, `title` e `caption`. Para adicionar uma foto nova:

1. Largue o arquivo nesta pasta seguindo a convenção.
2. Abra `Portfolio.tsx`.
3. Adicione uma linha no array:
   ```ts
   {
     src: "/obras/portao-pivotante-petropolis-poa-01.jpg",
     title: "Portão pivotante em aço",
     caption: "Residência — Petrópolis / POA",
   },
   ```
4. Pronto. O Vite serve tudo em `public/` na raiz do site.
