import React from 'react';
import { ArrowRight, ArrowDown, Users, CalendarCheck, MapPin, Leaf } from 'lucide-react';
import { Image } from '@/components/ui/image';
import CountUp from '@/components/achec/CountUp';

const HERO_IMG = 'https://media.base44.com/images/public/6aa285c0629ba0aa79d83234/42065d336_generated_dcbe33f2.jpg';

const stats = [
  { icon: Users, prefix: '+', target: 200, suffix: '', value: null, label: 'Escuelas asociadas' },
  { icon: CalendarCheck, prefix: '', target: 30, suffix: '+', value: null, label: 'Años de trayectoria' },
  { icon: MapPin, prefix: '', target: null, suffix: '', value: 'Presencia nacional', label: 'en Chile' },
  { icon: Leaf, prefix: '', target: 1995, suffix: '', value: null, label: 'Inicio de nuestra labor' },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={HERO_IMG}
          alt="Carretera chilena serpenteando por los Andes al atardecer con estelas de luz de vehículos"
          className="w-full h-full object-cover"
          fittingType="fill"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-achec-deep via-achec-deep/85 to-achec-deep/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-achec-deep via-transparent to-achec-deep/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full pb-20 pt-32 lg:pb-28">
        <div className="container-achec-wide">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            {/* Left: text */}
            <div className="lg:col-span-8 max-w-3xl">
              <div className="reveal is-visible flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-achec-red" />
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-achec-red">
                  Desde 1995
                </span>
              </div>
              <h1 className="reveal is-visible reveal-delay-1 text-[40px] sm:text-6xl lg:text-[78px] xl:text-[82px] font-extrabold text-white leading-[0.95] tracking-tight text-balance">
                Mejores conductores,<br />
                para un Chile<br />
                <span className="text-achec-red">más seguro.</span>
              </h1>
              <p className="reveal is-visible reveal-delay-2 mt-7 text-base lg:text-lg text-white/75 leading-relaxed max-w-2xl font-normal">
                ACHEC trabaja por fortalecer la formación de conductores en Chile, promoviendo educación vial, seguridad, profesionalización e información para enfrentar los desafíos de la movilidad del futuro.
              </p>
              <div className="reveal is-visible reveal-delay-3 mt-9 flex flex-col sm:flex-row gap-4">
                <a
                  href="#achec"
                  className="group inline-flex items-center justify-center gap-2.5 bg-achec-red hover:bg-achec-red/90 text-white text-sm font-bold uppercase tracking-wider px-7 py-4 rounded-full transition-all focus-ring"
                >
                  Conocer ACHEC
                  <ArrowRight className="w-4 h-4 btn-arrow" />
                </a>
                <a
                  href="#recursos"
                  className="group inline-flex items-center justify-center gap-2.5 border border-white/30 hover:border-white/60 hover:bg-white/5 text-white text-sm font-bold uppercase tracking-wider px-7 py-4 rounded-full transition-all focus-ring"
                >
                  Ver recursos educativos
                  <ArrowRight className="w-4 h-4 btn-arrow" />
                </a>
              </div>
            </div>

            {/* Right: stats */}
            <div className="lg:col-span-4">
              <div className="flex flex-col gap-5 lg:gap-6">
                {stats.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={i}
                      className="flicker-in flex items-center gap-4 lg:gap-5"
                      style={{ animationDelay: `${0.3 + i * 0.15}s`, opacity: 0 }}
                    >
                      <div className="flex-shrink-0 w-10 h-10 lg:w-11 lg:h-11 flex items-center justify-center text-white">
                        <Icon className="w-6 h-6 lg:w-7 lg:h-7" strokeWidth={1.5} />
                      </div>
                      <div className="w-px h-10 lg:h-12 bg-white/30 flex-shrink-0" />
                      <div className="flex flex-col justify-center">
                        <div className="text-xl lg:text-2xl font-extrabold text-white leading-none tracking-tight">
                          {stat.value || <CountUp target={stat.target} prefix={stat.prefix} suffix={stat.suffix} />}
                        </div>
                        <div className="mt-1 text-sm lg:text-base text-white/55 font-normal leading-tight">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden lg:flex flex-col items-center gap-2 text-white/50">
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em]">Explora ACHEC</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
}
