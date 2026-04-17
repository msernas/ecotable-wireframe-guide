import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

const mainLinks = [
  {
    to: "/catalogo",
    label: "Productos",
    mega: {
      cols: [
        {
          title: "Por categoría",
          items: ["Contenedores", "Vasos", "Cubiertos", "Platos", "Bolsas", "Complementarios"],
        },
        {
          title: "Por material",
          items: ["Bagazo de trigo", "PLA", "Fécula de maíz", "Bolsas compostables", "Papel + PLA"],
        },
        {
          title: "Más vendidos",
          items: ["Vaso 12oz bagazo", "Plato 9'' fécula", "Cubiertos PLA", "Bowl 32oz", "Bolsa T-shirt 30L"],
        },
      ],
      featured: { title: "Catálogo 2026", desc: "Descarga el catálogo completo en PDF" },
    },
  },
  {
    to: "/sectores",
    label: "Sectores",
    mega: {
      cols: [
        {
          title: "Industrias",
          items: ["Hoteles", "Cafeterías", "Empresas de empaque", "Hospitales", "Comedores industriales"],
        },
        {
          title: "Casos de éxito",
          items: ["Cadena hotelera nacional", "Hospital privado", "Café especialidad", "Comedor 5,000 empleados"],
        },
      ],
      featured: { title: "Solución a la medida", desc: "Diagnóstico gratuito para tu operación" },
    },
  },
  {
    to: "/sustentabilidad",
    label: "Sustentabilidad",
    mega: null,
  },
  {
    to: "/nosotros",
    label: "Nosotros",
    mega: null,
  },
  {
    to: "/contacto",
    label: "Contacto",
    mega: null,
  },
];

const SiteHeader = () => {
  const [openMega, setOpenMega] = useState<string | null>(null);

  return (
    <>
      {/* Skip to content — accesibilidad y SEO */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-foreground focus:px-3 focus:py-2 focus:text-xs focus:text-background"
      >
        Saltar al contenido principal
      </a>

      {/* Top utility bar — estilo Siemens / ABB */}
      <div className="hidden border-b border-border bg-muted/60 md:block">
        <div className="container flex h-9 items-center justify-end gap-5 text-[11px] text-muted-foreground">
          <Link to="/blog" className="hover:text-foreground">Blog & Recursos</Link>
          <Link to="/sustentabilidad" className="hover:text-foreground">Sustentabilidad</Link>
          <Link to="/recomendaciones-tecnicas" className="hover:text-foreground">Stack técnico</Link>
          <Link to="/seo-keywords" className="hover:text-foreground">SEO keywords</Link>
          <Link to="/inversionistas" className="hover:text-foreground">Distribuidores</Link>
          <Link to="/prensa" className="hover:text-foreground">Prensa</Link>
          <span className="h-4 w-px bg-border" />
          <button className="flex items-center gap-1 hover:text-foreground" aria-label="Selector de región e idioma">
            <span>🌐</span> México · ES ▾
          </button>
          <button className="flex items-center gap-1 hover:text-foreground" aria-label="Buscar">
            🔍 Buscar
          </button>
        </div>
      </div>

      <header
        className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur"
        onMouseLeave={() => setOpenMega(null)}
      >
        <div className="container flex h-16 items-center justify-between gap-4">
          <Link to="/" aria-label="Inicio Renovapack" className="flex h-10 items-center px-3 font-bold text-primary text-lg tracking-tight">
            renovapack<span className="text-accent">®</span>
          </Link>
          <nav aria-label="Principal" className="hidden gap-1 md:flex">
            {mainLinks.map((l) => (
              <div
                key={l.to}
                onMouseEnter={() => setOpenMega(l.mega ? l.to : null)}
              >
                <NavLink
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    `inline-flex h-16 items-center px-3 text-xs font-medium uppercase tracking-wider transition-colors ${
                      isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`
                  }
                >
                  {l.label}
                  {l.mega && <span className="ml-1 text-[8px]">▾</span>}
                </NavLink>
              </div>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link to="/contacto" className="inline-flex h-9 items-center rounded bg-accent px-4 text-xs font-semibold uppercase tracking-wider text-accent-foreground hover:opacity-90">
              Cotizar
            </Link>
          </div>
        </div>

        {/* Mega menu panel */}
        {openMega &&
          (() => {
            const link = mainLinks.find((l) => l.to === openMega);
            if (!link?.mega) return null;
            return (
              <div className="absolute left-0 right-0 border-t border-border bg-background shadow-lg">
                <div className="container grid gap-8 py-8 md:grid-cols-4">
                  {link.mega.cols.map((c) => (
                    <div key={c.title} className="space-y-2">
                      <div className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                        {c.title}
                      </div>
                      <ul className="space-y-1.5 text-sm">
                        {c.items.map((i) => (
                          <li key={i}>
                            <Link to={link.to} className="hover:underline">
                              {i}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <div className="rounded border border-border bg-muted/40 p-4">
                    <div className="wire-box mb-3 h-24">IMAGEN DESTACADA</div>
                    <div className="text-sm font-semibold">{link.mega.featured.title}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{link.mega.featured.desc}</div>
                    <div className="wire-box mt-3 h-8 !border-solid text-[11px]">Ver más →</div>
                  </div>
                </div>
                <p className="container pb-3 wire-note">
                  SEO · Mega-menú con &lt;ul&gt; semánticos. Enlaces internos profundos mejoran crawl-depth
                  y distribución de PageRank hacia categorías clave.
                </p>
              </div>
            );
          })()}
      </header>
    </>
  );
};

export default SiteHeader;
