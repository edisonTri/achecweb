import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';

const cards = [
  { title: 'Nueva normativa', icon: '📜', desc: 'Cambios legales que afectan la conducción en Chile.' },
  { title: 'Seguridad vial', icon: '🛡️', desc: 'Consejos esenciales para prevenir accidentes.' },
  { title: 'Educación', icon: '📚', desc: 'Conceptos clave para una mejor formación vial.' },
  { title: 'Electromovilidad', icon: '⚡', desc: 'El futuro eléctrico de la movilidad en Chile.' },
  { title: 'Movilidad', icon: '🚗', desc: 'Tendencias y desafíos del transporte urbano.' },
  { title: 'Formación', icon: '🎓', desc: 'Estándares y buenas prácticas en la enseñanza.' },
];

export default function SixtySeconds() {
  return (
    <section id="educacion-vial" className="py-24 lg:py-36 bg-white">
      <div className="container-achec-wide">
        <div className="reveal max-w-2xl mb-12 lg:mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-achec-red" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-achec-red">
              Contenido rápido
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-extrabold text-achec-deep tracking-tight leading-tight">
            En 60 segundos
          </h2>
          <p className="mt-4 text-lg text-achec-grey">
            Lo esencial sobre conducción, seguridad vial y normativa.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {cards.map((card, i) => (
            <button
              key={card.title}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} group text-left bg-achec-light/50 hover:bg-white border border-achec-deep/8 hover:border-achec-red/30 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 focus-ring`}
            >
              <div className="flex items-start justify-between mb-5">
                <span className="text-3xl">{card.icon}</span>
                <Clock className="w-4 h-4 text-achec-grey" />
              </div>
              <h3 className="text-xl font-bold text-achec-deep mb-2 tracking-tight">
                {card.title}
              </h3>
              <p className="text-sm text-achec-grey leading-relaxed">
                {card.desc}
              </p>
              <div className="mt-5 flex items-center gap-2 text-achec-red text-sm font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                Leer
                <ArrowRight className="w-4 h-4 btn-arrow" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
