import { WireSection, PageBanner } from "@/components/wireframe/WireSection";
import { SeoTechBlock } from "@/components/wireframe/SeoTechBlock";
import { PageSeoTopBar } from "@/components/wireframe/PageSeoTopBar";

const stack = [
  {
    layer: "CMS / E-commerce",
    tool: "WordPress + WooCommerce",
    why: "Control total del contenido editorial (blog, guías, casos), catálogo robusto con variantes, atributos personalizados (material, capacidad, certificación) y URLs limpias.",
    cost: "Hosting administrado $25-80 USD/mes",
  },
  {
    layer: "SEO técnico",
    tool: "Rank Math PRO (o Yoast SEO Premium)",
    why: "Schema.org Product/Offer/FAQ/HowTo automático, sitemap XML dinámico, breadcrumbs, redirects 301, análisis de contenido por keyword, integración Search Console.",
    cost: "$59-99 USD/año",
  },
  {
    layer: "Performance / Core Web Vitals",
    tool: "WP Rocket + Imagify + Cloudflare",
    why: "Cache de página, lazy-load, conversión a WebP/AVIF, CDN global. Crítico para LCP <2.5s y ranking en Google.",
    cost: "$60-100 USD/año",
  },
  {
    layer: "Variantes B2B / Mayoreo",
    tool: "WooCommerce B2B + Wholesale Suite",
    why: "Precios por volumen, listas de precio por cliente, catálogo solo visible tras login, mínimos de pedido, cotizaciones (RFQ) en lugar de checkout directo.",
    cost: "$149-249 USD/año",
  },
  {
    layer: "Productos avanzados",
    tool: "Advanced Custom Fields PRO",
    why: "Campos personalizados ricos por producto: ficha técnica PDF, certificaciones, dimensiones exactas, tiempo de compostaje, equivalencia CO₂. Indexable por Google.",
    cost: "$49 USD/año",
  },
  {
    layer: "Multilingüe (futuro)",
    tool: "WPML o Polylang Pro",
    why: "URLs hreflang correctas (/es-mx/, /en/), traducción de productos y categorías, indexación multi-país sin contenido duplicado.",
    cost: "$99 USD/año",
  },
  {
    layer: "Analytics & tracking",
    tool: "GA4 + GTM + Search Console + Microsoft Clarity",
    why: "Embudos de cotización, eventos personalizados (descarga catálogo, click WhatsApp), heatmaps gratis con Clarity, monitoreo de keywords y CTR orgánico.",
    cost: "Gratis",
  },
  {
    layer: "Reseñas / Trust",
    tool: "Reviews.io o Trustpilot",
    why: "Schema Review/AggregateRating con estrellas en SERP, prueba social que aumenta CTR orgánico hasta 35%.",
    cost: "$45-99 USD/mes",
  },
];

const seoCapabilities = [
  {
    feature: "URLs amigables y profundas",
    detail: "/categoria/vasos-compostables/, /producto/vaso-bagazo-12oz/, /material/pla/. Configurables sin tocar código.",
  },
  {
    feature: "Schema.org automático",
    detail: "Rank Math inyecta Product, Offer, BreadcrumbList, Organization, FAQPage, HowTo, Review sin programar.",
  },
  {
    feature: "Imágenes optimizadas",
    detail: "Imagify convierte a WebP, lazy-load nativo, alt-text masivo, srcset responsive automático.",
  },
  {
    feature: "Velocidad / Core Web Vitals",
    detail: "WP Rocket + Cloudflare → LCP <2s, CLS <0.1. Ranking factor confirmado por Google.",
  },
  {
    feature: "Contenido editorial ilimitado",
    detail: "Blog nativo de WordPress: guías, casos de uso, comparativas. Es el activo SEO #1 para outranking.",
  },
  {
    feature: "Filtros indexables selectivos",
    detail: "Categorías y materiales como URLs reales (no solo query params). Filtros largos quedan noindex.",
  },
  {
    feature: "Internal linking masivo",
    detail: "Plugins como Link Whisper sugieren enlaces internos contextuales — distribuyen autoridad a fichas de producto.",
  },
  {
    feature: "Migración y portabilidad",
    detail: "Exportable a CSV/XML. No vendor lock-in. Stack open-source.",
  },
];

const competidoresAnalisis = [
  {
    competidor: "Distribuidora típica MX",
    debilidad: "Catálogo PDF descargable, sin fichas individuales indexables",
    oportunidad: "Nosotros: ficha individual por SKU = miles de URLs rankeables",
  },
  {
    competidor: "Marketplaces (Mercado Libre, Amazon)",
    debilidad: "Compiten por precio, no por contenido educativo B2B",
    oportunidad: "Contenido editorial profundo posiciona long-tail B2B",
  },
  {
    competidor: "Marcas internacionales (Vegware, Ecoware)",
    debilidad: "Sitios en inglés, poco contenido local (normativa MX, sectores locales)",
    oportunidad: "SEO local: 'desechables compostables México', 'NOM-161-SEMARNAT', casos por ciudad",
  },
];

const RecomendacionesTecnicas = () => {
  return (
    <>
      <PageBanner
        breadcrumb="Inicio / Recomendaciones técnicas"
        h1="Stack técnico recomendado: WooCommerce + SEO"
        intro="Documentación interna del stack tecnológico elegido para construir el catálogo, maximizar ranking orgánico y superar a la competencia en buscadores."
      />

      {/* DECISIÓN */}
      <WireSection tag="01 · Decisión" title="¿Por qué WooCommerce y no Shopify?">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded border border-border bg-card p-5 space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-foreground">
              ✓ Ventaja WooCommerce para este proyecto
            </div>
            <ul className="space-y-2 text-xs text-muted-foreground list-disc pl-4">
              <li><strong>SEO profundo:</strong> control total sobre estructura HTML, schema, sitemap y URLs. Plugins como Rank Math superan a Shopify nativo.</li>
              <li><strong>Contenido editorial nativo:</strong> WordPress es la mejor plataforma del mundo para blog + guías técnicas, motor #1 de SEO B2B.</li>
              <li><strong>Flexibilidad B2B:</strong> precios por volumen, cotizaciones (RFQ), catálogo privado por cliente, mínimos de pedido.</li>
              <li><strong>Costo de propiedad bajo:</strong> sin comisión por transacción. Solo hosting + plugins (~$500-1,000 USD/año).</li>
              <li><strong>Sin vendor lock-in:</strong> open-source, portable, exportable.</li>
            </ul>
          </div>
          <div className="rounded border border-border bg-card p-5 space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-foreground">
              ⚠ Trade-offs a considerar
            </div>
            <ul className="space-y-2 text-xs text-muted-foreground list-disc pl-4">
              <li><strong>Mantenimiento técnico:</strong> requiere actualizaciones de WP, PHP, plugins. Mitigar con hosting administrado (Kinsta, WP Engine).</li>
              <li><strong>Seguridad:</strong> obligatorio Wordfence + backups diarios + 2FA admin.</li>
              <li><strong>Performance:</strong> requiere setup correcto (cache + CDN). Sin esto puede ser lento.</li>
              <li><strong>Curva inicial:</strong> equipo necesita capacitación o agencia WordPress.</li>
            </ul>
          </div>
        </div>
        <p className="wire-note mt-4">
          Conclusión: WooCommerce gana cuando el SEO orgánico y el contenido editorial son la principal estrategia de adquisición B2B. Shopify gana cuando se prioriza velocidad de lanzamiento y simplicidad operativa.
        </p>
      </WireSection>

      {/* STACK */}
      <WireSection tag="02 · Stack" title="Componentes del stack tecnológico">
        <div className="overflow-x-auto rounded border border-border bg-card">
          <table className="w-full text-xs">
            <thead className="border-b border-border bg-muted/40">
              <tr className="text-left">
                <th className="p-3 font-semibold">Capa</th>
                <th className="p-3 font-semibold">Herramienta recomendada</th>
                <th className="p-3 font-semibold">Por qué</th>
                <th className="p-3 font-semibold">Costo aprox.</th>
              </tr>
            </thead>
            <tbody>
              {stack.map((s) => (
                <tr key={s.layer} className="border-b border-border last:border-0 align-top">
                  <td className="p-3 font-semibold">{s.layer}</td>
                  <td className="p-3 font-mono">{s.tool}</td>
                  <td className="p-3 text-muted-foreground">{s.why}</td>
                  <td className="p-3 font-mono text-muted-foreground whitespace-nowrap">{s.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="wire-alt mt-4">
          Costo total año 1 estimado: $1,200-2,500 USD en licencias + hosting. Excluye desarrollo, contenido y diseño.
        </p>
      </WireSection>

      {/* CAPACIDADES SEO */}
      <WireSection tag="03 · Capacidades SEO" title="Cómo este stack supera a la competencia">
        <div className="grid gap-3 md:grid-cols-2">
          {seoCapabilities.map((c) => (
            <div key={c.feature} className="rounded border border-border bg-card p-4">
              <div className="text-sm font-semibold">✓ {c.feature}</div>
              <div className="mt-1 text-xs text-muted-foreground">{c.detail}</div>
            </div>
          ))}
        </div>
      </WireSection>

      {/* COMPETENCIA */}
      <WireSection tag="04 · Análisis competitivo" title="Brechas que vamos a explotar">
        <div className="overflow-x-auto rounded border border-border bg-card">
          <table className="w-full text-xs">
            <thead className="border-b border-border bg-muted/40">
              <tr className="text-left">
                <th className="p-3 font-semibold">Competidor</th>
                <th className="p-3 font-semibold">Debilidad SEO</th>
                <th className="p-3 font-semibold">Nuestra oportunidad</th>
              </tr>
            </thead>
            <tbody>
              {competidoresAnalisis.map((c) => (
                <tr key={c.competidor} className="border-b border-border last:border-0 align-top">
                  <td className="p-3 font-semibold">{c.competidor}</td>
                  <td className="p-3 text-muted-foreground">{c.debilidad}</td>
                  <td className="p-3 text-muted-foreground">{c.oportunidad}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </WireSection>

      {/* ROADMAP */}
      <WireSection tag="05 · Roadmap" title="Plan de implementación sugerido (12 semanas)">
        <ol className="space-y-3 text-sm">
          {[
            { fase: "Semanas 1-2", titulo: "Setup base", detalle: "Hosting (Kinsta/WP Engine), WordPress, WooCommerce, tema base (Astra/Kadence), Cloudflare, SSL, backups." },
            { fase: "Semanas 3-4", titulo: "Diseño + estructura", detalle: "Implementación del wireframe en tema custom o Elementor PRO, taxonomías (categoría, material, sector), atributos de producto." },
            { fase: "Semanas 5-7", titulo: "Carga de catálogo", detalle: "Importación masiva de productos vía CSV, fichas técnicas, imágenes optimizadas, schema.org Product, fichas individuales con 600-1000 palabras." },
            { fase: "Semanas 8-9", titulo: "SEO técnico", detalle: "Rank Math, sitemap XML, robots.txt, schema validation, redirects 301 desde sitio anterior, Search Console + GA4." },
            { fase: "Semanas 10-11", titulo: "Contenido editorial", detalle: "10 artículos pilares de blog (guías, comparativas, normativa), páginas de aterrizaje por sector, casos de éxito." },
            { fase: "Semana 12", titulo: "Lanzamiento + monitoreo", detalle: "QA cross-browser, test Core Web Vitals, lanzamiento, indexación, monitoreo de rankings y conversión." },
          ].map((f) => (
            <li key={f.fase} className="rounded border border-border bg-card p-4">
              <div className="text-[11px] font-mono uppercase text-muted-foreground">{f.fase}</div>
              <div className="font-semibold">{f.titulo}</div>
              <div className="mt-1 text-xs text-muted-foreground">{f.detalle}</div>
            </li>
          ))}
        </ol>
      </WireSection>

      <SeoTechBlock
        page="Recomendaciones técnicas (/recomendaciones-tecnicas)"
        title="Stack WooCommerce + SEO para catálogo B2B | Renovapack"
        description="Documentación técnica del stack WordPress + WooCommerce + Rank Math elegido para construir el catálogo B2B y maximizar ranking orgánico."
        h1="Stack técnico recomendado: WooCommerce + SEO"
        schemas={[
          "BreadcrumbList",
          "TechArticle (tipo principal)",
          "ItemList con cada herramienta del stack",
        ]}
        notes={[
          "Página interna / documentación — considerar noindex si es solo para cliente",
          "Si se publica: orientada a tomadores de decisión técnica (CTO, agencia)",
          "Enlaces salientes a documentación oficial de cada herramienta con rel=nofollow",
        ]}
      />
    </>
  );
};

export default RecomendacionesTecnicas;
