import { Link } from "react-router-dom";
import { WireSection, Lines, PageBanner } from "@/components/wireframe/WireSection";
import { SeoTechBlock } from "@/components/wireframe/SeoTechBlock";

const Nosotros = () => {
  return (
    <>
      <PageBanner
        breadcrumb="Inicio / Nosotros"
        h1="Renovapack · El futuro se empaca distinto"
        intro="Solución integral de empaque desechable y biodegradable para HORECA y B2B en México. No vendemos cajas — entregamos servicio, expertise y aliados estratégicos."
      />

      {/* BRAND STORY — narrativa Cyan Media Lab */}
      <section className="border-b border-border bg-gradient-to-br from-primary/5 to-accent/5 py-16">
        <div className="container max-w-4xl space-y-8">
          <div className="text-center space-y-3">
            <div className="text-[11px] font-mono uppercase tracking-widest text-accent">
              Brand Story Renovapack
            </div>
            <h2 className="text-3xl font-bold text-primary md:text-4xl">Nuestra historia</h2>
          </div>

          <div className="space-y-6 text-base leading-relaxed text-foreground">
            <p className="text-xl font-medium text-primary">
              Entre tantas opciones, materiales y promesas, es difícil elegir.
            </p>
            <p>
              La industria del empaque ha crecido aceleradamente. La demanda de soluciones sustentables aumenta cada día, las regulaciones cambian y aparecen materiales nuevos cada mes. Para un hotel, una cafetería o un restaurante, decidir qué empaque comprar dejó de ser una decisión simple — se convirtió en un problema operativo, financiero y reputacional.
            </p>
            <p>
              <strong className="text-primary">En Renovapack entendimos que el cambio no era una tendencia, era una necesidad.</strong> Por eso construimos algo que no existía: una solución integral donde el material, la operación y la logística viven en una sola conversación. Donde no eliges entre precio o servicio. Donde tu proveedor entiende tu sector.
            </p>
            <p>
              Cuando el mercado entero compite por precio, nosotros competimos por valor. Cuando otros entregan cajas, nosotros entregamos relaciones. Cuando hay confusión, ofrecemos guía.
            </p>
            <p className="renovapack-tagline text-2xl md:text-3xl pt-4 text-center">
              El futuro se empaca distinto.
            </p>
          </div>
        </div>
      </section>

      {/* QUOTE INTERNO */}
      <section className="border-b border-border bg-primary py-12 text-primary-foreground">
        <div className="container max-w-3xl text-center space-y-3">
          <blockquote className="text-2xl font-semibold leading-snug md:text-3xl">
            "Hay clientes que nos dejan por precio<br />y regresan por servicio."
          </blockquote>
          <div className="text-xs uppercase tracking-widest text-accent">— Equipo Renovapack · Workshop 2026</div>
        </div>
      </section>

      {/* MISIÓN / VISIÓN / VALORES — extraídos de propuesta */}
      <WireSection tag="01 · Pilares" title="Misión, visión y valores Renovapack">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              t: "Misión",
              d: "Acompañar a empresas HORECA y B2B en su transición hacia empaques responsables, integrando producto, expertise y logística en una sola solución confiable.",
            },
            {
              t: "Visión",
              d: "Ser la marca líder y referente en soluciones de empaque desechable y biodegradable en México, reconocida por reposicionar el valor por encima del precio.",
            },
            {
              t: "Valores",
              d: "Sustentable · Confianza · Solución · Diversidad · Logística · Innovación · Servicio · Sólido. Los 8 pilares de marca extraídos del workshop Cyan Media Lab.",
            },
          ].map((b) => (
            <div key={b.t} className="space-y-3 rounded border border-border bg-card p-5">
              <div className="text-3xl font-bold text-accent">·</div>
              <h3 className="text-lg font-semibold text-primary">{b.t}</h3>
              <p className="text-sm text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </WireSection>

      {/* ARQUITECTURA DE MARCA — Renovapack + bioeco */}
      <WireSection tag="02 · Arquitectura de marca" title="Renovapack y la sub-marca bioeco">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded border-2 border-primary bg-card p-6 space-y-3">
            <div className="text-[10px] font-mono uppercase tracking-widest text-primary">Marca paraguas</div>
            <h3 className="text-2xl font-bold text-primary">Renovapack</h3>
            <p className="text-sm text-muted-foreground">
              Solución integral de empaque desechable B2B. Cubre todo el catálogo de productos: contenedores, vasos, platos, cubiertos, bolsas y complementarios — en materiales convencionales y sustentables.
            </p>
            <div className="text-xs text-muted-foreground italic pt-2">
              Color principal: #004e64 (Innovación)
            </div>
          </div>
          <div className="rounded border-2 border-accent bg-card p-6 space-y-3">
            <div className="text-[10px] font-mono uppercase tracking-widest text-accent">Sub-marca</div>
            <h3 className="text-2xl font-bold text-accent">bioeco</h3>
            <p className="text-sm text-muted-foreground">
              Línea de desechables 100% biodegradables y compostables certificados (TÜV OK Compost, BPI). Bagazo de trigo, PLA, fécula de maíz, papel + PLA y bolsas compostables.
            </p>
            <div className="text-xs text-muted-foreground italic pt-2">
              Color acento: #e67e22 (Dinámico)
            </div>
          </div>
        </div>
        <p className="wire-note mt-4">
          Estrategia · Arquitectura "marca + sub-marca" extraída de la propuesta Cyan Media Lab (p.30). Renovapack como solución integral, bioeco como línea sustentable diferenciada visualmente.
        </p>
      </WireSection>

      {/* IMPACTO */}
      <WireSection tag="03 · Impacto" title="Cifras que validan el liderazgo">
        <div className="grid gap-4 md:grid-cols-4">
          {[
            { v: "2.5M+", l: "Productos entregados" },
            { v: "−85t", l: "CO₂ evitado" },
            { v: "+200", l: "Clientes HORECA activos" },
            { v: "32", l: "Estados con cobertura" },
          ].map((m) => (
            <div key={m.l} className="rounded border border-border bg-card p-5 text-center">
              <div className="text-3xl font-bold text-accent">{m.v}</div>
              <div className="mt-1 text-xs uppercase text-muted-foreground">{m.l}</div>
            </div>
          ))}
        </div>
      </WireSection>

      {/* CERTIFICACIONES */}
      <WireSection tag="04 · Certificaciones" title="Avales internacionales línea bioeco">
        <div className="grid gap-4 md:grid-cols-4">
          {["TÜV OK Compost", "BPI", "FDA", "FSC"].map((c) => (
            <div key={c} className="space-y-2 rounded border border-border bg-card p-4 text-center">
              <div className="wire-box mx-auto h-20 w-20">LOGO</div>
              <h3 className="text-sm font-semibold text-primary">{c}</h3>
              <Lines count={2} widths={["100%", "70%"]} />
            </div>
          ))}
        </div>
      </WireSection>

      {/* EQUIPO */}
      <WireSection tag="05 · Equipo" title="Personas detrás de Renovapack">
        <div className="grid gap-4 md:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="space-y-2 rounded border border-border bg-card p-4 text-center">
              <div className="wire-box mx-auto h-32 w-32 rounded-full">FOTO</div>
              <h3 className="text-sm font-semibold text-primary">Nombre Apellido</h3>
              <div className="text-xs text-muted-foreground">Cargo</div>
            </div>
          ))}
        </div>
      </WireSection>

      {/* CTA */}
      <section className="border-t border-border bg-primary py-14 text-primary-foreground">
        <div className="container max-w-3xl text-center space-y-4">
          <h2 className="text-2xl font-bold md:text-3xl">¿Listo para empacar distinto?</h2>
          <p className="text-sm opacity-80">
            Conversa con un asesor Renovapack y descubre cómo podemos integrarnos a tu operación.
          </p>
          <div className="flex justify-center gap-3 pt-2">
            <Link to="/catalogo" className="inline-flex h-11 items-center rounded border-2 border-primary-foreground/40 px-5 text-sm font-semibold uppercase tracking-wider hover:bg-primary-foreground/10">
              Ver catálogo
            </Link>
            <Link to="/contacto" className="inline-flex h-11 items-center rounded bg-accent px-5 text-sm font-semibold uppercase tracking-wider text-accent-foreground hover:opacity-90">
              Hablar con un asesor
            </Link>
          </div>
        </div>
      </section>

      <SeoTechBlock
        page="Nosotros (/nosotros)"
        title="Renovapack · Solución integral de empaque B2B en México"
        description="Conoce a Renovapack: brand story, misión, sub-marca bioeco y equipo. Empaque biodegradable y desechable para HORECA. El futuro se empaca distinto."
        h1="Renovapack · El futuro se empaca distinto"
        schemas={[
          "Organization (Renovapack — foundingDate, address, sameAs)",
          "Brand (Renovapack como Brand principal, bioeco como Brand anidada)",
          "AboutPage como tipo principal",
          "BreadcrumbList",
        ]}
        notes={[
          "Brand story sigue estructura del deck Cyan Media Lab: contexto → necesidad → solución → tagline",
          "Refuerza E-E-A-T con datos verificables, equipo nombrado y certificaciones",
          "Vincular sameAs a LinkedIn corporativo Renovapack, Instagram, Facebook",
          "Enlazar arquitectura de marca a /sub-marca/bioeco (futura página dedicada)",
        ]}
      />
    </>
  );
};

export default Nosotros;
