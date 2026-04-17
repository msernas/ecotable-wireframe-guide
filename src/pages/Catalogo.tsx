import { Link } from "react-router-dom";
import { WireSection, Lines, PageBanner } from "@/components/wireframe/WireSection";
import { SeoTechBlock } from "@/components/wireframe/SeoTechBlock";

const materialesComparativa = [
  { material: "Bagazo de trigo", origen: "Residuo agrícola del trigo", uso: "Platos, contenedores, bowls calientes", temp: "Hasta 100 °C", compostaje: "60-90 días industrial", cert: "TÜV OK Compost, BPI" },
  { material: "PLA (ácido poliláctico)", origen: "Almidón de maíz fermentado", uso: "Vasos fríos, cubiertos, tapas", temp: "Hasta 40 °C", compostaje: "90-180 días industrial", cert: "TÜV OK Compost, ASTM D6400" },
  { material: "Fécula de maíz", origen: "Almidón de maíz", uso: "Cubiertos, platos pequeños", temp: "Hasta 80 °C", compostaje: "60-90 días", cert: "BPI, OK Compost HOME" },
  { material: "Bolsas compostables", origen: "PBAT + almidón vegetal", uso: "Bolsas T-shirt, basura, supermercado", temp: "Ambiente", compostaje: "180 días industrial", cert: "EN 13432, OK Compost" },
  { material: "Papel + PLA", origen: "Papel kraft con película PLA", uso: "Vasos calientes, contenedores líquidos", temp: "Hasta 95 °C", compostaje: "90-180 días industrial", cert: "FSC, BPI" },
];

const faqs = [
  { q: "¿Cuál es la diferencia entre biodegradable y compostable?", a: "Biodegradable significa que se descompone con microorganismos sin tiempo definido. Compostable cumple normas (EN 13432, ASTM D6400) que garantizan descomposición en 180 días en compostaje industrial, sin residuos tóxicos." },
  { q: "¿Cuál es el pedido mínimo para mayoreo B2B?", a: "Pedido mínimo de $5,000 MXN o 1 caja por SKU. Para volúmenes superiores a 50 cajas/mes ofrecemos lista de precios preferencial con descuentos por volumen." },
  { q: "¿Hacen entregas a toda la república mexicana?", a: "Sí, entregamos en las 32 entidades. CDMX y zona metropolitana en 24-48h. Resto del país 3-7 días hábiles vía paquetería especializada." },
  { q: "¿Qué certificaciones tienen sus productos?", a: "TÜV OK Compost INDUSTRIAL/HOME, BPI (USA), FSC para papel, FDA grado alimenticio y ASTM D6400. Todas verificables con número de certificado en cada ficha de producto." },
  { q: "¿Pueden personalizar productos con mi marca?", a: "Sí, ofrecemos impresión y branding (logo, colores) en vasos, contenedores y bolsas a partir de 5,000 unidades por SKU. Tiempo de producción 4-6 semanas." },
];

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
        h1="Catálogo de desechables biodegradables y compostables B2B"
        intro="Más de 90 productos compostables certificados para hoteles, cafeterías, hospitales, comedores industriales y empresas de empaque. Bagazo de trigo, PLA, fécula de maíz y papel laminado — con entrega nacional y precios mayoreo."
      />

      {/* INTRO EDITORIAL SEO */}
      <WireSection tag="00 · Intro editorial" title="Texto introductorio (SEO + contexto al usuario)">
        <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
          <div className="space-y-3 text-sm leading-relaxed">
            <p>
              Nuestro catálogo de <strong>desechables biodegradables y compostables</strong> está diseñado específicamente para operaciones B2B de alto volumen que necesitan reemplazar el plástico de un solo uso sin sacrificar funcionalidad ni elevar costos drásticamente. Cada producto cumple con las normativas <strong>EN 13432, ASTM D6400 y NOM-161-SEMARNAT</strong>, y cuenta con certificaciones internacionales TÜV OK Compost, BPI y FSC.
            </p>
            <p>
              Trabajamos con <strong>cinco materiales compostables</strong> diferentes — bagazo de trigo, PLA (ácido poliláctico), fécula de maíz, bolsas compostables (PBAT + almidón) y papel kraft laminado con PLA — porque cada aplicación requiere propiedades específicas: resistencia térmica, impermeabilidad, rigidez o flexibilidad. Más abajo encontrarás una <Link to="#comparativa" className="underline">tabla comparativa de materiales</Link> y una <Link to="#como-elegir" className="underline">guía rápida para elegir el adecuado</Link>.
            </p>
            <p>
              Si manejas un hotel, cafetería de especialidad, hospital, comedor industrial o empresa de empaque y necesitas <strong>cotización por volumen, fichas técnicas en PDF o muestras físicas antes de decidir</strong>, contáctanos y te asignamos un asesor B2B especializado en tu sector.
            </p>
          </div>
          <aside className="rounded border border-border bg-muted/40 p-5 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider">Acceso rápido</div>
            <ul className="space-y-2 text-xs">
              <li>→ <Link to="#categorias" className="underline">Filtrar por categoría</Link></li>
              <li>→ <Link to="#comparativa" className="underline">Comparar materiales</Link></li>
              <li>→ <Link to="#como-elegir" className="underline">Guía: cómo elegir</Link></li>
              <li>→ <Link to="#faq" className="underline">Preguntas frecuentes</Link></li>
              <li>→ <Link to="/contacto" className="underline">Solicitar muestras gratis</Link></li>
            </ul>
            <div className="wire-box mt-3 h-10 !border-solid text-[11px]">Descargar catálogo PDF</div>
          </aside>
        </div>
        <p className="wire-note mt-4">
          SEO · Bloque de 250-350 palabras con keyword principal en H1 + 2-3 menciones naturales, enlaces internos a anclas y a /contacto. Convierte el catálogo de "lista de productos" en "página rankeable".
        </p>
      </WireSection>

      {/* FILTROS */}
      <div id="categorias" />
      
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
                <Link
                  key={i}
                  to={i === 0 ? "/catalogo/vaso-bagazo-12oz" : "/catalogo/vaso-bagazo-12oz"}
                  className="group block space-y-2 rounded border border-border bg-card p-3 hover:shadow-md transition"
                >
                  <div className="wire-box h-36">FOTO PRODUCTO</div>
                  <div className="text-[10px] uppercase text-muted-foreground">Categoría · Material</div>
                  <h3 className="text-sm font-semibold group-hover:underline">
                    {i === 0 ? "Vaso bagazo 12 oz (DEMO)" : "Nombre del producto"}
                  </h3>
                  <Lines count={2} widths={["100%", "70%"]} />
                  <div className="flex items-center justify-between pt-1">
                    <div className="text-xs font-semibold">SKU / presentación</div>
                    <div className="wire-box h-7 w-20 !border-solid text-[11px]">Ver ficha →</div>
                  </div>
                </Link>
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

      {/* COMPARATIVA DE MATERIALES */}
      <div id="comparativa" />
      <WireSection tag="02 · Comparativa" title="Tabla comparativa de materiales compostables">
        <div className="overflow-x-auto rounded border border-border bg-card">
          <table className="w-full text-xs">
            <thead className="border-b border-border bg-muted/40">
              <tr className="text-left">
                <th className="p-3 font-semibold">Material</th>
                <th className="p-3 font-semibold">Origen</th>
                <th className="p-3 font-semibold">Uso ideal</th>
                <th className="p-3 font-semibold">Resistencia térmica</th>
                <th className="p-3 font-semibold">Compostaje</th>
                <th className="p-3 font-semibold">Certificaciones</th>
              </tr>
            </thead>
            <tbody>
              {materialesComparativa.map((m) => (
                <tr key={m.material} className="border-b border-border last:border-0 align-top">
                  <td className="p-3 font-semibold">{m.material}</td>
                  <td className="p-3 text-muted-foreground">{m.origen}</td>
                  <td className="p-3 text-muted-foreground">{m.uso}</td>
                  <td className="p-3 font-mono text-muted-foreground whitespace-nowrap">{m.temp}</td>
                  <td className="p-3 font-mono text-muted-foreground whitespace-nowrap">{m.compostaje}</td>
                  <td className="p-3 text-muted-foreground">{m.cert}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="wire-note mt-4">
          SEO · Tabla altamente indexable + featured-snippet candidate. Schema.org Table + ItemList. Genera tráfico orgánico de queries comparativas tipo "PLA vs bagazo de trigo".
        </p>
      </WireSection>

      {/* GUÍA CÓMO ELEGIR */}
      <div id="como-elegir" />
      <WireSection tag="03 · Guía" title="Cómo elegir el desechable adecuado para tu operación">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { paso: "01", titulo: "Define la temperatura de uso", detalle: "Bebidas frías → PLA. Café/sopa caliente → papel + PLA o bagazo. Comida horno/microondas → bagazo de trigo (hasta 100 °C)." },
            { paso: "02", titulo: "Calcula tu volumen mensual", detalle: "Menos de 5,000 piezas/mes → catálogo estándar. Más de 50,000/mes → lista de precios mayoreo + producción dedicada con tu marca." },
            { paso: "03", titulo: "Verifica certificación requerida", detalle: "FDA grado alimenticio para todo lo que toca alimentos. TÜV OK Compost INDUSTRIAL si tu ciudad tiene compostaje municipal. HOME si va a composta doméstica." },
            { paso: "04", titulo: "Considera el ciclo logístico", detalle: "Productos apilables ahorran espacio y flete. Pide ficha técnica con dimensiones de caja máster antes de cotizar." },
            { paso: "05", titulo: "Evalúa branding e impresión", detalle: "Si quieres logo, mínimo 5,000 unidades por SKU. Tinta a base de agua, certificada para contacto alimenticio." },
            { paso: "06", titulo: "Solicita muestras físicas", detalle: "Antes de cualquier pedido grande, pide muestras gratis. Prueba con tu equipo y tus clientes reales una semana." },
          ].map((p) => (
            <div key={p.paso} className="rounded border border-border bg-card p-4 space-y-2">
              <div className="text-[11px] font-mono uppercase text-muted-foreground">Paso {p.paso}</div>
              <div className="text-sm font-semibold">{p.titulo}</div>
              <div className="text-xs text-muted-foreground">{p.detalle}</div>
            </div>
          ))}
        </div>
        <p className="wire-note mt-4">
          SEO · Schema.org HowTo con steps. Posiciona en featured snippets para queries "cómo elegir desechables compostables".
        </p>
      </WireSection>

      {/* CTA */}
      <WireSection tag="04 · CTA volumen" title="Llamado a cotización por volumen">
        <div className="rounded border border-border bg-card p-8 text-center">
          <div className="mx-auto max-w-xl space-y-3">
            <h2 className="text-lg font-semibold">¿Necesitas volumen mayoreo?</h2>
            <Lines count={2} widths={["80%", "60%"]} />
            <div className="flex justify-center gap-2">
              <div className="wire-box h-11 w-48 !border-solid">Solicitar cotización</div>
              <div className="wire-box h-11 w-48">Descargar catálogo PDF</div>
            </div>
          </div>
        </div>
      </WireSection>

      {/* FAQ */}
      <div id="faq" />
      <WireSection tag="05 · FAQ" title="Preguntas frecuentes (FAQPage Schema)">
        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((f, i) => (
            <details key={i} className="rounded border border-border bg-card p-4">
              <summary className="cursor-pointer text-sm font-semibold">{f.q}</summary>
              <p className="mt-2 text-xs text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
        <p className="wire-note mt-4 text-center">
          SEO · Schema.org FAQPage obligatorio. Genera rich snippets en SERP con acordeones desplegables = +30% CTR orgánico.
        </p>
      </WireSection>

      <SeoTechBlock
        page="Catálogo (/catalogo)"
        title="Desechables biodegradables y compostables B2B | Catálogo [Marca]"
        description="Catálogo de 90+ productos compostables certificados: contenedores, vasos, cubiertos, platos y bolsas de bagazo, PLA y fécula. Mayoreo B2B, entrega nacional MX."
        h1="Catálogo de desechables biodegradables y compostables B2B"
        schemas={[
          "BreadcrumbList (Inicio › Catálogo)",
          "CollectionPage como tipo principal",
          "ItemList con cada Product (name, image, description, brand, offers)",
          "FAQPage con las 5 preguntas frecuentes",
          "HowTo para la guía 'Cómo elegir' (6 steps)",
        ]}
        notes={[
          "Intro editorial 250-350 palabras con keyword principal — convierte el listado en página rankeable",
          "Tabla comparativa de materiales = featured snippet candidate para queries comparativas",
          "Filtros indexables solo si tienen volumen de búsqueda; resto noindex via meta robots dinámico",
          "rel=canonical apuntando a /catalogo cuando hay filtros aplicados",
          "Paginación con rel=prev/next + URLs limpias /catalogo?page=2",
          "Cada producto: ficha individual /catalogo/[slug] con Schema.org Product + Offer + FAQ",
          "Imágenes: lazy-loading excepto primeras 3 (above the fold), srcset responsive, WebP",
          "Plugin Rank Math o Yoast para automatizar schema, sitemap y meta tags",
        ]}
      />
    </>
  );
};

export default Catalogo;
