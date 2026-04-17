import { WireSection, Lines, PageBanner } from "@/components/wireframe/WireSection";

const categorias = [
  { name: "Contenedores", note: "envases, bowls, cajas para llevar", count: 24 },
  { name: "Vasos", note: "fríos, calientes, con tapa", count: 18 },
  { name: "Cubiertos", note: "tenedor, cuchara, cuchillo, palillos", count: 12 },
  { name: "Platos", note: "redondos, cuadrados, divididos", count: 16 },
  { name: "Bolsas", note: "compostables, asa camiseta, basura", count: 9 },
  { name: "Productos complementarios", note: "servilletas, popotes, removedores", count: 14 },
];

const materiales = [
  "Bagazo de trigo",
  "PLA",
  "Fécula de maíz",
  "Bolsas compostables",
  "Papel laminado con PLA",
];

const Catalogo = () => {
  return (
    <>
      <PageBanner
        breadcrumb="Inicio / Catálogo"
        h1="Catálogo de desechables biodegradables"
        intro="Explora todos nuestros productos compostables, organizados por categoría o por material."
      />

      {/* FILTROS */}
      <WireSection tag="01 · Filtros" title="Sidebar de filtros + buscador">
        <div className="grid gap-6 md:grid-cols-[260px_1fr]">
          <aside className="space-y-5 rounded border border-border bg-card p-4">
            <div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-wider">Buscar</div>
              <div className="wire-box h-9 !border-solid !justify-start !pl-3 text-[11px] normal-case">
                Buscar producto…
              </div>
            </div>
            <div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-wider">Categoría</div>
              <div className="space-y-1">
                {categorias.map((c) => (
                  <div key={c.name} className="flex items-center justify-between text-xs">
                    <span>☐ {c.name}</span>
                    <span className="text-muted-foreground">{c.count}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-wider">Material</div>
              <div className="space-y-1 text-xs">
                {materiales.map((m) => (
                  <div key={m}>☐ {m}</div>
                ))}
              </div>
            </div>
            <div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-wider">Sector</div>
              <div className="space-y-1 text-xs">
                {["Hoteles", "Cafeterías", "Hospitales", "Comedores"].map((s) => (
                  <div key={s}>☐ {s}</div>
                ))}
              </div>
            </div>
          </aside>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Lines count={1} widths={["180px"]} />
              <div className="flex gap-2">
                <div className="wire-box h-8 w-32 text-[11px]">Ordenar por ▾</div>
                <div className="wire-box h-8 w-20 text-[11px]">Vista ⊞</div>
              </div>
            </div>

            {/* GRID DE PRODUCTOS */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 9 }).map((_, i) => (
                <article key={i} className="space-y-2 rounded border border-border bg-card p-3">
                  <div className="wire-box h-36">FOTO PRODUCTO</div>
                  <div className="text-[10px] uppercase text-muted-foreground">Categoría · Material</div>
                  <h3 className="text-sm font-semibold">Nombre del producto</h3>
                  <Lines count={2} widths={["100%", "70%"]} />
                  <div className="flex items-center justify-between pt-1">
                    <div className="text-xs font-semibold">SKU / presentación</div>
                    <div className="wire-box h-7 w-20 !border-solid text-[11px]">Cotizar</div>
                  </div>
                </article>
              ))}
            </div>

            {/* PAGINACIÓN */}
            <div className="flex items-center justify-center gap-2 pt-2">
              {["‹", "1", "2", "3", "…", "8", "›"].map((p, i) => (
                <div key={i} className="wire-box h-8 w-8 text-[11px]">{p}</div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-2 md:grid-cols-2">
          <p className="wire-alt">
            IMÁGENES producto: foto sobre fondo blanco/neutro, sombra suave, ángulo 3/4.
            Una primaria + 2-3 alternas (escala, uso real, detalle de material).
            alt="Vaso compostable de 12 oz de bagazo de trigo con tapa de PLA".
          </p>
          <p className="wire-note">
            SEO · URL canónica /catalogo. Filtros como query params (?categoria=vasos&material=pla).
            rel="canonical" apuntando a la categoría base para evitar contenido duplicado.
            Cada producto: ficha individual con Schema.org Product + Offer.
          </p>
        </div>
      </WireSection>

      {/* CTA */}
      <WireSection tag="02 · CTA volumen" title="Llamado a cotización por volumen">
        <div className="rounded border border-border bg-card p-8 text-center">
          <div className="mx-auto max-w-xl space-y-3">
            <h2 className="text-lg font-semibold">¿Necesitas volumen mayoreo?</h2>
            <Lines count={2} widths={["80%", "60%"]} />
            <div className="wire-box mx-auto h-11 w-48 !border-solid">Solicitar cotización</div>
          </div>
        </div>
      </WireSection>
    </>
  );
};

export default Catalogo;
