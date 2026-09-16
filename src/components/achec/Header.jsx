import React, { useEffect, useState } from 'react';
import { Search, Menu, X, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const navItems = [
{ label: 'Inicio', href: '/' },
{ label: "Noticias", href: '/actualidad' },
{ label: 'Educación vial', href: '/educacion-vial' },
{ label: 'Seguridad vial', href: '/seguridad-vial' },
{ label: 'Recursos', href: '/recursos' },
{ label: 'ACHEC', href: '/achec' },
{ label: 'Contacto', href: '/contacto' }];


export default function Header({ onSearchClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 60);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClass = scrolled ?
  'header-solid' :
  'header-transparent';

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerClass}`}>
        <div className="container-achec-wide">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link to="/" className="flex items-center group focus-ring" aria-label="ACHEC Inicio">
              <img
                src="https://media.base44.com/images/public/6aa285c0629ba0aa79d83234/392b44126_logo-ACHEC-1-removebg-preview.png"
                alt="ACHEC — Asociación Chilena de Escuelas de Conductores"
                className="h-9 lg:h-11 w-auto" />
              
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Navegación principal">
              {navItems.map((item) =>
              <Link
                key={item.label}
                to={item.href}
                className="px-3.5 py-2 text-[13px] font-semibold hover:text-white transition-colors tracking-wide focus-ring rounded-md text-white/80">
                
                  {item.label}
                </Link>
              )}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={onSearchClick}
                className="hidden sm:flex items-center justify-center w-10 h-10 text-white/80 hover:text-white transition-colors focus-ring rounded-full"
                aria-label="Buscar">
                
                <Search className="w-[18px] h-[18px]" />
              </button>
              <Link
                to="/hazte-socio"
                className="hidden sm:inline-flex items-center gap-1.5 bg-achec-red hover:bg-achec-red/90 text-white text-[13px] font-bold uppercase tracking-wider px-5 py-3 rounded-full transition-all focus-ring">
                
                Hazte socio
              </Link>
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden flex items-center justify-center w-10 h-10 text-white focus-ring rounded-full"
                aria-label="Abrir menú">
                
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen &&
      <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-achec-deep/95 backdrop-blur-md" onClick={() => setMobileOpen(false)} />
          <div className="relative h-full flex flex-col">
            <div className="flex items-center justify-between h-20 px-6 border-b border-white/10">
              <Link to="/" onClick={() => setMobileOpen(false)}>
              <img
                src="https://media.base44.com/images/public/6aa285c0629ba0aa79d83234/392b44126_logo-ACHEC-1-removebg-preview.png"
                alt="ACHEC"
                className="h-9 w-auto" />
              </Link>
            
              <button
              onClick={() => setMobileOpen(false)}
              className="w-10 h-10 flex items-center justify-center text-white focus-ring rounded-full"
              aria-label="Cerrar menú">
              
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-1" aria-label="Navegación móvil">
              {navItems.map((item) =>
            <Link
              key={item.label}
              to={item.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between py-4 text-xl font-bold text-white/90 hover:text-white border-b border-white/10 transition-colors">
              
                  {item.label}
                  <ChevronRight className="w-5 h-5 text-achec-red" />
                </Link>
            )}
            </nav>
            <div className="px-6 pb-10 flex flex-col gap-3">
              <button
              onClick={() => {onSearchClick?.();setMobileOpen(false);}}
              className="flex items-center justify-center gap-2 w-full border border-white/20 text-white py-3.5 rounded-full font-semibold">
              
                <Search className="w-5 h-5" />
                Buscar
              </button>
              <Link
              to="/hazte-socio"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center w-full bg-achec-red text-white py-3.5 rounded-full font-bold uppercase tracking-wider">
              
                Hazte socio
              </Link>
            </div>
          </div>
        </div>
      }
    </>);

}
