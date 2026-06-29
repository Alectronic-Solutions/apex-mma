'use client';

import { useEffect, useRef, useState } from 'react';

const steps = [
  {
    number: '01',
    title: 'Show Up',
    body: 'Wear shorts and a t-shirt. No gi, no gloves, no gear. Arrive ten minutes before class starts so your coach can meet you.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
        <rect x="3" y="2" width="13" height="20" />
        <line x1="16" y1="12" x2="21" y2="12" />
        <polyline points="19 10 21 12 19 14" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Coach Orientation',
    body: 'Your coach takes ten minutes before class to walk you through the structure, the mat etiquette, and what the session looks like. One-on-one, no audience.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
        <circle cx="12" cy="7" r="4" />
        <path d="M4 21v-2a8 8 0 0116 0v2" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Drill, Not Spar',
    body: 'Every Fundamentals class is technique at controlled pace. You drill movements with a partner. There is no live sparring in your first session, or until your coach clears you.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4" />
        <line x1="12" y1="3" x2="12" y2="8" />
        <line x1="12" y1="16" x2="12" y2="21" />
        <line x1="3" y1="12" x2="8" y2="12" />
        <line x1="16" y1="12" x2="21" y2="12" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Ask Anything',
    body: 'After class, your coach stays for fifteen minutes. Bring your questions: belt levels, hygiene policy, membership, technique.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
];

type Step = (typeof steps)[number];

function StepRow({
  step,
  index,
  isLast,
  visible,
}: {
  step: Step;
  index: number;
  isLast: boolean;
  visible: boolean;
}) {
  return (
    <div
      className="relative flex gap-0 md:gap-6 items-stretch"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: 'opacity 0.55s ease, transform 0.55s ease',
        transitionDelay: visible ? `${index * 130}ms` : '0ms',
      }}
    >
      {/* Timeline spine */}
      <div className="flex flex-col items-center w-10 shrink-0 pt-2">
        <div className="w-3 h-3 bg-accent shrink-0" />
        {!isLast && <div className="w-px flex-1 bg-border mt-2" />}
      </div>

      {/* Content card */}
      <div className="relative overflow-hidden flex-1 bg-surface border border-border p-8 md:p-10 mb-px group hover:border-[#3F3F46] transition-colors duration-300">

        {/* Ghost watermark number */}
        <span
          className="pointer-events-none select-none absolute right-6 top-1/2 -translate-y-1/2 font-display font-black uppercase leading-none text-foreground"
          style={{ fontSize: 'clamp(6rem, 13vw, 10rem)', opacity: 0.04 }}
          aria-hidden="true"
        >
          {step.number}
        </span>

        {/* Top row: step label + icon */}
        <div className="flex items-center justify-between mb-5">
          <span className="font-mono text-sm text-accent uppercase tracking-widest">
            Step {step.number}
          </span>
          <span className="text-[#3F3F46] group-hover:text-accent transition-colors duration-300">
            {step.icon}
          </span>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-5" />

        {/* Title */}
        <h3
          className="font-display font-black uppercase text-white leading-none mb-4"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)' }}
        >
          {step.title}
        </h3>

        {/* Body */}
        <p className="font-sans text-base text-muted leading-relaxed max-w-2xl">
          {step.body}
        </p>
      </div>
    </div>
  );
}

export default function BeginnerOnboarding() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-screen-2xl mx-auto">

        {/* Section header */}
        <div className="mb-14">
          <p className="font-mono text-sm text-muted uppercase tracking-widest mb-3">On Day One</p>
          <div className="flex items-end gap-5 flex-wrap">
            <h2
              className="font-display font-black uppercase text-white leading-none"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}
            >
              What to Expect
            </h2>
            <span
              className="font-display font-black uppercase text-accent leading-none mb-1 hidden md:block"
              style={{ fontSize: 'clamp(1rem, 2vw, 1.4rem)' }}
            >
              Four steps. No surprises.
            </span>
          </div>
          <div className="mt-5 w-16 h-0.5 bg-accent" />
        </div>

        {/* Timeline */}
        <div ref={ref} className="flex flex-col gap-0">
          {steps.map((step, index) => (
            <StepRow
              key={step.number}
              step={step}
              index={index}
              isLast={index === steps.length - 1}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
