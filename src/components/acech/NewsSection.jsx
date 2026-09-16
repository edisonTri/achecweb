import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Image } from '@/components/ui/image';

const IMG_INSTITUCIONAL = 'https://media.base44.com/images/public/6aa285c0629ba0aa79d83234/eaa2c6e6f_generated_image.png';
const IMG_SEGURIDAD = 'https://media.base44.com/images/public/6aa285c0629ba0aa79d83234/187fdf04d_generated_image.png';
const IMG_EDUCACION = 'https://media.base44.com/images/public/6aa285c0629ba0aa79d83234/bfcc45db4_generated_image.png';
const IMG_NORMATIVA = 'https://media.base44.com/images/public/6aa285c0629ba0aa79d83234/7ea0a3cea_generated_image.png';

const formatDate = (dateStr) => {
  const d = new Date(dateStr);
  return d.toLocaleDateString('es-CL', { day: 'numeric', month: 'short', year: 'numeric' }).replace('.', '');
};

const mainNews = {
  slug: 'achec-ministerio-transportes-modernizacion',
  url: 'https://achec.cl/achec-se-reune-con-el-ministerio-de-transportes-para-impulsar-la-modernizacion-de-la-formacion-vial-en-chile/',
  category: 'INSTITUCIONAL',
  title: 'ACHEC se reúne con el Ministerio de Transportes para impulsar la modernización de la formación vial.',
  cta: 'Conoce nuestro compromiso',
  image: IMG_INSTITUCIONAL,
};

const secondaryNews = [
  {
    slug: 'campana-nacional-conduccion-segura-vacaciones',
    category: 'SEGURIDAD VIAL',
    date: '2025-06-12',
    title: 'Lanzan campaña nacional por una conducción más segura en vacaciones.',
    image: IMG_SEGURIDAD,
  },
  {
    slug: 'capacitacion-instructores-calidad-formacion',
    category: 'EDUCACIÓN VIAL',
    date: '2025-06-03',
    title: 'Capacitación a instructores: una apuesta por la calidad de la formación.',
    image: IMG_EDUCACION,
  },
  {
    slug: 'avances-modernizacion-ley-de-transito',
    category: 'NORMATIVA',
    date: '2025-05-20',
    title: 'Avances en la modernización de la Ley de Tránsito.',
    image: IMG_NORMATIVA,
  },
];

export default function NewsSection() {
  return (
    <section id="actualidad" className="py-20 lg:py-28 bg-achec-light/40">
      <div className="container-achec-wide">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-10 lg:mb-12">
          <div className="reveal max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-achec-red" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-achec-red">
                Actualidad
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-achec-deep tracking-tight leading-tight">
              Actualidad
            </h2>
            <p className="mt-3 text-base lg:text-lg text-achec-grey">
              Noticias, encuentros y avances en torno a la seguridad vial.
            </p>
          </div>
          <a
            href="/actualidad"
            className="reveal reveal-delay-1 group inline-flex items-center gap-2 self-start lg:self-auto text-achec-red hover:text-achec-deep text-sm font-bold uppercase tracking-wider transition-colors focus-ring"
          >
            Ver todas las noticias
            <ArrowRight className="w-4 h-4 btn-arrow" />
          </a>
        </div>

        {/* News grid: 1 featured (left) + 3 secondary (right) */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Featured vertical card with overlay */}
          <a
            href="/institucional/achec-ministerio-transportes"
            className="reveal reveal-delay-1 group relative rounded-2xl overflow-hidden min-h-[420px] lg:min-h-[560px] focus-ring block"
          >
            <div className="absolute inset-0 img-zoom">
              <Image
                src={mainNews.image}
                alt={mainNews.title}
                className="w-full h-full object-cover"
                fittingType="fill"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-achec-deep via-achec-deep/50 to-achec-deep/10" />
            <div className="absolute top-5 left-5">
              <span className="inline-block text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded bg-achec-red text-white">
                {mainNews.category}
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-7 lg:p-9">
              <h3 className="text-xl lg:text-2xl xl:text-3xl font-extrabold text-white tracking-tight leading-tight max-w-lg">
                {mainNews.title}
              </h3>
              <span className="mt-5 inline-flex items-center gap-2 border border-white/40 text-white text-sm font-bold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all group-hover:bg-white group-hover:text-achec-deep">
                {mainNews.cta}
                <ArrowRight className="w-4 h-4 btn-arrow" />
              </span>
            </div>
          </a>

          {/* Secondary horizontal cards */}
          <div className="flex flex-col gap-5 lg:gap-6">
            {secondaryNews.map((n, i) => (
              <a
                key={n.slug}
                href={`/actualidad/${n.slug}`}
                className={`reveal reveal-delay-${Math.min(i + 2, 4)} group flex flex-col sm:flex-row gap-5 bg-white rounded-2xl overflow-hidden border border-achec-deep/8 transition-all duration-300 hover:shadow-[0_12px_40px_-10px_rgba(7,28,46,0.15)] hover:-translate-y-0.5 focus-ring`}
              >
                <div className="img-zoom relative sm:w-[42%] flex-shrink-0 aspect-[16/10] sm:aspect-auto">
                  <Image
                    src={n.image}
                    alt={n.title}
                    className="w-full h-full object-cover"
                    fittingType="fill"
                  />
                </div>
                <div className="flex-1 p-5 lg:p-6 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-2.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-achec-red">
                      {n.category}
                    </span>
                    <span className="text-[11px] text-achec-grey font-medium">
                      {formatDate(n.date)}
                    </span>
                  </div>
                  <h3 className="text-base lg:text-lg font-bold text-achec-deep tracking-tight leading-snug transition-colors group-hover:text-achec-blue">
                    {n.title}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-achec-red text-sm font-bold uppercase tracking-wider">
                    Leer más
                    <ArrowRight className="w-4 h-4 btn-arrow" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
