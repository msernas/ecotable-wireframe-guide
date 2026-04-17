const SiteFooter = () => {
  const cols = [
    { title: "Productos", items: ["Contenedores", "Vasos", "Cubiertos", "Platos", "Bolsas"] },
    { title: "Materiales", items: ["Bagazo de trigo", "PLA", "Fécula de maíz", "Bolsas compostables", "Papel + PLA"] },
    { title: "Sectores", items: ["Hoteles", "Cafeterías", "Empaque", "Hospitales", "Comedores"] },
    { title: "Empresa", items: ["Nosotros", "Contacto", "Blog", "Aviso de privacidad", "Términos"] },
  ];

  return (
    <footer className="border-t border-border bg-muted/40 py-10">
      <div className="container grid gap-8 md:grid-cols-5">
        <div className="space-y-3">
          <div className="wire-box h-10 w-28 !border-solid">LOGO</div>
          <p className="text-xs text-muted-foreground">
            Comercializadora de desechables biodegradables y compostables.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.title} className="space-y-2">
            <div className="text-sm font-semibold">{c.title}</div>
            <ul className="space-y-1 text-xs text-muted-foreground">
              {c.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="container mt-8 flex flex-col items-center justify-between gap-2 border-t border-border pt-4 text-[11px] font-mono uppercase tracking-widest text-muted-foreground md:flex-row">
        <span>© [Marca] · Todos los derechos reservados</span>
        <span>Wireframe v1 · Guía para diseñador</span>
      </div>
    </footer>
  );
};

export default SiteFooter;
