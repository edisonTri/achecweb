import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Image } from '@/components/ui/image';
import ShareButton from './ShareButton';

const featured = [
  {
    slug: 'evolucion-formacion-conductores',
    tag: 'Reportaje',
    title: 'Cómo debería evolucionar la formación de conductores en Chile',
    excerpt: 'Un análisis sobre los desafíos actuales y las oportunidades para modernizar la educación vial.',
    img: 'https://media.base44.com/images/public/6aa285c0629ba0aa79d83234/360af0e00_generated_2761004d.jpg',
    date: '28 ago 2025',
  },
  {
    slug: 'futuro-educacion-vial',
    tag: 'Análisis',
    title: 'El futuro de la educación vial',
    excerpt: 'Tecnología, metodologías y nuevos enfoques para enseñar a conducir.',
    img: 'https://media.base44.com/images/public/6aa285c0629ba0aa79d83234/087c52fb7_generated_9d0fda40.jpg',
    date: '22 ago 2025',
  },
  {
    slug: 'electromovilidad-nuevas-competencias',
    tag: 'Tendencia',
    title: 'Electromovilidad y nuevas competencias',
    excerpt: 'Lo que cambia cuando el vehículo que enseñamos a conducir es eléctrico.',
    img: 'https://media.base44.com/images/public/6aa285c0629ba0aa79d83234/2f46bf6d8_generated_8caa0fca.jpg',
    date: '18 ago 2025',
  },
  {
    slug: 'rol-instructores-seguridad-vial',
    tag: 'Opinión',
    title: 'El rol de los instructores en la seguridad vial',
    excerpt: 'Por qué la calidad del instructor es clave en la reducción de accidentes.',
    img: 'https://media.base44.com/images/public/6aa285c0629ba0aa79d83234/5c1563be3_generated_e3b60268.jpg',
    date: '12 ago 2025',
  },
];

export default function FeaturedContent() {
  return (
    <section className="py-24 lg:py-36 bg-white">
      <div className="container-achec-wide">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div className="reveal max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-achec-red" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-achec-red">
                Reportajes
              </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-extrabold text-achec-deep tracking-tight leading-tight">
              Contenido destacado
            </h2>
            <p className="mt-4 text-lg text-achec-grey">
              Análisis, reportajes y opinión sobre el mundo de la formación y seguridad vial.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {featured.map((item, i) => (
            <article
              key={item.slug}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} group relative bg-white rounded-2xl overflow-hidden border border-achec-deep/8 transition-all duration-300 hover:shadow-[0_12px_40px_-10px_rgba(7,28,46,0.15)] ${i === 0 ? 'lg:col-span-2' : ''}`}
            >
              <a href={`/actualidad/${item.slug}`} className="block focus-ring">
                <div className={`img-zoom relative ${i === 0 ? 'aspect-[16/9] lg:aspect-[2/1]' : 'aspect-[16/10]'}`}>
                  <Image
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    fittingType="fill"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-achec-deep/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-white/90 text-achec-deep backdrop-blur-sm">
                      {item.tag}
                    </span>
                  </div>
                </div>
                <div className={`p-6 lg:p-8 ${i === 0 ? 'lg:p-10' : ''}`}>
                  <div className="flex items-center gap-3 text-xs text-achec-grey mb-3">
                    <time>{item.date}</time>
                  </div>
                  <h3 className={`font-bold text-achec-deep tracking-tight leading-tight transition-colors group-hover:text-achec-blue ${i === 0 ? 'text-2xl lg:text-3xl' : 'text-lg lg:text-xl'}`}>
                    {item.title}
                  </h3>
                  <p className={`mt-3 text-achec-grey leading-relaxed ${i === 0 ? 'text-base lg:text-lg max-w-2xl' : 'text-sm line-clamp-2'}`}>
                    {item.excerpt}
                  </p>
                  <div className="mt-5 flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 text-achec-red text-sm font-bold uppercase tracking-wider">
                      Leer más
                      <ArrowRight className="w-4 h-4 btn-arrow" />
                    </span>
                  </div>
                </div>
              </a>
              <div className="absolute bottom-0 left-0 right-0 social-tray bg-white/95 backdrop-blur-md border-t border-achec-deep/8 px-6 py-3 flex items-center justify-between">
                <span className="text-xs font-semibold text-achec-grey uppercase tracking-wider">Compartir</span>
                <ShareButton title={item.title} variant="light" size="sm" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
