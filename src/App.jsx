import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Header = () => (
  <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
    <div className="max-w-[1200px] mx-auto px-6 h-[64px] flex justify-between items-center">
      <Link to="/" className="font-black text-[24px] tracking-tight">ACHEC</Link>
      <nav className="hidden md:flex gap-6 text-[13px] font-bold uppercase tracking-widest text-gray-600">
        <Link to="/" className="hover:text-black">Inicio</Link>
        <Link to="/actualidad" className="hover:text-black">Actualidad</Link>
        <Link to="/educacion-vial" className="hover:text-black">Educación Vial</Link>
        <Link to="/seguridad-vial" className="hover:text-black">Seguridad</Link>
        <Link to="/institucional" className="hover:text-black">Institucional</Link>
      </nav>
      <Link to="/hazte-socio" className="bg-[#0f172a] text-white px-5 py-2 rounded-full text-[13px] font-bold">HAZTE SOCIO</Link>
    </div>
  </header>
);

const Home = () => (
  <div>
    {/* HERO - como en tu foto */}
    <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <p className="text-[12px] font-black tracking-[0.3em] text-blue-600 mb-4">ASOCIACIÓN CHILENA</p>
        <h1 className="text-[48px] md:text-[68px] font-black leading-[0.9] tracking-tighter">Movilidad<br/>segura<br/>para todos</h1>
        <p className="mt-6 text-[17px] text-gray-500 max-w-[440px] leading-relaxed">Trabajamos por la educación vial, la seguridad de ciclistas y una convivencia vial responsable en Chile.</p>
        <div className="mt-8 flex gap-3">
          <Link to="/hazte-socio" className="bg-[#0f172a] text-white px-7 py-3.5 rounded-full font-bold text-[14px]">Únete a ACHEC</Link>
          <Link to="/actualidad" className="border px-7 py-3.5 rounded-full font-bold text-[14px]">Ver noticias</Link>
        </div>
      </div>
      <div className="bg-[#f8fafc] rounded-[32px] p-8 grid grid-cols-2 gap-4 border">
        <div className="bg-white rounded-2xl p-5 border"><p className="text-3xl font-black">+500</p><p className="text-xs text-gray-500 mt-1">Socios activos</p></div>
        <div className="bg-white rounded-2xl p-5 border"><p className="text-3xl font-black">12</p><p className="text-xs text-gray-500 mt-1">Regiones</p></div>
        <div className="col-span-2 bg-[#0f172a] text-white rounded-2xl p-6"><p className="font-bold">Educación Vial</p><p className="text-sm text-white/60 mt-1">Talleres en colegios y empresas todo el año</p></div>
      </div>
    </div>

    {/* ACTUALIDAD - como en tu screenshot */}
    <div className="bg-[#f8fafc] py-16 border-y">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-3xl font-black tracking-tight">Actualidad</h2>
          <Link to="/actualidad" className="text-sm font-bold underline">Ver todo</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {t:'Nueva ley de convivencia vial', d:'Cambios clave para ciclistas 2026', img:'https://images.unsplash.com/photo-1484156818044-c0402b7044a0?q=80&w=500'},
            {t:'Taller de seguridad en Santiago', d:'Capacitación gratuita este mes', img:'https://images.unsplash.com/photo-1571068316344-75bc76f77890?q=80&w=500'},
            {t:'Ciclovías temporales', d:'Mapa actualizado de rutas seguras', img:'https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=500'},
          ].map((n,i)=>(
            <div key={i} className="bg-white rounded-[24px] overflow-hidden border group">
              <img src={n.img} className="h-[180px] w-full object-cover group-hover:scale-105 transition" />
              <div className="p-5"><p className="font-bold leading-tight">{n.t}</p><p className="text-sm text-gray-500 mt-2">{n.d}</p></div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* EDUCACION / SEGURIDAD */}
    <div className="max-w-[1200px] mx-auto px-6 py-16 grid md:grid-cols-2 gap-6">
      <div className="rounded-[32px] bg-[#eef2ff] p-10">
        <h3 className="text-2xl font-black">Educación Vial</h3>
        <p className="text-gray-600 mt-3">Material didáctico, guías para profesores y cursos certificados por CONASET.</p>
        <Link to="/educacion-vial" className="inline-block mt-6 font-bold text-sm bg-white px-5 py-2.5 rounded-full border">Explorar →</Link>
      </div>
      <div className="rounded-[32px] bg-[#fef3c7] p-10">
        <h3 className="text-2xl font-black">Seguridad Vial</h3>
        <p className="text-gray-600 mt-3">Estadísticas, análisis de siniestros y recomendaciones para una movilidad segura.</p>
        <Link to="/seguridad-vial" className="inline-block mt-6 font-bold text-sm bg-white px-5 py-2.5 rounded-full border">Explorar →</Link>
      </div>
    </div>
  </div>
);

const Page = ({title, children}) => (
  <div className="max-w-[800px] mx-auto px-6 py-16 min-h-[60vh]">
    <h1 className="text-5xl font-black tracking-tighter mb-6">{title}</h1>
    <div className="text-[17px] leading-relaxed text-gray-600">{children}</div>
  </div>
);

const Footer = () => (
  <footer className="bg-[#0f172a] text-white mt-10">
    <div className="max-w-[1200px] mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
      <div><p className="font-black text-xl">ACHEC</p><p className="text-white/60 text-sm mt-3">Asociación Chilena de Educación y Convivencia Vial.</p></div>
      <div><p className="font-bold text-sm">Secciones</p><ul className="mt-3 space-y-2 text-sm text-white/60"><li>Actualidad</li><li>Educación Vial</li><li>Seguridad Vial</li></ul></div>
      <div><p className="font-bold text-sm">Institucional</p><ul className="mt-3 space-y-2 text-sm text-white/60"><li>Ministerio</li><li>Conaset</li><li>Achec</li></ul></div>
      <div><p className="font-bold text-sm">Contacto</p><p className="mt-3 text-sm text-white/60">contacto@achec.cl<br/>Santiago, Chile</p></div>
    </div>
    <div className="border-t border-white/10 py-6 text-center text-xs text-white/40">© 2026 ACHEC - Todos los derechos reservados</div>
  </footer>
);

export default function App(){
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans antialiased" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/actualidad" element={<Page title="Actualidad">Noticias, leyes y contingencia vial actualizada.</Page>} />
          <Route path="/educacion-vial" element={<Page title="Educación Vial">Cursos, talleres y material descargable para colegios y empresas.</Page>} />
          <Route path="/seguridad-vial" element={<Page title="Seguridad Vial">Consejos, estudios y prevención de siniestros viales.</Page>} />
          <Route path="/institucional" element={<Page title="Institucional">Información sobre Ministerio de Transportes, Conaset y ACHEC.</Page>} />
          <Route path="/recursos" element={<Page title="Recursos">Manuales y documentos.</Page>} />
          <Route path="/contacto" element={<Page title="Contacto">Escríbenos a contacto@achec.cl</Page>} />
          <Route path="/hazte-socio" element={<Page title="Hazte Socio">Únete y apoya la movilidad segura en Chile.</Page>} />
          <Route path="*" element={<Page title="404">Página no encontrada - <Link to='/' className='underline'>Volver al inicio</Link></Page>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
