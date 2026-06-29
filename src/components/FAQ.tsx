import type { FAQItem } from '@/data/gym';

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  return (
    <div className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-screen-2xl mx-auto">
        <p className="font-mono text-xs text-[#A1A1AA] uppercase tracking-widest mb-2">FAQ</p>
        <h2 className="font-display font-black uppercase text-white mb-12"
          style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}
        >
          Frequently Asked
        </h2>

        <div className="max-w-3xl">
          {items.map((item) => (
            <details key={item.id} className="border-b border-[#27272A] group">
              <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer font-display font-black uppercase text-base md:text-lg text-white list-none select-none">
                {item.question}
                <span className="font-mono text-[#A1A1AA] group-open:text-[#EF4444] transition-colors shrink-0">
                  +
                </span>
              </summary>
              <p className="pb-6 font-mono text-sm text-[#A1A1AA] leading-relaxed">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
