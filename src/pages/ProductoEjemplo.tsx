import { Link } from "react-router-dom";
import { WireSection, PageBanner } from "@/components/wireframe/WireSection";
import { SeoTechBlock } from "@/components/wireframe/SeoTechBlock";

const specs = [
  { label: "Capacidad", value: "12 oz / 355 ml" },
  { label: "Material", value: "Bagazo de trigo 100%" },
  { label: "Diámetro boca", value: "90 mm" },
  { label: "Altura", value: "110 mm" },
  { label: "Resistencia térmica", value: "Hasta 100 °C" },
  { label: "Tapa compatible", value: "Tapa PLA 90 mm (SKU TP-90)" },
  { label: "Apilable", value: "Sí, 50 piezas/columna" },
  { label: "Piezas por caja", value: "1,000 (50 mangas × 20)" },
  { label: "Dimensiones caja máster", value: "55 × 35 × 28 cm" },
  { label: "Peso caja", value: "8.5 kg" },
  { label: "Tiempo de compostaje", value: "60-90 días industrial" },
  { label: "Certificaciones", value: "TÜV OK Compost INDUSTRIAL, BPI, FDA" },
];

const sectores = [
  { name: "Cafeterías de especialidad", uso: "Café americano, latte, té caliente. Imprime tu logo desde 5,000 piezas." },
  { name: "Hoteles", uso: "Servicio de habitaciones, coffee stations, eventos corporativos." },
  { name: "Hospitales", uso: "Cafeterías de personal, áreas de descanso, eventos institucionales." },
  { name: "Comedores industriales", uso: "Bebidas calientes para empleados, alternativa a unicel." },
];

const faqs = [
  { q: "¿El vaso de bagazo de trigo resiste líquidos calientes sin deformarse?", a: "Sí, soporta hasta 100 °C de manera continua. Lo usan cafeterías de especialidad para café, té y chocolate caliente sin filtraciones ni reblandecimiento durante más de 4 horas." },
  { q: "¿Es realmente compostable o solo biodegradable?", a: "Es 100% compostable industrial certificado por TÜV OK Compost (EN 13432) y BPI (USA, ASTM D6400). Se descompone completamente en 60-90 días en planta de compostaje industrial sin dejar microplásticos." },
  { q: "¿Qué tapa es compatible con este vaso?", a: "La tapa PLA de 90 mm (SKU TP-90), también compostable. Disponible en versión sippy lid (sin popote) o flat lid con orificio." },
  { q: "¿Pueden imprimir nuestro logo en el vaso?", a: "Sí, a partir de 5,000 unidades. Tinta a base de agua certificada para contacto alimenticio. Tiempo de producción 4-6 semanas. Cotización personalizada al solicitar." },
  { q: "¿Cuál es el precio por mayoreo?", a: "Lista de precios escalonada por volumen: 1,000-9,999 piezas precio base; 10,000-49,999 piezas -8%; 50,000+ piezas -15%. Solicita cotización formal con tu sector y volumen mensual estimado." },
  { q: "¿En qué se diferencia del vaso de PLA?", a: "El vaso de bagazo resiste calor (hasta 100 °C) — el PLA solo resiste hasta 40 °C. Para bebidas calientes usa bagazo o papel+PLA; para frías usa PLA. Ver nuestra guía 'cómo elegir'." },
];

const ProductoEjemplo = () => {
  return (
    <>
      <PageBanner
        breadcrumb="Inicio / Catálogo / Vasos / Vaso compostable de bagazo 12 oz"
        h1="Vaso compostable de bagazo de trigo 12 oz — Caliente, B2B"
        intro="Vaso desechable 100% compostable de bagazo de trigo, 12 oz (355 ml), apto para bebidas calientes hasta 100 °C. Certificado TÜV OK Compost y BPI. Mayoreo B2B con entrega nacional."
      />

      {/* GALERÍA + COMPRA */}
      <WireSection tag="01 · Producto" title="Galería + ficha resumen + CTA">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          {/* Galería */}
          <div className="space-y-3">
            <div className="wire-box h-96">FOTO PRIMARIA — Vaso 3/4 sobre fondo blanco</div>
            <div className="grid grid-cols-4 gap-2">
              <div className="wire-box h-20">DETALLE material</div>
              <div className="wire-box h-20">USO real café</div>
              <div className="wire-box h-20">ESCALA mano</div>
              <div className="wire-box h-20">CON tapa</div>
            </div>
            <p className="wire-alt">
              IMÁGENES: 1 primaria fondo blanco + 3-4 secundarias (detalle material, uso real con bebida, escala humana, con tapa). Formato WebP, srcset responsive (320/640/1024/1600), alt-text descriptivo único por imagen. Primera imagen sin lazy-load (LCP).
            </p>
          </div>

          {/* Ficha resumen */}
          <aside className="space-y-4">
            <div className="text-[11px] font-mono uppercase text-muted-foreground">SKU: VBT-12-90 · EAN: 7501234567890</div>
            <div className="space-y-1">
              <div className="text-xs text-muted-foreground">Categoría: <Link to="/catalogo" className="underline">Vasos</Link> · Material: <Link to="/catalogo" className="underline">Bagazo de trigo</Link></div>
              <div className="flex items-center gap-2 text-xs">
                <span className="font-mono">★★★★★</span>
                <span className="text-muted-foreground">4.8 (47 reseñas verificadas)</span>
              </div>
            </div>

            <div className="rounded border border-border bg-card p-4 space-y-3">
              <div>
                <div className="text-[11px] uppercase text-muted-foreground">Precio mayoreo desde</div>
                <div className="text-2xl font-bold">$ 1.85 MXN <span className="text-xs font-normal text-muted-foreground">/ pieza · sin IVA</span></div>
                <div className="text-[11px] text-muted-foreground">Caja de 1,000 piezas · pedido mínimo 1 caja</div>
              </div>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between"><span>1,000-9,999 pzs</span><span className="font-mono">$ 1.85</span></div>
                <div className="flex justify-between"><span>10,000-49,999 pzs</span><span className="font-mono">$ 1.70 <span className="text-muted-foreground">(-8%)</span></span></div>
                <div className="flex justify-between"><span>50,000+ pzs</span><span className="font-mono">$ 1.57 <span className="text-muted-foreground">(-15%)</span></span></div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="wire-box h-11 !border-solid">CTA primario: Solicitar cotización</div>
              <div className="wire-box h-10">CTA secundario: Pedir muestra gratis</div>
              <div className="wire-box h-9">Descargar ficha técnica PDF</div>
            </div>

            <ul className="space-y-1 text-xs text-muted-foreground">
              <li>✓ Entrega nacional 3-7 días hábiles</li>
              <li>✓ Asesor B2B asignado en menos de 24 h</li>
              <li>✓ Posibilidad de impresión con tu marca (5,000+ pzs)</li>
              <li>✓ Compostable certificado TÜV + BPI</li>
            </ul>
          </aside>
        </div>
      </WireSection>

      {/* DESCRIPCIÓN LARGA */}
      <WireSection tag="02 · Descripción" title="Descripción extensa (600-800 palabras SEO)">
        <div className="mx-auto max-w-3xl space-y-4 text-sm leading-relaxed">
          <p>
            El <strong>vaso compostable de bagazo de trigo de 12 oz</strong> es nuestro producto más solicitado por cafeterías de especialidad, hoteles boutique y comedores industriales que buscan reemplazar el vaso de unicel o PET sin comprometer la experiencia del cliente. Fabricado con <strong>100% bagazo de trigo</strong> — un residuo agrícola que de otra forma se desecharía o quemaría — es completamente compostable industrial y deja cero microplásticos al final de su ciclo de vida.
          </p>
          <h3 className="text-base font-semibold pt-2">Por qué bagazo de trigo y no otro material</h3>
          <p>
            A diferencia del PLA puro, que se deforma a partir de los 40 °C, el bagazo de trigo <strong>resiste temperaturas de hasta 100 °C de manera continua</strong>. Esto lo hace ideal para café americano (85-90 °C), café latte, té, chocolate caliente y caldos. Su pared rígida no transmite calor a la mano del usuario en cantidades incómodas, eliminando la necesidad de doble vaso o manga térmica en la mayoría de los casos.
          </p>
          <h3 className="text-base font-semibold pt-2">Beneficios para tu operación B2B</h3>
          <ul className="space-y-1 list-disc pl-5">
            <li><strong>Reducción de huella de carbono:</strong> 1 caja de 1,000 vasos = 12 kg CO₂ evitados vs. unicel equivalente.</li>
            <li><strong>Cumplimiento normativo:</strong> compatible con NOM-161-SEMARNAT y prohibiciones municipales de plástico de un solo uso (CDMX, QR, BCS).</li>
            <li><strong>Imagen de marca:</strong> 73% de consumidores mexicanos prefieren marcas con empaque sustentable (Nielsen 2024).</li>
            <li><strong>Costo competitivo:</strong> diferencia de $0.40-0.80 MXN por pieza vs. unicel — recuperable vía premium de marca o eliminación de costos de gestión de residuos.</li>
            <li><strong>Logística eficiente:</strong> apilable 50 piezas/columna, caja máster compacta, paletizable estándar.</li>
          </ul>
          <h3 className="text-base font-semibold pt-2">Aplicaciones típicas por sector</h3>
          <div className="grid gap-3 md:grid-cols-2">
            {sectores.map((s) => (
              <div key={s.name} className="rounded border border-border bg-card p-3">
                <div className="text-sm font-semibold">{s.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.uso}</div>
              </div>
            ))}
          </div>
          <h3 className="text-base font-semibold pt-2">Ciclo de vida y compostaje</h3>
          <p>
            Tras el uso, el vaso debe disponerse en flujo de <strong>compostaje industrial</strong> (no doméstico). En condiciones de 55-65 °C, humedad controlada y aireación forzada, se descompone completamente en <strong>60-90 días</strong>, generando compost utilizable en agricultura. No es reciclable junto con papel ni con plásticos — debe separarse correctamente. En municipios sin compostaje industrial, el residuo final es significativamente menos dañino que plásticos derivados de petróleo.
          </p>
          <h3 className="text-base font-semibold pt-2">Personalización con tu marca</h3>
          <p>
            Ofrecemos impresión a 1, 2 o 4 tintas con tinta a base de agua certificada para contacto alimenticio. Pedido mínimo 5,000 piezas por SKU, tiempo de producción 4-6 semanas. Recibimos archivos en vector (.ai, .pdf, .svg) y nuestro equipo de diseño puede ajustar el arte para producción sin costo adicional en pedidos superiores a 10,000 piezas.
          </p>
        </div>
      </WireSection>

      {/* SPECS TÉCNICAS */}
      <WireSection tag="03 · Especificaciones" title="Ficha técnica completa">
        <div className="overflow-x-auto rounded border border-border bg-card">
          <table className="w-full text-xs">
            <tbody>
              {specs.map((s, i) => (
                <tr key={s.label} className={i % 2 === 0 ? "bg-muted/20" : ""}>
                  <td className="p-3 font-semibold w-1/3">{s.label}</td>
                  <td className="p-3 font-mono text-muted-foreground">{s.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="wire-note mt-4">SEO · Schema.org PropertyValue dentro de Product. Indexable como tabla = featured snippet potencial.</p>
      </WireSection>

      {/* COMPARATIVA VS PLÁSTICO */}
      <WireSection tag="04 · vs Plástico" title="Comparativa ambiental vs vaso convencional">
        <div className="overflow-x-auto rounded border border-border bg-card">
          <table className="w-full text-xs">
            <thead className="border-b border-border bg-muted/40">
              <tr className="text-left">
                <th className="p-3">Indicador</th>
                <th className="p-3">Vaso unicel 12 oz</th>
                <th className="p-3">Vaso PET 12 oz</th>
                <th className="p-3 bg-foreground/5">Bagazo de trigo (este)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Origen", "Petróleo", "Petróleo reciclado", "Residuo agrícola"],
                ["CO₂ por pieza", "21 g", "14 g", "9 g"],
                ["Tiempo descomposición", ">500 años", "450 años", "60-90 días"],
                ["Microplásticos", "Sí", "Sí", "No"],
                ["Compostable", "No", "No", "Sí (industrial)"],
                ["Resistencia térmica", "Alta", "Baja (40 °C)", "Alta (100 °C)"],
              ].map((row) => (
                <tr key={row[0]} className="border-b border-border last:border-0">
                  <td className="p-3 font-semibold">{row[0]}</td>
                  <td className="p-3 text-muted-foreground">{row[1]}</td>
                  <td className="p-3 text-muted-foreground">{row[2]}</td>
                  <td className="p-3 font-mono bg-foreground/5">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </WireSection>

      {/* FAQ */}
      <WireSection tag="05 · FAQ producto" title="Preguntas frecuentes específicas del producto">
        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((f, i) => (
            <details key={i} className="rounded border border-border bg-card p-4">
              <summary className="cursor-pointer text-sm font-semibold">{f.q}</summary>
              <p className="mt-2 text-xs text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
        <p className="wire-note mt-4 text-center">SEO · FAQPage Schema con 6 preguntas específicas del SKU = mayor probabilidad de rich snippet.</p>
      </WireSection>

      {/* RESEÑAS */}
      <WireSection tag="06 · Reseñas" title="Reseñas verificadas (Schema Review)">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { autor: "Marketing Manager · Hotel boutique CDMX", rating: 5, txt: "Llevamos 8 meses usándolos en habitaciones y coffee station. Cero quejas, los huéspedes los notan y mencionan." },
            { autor: "Compras · Cafetería de especialidad", rating: 5, txt: "Resisten perfectamente el café a 90 °C. Cambiamos de unicel hace un año y ya no volvemos." },
            { autor: "Operaciones · Comedor industrial 3,000 empleados", rating: 4, txt: "Excelente producto. Solo el costo es ligeramente superior pero la imagen ante el cliente lo justifica." },
          ].map((r, i) => (
            <div key={i} className="rounded border border-border bg-card p-4 space-y-2">
              <div className="text-xs font-mono">{"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}</div>
              <p className="text-xs text-muted-foreground italic">"{r.txt}"</p>
              <div className="text-[11px] text-muted-foreground">— {r.autor}</div>
            </div>
          ))}
        </div>
      </WireSection>

      {/* PRODUCTOS RELACIONADOS */}
      <WireSection tag="07 · Relacionados" title="Productos relacionados (cross-sell + internal linking)">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Tapa PLA 90 mm (compatible)",
            "Vaso bagazo 16 oz",
            "Manga cartón kraft 12 oz",
            "Removedor PLA 14 cm",
          ].map((p) => (
            <Link key={p} to="/catalogo" className="space-y-2 rounded border border-border bg-card p-3 hover:shadow-md transition">
              <div className="wire-box h-28">FOTO</div>
              <div className="text-xs font-semibold">{p}</div>
              <div className="text-[11px] text-muted-foreground">Ver ficha →</div>
            </Link>
          ))}
        </div>
        <p className="wire-note mt-4">SEO · Internal linking contextual aumenta tiempo en sitio y distribuye autoridad a fichas relacionadas.</p>
      </WireSection>

      <SeoTechBlock
        page="Ficha de producto (/catalogo/vaso-bagazo-12oz)"
        title="Vaso compostable bagazo trigo 12 oz B2B mayoreo | Renovapack"
        description="Vaso 100% compostable de bagazo de trigo 12 oz (355 ml). Resiste 100 °C, certificado TÜV + BPI. Mayoreo B2B desde $1.57 MXN/pieza. Entrega nacional MX."
        h1="Vaso compostable de bagazo de trigo 12 oz — Caliente, B2B"
        schemas={[
          "Product (name, image, description, brand, sku, gtin, material)",
          "Offer (price, priceCurrency, priceValidUntil, availability, priceSpecification con tiers de volumen)",
          "AggregateRating + Review (estrellas en SERP)",
          "BreadcrumbList (Inicio › Catálogo › Vasos › Bagazo 12 oz)",
          "FAQPage con las 6 preguntas del producto",
          "PropertyValue dentro de Product para cada spec técnico",
        ]}
        notes={[
          "URL canónica: /catalogo/vaso-bagazo-12oz (slug descriptivo con keyword)",
          "Plantilla de 800-1000 palabras de contenido único — ranking factor crítico vs catálogos genéricos",
          "Galería: primera imagen sin lazy-load para LCP <2.5s; resto WebP + srcset",
          "Alt-text único por imagen describiendo escena (no solo nombre del producto)",
          "Reseñas verificadas con Schema Review = estrellas amarillas en SERP = +35% CTR",
          "FAQ específica del producto distinta de la genérica del catálogo (evitar duplicate content)",
          "Internal linking a categoría padre, material, tapa compatible y guía 'cómo elegir'",
          "OpenGraph image: render del producto con precio + certificaciones para compartir en LinkedIn/WhatsApp B2B",
        ]}
      />
    </>
  );
};

export default ProductoEjemplo;
