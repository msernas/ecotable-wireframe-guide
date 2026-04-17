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

      <SeoTechBlock
        page="Catálogo (/catalogo)"
        title="Catálogo de desechables biodegradables y compostables | [Marca]"
        description="Catálogo completo: contenedores, vasos, cubiertos, platos y bolsas compostables de bagazo, PLA y fécula de maíz. Mayoreo B2B con entrega nacional."
        h1="Catálogo de desechables biodegradables"
        schemas={[
          "BreadcrumbList (Inicio › Catálogo)",
          "ItemList con cada Product (name, image, description, brand, offers)",
          "CollectionPage como tipo principal",
        ]}
        notes={[
          "Filtros como query params indexables solo si tienen volumen de búsqueda; resto noindex",
          "rel=canonical apuntando a /catalogo cuando hay filtros aplicados",
          "Paginación con rel=prev/next + URLs limpias /catalogo?page=2",
          "Cada producto: ficha individual /catalogo/[slug] con Schema.org Product + Offer",
          "Imágenes: lazy-loading excepto primeras 3 (above the fold)",
        ]}
      />
    </>
  );
};

export default Catalogo;
