import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Image } from '@/components/ui/image';

const challenges = [
  {
    num: '01',
    title: 'Profesionalización',
    desc: 'Elevar los estándares de instructores y escuelas de conductores.',
    img: 'https://media.base44.com/images/public/6aa285c0629ba0aa79d83234/360af0e00_generated_2761004d.jpg',
  },
  {
    num: '02',
    title: 'Electromovilidad',
    desc: 'Nuevas competencias para un transporte cada vez más eléctrico.',
    img: 'https://media.base44.com/images/public/6aa285c0629ba0aa79d83234/2f46bf6d8_generated_8caa0fca.jpg',
  },
  {
    num: '03',
    title: 'Nuevas tecnologías',
    desc: 'Asistencia al conductor, vehículos conectados y conducción autónoma.',
    img: 'https://media.base44.com/images/public/6aa285c0629ba0aa79d83234/087c52fb7_generated_9d0fda40.jpg',
  },
  {
    num: '04',
    title: 'Normativa',
    desc: 'Adaptación a un marco regulatorio en constante evolución.',
    img: 'https://media.base44.com/images/public/6aa285c0629ba0aa79d83234/80dce0113_generated_d50fda4f.jpg',
  },
  {
    num: '05',
    title: 'Fiscalización',
    desc: 'Transparencia y cumplimiento en la operación del sector.',
    img: 'https://media.base44.com/images/public/6aa285c0629ba0aa79d83234/134b5d553_generated_80447d0a.jpg',
  },
  {
    num: '06',
    title: 'Seguridad vial',
    desc: 'Cultura de prevención y reducción de siniestralidad en las rutas.',
    img: 'https://media.base44.com/images/public/6aa285c0629ba0aa79d83234/42065d336_generated_dcbe33f2.jpg',
  },
];

export default function FutureChallenges() {
  return (
    <section className="py-24 lg:py-36 bg-achec-light/40">
      <div className="container-achec-wide">
        <div className="reveal max-w-2xl mb-12 lg:mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-achec-red" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-achec-red">
              Desafíos del futuro
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-extrabold text-achec-deep tracking-tight leading-tight">
            La conducción está cambiando.
          </h2>
          <p className="mt-4 text-lg text-achec-grey">
            Los nuevos desafíos requieren una formación preparada para el futuro.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {challenges.map((c, i) => (
            <article
              key={c.num}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer focus-ring`}
            >
              <Image
                src={c.img}
                alt={c.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                fittingType="fill"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-achec-deep via-achec-deep/40 to-transparent" />
              <div className="absolute inset-0 p-6 lg:p-7 flex flex-col justify-end">
                <span className="text-xs font-bold text-white/40 tracking-wider mb-2">{c.num}</span>
                <h3 className="text-xl lg:text-2xl font-bold text-white tracking-tight mb-1.5">
                  {c.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed max-w-xs">
                  {c.desc}
                </p>
                <div className="mt-4 flex items-center gap-2 text-achec-red text-sm font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                  Explorar
                  <ArrowRight className="w-4 h-4 btn-arrow" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
