import React from 'react';
import { ArrowRight, BookOpen, GraduationCap, Building2 } from 'lucide-react';

const options = [
{
  num: '01',
  icon: BookOpen,
  title: 'Quiero aprender',
  desc: 'Información y contenidos para mejorar la formación vial.',
  href: '#educacion-vial'
},
{
  num: '02',
  icon: GraduationCap,
  title: 'Quiero estudiar',
  desc: 'Manuales, recursos y material educativo.',
  href: '#recursos'
},
{
  num: '03',
  icon: Building2,
  title: 'Tengo una escuela',
  desc: 'Información para escuelas asociadas y profesionales.',
  href: '#achec'
}];


export default function WhatLookingFor() {
  return (
    <section className="relative z-20 py-16 lg:py-24">
      <div className="container-achec-wide">
        <div className="rounded">
          <div className="reveal max-w-2xl mb-10 lg:mb-14">
            

            
            <p className="mt-3 text-lg text-achec-grey hidden">
              Encuentra la información que necesitas.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5 lg:gap-7">
            {options.map((opt, i) => {
              const Icon = opt.icon;
              return (
                <a
                  key={opt.num}
                  href={opt.href}
                  className={`reveal reveal-delay-${i + 1} group relative bg-achec-light/50 hover:bg-white border border-achec-deep/8 hover:border-achec-red/30 rounded-2xl p-7 lg:p-9 transition-all duration-300 hover:-translate-y-1 focus-ring`}>
                  
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-xs font-bold text-achec-grey tracking-wider">{opt.num}</span>
                    <div className="w-12 h-12 rounded-xl bg-achec-deep flex items-center justify-center text-white transition-colors group-hover:bg-achec-red">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-achec-deep mb-2 tracking-tight">
                    {opt.title}
                  </h3>
                  <p className="text-sm lg:text-base text-achec-grey leading-relaxed">
                    {opt.desc}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-achec-red text-sm font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                    Explorar
                    <ArrowRight className="w-4 h-4 btn-arrow" />
                  </div>
                </a>);

            })}
          </div>
        </div>
      </div>
    </section>);

}
