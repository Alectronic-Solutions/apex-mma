'use client';

import type { GymLocation } from '@/data/gym';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface LocationHoursProps {
  location: GymLocation;
}

const reveal = (visible: boolean, delay: number) => ({
  opacity: visible ? 1 : 0,
  transform: visible ? 'none' : 'translateY(24px)',
  transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
});

export default function LocationHours({ location }: LocationHoursProps) {
  const { ref, visible } = useScrollReveal();

  const mapsUrl = `https://maps.google.com?q=${encodeURIComponent(
    `${location.street}, ${location.city}, ${location.state} ${location.postalCode}`
  )}`;

  return (
    <div ref={ref} className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-screen-2xl mx-auto">
        <div style={reveal(visible, 0)}>
          <p className="font-mono text-xs text-muted uppercase tracking-widest mb-2">Find Us</p>
          <h2 className="font-display font-black uppercase text-white mb-12"
            style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}
          >
            Location &amp; Hours
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          <div className="bg-surface p-8" style={reveal(visible, 0)}>
            <p className="font-mono text-sm text-foreground leading-relaxed">
              {location.street}<br />
              {location.city}, {location.state} {location.postalCode}
            </p>

            <div className="border-t border-border my-6" />

            <p className="font-mono text-sm text-muted">
              T: {location.phone}
            </p>
            <p className="font-mono text-sm text-muted mt-1">
              E: {location.email}
            </p>

            <div className="border-t border-border my-6" />

            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-accent hover:underline uppercase tracking-widest"
            >
              Get Directions →
            </a>
          </div>

          <div className="bg-surface p-8" style={reveal(visible, 120)}>
            <p className="font-mono text-xs text-muted uppercase tracking-widest mb-4">
              Opening Hours
            </p>
            {location.hours.map((row) => (
              <div key={row.days} className="flex justify-between items-center border-b border-border py-3 last:border-0">
                <span className="font-mono text-xs text-muted uppercase">
                  {row.days}
                </span>
                <span className="font-mono text-sm text-foreground">
                  {row.hours}
                </span>
              </div>
            ))}
            <p className="font-mono text-xs text-muted mt-6">
              {location.parkingSpaces} dedicated parking spaces on-site.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
