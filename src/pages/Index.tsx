import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 2500000, display: "12.5M+", label: "Productos entregados al año" },
  { value: 85, display: "18+", label: "años en el mercado" },
  { value: 200, display: "600+", label: "Clientes B2B activos" },
  { value: 100, display: "+250", label: "Soluciones para tu negocio" },
];

const sectores = [
  { name: "Hoteles", desc: "Amenities, desayuno, room service", icon: "🏨" },
  { name: "Cafeterías", desc: "Vasos, tapas, cubiertos compostables", icon: "☕" },
  { name: "Restaurantes", desc: "Empaque to-go y entrega a domicilio", icon: "🍽" },
  { name: "Hospitales", desc: "Desechables grado alimenticio institucional", icon: "🏥" },
  { name: "Comedores", desc: "Soluciones de alto volumen para empresas", icon: "🏢" },
];

const diferenciadores = [
  {
    n: "01",
    t: "Solución integral",
    d: "Materiales, operación y logística en una sola conversación. No coordinas 5 proveedores — coordinas a Renovapack.",
  },
  {
    n: "02",
    t: "Expertise de industria",
    d: "Más de una década traduciendo normativas y certificaciones en decisiones operables para tu negocio HORECA.",
  },
  {
    n: "03",
    t: "Llegamos lejos, rápido",
    d: "Cobertura nacional con tiempos confiables. Tu operación no se detiene esperando empaque.",
  },
];

const categorias = [
  { name: "Contenedores", count: 24 },
  { name: "Vasos", count: 18 },
  { name: "Cubiertos", count: 12 },
  { name: "Platos", count: 16 },
  { name: "Bolsas", count: 9 },
  { name: "Complementarios", count: 14 },
];

const certs = ["TÜV OK Compost", "BPI", "FSC", "FDA"];

const useCountUp = (target: number, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
};

const AnimatedWord = () => {
  const words = ["distinto.", "con calidad.", "juntos."];
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % words.length);
        setVisible(true);
      }, 400);
    }, 2800);
    return () => clearInterval(interval);
  }, []);
  return (
    <span
      style={{
        color: "#e5d9b6",
        display: "inline-block",
        transition: "opacity 0.4s ease",
        opacity: visible ? 1 : 0,
      }}
    >
      {words[idx]}
    </span>
  );
};

const StatsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <section ref={ref} style={{ background: "#1f261d", padding: "72px 0" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "32px" }}>
          {stats.map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "42px", fontWeight: 700, color: "#e67e22", fontFamily: "'Chillax', 'Nunito', sans-serif", lineHeight: 1 }}>
                {s.display}
              </div>
              <div style={{ fontSize: "13px", color: "#8aab7a", marginTop: "8px", lineHeight: 1.4, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section style={{ background: "#1f261d", minHeight: "90vh", position: "relative", display: "flex", alignItems: "center", overflow: "hidden" }}>
        {/* Text content */}
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ maxWidth: "560px" }}>
            <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#628141", marginBottom: "24px" }}>
              Renovapack · Empaque B2B · HORECA · México
            </div>
            <span className="sr-only" aria-hidden="false" role="heading" aria-level={1}>
              El Futuro se Empaca Distinto. Renovapack — desechables biodegradables.
            </span>
            <p aria-hidden="true" style={{ fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 800, lineHeight: 1.45, color: "#e5d9b6", fontFamily: "'Chillax', 'Nunito', sans-serif", marginBottom: "28px" }}>
              El futuro<br />
              <span style={{ background: "#2e3a2b", color: "#e5d9b6", padding: "2px 16px 6px", borderRadius: "10px", display: "inline" }}>
                se empaca
              </span>
              <br />
              <AnimatedWord />
            </p>
            <p style={{ fontSize: "18px", color: "#8aab7a", lineHeight: 1.7, maxWidth: "480px", marginBottom: "40px" }}>
              Pioneros en empaque desechable y biodegradable. Más que un proveedor: un aliado que guía tus decisiones con expertise, sustentabilidad real y logística para cualquier escala.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link to="/catalogo" style={{ display: "inline-flex", alignItems: "center", height: "52px", background: "#e67e22", color: "#1f261d", padding: "0 28px", borderRadius: "6px", fontSize: "13px", fontWeight: 700, textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Explorar catálogo →
              </Link>
              <Link to="/contacto" style={{ display: "inline-flex", alignItems: "center", height: "52px", border: "1.5px solid rgba(255,255,255,0.25)", color: "#fffbf8", padding: "0 28px", borderRadius: "6px", fontSize: "13px", fontWeight: 600, textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Solicitar cotización
              </Link>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginTop: "48px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "10px", color: "#4a6045", textTransform: "uppercase", letterSpacing: "0.1em" }}>Certificados</span>
              {certs.map((c) => (
                <span key={c} style={{ fontSize: "11px", fontWeight: 600, color: "#8aab7a", padding: "4px 10px", border: "0.5px solid #3d4e3a", borderRadius: "4px" }}>
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Green rectangle - absolute positioned in section */}
        <div style={{ position: "absolute", bottom: 0, right: "5%", width: "32%", height: "18%", background: "#2e3a2b", borderRadius: "24px 24px 0 0", zIndex: 1 }} aria-hidden="true" />

        {/* Model image - absolute positioned, fills right side */}
        <img
          src="/hero.png"
          alt="Empaque biodegradable Renovapack — vasos compostables HORECA"
          style={{ position: "absolute", bottom: 0, right: "0%", height: "100%", width: "50%", objectFit: "contain", objectPosition: "bottom center", zIndex: 2 }}
        />

        {/* Badge */}
        <div style={{ position: "absolute", bottom: "32px", right: "2%", zIndex: 3, background: "#e5d9b6", borderRadius: "12px", padding: "14px 18px", border: "1px solid #c8c0a0", boxShadow: "0 8px 32px rgba(0,0,0,0.25)" }}>
          <div style={{ fontSize: "10px", fontWeight: 700, color: "#628141", textTransform: "uppercase", letterSpacing: "0.08em" }}>Cobertura</div>
          <div style={{ fontSize: "20px", fontWeight: 800, color: "#40513b", fontFamily: "'Chillax', 'Nunito', sans-serif", lineHeight: 1.1 }}>Todo México</div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────── */}
      <StatsSection />

      {/* ── POR QUÉ RENOVAPACK ───────────────────────────────── */}
      <section style={{ background: "#fffbf8", padding: "96px 0" }}>
        <div className="container">
          <div style={{ maxWidth: "640px", marginBottom: "64px" }}>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 46px)", fontWeight: 800, color: "#1f261d", lineHeight: 1.2, fontFamily: "'Chillax', 'Nunito', sans-serif", marginBottom: "16px" }}>
              Evolucionar sin riesgo no es tan simple.
            </h2>
            <p style={{ fontSize: "18px", color: "#40513b", lineHeight: 1.7 }}>
              Entre tantas opciones, materiales y promesas, es difícil elegir.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {diferenciadores.map((d) => (
              <div key={d.n} style={{ padding: "36px", background: "#fff", borderRadius: "16px", border: "0.5px solid #e5d9b6" }}>
                <div style={{ fontSize: "32px", fontWeight: 800, color: "#e5d9b6", fontFamily: "'Chillax', 'Nunito', sans-serif", marginBottom: "16px" }}>{d.n}</div>
                <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#1f261d", marginBottom: "12px", fontFamily: "'Chillax', 'Nunito', sans-serif" }}>{d.t}</h3>
                <p style={{ fontSize: "14px", color: "#40513b", lineHeight: 1.7 }}>{d.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTORES ─────────────────────────────────────────── */}
      <section style={{ background: "#628141", padding: "96px 0" }}>
        <div className="container">
          {/* Header */}
          <div style={{ marginBottom: "56px" }}>
            <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#e5d9b6", marginBottom: "12px" }}>
              Sectores
            </div>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
              <div>
                <h2 style={{ fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 800, color: "#fffbf8", lineHeight: 1.15, fontFamily: "'Chillax', 'Nunito', sans-serif", marginBottom: "8px" }}>
                  Desechables Biodegradables para Tu Negocio
                </h2>
                <p style={{ fontSize: "15px", color: "#e5d9b6", lineHeight: 1.5 }}>
                  Soluciones de Empaque  - Servicio y Calidad
                </p>
              </div>
              <Link
                to="/sectores"
                style={{ display: "inline-flex", alignItems: "center", height: "44px", border: "1px solid #e5d9b6", color: "#e5d9b6", padding: "0 20px", borderRadius: "6px", fontSize: "13px", fontWeight: 600, textDecoration: "none", whiteSpace: "nowrap" }}
              >
                Ver todos los sectores →
              </Link>
            </div>
          </div>

          {/* Sector cards with photos */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
            {[
              { name: "Hoteles", desc: "Amenities, desayuno y room service", img: "/sector-hoteles.jpg" },
              { name: "Cafeterías", desc: "Vasos, tapas y cubiertos compostables", img: "/sector-cafeterias.jpg" },
              { name: "Restaurantes", desc: "Empaque to-go y entrega a domicilio", img: "/sector-restaurantes.jpg" },
              { name: "Hospitales", desc: "Desechables grado alimenticio institucional", img: "/sector-hospitales.jpg" },
              { name: "Comedores industriales", desc: "Soluciones de alto volumen para empresas", img: "/sector-comedores.jpg" },
              { name: "Empaques industriales", desc: "Empaques especializados para manufactura", img: "/sector-industrial.jpg" },
              { name: "Distribuidores", desc: "Alianzas estratégicas mayoreo nacional", img: "/sector-distribuidores.jpg" },
            ].map((s) => (
              <Link
                key={s.name}
                to="/sectores"
                style={{ display: "block", borderRadius: "16px", overflow: "hidden", textDecoration: "none", position: "relative", aspectRatio: "3/4" }}
                onMouseEnter={(e) => { const img = e.currentTarget.querySelector('img') as HTMLImageElement; if(img) img.style.transform = 'scale(1.05)'; }}
                onMouseLeave={(e) => { const img = e.currentTarget.querySelector('img') as HTMLImageElement; if(img) img.style.transform = 'scale(1)'; }}
              >
                {/* Photo */}
                <img
                  src={s.img}
                  alt={s.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.4s ease" }}
                />
                {/* Dark overlay */}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(31,38,29,0.92) 0%, rgba(31,38,29,0.2) 50%, transparent 100%)" }} />
                {/* Text */}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "24px" }}>
                  <div style={{ fontSize: "27px", fontWeight: 800, color: "#fffbf8", fontFamily: "'Chillax', 'Nunito', sans-serif", marginBottom: "6px" }}>
                    {s.name}
                  </div>
                  <div style={{ fontSize: "14px", color: "#a8c990", lineHeight: 1.4 }}>
                    {s.desc}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATÁLOGO PREVIEW ─────────────────────────────────── */}
      <section style={{ background: "#fffbf8", padding: "96px 0" }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "48px", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#628141", marginBottom: "16px" }}>
                Catálogo
              </div>
              <h2 style={{ fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 800, color: "#fffbf8", lineHeight: 1.15, fontFamily: "'Chillax', 'Nunito', sans-serif" }}>
                90+ soluciones de empaque
              </h2>
            </div>
            <Link to="/catalogo" style={{ fontSize: "14px", fontWeight: 600, color: "#628141", textDecoration: "none" }}>
              Ver catálogo completo →
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "12px", marginBottom: "48px" }}>
            {categorias.map((c) => (
              <Link
                key={c.name}
                to="/catalogo"
                style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", padding: "24px 12px", background: "#fff", borderRadius: "12px", border: "0.5px solid #e5d9b6", textDecoration: "none", transition: "all 0.15s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#628141"; e.currentTarget.style.background = "#f4f7f4"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#e5d9b6"; e.currentTarget.style.background = "#fff"; }}
              >
                <div style={{ width: "48px", height: "48px", background: "#e5d9b6", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#40513b" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>
                </div>
                <div style={{ fontSize: "12px", fontWeight: 600, color: "#1f261d", textAlign: "center", lineHeight: 1.3 }}>{c.name}</div>
                <div style={{ fontSize: "11px", color: "#628141" }}>{c.count} productos</div>
              </Link>
            ))}
          </div>
          {/* bioeco highlight */}
          <div style={{ background: "#1f261d", borderRadius: "16px", padding: "48px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#e5d9b6", marginBottom: "12px" }}>Sub-marca</div>
              <div style={{ fontSize: "42px", fontWeight: 800, color: "#e5d9b6", fontFamily: "'Chillax', 'Nunito', sans-serif", lineHeight: 1, marginBottom: "16px" }}>bioeco</div>
              <p style={{ fontSize: "15px", color: "#8aab7a", lineHeight: 1.7, marginBottom: "28px" }}>
                Línea de desechables 100% compostables certificados. Bagazo de trigo, PLA, fécula de maíz y papel + PLA. Para operaciones que exigen lo mejor.
              </p>
              <Link
                to="/catalogo"
                style={{ display: "inline-flex", alignItems: "center", height: "44px", background: "#e67e22", color: "#1f261d", padding: "0 24px", borderRadius: "6px", fontSize: "13px", fontWeight: 700, textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.06em" }}
              >
                Ver línea bioeco →
              </Link>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
              {["Bagazo de trigo", "PLA", "Fécula de maíz", "Papel + PLA"].map((m) => (
                <div key={m} style={{ padding: "16px", background: "#2e3a2b", borderRadius: "10px", border: "0.5px solid #3d4e3a" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#628141", marginBottom: "8px" }}></div>
                  <div style={{ fontSize: "13px", fontWeight: 600, color: "#e5d9b6" }}>{m}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────────── */}
      <section style={{ background: "#628141", padding: "96px 0" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "48px", alignItems: "center" }}>
          <div>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 800, color: "#fffbf8", lineHeight: 1.1, fontFamily: "'Chillax', 'Nunito', sans-serif", marginBottom: "16px" }}>
              Empieza con un diagnóstico gratuito.
            </h2>
            <p style={{ fontSize: "17px", color: "#c8d9b8", lineHeight: 1.7 }}>
              Muestras sin costo + propuesta por volumen para tu primera operación. Sin compromiso.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <Link
              to="/contacto"
              style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "52px", background: "#e67e22", color: "#1f261d", borderRadius: "6px", fontSize: "14px", fontWeight: 700, textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.08em" }}
            >
              Solicitar cotización
            </Link>
            <Link
              to="/catalogo"
              style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "52px", border: "1.5px solid rgba(255,255,255,0.4)", color: "#fffbf8", borderRadius: "6px", fontSize: "14px", fontWeight: 600, textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.08em" }}
            >
              Ver catálogo completo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
