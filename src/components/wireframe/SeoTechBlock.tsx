export const SeoTechBlock = ({
  page,
  title,
  description,
  h1,
  schemas,
  notes,
}: {
  page: string;
  title: string;
  description: string;
  h1: string;
  schemas: string[];
  notes?: string[];
}) => (
  <section className="border-t border-border bg-muted/30 py-8">
    <div className="container">
      <div className="mb-4 flex items-center gap-3">
        <span className="wire-section-tag">SEO técnico</span>
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Especificación para {page}
        </h2>
      </div>
      <div className="grid gap-4 rounded border border-border bg-card p-5 md:grid-cols-2">
        <div className="space-y-2 text-xs">
          <div>
            <div className="font-semibold text-foreground">Title (≤60)</div>
            <div className="font-mono text-muted-foreground">{title}</div>
          </div>
          <div>
            <div className="font-semibold text-foreground">Meta description (≤160)</div>
            <div className="font-mono text-muted-foreground">{description}</div>
          </div>
          <div>
            <div className="font-semibold text-foreground">H1 único</div>
            <div className="font-mono text-muted-foreground">{h1}</div>
          </div>
          <div>
            <div className="font-semibold text-foreground">Canonical / hreflang</div>
            <div className="font-mono text-muted-foreground">
              link rel="canonical" + hreflang es-MX, es, en
            </div>
          </div>
          <div>
            <div className="font-semibold text-foreground">Open Graph + Twitter</div>
            <div className="font-mono text-muted-foreground">
              og:title · og:description · og:image (1200×630) · og:type · twitter:card="summary_large_image"
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="text-xs font-semibold text-foreground">JSON-LD requeridos</div>
          <ul className="space-y-1 text-xs">
            {schemas.map((s) => (
              <li key={s} className="font-mono text-muted-foreground">• {s}</li>
            ))}
          </ul>
          {notes && notes.length > 0 && (
            <>
              <div className="pt-2 text-xs font-semibold text-foreground">Notas adicionales</div>
              <ul className="space-y-1 text-xs">
                {notes.map((n, i) => (
                  <li key={i} className="text-muted-foreground">• {n}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  </section>
);
