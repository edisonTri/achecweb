import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Calendar, User } from 'lucide-react';
import { Image } from '@/components/ui/image';
import ShareButton from '@/components/achec/ShareButton';
import Header from '@/components/achec/Header';
import Footer from '@/components/achec/Footer';
import ScrollProgress from '@/components/achec/ScrollProgress';

// Demo content — editable desde el panel de administración
const demoArticles = {
  'evolucion-formacion-conductores-chile': {
    category: 'INSTITUCIONAL',
    date: '2025-08-28',
    title: 'Cómo debería evolucionar la formación de conductores en Chile',
    excerpt: 'Un análisis sobre los desafíos actuales y las oportunidades para modernizar la educación vial, incorporando nuevas tecnologías y estándares de calidad.',
    image: 'https://media.base44.com/images/public/6aa285c0629ba0aa79d83234/134b5d553_generated_80447d0a.jpg',
    author: 'ACHEC',
    content: `
      <p>La formación de conductores en Chile enfrenta un momento de transformación. Los cambios tecnológicos, las nuevas normativas y la evolución de la movilidad exigen repensar cómo se enseña a conducir.</p>
      <h2>Los desafíos actuales</h2>
      <p>Hoy, las escuelas de conductores deben adaptarse a un entorno que cambia rápidamente. La incorporación de vehículos eléctricos, los sistemas de asistencia a la conducción y las nuevas regulaciones requieren que los programas de formación se actualicen constantemente.</p>
      <h2>Hacia una formación integral</h2>
      <p>Una formación de calidad no se limita a enseñar a manejar un vehículo. Debe incorporar educación vial, conciencia sobre seguridad, respeto a la normativa y la capacidad de tomar decisiones responsables en situaciones de riesgo.</p>
      <blockquote>La educación vial es la herramienta más eficaz para reducir la siniestralidad en las rutas de Chile.</blockquote>
      <h2>El rol de ACHEC</h2>
      <p>ACHEC trabaja por profesionalizar el sector, promoviendo estándares de calidad, compartiendo recursos educativos y representando a las escuelas de conductores ante las autoridades y la sociedad.</p>
    `,
  },
  'nueva-normativa-transito-2025': {
    category: 'NORMATIVA',
    date: '2025-08-20',
    title: 'Nueva normativa de tránsito: cambios que todo conductor debe conocer',
    excerpt: 'Repasamos las principales modificaciones normativas y su impacto en la conducción responsable.',
    image: 'https://media.base44.com/images/public/6aa285c0629ba0aa79d83234/80dce0113_generated_d50fda4f.jpg',
    author: 'ACHEC',
    content: `
      <p>Las modificaciones a la normativa de tránsito buscan actualizar el marco regulatorio para mejorar la seguridad vial en el país.</p>
      <h2>Principales cambios</h2>
      <p>Es fundamental que todos los conductores conozcan y comprendan las nuevas disposiciones para adaptar su conducción a los nuevos requerimientos.</p>
      <p>Contenido de demostración — editable desde el panel de administración.</p>
    `,
  },
  'educacion-vial-nuevas-tecnologias': {
    category: 'EDUCACIÓN VIAL',
    date: '2025-08-15',
    title: 'Educación vial y nuevas tecnologías en el aula',
    excerpt: 'Cómo las herramientas digitales están transformando la enseñanza de conducción.',
    image: 'https://media.base44.com/images/public/6aa285c0629ba0aa79d83234/360af0e00_generated_2761004d.jpg',
    author: 'ACHEC',
    content: `
      <p>Las herramientas digitales están transformando la manera en que se enseña conducción, permitiendo simulaciones, evaluaciones interactivas y un aprendizaje más personalizado.</p>
      <p>Contenido de demostración — editable desde el panel de administración.</p>
    `,
  },
  'encuentro-escuelas-asociadas-2025': {
    category: 'ACTUALIDAD',
    date: '2025-08-10',
    title: 'Encuentro nacional de escuelas asociadas: fortaleciendo la red',
    excerpt: 'ACHEC reúne a representantes de todo el país para dialogar sobre el futuro del sector.',
    image: 'https://media.base44.com/images/public/6aa285c0629ba0aa79d83234/5c1563be3_generated_e3b60268.jpg',
    author: 'ACHEC',
    content: `
      <p>El encuentro nacional de escuelas asociadas es un espacio de diálogo y colaboración para fortalecer la red de ACHEC en todo el país.</p>
      <p>Contenido de demostración — editable desde el panel de administración.</p>
    `,
  },
};

const categoryColors = {
  'INSTITUCIONAL': 'bg-achec-blue text-white',
  'SEGURIDAD VIAL': 'bg-achec-red text-white',
  'EDUCACIÓN VIAL': 'bg-achec-secondary text-white',
  'NORMATIVA': 'bg-achec-deep text-white',
  'MOVILIDAD': 'bg-achec-grey text-white',
  'ACTUALIDAD': 'bg-achec-light text-achec-deep border border-achec-deep/15',
};

const formatDate = (dateStr) => {
  const d = new Date(dateStr);
  return d.toLocaleDateString('es-CL', { day: 'numeric', month: 'long', year: 'numeric' });
};

export default function NewsArticle() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Try to load from demo data first
    if (demoArticles[slug]) {
      setArticle(demoArticles[slug]);
      setLoading(false);
      return;
    }
    // In production, this would fetch from the News entity by slug
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-8 h-8 border-4 border-achec-light border-t-achec-red rounded-full animate-spin" />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6">
        <h1 className="text-3xl font-bold text-achec-deep mb-4">Artículo no encontrado</h1>
        <Link to="/" className="text-achec-red font-bold uppercase tracking-wider text-sm">
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <Header />
      <main className="pt-20 lg:pt-24">
        {/* Hero */}
        <div className="relative h-[50vh] lg:h-[60vh] overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
            fittingType="fill"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-achec-deep via-achec-deep/40 to-achec-deep/30" />
          <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-12">
            <div className="container-achec-wide max-w-4xl">
              <div className="flex items-center gap-3 mb-5">
                <span className={`inline-block text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full ${categoryColors[article.category]}`}>
                  {article.category}
                </span>
                <span className="text-white/60 text-sm flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {formatDate(article.date)}
                </span>
              </div>
              <h1 className="text-3xl lg:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.05] text-balance">
                {article.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Article body */}
        <div className="container-achec-wide py-12 lg:py-20">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Sidebar */}
            <aside className="lg:col-span-3">
              <div className="lg:sticky lg:top-28 space-y-6">
                <div className="flex items-center gap-3 pb-5 border-b border-achec-deep/10">
                  <div className="w-10 h-10 rounded-full bg-achec-deep flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-achec-grey uppercase tracking-wider">Autor</div>
                    <div className="font-bold text-achec-deep text-sm">{article.author}</div>
                  </div>
                </div>
                <ShareButton title={article.title} variant="light" size="md" />
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 text-achec-deep hover:text-achec-red text-sm font-bold uppercase tracking-wider transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Volver
                </Link>
              </div>
            </aside>

            {/* Content */}
            <article className="lg:col-span-9 max-w-3xl">
              <p className="text-xl lg:text-2xl text-achec-grey leading-relaxed font-medium mb-10 pb-10 border-b border-achec-deep/10">
                {article.excerpt}
              </p>
              <div
                className="prose prose-lg max-w-none text-achec-deep/90 leading-relaxed
                  [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-achec-deep [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:tracking-tight
                  [&_p]:text-lg [&_p]:leading-relaxed [&_p]:mb-6 [&_p]:text-achec-deep/80
                  [&_blockquote]:border-l-4 [&_blockquote]:border-achec-red [&_blockquote]:pl-6 [&_blockquote]:py-2 [&_blockquote]:my-8 [&_blockquote]:text-xl [&_blockquote]:font-medium [&_blockquote]:text-achec-deep [&_blockquote]:italic"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Share at bottom */}
              <div className="mt-12 pt-8 border-t border-achec-deep/10 flex items-center justify-between">
                <span className="text-sm font-semibold text-achec-grey uppercase tracking-wider">¿Te fue útil este contenido?</span>
                <ShareButton title={article.title} variant="light" size="md" />
              </div>
            </article>
          </div>
        </div>

        {/* Related CTA */}
        <div className="bg-achec-light/40 py-16 lg:py-24">
          <div className="container-achec-wide text-center">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-achec-deep tracking-tight mb-6">
              Sigue explorando ACHEC
            </h2>
            <Link
              to="/#actualidad"
              className="group inline-flex items-center gap-2.5 bg-achec-red hover:bg-achec-red/90 text-white text-sm font-bold uppercase tracking-wider px-7 py-4 rounded-full transition-all"
            >
              Ver más noticias
              <ArrowRight className="w-4 h-4 btn-arrow" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
