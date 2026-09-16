import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';

// --- COMPONENTES GENERALES ---
const Header = () => (
  <header style={{background: 'white', borderBottom: '1px solid #e5e7eb', position: 'sticky', top: 0, zIndex: 50}}>
    <div style={{maxWidth: '1200px', margin: '0 auto', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <Link to="/" style={{fontWeight: '900', fontSize: '28px', color: '#111827', textDecoration: 'none'}}>ACHEC</Link>
      <nav style={{display: 'flex', gap: '16px', flexWrap: 'wrap', fontSize: '14px', fontWeight: '600'}}>
        <Link to="/" style={{color: '#374151', textDecoration: 'none'}}>Inicio</Link>
        <Link to="/actualidad" style={{color: '#374151', textDecoration: 'none'}}>Actualidad</Link>
        <Link to="/educacion-vial" style={{color: '#374151', textDecoration: 'none'}}>Educación Vial</Link>
        <Link to="/seguridad-vial" style={{color: '#374151', textDecoration: 'none'}}>Seguridad Vial</Link>
        <Link to="/institucional" style={{color: '#374151', textDecoration: 'none'}}>Institucional</Link>
        <Link to="/contacto" style={{color: '#fff', background: '#111827', padding: '8px 16px', borderRadius: '20px', textDecoration: 'none'}}>Hazte Socio</Link>
      </nav>
    </div>
  </header>
);

const Footer = () => (
  <footer style={{background: '#111827', color: 'white', padding: '40px 24px', marginTop: '60px', textAlign: 'center'}}>
    <p style={{fontWeight: '800', fontSize: '20px'}}>ACHEC</p>
    <p style={{color: '#9ca3af', fontSize: '14px', marginTop: '8px'}}>Asociación Chilena de Educación y Seguridad Vial - Todos los derechos reservados 2026</p>
  </footer>
);

const PageWrapper = ({ children, title }) => (
  <div style={{maxWidth: '900px', margin: '40px auto', padding: '0 24px', minHeight: '60vh'}}>
    <h1 style={{fontSize: '42px', fontWeight: '800', marginBottom: '16px'}}>{title}</h1>
    <div style={{color: '#4b5563', lineHeight: '1.7', fontSize: '17px'}}>{children}</div>
  </div>
);

// --- PAGINAS (IGUAL QUE EN BASE44) ---
const Home = () => (
  <div>
    <div style={{background: '#f3f4f6', padding: '80px 24px', textAlign: 'center'}}>
      <h1 style={{fontSize: '56px', fontWeight: '900', lineHeight: '1.1'}}>Movilidad segura<br/>para todos</h1>
      <p style={{maxWidth: '600px', margin: '20px auto', color: '#4b5563', fontSize: '18px'}}>En ACHEC trabajamos por la educación vial, la seguridad de los ciclistas y una convivencia vial responsable.</p>
      <Link to="/hazte-socio" style={{display: 'inline-block', marginTop: '20px', background: '#111827', color: 'white', padding: '14px 28px', borderRadius: '30px', textDecoration: 'none', fontWeight: '700'}}>Únete a ACHEC</Link>
    </div>
    <div style={{maxWidth: '1000px', margin: '40px auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', padding: '0 24px'}}>
      <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '24px'}}><h3>Actualidad</h3><p>Noticias y contingencia vial.</p><Link to="/actualidad">Ver más →</Link></div>
      <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '24px'}}><h3>Educación Vial</h3><p>Cursos y material educativo.</p><Link to="/educacion-vial">Ver más →</Link></div>
      <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '24px'}}><h3>Seguridad Vial</h3><p>Estudios y prevención.</p><Link to="/seguridad-vial">Ver más →</Link></div>
    </div>
  </div>
);

const Actualidad = () => <PageWrapper title="Actualidad"><p>Últimas noticias sobre movilidad, ciclovías y normativa. Aquí va el listado que tienes en Base44 en tu página Actualidad.</p></PageWrapper>;
const EducacionVial = () => <PageWrapper title="Educación Vial"><p>Programas educativos, talleres en colegios, material descargable y campañas. Este es el contenido de tu página EducacionVial de Base44.</p></PageWrapper>;
const SeguridadVial = () => <PageWrapper title="Seguridad Vial"><p>Consejos, estadísticas de siniestralidad y buenas prácticas para ciclistas y conductores. Contenido de tu página SeguridadVial.</p></PageWrapper>;
const Recursos = () => <PageWrapper title="Recursos"><p>Manuales, leyes de tránsito, guías y documentos descargables.</p></PageWrapper>;
const Institucional = () => <PageWrapper title="Institucional"><p><strong>Ministerio / Conaset / ACHEC</strong><br/><br/>Aquí unifico tus 3 páginas institucionales de Base44. Información sobre nuestro rol con el Ministerio de Transportes, Conaset y quiénes somos como ACHEC.</p></PageWrapper>;
const Contacto = () => <PageWrapper title="Contacto"><p>Escríbenos a contacto@achec.cl<br/><br/>Formulario de contacto próximamente.</p></PageWrapper>;
const HazteSocio = () => <PageWrapper title="Hazte Socio de ACHEC"><p>Únete a la asociación y apoya la educación vial en Chile. Beneficios, formulario de inscripción y aportes.</p><br/><button style={{background: '#111827', color: 'white', padding: '12px 24px', borderRadius: '8px', border: 'none'}}>Quiero ser socio</button></PageWrapper>;

// --- APP PRINCIPAL ---
export default function App() {
  return (
    <Router>
      <div style={{fontFamily: 'Inter, system-ui, sans-serif', background: '#ffffff', minHeight: '100vh'}}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/actualidad" element={<Actualidad />} />
          <Route path="/educacion-vial" element={<EducacionVial />} />
          <Route path="/seguridad-vial" element={<SeguridadVial />} />
          <Route path="/recursos" element={<Recursos />} />
          <Route path="/institucional" element={<Institucional />} />
          <Route path="/institucional-ministerio" element={<Institucional />} />
          <Route path="/institucional-conaset" element={<Institucional />} />
          <Route path="/achec" element={<Institucional />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/hazte-socio" element={<HazteSocio />} />
          <Route path="*" element={<PageWrapper title="404 - Página no encontrada"><p>La página que buscas no existe.</p><Link to="/">Volver al inicio</Link></PageWrapper>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
