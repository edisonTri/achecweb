import React from 'react';
import SectionPageLayout from '@/components/achec/SectionPageLayout';

const HERO_IMG = 'https://media.base44.com/images/public/6aa285c0629ba0aa79d83234/bfcc45db4_generated_image.png';

export default function EducacionVial() {
  return (
    <SectionPageLayout
      heroImage={HERO_IMG}
      eyebrow="Educación vial"
      title="Educación vial"
      subtitle="Formación, capacitación y recursos educativos para conductores e instructores en todo Chile."
    >
      <section className="py-16 lg:py-24">
        <div className="container-achec max-w-3xl">
          <p className="text-lg text-achec-deep/80 leading-relaxed">
            Próximamente encontrará aquí toda la información sobre educación vial y formación de conductores.
          </p>
        </div>
      </section>
    </SectionPageLayout>
  );
}
