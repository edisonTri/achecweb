import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Header(){
  return (
    <header style={{background:'#0a192f', color:'white', position:'sticky', top:0, zIndex:50}}>
      <div style={{maxWidth:'1200px', margin:'0 auto', padding:'16px 24px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <Link to="/" style={{color:'white', textDecoration:'none', fontWeight:900, fontSize:'24px'}}>ACHEC.cl</Link>
        <Link to="/hazte-socio" style={{background:'white', color:'#0a192f', padding:'8px 18px', borderRadius:'20px', textDecoration:'none', fontWeight:800, fontSize:'12px'}}>HAZTE SOCIO</Link>
      </div>
    </header>
  )
}

function Home(){
  return (
    <div>
      <div style={{background:'#0a192f', color:'white', padding:'80px 24px', textAlign:'center'}}>
        <h1 style={{fontSize:'52px', fontWeight:900, lineHeight:1}}>Más de 200 escuelas<br/>forman parte de<br/>nuestra asociación</h1>
        <p style={{color:'#8892b0', marginTop:'16px'}}>Desde 1995 formando conductores íntegros para salvar vidas.</p>
        <Link to="/institucional" style={{display:'inline-block', marginTop:'20px', background:'#64ffda', color:'#0a192f', padding:'12px 24px', borderRadius:'24px', textDecoration:'none', fontWeight:800}}>Conoce más</Link>
      </div>
      <div style={{maxWidth:'900px', margin:'40px auto', padding:'0 24px', display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'16px'}}>
        <div style={{border:'1px solid #e2e8f0', borderRadius:'12px', padding:'20px'}}><h3>Decreto 39</h3><p style={{color:'#64748b', fontSize:'14px'}}>No profesionales</p></div>
        <div style={{border:'1px solid #e2e8f0', borderRadius:'12px', padding:'20px'}}><h3>Decreto 251</h3><p style={{color:'#64748b', fontSize:'14px'}}>Profesionales</p></div>
        <div style={{border:'1px solid #e2e8f0', borderRadius:'12px', padding:'20px'}}><h3>CONASET</h3><p style={{color:'#64748b', fontSize:'14px'}}>Seguridad Vial</p></div>
      </div>
    </div>
  )
}

function App(){
  return (
    <Router>
      <div style={{fontFamily:'system-ui, sans-serif', background:'white'}}>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="*" element={<div style={{padding:'60px', textAlign:'center'}}><h2>ACHEC</h2><Link to="/">Volver al inicio</Link></div>} />
        </Routes>
        <footer style={{background:'#0a192f', color:'#8892b0', padding:'20px', textAlign:'center', marginTop:'60px'}}>ACHEC A.G. © 2026</footer>
      </div>
    </Router>
  );
}
