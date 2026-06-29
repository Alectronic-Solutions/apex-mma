'use client';

import { useState } from 'react';
import TrialTrigger from './TrialTrigger';

const navLinks = [
  { label: 'Schedule', href: '#schedule' },
  { label: 'Coaches', href: '#coaches' },
  { label: 'Beginners', href: '#beginners' },
  { label: 'Membership', href: '#membership' },
  { label: 'FAQ', href: '#faq' },
];

export default function MobileNavToggle() {
  const [open, setOpen] = useState(false);

  return (
    <div className={`md:hidden ${open ? 'relative z-90' : ''}`}>
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        className="flex flex-col justify-center gap-[5px] w-8 h-8 cursor-pointer"
      >
        <span
          className={`block h-px w-full bg-[#FAFAFA] transition-transform duration-200 origin-center ${open ? 'translate-y-[6px] rotate-45' : ''}`}
        />
        <span
          className={`block h-px w-full bg-[#FAFAFA] transition-opacity duration-200 ${open ? 'opacity-0' : ''}`}
        />
        <span
          className={`block h-px w-full bg-[#FAFAFA] transition-transform duration-200 origin-center ${open ? '-translate-y-[6px] -rotate-45' : ''}`}
        />
      </button>

      {open && (
        <div className="fixed inset-0 z-[80] bg-[#09090B] flex flex-col p-6 pt-20">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-mono text-sm text-[#A1A1AA] hover:text-white uppercase tracking-widest py-3 border-b border-[#27272A] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-8">
            <TrialTrigger variant="hero" label="CLAIM FREE TRIAL" />
          </div>
        </div>
      )}
    </div>
  );
}
