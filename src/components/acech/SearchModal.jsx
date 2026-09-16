import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, FileText, BookOpen, ShieldCheck, Scale, GraduationCap, Building2 } from 'lucide-react';

const sampleResults = [
  { type: 'Noticias', icon: FileText, title: 'Nueva normativa de tránsito 2025', href: '/actualidad/nueva-normativa-transito-2025' },
  { type: 'Recursos', icon: BookOpen, title: 'Manual de conducción responsable', href: '#recursos' },
  { type: 'Normativa', icon: Scale, title: 'Ley de tránsito actualizada', href: '#recursos' },
  { type: 'Educación vial', icon: GraduationCap, title: 'Educación vial y nuevas tecnologías', href: '#educacion-vial' },
  { type: 'Seguridad vial', icon: ShieldCheck, title: 'Conducción en condiciones adversas', href: '#seguridad-vial' },
  { type: 'Escuelas', icon: Building2, title: 'Escuelas asociadas en Valparaíso', href: '#contacto' },
];

const categories = ['Noticias', 'Recursos', 'Normativa', 'Educación vial', 'Seguridad vial', 'Documentos', 'Escuelas', 'Artículos'];

export default function SearchModal({ open, onClose }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [open]);

  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') onClose();
    }
    if (open) document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  if (!open) return null;

  const filtered = query
    ? sampleResults.filter((r) => r.title.toLowerCase().includes(query.toLowerCase()))
    : sampleResults;

  return (
    <div className="fixed inset-0 z-[70] flex items-start justify-center pt-24 px-4">
      <div className="absolute inset-0 bg-achec-deep/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300">
        {/* Search input */}
        <div className="flex items-center gap-4 px-6 py-5 border-b border-achec-deep/10">
          <Search className="w-5 h-5 text-achec-grey flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="¿Qué estás buscando?"
            className="flex-1 text-lg text-achec-deep placeholder:text-achec-grey/50 bg-transparent outline-none"
          />
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-achec-grey hover:text-achec-deep rounded-full focus-ring"
            aria-label="Cerrar búsqueda"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Categories */}
        <div className="px-6 py-4 border-b border-achec-deep/8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setQuery(cat)}
                className="text-xs font-semibold px-3 py-1.5 rounded-full bg-achec-light text-achec-grey hover:bg-achec-deep hover:text-white transition-colors focus-ring"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="max-h-[400px] overflow-y-auto p-2">
          {filtered.length > 0 ? (
            filtered.map((r, i) => {
              const Icon = r.icon;
              return (
                <a
                  key={i}
                  href={r.href}
                  onClick={onClose}
                  className="flex items-center gap-4 px-4 py-3.5 rounded-xl hover:bg-achec-light/50 transition-colors group focus-ring"
                >
                  <div className="w-10 h-10 rounded-lg bg-achec-light flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-achec-blue" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-achec-red mb-0.5">{r.type}</div>
                    <div className="text-sm font-semibold text-achec-deep truncate">{r.title}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-achec-grey group-hover:text-achec-red transition-colors flex-shrink-0" />
                </a>
              );
            })
          ) : (
            <div className="px-4 py-12 text-center text-achec-grey">
              <p className="text-sm">No se encontraron resultados para "{query}"</p>
            </div>
          )}
        </div>

        <div className="px-6 py-3 border-t border-achec-deep/8 bg-achec-light/30 flex items-center justify-between text-xs text-achec-grey">
          <span>Presiona <kbd className="px-1.5 py-0.5 rounded bg-white border border-achec-deep/10 font-mono">Esc</kbd> para cerrar</span>
          <span>{filtered.length} resultados</span>
        </div>
      </div>
    </div>
  );
}
