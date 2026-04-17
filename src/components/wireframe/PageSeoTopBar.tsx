interface PageSeoTopBarProps {
  page: string;
  url: string;
  h1: string;
  primaryKeyword: string;
}

/**
 * Barra superior visible en cada página del wireframe.
 * Muestra el nombre de la página, su H1 propuesto y la keyword principal a optimizar.
 * Pensada como referencia rápida para diseño y SEO.
 */
export const PageSeoTopBar = ({ page, url, h1, primaryKeyword }: PageSeoTopBarProps) => (
  <div className="border-b border-accent/40 bg-accent/10">
    <div className="container py-3">
      <div className="grid gap-2 text-[11px] md:grid-cols-3 md:items-center md:gap-4">
        <div className="flex items-center gap-2">
          <span className="rounded bg-accent px-2 py-0.5 font-mono uppercase tracking-widest text-accent-foreground">
            Página
          </span>
          <span className="font-semibold text-foreground">{page}</span>
          <span className="hidden font-mono text-muted-foreground md:inline">{url}</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="rounded border border-border bg-background px-2 py-0.5 font-mono uppercase tracking-widest text-muted-foreground">
            H1
          </span>
          <span className="text-foreground">{h1}</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="rounded border border-border bg-background px-2 py-0.5 font-mono uppercase tracking-widest text-muted-foreground">
            Keyword
          </span>
          <span className="font-mono text-foreground">{primaryKeyword}</span>
        </div>
      </div>
    </div>
  </div>
);
