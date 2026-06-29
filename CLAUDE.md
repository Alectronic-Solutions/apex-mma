@AGENTS.md
# APEX MMA — SYSTEM CONSTITUTION

## 1. AESTHETIC & VISUAL ARCHITECTURE (Brutalist Athleticism)
- **Vibe:** World-class martial arts academy. Intimidatingly clean, respectful, disciplined, and premium. Zero cheesy graphic overlays.
- **Palette (Tailwind v4 Dark Mode Natively):**
  - Background: `#09090B` (Deep Obsidian / Zinc 950)
  - Surface/Containers: `#18181B` (Asphalt / Zinc 900)
  - Primary Typography: `#FAFAFA` (Crisp Off-White)
  - Muted Data/Times: `#A1A1AA` (Zinc 400)
  - High-Intent Conversion Accent: `#EF4444` (Championship Crimson — strictly reserved for Free Trial triggers)
- **Typography:** 
  - Headings: Ultra-heavy, condensed, uppercase sans-serif (`font-black tracking-tighter uppercase`).
  - Timetables & Fight Lineages: Strict monospace for times, weight classes, and instructor credentials.
- **Borders & Grid:** Raw `1px solid #27272A`. Zero rounded corners larger than `2px`. Pure structural tension.

## 2. THE +40% CONVERSION ENGINE (Core Modules)
- **Frictionless Free Trial Flow (`FreeTrialModal.tsx`):** 
  - Must be a multi-step micro-triage flow: Step 1: Select Discipline (Brazilian Jiu-Jitsu, Muay Thai, MMA, Wrestling). Step 2: Experience Level (Total Beginner vs. Experienced). Step 3: Name & Phone Number. 
  - Keep form fields to an absolute minimum. No password creation.
- **Interactive Timetable Matrix (`ClassSchedule.tsx`):**
  - Filterable tabs by Discipline, Day of the week, and Class Type (Fundamentals, Sparring, All Levels).
  - Must display exact start/end times in Monospace, instructor name, and a direct `[ BOOK TRIAL ]` micro-button on every single class slot.
- **Instructor Lineage Cards (`Coaches.tsx`):** Highlight legitimate combat credentials (e.g., *3rd Degree BJJ Black Belt under Renzo Gracie*, *Former Lumpinee Stadium Contender*).

## 3. ANTI-SLOP COPY & SEO LAWS
- **Banned Copy:** "Unleash your inner warrior", "Get in the best shape of your life", "Join the elite", "Crush your goals".
- **Approved Tone:** Factual, welcoming to beginners, ego-free, technically precise. (e.g., "Structured curriculum for all levels.", "No ego on the mats.", "Clean, hospital-grade sanitized tatami.")
- **Local SEO:** Inject JSON-LD schema for `ExerciseGym` and `SportsActivityLocation`, explicitly defining geo-coordinates, parking availability, martial arts styles taught, and free trial pricing structure ($0.00).