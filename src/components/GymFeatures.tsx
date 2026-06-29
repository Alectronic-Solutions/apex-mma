'use client';

import type { GymFeature } from '@/data/gym';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface GymFeaturesProps {
  features: GymFeature[];
}

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 mt-0.5"
      aria-hidden="true"
    >
      <polyline
        points="3,10.5 8,15.5 17,5"
        stroke="#EF4444"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const reveal = (visible: boolean, delay: number) => ({
  opacity: visible ? 1 : 0,
  transform: visible ? 'none' : 'translateY(24px)',
  transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
});

export default function GymFeatures({ features }: GymFeaturesProps) {
  const { ref, visible } = useScrollReveal();

  return (
    <div ref={ref} className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-screen-2xl mx-auto">

        <div style={reveal(visible, 0)}>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-xs text-muted uppercase tracking-widest">The Facility</span>
            <span className="flex-1 h-px bg-accent" />
          </div>
          <h2
            className="font-display font-black uppercase text-white mb-16 leading-none"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
          >
            The Mat Is Clean
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 -m-px">
          {features.map((feature, i) => (
            <div
              key={feature.label}
              className="group border border-border p-8 flex gap-5 items-start
                         transition-colors duration-150
                         hover:bg-[#1C1C1F] hover:border-l-2 hover:border-l-accent"
              style={reveal(visible, i * 80)}
            >
              <CheckIcon />
              <div>
                <p className="font-display font-black uppercase text-white text-lg leading-tight">
                  {feature.label}
                </p>
                <p className="font-mono text-sm text-muted mt-1.5 leading-relaxed">{feature.detail}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
