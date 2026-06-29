'use client';

import { useState, useRef, useEffect } from 'react';
import type { Discipline } from '@/data/gym';

interface FreeTrialModalProps {
  onClose: () => void;
}

const disciplines: Discipline[] = ['BJJ', 'Muay Thai', 'Wrestling', 'MMA Striking'];

export default function FreeTrialModal({ onClose }: FreeTrialModalProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedDiscipline, setSelectedDiscipline] = useState<Discipline | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [firstName, setFirstName] = useState('');
  const [phone, setPhone] = useState('');
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4"
    >
      <div className="w-full max-w-md bg-[#18181B] border border-[#27272A] p-8 relative">
        <div className="flex items-center justify-between mb-8">
          <span className="font-mono text-xs text-[#A1A1AA] uppercase tracking-widest">
            0{step} &mdash; 03
          </span>
          <button
            onClick={onClose}
            aria-label="Close"
            className="font-mono text-[#A1A1AA] hover:text-white text-xl leading-none transition-colors cursor-pointer"
          >
            ×
          </button>
        </div>

        {step === 1 && (
          <div>
            <h2 className="font-display font-black uppercase text-2xl text-white mb-6">
              Select Your Discipline
            </h2>
            <div className="grid grid-cols-2 gap-px bg-[#27272A]">
              {disciplines.map((d) => (
                <button
                  key={d}
                  onClick={() => {
                    setSelectedDiscipline(d);
                    setStep(2);
                  }}
                  className={`bg-[#18181B] p-6 font-display font-black uppercase text-base text-left cursor-pointer transition-colors hover:text-[#EF4444] ${
                    selectedDiscipline === d ? 'text-[#EF4444]' : 'text-white'
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="font-display font-black uppercase text-2xl text-white mb-2">
              Your Experience
            </h2>
            <p className="font-mono text-xs text-[#A1A1AA] mb-6">
              This helps your coach prepare the right session.
            </p>
            <div className="flex flex-col gap-px bg-[#27272A]">
              {['No training background', 'I have trained before'].map((level) => (
                <button
                  key={level}
                  onClick={() => {
                    setSelectedLevel(level);
                    setStep(3);
                  }}
                  className={`bg-[#18181B] p-6 font-display font-black uppercase text-base text-left cursor-pointer transition-colors hover:text-[#EF4444] ${
                    selectedLevel === level ? 'text-[#EF4444]' : 'text-white'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
            <button
              onClick={() => setStep(1)}
              className="font-mono text-xs text-[#A1A1AA] hover:text-white mt-4 transition-colors cursor-pointer"
            >
              ← Back
            </button>
          </div>
        )}

        {step === 3 && (
          <form onSubmit={handleSubmit}>
            <h2 className="font-display font-black uppercase text-2xl text-white mb-6">
              Book Your Spot
            </h2>
            <div className="flex flex-col gap-4">
              <div>
                <label className="font-mono text-xs text-[#A1A1AA] uppercase tracking-widest block mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full bg-transparent border border-[#27272A] p-3 font-mono text-sm text-[#FAFAFA] focus:border-[#EF4444] focus:outline-none transition-colors"
                  placeholder="Your first name"
                />
              </div>
              <div>
                <label className="font-mono text-xs text-[#A1A1AA] uppercase tracking-widest block mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-transparent border border-[#27272A] p-3 font-mono text-sm text-[#FAFAFA] focus:border-[#EF4444] focus:outline-none transition-colors"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-[#EF4444] text-white py-4 font-display font-black uppercase text-lg hover:bg-[#DC2626] transition-colors mt-6 cursor-pointer"
            >
              Book My Free Trial
            </button>
            <button
              type="button"
              onClick={() => setStep(2)}
              className="font-mono text-xs text-[#A1A1AA] hover:text-white mt-4 transition-colors cursor-pointer block"
            >
              ← Back
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
