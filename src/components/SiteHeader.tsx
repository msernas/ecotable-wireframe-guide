import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const mainLinks = [
  { to: "/", label: "Inicio", mega: null },
  {
    to: "/catalogo",
    label: "Productos",
    mega: {
      cols: [
        { title: "Por categoría", items: ["Contenedores", "Vasos", "Cubiertos", "Platos", "Bolsas", "Complementarios"] },
        { title: "Por material", items: ["Bagazo de trigo", "PLA", "Fécula de maíz", "Bolsas compostables", "Papel + PLA"] },
        { title: "Más vendidos", items: ["Vaso 12oz bagazo", "Plato 9'' fécula", "Cubiertos PLA", "Bowl 32oz", "Bolsa T-shirt 30L"] },
      ],
      featured: { title: "Catálogo 2026", desc: "Descarga el catálogo completo en PDF" },
    },
  },
  {
    to: "/sectores",
    label: "Sectores",
    mega: {
      cols: [
        { title: "Industrias", items: ["Hoteles", "Cafeterías", "Empresas de empaque", "Hospitales", "Comedores industriales"] },
        { title: "Casos de éxito", items: ["Cadena hotelera nacional", "Hospital privado", "Café especialidad", "Comedor 5,000 empleados"] },
      ],
      featured: { title: "Solución a la medida", desc: "Diagnóstico gratuito para tu operación" },
    },
  },
  { to: "/nosotros", label: "Nosotros", mega: null },
  { to: "/contacto", label: "Contacto", mega: null },
];

const WaIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const SiteHeader = () => {
  const [openMega, setOpenMega] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-foreground focus:px-3 focus:py-2 focus:text-xs focus:text-background">
        Saltar al contenido principal
      </a>

      {/* Top utility bar */}
      <div className="hidden md:block" style={{ background: "#40513b", borderBottom: "1px solid #334430" }}>
        <div className="container flex h-8 items-center justify-between text-[11px]" style={{ color: "#c8d9b8" }}>
          <span style={{ color: "#a8c990" }}>📦 Pedido mínimo $5,000 MXN · Entrega nacional · Muestras gratis para nuevos clientes</span>
          <div className="flex items-center gap-4">
            <Link to="/contacto" className="hover:text-white transition-colors">Distribuidores</Link>
            <span style={{ opacity: 0.3 }}>|</span>
            <a href="https://wa.me/521XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <WaIcon /> WhatsApp B2B
            </a>
          </div>
        </div>
      </div>

      <header
        className="sticky top-0 z-50 transition-all duration-200"
        style={{
          background: "#e5d9b6",
          borderBottom: `1px solid ${scrolled ? "#c0b898" : "#d0c8a8"}`,
          boxShadow: scrolled ? "0 2px 16px rgba(31,38,29,0.10)" : "none",
        }}
        onMouseLeave={() => setOpenMega(null)}
      >
        <div className="container flex h-16 items-center justify-between gap-4">

          {/* Logo */}
          <Link to="/" aria-label="Renovapack inicio" className="flex items-center shrink-0">
            <img src="/logo-sand.svg" alt="Renovapack" style={{ height: "36px", width: "auto", background: "transparent" }} />
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Principal" className="hidden md:flex items-center gap-0">
            {mainLinks.map((l) => (
              <div key={l.to} onMouseEnter={() => setOpenMega(l.mega ? l.to : null)}>
                <NavLink
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    `inline-flex h-16 items-center gap-1 px-4 text-[13px] font-medium tracking-wide transition-colors ${
                      isActive ? "border-b-2 border-[#628141] text-[#1f261d]" : "text-[#40513b] hover:text-[#1f261d]"
                    }`
                  }
                >
                  {l.label}
                  {l.mega && (
                    <svg width="9" height="9" viewBox="0 0 10 10" fill="none" style={{ opacity: 0.45, marginTop: 1 }}>
                      <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </NavLink>
              </div>
            ))}
          </nav>

          {/* CTAs */}
          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/521XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex h-9 items-center gap-1.5 rounded px-3 text-[12px] font-medium transition-all hover:bg-[#d0c8a8]"
              style={{ color: "#40513b", border: "1px solid #a8a080" }}
            >
              <WaIcon /> WhatsApp
            </a>
            <Link
              to="/contacto"
              className="inline-flex h-9 items-center rounded px-4 text-[12px] font-semibold uppercase tracking-wider transition-opacity hover:opacity-90"
              style={{ background: "#e67e22", color: "#1f261d" }}
            >
              Cotizar
            </Link>
            {/* Mobile menu toggle */}
            <button
              className="md:hidden flex items-center justify-center w-9 h-9 rounded"
              style={{ color: "#40513b" }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menú"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                {mobileOpen
                  ? <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  : <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                }
              </svg>
            </button>
          </div>
        </div>

        {/* Mega menu */}
        {openMega && (() => {
          const link = mainLinks.find((l) => l.to === openMega);
          if (!link?.mega) return null;
          return (
            <div className="absolute left-0 right-0 shadow-xl" style={{ background: "#fffbf8", borderTop: "1px solid #d4caa8" }}>
              <div className="container grid gap-8 py-8 md:grid-cols-4">
                {link.mega.cols.map((col) => (
                  <div key={col.title} className="space-y-3">
                    <div className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#628141" }}>{col.title}</div>
                    <ul className="space-y-2">
                      {col.items.map((item) => (
                        <li key={item}>
                          <Link to={link.to} className="text-[13px] transition-colors hover:underline" style={{ color: "#40513b" }} onClick={() => setOpenMega(null)}>
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="rounded-lg p-4 space-y-2" style={{ background: "#e5d9b6" }}>
                  <div className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#628141" }}>Destacado</div>
                  <div className="text-[14px] font-semibold" style={{ color: "#1f261d" }}>{link.mega.featured.title}</div>
                  <div className="text-[12px]" style={{ color: "#40513b" }}>{link.mega.featured.desc}</div>
                  <Link to={link.to} className="inline-flex items-center gap-1 text-[12px] font-semibold mt-2 transition-opacity hover:opacity-75" style={{ color: "#e67e22" }} onClick={() => setOpenMega(null)}>
                    Ver más →
                  </Link>
                </div>
              </div>
            </div>
          );
        })()}

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t" style={{ background: "#fffbf8", borderColor: "#d4caa8" }}>
            <nav className="container py-4 space-y-1">
              {mainLinks.map((l) => (
                <Link key={l.to} to={l.to} className="block py-3 text-[14px] font-medium border-b" style={{ color: "#40513b", borderColor: "#e5d9b6" }} onClick={() => setMobileOpen(false)}>
                  {l.label}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-2">
                <a href="https://wa.me/521XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 h-10 rounded text-[13px] font-medium" style={{ color: "#40513b", border: "1px solid #a8a080" }}>
                  <WaIcon /> WhatsApp B2B
                </a>
                <Link to="/contacto" className="flex items-center justify-center h-10 rounded text-[13px] font-semibold uppercase tracking-wider" style={{ background: "#e67e22", color: "#1f261d" }} onClick={() => setMobileOpen(false)}>
                  Cotizar
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default SiteHeader;
