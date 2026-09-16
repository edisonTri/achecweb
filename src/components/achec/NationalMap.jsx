import React, { useState } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

// Stylized Chile regions with approximate relative positions (x%, y%)
// Map container is ~180px wide x ~600px tall (tall narrow)
const regions = [
  { name: 'Arica y Parinacota', x: 50, y: 3, schools: 3 },
  { name: 'Tarapacá', x: 48, y: 7, schools: 5 },
  { name: 'Antofagasta', x: 46, y: 14, schools: 8 },
  { name: 'Atacama', x: 44, y: 24, schools: 6 },
  { name: 'Coquimbo', x: 42, y: 33, schools: 12 },
  { name: 'Valparaíso', x: 40, y: 42, schools: 28 },
  { name: 'Metropolitana', x: 44, y: 48, schools: 65 },
  { name: "O'Higgins", x: 42, y: 54, schools: 18 },
  { name: 'Maule', x: 44, y: 60, schools: 15 },
  { name: 'Ñuble', x: 46, y: 66, schools: 9 },
  { name: 'Biobío', x: 48, y: 71, schools: 22 },
  { name: 'Araucanía', x: 50, y: 78, schools: 16 },
  { name: 'Los Ríos', x: 52, y: 84, schools: 8 },
  { name: 'Los Lagos', x: 54, y: 90, schools: 12 },
  { name: 'Aysén', x: 56, y: 95, schools: 3 },
  { name: 'Magallanes', x: 60, y: 99, schools: 2 },
];

export default function NationalMap() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="py-24 lg:py-36 bg-white">
      <div className="container-achec-wide">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: text */}
          <div className="lg:col-span-5">
            <div className="reveal flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-achec-red" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-achec-red">
                Presencia nacional
              </span>
            </div>
            <h2 className="reveal reveal-delay-1 text-4xl lg:text-5xl font-extrabold text-achec-deep tracking-tight leading-tight mb-5">
              Una red presente en todo Chile
            </h2>
            <p className="reveal reveal-delay-2 text-lg text-achec-grey leading-relaxed mb-8">
              Conoce la presencia de escuelas asociadas y el alcance de ACHEC a nivel nacional.
            </p>
            <a
              href="#contacto"
              className="reveal reveal-delay-3 group inline-flex items-center gap-2.5 border border-achec-deep/15 hover:bg-achec-deep hover:text-white text-achec-deep text-sm font-bold uppercase tracking-wider px-7 py-4 rounded-full transition-all focus-ring"
            >
              Ver mapa interactivo
              <ArrowRight className="w-4 h-4 btn-arrow" />
            </a>
          </div>

          {/* Right: map */}
          <div className="lg:col-span-7">
            <div className="reveal reveal-delay-2 relative bg-achec-light/30 rounded-2xl p-8 lg:p-12 border border-achec-deep/8">
              {/* Stylized Chile outline (simplified) */}
              <div className="relative mx-auto" style={{ maxWidth: '200px', height: '560px' }}>
                <svg
                  viewBox="0 0 100 400"
                  className="absolute inset-0 w-full h-full"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M 45 5 Q 40 30 42 60 Q 44 90 43 120 Q 42 150 45 180 Q 48 210 46 240 Q 44 270 48 300 Q 52 330 50 360 Q 48 380 55 395"
                    fill="none"
                    stroke="rgba(11, 49, 87, 0.2)"
                    strokeWidth="1.5"
                    className="map-draw"
                  />
                  <path
                    d="M 55 5 Q 50 30 52 60 Q 54 90 53 120 Q 52 150 55 180 Q 58 210 56 240 Q 54 270 58 300 Q 62 330 60 360 Q 58 380 65 395"
                    fill="none"
                    stroke="rgba(11, 49, 87, 0.15)"
                    strokeWidth="1.5"
                    className="map-draw"
                  />
                </svg>

                {/* Region dots */}
                {regions.map((r, i) => (
                  <div
                    key={r.name}
                    className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group/dot"
                    style={{ left: `${r.x}%`, top: `${r.y}%` }}
                    onMouseEnter={() => setHovered(r)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <div
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        hovered?.name === r.name
                          ? 'bg-achec-red scale-150'
                          : 'bg-achec-blue'
                      } ${hovered?.name === r.name ? '' : 'pulse-dot'}`}
                    />
                    {/* Tooltip */}
                    {hovered?.name === r.name && (
                      <div className="absolute left-1/2 -translate-x-1/2 -top-2 -translate-y-full z-20 bg-achec-deep text-white px-4 py-2.5 rounded-lg shadow-xl whitespace-nowrap pointer-events-none">
                        <div className="flex items-center gap-1.5 text-xs font-bold">
                          <MapPin className="w-3 h-3 text-achec-red" />
                          {r.name}
                        </div>
                        <div className="text-sm mt-0.5 text-white/70">
                          {r.schools} escuelas asociadas
                        </div>
                        <div className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-2 h-2 bg-achec-deep rotate-45" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div className="mt-6 flex items-center justify-center gap-6 text-xs text-achec-grey">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-achec-blue" />
                  <span>Escuelas asociadas</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-achec-red" />
                  <span>Región seleccionada</span>
                </div>
              </div>
            </div>
            <p className="mt-4 text-xs text-achec-grey/60 italic text-center">
              Datos de demostración — editable desde el panel de administración.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
