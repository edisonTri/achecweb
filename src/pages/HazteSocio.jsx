import React from 'react';
import SectionPageLayout from '@/components/achec/SectionPageLayout';

const HERO_IMG = 'https://media.base44.com/images/public/6aa285c0629ba0aa79d83234/42065d336_generated_dcbe33f2.jpg';

export default function HazteSocio() {
  return (
    <SectionPageLayout
      heroImage={HERO_IMG}
      eyebrow="Hazte socio"
      title="Hazte socio"
      subtitle="Únete a ACHEC y forma parte de la red de escuelas de conductores más importante de Chile."
    >
      <section className="py-16 lg:py-24">
        <div className="container-achec max-w-3xl">
          <p className="text-lg text-achec-deep/80 leading-relaxed">
            Próximamente encontrará aquí toda la información para asociarte a ACHEC.
          </p>
        </div>
      </section>
    </SectionPageLayout>
  );
}
