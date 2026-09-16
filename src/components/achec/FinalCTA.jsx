import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Image } from '@/components/ui/image';

const CTA_IMG = 'https://media.base44.com/images/public/6aa285c0629ba0aa79d83234/666e2d76d_generated_75b99552.jpg';

export default function FinalCTA() {
  return (
    <section id="hazte-socio" className="relative py-32 lg:py-48 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={CTA_IMG}
          alt="Carretera abierta al amanecer extendiéndose hacia el horizonte"
          className="w-full h-full object-cover"
          fittingType="fill"
        />
        <div className="absolute inset-0 bg-achec-deep/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-achec-deep via-achec-deep/60 to-achec-deep/80" />
      </div>

      <div className="relative z-10 container-achec text-center">
        <div className="reveal max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[1.05] text-balance">
            Construyamos juntos un Chile más seguro.
          </h2>
          <p className="mt-6 text-lg lg:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
            Fortalecer la formación de conductores es una tarea que requiere conocimiento, compromiso y colaboración.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#hazte-socio"
              className="group inline-flex items-center justify-center gap-2.5 bg-achec-red hover:bg-achec-red/90 text-white text-sm font-bold uppercase tracking-wider px-8 py-4 rounded-full transition-all focus-ring"
            >
              Quiero ser parte de ACHEC
              <ArrowRight className="w-4 h-4 btn-arrow" />
            </a>
            <a
              href="#achec"
              className="group inline-flex items-center justify-center gap-2.5 border border-white/30 hover:border-white/60 hover:bg-white/5 text-white text-sm font-bold uppercase tracking-wider px-8 py-4 rounded-full transition-all focus-ring"
            >
              Conocer ACHEC
              <ArrowRight className="w-4 h-4 btn-arrow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
