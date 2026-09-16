import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Image } from '@/components/ui/image';

const ABOUT_IMG = 'https://media.base44.com/images/public/6aa285c0629ba0aa79d83234/77343b01d_generated_c2392b60.jpg';

const timeline = [
  { year: '1995', label: 'Nacimiento de ACHEC' },
  { year: '2025', label: 'Nueva etapa institucional' },
  { year: '2026', label: 'Desafíos del futuro' },
];

export default function AboutAchec() {
  return (
    <section id="achec" className="py-24 lg:py-36 bg-achec-light/40">
      <div className="container-achec-wide">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: image */}
          <div className="lg:col-span-6">
            <div className="reveal relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src={ABOUT_IMG}
                alt="Edificio institucional moderno representando a ACHEC"
                className="w-full h-full object-cover"
                fittingType="fill"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-achec-deep/30 to-transparent" />
            </div>
          </div>

          {/* Right: text */}
          <div className="lg:col-span-6">
            <div className="reveal flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-achec-red" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-achec-red">
                ACHEC · Quiénes somos
              </span>
            </div>
            <h2 className="reveal reveal-delay-1 text-3xl lg:text-5xl font-extrabold text-achec-deep tracking-tight leading-tight mb-5 text-balance">
              30 años construyendo una mejor formación vial.
            </h2>
            <p className="reveal reveal-delay-2 text-lg text-achec-grey leading-relaxed mb-8">
              ACHEC, la Asociación Chilena de Escuelas de Conductores A.G., reúne y representa a las escuelas de conductores del país, trabajando por la profesionalización del sector, la educación vial y la seguridad en las rutas de Chile.
            </p>

            {/* Timeline */}
            <div className="reveal reveal-delay-3 space-y-0 mb-10">
              {timeline.map((t, i) => (
                <div key={t.year} className="flex gap-5 pb-6 last:pb-0 relative">
                  {i < timeline.length - 1 && (
                    <div className="absolute left-[15px] top-10 bottom-0 w-px bg-achec-deep/10" />
                  )}
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-achec-red flex items-center justify-center z-10">
                    <span className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-achec-deep tracking-tight">{t.year}</div>
                    <div className="text-achec-grey">{t.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#achec"
              className="reveal reveal-delay-4 group inline-flex items-center gap-2.5 bg-achec-deep hover:bg-achec-blue text-white text-sm font-bold uppercase tracking-wider px-7 py-4 rounded-full transition-all focus-ring"
            >
              Conoce nuestra historia
              <ArrowRight className="w-4 h-4 btn-arrow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
