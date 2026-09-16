import React from 'react';
import { Instagram, Facebook, Linkedin, Youtube, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const columns = [
  {
    title: 'Navegación',
    links: [
      { label: 'Inicio', href: '#inicio' },
      { label: 'Actualidad', href: '#actualidad' },
      { label: 'Educación vial', href: '#educacion-vial' },
      { label: 'Seguridad vial', href: '#seguridad-vial' },
      { label: 'Recursos', href: '#recursos' },
      { label: 'ACHEC', href: '#achec' },
      { label: 'Contacto', href: '#contacto' },
    ],
  },
  {
    title: 'Recursos',
    links: [
      { label: 'Manuales', href: '#recursos' },
      { label: 'Videos', href: '#recursos' },
      { label: 'Tests', href: '#recursos' },
      { label: 'Biblioteca digital', href: '#recursos' },
      { label: 'Normativa', href: '#recursos' },
    ],
  },
  {
    title: 'Para escuelas',
    links: [
      { label: 'Hazte socio', href: '#hazte-socio' },
      { label: 'Beneficios', href: '#achec' },
      { label: 'Información para asociados', href: '#achec' },
    ],
  },
];

const socials = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
];

export default function Footer() {
  return (
    <footer id="contacto" className="bg-achec-deep text-white">
      <div className="container-achec-wide py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <img
              src="https://media.base44.com/images/public/6aa285c0629ba0aa79d83234/392b44126_logo-ACHEC-1-removebg-preview.png"
              alt="ACHEC — Asociación Chilena de Escuelas de Conductores"
              className="h-11 w-auto mb-5 brightness-0 invert"
            />
            <p className="text-white/55 leading-relaxed max-w-sm mb-6">
              Formando conductores para construir un Chile más seguro.
            </p>
            <div className="space-y-3 text-sm text-white/50">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-achec-red flex-shrink-0" />
                <span>contacto@achec.cl</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-achec-red flex-shrink-0" />
                <span>+56 2 0000 0000</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-achec-red flex-shrink-0" />
                <span>Santiago, Chile</span>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-white/40 mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors focus-ring"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-white/40 mb-5">
              Síguenos
            </h4>
            <div className="flex flex-wrap gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-10 h-10 rounded-full border border-white/15 hover:border-achec-red hover:bg-achec-red flex items-center justify-center text-white/60 hover:text-white transition-all focus-ring"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Horizon line */}
        <div className="horizon-line-dark my-10" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} ACHEC — Asociación Chilena de Escuelas de Conductores A.G. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Términos</a>
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
