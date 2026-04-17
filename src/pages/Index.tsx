import { Link } from "react-router-dom";
import { WireSection, Lines } from "@/components/wireframe/WireSection";

const Index = () => {
  const categorias = [
    { name: "Contenedores", note: "envases, bowls, cajas para llevar" },
    { name: "Vasos", note: "fríos, calientes, con tapa" },
    { name: "Cubiertos", note: "tenedor, cuchara, cuchillo, palillos" },
    { name: "Platos", note: "redondos, cuadrados, divididos" },
    { name: "Bolsas", note: "compostables, asa camiseta, basura" },
    { name: "Productos complementarios", note: "servilletas, popotes, removedores" },
  ];

  const materiales = [
    { name: "Bagazo de trigo", note: "fibra natural, resistente al calor" },
    { name: "PLA", note: "ácido poliláctico, compostable industrial" },
    { name: "Fécula de maíz", note: "biodegradable, ideal para cubiertos" },
    { name: "Bolsas compostables", note: "certificación TÜV / OK Compost" },
    { name: "Papel laminado con PLA", note: "alternativa al plástico tradicional" },
  ];

  const sectores = [
    "Hoteles",
    "Cafeterías",
    "Empresas de empaque",
    "Hospitales",
    "Comedores industriales",
  ];

  return (
    <>
      {/* HERO */}
      <WireSection tag="01 · Hero" title="Propuesta de valor + imagen principal">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div className="wire-line h-3" style={{ width: "40%" }} />
            <div className="space-y-2">
              <div className="wire-line h-6" />
              <div className="wire-line h-6" style={{ width: "85%" }} />
              <div className="wire-line h-6" style={{ width: "70%" }} />
            </div>
            <Lines count={3} />
            <div className="flex gap-3 pt-2">
              <Link to="/catalogo" className="wire-box h-11 w-40 !border-solid">
                CTA primario
              </Link>
              <Link to="/contacto" className="wire-box h-11 w-40">
                CTA secundario
              </Link>
            </div>
            <p className="wire-note">
              SEO · Único &lt;h1&gt; de la página: "Desechables biodegradables y compostables para tu negocio".
              Incluir keyword principal + propuesta de valor.
            </p>
          </div>
          <div className="space-y-3">
            <div className="wire-box h-72">IMAGEN HERO</div>
            <p className="wire-alt">
              IMAGEN sugerida: foto cenital de mesa de cafetería con vasos de bagazo, plato compostable
              con comida fresca y cubiertos de PLA sobre madera clara. Estilo natural, luz cálida.
            </p>
            <p className="wire-alt">
              alt="Mesa servida con vasos, platos y cubiertos biodegradables sobre madera natural"
            </p>
          </div>
        </div>
      </WireSection>

      {/* TRUST */}
      <WireSection tag="02 · Confianza" title="Certificaciones + clientes">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="wire-box h-16">LOGO {i + 1}</div>
          ))}
        </div>
        <div className="mt-3 grid gap-2 md:grid-cols-2">
          <p className="wire-alt">
            IMÁGENES: logos en escala de grises de certificaciones (TÜV OK Compost, BPI, FSC, FDA)
            y clientes destacados. Formato SVG. alt="Certificación [nombre]" / alt="Cliente [nombre]".
          </p>
          <p className="wire-note">
            SEO · Schema.org Organization con propiedad "award" para certificaciones. Mejora E-E-A-T.
          </p>
        </div>
      </WireSection>

      {/* SECTORES */}
      <WireSection tag="03 · Sectores" title="Industrias a las que servimos">
        <div className="grid gap-4 md:grid-cols-5">
          {sectores.map((s) => (
            <div key={s} className="space-y-2">
              <div className="wire-box aspect-square">ICONO / FOTO</div>
              <div className="text-center text-sm font-semibold">{s}</div>
              <Lines count={2} widths={["100%", "70%"]} />
            </div>
          ))}
        </div>
        <p className="wire-note mt-4">
          SEO · Cada sector debe enlazar a /sectores/[slug]. Long-tail: "desechables compostables para hospitales".
        </p>
      </WireSection>

      {/* CATEGORÍAS */}
      <WireSection tag="04 · Productos por categoría" title="Vista resumida — ver catálogo completo">
        <div className="grid gap-5 md:grid-cols-3">
          {categorias.map((c) => (
            <article key={c.name} className="space-y-3 rounded border border-border bg-card p-4">
              <div className="wire-box h-40">FOTO PRODUCTO</div>
              <h3 className="text-base font-semibold">{c.name}</h3>
              <p className="text-xs text-muted-foreground">{c.note}</p>
              <Lines count={2} widths={["100%", "65%"]} />
              <Link to="/catalogo" className="wire-box block h-9 !border-solid text-xs">
                Ver categoría →
              </Link>
            </article>
          ))}
        </div>
        <p className="wire-note mt-4">
          SEO · &lt;article&gt; con &lt;h3&gt;. URLs: /catalogo/contenedores, /catalogo/vasos, etc.
          Schema.org ProductGroup + BreadcrumbList JSON-LD.
        </p>
      </WireSection>

      {/* MATERIALES */}
      <WireSection tag="05 · Productos por material" title="Filtro alternativo de catálogo">
        <div className="grid gap-4 md:grid-cols-5">
          {materiales.map((m) => (
            <div key={m.name} className="space-y-2 rounded border border-border bg-card p-3">
              <div className="wire-box h-28">TEXTURA</div>
              <h3 className="text-sm font-semibold">{m.name}</h3>
              <p className="text-[11px] text-muted-foreground">{m.note}</p>
            </div>
          ))}
        </div>
        <p className="wire-alt mt-4">
          IMÁGENES: macro de textura (fibras de bagazo, granos de maíz, papel kraft con PLA).
          alt="Detalle de fibra natural de bagazo de trigo prensada".
        </p>
      </WireSection>

      {/* CTA FINAL */}
      <WireSection tag="06 · CTA final" title="Bloque de conversión antes del footer">
        <div className="rounded border border-border bg-card p-8 text-center">
          <div className="mx-auto max-w-xl space-y-3">
            <Lines count={2} widths={["80%", "60%"]} />
            <Link to="/contacto" className="wire-box mx-auto h-11 w-48 !border-solid">
              Solicitar cotización
            </Link>
          </div>
        </div>
      </WireSection>
    </>
  );
};

export default Index;
