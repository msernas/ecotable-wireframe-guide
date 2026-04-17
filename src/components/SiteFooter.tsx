import { Link } from "react-router-dom";

const SiteFooter = () => {
  const cols = [
    {
      title: "Productos",
      items: [
        { label: "Contenedores", to: "/catalogo" },
        { label: "Vasos", to: "/catalogo" },
        { label: "Cubiertos", to: "/catalogo" },
        { label: "Platos", to: "/catalogo" },
        { label: "Bolsas compostables", to: "/catalogo" },
        { label: "Productos complementarios", to: "/catalogo" },
      ],
    },
    {
      title: "Materiales",
      items: [
        { label: "Bagazo de trigo", to: "/catalogo" },
        { label: "PLA", to: "/catalogo" },
        { label: "Fécula de maíz", to: "/catalogo" },
        { label: "Bolsas compostables", to: "/catalogo" },
        { label: "Papel laminado con PLA", to: "/catalogo" },
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
        { label: "Sustentabilidad", to: "/sustentabilidad" },
        { label: "Blog & Recursos", to: "/blog" },
        { label: "Stack técnico", to: "/recomendaciones-tecnicas" },
        { label: "Distribuidores", to: "/inversionistas" },
        { label: "Prensa", to: "/prensa" },
      ],
    },
    {
      title: "Soporte",
      items: [
        { label: "Contacto", to: "/contacto" },
        { label: "Solicitar muestras", to: "/contacto" },
        { label: "Preguntas frecuentes", to: "/contacto" },
        { label: "Centro de ayuda", to: "/contacto" },
        { label: "WhatsApp B2B", to: "/contacto" },
      ],
    },
  ];

  return (
    <footer className="border-t border-border bg-muted/30 pt-12">
      {/* Newsletter / CTA bar — estilo Unilever / Siemens */}
      <div className="border-b border-border pb-10">
        <div className="container grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div className="space-y-2">
            <h2 className="text-xl font-bold">Recibe insights de empaque sustentable</h2>
            <p className="text-sm text-muted-foreground">
              Tendencias, normativa y casos de éxito B2B una vez al mes. Sin spam.
            </p>
          </div>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <div className="wire-box h-11 flex-1 !justify-start !pl-3 text-left text-[11px] normal-case">
              tu@empresa.com
            </div>
            <div className="wire-box h-11 w-32 !border-solid text-xs">Suscribirse</div>
          </form>
        </div>
      </div>

      {/* Columnas principales */}
      <div className="container grid gap-8 py-12 md:grid-cols-6">
        <div className="space-y-3 md:col-span-1">
          <div className="font-bold text-primary text-lg tracking-tight">renovapack<span className="text-accent">®</span></div>
          <p className="text-xs text-muted-foreground">
            El futuro se empaca distinto. Solución integral de empaque desechable y biodegradable bioeco para HORECA y B2B en México.
          </p>
          <div className="flex gap-2 pt-2">
            {["LI", "FB", "IG", "YT"].map((s) => (
              <div key={s} className="wire-box h-9 w-9 text-[10px]">{s}</div>
            ))}
          </div>
        </div>
        {cols.map((c) => (
          <nav key={c.title} aria-label={c.title} className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-widest text-foreground">
              {c.title}
            </div>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
              {c.items.map((i) => (
                <li key={i.label}>
                  <Link to={i.to} className="hover:text-foreground hover:underline">
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      {/* Certificaciones banda */}
      <div className="border-t border-border bg-muted/40 py-6">
        <div className="container flex flex-wrap items-center justify-center gap-6">
          <span className="text-[11px] uppercase tracking-widest text-muted-foreground">
            Certificados por
          </span>
          {["TÜV OK Compost", "BPI", "FSC", "FDA", "ISO 14001"].map((c) => (
            <div key={c} className="wire-box h-10 w-24 text-[10px]">{c}</div>
          ))}
        </div>
      </div>

      {/* Legal */}
      <div className="border-t border-border py-5">
        <div className="container flex flex-col items-center justify-between gap-3 text-[11px] text-muted-foreground md:flex-row">
          <div>© {new Date().getFullYear()} Renovapack · Todos los derechos reservados</div>
          <ul className="flex flex-wrap items-center gap-4">
            <li><Link to="/legal/privacidad" className="hover:text-foreground">Aviso de privacidad</Link></li>
            <li><Link to="/legal/cookies" className="hover:text-foreground">Cookies</Link></li>
            <li><Link to="/legal/terminos" className="hover:text-foreground">Términos y condiciones</Link></li>
            <li><Link to="/legal/accesibilidad" className="hover:text-foreground">Accesibilidad</Link></li>
            <li><Link to="/sitemap.xml" className="hover:text-foreground">Sitemap</Link></li>
          </ul>
          <button className="flex items-center gap-1 hover:text-foreground">🌐 México · ES ▾</button>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
