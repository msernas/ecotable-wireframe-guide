import { Link } from "react-router-dom";
import { WireSection, Lines } from "@/components/wireframe/WireSection";
import { SeoTechBlock } from "@/components/wireframe/SeoTechBlock";

const Index = () => {
  const sectores = [
    { name: "Hoteles", kw: "vajilla compostable hoteles" },
    { name: "Cafeterías", kw: "vasos biodegradables cafeterías" },
    { name: "Empaque", kw: "empaque sustentable mayoreo" },
    { name: "Hospitales", kw: "desechables compostables hospitales" },
    { name: "Comedores", kw: "platos biodegradables comedor industrial" },
  ];

  const stories = [
    {
      tag: "Caso de éxito",
      h: "Cadena hotelera reduce 40% de plástico de un solo uso",
      m: "5 min lectura",
    },
    {
      tag: "Insight",
      h: "Normativa 2026 de plásticos: lo que tu negocio debe saber",
      m: "8 min lectura",
    },
    {
      tag: "Producto",
      h: "Nuevos vasos de bagazo con tapa 100% compostable",
      m: "Anuncio",
    },
  ];

  return (
    <>
      {/* HERO editorial — estilo Siemens / ABB */}
      <section className="border-b border-border">
        <div className="container grid gap-8 py-16 md:grid-cols-[1.1fr_1fr] md:items-center">
          <div className="space-y-6">
            <div className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
              Soluciones B2B · Empaque sustentable
            </div>
            <div className="space-y-3">
              <Lines count={1} widths={["35%"]} />
              <div className="space-y-2">
                <div className="wire-line h-8" />
                <div className="wire-line h-8" style={{ width: "85%" }} />
                <div className="wire-line h-8" style={{ width: "60%" }} />
              </div>
            </div>
            <Lines count={3} />
            <div className="flex flex-wrap gap-3 pt-2">
              <Link to="/catalogo" className="wire-box h-12 w-48 !border-solid">
                Explorar catálogo →
              </Link>
              <Link to="/contacto" className="wire-box h-12 w-48">
                Solicitar cotización
              </Link>
            </div>
            <p className="wire-note">
              SEO · &lt;h1&gt; único: "Desechables biodegradables y compostables para tu negocio".
              CTA primario lleva a /catalogo (página comercial), CTA secundario a /contacto (conversión).
            </p>
          </div>
          <div className="space-y-3">
            <div className="wire-box aspect-[4/3]">IMAGEN HERO EDITORIAL</div>
            <p className="wire-alt">
              IMAGEN: foto editorial cenital — mesa con vasos de bagazo, plato compostable con comida fresca,
              cubiertos de PLA sobre madera clara. Estilo cálido, alta resolución (≥1920px), formato AVIF/WebP.
            </p>
            <p className="wire-alt">
              alt="Mesa servida con desechables biodegradables: vasos de bagazo, platos compostables y cubiertos de PLA"
            </p>
            <p className="wire-note">
              Performance · Esta imagen es el LCP. NO usar loading="lazy". Definir width/height + srcset
              para servir tamaño correcto por viewport. Preload con &lt;link rel="preload" as="image"&gt;.
            </p>
          </div>
        </div>
      </section>

      {/* BANDA DE CIFRAS — estilo GE / ABB */}
      <section className="border-b border-border bg-foreground py-12 text-background">
        <div className="container grid gap-8 md:grid-cols-4">
          {[
            { v: "2.5M+", l: "Productos entregados al año" },
            { v: "−85t", l: "CO₂ evitado vs plástico tradicional" },
            { v: "200+", l: "Clientes B2B activos" },
            { v: "100%", l: "Materiales certificados compostables" },
          ].map((m) => (
            <div key={m.l} className="space-y-1">
              <div className="text-3xl font-bold md:text-4xl">{m.v}</div>
              <div className="text-xs uppercase tracking-wider opacity-70">{m.l}</div>
            </div>
          ))}
        </div>
        <p className="container mt-6 text-[11px] font-mono uppercase tracking-widest opacity-60">
          SEO · Cifras verificables refuerzan E-E-A-T (Experiencia, Expertise, Autoridad, Confianza)
        </p>
      </section>

      {/* SECTORES — estilo ABB "Industries we serve" */}
      <WireSection tag="01 · Sectores" title="Soluciones por industria">
        <div className="grid gap-3 md:grid-cols-5">
          {sectores.map((s) => (
            <Link
              key={s.name}
              to="/sectores"
              className="group space-y-2 rounded border border-border bg-card p-3 transition-colors hover:bg-muted/40"
            >
              <div className="wire-box aspect-[4/3]">FOTO SECTOR</div>
              <div className="text-sm font-semibold">{s.name}</div>
              <div className="text-[10px] text-muted-foreground">→ {s.kw}</div>
            </Link>
          ))}
        </div>
        <p className="wire-note mt-4">
          SEO · Cada tarjeta enlaza a /sectores/[slug] con keyword long-tail. Anchor text descriptivo
          (no "ver más"). Schema.org Service por sector.
        </p>
      </WireSection>

      {/* PRODUCTOS DESTACADOS — estilo P&G / Unilever brands */}
      <WireSection tag="02 · Catálogo" title="Productos por categoría y material">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded border border-border bg-card p-5">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-base font-semibold">Por categoría</h3>
              <Link to="/catalogo" className="text-xs underline">Ver todo →</Link>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {["Contenedores", "Vasos", "Cubiertos", "Platos", "Bolsas", "Complementos"].map((c) => (
                <Link key={c} to="/catalogo" className="space-y-1 text-center">
                  <div className="wire-box aspect-square">FOTO</div>
                  <div className="text-[11px] font-medium">{c}</div>
                </Link>
              ))}
            </div>
          </div>
          <div className="rounded border border-border bg-card p-5">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-base font-semibold">Por material</h3>
              <Link to="/catalogo" className="text-xs underline">Ver todo →</Link>
            </div>
            <ul className="space-y-2">
              {[
                "Bagazo de trigo",
                "PLA (ácido poliláctico)",
                "Fécula de maíz",
                "Bolsas compostables",
                "Papel laminado con PLA",
              ].map((m) => (
                <li key={m}>
                  <Link to="/catalogo" className="flex items-center justify-between rounded border border-border p-3 hover:bg-muted/40">
                    <div className="flex items-center gap-3">
                      <div className="wire-box h-10 w-10 text-[9px]">M</div>
                      <span className="text-sm font-medium">{m}</span>
                    </div>
                    <span className="text-muted-foreground">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="wire-note mt-4">
          SEO · Doble entrada (categoría/material) genera dos taxonomías indexables. URLs limpias:
          /catalogo/contenedores y /materiales/bagazo-de-trigo. rel="canonical" en intersecciones.
        </p>
      </WireSection>

      {/* SUSTENTABILIDAD HUB — estilo Unilever / Coca-Cola */}
      <section className="border-y border-border bg-muted/40 py-14">
        <div className="container grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-center">
          <div className="wire-box aspect-[4/3]">FOTO IMPACTO AMBIENTAL</div>
          <div className="space-y-4">
            <div className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
              Sustentabilidad
            </div>
            <h2 className="text-2xl font-bold md:text-3xl">
              Cero plástico de un solo uso, 100% compostable
            </h2>
            <Lines count={3} />
            <div className="grid grid-cols-3 gap-3 pt-2">
              {[
                { v: "100%", l: "Materiales compostables" },
                { v: "TÜV", l: "OK Compost certificado" },
                { v: "180d", l: "Compostaje industrial" },
              ].map((m) => (
                <div key={m.l} className="rounded border border-border bg-card p-3 text-center">
                  <div className="text-lg font-bold">{m.v}</div>
                  <div className="text-[10px] uppercase text-muted-foreground">{m.l}</div>
                </div>
              ))}
            </div>
            <Link to="/sustentabilidad" className="wire-box mt-2 inline-flex h-11 w-56 !border-solid text-xs">
              Conoce nuestro impacto →
            </Link>
            <p className="wire-alt">
              IMAGEN: foto natural de campo de cultivo o composta, evitar stock genérico.
              alt="Productos compostables degradándose en composta industrial".
            </p>
          </div>
        </div>
      </section>

      {/* PROCESO B2B — estilo Siemens / ABB */}
      <WireSection tag="03 · Proceso" title="Cómo trabajamos contigo">
        <div className="grid gap-4 md:grid-cols-4">
          {[
            { n: "01", t: "Diagnóstico", d: "Analizamos tu operación y volúmenes" },
            { n: "02", t: "Propuesta", d: "Mix de productos + cotización" },
            { n: "03", t: "Muestras", d: "Validas calidad antes de comprar" },
            { n: "04", t: "Suministro", d: "Entrega recurrente nacional" },
          ].map((p) => (
            <div key={p.n} className="space-y-3 rounded border border-border bg-card p-5">
              <div className="text-3xl font-bold text-muted-foreground">{p.n}</div>
              <h3 className="text-base font-semibold">{p.t}</h3>
              <p className="text-xs text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </WireSection>

      {/* STORY CARDS — estilo P&G "Latest stories" / Coca-Cola */}
      <WireSection tag="04 · Insights & Casos" title="Lo último de [Marca]">
        <div className="grid gap-5 md:grid-cols-3">
          {stories.map((s) => (
            <article key={s.h} className="group space-y-3 rounded border border-border bg-card overflow-hidden">
              <div className="wire-box aspect-[16/10] !rounded-none">IMAGEN HISTORIA</div>
              <div className="space-y-2 p-4">
                <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                  {s.tag} · {s.m}
                </div>
                <h3 className="text-base font-semibold leading-snug">{s.h}</h3>
                <Lines count={2} widths={["100%", "70%"]} />
                <Link to="/blog" className="text-xs font-medium underline">Leer más →</Link>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-4 grid gap-2 md:grid-cols-2">
          <p className="wire-alt">
            IMÁGENES: estilo editorial, diferente cada una (caso → foto cliente, insight → infografía,
            producto → packshot). 16:10, AVIF/WebP, srcset responsivo.
          </p>
          <p className="wire-note">
            SEO · Schema.org Article por publicación. Internal linking a categorías/materiales relacionados
            al final de cada artículo. Author + datePublished + dateModified obligatorios.
          </p>
        </div>
      </WireSection>

      {/* CONFIANZA — logos clientes y certificaciones */}
      <WireSection tag="05 · Confianza" title="Marcas que confían en nosotros">
        <div className="grid grid-cols-3 gap-3 md:grid-cols-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="wire-box h-16 text-[10px]">LOGO {i + 1}</div>
          ))}
        </div>
        <p className="wire-alt mt-4">
          IMÁGENES: logos clientes en escala de grises (consistencia visual). SVG. Con consentimiento.
          alt="Cliente: [Nombre de empresa]".
        </p>
      </WireSection>

      {/* CTA FINAL */}
      <section className="border-t border-border bg-foreground py-16 text-background">
        <div className="container grid gap-6 md:grid-cols-[1.5fr_1fr] md:items-center">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold md:text-3xl">
              ¿Listo para cambiar a desechables compostables?
            </h2>
            <p className="text-sm opacity-80">
              Diagnóstico gratuito y muestras sin costo para tu primera cotización.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link to="/contacto" className="wire-box h-12 flex-1 !border-solid !bg-background !text-foreground">
              Solicitar cotización
            </Link>
            <Link to="/catalogo" className="wire-box h-12 flex-1 text-background" style={{ borderColor: "currentColor" }}>
              Ver catálogo
            </Link>
          </div>
        </div>
      </section>

      {/* SEO técnico */}
      <SeoTechBlock
        page="Inicio (/)"
        title="Desechables biodegradables y vajilla compostable B2B | [Marca]"
        description="Comercializadora B2B de desechables compostables: vasos, platos, cubiertos y bolsas de bagazo, PLA y fécula de maíz. Cotización para hoteles, hospitales y comedores."
        h1="Desechables biodegradables y compostables para tu negocio"
        schemas={[
          "Organization (logo, address, sameAs, contactPoint)",
          "WebSite (potentialAction SearchAction para sitelinks searchbox)",
          "BreadcrumbList",
          "ItemList (sectores y categorías destacadas)",
        ]}
        notes={[
          "Hreflang: es-MX (default), es, en con x-default a es-MX",
          "Canonical absoluta: https://[dominio]/",
          "Imagen LCP preload + width/height explícitos",
          "Core Web Vitals objetivo: LCP <2.5s, INP <200ms, CLS <0.1",
          "Sitemap segmentado: sitemap-products.xml, sitemap-blog.xml, sitemap-pages.xml",
          "robots.txt permitiendo crawl + apuntando al sitemap index",
        ]}
      />
    </>
  );
};

export default Index;
