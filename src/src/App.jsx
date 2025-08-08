import React from 'react'

export default function App() {
  return (
    <div style={{minHeight:'100vh', background:'#0a0a0a', color:'#f8fafc'}}>
      <header style={{borderBottom:'1px solid #1f2937', position:'sticky', top:0, background:'#0a0a0a'}}>
        <div style={{maxWidth:960, margin:'0 auto', padding:'12px 16px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <div style={{display:'flex', alignItems:'center', gap:12}}>
            <img src="/images/logo_md.png" alt="Monaco Detailing" style={{width:36, height:36, objectFit:'contain'}} />
            <strong>MONACO DETAILING</strong>
          </div>
          <nav style={{display:'flex', gap:16}}>
            <a href="#servicios">Servicios</a>
            <a href="#tratamientos">Tratamientos</a>
            <a href="#mapa">Mapa</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </div>
      </header>

      <main style={{maxWidth:960, margin:'0 auto', padding:'32px 16px'}}>
        <section>
          <h1 style={{fontSize:36, marginBottom:8}}>Detailing premium para un <span style={{color:'#059669'}}>acabado de showroom</span></h1>
          <p style={{color:'#94a3b8'}}>Interior profundo, abrillantado, motor a vapor y tratamientos acrílico, cerámico y grafeno.</p>
          <div style={{marginTop:16}}>
            <a href="https://wa.me/5491127469781?text=Hola%20Monaco%20Detailing%2C%20me%20gustar%C3%ADa%20agendar%20un%20turno."
               style={{background:'#059669', color:'#fff', padding:'12px 16px', borderRadius:12, textDecoration:'none'}}>Reservar por WhatsApp</a>
          </div>
          <p style={{marginTop:8, color:'#94a3b8', fontSize:12}}>Motor en el día. Resto de servicios: 2–3 días.</p>
        </section>

        <section id="servicios" style={{marginTop:40}}>
          <h2 style={{fontSize:24}}>Servicios</h2>
          <ul style={{marginTop:12, lineHeight:1.9}}>
            <li>Interior (Hatch / Sedan) — $150.000</li>
            <li>Interior al Detalle (Hatch / Sedan) — $250.000</li>
            <li>Motor a Vapor (Hatch / Sedan) — $100.000</li>
            <li>Paquete Completo (Hatch / Sedan) — $300.000</li>
            <li>Interior (SUV / Pick-Up) — $200.000</li>
            <li>Interior al Detalle (SUV / Pick-Up) — $300.000</li>
            <li>Motor a Vapor (SUV / Pick-Up) — $130.000</li>
            <li>Paquete Completo (SUV / Pick-Up) — $400.000</li>
            <li>Motos — $150.000 – $250.000</li>
          </ul>
        </section>

        <section id="tratamientos" style={{marginTop:40}}>
          <h2 style={{fontSize:24}}>Tratamientos de Protección</h2>
          <ul style={{marginTop:12, lineHeight:1.9}}>
            <li>Acrílico (Hatch/Sedan) — $300.000</li>
            <li>Cerámico (Hatch/Sedan) — $350.000</li>
            <li>Cerámico c/Grafeno (Hatch/Sedan) — $450.000</li>
            <li>Acrílico (SUV/Pick-Up) — $400.000</li>
            <li>Cerámico (SUV/Pick-Up) — $500.000</li>
            <li>Cerámico c/Grafeno (SUV/Pick-Up) — $600.000</li>
          </ul>
        </section>

        <section id="mapa" style={{marginTop:40}}>
          <h2 style={{fontSize:24}}>Encontranos</h2>
          <p style={{color:'#94a3b8'}}>Carlos Francisco Melo 3685, Vicente López, Buenos Aires</p>
          <div style={{marginTop:12, border:'1px solid #1f2937', borderRadius:16, overflow:'hidden'}}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.1955973070765!2d-58.49162822425967!3d-34.59861107295553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb7683b6e0d5d%3A0x8e7b6b3c67c1f4a8!2sCarlos%20Francisco%20Melo%203685%2C%20B1603CNI%20Vicente%20L%C3%B3pez%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1690000000000!5m2!1ses!2sar"
              width="100%" height="360" style={{border:0}} allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" title="Ubicación"></iframe>
          </div>
        </section>

        <section id="contacto" style={{marginTop:40}}>
          <h2 style={{fontSize:24}}>Contacto</h2>
          <p style={{color:'#94a3b8'}}>WhatsApp directo o Instagram</p>
          <div style={{marginTop:12, display:'flex', gap:12}}>
            <a href="https://wa.me/5491127469781?text=Hola%20Monaco%20Detailing%2C%20me%20gustar%C3%ADa%20agendar%20un%20turno."
               style={{background:'#059669', color:'#fff', padding:'10px 14px', borderRadius:10, textDecoration:'none'}}>WhatsApp</a>
            <a href="https://www.instagram.com/monacodetailing.arg/" target="_blank" rel="noreferrer"
               style={{border:'1px solid #334155', color:'#e2e8f0', padding:'10px 14px', borderRadius:10, textDecoration:'none'}}>Instagram</a>
          </div>
        </section>
      </main>

      <footer style={{borderTop:'1px solid #1f2937', marginTop:40}}>
        <div style={{maxWidth:960, margin:'0 auto', padding:'16px'}}>
          <small style={{color:'#94a3b8'}}>© {new Date().getFullYear()} Monaco Detailing</small>
        </div>
      </footer>
    </div>
  )
}
