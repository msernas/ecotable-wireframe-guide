import { WireSection, Lines, PageBanner } from "@/components/wireframe/WireSection";
import { SeoTechBlock } from "@/components/wireframe/SeoTechBlock";
import { PageSeoTopBar } from "@/components/wireframe/PageSeoTopBar";

const Contacto = () => {
  return (
    <>
      <PageBanner
        breadcrumb="Inicio / Contacto"
        h1="Contáctanos"
        intro="Cuéntanos sobre tu operación y te enviamos una propuesta personalizada."
      />

      {/* FORMULARIO + DATOS */}
      <WireSection tag="01 · Formulario" title="Captura de leads B2B">
        <div className="grid gap-6 md:grid-cols-2">
          <form className="space-y-3 rounded border border-border bg-card p-5" onSubmit={(e) => e.preventDefault()}>
            <div className="text-sm font-semibold">Solicita información</div>
            {[
              { l: "Nombre completo *", t: "input" },
              { l: "Empresa *", t: "input" },
              { l: "Sector", t: "select" },
              { l: "Correo electrónico *", t: "input" },
              { l: "Teléfono / WhatsApp", t: "input" },
              { l: "Mensaje", t: "textarea" },
            ].map((f) => (
              <div key={f.l} className="space-y-1">
                <div className="text-[11px] text-muted-foreground">{f.l}</div>
                <div
                  className="wire-box !justify-start !pl-3 text-left text-[11px] normal-case tracking-normal"
                  style={{ height: f.t === "textarea" ? "5rem" : "2.5rem" }}
                >
                  {f.t === "select" ? "Seleccionar ▾" : ""}
                </div>
              </div>
            ))}
            <div className="flex items-start gap-2 pt-1 text-[11px] text-muted-foreground">
              <span>☐</span>
              <span>Acepto el aviso de privacidad</span>
            </div>
            <div className="wire-box h-10 !border-solid">Enviar solicitud</div>
            <p className="wire-note">
              SEO · &lt;form&gt; con &lt;label&gt; asociado a cada input. aria-required en campos obligatorios.
              Mensaje de éxito accesible (role="status"). Anti-spam: honeypot + reCAPTCHA invisible.
            </p>
          </form>

          <div className="space-y-4">
            <div className="rounded border border-border bg-card p-5">
              <div className="mb-3 text-sm font-semibold">Datos de contacto</div>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li>📞 +52 (00) 0000-0000</li>
                <li>✉ ventas@renovapack.com</li>
                <li>💬 WhatsApp: +52 (00) 0000-0000</li>
                <li>🕐 Lun – Vie · 9:00 – 18:00</li>
                <li>📍 [Dirección, Ciudad, Estado, CP]</li>
              </ul>
            </div>

            <div className="wire-box h-56">MAPA EMBED (Google Maps)</div>
            <p className="wire-alt">
              IMAGEN: iframe de Google Maps con la ubicación, o imagen estática como fallback.
              alt="Mapa de ubicación de renovapack en [ciudad]". loading="lazy" en el iframe.
            </p>

            <div className="rounded border border-border bg-card p-5">
              <div className="mb-2 text-sm font-semibold">Síguenos</div>
              <div className="flex gap-2">
                {["FB", "IG", "LI", "YT"].map((s) => (
                  <div key={s} className="wire-box h-10 w-10">{s}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </WireSection>

      {/* SUCURSALES / COBERTURA */}
      <WireSection tag="02 · Cobertura" title="Estados / sucursales atendidas">
        <div className="grid gap-4 md:grid-cols-3">
          {["Centro", "Bajío", "Sureste"].map((z) => (
            <div key={z} className="space-y-2 rounded border border-border bg-card p-4">
              <div className="wire-box h-12 w-12">ICO</div>
              <h3 className="text-sm font-semibold">Zona {z}</h3>
              <Lines count={2} widths={["100%", "70%"]} />
            </div>
          ))}
        </div>
        <p className="wire-note mt-4">
          SEO local · Schema.org LocalBusiness con address, telephone, openingHours.
          Vincular Google Business Profile. Si hay sucursales, una página por ubicación.
        </p>
      </WireSection>

      {/* FAQ */}
      <WireSection tag="03 · FAQ" title="Preguntas frecuentes">
        <div className="space-y-2">
          {[
            "¿Cuál es el pedido mínimo?",
            "¿Hacen envíos a todo el país?",
            "¿Los productos son realmente compostables?",
            "¿Manejan precios de mayoreo?",
            "¿Puedo solicitar muestras antes de comprar?",
          ].map((q) => (
            <div key={q} className="flex items-center justify-between rounded border border-border bg-card p-4">
              <div className="text-sm font-medium">{q}</div>
              <div className="text-muted-foreground">＋</div>
            </div>
          ))}
        </div>
        <p className="wire-note mt-4">
          SEO · Schema.org FAQPage con cada pregunta y respuesta. Permite aparecer como rich snippet en Google.
          Acordeones accesibles (aria-expanded, aria-controls).
        </p>
      </WireSection>

      <SeoTechBlock
        page="Contacto (/contacto)"
        title="Contacto · Cotiza desechables biodegradables B2B | Renovapack"
        description="Solicita cotización de empaque compostable para tu hotel, hospital, cafetería o comedor. Atención B2B, muestras gratis y entrega nacional."
        h1="Contáctanos"
        schemas={[
          "ContactPage como tipo principal",
          "LocalBusiness con address, telephone, openingHoursSpecification",
          "FAQPage con cada pregunta del bloque FAQ",
          "BreadcrumbList",
        ]}
        notes={[
          "Vincular Google Business Profile (mismo NAP: nombre, dirección, teléfono)",
          "Click-to-call en móvil: <a href='tel:+52...'>",
          "Click-to-WhatsApp: <a href='https://wa.me/52...'>",
          "Formulario: validación HTML5 nativa + aria-invalid + role='alert' en errores",
          "Confirmación de envío con role='status' (lector de pantalla)",
        ]}
      />
    </>
  );
};

export default Contacto;
