import type { Coach } from '@/data/gym';

const COACH_PHOTOS: Record<string, string> = {
  // Rafael Monteiro — BJJ Black Belt, Brazilian
  'rafael-monteiro': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=533&fit=crop&q=80&grayscale',
  // Kanya Srisawat — Muay Thai, Thai female fighter
  'kanya-srisawat':  'https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=400&h=533&fit=crop&q=80&grayscale',
  // Marcus Webb — Wrestling, American male athlete
  'marcus-webb':     'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=400&h=533&fit=crop&q=80&grayscale',
  // Daria Volkov — MMA & Striking, female coach
  'daria-volkov':    'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=533&fit=crop&q=80&grayscale',
};

interface CoachesProps {
  coaches: Coach[];
}

export default function Coaches({ coaches }: CoachesProps) {
  return (
    <div className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-screen-2xl mx-auto">
        <p className="font-mono text-xs text-muted uppercase tracking-widest mb-2">Coaches</p>
        <h2 className="font-display font-black uppercase text-white mb-12"
          style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}
        >
          Coaching Staff
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {coaches.map((coach) => (
            <div key={coach.id} className="bg-surface flex flex-col">
              {/* Coach photo */}
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
                {/* Name + Role */}
                <div>
                  <p className="font-mono text-xs text-muted uppercase tracking-widest mb-2">
                    {coach.role}
                  </p>
                  <h3 className="font-display font-black uppercase text-white text-xl leading-tight">
                    {coach.name}
                  </h3>
                </div>

                <div className="border-t border-border" />

                {/* Record */}
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
                  /* Rank + Lineage shown in record's place when no record */
                  coach.rank && (
                    <div>
                      <p className="font-mono text-xs text-muted uppercase tracking-widest mb-1">Rank</p>
                      <p className="font-mono text-sm text-white">{coach.rank}</p>
                      {coach.lineage && coach.lineage.length > 0 && (
                        <div className="mt-2 space-y-0.5">
                          {coach.lineage.map((name, i) => (
                            <p key={name} className="font-mono text-xs text-muted leading-relaxed">
                              {i > 0 && <span className="text-accent">↓ </span>}
                              {name}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                )}

                <div className="border-t border-border" />

                {/* Credentials */}
                <ul className="space-y-1.5 flex-1">
                  {coach.credentials.map((cred) => (
                    <li key={cred} className="font-mono text-xs text-muted flex gap-2">
                      <span className="text-accent shrink-0">—</span>
                      {cred}
                    </li>
                  ))}
                </ul>

                <div className="border-t border-border" />

                {/* Bio */}
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
