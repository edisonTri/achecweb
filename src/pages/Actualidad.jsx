import React, { useState } from 'react';
import SectionPageLayout from '@/components/achec/SectionPageLayout';
import NewsCard from '@/components/achec/NewsCard';
import ContentModal from '@/components/achec/ContentModal';

const HERO_IMG = 'https://media.base44.com/images/public/6aa285c0629ba0aa79d83234/eaa2c6e6f_generated_image.png';
const ARTICLE_IMG = 'https://media.base44.com/images/public/6aa285c0629ba0aa79d83234/f7f4e94d3_Ancap-Rutamotor-1.jpg';
const CONTRALORIA_IMG = 'https://media.base44.com/images/public/6aa285c0629ba0aa79d83234/a64b52e9a_images.jpeg';
const CONTRALORIA_PDF = 'https://media.base44.com/files/public/6aa285c0629ba0aa79d83234/3204ccbad_RESOLUCION-CONTRALORIA-1.pdf';
const CONASET_IMG = 'https://media.base44.com/images/public/6aa285c0629ba0aa79d83234/3d02907cf_20260326_160047-scaled-e1774617895551-1024x611.jpg';
const CONASET_IMG_2 = 'https://media.base44.com/images/public/6aa285c0629ba0aa79d83234/fb344c0f7_20260326_1601201-1-1-scaled.jpg';

const conasetParticipantes = [
  { nombre: 'Alberto Escobar', cargo: 'Secretario Ejecutivo, CONASET' },
  { nombre: 'Matías Aravena', cargo: 'Encargado Área Conducción Segura, CONASET' },
  { nombre: 'Ignacio Piña Sepúlveda', cargo: 'Presidente, ACHEC' },
  { nombre: 'Nicolás Piña', cargo: 'Secretario, ACHEC' },
];

const news = [
  {
    id: 'achec-conaset-modernizacion-normativa',
    image: CONASET_IMG,
    category: 'Institucional',
    title:
      'ACHEC se reúne con el Secretario Ejecutivo de CONASET para avanzar en la modernización normativa del sector',
    author: 'ACHEC',
    date: '26/03/2026',
    excerpt:
      'La reunión, celebrada el 26 de marzo de 2026, marcó el inicio de un diálogo formal entre el gremio que representa a las escuelas de conductores del país y la autoridad máxima de la Comisión Nacional de Seguridad de Tránsito.',
    heroImage: CONASET_IMG,
    additionalImages: [
      {
        src: CONASET_IMG_2,
        alt: 'De izquierda a derecha: Matias Aravena, Ignacio Piña, Alberto Escobar — Reunión ACHEC · CONASET',
        caption:
          'De izquierda a derecha: Matias Aravena, Ignacio Piña, Alberto Escobar — Reunión ACHEC · CONASET, Santiago, 26 de marzo de 2026.',
      },
    ],
    fullContent: (
      <>
        <p>
          El pasado 26 de marzo, la directiva de la Asociación Chilena de Escuelas de
          Conductores (ACHEC) sostuvo una reunión de trabajo con el Sr. Alberto Escobar,
          Secretario Ejecutivo de la Comisión Nacional de Seguridad de Tránsito (CONASET),
          junto al Sr. Matías Aravena, Encargado del Área de Conducción Segura de esa
          institución.
        </p>
        <p>
          El encuentro se enmarca en la política de ACHEC de construir puentes
          institucionales con las autoridades de cada nuevo gobierno. Fue una instancia de
          presentación y diálogo profundo en torno a los principales desafíos normativos
          que enfrenta hoy la formación de conductores en Chile.
        </p>

        {/* Participants info box */}
        <div className="my-6 rounded-2xl border-2 border-achec-deep/15 bg-achec-light/40 p-6 lg:p-8 not-prose">
          <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-achec-red mb-5">
            Participantes
          </h3>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
            {conasetParticipantes.map((p) => (
              <div key={p.nombre} className="border-l-2 border-achec-red/50 pl-4">
                <p className="font-bold text-achec-deep leading-tight">{p.nombre}</p>
                <p className="text-sm text-achec-grey mt-0.5">{p.cargo}</p>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-2xl font-extrabold text-achec-deep pt-4 tracking-tight">
          Decreto 251: calidad e integridad en la formación en línea
        </h2>
        <p>
          Uno de los ejes centrales de la reunión fue el análisis del Decreto Supremo N°251,
          que regula la modalidad e-learning para las Escuelas de Conductores Profesionales.
          ACHEC planteó su preocupación por la existencia de escuelas que operan bajo
          modalidad asincrónica sin cumplir con los requisitos de conectividad y presencia
          docente que exige la norma, distorsionando el mercado y comprometiendo la calidad
          de la formación que reciben los futuros conductores.
        </p>
        <p>
          La asociación expuso evidencia concreta sobre prácticas que eluden el espíritu del
          decreto: uso de plataformas externas que reemplazan los planes de estudio propios
          autorizados, ausencia real de docentes durante las sesiones, y oferta de cursos a
          precios incompatibles con una formación profesional genuina. Se planteó la
          necesidad de fortalecer los mecanismos de fiscalización y actualizar las
          exigencias técnicas del decreto para cerrar estas brechas.
        </p>

        <h2 className="text-2xl font-extrabold text-achec-deep pt-4 tracking-tight">
          Decreto 39: modernización de la instrucción presencial
        </h2>
        <p>
          El segundo tema central de la agenda fue el Decreto Supremo N°39, norma que regula
          la actividad de las escuelas de conductores en su modalidad presencial. ACHEC
          presentó una propuesta de actualización en cinco ámbitos: la incorporación de los
          vehículos eléctricos y de transmisión automática como flota válida de instrucción;
          la clarificación del alcance de la licencia clase D; la revisión del límite actual
          de horas de instrucción diaria; la modernización del sistema de habilitación de
          instructores; y la implementación de un sistema de sanciones graduadas que permita
          una fiscalización efectiva y proporcional.
        </p>
        <p>
          Estas propuestas apuntan a un decreto que data de décadas y que requiere una puesta
          al día urgente para reflejar la realidad del parque automotor y los estándares
          contemporáneos de formación vial.
        </p>

        <blockquote className="my-8 relative bg-achec-deep text-white rounded-2xl px-8 py-10 lg:px-12 lg:py-12 not-prose">
          <p className="text-xl lg:text-2xl font-bold leading-snug tracking-tight text-balance">
            «Las escuelas de conductores son la primera línea de la seguridad vial. Su
            fortalecimiento normativo es una inversión directa en la reducción de accidentes
            en las rutas de Chile.»
          </p>
        </blockquote>

        <h2 className="text-2xl font-extrabold text-achec-deep pt-4 tracking-tight">
          El aporte de las escuelas a la seguridad vial
        </h2>
        <p>
          La reunión también fue una oportunidad para que ACHEC reafirmara ante CONASET el
          rol estratégico que cumplen las escuelas de conductores en el ecosistema de la
          seguridad vial chilena. La formación de un conductor no es solo la enseñanza de
          técnicas de manejo: es la transmisión de una cultura vial, la internalización de
          normas y la construcción de actitudes responsables al volante.
        </p>
        <p>
          En ese marco, ACHEC propuso avanzar en una alianza estratégica de largo plazo que
          incluya mesas de trabajo técnico permanentes, participación del gremio en el
          diseño de políticas públicas en materia vial, y coordinación en programas de
          actualización y perfeccionamiento para instructores.
        </p>

        <h2 className="text-2xl font-extrabold text-achec-deep pt-4 tracking-tight">
          Un diálogo que comenzó con el pie derecho
        </h2>
        <p>
          Ambas partes valoraron la instancia como un primer paso concreto hacia una
          relación de trabajo colaborativa. CONASET mostró apertura a revisar los
          planteamientos presentados y a generar espacios de trabajo conjunto. ACHEC, por
          su parte, ratificó su disposición a aportar experiencia, datos del sector y
          propuestas técnicas fundamentadas para contribuir a una política vial que coloque
          la calidad de la formación en el centro de la estrategia de seguridad de tránsito
          del país.
        </p>
        <p>
          Desde ACHEC seguiremos informando a nuestros asociados sobre los avances de este
          proceso de diálogo institucional.
        </p>
      </>
    ),
    externalUrl: null,
    pdfUrl: null,
  },
  {
    id: 'auto-viejo-lata-dura',
    image: ARTICLE_IMG,
    category: 'Noticias',
    title: '¿Auto viejo, lata dura, auto seguro?',
    author: 'admin',
    date: '09/12/2023',
    excerpt:
      '¿Sabías que los autos antiguos no eran tan seguros como los actuales? En este artículo, te contamos los resultados de las pruebas de choque que realizó Ancap hace 30 años y cómo han evolucionado los criterios de seguridad de los vehículos desde entonces.',
    heroImage: ARTICLE_IMG,
    fullContent: (
      <>
        <p>
          ¿Sabías que los autos antiguos no eran tan seguros como los actuales? En este
          artículo te contamos los resultados de las pruebas de choque que realizó Ancap
          hace 30 años, y cómo han evolucionado los criterios de seguridad de los
          vehículos desde entonces.
        </p>
        <p>
          La Asociación Nacional de Seguridad Automotriz (ANCAP) realizó en su momento
          pruebas de choque a vehículos que circulaban en las carreteras chilenas. Los
          resultados mostraron que muchos de los autos considerados "robustos" o
          "confiables" por su antigüedad no cumplían con los estándares mínimos de
          protección a los ocupantes ante un impacto.
        </p>
        <p>
          Un caso emblemático fue el del Mitsubishi Magna 1993, que sometido a una
          prueba de impacto frontal a 64 km/h presentó una deformación estructural
          severa en el habitáculo, comprometiendo el espacio de supervivencia del
          conductor y los pasajeros.
        </p>
        <p>
          Desde entonces, los protocolos de evaluación han incorporado nuevos
          criterios: protección de ocupantes adultos y niños, protección de peatones,
          asistencia a la conducción y sistemas de frenado de emergencia. Los vehículos
          modernos integran estructuras deformables controladas, airbags múltiples y
          sistemas activos que reducen el riesgo de accidentes.
        </p>
        <p>
          La lección es clara: la antigüedad de un vehículo no es garantía de
          seguridad. La formación de conductores y la actualización permanente de la
          flota son pilares fundamentales de la seguridad vial.
        </p>
      </>
    ),
    externalUrl: 'https://www.rutamotor.com/noticias/ancap-seguridad-auto-viejo/',
    pdfUrl: null,
  },
  {
    id: 'contraloria-antiguedad-vehiculos',
    image: CONTRALORIA_IMG,
    category: 'Noticias',
    title:
      'Contraloría aclara antigüedad máxima permitida para vehículos de instrucción práctica en escuelas de conductores profesionales',
    author: 'admin',
    date: '05/12/2023',
    excerpt:
      'Gracias a la consulta de un colega de Chillán, la Contraloría General de la República ha emitido un pronunciamiento de gran relevancia para las escuelas de conductores profesionales.',
    heroImage: CONTRALORIA_IMG,
    fullContent: (
      <>
        <p>
          Gracias a la consulta de un colega de Chillán, la Contraloría General de la
          República ha emitido un pronunciamiento de gran relevancia para las escuelas
          de conductores profesionales. En este pronunciamiento se establece con
          claridad la antigüedad máxima permitida para los vehículos utilizados en la
          instrucción práctica de las escuelas de conductores que imparten cursos para
          optar a licencias de conductor profesional.
        </p>
        <h3 className="text-xl font-bold text-achec-deep mt-6 mb-2">El pronunciamiento de la Contraloría</h3>
        <p>
          La Contraloría ha aclarado que en el Decreto 251 no se indica requisitos de
          antigüedad máxima para los vehículos que las escuelas de conductores
          profesionales utilicen en los cursos para optar a licencias profesionales clase
          A-2 y A-4.
        </p>
        <p>
          Esto brinda a las escuelas de conductores profesionales una mayor flexibilidad
          en la elección de los vehículos utilizados en la instrucción práctica, siempre
          y cuando cumplan con las revisiones técnicas pertinentes.
        </p>
        <h3 className="text-xl font-bold text-achec-deep mt-6 mb-2">Excepción: licencias A-3 y A-5</h3>
        <p>
          La exigencia de los 10 años de antigüedad solo se da para las licencias
          profesionales A-3 y A-5. Para el resto de las clases profesionales, la
          normativa no establece un límite máximo de antigüedad del vehículo, lo que
          permite a las escuelas mantener flotas más diversas y adaptadas a la
          realidad del transporte nacional.
        </p>
        <p>
          Este pronunciamiento constituye un antecedente relevante para el sector,
          pues entrega certidumbre jurídica a las escuelas y contribuye a una
          formación práctica más accesible y representativa del parque vehicular
          chileno.
        </p>
      </>
    ),
    externalUrl: null,
    pdfUrl: CONTRALORIA_PDF,
  },
];

export default function Actualidad() {
  const [selected, setSelected] = useState(null);

  const related = selected
    ? news.filter((n) => n.id !== selected.id).map((n) => ({
        title: n.title,
        category: n.category,
        heroImage: n.heroImage,
        ...n,
      }))
    : [];

  function openItem(item) {
    setSelected(item);
  }

  function openRelated(item) {
    setSelected(item);
  }

  return (
    <SectionPageLayout
      heroImage={HERO_IMG}
      eyebrow="Actualidad"
      title="Actualidad"
      subtitle="Noticias, encuentros y avances en torno a la seguridad vial y la formación de conductores en Chile."
    >
      <section className="py-16 lg:py-24 bg-[#0f172a]">
        <div className="container-achec">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((n) => (
              <NewsCard
                key={n.id}
                image={n.image}
                category={n.category}
                title={n.title}
                author={n.author}
                date={n.date}
                excerpt={n.excerpt}
                onClick={() => openItem(n)}
              />
            ))}
          </div>
        </div>
      </section>

      {selected && (
        <ContentModal
          item={selected}
          related={related}
          onOpenRelated={openRelated}
          onClose={() => setSelected(null)}
        />
      )}
    </SectionPageLayout>
  );
}
