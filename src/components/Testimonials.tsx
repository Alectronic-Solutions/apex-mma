'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import type { Testimonial } from '@/data/gym';

const AVATARS: Record<string, string> = {
  'james-t':  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&q=80&grayscale',
  'priya-n':  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&q=80&grayscale',
  'daniel-r': 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&q=80&grayscale',
  'sofia-k':  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&q=80&grayscale',
};

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const [active, setActive] = useState(0);
  const [minH, setMinH] = useState<number | undefined>(undefined);
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Lock height to tallest card after first render
  useEffect(() => {
    if (!containerRef.current) return;
    const cards = containerRef.current.querySelectorAll<HTMLElement>('[data-card]');
    let max = 0;
    cards.forEach(c => { if (c.offsetHeight > max) max = c.offsetHeight; });
    if (max > 0) setMinH(max);
  }, []);

  const startInterval = useCallback(() => {
    intervalRef.current = setInterval(
      () => setActive(i => (i + 1) % testimonials.length),
      5000
    );
  }, [testimonials.length]);

  useEffect(() => {
    startInterval();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [startInterval]);

  const pause = () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  const resume = () => startInterval();

  return (
    <div className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-screen-2xl mx-auto">
        <p className="font-mono text-xs text-muted uppercase tracking-widest mb-2">From the Mats</p>
        <h2
          className="font-display font-black uppercase text-white mb-12"
          style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}
        >
          Four Members
        </h2>

        {/* Carousel */}
        <div
          ref={containerRef}
          className="relative bg-border"
          style={{ minHeight: minH }}
          onMouseEnter={pause}
          onMouseLeave={resume}
        >
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              data-card
              className="bg-surface p-8 flex flex-col"
              style={{
                position: minH ? 'absolute' : 'relative',
                inset: 0,
                opacity: i === active ? 1 : 0,
                transition: 'opacity 600ms ease',
                pointerEvents: i === active ? 'auto' : 'none',
              }}
            >
              <span
                className="font-display font-black text-accent leading-none select-none"
                aria-hidden="true"
                style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
              >
                &ldquo;
              </span>
              <p className="font-sans text-base text-foreground italic leading-relaxed mt-2">
                {t.quote}
              </p>
              <div className="border-t border-border mt-auto pt-6">
                <div className="flex items-center gap-3">
                  <img
                    src={AVATARS[t.id]}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="grayscale object-cover shrink-0"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="font-display font-black uppercase text-white text-sm truncate">
                        {t.name}
                      </span>
                      <span className="font-mono text-xs text-muted shrink-0">{t.level}</span>
                    </div>
                    <p className="font-mono text-xs text-muted mt-1">
                      {t.discipline} &middot; {t.memberSince}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="flex gap-2 mt-6">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              aria-label={`Show testimonial from ${t.name}`}
              className="w-2 h-2 transition-colors duration-300 cursor-pointer"
              style={{ backgroundColor: i === active ? '#EF4444' : '#27272A' }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
