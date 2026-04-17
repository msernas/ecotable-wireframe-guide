import { WireSection, Lines, PageBanner } from "@/components/wireframe/WireSection";
import { SeoTechBlock } from "@/components/wireframe/SeoTechBlock";

const Nosotros = () => {
  return (
    <>
      <PageBanner
        breadcrumb="Inicio / Nosotros"
        h1="Sobre [Marca]"
        intro="Comercializamos desechables biodegradables y compostables que reemplazan al plástico tradicional."
      />

      {/* HISTORIA */}
      <WireSection tag="01 · Historia" title="Quiénes somos">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-3">
            <Lines count={5} />
            <Lines count={3} widths={["100%", "85%", "60%"]} />
            <p className="wire-note">
              SEO · &lt;h2&gt; "Nuestra historia". Texto de 250-400 palabras con keyword
              "comercializadora de desechables biodegradables [ciudad/país]".
            </p>
          </div>
          <div className="space-y-3">
            <div className="wire-box h-72">FOTO EQUIPO / FUNDADOR</div>
            <p className="wire-alt">
              IMAGEN: foto del equipo o fundador en oficina/almacén, ambiente cálido y profesional.
              alt="Equipo fundador de [marca] en su almacén de productos biodegradables".
            </p>
          </div>
        </div>
      </WireSection>

      {/* MISIÓN / VISIÓN / VALORES */}
      <WireSection tag="02 · Misión, visión, valores" title="Pilares de la empresa">
        <div className="grid gap-4 md:grid-cols-3">
          {["Misión", "Visión", "Valores"].map((b) => (
            <div key={b} className="space-y-3 rounded border border-border bg-card p-5">
              <div className="wire-box h-12 w-12">ICO</div>
              <h3 className="text-base font-semibold">{b}</h3>
              <Lines count={4} />
            </div>
          ))}
        </div>
      </WireSection>

      {/* IMPACTO / CIFRAS */}
      <WireSection tag="03 · Impacto" title="Cifras de sustentabilidad">
        <div className="grid gap-4 md:grid-cols-4">
          {[
            { v: "2.5M+", l: "Productos entregados" },
            { v: "−85t", l: "CO₂ evitado" },
            { v: "+200", l: "Clientes activos" },
            { v: "5", l: "Estados con cobertura" },
          ].map((m) => (
            <div key={m.l} className="rounded border border-border bg-card p-5 text-center">
              <div className="text-2xl font-bold">{m.v}</div>
              <div className="mt-1 text-xs uppercase text-muted-foreground">{m.l}</div>
            </div>
          ))}
        </div>
        <p className="wire-note mt-4">
          SEO · Datos verificables. Considerar Schema.org Organization con foundingDate, numberOfEmployees.
        </p>
      </WireSection>

      {/* CERTIFICACIONES */}
      <WireSection tag="04 · Certificaciones" title="Avales internacionales">
        <div className="grid gap-4 md:grid-cols-4">
          {["TÜV OK Compost", "BPI", "FDA", "FSC"].map((c) => (
            <div key={c} className="space-y-2 rounded border border-border bg-card p-4 text-center">
              <div className="wire-box mx-auto h-20 w-20">LOGO</div>
              <h3 className="text-sm font-semibold">{c}</h3>
              <Lines count={2} widths={["100%", "70%"]} />
            </div>
          ))}
        </div>
        <p className="wire-alt mt-4">
          IMÁGENES: logos oficiales de certificaciones en SVG, fondo blanco.
          alt="Logo de certificación TÜV OK Compost".
        </p>
      </WireSection>

      {/* EQUIPO */}
      <WireSection tag="05 · Equipo" title="Personas detrás de la marca (opcional)">
        <div className="grid gap-4 md:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="space-y-2 rounded border border-border bg-card p-4 text-center">
              <div className="wire-box mx-auto h-32 w-32 rounded-full">FOTO</div>
              <h3 className="text-sm font-semibold">Nombre Apellido</h3>
              <div className="text-xs text-muted-foreground">Cargo</div>
            </div>
          ))}
        </div>
        <p className="wire-alt mt-4">
          IMÁGENES: retratos profesionales, fondo neutro, iluminación uniforme.
          alt="Retrato de [Nombre], [Cargo] en [Marca]".
        </p>
      </WireSection>

      {/* CTA */}
      <WireSection tag="06 · CTA" title="Conexión con catálogo / contacto">
        <div className="rounded border border-border bg-card p-8 text-center">
          <div className="mx-auto max-w-xl space-y-3">
            <h2 className="text-lg font-semibold">¿Listo para cambiar a desechables compostables?</h2>
            <div className="flex justify-center gap-3 pt-2">
              <div className="wire-box h-11 w-44 !border-solid">Ver catálogo</div>
              <div className="wire-box h-11 w-44">Contáctanos</div>
            </div>
          </div>
        </div>
      </WireSection>

      <SeoTechBlock
        page="Nosotros (/nosotros)"
        title="Sobre [Marca] · Comercializadora de desechables compostables en México"
        description="Conoce a [Marca]: misión, equipo y certificaciones. Comercializadora B2B de desechables biodegradables con cobertura nacional y compromiso con la economía circular."
        h1="Sobre [Marca]"
        schemas={[
          "Organization (foundingDate, numberOfEmployees, address, sameAs)",
          "AboutPage como tipo principal",
          "BreadcrumbList",
        ]}
        notes={[
          "Refuerza E-E-A-T: nombres reales, fotos del equipo, certificaciones verificables",
          "Vincular sameAs a LinkedIn corporativo, Instagram, Facebook",
          "Si hay piso de venta: agregar LocalBusiness con horarios",
        ]}
      />
    </>
  );
};

export default Nosotros;
