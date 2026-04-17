import { Link } from "react-router-dom";
import { WireSection, Lines, PageBanner } from "@/components/wireframe/WireSection";
import { SeoTechBlock } from "@/components/wireframe/SeoTechBlock";
import { PageSeoTopBar } from "@/components/wireframe/PageSeoTopBar";

// Sectores priorizados según estrategia Cyan Media Lab: HORECA primero
const sectoresHoreca = [
  {
    name: "Hoteles",
    desc: "Coffee stations, room service, eventos, banquetes, áreas de huéspedes. Solución integral con tu marca opcional.",
    kw: "empaque biodegradable hoteles · vajilla compostable",
  },
  {
    name: "Restaurantes",
    desc: "To-go, delivery, comida en barra, cocinas dark. Empaque que mantiene temperatura sin comprometer compostabilidad.",
    kw: "contenedores compostables restaurantes · empaque to-go",
  },
  {
    name: "Cafeterías",
    desc: "Vasos para bebidas frías y calientes, tapas, removedores, mangas y servilletas. Línea bioeco con opción de impresión.",
    kw: "vasos compostables café · cafetería sustentable",
  },
];

const sectoresIndustriales = [
  {
    name: "Empresas de empaque",
    desc: "Insumos a granel para distribuidores, maquiladores y empacadoras de empaque sustentable.",
    kw: "insumos compostables mayoreo distribuidor",
  },
  {
    name: "Hospitales",
    desc: "Charolas, contenedores y cubiertos seguros, higiénicos y biodegradables para cafeterías de personal.",
    kw: "desechables compostables hospitales",
  },
  {
    name: "Comedores industriales",
    desc: "Servicio diario para personal con platos, bowls y cubiertos compostables. Logística recurrente garantizada.",
    kw: "desechables comedor industrial · empaque institucional",
  },
];

const Sectores = () => {
  return (
    <>
      <PageSeoTopBar
        page="Sectores"
        url="/sectores"
        h1="Soluciones por sector · Foco HORECA"
        primaryKeyword="empaques sustentables HORECA"
      />
      <PageBanner
        breadcrumb="Inicio / Sectores"
        h1="Soluciones por sector · Foco HORECA"
        intro="Renovapack se especializa en hoteles, restaurantes y cafeterías. Adaptamos el catálogo y la logística a tu operación, con experiencia comprobada en B2B industrial."
      />

      {/* HORECA — Foco principal */}
      <section className="border-b border-border bg-gradient-to-br from-primary/5 to-accent/5 py-12">
        <div className="container space-y-8">
          <div className="max-w-2xl space-y-2">
            <div className="text-[11px] font-mono uppercase tracking-widest text-accent">
              Sector prioritario · Estrategia 2026
            </div>
            <h2 className="text-2xl font-bold text-primary md:text-3xl">HORECA — Hoteles, Restaurantes, Cafeterías</h2>
            <p className="text-sm text-muted-foreground">
              El segmento donde Renovapack tiene mayor expertise y donde nuestra propuesta de "solución integral" entrega más valor: variedad, logística, branding y línea bioeco compostable.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {sectoresHoreca.map((s) => (
              <article key={s.name} className="space-y-3 rounded border-2 border-accent bg-card p-5">
                <div className="wire-box h-44">FOTO HORECA · {s.name}</div>
                <h3 className="text-lg font-semibold text-primary">{s.name}</h3>
                <p className="text-xs text-muted-foreground">{s.desc}</p>
                <div className="text-[10px] text-accent font-mono">→ {s.kw}</div>
                <Link to="/contacto" className="inline-flex h-9 items-center rounded bg-primary px-4 text-xs font-semibold uppercase tracking-wider text-primary-foreground hover:opacity-90">
                  Ver soluciones →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* B2B INDUSTRIAL */}
      <WireSection tag="02 · B2B industrial" title="Otros sectores que también atendemos">
        <div className="grid gap-6 md:grid-cols-3">
          {sectoresIndustriales.map((s) => (
            <article key={s.name} className="space-y-3 rounded border border-border bg-card p-4">
              <div className="wire-box h-40">FOTO SECTOR</div>
              <h3 className="text-base font-semibold text-primary">{s.name}</h3>
              <p className="text-xs text-muted-foreground">{s.desc}</p>
              <div className="text-[10px] text-muted-foreground font-mono">→ {s.kw}</div>
              <div className="wire-box h-9 !border-solid text-xs">Ver soluciones →</div>
            </article>
          ))}
        </div>
        <p className="wire-note mt-4">
          Estrategia · HORECA tiene tratamiento visual destacado (borde acento, sección dedicada). Sectores industriales mantienen presencia pero como secundarios — alineado a foco Cyan Media Lab.
        </p>
      </WireSection>

      {/* CASO DE ÉXITO HORECA */}
      <WireSection tag="03 · Caso de éxito" title="Cómo una cadena hotelera transformó su empaque con Renovapack">
        <div className="grid gap-6 rounded border-2 border-primary bg-card p-6 md:grid-cols-2">
          <div className="wire-box h-64">FOTO INSTALACIÓN HOTEL CLIENTE</div>
          <div className="space-y-3">
            <div className="text-[11px] font-mono uppercase tracking-widest text-accent">
              Caso de éxito HORECA · Hotelería
            </div>
            <h3 className="text-xl font-bold text-primary">Cadena hotelera nacional · 12 propiedades</h3>
            <p className="text-sm text-muted-foreground italic">
              "Probamos a 4 proveedores antes. Renovapack fue el único que nos resolvió la logística sin que tuviéramos que coordinar nada nosotros."
            </p>
            <div className="grid grid-cols-3 gap-3 pt-2">
              {[
                { v: "−40%", l: "Plástico de un solo uso" },
                { v: "+12k", l: "Piezas/mes bioeco" },
                { v: "100%", l: "Cobertura propiedades" },
              ].map((m, i) => (
                <div key={i} className="rounded border border-border bg-muted/40 p-3 text-center">
                  <div className="text-lg font-bold text-accent">{m.v}</div>
                  <div className="text-[10px] uppercase text-muted-foreground">{m.l}</div>
                </div>
              ))}
            </div>
            <Link to="/blog" className="inline-flex h-10 items-center rounded bg-primary px-4 text-xs font-semibold uppercase tracking-wider text-primary-foreground hover:opacity-90">
              Leer caso completo →
            </Link>
          </div>
        </div>
      </WireSection>

      {/* PROCESO */}
      <WireSection tag="04 · Proceso B2B" title="Cómo trabajamos con cada sector">
        <div className="grid gap-4 md:grid-cols-4">
          {[
            { n: "01", t: "Diagnóstico", d: "Visita o llamada. Mapeamos tu operación, volúmenes y normativa." },
            { n: "02", t: "Propuesta", d: "Mix Renovapack + bioeco con cotización por volumen." },
            { n: "03", t: "Muestras", d: "Te enviamos muestras gratis para validar antes de comprar." },
            { n: "04", t: "Suministro", d: "Asesor dedicado, entrega recurrente y planeación de inventario." },
          ].map((p) => (
            <div key={p.n} className="space-y-2 rounded border border-border bg-card p-4">
              <div className="text-3xl font-bold text-accent">{p.n}</div>
              <h3 className="text-sm font-semibold text-primary">{p.t}</h3>
              <p className="text-xs text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </WireSection>

      <SeoTechBlock
        page="Sectores (/sectores)"
        title="Empaque biodegradable HORECA y B2B · Sectores Renovapack"
        description="Soluciones de empaque compostable para hoteles, restaurantes, cafeterías y B2B industrial. Renovapack: aliado estratégico HORECA en México."
        h1="Soluciones por sector · Foco HORECA"
        schemas={[
          "BreadcrumbList",
          "ItemList con HORECA y B2B industrial",
          "Service por sector individual con areaServed = MX",
          "CaseStudy o Article para el caso de éxito hotelero",
        ]}
        notes={[
          "Una landing por sector HORECA: /sectores/hoteles, /sectores/restaurantes, /sectores/cafeterias",
          "Long-tail keywords HORECA priorizadas: 'empaque biodegradable hoteles México', 'vasos compostables cafeterías mayoreo'",
          "Caso de éxito como Article + ítem dentro del Service Hoteles",
          "Internal linking desde HORECA hacia línea bioeco específica para cada uso",
        ]}
      />
    </>
  );
};

export default Sectores;
