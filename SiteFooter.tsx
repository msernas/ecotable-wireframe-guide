import { Link } from "react-router-dom";

const cols = [
  {
    title: "Productos",
    items: [
      { label: "Contenedores", to: "/catalogo" },
      { label: "Vasos", to: "/catalogo" },
      { label: "Cubiertos", to: "/catalogo" },
      { label: "Platos", to: "/catalogo" },
      { label: "Bolsas compostables", to: "/catalogo" },
      { label: "Complementarios", to: "/catalogo" },
    ],
  },
  {
    title: "Materiales",
    items: [
      { label: "Bagazo de trigo", to: "/catalogo" },
      { label: "PLA", to: "/catalogo" },
      { label: "Fécula de maíz", to: "/catalogo" },
      { label: "Bolsas compostables", to: "/catalogo" },
      { label: "Papel + PLA", to: "/catalogo" },
    ],
  },
  {
    title: "Sectores",
    items: [
      { label: "Hoteles", to: "/sectores" },
      { label: "Cafeterías", to: "/sectores" },
      { label: "Empresas de empaque", to: "/sectores" },
      { label: "Hospitales", to: "/sectores" },
      { label: "Comedores industriales", to: "/sectores" },
    ],
  },
  {
    title: "Empresa",
    items: [
      { label: "Nosotros", to: "/nosotros" },
      { label: "Sustentabilidad", to: "/nosotros" },
      { label: "Blog & Recursos", to: "/" },
      { label: "Distribuidores", to: "/contacto" },
      { label: "Prensa", to: "/contacto" },
    ],
  },
  {
    title: "Soporte",
    items: [
      { label: "Contacto", to: "/contacto" },
      { label: "Solicitar muestras", to: "/contacto" },
      { label: "Preguntas frecuentes", to: "/catalogo" },
      { label: "WhatsApp B2B", to: "/contacto" },
    ],
  },
];

const certs = ["TÜV OK Compost", "BPI", "FSC", "FDA", "ISO 14001"];

const SiteFooter = () => (
  <footer style={{ background: "#1f261d", color: "#c8d9b8" }}>

    {/* CTA bar */}
    <div style={{ borderBottom: "1px solid #2e3a2b" }}>
      <div className="container grid gap-6 py-10 md:grid-cols-[1.4fr_1fr] md:items-center">
        <div className="space-y-1">
          <div className="text-[11px] font-mono uppercase tracking-widest" style={{ color: "#628141" }}>
            Renovapack · Soluciones B2B
          </div>
          <h2 className="text-xl font-semibold" style={{ color: "#fffbf8" }}>
            Recibe insights de empaque sustentable
          </h2>
          <p className="text-[13px]" style={{ color: "#8aab7a" }}>
            Tendencias, normativa y casos de éxito B2B una vez al mes. Sin spam.
          </p>
        </div>
        <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="tu@empresa.com"
            className="flex-1 h-10 rounded px-3 text-[13px] outline-none"
            style={{ background: "#2e3a2b", border: "1px solid #3d4e3a", color: "#fffbf8" }}
          />
          <button
            type="submit"
            className="h-10 px-4 rounded text-[12px] font-semibold uppercase tracking-wider transition-opacity hover:opacity-90"
            style={{ background: "#628141", color: "#fffbf8" }}
          >
            Suscribir
          </button>
        </form>
      </div>
    </div>

    {/* Main columns */}
    <div className="container grid gap-8 py-12 md:grid-cols-6">
      {/* Brand col */}
      <div className="space-y-4 md:col-span-1">
        <img src="/logo-dark.png" alt="Renovapack" className="h-8 w-auto object-contain" />
        <p className="text-[12px] leading-relaxed" style={{ color: "#8aab7a" }}>
          El futuro se empaca diferente. Pioneros en empaque desechable y biodegradable para HORECA y B2B en México.
        </p>
        <div className="flex gap-2 pt-1">
          {["in", "f", "ig", "yt"].map((s) => (
            <a key={s} href="#" className="flex items-center justify-center w-8 h-8 rounded text-[11px] font-bold uppercase transition-colors hover:bg-[#2e3a2b]" style={{ border: "1px solid #3d4e3a", color: "#8aab7a" }}>
              {s}
            </a>
          ))}
        </div>
      </div>

      {/* Link columns */}
      {cols.map((col) => (
        <nav key={col.title} aria-label={col.title} className="space-y-3">
          <div className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#628141" }}>
            {col.title}
          </div>
          <ul className="space-y-2">
            {col.items.map((item) => (
              <li key={item.label}>
                <Link to={item.to} className="text-[12px] transition-colors hover:text-white" style={{ color: "#8aab7a" }}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ))}
    </div>

    {/* Certifications */}
    <div style={{ borderTop: "1px solid #2e3a2b", borderBottom: "1px solid #2e3a2b" }}>
      <div className="container flex flex-wrap items-center justify-center gap-6 py-5">
        <span className="text-[10px] uppercase tracking-widest" style={{ color: "#4a6045" }}>Certificados por</span>
        {certs.map((c) => (
          <div key={c} className="flex items-center justify-center px-3 h-8 rounded text-[11px] font-medium" style={{ background: "#2e3a2b", color: "#8aab7a", border: "1px solid #3d4e3a" }}>
            {c}
          </div>
        ))}
      </div>
    </div>

    {/* Legal */}
    <div className="container flex flex-col items-center justify-between gap-3 py-5 text-[11px] md:flex-row" style={{ color: "#4a6045" }}>
      <div>© {new Date().getFullYear()} Renovapack · Todos los derechos reservados</div>
      <ul className="flex flex-wrap items-center gap-4">
        {["Aviso de privacidad", "Cookies", "Términos y condiciones", "Accesibilidad"].map((l) => (
          <li key={l}><Link to="/" className="hover:text-white transition-colors">{l}</Link></li>
        ))}
      </ul>
      <div style={{ color: "#4a6045" }}>México · ES</div>
    </div>
  </footer>
);

export default SiteFooter;
