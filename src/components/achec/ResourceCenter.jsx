import React, { useState } from 'react';
import { ArrowRight, BookOpen, Video, FileQuestion, FileText, BarChart3, Scale } from 'lucide-react';

const resourceTypes = [
  { key: 'MANUALES', label: 'Manuales', icon: BookOpen, desc: 'Material de estudio.' },
  { key: 'VIDEOS', label: 'Videos', icon: Video, desc: 'Seguridad vial y buenas prácticas.' },
  { key: 'TESTS', label: 'Tests', icon: FileQuestion, desc: 'Pon a prueba tus conocimientos.' },
];

const extraTypes = [
  { key: 'DOCUMENTOS', label: 'Documentos', icon: FileText },
  { key: 'ESTUDIOS', label: 'Estudios', icon: BarChart3 },
  { key: 'NORMATIVA', label: 'Normativa', icon: Scale },
];

const filters = ['Todos', 'Manuales', 'Videos', 'Tests', 'Documentos', 'Estudios', 'Normativa'];

const sampleResources = [
  { type: 'MANUALES', title: 'Manual de conducción responsable', desc: 'Guía completa sobre normas y técnicas de conducción segura.' },
  { type: 'VIDEOS', title: 'Conducción en condiciones adversas', desc: 'Cómo manejar bajo lluvia, niebla y otras condiciones difíciles.' },
  { type: 'TESTS', title: 'Test de señales de tránsito', desc: 'Evalúa tu conocimiento sobre señalización vial chilena.' },
  { type: 'DOCUMENTOS', title: 'Ley de tránsito actualizada', desc: 'Documento oficial con las últimas modificaciones normativas.' },
  { type: 'ESTUDIOS', title: 'Estudio sobre seguridad vial urbana', desc: 'Análisis de accidentabilidad en zonas urbanas de Chile.' },
  { type: 'NORMATIVA', title: 'Reglamento de escuelas de conductores', desc: 'Marco normativo para el funcionamiento de escuelas.' },
];

const typeIcons = {
  MANUALES: BookOpen,
  VIDEOS: Video,
  TESTS: FileQuestion,
  DOCUMENTOS: FileText,
  ESTUDIOS: BarChart3,
  NORMATIVA: Scale,
};

export default function ResourceCenter() {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filtered = activeFilter === 'Todos'
    ? sampleResources
    : sampleResources.filter((r) => {
        const map = { 'Manuales': 'MANUALES', 'Videos': 'VIDEOS', 'Tests': 'TESTS', 'Documentos': 'DOCUMENTOS', 'Estudios': 'ESTUDIOS', 'Normativa': 'NORMATIVA' };
        return r.type === map[activeFilter];
      });

  return (
    <section id="recursos" className="py-24 lg:py-36 bg-achec-deep relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-achec-secondary blur-[120px]" />
      </div>
      <div className="relative z-10 container-achec-wide">
        <div className="reveal max-w-2xl mb-12 lg:mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-achec-red" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-achec-red">
              Recursos
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Centro de recursos
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Materiales, herramientas y contenidos para una mejor formación vial.
          </p>
        </div>

        {/* Main cards */}
        <div className="grid md:grid-cols-3 gap-5 lg:gap-6 mb-8">
          {resourceTypes.map((r, i) => {
            const Icon = r.icon;
            return (
              <a
                key={r.key}
                href="#recursos"
                className={`reveal reveal-delay-${Math.min(i + 1, 4)} group glass-card rounded-2xl p-7 lg:p-9 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 focus-ring`}
              >
                <div className="w-14 h-14 rounded-xl bg-achec-red/15 flex items-center justify-center mb-6 transition-colors group-hover:bg-achec-red">
                  <Icon className="w-6 h-6 text-achec-red group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">{r.label}</h3>
                <p className="text-white/55 leading-relaxed">{r.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-achec-red text-sm font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                  Explorar
                  <ArrowRight className="w-4 h-4 btn-arrow" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Extra types */}
        <div className="reveal flex flex-wrap gap-3 mb-10">
          {extraTypes.map((t) => {
            const Icon = t.icon;
            return (
              <button
                key={t.key}
                onClick={() => setActiveFilter(t.label)}
                className="flex items-center gap-2 px-5 py-3 rounded-full glass-card text-white/80 hover:text-white hover:border-white/25 transition-all text-sm font-semibold focus-ring"
              >
                <Icon className="w-4 h-4 text-achec-red" />
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Filter bar */}
        <div className="reveal sticky top-24 z-20 flex flex-wrap gap-2 mb-8 bg-achec-blue/40 backdrop-blur-md rounded-full p-1.5 border border-white/10 max-w-fit">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all focus-ring ${
                activeFilter === f
                  ? 'bg-achec-red text-white'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Filtered resources */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((r, i) => {
            const Icon = typeIcons[r.type];
            return (
              <div
                key={i}
                className="group glass-card rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-white/8 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-achec-red" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-white/40">{r.type}</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2 tracking-tight">{r.title}</h4>
                <p className="text-sm text-white/50 leading-relaxed">{r.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="reveal mt-10">
          <a
            href="#recursos"
            className="group inline-flex items-center gap-2.5 bg-achec-red hover:bg-achec-red/90 text-white text-sm font-bold uppercase tracking-wider px-7 py-4 rounded-full transition-all focus-ring"
          >
            Ver todos los recursos
            <ArrowRight className="w-4 h-4 btn-arrow" />
          </a>
        </div>

        <p className="mt-8 text-xs text-white/30 italic">
          Contenido de demostración — editable desde el panel de administración.
        </p>
      </div>
    </section>
  );
}
