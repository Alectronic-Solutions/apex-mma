'use client';

import TrialTrigger from './TrialTrigger';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const reveal = (visible: boolean, delay: number) => ({
  opacity: visible ? 1 : 0,
  transform: visible ? 'none' : 'translateY(24px)',
  transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
});

export default function CtaBanner() {
  const { ref, visible } = useScrollReveal();

  return (
    <div ref={ref} className="bg-surface py-24 px-6 md:px-12 lg:px-24 text-center">
      <div className="max-w-screen-2xl mx-auto">
        <h2
          className="font-display font-black uppercase text-white"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', ...reveal(visible, 0) }}
        >
          Still Deciding?
        </h2>
        <p
          className="font-sans text-muted text-base mt-4 max-w-md mx-auto"
          style={reveal(visible, 100)}
        >
          Your first class costs nothing. No credit card. No follow-up calls unless you ask.
        </p>
        <div className="mt-10 flex justify-center" style={reveal(visible, 200)}>
          <TrialTrigger variant="banner" label="CLAIM FREE TRIAL" />
        </div>
      </div>
    </div>
  );
}
