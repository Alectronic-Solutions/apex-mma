'use client';

import type { FAQItem } from '@/data/gym';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface FAQProps {
  items: FAQItem[];
}

const reveal = (visible: boolean, delay: number) => ({
  opacity: visible ? 1 : 0,
  transform: visible ? 'none' : 'translateY(24px)',
  transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
});

export default function FAQ({ items }: FAQProps) {
  const { ref, visible } = useScrollReveal();

  return (
    <div ref={ref} className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-screen-2xl mx-auto">
        <div style={reveal(visible, 0)}>
          <p className="font-mono text-xs text-muted uppercase tracking-widest mb-2">FAQ</p>
          <h2 className="font-display font-black uppercase text-white mb-12"
            style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}
          >
            Frequently Asked
          </h2>
        </div>

        <div className="max-w-3xl">
          {items.map((item, i) => (
            <details
              key={item.id}
              className="border-b border-border group"
              style={reveal(visible, i * 60)}
            >
              <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer font-display font-black uppercase text-base md:text-lg text-white list-none select-none">
                {item.question}
                <span className="font-mono text-muted group-open:text-accent transition-colors shrink-0">
                  +
                </span>
              </summary>
              <p className="pb-6 font-mono text-sm text-muted leading-relaxed">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
