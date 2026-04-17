interface SectionProps {
  tag: string;
  title: string;
  children: React.ReactNode;
}

const Section = ({ tag, title, children }: SectionProps) => (
  <section className="border-t border-border py-12">
    <div className="container">
      <div className="mb-6 flex items-center gap-3">
        <span className="wire-section-tag">{tag}</span>
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          {title}
        </h2>
      </div>
      {children}
    </div>
  </section>
);

const Lines = ({ count = 3, widths = ["100%", "92%", "78%"] }: { count?: number; widths?: string[] }) => (
  <div className="space-y-2">
    {Array.from({ length: count }).map((_, i) => (
      <div key={i} className="wire-line" style={{ width: widths[i % widths.length] }} />
    ))}
  </div>
);

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
    <div className="min-h-screen bg-background text-foreground">
      {/* Top wireframe banner */}
      <div className="border-b border-border bg-muted">
        <div className="container py-2 text-center text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
          Wireframe baja fidelidad · Guía para diseñador · No es diseño final
        </div>
      </div>

      {/* HEADER */}
      <Section tag="01 · Header" title="Navegación principal + CTA">
        <div className="wire-box h-20">
          <div className="flex w-full items-center justify-between px-6">
            <div className="wire-box h-10 w-32 !border-solid">LOGO</div>
            <div className="hidden gap-6 md:flex">
              {["Inicio", "Productos", "Materiales", "Sectores", "Nosotros", "Contacto"].map((l) => (
                <div key={l} className="text-xs font-medium text-muted-foreground">{l}</div>
              ))}
            </div>
            <div className="wire-box h-9 w-32 !border-solid">CTA: Cotizar</div>
          </div>
        </div>
        <div className="mt-3 grid gap-2 md:grid-cols-2">
          <p className="wire-note">
            SEO · &lt;header&gt; semántico · Logo envuelto en &lt;a href="/"&gt; con aria-label="Inicio".
            Nav en &lt;nav aria-label="Principal"&gt;. Sticky en scroll para mejorar conversión.
          </p>
          <p className="wire-note">
            SEO · Idioma html lang="es-MX". Meta title ≤60 car: "Vajilla biodegradable y desechables compostables | [Marca]".
            Meta description ≤160 car con keywords: "biodegradable", "compostable", "PLA", "bagazo".
          </p>
        </div>
      </Section>

      {/* HERO */}
      <Section tag="02 · Hero" title="Propuesta de valor + imagen principal">
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
              <div className="wire-box h-11 w-40 !border-solid">CTA primario</div>
              <div className="wire-box h-11 w-40">CTA secundario</div>
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
      </Section>

      {/* TRUST / LOGOS */}
      <Section tag="03 · Confianza" title="Certificaciones + clientes">
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
            SEO · Schema.org Organization con propiedad "award" para certificaciones.
            Mejora E-E-A-T (autoridad y confianza).
          </p>
        </div>
      </Section>

      {/* SECTORES */}
      <Section tag="04 · Sectores" title="Industrias a las que servimos">
        <div className="grid gap-4 md:grid-cols-5">
          {sectores.map((s) => (
            <div key={s} className="space-y-2">
              <div className="wire-box aspect-square">ICONO / FOTO</div>
              <div className="text-center text-sm font-semibold">{s}</div>
              <Lines count={2} widths={["100%", "70%"]} />
            </div>
          ))}
        </div>
        <div className="mt-4 grid gap-2 md:grid-cols-2">
          <p className="wire-alt">
            IMÁGENES sugeridas: 1 foto realista por sector — recepción de hotel con coffee station,
            barista en cafetería, línea de empaque con productos, charola hospitalaria, comedor corporativo.
            alt descriptivo, ej: "Servicio de café en hotel con vasos compostables".
          </p>
          <p className="wire-note">
            SEO · Cada sector debe enlazar a su propia landing /sectores/hoteles, /sectores/hospitales, etc.
            Long-tail keywords: "desechables compostables para hospitales", "vajilla biodegradable hoteles".
          </p>
        </div>
      </Section>

      {/* PRODUCTOS POR CATEGORÍA */}
      <Section tag="05 · Productos por categoría" title="Catálogo principal">
        <div className="grid gap-5 md:grid-cols-3">
          {categorias.map((c) => (
            <article key={c.name} className="space-y-3 rounded border border-border bg-card p-4">
              <div className="wire-box h-40">FOTO PRODUCTO</div>
              <h3 className="text-base font-semibold">{c.name}</h3>
              <p className="text-xs text-muted-foreground">{c.note}</p>
              <Lines count={2} widths={["100%", "65%"]} />
              <div className="wire-box h-9 !border-solid text-xs">Ver categoría →</div>
            </article>
          ))}
        </div>
        <div className="mt-4 grid gap-2 md:grid-cols-2">
          <p className="wire-alt">
            IMÁGENES: foto producto sobre fondo blanco/neutro, alta resolución, sombra suave.
            Una imagen representativa por categoría + galería en página interna.
            alt="Contenedores biodegradables de bagazo de trigo de 3 compartimentos".
          </p>
          <p className="wire-note">
            SEO · Cada tarjeta es &lt;article&gt; con &lt;h3&gt;. URLs limpias: /productos/contenedores,
            /productos/vasos, /productos/cubiertos. Schema.org ProductGroup en cada categoría.
            Breadcrumbs visibles + JSON-LD BreadcrumbList.
          </p>
        </div>
      </Section>

      {/* MATERIALES */}
      <Section tag="06 · Productos por material" title="Filtro alternativo de catálogo">
        <div className="grid gap-4 md:grid-cols-5">
          {materiales.map((m) => (
            <div key={m.name} className="space-y-2 rounded border border-border bg-card p-3">
              <div className="wire-box h-28">TEXTURA / MUESTRA</div>
              <h3 className="text-sm font-semibold">{m.name}</h3>
              <p className="text-[11px] text-muted-foreground">{m.note}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 grid gap-2 md:grid-cols-2">
          <p className="wire-alt">
            IMÁGENES: macro de la textura del material (fibras de bagazo, granos de maíz molido,
            superficie de papel kraft con PLA). Estilo editorial, fondo neutro.
            alt="Detalle de fibra natural de bagazo de trigo prensada".
          </p>
          <p className="wire-note">
            SEO · Páginas dedicadas /materiales/bagazo-de-trigo, /materiales/pla, /materiales/fecula-de-maiz, etc.
            Contenido educativo (300-600 palabras) explicando origen, biodegradación, certificaciones.
            Captura búsquedas informacionales + responde preguntas frecuentes (FAQPage schema).
          </p>
        </div>
      </Section>

      {/* DIFERENCIADORES */}
      <Section tag="07 · Por qué elegirnos" title="Beneficios clave">
        <div className="grid gap-4 md:grid-cols-4">
          {["100% compostable", "Entrega nacional", "Precio mayoreo", "Asesoría sustentable"].map((b) => (
            <div key={b} className="space-y-2 rounded border border-border bg-card p-4">
              <div className="wire-box h-12 w-12">ICO</div>
              <h3 className="text-sm font-semibold">{b}</h3>
              <Lines count={2} widths={["100%", "75%"]} />
            </div>
          ))}
        </div>
        <p className="wire-note mt-4">
          SEO · Sección con &lt;h2&gt; "¿Por qué elegir desechables biodegradables?".
          Iconos como SVG inline (mejor rendimiento, sin alt necesario, aria-hidden="true").
        </p>
      </Section>

      {/* PROCESO */}
      <Section tag="08 · Proceso de compra" title="Cómo trabajamos contigo (B2B)">
        <div className="grid gap-4 md:grid-cols-4">
          {["1. Cotiza", "2. Asesoría", "3. Producción", "4. Entrega"].map((p) => (
            <div key={p} className="space-y-2 rounded border border-border bg-card p-4 text-center">
              <div className="wire-box mx-auto h-16 w-16 rounded-full">{p.split(".")[0]}</div>
              <h3 className="text-sm font-semibold">{p}</h3>
              <Lines count={2} widths={["100%", "60%"]} />
            </div>
          ))}
        </div>
      </Section>

      {/* BLOG / RECURSOS */}
      <Section tag="09 · Blog / Recursos" title="Contenido para SEO orgánico">
        <div className="grid gap-4 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <article key={i} className="space-y-2 rounded border border-border bg-card p-3">
              <div className="wire-box h-32">IMAGEN POST</div>
              <div className="text-[10px] uppercase text-muted-foreground">Categoría · 5 min</div>
              <h3 className="text-sm font-semibold">Título del artículo de blog (≤60 car)</h3>
              <Lines count={2} />
            </article>
          ))}
        </div>
        <p className="wire-note mt-4">
          SEO · Blog en /blog con artículos clave: "Diferencia entre biodegradable y compostable",
          "Normativa de plásticos de un solo uso en México", "Cómo elegir desechables para tu hotel".
          Schema.org Article + autor + fecha. Internal linking hacia categorías y materiales.
        </p>
      </Section>

      {/* CONTACTO */}
      <Section tag="10 · Contacto" title="Formulario simple + datos">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-3 rounded border border-border bg-card p-5">
            <div className="text-sm font-semibold">Solicita información</div>
            {["Nombre completo", "Empresa", "Correo electrónico", "Teléfono", "Mensaje"].map((f, i) => (
              <div key={f} className="space-y-1">
                <div className="text-[11px] text-muted-foreground">{f}</div>
                <div className="wire-box h-9 !justify-start !pl-3 text-left text-[11px] normal-case tracking-normal" style={{ height: i === 4 ? "5rem" : undefined }} />
              </div>
            ))}
            <div className="wire-box h-10 !border-solid">Enviar solicitud</div>
          </div>
          <div className="space-y-4">
            <div className="wire-box h-56">MAPA / IMAGEN OFICINA</div>
            <div className="space-y-2 rounded border border-border bg-card p-4">
              <div className="text-sm font-semibold">Datos de contacto</div>
              <Lines count={4} widths={["80%", "60%", "70%", "50%"]} />
            </div>
            <p className="wire-alt">
              IMAGEN: mapa estático de Google Maps con marcador, o foto exterior del almacén/oficina.
              alt="Ubicación de [marca] en [ciudad]".
            </p>
            <p className="wire-note">
              SEO local · Schema.org LocalBusiness con dirección, teléfono, horarios.
              Perfil de Google Business Profile vinculado. hreflang si se agrega inglés después.
            </p>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <Section tag="11 · Footer" title="Navegación secundaria + legal">
        <div className="grid gap-6 rounded border border-border bg-card p-6 md:grid-cols-4">
          {["Productos", "Materiales", "Sectores", "Empresa"].map((col) => (
            <div key={col} className="space-y-2">
              <div className="text-sm font-semibold">{col}</div>
              <Lines count={5} widths={["70%", "60%", "80%", "50%", "65%"]} />
            </div>
          ))}
        </div>
        <div className="mt-3 grid gap-2 md:grid-cols-2">
          <p className="wire-note">
            SEO · Enlaces a sitemap.xml, política de privacidad, aviso legal.
            Iconos sociales con aria-label. Copyright dinámico.
          </p>
          <p className="wire-note">
            Técnico · robots.txt + sitemap.xml. Open Graph + Twitter Cards en &lt;head&gt;.
            Imágenes WebP/AVIF con loading="lazy" (excepto hero LCP). Canonical en cada página.
          </p>
        </div>
      </Section>

      {/* LEYENDA */}
      <Section tag="Leyenda" title="Cómo leer este wireframe">
        <div className="grid gap-3 md:grid-cols-3">
          <div className="space-y-2">
            <div className="wire-box h-16">Bloque gris</div>
            <p className="text-xs text-muted-foreground">Imagen, ícono o componente visual a definir.</p>
          </div>
          <div>
            <p className="wire-note">Nota SEO o instrucción técnica para el desarrollador.</p>
          </div>
          <div>
            <p className="wire-alt">Sugerencia de imagen + alt text recomendado.</p>
          </div>
        </div>
      </Section>

      <footer className="border-t border-border py-6 text-center text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
        Fin del wireframe · v1
      </footer>
    </div>
  );
};

export default Index;
