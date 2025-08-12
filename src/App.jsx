import React from 'react';

export default function MonacoDetailingSite() {
  // WhatsApp
  const phone = "5491127469781";

  // UI (verde más oscuro del logo)
  const ui = {
    bg: 'transparent',            // lo maneja el fondo animado
    panel: 'rgba(10,10,10,.75)',  // panel con leve transparencia
    hard: '#0a0a0a',              // negro sólido para inputs
    border: '#1f2937',
    text: '#e5e7eb',
    mut: '#cbd5e1',
    green: '#0a8d4b'
  };
  const wrap = { maxWidth: 1120, margin: '0 auto', padding: '0 16px' };

  // Servicios (interiores = 1 día) y paquetes actualizados
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

  // Tratamientos con precios actualizados
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

  // NUEVO: Videos de YouTube (Shorts)
  const videos = [
    'hmG6tQvjoa0',
    'wWcvlO_A0Ew',
    'bqqJszdkWN0'
  ];

  // Helpers
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
        padding: 16,
        boxShadow: '0 4px 24px rgba(0,0,0,.35), inset 0 1px 0 rgba(255,255,255,.03)'
      }}>
        <h3 style={{ color: ui.text, fontSize: 16, fontWeight: 700 }}>{s.name}</h3>
        <p style={{ color: ui.mut, fontSize: 14, marginTop: 6, lineHeight: 1.6 }}>{s.desc}</p>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:12 }}>
          <Price value={s.price} />
          <span style={{ color: ui.mut, fontSize: 12 }}>{s.time}</span>
        </div>
        <button
          onClick={() => wamsg(`Hola Monaco Detailing, quiero reservar: ${s.name} (${typeof s.price==='number'? `$${s.price.toLocaleString('es-AR')}` : `$${s.price}`}).`)}
          style={{ width:'100%', marginTop:12, borderRadius:12, padding:'10px 14px', background:ui.green, color:'#0b0f10', fontWeight:700, border:'none', cursor:'pointer' }}>
          Reservar por WhatsApp
        </button>
      </div>
    );
  }

  return (
    <div style={{ minHeight:'100vh', position:'relative', overflow:'hidden', color: ui.text }}>
      {/* Fondo animado verde→negro */}
      <style>{`
        @keyframes drift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
      <div aria-hidden
           style={{
             position:'fixed', inset:0, zIndex:0,
             background: 'linear-gradient(135deg, #0a8d4b 0%, #0a0a0a 60%)',
             backgroundSize: '200% 200%',
             animation: 'drift 22s ease-in-out infinite'
           }} />
      {/* Glow suave para profundidad */}
      <div aria-hidden
           style={{
             position:'fixed', inset:'-20% -10% auto -10%', height: '60vh', zIndex:0,
             background: 'radial-gradient(60% 60% at 50% 40%, rgba(10,141,75,0.35), transparent 60%)',
             filter: 'blur(30px)'
           }} />

      {/* Contenido */}
      <div style={{ position:'relative', zIndex:1 }}>
        {/* Header */}
        <header style={{ position:'sticky', top:0, backdropFilter:'blur(8px)',
                         background:'rgba(10,10,10,.35)', borderBottom:`1px solid ${ui.border}`, zIndex:50 }}>
          <div style={{ ...wrap, padding:'12px 16px', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
            <div style={{ display:'flex', alignItems:'center', gap:12 }}>
             <img
  src="https://i.postimg.cc/yDV57DYt/logo.png"
  alt="Monaco Detailing"
  style={{ height: 40, width: 'auto', borderRadius: 6 }}
/>

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

        {/* Hero centrado, dos líneas */}
        <section style={{ borderBottom:`1px solid ${ui.border}` }}>
          <div style={{ ...wrap, padding:'56px 16px', textAlign:'center' }}>
            <h1 style={{ fontSize:42, lineHeight:1.15, fontWeight:800, margin:0 }}>
              Monaco Detailing
            </h1>
            <h2 style={{ fontSize:28, lineHeight:1.2, fontWeight:700, color: ui.green, marginTop:6 }}>
              Detailing premium
            </h2>

            <p style={{ color: ui.mut, marginTop:12, maxWidth:720, marginInline:'auto' }}>
              Especialistas en estética vehicular: interior profundo, abrillantado, motor a vapor y tratamientos de protección.
            </p>

            <div style={{ display:'flex', gap:12, marginTop:18, justifyContent:'center', flexWrap:'wrap' }}>
              <button
                onClick={() => wamsg("Hola, quiero un turno para el paquete completo.")}
                style={{ border:'none', borderRadius:12, padding:'12px 16px', background:ui.green, color:'#0b0f10', fontWeight:700, cursor:'pointer' }}>
                Reservar por WhatsApp
              </button>
              <a href="#servicios"
                 style={{ border:`1px solid ${ui.border}`, borderRadius:12, padding:'12px 16px', color: ui.text, textDecoration:'none', background:'rgba(0,0,0,.2)' }}>
                Ver servicios
              </a>
            </div>

            <p style={{ color: ui.mut, fontSize:12, marginTop:12 }}>
              * Motor en el día. Interiores: <b style={{ color: ui.text }}>1 día</b>. Paquetes: <b style={{ color: ui.text }}>2–3 días</b>.
            </p>
          </div>
        </section>

        {/* Servicios */}
        <section id="servicios">
          <div style={{ ...wrap, padding:'40px 16px' }}>
            <h2 style={{ fontSize:24, fontWeight:700 }}>Servicios</h2>
            <p style={{ color: ui.mut, marginTop:6 }}>Elegí tu categoría y reservá en un clic.</p>

            <div style={{ marginTop:16 }}>
              <h3 style={{ color: ui.green, fontWeight:700 }}>Autos — Hatch / Sedan</h3>
              <div style={{ display:'grid', gap:16, gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', marginTop:10 }}>
                {services.autos.map((s, i) => <ServiceCard s={s} key={`a-${i}`} />)}
              </div>
            </div>

            <div style={{ marginTop:24 }}>
              <h3 style={{ color: ui.green, fontWeight:700 }}>SUV / Pick-Up</h3>
              <div style={{ display:'grid', gap:16, gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', marginTop:10 }}>
                {services.suv.map((s, i) => <ServiceCard s={s} key={`s-${i}`} />)}
              </div>
            </div>

            <div style={{ marginTop:24 }}>
              <h3 style={{ color: ui.green, fontWeight:700 }}>Motos</h3>
              <div style={{ display:'grid', gap:16, gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', marginTop:10 }}>
                {services.motos.map((s, i) => <ServiceCard s={s} key={`m-${i}`} />)}
              </div>
            </div>
          </div>
        </section>

        {/* Tratamientos */}
        <section id="tratamientos" style={{ borderTop:`1px solid ${ui.border}`, borderBottom:`1px solid ${ui.border}` }}>
          <div style={{ ...wrap, padding:'40px 16px' }}>
            <h2 style={{ fontSize:24, fontWeight:700 }}>Tratamientos de Protección</h2>
            <p style={{ color: ui.mut, marginTop:6 }}>Elegí el recubrimiento y la duración que necesitás.</p>

            <div style={{ display:'grid', gap:16, gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', marginTop:16 }}>
              {tratamientos.map((t, idx) => (
                <div key={idx} style={{ border:`1px solid ${ui.border}`, borderRadius:16, padding:16, background: ui.panel }}>
                  <h3 style={{ color: ui.green, marginBottom:10, fontWeight:700 }}>{t.grupo}</h3>
                  {t.items.map((it, i) => (
                    <div key={i} style={{ display:'flex', justifyContent:'space-between', gap:12, marginTop:12 }}>
                      <div>
                        <p style={{ fontWeight:600 }}>{it.name}</p>
                        <p style={{ color: ui.mut, fontSize:12 }}>{it.detalle}</p>
                      </div>
                      <div style={{ textAlign:'right' }}>
                        <p style={{ color: ui.green, fontWeight:700 }}>{`$${it.price.toLocaleString('es-AR')}`}</p>
                        <button
                          onClick={() => wamsg(`Hola, me interesa el tratamiento ${it.name} (${t.grupo}) por $${it.price.toLocaleString('es-AR')}.`)}
                          style={{ marginTop:6, fontSize:12, textDecoration:'underline', background:'none', border:'none', color: ui.text, cursor:'pointer' }}>
                          Consultar por WhatsApp
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NUEVO: Videos (YouTube Shorts) */}
        <section id="videos">
          <div style={{ ...wrap, padding:'40px 16px' }}>
            <h2 style={{ fontSize:24, fontWeight:700 }}>Videos</h2>
            <p style={{ color: ui.mut, marginTop:6 }}>Algunos trabajos y resultados recientes.</p>

            <div style={{ display:'grid', gap:16, gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', marginTop:16 }}>
              {videos.map((id) => (
                <div key={id} style={{
                  border:`1px solid ${ui.border}`,
                  borderRadius:16,
                  overflow:'hidden',
                  background:'rgba(0,0,0,.25)',
                  display:'grid',
                  placeItems:'center'
                }}>
                  <div style={{ width:'100%', aspectRatio:'9 / 16' }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${id}`}
                      title={`YouTube video ${id}`}
                      style={{ width:'100%', height:'100%', border:0, display:'block' }}
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

        {/* Contacto + Ubicación */}
        <section id="contacto">
          <div style={{ ...wrap, padding:'40px 16px', display:'grid', gap:24 }}>
            {/* Contacto */}
            <div style={{ display:'grid', gap:16 }}>
              <h2 style={{ fontSize:24, fontWeight:700 }}>Contacto</h2>
              <p style={{ color: ui.mut }}>Escribinos y coordinamos tu turno.</p>

              <div style={{ display:'grid', gap:12 }}>
                <button onClick={() => wamsg("Hola Monaco Detailing, me gustaría agendar un turno.")}
                        style={{ width:'100%', border:'none', borderRadius:12, padding:'12px 16px', background: ui.green, color:'#0b0f10', fontWeight:700, cursor:'pointer' }}>
                  WhatsApp directo
                </button>
                <a href="https://www.instagram.com/monacodetailing.arg/" target="_blank" rel="noreferrer"
                   style={{ textAlign:'center', width:'100%', border:`1px solid ${ui.border}`, borderRadius:12, padding:'12px 16px', color: ui.text, textDecoration:'none', background:'rgba(0,0,0,.2)' }}>
                  Instagram @monacodetailing.arg
                </a>
              </div>

              <form onSubmit={(e) => { e.preventDefault(); wamsg("Hola, completé el formulario del sitio y quiero reservar un servicio."); }}
                    style={{ background: ui.panel, border:`1px solid ${ui.border}`, borderRadius:16, padding:16 }}>
                <h3 style={{ fontSize:18, fontWeight:700, marginBottom:12 }}>Reservá ahora</h3>
                <div style={{ display:'grid', gap:12 }}>
                  <input style={{ background: ui.hard, border:`1px solid ${ui.border}`, borderRadius:12, padding:'12px 14px', color: ui.text }}
                         placeholder="Nombre" required/>
                  <input style={{ background: ui.hard, border:`1px solid ${ui.border}`, borderRadius:12, padding:'12px 14px', color: ui.text }}
                         placeholder="Modelo del vehículo" required/>

                  {/* Selector con TODOS los servicios + tratamientos */}
                  <select defaultValue="" required
                          style={{ background: ui.hard, border:`1px solid ${ui.border}`, borderRadius:12, padding:'12px 14px', color: ui.text }}>
                    <option value="" disabled>Elegí un servicio o tratamiento</option>

                    <optgroup label="Servicios — Autos (Hatch / Sedan)">
                      {services.autos.map((s, i) => (
                        <option key={`oa-${i}`}>{`${s.name} — ${typeof s.price==='number' ? `$${s.price.toLocaleString('es-AR')}` : `$${s.price}`}`}</option>
                      ))}
                    </optgroup>

                    <optgroup label="Servicios — SUV / Pick-Up">
                      {services.suv.map((s, i) => (
                        <option key={`os-${i}`}>{`${s.name} — ${typeof s.price==='number' ? `$${s.price.toLocaleString('es-AR')}` : `$${s.price}`}`}</option>
                      ))}
                    </optgroup>

                    <optgroup label="Servicios — Motos">
                      {services.motos.map((s, i) => (
                        <option key={`om-${i}`}>{`${s.name} — ${typeof s.price==='number' ? `$${s.price.toLocaleString('es-AR')}` : `$${s.price}`}`}</option>
                      ))}
                    </optgroup>

                    <optgroup label="Tratamientos">
                      {tratamientos.flatMap((t, gi) =>
                        t.items.map((it, i) => (
                          <option key={`tr-${gi}-${i}`}>{`${it.name} (${t.grupo}) — $${it.price.toLocaleString('es-AR')}`}</option>
                        ))
                      )}
                    </optgroup>
                  </select>

                  <button style={{ border:'none', borderRadius:12, padding:'12px 16px', background: ui.green, color:'#0b0f10', fontWeight:700, cursor:'pointer' }}>
                    Confirmar reserva
                  </button>
                  <p style={{ color: ui.mut, fontSize:12 }}>Tiempos: motor en el día; interiores 1 día; paquetes 2–3 días.</p>
                </div>
              </form>
            </div>

            {/* Ubicación */}
            <div style={{ display:'grid', gap:8 }}>
              <h2 style={{ fontSize:24, fontWeight:700 }}>Ubicación</h2>
              <p style={{ color: ui.mut }}>Carlos Francisco Melo 3685, Vicente López, Buenos Aires</p>
              <div style={{ border:`1px solid ${ui.border}`, borderRadius:16, overflow:'hidden', background:'rgba(0,0,0,.25)' }}>
                <iframe
                  title="Ubicación"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.1955973070765!2d-58.49162822425967!3d-34.59861107295553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb7683b6e0d5d%3A0x8e7b6b3c67c1f4a8!2sCarlos%20Francisco%20Melo%203685%2C%20Vicente%20L%C3%B3pez!5e0!3m2!1ses!2sar!4v1690000000000!5m2!1ses!2sar"
                  width="100%" height="360" style={{ border:0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ borderTop:`1px solid ${ui.border}` }}>
          <div style={{ ...wrap, padding:'16px', display:'flex', gap:12, alignItems:'center', justifyContent:'space-between', flexWrap:'wrap' }}>
            <small style={{ color: ui.mut }}>© {new Date().getFullYear()} Monaco Detailing.</small>
            <div style={{ display:'flex', gap:12 }}>
              <a href="https://www.instagram.com/monacodetailing.arg/" target="_blank" rel="noreferrer" style={{ color: ui.text, textDecoration:'none' }}>Instagram</a>
              <button onClick={() => wamsg("Hola, vengo desde la web y quiero consultar por un servicio.")}
                      style={{ border:'none', borderRadius:10, padding:'8px 12px', background:ui.green, color:'#0b0f10', fontWeight:700, cursor:'pointer' }}>
                WhatsApp
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
