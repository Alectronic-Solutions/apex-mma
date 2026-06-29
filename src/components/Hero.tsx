'use client';

import { useEffect, useRef } from 'react';
import TrialTrigger from './TrialTrigger';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1555597673-b21d5c935865?w=1920&q=85';

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        const y = window.scrollY * 0.3;
        bgRef.current.style.transform = `translateY(${y}px)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Parallax background */}
      <div
        ref={bgRef}
        className="absolute inset-0 top-[-30%] parallax-bg"
        aria-hidden="true"
      >
        <img
          src={HERO_IMAGE}
          alt=""
          className="w-full h-full object-cover object-center"
          loading="eager"
          decoding="async"
        />
        {/* Dark overlay — heavy at bottom to keep text legible */}
        <div className="absolute inset-0 bg-linear-to-b from-background/60 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="flex-1" />

        <h1
          className="hero-heading font-display font-black uppercase leading-none text-white"
          style={{ fontSize: 'clamp(4.5rem, 14vw, 12rem)' }}
        >
          Apex MMA
        </h1>

        <p className="font-mono text-muted uppercase tracking-[0.1em] md:tracking-[0.3em] mt-4 text-[0.6rem] md:text-xs leading-relaxed">
          Brazilian Jiu-Jitsu · Muay Thai · Wrestling · MMA Striking
        </p>

        <p className="font-sans text-foreground text-base md:text-lg leading-relaxed mt-8 max-w-xl">
          Professional instruction. No ego on the mats.<br />
          Structured curriculum for all levels.
        </p>

        <div className="flex items-baseline gap-6 mt-10 flex-wrap">
          <TrialTrigger variant="hero" label="CLAIM FREE TRIAL" />
          <span className="font-mono text-xs text-muted">
            Your first class is free. No credit card.
          </span>
        </div>
      </div>
    </section>
  );
}
