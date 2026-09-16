import React from 'react';
import { ArrowRight, Play, ShieldCheck, BookOpen, Users } from 'lucide-react';
import { Image } from '@/components/ui/image';

const SAFETY_IMG = 'https://media.base44.com/images/public/6aa285c0629ba0aa79d83234/e98d9b2a3_generated_image.png';
const VIDEO_IMG = 'https://media.base44.com/images/public/6aa285c0629ba0aa79d83234/e53b03a84_generated_image.png';

const concepts = [
  { icon: BookOpen, label: 'Educación para la vida' },
  { icon: ShieldCheck, label: 'Prevención de riesgos' },
  { icon: Users, label: 'Responsabilidad en la vía' },
];

export default function RoadSafety() {
  return (
    <section id="seguridad-vial" className="py-20 lg:py-28 bg-white">
      <div className="container-achec-wide">
        <div className="grid lg:grid-cols-10 gap-5 lg:gap-6">
          {/* Left: wide informational card */}
          <div className="lg:col-span-7 reveal">
            <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden min-h-[460px] lg:min-h-[560px] flex flex-col justify-end">
              {/* Background image */}
              <div className="absolute inset-0">
                <Image
                  src={SAFETY_IMG}
                  alt="Carretera de montaña al atardecer"
                  className="w-full h-full object-cover"
                  fittingType="fill"
                />
                <div className="absolute inset-0 bg-achec-deep/85" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-7 lg:p-12">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-8 h-px bg-achec-red" />
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-achec-red">
                    Seguridad Vial
                  </span>
                </div>
                <h2 className="text-3xl lg:text-5xl font-extrabold text-white leading-[1.05] tracking-tight max-w-xl">
                  Formar bien es prevenir tragedias.
                </h2>
                <p className="mt-5 text-base lg:text-lg text-white/70 leading-relaxed max-w-lg">
                  Una buena formación no solo entrega conocimientos, también entrega herramientas para tomar mejores decisiones. La educación vial salva vidas.
                </p>

                {/* Feature list */}
                <div className="mt-8 space-y-4">
                  {concepts.map((c) => {
                    const Icon = c.icon;
                    return (
                      <div key={c.label} className="flex items-center gap-4">
                        <div className="w-11 h-11 rounded-full border border-white/40 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-base lg:text-lg font-semibold text-white">
                          {c.label}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Button */}
                <a
                  href="#achec"
                  className="group inline-flex items-center gap-2.5 mt-9 border border-white/50 hover:bg-white hover:text-achec-deep text-white text-sm font-bold uppercase tracking-wider px-7 py-4 rounded-full transition-all focus-ring"
                >
                  Conoce nuestro compromiso
                  <ArrowRight className="w-4 h-4 btn-arrow" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: narrow video card */}
          <div className="lg:col-span-3 reveal reveal-delay-1">
            <div className="group relative rounded-2xl lg:rounded-3xl overflow-hidden min-h-[460px] lg:min-h-[560px] cursor-pointer focus-ring">
              <Image
                src={VIDEO_IMG}
                alt="Mujer conduciendo con cinturón de seguridad"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                fittingType="fill"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-achec-deep via-achec-deep/20 to-transparent" />

              {/* Play button */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2">
                <div className="w-14 h-14 rounded-full bg-white/15 backdrop-blur-md border border-white/40 flex items-center justify-center transition-transform group-hover:scale-110">
                  <Play className="w-5 h-5 text-white ml-0.5" fill="white" />
                </div>
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-7">
                <p className="text-white text-base lg:text-lg font-bold leading-snug">
                  La formación vial comienza en casa, pero se consolida en la carretera.
                </p>
                <div className="mt-4 flex items-center gap-2 text-white text-sm font-bold uppercase tracking-wider">
                  Ver video institucional
                  <ArrowRight className="w-4 h-4 btn-arrow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
