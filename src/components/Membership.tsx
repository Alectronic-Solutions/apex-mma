import type { MembershipPlan } from '@/data/gym';
import TrialTrigger from './TrialTrigger';

interface MembershipProps {
  plans: MembershipPlan[];
}

const tierAccent: Record<string, string> = {
  trial: 'border-t-2 border-t-border',
  single: 'border-t-2 border-t-[#52525B]',
  unlimited: 'border-t-2 border-t-[#EF4444]',
};

export default function Membership({ plans }: MembershipProps) {
  return (
    <div className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-screen-2xl mx-auto">
        <p className="font-mono text-xs text-[#A1A1AA] uppercase tracking-widest mb-2">Membership</p>
        <h2 className="font-display font-black uppercase text-white mb-12"
          style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}
        >
          Join the Gym
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#27272A]">
          {plans.map((plan) => (
            <div
              key={plan.tier}
              className={[
                'flex flex-col p-8 transition-colors duration-200',
                tierAccent[plan.tier] ?? '',
                plan.highlighted
                  ? 'bg-[#1C0A0A] ring-1 ring-accent'
                  : 'bg-surface hover:bg-[#1F1F23]',
              ].join(' ')}
            >
              {plan.highlighted ? (
                <p className="font-mono text-xs text-[#EF4444] uppercase tracking-widest mb-4">
                  Most Popular
                </p>
              ) : (
                <p className="font-mono text-xs text-transparent uppercase tracking-widest mb-4 select-none">
                  &nbsp;
                </p>
              )}

              <h3 className="font-display font-black uppercase text-white text-2xl">
                {plan.name}
              </h3>

              <div className="mt-4 flex items-end gap-1.5">
                <span className="font-mono text-white leading-none" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                  {plan.price}
                </span>
                <span className="font-mono text-sm text-[#71717A] mb-1">{plan.period}</span>
              </div>

              <div className="mt-6 mb-8 border-t border-border" />

              <ul className="space-y-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="font-mono text-[#EF4444] text-sm leading-snug mt-0.5 shrink-0">✓</span>
                    <span className="font-mono text-sm text-white/75 leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                {plan.tier === 'trial' ? (
                  <TrialTrigger variant="nav" label={plan.cta} />
                ) : (
                  <TrialTrigger variant="hero" label={plan.cta} />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
