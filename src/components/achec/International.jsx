import React from 'react';
import { ArrowRight, Globe } from 'lucide-react';

const partners = [
  'Organización Internacional',
  'Asociación Regional',
  'Instituto de Seguridad Vial',
  'Consejo de Transporte',
  'Fundación Movilidad',
  'Red Iberoamericana',
];

export default function International() {
  return (
    <section className="py-24 lg:py-36 bg-achec-deep relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-achec-secondary blur-[150px]" />
      </div>
      <div className="relative z-10 container-achec-wide">
        <div className="reveal max-w-3xl mb-12 lg:mb-16 text-center mx-auto">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-8 h-px bg-achec-red" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-achec-red">
              Presencia internacional
            </span>
            <span className="w-8 h-px bg-achec-red" />
          </div>
          <h2 className="text-4xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Chile no conduce solo.
          </h2>
          <p className="mt-5 text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
            ACHEC participa y mantiene vínculos con organizaciones internacionales relacionadas con la educación y seguridad vial.
          </p>
        </div>

        {/* Logos grid */}
        <div className="reveal reveal-delay-1 grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-5 mb-12">
          {partners.map((p, i) => (
            <div
              key={i}
              className="glass-card rounded-xl p-6 lg:p-8 flex items-center justify-center text-center group hover:border-white/25 transition-all"
            >
              <div className="flex flex-col items-center gap-3">
                <Globe className="w-7 h-7 text-white/30 group-hover:text-achec-red transition-colors" />
                <span className="text-sm font-semibold text-white/50 group-hover:text-white/80 transition-colors">
                  {p}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal reveal-delay-2 text-center">
          <a
            href="#achec"
            className="group inline-flex items-center gap-2.5 border border-white/25 hover:bg-white/5 text-white text-sm font-bold uppercase tracking-wider px-7 py-4 rounded-full transition-all focus-ring"
          >
            Conocer nuestra red internacional
            <ArrowRight className="w-4 h-4 btn-arrow" />
          </a>
        </div>

        <p className="mt-8 text-xs text-white/30 italic text-center">
          Organizaciones de demostración — editable desde el panel de administración.
        </p>
      </div>
    </section>
  );
}
