'use client';

import { useState } from 'react';
import FreeTrialModal from './FreeTrialModal';

interface TrialTriggerProps {
  variant: 'nav' | 'hero' | 'inline' | 'banner';
  label?: string;
}

const variantClasses: Record<TrialTriggerProps['variant'], string> = {
  nav: 'border border-[#EF4444] text-[#EF4444] px-4 py-1.5 text-xs font-mono uppercase tracking-widest hover:bg-[#EF4444] hover:text-white transition-colors cursor-pointer',
  hero: 'bg-[#EF4444] text-white px-8 py-4 font-display font-black text-lg uppercase tracking-wide hover:bg-[#DC2626] transition-colors cursor-pointer',
  inline: 'border border-[#27272A] text-[#A1A1AA] px-3 py-1.5 text-xs font-mono uppercase tracking-widest hover:border-[#EF4444] hover:text-[#EF4444] transition-colors cursor-pointer',
  banner: 'bg-[#EF4444] text-white px-10 py-4 font-display font-black text-xl uppercase tracking-wide hover:bg-[#DC2626] transition-colors cursor-pointer',
};

export default function TrialTrigger({ variant, label = 'CLAIM FREE TRIAL' }: TrialTriggerProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={variantClasses[variant]}
      >
        {label}
      </button>
      {open && <FreeTrialModal onClose={() => setOpen(false)} />}
    </>
  );
}
