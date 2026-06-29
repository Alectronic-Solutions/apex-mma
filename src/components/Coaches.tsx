'use client';

import type { Coach } from '@/data/gym';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const COACH_PHOTOS: Record<string, string> = {
  'rafael-monteiro': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=533&fit=crop&q=80&grayscale',
  'kanya-srisawat':  'https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=400&h=533&fit=crop&q=80&grayscale',
  'marcus-webb':     'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=400&h=533&fit=crop&q=80&grayscale',
  'daria-volkov':    'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=533&fit=crop&q=80&grayscale',
};

const reveal = (visible: boolean, delay: number) => ({
  opacity: visible ? 1 : 0,
  transform: visible ? 'none' : 'translateY(24px)',
  transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
});

interface CoachesProps {
  coaches: Coach[];
}

export default function Coaches({ coaches }: CoachesProps) {
  const { ref, visible } = useScrollReveal();

  return (
    <div ref={ref} className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-screen-2xl mx-auto">
        <div style={reveal(visible, 0)}>
          <p className="font-mono text-xs text-muted uppercase tracking-widest mb-2">Coaches</p>
          <h2 className="font-display font-black uppercase text-white mb-12"
            style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}
          >
            Coaching Staff
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {coaches.map((coach, i) => (
            <div
              key={coach.id}
              className="bg-surface flex flex-col"
              style={reveal(visible, i * 100)}
            >
              <div className="aspect-3/4 overflow-hidden">
                <img
                  src={COACH_PHOTOS[coach.id]}
                  alt={coach.name}
                  className="w-full h-full object-cover object-top grayscale"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="p-6 flex flex-col flex-1 gap-4">
                <div>
                  <p className="font-mono text-xs text-muted uppercase tracking-widest mb-2">
                    {coach.role}
                  </p>
                  <h3 className="font-display font-black uppercase text-white text-xl leading-tight">
                    {coach.name}
                  </h3>
                </div>

                <div className="border-t border-border" />

                {coach.record ? (
                  <div>
                    <p className="font-mono text-xs text-muted uppercase tracking-widest mb-1">Record</p>
                    <p className="font-mono text-sm text-white">
                      {coach.record.wins}W &middot; {coach.record.losses}L
                      {coach.record.draws > 0 && ` · ${coach.record.draws}D`}
                    </p>
                    <p className="font-mono text-xs text-muted mt-0.5">{coach.record.notes}</p>
                  </div>
                ) : (
                  coach.rank && (
                    <div>
                      <p className="font-mono text-xs text-muted uppercase tracking-widest mb-1">Rank</p>
                      <p className="font-mono text-sm text-white">{coach.rank}</p>
                      {coach.lineage && coach.lineage.length > 0 && (
                        <div className="mt-2 space-y-0.5">
                          {coach.lineage.map((name, idx) => (
                            <p key={name} className="font-mono text-xs text-muted leading-relaxed">
                              {idx > 0 && <span className="text-accent">↓ </span>}
                              {name}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                )}

                <div className="border-t border-border" />

                <ul className="space-y-1.5 flex-1">
                  {coach.credentials.map((cred) => (
                    <li key={cred} className="font-mono text-xs text-muted flex gap-2">
                      <span className="text-accent shrink-0">—</span>
                      {cred}
                    </li>
                  ))}
                </ul>

                <div className="border-t border-border" />

                <p className="font-sans text-xs text-muted leading-relaxed">
                  {coach.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
