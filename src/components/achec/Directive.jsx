import React from 'react';
import { ArrowRight, User } from 'lucide-react';

const members = [
{ name: "Ignacio Piña", role: 'Presidente', photo: null },
{ name: 'Nombre del Vicepresidente', role: 'Vicepresidente', photo: null },
{ name: 'Nombre del Director', role: 'Director', photo: null },
{ name: 'Nombre del Director', role: 'Director', photo: null }];


export default function Directive() {
  return (
    <section className="py-24 lg:py-36 bg-white">
      <div className="container-achec">
        <div className="reveal max-w-2xl mb-12">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-achec-red" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-achec-red">
              Directiva
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-achec-deep tracking-tight leading-tight">
            Personas detrás de ACHEC
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {members.map((m, i) =>
          <div
            key={i}
            className={`reveal reveal-delay-${Math.min(i + 1, 4)} group bg-achec-light/40 rounded-2xl p-6 border border-achec-deep/8 hover:border-achec-red/20 transition-all`}>
            
              <div className="w-full aspect-square rounded-xl bg-gradient-to-br from-achec-deep to-achec-blue flex items-center justify-center mb-5 overflow-hidden">
                {m.photo ?
              <img src={m.photo} alt={m.name} className="w-full h-full object-cover" /> :

              <User className="w-12 h-12 text-white/30" />
              }
              </div>
              <h3 className="text-lg font-bold text-achec-deep tracking-tight">{m.name}</h3>
              <p className="text-sm text-achec-grey mt-1">{m.role}</p>
            </div>
          )}
        </div>

        <div className="reveal mt-10">
          <a
            href="#achec"
            className="group inline-flex items-center gap-2.5 text-achec-deep hover:text-achec-red text-sm font-bold uppercase tracking-wider transition-colors focus-ring">
            
            Conoce la directiva completa
            <ArrowRight className="w-4 h-4 btn-arrow" />
          </a>
        </div>

        <p className="mt-6 text-xs text-achec-grey/60 italic">
          Nombres de demostración — editable desde el panel de administración.
        </p>
      </div>
    </section>);

}
