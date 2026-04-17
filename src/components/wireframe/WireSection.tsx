interface SectionProps {
  tag: string;
  title: string;
  children: React.ReactNode;
}

export const WireSection = ({ tag, title, children }: SectionProps) => (
  <section className="border-t border-border py-12">
    <div className="container">
      <div className="mb-6 flex items-center gap-3">
        <span className="wire-section-tag">{tag}</span>
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          {title}
        </h2>
      </div>
      {children}
    </div>
  </section>
);

export const Lines = ({
  count = 3,
  widths = ["100%", "92%", "78%"],
}: {
  count?: number;
  widths?: string[];
}) => (
  <div className="space-y-2">
    {Array.from({ length: count }).map((_, i) => (
      <div key={i} className="wire-line" style={{ width: widths[i % widths.length] }} />
    ))}
  </div>
);

export const PageBanner = ({
  breadcrumb,
  h1,
  intro,
}: {
  breadcrumb: string;
  h1: string;
  intro: string;
}) => (
  <section className="border-b border-border bg-muted/40 py-10">
    <div className="container space-y-3">
      <div className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
        {breadcrumb}
      </div>
      <h1 className="text-2xl font-bold md:text-3xl">{h1}</h1>
      <p className="max-w-2xl text-sm text-muted-foreground">{intro}</p>
    </div>
  </section>
);
