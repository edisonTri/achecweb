import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight, Calendar, Quote } from 'lucide-react';
import { Image } from '@/components/ui/image';
import Header from '@/components/achec/Header';
import Footer from '@/components/achec/Footer';
import ScrollProgress from '@/components/achec/ScrollProgress';
import CustomCursor from '@/components/achec/CustomCursor';
import { useReveal } from '@/hooks/useReveal';

const HERO_IMG = 'https://media.base44.com/images/public/6aa285c0629ba0aa79d83234/fb344c0f7_20260326_1601201-1-1-scaled.jpg';

const participantes = [
  { nombre: 'Alberto Escobar', cargo: 'Secretario Ejecutivo, CONASET' },
  { nombre: 'Matías Aravena', cargo: 'Encargado Área Conducción Segura, CONASET' },
  { nombre: 'Ignacio Piña Sepúlveda', cargo: 'Presidente, ACHEC' },
  { nombre: 'Nicolás Piña', cargo: 'Secretario, ACHEC' },
];

export default function InstitucionalConaset() {
  useReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <CustomCursor />
      <ScrollProgress />
      <Header />

      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={HERO_IMG}
            alt="Reunión ACHEC con CONASET"
            className="w-full h-full object-cover"
            fittingType="fill"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-achec-deep via-achec-deep/80 to-achec-deep/30" />
        </div>
        <div className="relative z-10 w-full pb-12 lg:pb-16">
          <div className="container-achec-wide">
            <a
              href="/"
              className="reveal is-visible inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio
            </a>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-achec-red" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-achec-red">
                Institucional
              </span>
            </div>
            <h1 className="reveal is-visible reveal-delay-1 text-3xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-[1.05] tracking-tight max-w-4xl text-balance">
              ACHEC se reúne con el Secretario Ejecutivo de CONASET para avanzar en la modernización normativa del sector
            </h1>
            <div className="reveal is-visible reveal-delay-2 mt-6 flex items-center gap-4 text-white/60 text-sm">
              <span className="inline-flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                26 de marzo, 2026
              </span>
              <span className="w-px h-4 bg-white/30" />
              <span>ACHEC</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article body */}
      <article className="py-16 lg:py-24">
        <div className="container-achec max-w-3xl">
          <div className="reveal space-y-6 text-lg text-achec-deep/80 leading-relaxed">
            {/* Intro */}
            <p className="text-xl lg:text-2xl font-semibold text-achec-deep leading-snug">
              La reunión, celebrada el 26 de marzo de 2026, marcó el inicio de un diálogo
              formal entre el gremio que representa a las escuelas de conductores del país
              y la autoridad máxima de la Comisión Nacional de Seguridad de Tránsito.
            </p>

            {/* Photo centered */}
            <figure className="my-10 flex flex-col items-center">
              <div className="w-full rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={HERO_IMG}
                  alt="Reunión ACHEC · CONASET, Santiago, 26 de marzo de 2026"
                  className="w-full h-auto object-cover"
                  fittingType="fit"
                />
              </div>
              <figcaption className="mt-4 text-center text-sm text-achec-grey italic max-w-xl">
                De izquierda a derecha: Matias Aravena, Ignacio Piña, Alberto Escobar —
                Reunión ACHEC · CONASET, Santiago, 26 de marzo de 2026.
              </figcaption>
            </figure>

            {/* Participants info box */}
            <div className="my-8 rounded-2xl border-2 border-achec-deep/15 bg-achec-light/40 p-6 lg:p-8">
              <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-achec-red mb-5">
                Participantes
              </h3>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {participantes.map((p) => (
                  <div key={p.nombre} className="border-l-2 border-achec-red/50 pl-4">
                    <p className="font-bold text-achec-deep leading-tight">{p.nombre}</p>
                    <p className="text-sm text-achec-grey mt-0.5">{p.cargo}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Body content */}
            <p>
              El pasado 26 de marzo, la directiva de la Asociación Chilena de Escuelas de
              Conductores (ACHEC) sostuvo una reunión de trabajo con el Sr. Alberto
              Escobar, Secretario Ejecutivo de la Comisión Nacional de Seguridad de
              Tránsito (CONASET), junto al Sr. Matías Aravena, Encargado del Área de
              Conducción Segura de esa institución.
            </p>
            <p>
              El encuentro se enmarca en la política de ACHEC de construir puentes
              institucionales con las autoridades de cada nuevo gobierno. Fue una
              instancia de presentación y diálogo profundo en torno a los principales
              desafíos normativos que enfrenta hoy la formación de conductores en Chile.
            </p>

            {/* Decreto 251 */}
            <h2 className="text-2xl font-extrabold text-achec-deep pt-4 tracking-tight">
              Decreto 251: calidad e integridad en la formación en línea
            </h2>
            <p>
              Uno de los ejes centrales de la reunión fue el análisis del Decreto Supremo
              N°251, que regula la modalidad e-learning para las Escuelas de Conductores
              Profesionales. ACHEC planteó su preocupación por la existencia de escuelas
              que operan bajo modalidad asincrónica sin cumplir con los requisitos de
              conectividad y presencia docente que exige la norma, distorsionando el
              mercado y comprometiendo la calidad de la formación que reciben los
              futuros conductores.
            </p>
            <p>
              La asociación expuso evidencia concreta sobre prácticas que eluden el
              espíritu del decreto: uso de plataformas externas que reemplazan los planes
              de estudio propios autorizados, ausencia real de docentes durante las
              sesiones, y oferta de cursos a precios incompatibles con una formación
              profesional genuina. Se planteó la necesidad de fortalecer los mecanismos de
              fiscalización y actualizar las exigencias técnicas del decreto para cerrar
              estas brechas.
            </p>

            {/* Decreto 39 */}
            <h2 className="text-2xl font-extrabold text-achec-deep pt-4 tracking-tight">
              Decreto 39: modernización de la instrucción presencial
            </h2>
            <p>
              El segundo tema central de la agenda fue el Decreto Supremo N°39, norma que
              regula la actividad de las escuelas de conductores en su modalidad
              presencial. ACHEC presentó una propuesta de actualización en cinco ámbitos:
              la incorporación de los vehículos eléctricos y de transmisión automática
              como flota válida de instrucción; la clarificación del alcance de la
              licencia clase D; la revisión del límite actual de horas de instrucción
              diaria; la modernización del sistema de habilitación de instructores; y la
              implementación de un sistema de sanciones graduadas que permita una
              fiscalización efectiva y proporcional.
            </p>
            <p>
              Estas propuestas apuntan a un decreto que data de décadas y que requiere una
              puesta al día urgente para reflejar la realidad del parque automotor y los
              estándares contemporáneos de formación vial.
            </p>

            {/* Highlighted quote */}
            <blockquote className="my-10 relative bg-achec-deep text-white rounded-2xl px-8 py-10 lg:px-12 lg:py-12">
              <Quote className="w-10 h-10 text-achec-red mb-4 opacity-90" />
              <p className="text-xl lg:text-2xl font-bold leading-snug tracking-tight text-balance">
                «Las escuelas de conductores son la primera línea de la seguridad vial.
                Su fortalecimiento normativo es una inversión directa en la reducción de
                accidentes en las rutas de Chile.»
              </p>
            </blockquote>

            {/* Aporte de las escuelas */}
            <h2 className="text-2xl font-extrabold text-achec-deep pt-4 tracking-tight">
              El aporte de las escuelas a la seguridad vial
            </h2>
            <p>
              La reunión también fue una oportunidad para que ACHEC reafirmara ante
              CONASET el rol estratégico que cumplen las escuelas de conductores en el
              ecosistema de la seguridad vial chilena. La formación de un conductor no es
              solo la enseñanza de técnicas de manejo: es la transmisión de una cultura
              vial, la internalización de normas y la construcción de actitudes
              responsables al volante.
            </p>
            <p>
              En ese marco, ACHEC propuso avanzar en una alianza estratégica de largo plazo
              que incluya mesas de trabajo técnico permanentes, participación del gremio
              en el diseño de políticas públicas en materia vial, y coordinación en
              programas de actualización y perfeccionamiento para instructores.
            </p>

            {/* Diálogo */}
            <h2 className="text-2xl font-extrabold text-achec-deep pt-4 tracking-tight">
              Un diálogo que comenzó con el pie derecho
            </h2>
            <p>
              Ambas partes valoraron la instancia como un primer paso concreto hacia una
              relación de trabajo colaborativa. CONASET mostró apertura a revisar los
              planteamientos presentados y a generar espacios de trabajo conjunto.
              ACHEC, por su parte, ratificó su disposición a aportar experiencia, datos
              del sector y propuestas técnicas fundamentadas para contribuir a una
              política vial que coloque la calidad de la formación en el centro de la
              estrategia de seguridad de tránsito del país.
            </p>
            <p>
              Desde ACHEC seguiremos informando a nuestros asociados sobre los avances de
              este proceso de diálogo institucional.
            </p>
          </div>

          {/* CTA */}
          <div className="reveal mt-12 pt-10 border-t border-achec-deep/10">
            <a
              href="/#achec"
              className="group inline-flex items-center gap-2.5 bg-achec-red hover:bg-achec-red/90 text-white text-sm font-bold uppercase tracking-wider px-7 py-4 rounded-full transition-all focus-ring"
            >
              Conoce nuestro compromiso
              <ArrowRight className="w-4 h-4 btn-arrow" />
            </a>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
