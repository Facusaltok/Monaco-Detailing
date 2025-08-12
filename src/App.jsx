import React from 'react';

export default function MonacoDetailingSite() {
  const phone = "5491127469781";

  const ui = {
    bg: 'transparent',
    panel: 'rgba(10,10,10,.75)',
    hard: '#0a0a0a',
    border: '#1f2937',
    text: '#e5e7eb',
    mut: '#cbd5e1',
    green: '#0a8d4b'
  };
  const wrap = { maxWidth: 1120, margin: '0 auto', padding: '0 16px' };

  const services = {
    autos: [
      { name: "Interior (Hatch / Sedan)", desc: "Aspirado profundo, descontaminación del habitáculo y reacondicionamiento de plásticos.", price: 150000, time: "1 día" },
      { name: "Interior al Detalle (Hatch / Sedan)", desc: "Desarme, aspirado profundo, limpieza de techo y tapizados, descontaminación y reacondicionamiento de plásticos.", price: 250000, time: "2-3 días" },
      { name: "Motor a Vapor (Hatch / Sedan)", desc: "Limpieza técnica del vano motor a vapor.", price: 100000, time: "En el día" },
      { name: "Paquete Completo (Hatch / Sedan)", desc: "Abrillantado + Interior + Motor a Vapor.", price: 350000, time: "2–3 días" }
    ],
    suv: [
      { name: "Interior (SUV / Pick-Up)", desc: "Aspirado profundo, descontaminación del habitáculo y reacondicionamiento de plásticos.", price: 200000, time: "1 día" },
      { name: "Interior al Detalle (SUV / Pick-Up)", desc: "Desarme, aspirado profundo, limpieza de techo y tapizados, descontaminación y reacondicionamiento de plásticos.", price: 300000, time: "2-3 días" },
      { name: "Motor a Vapor (SUV / Pick-Up)", desc: "Limpieza técnica del vano motor a vapor.", price: 130000, time: "En el día" },
      { name: "Paquete Completo SUV / Pick-Up", desc: "Abrillantado + Interior + Motor a Vapor.", price: 450000, time: "2–3 días" }
    ],
    motos: [
      { name: "Tratamiento Motos", desc: "Lavado + descontaminación + reacondicionamiento de plásticos + lubricación de cadena + protección (Acrílico o Cerámico).", price: "150.000 – 250.000", time: "En el día" }
    ]
  };

  const tratamientos = [
    {
      grupo: "Autos (Hatch / Sedan)",
      items: [
        { name: "Acrílico", detalle: "Duración 6 meses", price: 300000 },
        { name: "Cerámico", detalle: "Duración 1 año", price: 400000 },
        { name: "Cerámico c/Grafeno", detalle: "Duración 2 años", price: 500000 }
      ]
    },
    {
      grupo: "Pick-Up / SUV",
      items: [
        { name: "Acrílico", detalle: "Duración 6 meses", price: 400000 },
        { name: "Cerámico", detalle: "Duración 1 año", price: 500000 },
        { name: "Cerámico c/Grafeno", detalle: "Duración 2 años", price: 600000 }
      ]
    }
  ];

  // NUEVO: Videos YouTube Shorts
  const videos = [
    'hmG6tQvjoa0',
    'wWcvlO_A0Ew',
    'bqqJszdkWN0'
  ];

  function wamsg(txt) {
    const u = `https://wa.me/${phone}?text=${encodeURIComponent(txt)}`;
    window.open(u, "_blank");
  }
  function Price({ value }) {
    return (
      <span style={{ color: ui.green, fontWeight: 700 }}>
        {typeof value === 'number' ? `$${value.toLocaleString('es-AR')}` : `$${value}`}
      </span>
    );
  }
  function ServiceCard({ s }) {
    return (
      <div style={{
        background: ui.panel,
        border: `1px solid ${ui.border}`,
        borderRadius: 16,
        padding: 16
      }}>
        <h3 style={{ color: ui.text, fontSize: 16, fontWeight: 700 }}>{s.name}</h3>
        <p style={{ color: ui.mut, fontSize: 14, marginTop: 6 }}>{s.desc}</p>
        <div style={{ display:'flex', justifyContent:'space-between', marginTop:12 }}>
          <Price value={s.price} />
          <span style={{ color: ui.mut, fontSize: 12 }}>{s.time}</span>
        </div>
        <button
          onClick={() => wamsg(`Hola Monaco Detailing, quiero reservar: ${s.name} (${typeof s.price==='number'? `$${s.price.toLocaleString('es-AR')}` : `$${s.price}`}).`)}
          style={{ width:'100%', marginTop:12, borderRadius:12, padding:'10px 14px', background:ui.green, color:'#0b0f10', fontWeight:700 }}>
          Reservar por WhatsApp
        </button>
      </div>
    );
  }

  return (
    <div style={{ minHeight:'100vh', position:'relative', overflow:'hidden', color: ui.text }}>
      <style>{`
        @keyframes drift { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
      `}</style>
      <div aria-hidden style={{
        position:'fixed', inset:0, zIndex:0,
        background: 'linear-gradient(135deg, #0a8d4b 0%, #0a0a0a 60%)',
        backgroundSize: '200% 200%',
        animation: 'drift 22s ease-in-out infinite'
      }} />
      <div aria-hidden style={{
        position:'fixed', inset:'-20% -10% auto -10%', height: '60vh', zIndex:0,
        background: 'radial-gradient(60% 60% at 50% 40%, rgba(10,141,75,0.35), transparent 60%)',
        filter: 'blur(30px)'
      }} />

      <div style={{ position:'relative', zIndex:1 }}>
        <header style={{ position:'sticky', top:0, backdropFilter:'blur(8px)',
          background:'rgba(10,10,10,.35)', borderBottom:`1px solid ${ui.border}`, zIndex:50 }}>
          <div style={{ ...wrap, padding:'12px 16px', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
            <div style={{ display:'flex', alignItems:'center', gap:12 }}>
              <img src="/logo.png.png" alt="Monaco Detailing" style={{ height:36 }} />
              <strong>MONACO DETAILING</strong>
            </div>
            <nav style={{ display:'flex', gap:16, fontSize:14, color: ui.mut }}>
              <a href="#servicios" style={{ color:'inherit', textDecoration:'none' }}>Servicios</a>
              <a href="#tratamientos" style={{ color:'inherit', textDecoration:'none' }}>Tratamientos</a>
              <a href="#videos" style={{ color:'inherit', textDecoration:'none' }}>Videos</a>
              <a href="#contacto" style={{ color:'inherit', textDecoration:'none' }}>Contacto</a>
            </nav>
          </div>
        </header>

        {/* Hero */}
        <section style={{ borderBottom:`1px solid ${ui.border}` }}>
          <div style={{ ...wrap, padding:'56px 16px', textAlign:'center' }}>
            <h1 style={{ fontSize:42, fontWeight:800 }}>Monaco Detailing</h1>
            <h2 style={{ fontSize:28, fontWeight:700, color: ui.green }}>Detailing premium</h2>
            <p style={{ color: ui.mut, marginTop:12, maxWidth:720, marginInline:'auto' }}>
              Especialistas en estética vehicular: interior profundo, abrillantado, motor a vapor y tratamientos de protección.
            </p>
          </div>
        </section>

        {/* Servicios */}
        <section id="servicios">
          <div style={{ ...wrap, padding:'40px 16px' }}>
            <h2>Servicios</h2>
            <div style={{ marginTop:16 }}>
              <h3 style={{ color: ui.green }}>Autos — Hatch / Sedan</h3>
              <div style={{ display:'grid', gap:16, gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))' }}>
                {services.autos.map((s, i) => <ServiceCard s={s} key={i} />)}
              </div>
            </div>
            <div style={{ marginTop:24 }}>
              <h3 style={{ color: ui.green }}>SUV / Pick-Up</h3>
              <div style={{ display:'grid', gap:16, gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))' }}>
                {services.suv.map((s, i) => <ServiceCard s={s} key={i} />)}
              </div>
            </div>
            <div style={{ marginTop:24 }}>
              <h3 style={{ color: ui.green }}>Motos</h3>
              <div style={{ display:'grid', gap:16, gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))' }}>
                {services.motos.map((s, i) => <ServiceCard s={s} key={i} />)}
              </div>
            </div>
          </div>
        </section>

        {/* Tratamientos */}
        <section id="tratamientos" style={{ borderTop:`1px solid ${ui.border}`, borderBottom:`1px solid ${ui.border}` }}>
          <div style={{ ...wrap, padding:'40px 16px' }}>
            <h2>Tratamientos de Protección</h2>
            <div style={{ display:'grid', gap:16, gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))' }}>
              {tratamientos.map((t, idx) => (
                <div key={idx} style={{ border:`1px solid ${ui.border}`, borderRadius:16, padding:16, background: ui.panel }}>
                  <h3 style={{ color: ui.green }}>{t.grupo}</h3>
                  {t.items.map((it, i) => (
                    <div key={i} style={{ display:'flex', justifyContent:'space-between', marginTop:12 }}>
                      <div>
                        <p>{it.name}</p>
                        <p style={{ color: ui.mut, fontSize:12 }}>{it.detalle}</p>
                      </div>
                      <div style={{ textAlign:'right' }}>
                        <p style={{ color: ui.green }}>{`$${it.price.toLocaleString('es-AR')}`}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NUEVO: Videos */}
        <section id="videos">
          <div style={{ ...wrap, padding:'40px 16px' }}>
            <h2>Videos</h2>
            <p style={{ color: ui.mut }}>Algunos trabajos y resultados recientes.</p>
            <div style={{ display:'grid', gap:16, gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', marginTop:16 }}>
              {videos.map((id) => (
                <div key={id} style={{ border:`1px solid ${ui.border}`, borderRadius:16, overflow:'hidden' }}>
                  <div style={{ width:'100%', aspectRatio:'9 / 16' }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${id}`}
                      title={`YouTube video ${id}`}
                      style={{ width:'100%', height:'100%', border:0 }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto">
          <div style={{ ...wrap, padding:'40px 16px' }}>
            <h2>Contacto</h2>
            <button onClick={() => wamsg("Hola Monaco Detailing, me gustaría agendar un turno.")} style={{ borderRadius:12, padding:'12px 16px', background: ui.green, color:'#0b0f10', fontWeight:700 }}>
              WhatsApp directo
            </button>
          </div>
        </section>

        <footer style={{ borderTop:`1px solid ${ui.border}`, textAlign:'center', padding:16 }}>
          <small>© {new Date().getFullYear()} Monaco Detailing</small>
        </footer>
      </div>
    </div>
  );
}
