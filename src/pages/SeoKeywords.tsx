import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { PageSeoTopBar } from "@/components/wireframe/PageSeoTopBar";

type KeywordRow = {
  page: string;
  url: string;
  primary: string;
  secondary: string[];
  longTail: string[];
  intent: "Transaccional" | "Informacional" | "Comercial" | "Navegacional";
  priority: "Alta" | "Media" | "Baja";
};

const keywords: KeywordRow[] = [
  {
    page: "Home",
    url: "/",
    primary: "empaques sustentables México",
    secondary: ["empaques compostables", "envases biodegradables", "Renovapack"],
    longTail: [
      "proveedor de empaques sustentables para HORECA",
      "empresa de empaques compostables en México",
    ],
    intent: "Comercial",
    priority: "Alta",
  },
  {
    page: "Catálogo",
    url: "/catalogo",
    primary: "catálogo empaques compostables",
    secondary: ["vasos bagazo", "contenedores caña azúcar", "cubiertos PLA", "popotes papel"],
    longTail: [
      "comprar vasos compostables al mayoreo México",
      "contenedores biodegradables para comida caliente",
    ],
    intent: "Transaccional",
    priority: "Alta",
  },
  {
    page: "Producto (Vaso bagazo 12oz)",
    url: "/catalogo/vaso-bagazo-12oz",
    primary: "vaso bagazo 12oz compostable",
    secondary: ["vaso bagazo de caña", "vaso compostable 12 onzas", "vaso BPI certificado"],
    longTail: [
      "vaso de bagazo 12oz para café caliente al mayoreo",
      "vaso compostable 12oz certificado BPI México",
    ],
    intent: "Transaccional",
    priority: "Alta",
  },
  {
    page: "Sectores",
    url: "/sectores",
    primary: "empaques sustentables HORECA",
    secondary: [
      "empaques para restaurantes",
      "empaques para cafeterías",
      "empaques para hospitales",
      "empaques para retail",
    ],
    longTail: [
      "proveedor de empaques compostables para cadenas de restaurantes",
      "empaques sustentables para hospitales y cafeterías corporativas",
    ],
    intent: "Comercial",
    priority: "Alta",
  },
  {
    page: "Nosotros",
    url: "/nosotros",
    primary: "empresa pionera empaques sustentables México",
    secondary: ["historia Renovapack", "aliados empaque sustentable", "trayectoria empaques compostables"],
    longTail: [
      "empresa mexicana pionera en empaques compostables",
      "aliado estratégico para empaques sustentables HORECA",
    ],
    intent: "Informacional",
    priority: "Media",
  },
  {
    page: "Contacto",
    url: "/contacto",
    primary: "cotizar empaques sustentables",
    secondary: ["contacto Renovapack", "pedir muestras empaques compostables", "distribuidor empaques biodegradables"],
    longTail: [
      "cotización empaques compostables al mayoreo México",
      "solicitar muestras de empaques sustentables HORECA",
    ],
    intent: "Transaccional",
    priority: "Alta",
  },
  {
    page: "Recomendaciones técnicas",
    url: "/recomendaciones-tecnicas",
    primary: "guía técnica empaques compostables",
    secondary: [
      "diferencia compostable biodegradable",
      "certificación BPI TÜV",
      "uso correcto vasos bagazo",
    ],
    longTail: [
      "cómo elegir el empaque compostable correcto para mi negocio",
      "diferencia entre PLA, bagazo y cartón compostable",
    ],
    intent: "Informacional",
    priority: "Media",
  },
];

const intentColor: Record<KeywordRow["intent"], string> = {
  Transaccional: "bg-accent text-accent-foreground",
  Comercial: "bg-primary text-primary-foreground",
  Informacional: "bg-secondary text-secondary-foreground",
  Navegacional: "bg-muted text-muted-foreground",
};

const priorityColor: Record<KeywordRow["priority"], string> = {
  Alta: "bg-accent text-accent-foreground",
  Media: "bg-primary/20 text-primary",
  Baja: "bg-muted text-muted-foreground",
};

const SeoKeywords = () => {
  return (
    <>
      <PageSeoTopBar
        page="SEO · Keyword map"
        url="/seo-keywords"
        h1="Keywords a optimizar por página"
        primaryKeyword="mapa de keywords Renovapack"
      />
      <div className="container py-12">
      <header className="mb-8 max-w-3xl">
        <span className="wire-section-tag">SEO · Keyword map</span>
        <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
          Keywords a optimizar por página
        </h1>
        <p className="mt-3 text-muted-foreground">
          Mapa de palabras clave objetivo para Renovapack: keyword principal, secundarias y long-tail
          por cada página del sitio, con su intención de búsqueda y prioridad de implementación.
        </p>
      </header>

      <div className="mb-6 flex flex-wrap gap-2 text-xs">
        <span className="rounded border border-border px-2 py-1 text-muted-foreground">
          Intención: <Badge className={intentColor.Transaccional}>Transaccional</Badge>{" "}
          <Badge className={intentColor.Comercial}>Comercial</Badge>{" "}
          <Badge className={intentColor.Informacional}>Informacional</Badge>
        </span>
        <span className="rounded border border-border px-2 py-1 text-muted-foreground">
          Prioridad: <Badge className={priorityColor.Alta}>Alta</Badge>{" "}
          <Badge className={priorityColor.Media}>Media</Badge>
        </span>
      </div>

      <div className="rounded-lg border border-border bg-card">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="w-[180px]">Página</TableHead>
              <TableHead className="w-[220px]">Keyword principal</TableHead>
              <TableHead>Keywords secundarias</TableHead>
              <TableHead>Long-tail</TableHead>
              <TableHead className="w-[130px]">Intención</TableHead>
              <TableHead className="w-[100px]">Prioridad</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {keywords.map((row) => (
              <TableRow key={row.url} className="align-top">
                <TableCell className="font-medium">
                  <div>{row.page}</div>
                  <div className="font-mono text-xs text-muted-foreground">{row.url}</div>
                </TableCell>
                <TableCell className="font-mono text-sm text-foreground">{row.primary}</TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {row.secondary.map((s) => (
                      <span
                        key={s}
                        className="rounded border border-border bg-background px-2 py-0.5 font-mono text-xs text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </TableCell>
                <TableCell>
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    {row.longTail.map((l) => (
                      <li key={l} className="font-mono">• {l}</li>
                    ))}
                  </ul>
                </TableCell>
                <TableCell>
                  <Badge className={intentColor[row.intent]}>{row.intent}</Badge>
                </TableCell>
                <TableCell>
                  <Badge className={priorityColor[row.priority]}>{row.priority}</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <div className="rounded border border-border bg-card p-5">
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Reglas de aplicación
          </div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>• 1 keyword principal por página, en H1, title y primer párrafo.</li>
            <li>• Secundarias en H2/H3 y meta description.</li>
            <li>• Long-tail en FAQ, descripciones extendidas y blog.</li>
          </ul>
        </div>
        <div className="rounded border border-border bg-card p-5">
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Densidad y semántica
          </div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>• Densidad objetivo 1–2% para la principal.</li>
            <li>• Usar sinónimos y entidades (LSI): bagazo, PLA, BPI, TÜV, HORECA.</li>
            <li>• Enlaces internos con anchor descriptivo (no "click aquí").</li>
          </ul>
        </div>
        <div className="rounded border border-border bg-card p-5">
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Medición
          </div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>• Tracking en Google Search Console por página.</li>
            <li>• Revisión mensual de posiciones y CTR.</li>
            <li>• Ajuste trimestral del mapa según oportunidades.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default SeoKeywords;
