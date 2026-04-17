import { WireSection, Lines, PageBanner } from "@/components/wireframe/WireSection";
import { SeoTechBlock } from "@/components/wireframe/SeoTechBlock";

const sectores = [
  {
    name: "Hoteles",
    desc: "Coffee stations, room service, eventos y banquetes con vajilla compostable.",
  },
  {
    name: "Cafeterías",
    desc: "Vasos para bebidas frías y calientes, tapas, removedores y servilletas eco.",
  },
  {
    name: "Empresas de empaque",
    desc: "Insumos a granel para distribuidores y maquiladores de empaque sustentable.",
  },
  {
    name: "Hospitales",
    desc: "Charolas, contenedores y cubiertos seguros, higiénicos y biodegradables.",
  },
  {
    name: "Comedores industriales",
    desc: "Servicio diario de personal con platos, bowls y cubiertos compostables.",
  },
];

const Sectores = () => {
  return (
    <>
      <PageBanner
        breadcrumb="Inicio / Sectores"
        h1="Soluciones por sector"
        intro="Adaptamos nuestro catálogo a las necesidades operativas y normativas de cada industria."
      />

      {/* GRID DE SECTORES */}
      <WireSection tag="01 · Sectores" title="Tarjetas con foto + descripción + CTA">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sectores.map((s) => (
            <article key={s.name} className="space-y-3 rounded border border-border bg-card p-4">
              <div className="wire-box h-44">FOTO SECTOR</div>
              <h2 className="text-lg font-semibold">{s.name}</h2>
              <p className="text-xs text-muted-foreground">{s.desc}</p>
              <Lines count={2} widths={["100%", "70%"]} />
              <div className="wire-box h-9 !border-solid text-xs">Ver soluciones →</div>
            </article>
          ))}
        </div>
        <div className="mt-4 grid gap-2 md:grid-cols-2">
          <p className="wire-alt">
            IMÁGENES: foto realista por sector mostrando uso real del producto.
            Ej: "Servicio de café en hotel con vasos compostables", "Bandeja hospitalaria con
            contenedores de bagazo", "Línea de empaque con bolsas compostables".
          </p>
          <p className="wire-note">
            SEO · Cada sector con landing propia /sectores/[slug]. H1 enfocado en long-tail:
            "Desechables biodegradables para hoteles". Schema.org Service.
          </p>
        </div>
      </WireSection>

      {/* CASO DE USO DESTACADO */}
      <WireSection tag="02 · Caso destacado" title="Historia de cliente / caso de éxito">
        <div className="grid gap-6 rounded border border-border bg-card p-6 md:grid-cols-2">
          <div className="wire-box h-64">FOTO INSTALACIÓN CLIENTE</div>
          <div className="space-y-3">
            <div className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
              Caso de éxito
            </div>
            <h3 className="text-xl font-bold">Nombre del cliente / cadena</h3>
            <Lines count={4} />
            <div className="grid grid-cols-3 gap-3 pt-2">
              {["−40%", "+12k", "100%"].map((m, i) => (
                <div key={i} className="rounded border border-border p-3 text-center">
                  <div className="text-lg font-bold">{m}</div>
                  <div className="text-[10px] uppercase text-muted-foreground">métrica</div>
                </div>
              ))}
            </div>
            <div className="wire-box h-10 w-40 !border-solid text-xs">Leer caso completo</div>
          </div>
        </div>
        <p className="wire-alt mt-4">
          IMAGEN: foto del cliente real en su negocio usando los productos. Consentimiento de uso requerido.
          alt="Equipo de [cliente] sirviendo café en vasos compostables".
        </p>
      </WireSection>

      {/* PROCESO */}
      <WireSection tag="03 · Proceso B2B" title="Cómo trabajamos con cada sector">
        <div className="grid gap-4 md:grid-cols-4">
          {["1. Diagnóstico", "2. Propuesta", "3. Muestras", "4. Suministro"].map((p) => (
            <div key={p} className="space-y-2 rounded border border-border bg-card p-4 text-center">
              <div className="wire-box mx-auto h-14 w-14 rounded-full">{p.split(".")[0]}</div>
              <h3 className="text-sm font-semibold">{p}</h3>
              <Lines count={2} widths={["100%", "60%"]} />
            </div>
          ))}
        </div>
      </WireSection>

      <SeoTechBlock
        page="Sectores (/sectores)"
        title="Soluciones de desechables compostables por sector B2B | [Marca]"
        description="Soluciones de empaque biodegradable a medida para hoteles, cafeterías, hospitales, empaque y comedores industriales. Casos de éxito y catálogo por industria."
        h1="Soluciones por sector"
        schemas={[
          "BreadcrumbList",
          "ItemList con cada sector como Service",
          "Service por sector individual con areaServed y provider",
        ]}
        notes={[
          "Una landing por sector: /sectores/hoteles, /sectores/hospitales, etc.",
          "Long-tail keywords por sector ('desechables compostables para hospitales')",
          "Caso de éxito como Article + ítem dentro del Service",
        ]}
      />
    </>
  );
};

export default Sectores;
