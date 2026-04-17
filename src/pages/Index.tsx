import { Link } from "react-router-dom";
import { WireSection, Lines } from "@/components/wireframe/WireSection";
import { SeoTechBlock } from "@/components/wireframe/SeoTechBlock";

const Index = () => {
  // Sectores priorizados según estrategia Cyan Media Lab: foco HORECA primero
  const sectores = [
    { name: "Hoteles", kw: "vajilla compostable hoteles · HORECA" },
    { name: "Restaurantes", kw: "empaque to-go biodegradable restaurantes" },
    { name: "Cafeterías", kw: "vasos compostables café especialidad" },
    { name: "Empresas de empaque", kw: "insumos compostables mayoreo distribuidor" },
    { name: "Hospitales y comedores", kw: "desechables compostables institucional" },
  ];

  // 4 verdades del workshop Cyan Media Lab
  const verdades = [
    { t: "Mercado saturado que diluye valor", d: "La industria del empaque ha crecido con baja diferenciación. Renovapack rompe la lógica del precio con valor integral." },
    { t: "Liderazgo construido, poco visible", d: "Pioneros con expertise sólido — recuperamos la voz que el mercado dejó de escuchar." },
    { t: "Entorno exigente y complejo", d: "Materiales sostenibles, regulaciones nuevas, alternativas múltiples. Necesitas un guía, no otro proveedor." },
    { t: "Brecha entre lo que somos y lo que decimos", d: "Tenemos la propuesta robusta; ahora la comunicamos clara, estructurada y consistente." },
  ];

  const stories = [
    { tag: "Caso de éxito HORECA", h: "Cadena hotelera reduce 40% de plástico de un solo uso con Renovapack", m: "5 min lectura" },
    { tag: "Insight", h: "Normativa 2026 de plásticos en México: lo que tu negocio HORECA debe saber", m: "8 min lectura" },
    { tag: "Producto · bioeco", h: "Nueva línea bioeco: vasos de bagazo con tapa 100% compostable", m: "Anuncio" },
  ];

  return (
    <>
      {/* HERO editorial — narrativa "El futuro se empaca distinto" */}
      <section className="border-b border-border bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container grid gap-8 py-20 md:grid-cols-[1.1fr_1fr] md:items-center">
          <div className="space-y-6">
            <div className="text-[11px] font-mono uppercase tracking-widest opacity-70">
              Renovapack · Soluciones de empaque B2B · HORECA
            </div>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              El futuro <br />se empaca <span className="text-accent">distinto.</span>
            </h1>
            <p className="max-w-xl text-base opacity-90 md:text-lg">
              Soluciones integrales en empaque desechable y biodegradable para hoteles, restaurantes y cafeterías. No solo entregamos producto — entregamos servicio, expertise y logística.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link to="/catalogo" className="inline-flex h-12 items-center gap-2 rounded bg-accent px-6 text-sm font-semibold uppercase tracking-wider text-accent-foreground hover:opacity-90">
                Explorar soluciones →
              </Link>
              <Link to="/contacto" className="inline-flex h-12 items-center gap-2 rounded border-2 border-primary-foreground/40 px-6 text-sm font-semibold uppercase tracking-wider hover:bg-primary-foreground/10">
                Solicitar cotización
              </Link>
            </div>
            <p className="wire-note !bg-primary-foreground/10 !text-primary-foreground/80 !border-accent">
              Estrategia Cyan Media Lab · H1 con tagline maestro "El futuro se empaca distinto" + sub-claim funcional. CTA primario al catálogo, secundario a cotización HORECA.
            </p>
          </div>
          <div className="space-y-3">
            <div className="wire-box aspect-[4/3] !bg-primary-foreground/10 !border-primary-foreground/30 !text-primary-foreground/70">
              IMAGEN HERO — HORECA + EMPAQUE
            </div>
            <p className="wire-alt !bg-primary-foreground/10 !text-primary-foreground/80 !border-accent">
              IMAGEN: foto editorial de mesa de hotel/restaurante o coffee station con vasos bioeco, contenedores compostables. Estética cálida, luz natural. Evitar stock genérico — fotografía propia con clientes reales.
            </p>
            <p className="wire-alt !bg-primary-foreground/10 !text-primary-foreground/80 !border-accent">
              alt="Servicio HORECA con empaque biodegradable Renovapack: vasos bioeco, contenedores compostables y cubiertos de PLA"
            </p>
          </div>
        </div>
      </section>

      {/* QUOTE INSIGHT — del workshop Cyan Media Lab */}
      <section className="border-b border-border bg-background py-14">
        <div className="container max-w-4xl text-center space-y-4">
          <div className="text-[11px] font-mono uppercase tracking-widest text-accent">
            Insight Cyan Media Lab · Workshop Renovapack
          </div>
          <blockquote className="text-2xl font-semibold leading-snug text-primary md:text-3xl">
            "Hay clientes que nos dejan por precio<br />y regresan por servicio."
          </blockquote>
          <div className="text-xs uppercase tracking-widest text-muted-foreground">— Equipo Renovapack</div>
        </div>
      </section>

      {/* BANDA DE CIFRAS */}
      <section className="border-b border-border bg-primary py-12 text-primary-foreground">
        <div className="container grid gap-8 md:grid-cols-4">
          {[
            { v: "2.5M+", l: "Productos entregados al año" },
            { v: "−85t", l: "CO₂ evitado vs plástico tradicional" },
            { v: "200+", l: "Clientes B2B activos" },
            { v: "100%", l: "Materiales bioeco certificados" },
          ].map((m) => (
            <div key={m.l} className="space-y-1">
              <div className="text-3xl font-bold md:text-4xl text-accent">{m.v}</div>
              <div className="text-xs uppercase tracking-wider opacity-80">{m.l}</div>
            </div>
          ))}
        </div>
        <p className="container mt-6 text-[11px] font-mono uppercase tracking-widest opacity-60">
          SEO · Cifras verificables Renovapack refuerzan E-E-A-T
        </p>
      </section>

      {/* DIFERENCIADORES — "Somos el Expedia de los desechables" */}
      <WireSection tag="01 · Diferenciadores" title="Lo que solo Renovapack hace por ti">
        <div className="mb-6 max-w-3xl">
          <p className="text-lg italic text-muted-foreground">
            "Somos el Expedia de los desechables." — un solo aliado, todas las soluciones, llegamos lejos y rápido.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { i: "01", t: "Solución integral", d: "Materiales, operación y logística en una sola conversación. No coordinas 5 proveedores — coordinas a Renovapack." },
            { i: "02", t: "Expertise gurú", d: "Más de [X] años traduciendo normativas, certificaciones y materiales en decisiones operables para tu negocio." },
            { i: "03", t: "Amplio inventario", d: "Catálogo profundo en categorías, materiales y presentaciones. Cumples con cualquier especificación HORECA." },
            { i: "04", t: "Llegamos lejos, rápido", d: "Cobertura nacional con tiempos confiables. Tu operación no se detiene esperando empaque." },
            { i: "05", t: "Aliados estratégicos", d: "No vendemos cajas — construimos relación. Asesor dedicado, planeación de consumo, alertas de inventario." },
            { i: "06", t: "Servicio que regresa", d: "Cuando te vas por precio, regresas por servicio. La promesa Renovapack está en cómo trabajamos contigo." },
          ].map((d) => (
            <div key={d.i} className="space-y-2 rounded border border-border bg-card p-5">
              <div className="text-2xl font-bold text-accent">{d.i}</div>
              <h3 className="text-base font-semibold text-primary">{d.t}</h3>
              <p className="text-sm text-muted-foreground">{d.d}</p>
            </div>
          ))}
        </div>
        <p className="wire-note mt-4">
          Estrategia · Diferenciadores extraídos del workshop Cyan Media Lab. Cada bloque traduce un atributo identificado por el equipo Renovapack en mensaje cliente.
        </p>
      </WireSection>

      {/* SECTORES — HORECA primero */}
      <WireSection tag="02 · Sectores" title="Especializados en HORECA + B2B industrial">
        <div className="grid gap-3 md:grid-cols-5">
          {sectores.map((s) => (
            <Link
              key={s.name}
              to="/sectores"
              className="group space-y-2 rounded border border-border bg-card p-3 transition-colors hover:border-accent hover:bg-muted/40"
            >
              <div className="wire-box aspect-[4/3]">FOTO SECTOR</div>
              <div className="text-sm font-semibold text-primary">{s.name}</div>
              <div className="text-[10px] text-muted-foreground">→ {s.kw}</div>
            </Link>
          ))}
        </div>
        <p className="wire-note mt-4">
          Estrategia · HORECA es target prioritario según Cyan Media Lab. Hoteles, restaurantes y cafeterías ocupan 3 de las 5 tarjetas. Hospitales y comedores quedan en sector industrial agrupado.
        </p>
      </WireSection>

      {/* CATÁLOGO + LÍNEA BIOECO */}
      <WireSection tag="03 · Catálogo" title="Soluciones por categoría · línea bioeco compostable">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded border border-border bg-card p-5">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-base font-semibold text-primary">Por categoría</h3>
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
          <div className="rounded border-2 border-accent bg-card p-5">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-accent">Sub-marca</div>
                <h3 className="text-base font-semibold text-primary">bioeco · biodegradables</h3>
              </div>
              <Link to="/catalogo" className="text-xs underline">Ver línea →</Link>
            </div>
            <p className="mb-3 text-xs text-muted-foreground">
              Línea de desechables 100% compostables certificados. Bagazo, PLA, fécula y papel + PLA.
            </p>
            <ul className="space-y-2">
              {["Bagazo de trigo", "PLA (ácido poliláctico)", "Fécula de maíz", "Bolsas compostables", "Papel laminado con PLA"].map((m) => (
                <li key={m}>
                  <Link to="/catalogo" className="flex items-center justify-between rounded border border-border p-3 hover:border-accent hover:bg-muted/40">
                    <div className="flex items-center gap-3">
                      <div className="wire-box h-10 w-10 text-[9px]">M</div>
                      <span className="text-sm font-medium">{m}</span>
                    </div>
                    <span className="text-accent">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="wire-note mt-4">
          Estrategia · La sub-marca bioeco (mencionada en p.30 propuesta Cyan Media Lab) se destaca con borde acento. Permite arquitectura de marca: Renovapack (paraguas) → bioeco (línea sustentable).
        </p>
      </WireSection>

      {/* CONTEXTO — 4 verdades del mercado */}
      <section className="border-y border-border bg-muted/40 py-14">
        <div className="container space-y-8">
          <div className="max-w-2xl space-y-3">
            <div className="text-[11px] font-mono uppercase tracking-widest text-accent">
              Por qué cambiar ahora
            </div>
            <h2 className="text-2xl font-bold text-primary md:text-3xl">
              El reto no es lo que hacemos.<br />Es cómo el mercado dejó de verlo.
            </h2>
            <p className="text-sm text-muted-foreground">
              4 verdades que identificamos con el equipo Renovapack — y que nuestra comunicación 2026 viene a resolver.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {verdades.map((v, i) => (
              <div key={v.t} className="space-y-2 rounded border border-border bg-card p-5">
                <div className="text-xs font-mono text-accent">0{i + 1}</div>
                <h3 className="text-base font-semibold text-primary">{v.t}</h3>
                <p className="text-sm text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESO B2B */}
      <WireSection tag="04 · Proceso" title="Cómo trabajamos contigo">
        <div className="grid gap-4 md:grid-cols-4">
          {[
            { n: "01", t: "Diagnóstico", d: "Analizamos tu operación, volúmenes y normativa aplicable" },
            { n: "02", t: "Propuesta", d: "Mix de productos Renovapack + bioeco con cotización por volumen" },
            { n: "03", t: "Muestras", d: "Validas calidad con muestras gratis antes de comprar" },
            { n: "04", t: "Suministro", d: "Entrega recurrente nacional con asesor dedicado" },
          ].map((p) => (
            <div key={p.n} className="space-y-3 rounded border border-border bg-card p-5">
              <div className="text-3xl font-bold text-accent">{p.n}</div>
              <h3 className="text-base font-semibold text-primary">{p.t}</h3>
              <p className="text-xs text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </WireSection>

      {/* STORY CARDS */}
      <WireSection tag="05 · Insights & Casos" title="Lo último de Renovapack">
        <div className="grid gap-5 md:grid-cols-3">
          {stories.map((s) => (
            <article key={s.h} className="group space-y-3 rounded border border-border bg-card overflow-hidden">
              <div className="wire-box aspect-[16/10] !rounded-none">IMAGEN HISTORIA</div>
              <div className="space-y-2 p-4">
                <div className="text-[10px] font-mono uppercase tracking-widest text-accent">
                  {s.tag} · {s.m}
                </div>
                <h3 className="text-base font-semibold leading-snug text-primary">{s.h}</h3>
                <Lines count={2} widths={["100%", "70%"]} />
                <Link to="/blog" className="text-xs font-medium text-accent underline">Leer más →</Link>
              </div>
            </article>
          ))}
        </div>
      </WireSection>

      {/* CONFIANZA */}
      <WireSection tag="06 · Confianza" title="Marcas HORECA que confían en Renovapack">
        <div className="grid grid-cols-3 gap-3 md:grid-cols-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="wire-box h-16 text-[10px]">LOGO {i + 1}</div>
          ))}
        </div>
      </WireSection>

      {/* CTA FINAL — tagline */}
      <section className="border-t border-border bg-primary py-16 text-primary-foreground">
        <div className="container grid gap-6 md:grid-cols-[1.5fr_1fr] md:items-center">
          <div className="space-y-3">
            <div className="text-[11px] font-mono uppercase tracking-widest text-accent">Renovapack 2026</div>
            <h2 className="text-3xl font-bold md:text-4xl">
              El futuro se empaca distinto.<br />Empieza hoy con un diagnóstico gratis.
            </h2>
            <p className="text-sm opacity-80">
              Muestras sin costo + propuesta por volumen para tu primera operación HORECA.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link to="/contacto" className="inline-flex h-12 flex-1 items-center justify-center rounded bg-accent px-6 text-sm font-semibold uppercase tracking-wider text-accent-foreground hover:opacity-90">
              Solicitar cotización
            </Link>
            <Link to="/catalogo" className="inline-flex h-12 flex-1 items-center justify-center rounded border-2 border-primary-foreground/40 px-6 text-sm font-semibold uppercase tracking-wider hover:bg-primary-foreground/10">
              Ver catálogo
            </Link>
          </div>
        </div>
      </section>

      <SeoTechBlock
        page="Inicio (/)"
        title="Renovapack · Empaque biodegradable B2B HORECA en México"
        description="El futuro se empaca distinto. Renovapack: solución integral de empaque desechable y biodegradable bioeco para hoteles, restaurantes, cafeterías y empresas. Cotización B2B nacional."
        h1="El futuro se empaca distinto"
        schemas={[
          "Organization (Renovapack — logo, address, sameAs, contactPoint)",
          "Brand (sub-marca bioeco como Brand anidada)",
          "WebSite (potentialAction SearchAction)",
          "BreadcrumbList",
          "ItemList (sectores HORECA + categorías)",
        ]}
        notes={[
          "Tagline maestro 'El futuro se empaca distinto' como H1 + slogan en og:title",
          "Foco SEO HORECA: keywords 'empaque biodegradable hoteles', 'desechables compostables restaurantes', 'vasos compostables cafetería'",
          "Hreflang: es-MX (default), es, en con x-default a es-MX",
          "Imagen LCP del hero precargada + width/height explícitos",
          "Brand Story estructurada: contexto → 4 verdades → diferenciadores → tagline",
        ]}
      />
    </>
  );
};

export default Index;
