'use client';

import { useState } from 'react';
import type { ClassSlot, Coach, Discipline, ClassType, DayOfWeek } from '@/data/gym';
import TrialTrigger from './TrialTrigger';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface ClassScheduleProps {
  slots: ClassSlot[];
  coaches: Coach[];
}

const days: (DayOfWeek | 'All')[] = ['All', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const dayLabels: Record<string, string> = {
  All: 'All', Monday: 'Mon', Tuesday: 'Tue', Wednesday: 'Wed',
  Thursday: 'Thu', Friday: 'Fri', Saturday: 'Sat', Sunday: 'Sun',
};
const disciplines: (Discipline | 'All')[] = ['All', 'BJJ', 'Muay Thai', 'Wrestling', 'MMA Striking'];
const classTypes: (ClassType | 'All')[] = ['All', 'Fundamentals', 'All Levels', 'Sparring', 'Open Mat'];

function FilterTabs<T extends string>({
  options,
  active,
  labels,
  onChange,
}: {
  options: T[];
  active: T;
  labels?: Record<string, string>;
  onChange: (v: T) => void;
}) {
  return (
    <div className="flex flex-wrap gap-1">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          className={`font-mono text-xs uppercase px-3 py-1.5 border-b-2 transition-colors cursor-pointer ${
            active === opt
              ? 'border-accent text-white'
              : 'border-transparent text-muted hover:text-white'
          }`}
        >
          {labels?.[opt] ?? opt}
        </button>
      ))}
    </div>
  );
}

const reveal = (visible: boolean, delay: number) => ({
  opacity: visible ? 1 : 0,
  transform: visible ? 'none' : 'translateY(24px)',
  transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
});

export default function ClassSchedule({ slots, coaches }: ClassScheduleProps) {
  const { ref, visible } = useScrollReveal();
  const [day, setDay] = useState<DayOfWeek | 'All'>('All');
  const [discipline, setDiscipline] = useState<Discipline | 'All'>('All');
  const [classType, setClassType] = useState<ClassType | 'All'>('All');
  const [page, setPage] = useState(0);

  const PAGE_SIZE = 6;

  const coachMap = Object.fromEntries(coaches.map((c) => [c.id, c]));

  const filtered = slots.filter((slot) => {
    if (day !== 'All' && slot.day !== day) return false;
    if (discipline !== 'All' && slot.discipline !== discipline) return false;
    if (classType !== 'All' && slot.classType !== classType) return false;
    return true;
  });

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const clampedPage = Math.min(page, Math.max(0, totalPages - 1));
  const paginated = filtered.slice(clampedPage * PAGE_SIZE, clampedPage * PAGE_SIZE + PAGE_SIZE);

  const handleFilterChange = <T,>(setter: (v: T) => void) => (v: T) => {
    setter(v);
    setPage(0);
  };

  return (
    <div ref={ref} className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-screen-2xl mx-auto">
        <div style={reveal(visible, 0)}>
          <p className="font-mono text-xs text-muted uppercase tracking-widest mb-2">Schedule</p>
          <h2 className="font-display font-black uppercase text-white mb-12"
            style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}
          >
            Class Timetable
          </h2>
        </div>

        <div className="flex flex-col gap-4 mb-8">
          <div style={reveal(visible, 80)}><FilterTabs options={days} active={day} labels={dayLabels} onChange={handleFilterChange(setDay)} /></div>
          <div style={reveal(visible, 160)}><FilterTabs options={disciplines} active={discipline} onChange={handleFilterChange(setDiscipline)} /></div>
          <div style={reveal(visible, 240)}><FilterTabs options={classTypes} active={classType} onChange={handleFilterChange(setClassType)} /></div>
        </div>

        <p className="font-mono text-xs text-muted mb-6">
          {filtered.length} {filtered.length === 1 ? 'CLASS' : 'CLASSES'} SHOWN
          {totalPages > 1 && (
            <span className="ml-3">— PAGE {clampedPage + 1} OF {totalPages}</span>
          )}
        </p>

        {filtered.length === 0 ? (
          <p className="font-mono text-sm text-muted py-16 text-center">
            No classes match this combination.
          </p>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-border">
              {paginated.map((slot, i) => {
                const coach = coachMap[slot.instructorId];
                return (
                  <div
                    key={slot.id}
                    className="bg-surface p-6 flex flex-col gap-4"
                    style={reveal(visible, i * 50)}
                  >
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-2">
                      <div>
                        <span className="font-mono text-xs text-accent uppercase tracking-widest">
                          {slot.discipline}
                        </span>
                        <span className="font-mono text-xs text-muted"> &middot; {slot.classType}</span>
                      </div>
                      <span className="font-mono text-xs text-muted uppercase shrink-0">
                        {slot.day}
                      </span>
                    </div>

                    <div className="border-t border-border" />

                    <div className="font-display font-black uppercase text-white text-xl">
                      {coach?.name ?? slot.instructorId}
                    </div>

                    <div className="flex items-center justify-between mt-auto">
                      <span className="font-mono text-base md:text-xl text-white">
                        {slot.startTime} &mdash; {slot.endTime}
                      </span>
                      <TrialTrigger variant="inline" label="BOOK TRIAL" />
                    </div>
                  </div>
                );
              })}
            </div>

            {totalPages > 1 && (
              <div className="flex items-center justify-between mt-6 border-t border-border pt-6">
                <button
                  onClick={() => setPage((p) => Math.max(0, p - 1))}
                  disabled={clampedPage === 0}
                  className="font-mono text-xs uppercase px-4 py-2 border border-border text-muted hover:text-white hover:border-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                >
                  &larr; Previous
                </button>
                <div className="flex gap-1">
                  {Array.from({ length: totalPages }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => setPage(i)}
                      className={`font-mono text-xs w-8 h-8 border transition-colors cursor-pointer ${
                        i === clampedPage
                          ? 'border-accent text-white'
                          : 'border-border text-muted hover:text-white hover:border-white'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                  disabled={clampedPage === totalPages - 1}
                  className="font-mono text-xs uppercase px-4 py-2 border border-border text-muted hover:text-white hover:border-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                >
                  Next &rarr;
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
