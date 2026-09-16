import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight, Calendar } from 'lucide-react';
import { Image } from '@/components/ui/image';
import Header from '@/components/achec/Header';
import Footer from '@/components/achec/Footer';
import ScrollProgress from '@/components/achec/ScrollProgress';
import CustomCursor from '@/components/achec/CustomCursor';
import { useReveal } from '@/hooks/useReveal';

const HERO_IMG = 'https://media.base44.com/images/public/6aa285c0629ba0aa79d83234/eaa2c6e6f_generated_image.png';

export default function InstitucionalMinisterio() {
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
            alt="Reunión institucional ACHEC con Ministerio de Transportes"
            className="w-full h-full object-cover"
            fittingType="fill" />
          
          <div className="absolute inset-0 bg-gradient-to-t from-achec-deep via-achec-deep/80 to-achec-deep/30" />
        </div>
        <div className="relative z-10 w-full pb-12 lg:pb-16">
          <div className="container-achec-wide">
            <a
              href="/"
              className="reveal is-visible inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium mb-6 transition-colors">
              
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
              ACHEC se reúne con el Ministerio de Transportes para impulsar la modernización de la formación vial en Chile
            </h1>
            <div className="reveal is-visible reveal-delay-2 mt-6 flex items-center gap-4 text-white/60 text-sm">
              <span className="inline-flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                14 de septiembre, 2025
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
            <p className="text-xl lg:text-2xl font-semibold text-achec-deep leading-snug">
              La Asociación Chilena de Escuelas de Conductores (ACHEC) sostuvo una reunión histórica con la División de Normas del Ministerio de Transportes y Telecomunicaciones (MTT), marcando el inicio de un canal de diálogo formal entre el gremio y la autoridad reguladora del sector.
            </p>

            <p>
              El encuentro, liderado por el presidente de ACHEC, Ignacio Piña, se desarrolló en un clima propositivo y colaborativo, y permitió a la asociación presentar directamente al MTT una serie de propuestas concretas orientadas a modernizar la normativa que rige la formación de conductores en Chile, incluyendo los decretos DS N°39, D°251 y la REX N°911.
            </p>

            <p className="font-semibold text-achec-deep pt-2">
              Entre los principales avances logrados destacan:
            </p>

            <div className="space-y-5">
              <div className="border-l-2 border-achec-red pl-5">
                <h3 className="text-lg font-bold text-achec-deep mb-1.5">Electromovilidad y vehículos automáticos</h3>
                <p>
                  El MTT se comprometió a revisar y corregir las barreras normativas que hoy impiden a las escuelas de conductores incorporar vehículos eléctricos y automáticos en su flota de instrucción, facilitando así la transición hacia tecnologías más limpias y modernas.
                </p>
              </div>

              <div className="border-l-2 border-achec-red pl-5">
                <h3 className="text-lg font-bold text-achec-deep mb-1.5">Doble comando actualizado</h3>
                <p>
                  Se confirmó que la modificación en curso del DS N°39 ya incorpora la posibilidad de utilizar sistemas de doble comando modernos —empernados o por piolas—, dejando atrás la exigencia de estructuras soldadas de 1985 que son incompatibles con los vehículos actuales.
                </p>
              </div>

              <div className="border-l-2 border-achec-red pl-5">
                <h3 className="text-lg font-bold text-achec-deep mb-1.5">Fiscalización con herramientas reales</h3>
                <p>
                  El MTT está trabajando en dos líneas estratégicas de gran impacto: centralizar la autorización de escuelas no profesionales directamente en el Ministerio y ampliar sus atribuciones sancionatorias para combatir eficazmente las escuelas que operan fuera de norma.
                </p>
              </div>

              <div className="border-l-2 border-achec-red pl-5">
                <h3 className="text-lg font-bold text-achec-deep mb-1.5">Habilitación de instructores</h3>
                <p>
                  Ante la crisis operativa de SEMEP que ha paralizado la habilitación de nuevos instructores durante meses, el MTT confirmó que está desarrollando una alternativa que permita dar mejor cobertura al sistema.
                </p>
              </div>

              <div className="border-l-2 border-achec-red pl-5">
                <h3 className="text-lg font-bold text-achec-deep mb-1.5">Regulación del e-learning</h3>
                <p>
                  Se identificaron y reconocieron las distorsiones generadas por la REX N°911, incluyendo cursos profesionales ofrecidos a precios irrisorios sin prácticas reales y plataformas operando sin docentes acreditados. El MTT se comprometió a corregir la contradicción entre los requisitos de asistencia del D°251 y los de conectividad de la REX N°911.
                </p>
              </div>
            </div>

            <p className="pt-2">
              Esta reunión representa un hito para ACHEC y para todo el sector de la formación vial en Chile. Con esto la asociación se posiciona como interlocutor válido del Ministerio en el proceso de mejora regulatoria, aportando no solo la experiencia de décadas de sus asociados, sino también la perspectiva internacional adquirida a través de su participación en AICEFOV y la confederación de autoescuelas españolas.
            </p>

            <p>
              La contraparte del MTT expresó apertura explícita a recibir insumos, material técnico internacional y propuestas concretas de ACHEC para incorporarlos en las modificaciones normativas actualmente en curso.
            </p>

            <p>
              ACHEC continuará trabajando activamente en este proceso, con el envío de documentación técnica comprometida y la gestión de nuevas reuniones con las áreas de Fiscalización del MTT, reafirmando su compromiso con una formación vial de calidad, moderna y fiscalizada en todo Chile.
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
    </div>);

}
