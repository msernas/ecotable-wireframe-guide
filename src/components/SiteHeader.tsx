import { NavLink, Link } from "react-router-dom";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/catalogo", label: "Catálogo" },
  { to: "/sectores", label: "Sectores" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/contacto", label: "Contacto" },
];

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link to="/" aria-label="Inicio" className="wire-box h-10 w-28 !border-solid">
          LOGO
        </Link>
        <nav aria-label="Principal" className="hidden gap-6 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `text-xs font-medium uppercase tracking-wider transition-colors ${
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <Link to="/contacto" className="wire-box h-9 w-32 !border-solid text-xs">
          CTA: Cotizar
        </Link>
      </div>
    </header>
  );
};

export default SiteHeader;
