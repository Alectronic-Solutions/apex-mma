'use client';

import { useState, useRef, useEffect } from 'react';
import type { Discipline } from '@/data/gym';

interface FreeTrialModalProps {
  onClose: () => void;
}

const disciplines: Discipline[] = ['BJJ', 'Muay Thai', 'Wrestling', 'MMA Striking'];

export default function FreeTrialModal({ onClose }: FreeTrialModalProps) {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
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
    setStep(4);
  };

  const totalSteps = 3;
  const currentStep = Math.min(step, totalSteps) as 1 | 2 | 3;

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
    >
      <div className="w-full max-w-lg bg-[#18181B] border border-[#27272A] shadow-2xl relative flex flex-col">

        {/* Card header strip */}
        <div className="flex items-center justify-between border-b border-[#27272A] px-6 py-4">
          <div className="flex items-center gap-3">
            {/* Crimson accent bar */}
            <span className="block w-1 h-5 bg-[#EF4444]" />
            <span className="font-mono text-xs text-[#A1A1AA] uppercase tracking-widest">
              Free Trial Class
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="font-mono text-[#A1A1AA] hover:text-white text-xl leading-none transition-colors cursor-pointer"
          >
            ×
          </button>
        </div>

        {/* Step progress bar */}
        {step < 4 && (
          <div className="flex border-b border-[#27272A]">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-0.5 flex-1 transition-colors duration-300 ${
                  s <= currentStep ? 'bg-[#EF4444]' : 'bg-[#27272A]'
                }`}
              />
            ))}
          </div>
        )}

        {/* Card body */}
        <div className="px-8 py-8">

          {/* Step 1 — Discipline */}
          {step === 1 && (
            <div>
              <p className="font-mono text-[10px] text-[#EF4444] uppercase tracking-[0.2em] mb-3">
                Step 1 of 3
              </p>
              <h2 className="font-display font-black uppercase text-2xl text-white mb-6 leading-tight">
                What do you want to train?
              </h2>
              <div className="grid grid-cols-2 gap-px bg-[#27272A]">
                {disciplines.map((d) => (
                  <button
                    key={d}
                    onClick={() => { setSelectedDiscipline(d); setStep(2); }}
                    className={`bg-[#18181B] p-5 font-display font-black uppercase text-sm text-left cursor-pointer transition-colors hover:bg-[#27272A] hover:text-[#EF4444] ${
                      selectedDiscipline === d ? 'text-[#EF4444]' : 'text-white'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2 — Experience */}
          {step === 2 && (
            <div>
              <p className="font-mono text-[10px] text-[#EF4444] uppercase tracking-[0.2em] mb-3">
                Step 2 of 3
              </p>
              <h2 className="font-display font-black uppercase text-2xl text-white mb-2 leading-tight">
                Your experience level
              </h2>
              <p className="font-mono text-xs text-[#A1A1AA] mb-6">
                Helps your coach prepare the right session.
              </p>
              <div className="flex flex-col gap-px bg-[#27272A]">
                {['No training background', 'I have trained before'].map((level) => (
                  <button
                    key={level}
                    onClick={() => { setSelectedLevel(level); setStep(3); }}
                    className={`bg-[#18181B] p-5 font-display font-black uppercase text-sm text-left cursor-pointer transition-colors hover:bg-[#27272A] hover:text-[#EF4444] ${
                      selectedLevel === level ? 'text-[#EF4444]' : 'text-white'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setStep(1)}
                className="font-mono text-[10px] text-[#A1A1AA] hover:text-white mt-5 transition-colors cursor-pointer uppercase tracking-widest"
              >
                ← Back
              </button>
            </div>
          )}

          {/* Step 3 — Contact */}
          {step === 3 && (
            <form onSubmit={handleSubmit}>
              <p className="font-mono text-[10px] text-[#EF4444] uppercase tracking-[0.2em] mb-3">
                Step 3 of 3
              </p>
              <h2 className="font-display font-black uppercase text-2xl text-white mb-6 leading-tight">
                Book your spot
              </h2>
              <div className="flex flex-col gap-4">
                <div>
                  <label className="font-mono text-[10px] text-[#A1A1AA] uppercase tracking-widest block mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full bg-[#09090B] border border-[#27272A] px-4 py-3 font-mono text-sm text-[#FAFAFA] focus:border-[#EF4444] focus:outline-none transition-colors"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="font-mono text-[10px] text-[#A1A1AA] uppercase tracking-widest block mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#09090B] border border-[#27272A] px-4 py-3 font-mono text-sm text-[#FAFAFA] focus:border-[#EF4444] focus:outline-none transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-[#EF4444] text-white py-4 font-display font-black uppercase text-lg hover:bg-[#DC2626] transition-colors mt-6 cursor-pointer"
              >
                Book My Free Trial →
              </button>
              <button
                type="button"
                onClick={() => setStep(2)}
                className="font-mono text-[10px] text-[#A1A1AA] hover:text-white mt-4 transition-colors cursor-pointer uppercase tracking-widest block"
              >
                ← Back
              </button>
            </form>
          )}

          {/* Step 4 — Confirmation */}
          {step === 4 && (
            <div className="text-center py-4">
              <div className="w-12 h-12 border-2 border-[#EF4444] flex items-center justify-center mx-auto mb-6">
                <svg className="w-6 h-6 text-[#EF4444]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="square" strokeLinejoin="miter" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="font-display font-black uppercase text-2xl text-white mb-3">
                You&apos;re Booked
              </h2>
              <p className="font-sans text-[#A1A1AA] text-sm leading-relaxed max-w-xs mx-auto mb-2">
                We&apos;ll call you within 24 hours to confirm your {selectedDiscipline} trial session.
              </p>
              <p className="font-mono text-xs text-[#A1A1AA]">
                No credit card. No commitment.
              </p>
              <button
                onClick={onClose}
                className="mt-8 border border-[#27272A] text-[#A1A1AA] px-6 py-2 font-mono text-xs uppercase tracking-widest hover:border-[#EF4444] hover:text-white transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          )}

        </div>

        {/* Card footer — discipline + level summary (steps 2-3 only) */}
        {step >= 2 && step <= 3 && (
          <div className="flex items-center gap-3 border-t border-[#27272A] px-8 py-4">
            {selectedDiscipline && (
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#EF4444]">
                {selectedDiscipline}
              </span>
            )}
            {selectedLevel && (
              <>
                <span className="text-[#27272A]">·</span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#A1A1AA]">
                  {selectedLevel}
                </span>
              </>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
