export type Discipline = 'BJJ' | 'Muay Thai' | 'Wrestling' | 'MMA Striking';
export type ClassType = 'Fundamentals' | 'All Levels' | 'Sparring' | 'Open Mat';
export type DayOfWeek =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday';
export type MembershipTier = 'trial' | 'single' | 'unlimited';

export interface ClassSlot {
  id: string;
  day: DayOfWeek;
  discipline: Discipline;
  classType: ClassType;
  startTime: string;
  endTime: string;
  instructorId: string;
  capacity: number;
}

export interface FightRecord {
  wins: number;
  losses: number;
  draws: number;
  notes: string;
}

export interface Coach {
  id: string;
  name: string;
  role: string;
  discipline: Discipline;
  rank?: string;
  lineage?: string[];
  record?: FightRecord;
  credentials: string[];
  bio: string;
  nationality: string;
}

export interface Testimonial {
  id: string;
  name: string;
  memberSince: string;
  discipline: Discipline;
  level: string;
  quote: string;
}

export interface GymStat {
  value: string;
  label: string;
}

export interface GymFeature {
  label: string;
  detail: string;
}

export interface MembershipPlan {
  tier: MembershipTier;
  name: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface OpeningHours {
  days: string;
  hours: string;
}

export interface GymLocation {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone: string;
  email: string;
  lat: number;
  lng: number;
  parkingSpaces: number;
  hours: OpeningHours[];
}

export const schedule: ClassSlot[] = [
  { id: 'mon-bjj-fund', day: 'Monday', discipline: 'BJJ', classType: 'Fundamentals', startTime: '06:00', endTime: '07:00', instructorId: 'rafael-monteiro', capacity: 20 },
  { id: 'mon-mt-all', day: 'Monday', discipline: 'Muay Thai', classType: 'All Levels', startTime: '12:00', endTime: '13:00', instructorId: 'kanya-srisawat', capacity: 18 },
  { id: 'mon-bjj-all', day: 'Monday', discipline: 'BJJ', classType: 'All Levels', startTime: '18:00', endTime: '19:30', instructorId: 'rafael-monteiro', capacity: 24 },
  { id: 'mon-mt-spar', day: 'Monday', discipline: 'Muay Thai', classType: 'Sparring', startTime: '19:30', endTime: '21:00', instructorId: 'kanya-srisawat', capacity: 16 },
  { id: 'tue-wr-fund', day: 'Tuesday', discipline: 'Wrestling', classType: 'Fundamentals', startTime: '06:00', endTime: '07:00', instructorId: 'marcus-webb', capacity: 20 },
  { id: 'tue-mma-all', day: 'Tuesday', discipline: 'MMA Striking', classType: 'All Levels', startTime: '18:00', endTime: '19:30', instructorId: 'daria-volkov', capacity: 20 },
  { id: 'tue-bjj-open', day: 'Tuesday', discipline: 'BJJ', classType: 'Open Mat', startTime: '19:30', endTime: '21:00', instructorId: 'rafael-monteiro', capacity: 30 },
  { id: 'wed-mt-fund', day: 'Wednesday', discipline: 'Muay Thai', classType: 'Fundamentals', startTime: '06:00', endTime: '07:00', instructorId: 'kanya-srisawat', capacity: 18 },
  { id: 'wed-bjj-all', day: 'Wednesday', discipline: 'BJJ', classType: 'All Levels', startTime: '12:00', endTime: '13:00', instructorId: 'rafael-monteiro', capacity: 20 },
  { id: 'wed-wr-all', day: 'Wednesday', discipline: 'Wrestling', classType: 'All Levels', startTime: '18:00', endTime: '19:30', instructorId: 'marcus-webb', capacity: 20 },
  { id: 'wed-mt-all', day: 'Wednesday', discipline: 'Muay Thai', classType: 'All Levels', startTime: '19:30', endTime: '21:00', instructorId: 'kanya-srisawat', capacity: 18 },
  { id: 'thu-bjj-fund', day: 'Thursday', discipline: 'BJJ', classType: 'Fundamentals', startTime: '06:00', endTime: '07:00', instructorId: 'rafael-monteiro', capacity: 20 },
  { id: 'thu-mma-fund', day: 'Thursday', discipline: 'MMA Striking', classType: 'Fundamentals', startTime: '18:00', endTime: '19:30', instructorId: 'daria-volkov', capacity: 20 },
  { id: 'thu-bjj-spar', day: 'Thursday', discipline: 'BJJ', classType: 'Sparring', startTime: '19:30', endTime: '21:00', instructorId: 'rafael-monteiro', capacity: 16 },
  { id: 'fri-mt-all', day: 'Friday', discipline: 'Muay Thai', classType: 'All Levels', startTime: '06:00', endTime: '07:00', instructorId: 'kanya-srisawat', capacity: 18 },
  { id: 'fri-wr-fund', day: 'Friday', discipline: 'Wrestling', classType: 'Fundamentals', startTime: '12:00', endTime: '13:00', instructorId: 'marcus-webb', capacity: 20 },
  { id: 'fri-bjj-all', day: 'Friday', discipline: 'BJJ', classType: 'All Levels', startTime: '18:00', endTime: '19:30', instructorId: 'rafael-monteiro', capacity: 24 },
  { id: 'fri-mma-spar', day: 'Friday', discipline: 'MMA Striking', classType: 'Sparring', startTime: '19:30', endTime: '21:00', instructorId: 'daria-volkov', capacity: 16 },
  { id: 'sat-bjj-fund', day: 'Saturday', discipline: 'BJJ', classType: 'Fundamentals', startTime: '09:00', endTime: '10:30', instructorId: 'rafael-monteiro', capacity: 20 },
  { id: 'sat-mt-all', day: 'Saturday', discipline: 'Muay Thai', classType: 'All Levels', startTime: '10:30', endTime: '12:00', instructorId: 'kanya-srisawat', capacity: 18 },
  { id: 'sat-wr-all', day: 'Saturday', discipline: 'Wrestling', classType: 'All Levels', startTime: '12:00', endTime: '13:30', instructorId: 'marcus-webb', capacity: 20 },
  { id: 'sat-mma-all', day: 'Saturday', discipline: 'MMA Striking', classType: 'All Levels', startTime: '13:30', endTime: '15:00', instructorId: 'daria-volkov', capacity: 20 },
  { id: 'sun-bjj-open', day: 'Sunday', discipline: 'BJJ', classType: 'Open Mat', startTime: '10:00', endTime: '12:00', instructorId: 'rafael-monteiro', capacity: 30 },
  { id: 'sun-mt-spar', day: 'Sunday', discipline: 'Muay Thai', classType: 'Sparring', startTime: '12:00', endTime: '13:30', instructorId: 'kanya-srisawat', capacity: 16 },
  { id: 'sun-mma-fund', day: 'Sunday', discipline: 'MMA Striking', classType: 'Fundamentals', startTime: '14:00', endTime: '15:30', instructorId: 'daria-volkov', capacity: 20 },
];

export const coaches: Coach[] = [
  {
    id: 'rafael-monteiro',
    name: 'Rafael Monteiro',
    role: 'BJJ Head Coach / Co-Founder',
    discipline: 'BJJ',
    rank: '3rd Degree Black Belt',
    lineage: ['Carlson Gracie Sr.', 'Carlos Lemos Jr.', 'Rafael Monteiro'],
    record: { wins: 87, losses: 12, draws: 0, notes: 'Submission grappling' },
    credentials: [
      'IBJJF World Champion 2017 (Black Belt)',
      'ADCC Trials Qualifier 2019',
      'Certified NAGA Head Referee',
      '15 years on the mats',
    ],
    bio: 'Rafael moved from São Paulo to train full-time at 19. He has spent fifteen years refining a curriculum that works for beginners on their first day and competitors preparing for IBJJF Worlds.',
    nationality: 'Brazilian',
  },
  {
    id: 'kanya-srisawat',
    name: 'Kanya Srisawat',
    role: 'Muay Thai Head Coach',
    discipline: 'Muay Thai',
    record: { wins: 48, losses: 14, draws: 0, notes: '31 KOs' },
    credentials: [
      'WMC World Champion 2016',
      'Former Lumpinee Stadium Fighter',
      '6 years representing Thailand nationally',
      'IFMA Level 2 Coaching Certificate',
    ],
    bio: 'Kanya fought out of Chiang Mai from age fourteen. She holds the WMC World title at 60 kg and has since shifted her focus entirely to teaching the technical Muay Thai she developed over a sixteen-year career.',
    nationality: 'Thai',
  },
  {
    id: 'marcus-webb',
    name: 'Marcus Webb',
    role: 'Wrestling & Grappling Coach',
    discipline: 'Wrestling',
    record: { wins: 134, losses: 12, draws: 0, notes: 'NCAA Division I' },
    credentials: [
      '3× Ohio State Champion',
      'NCAA Division I All-American',
      'USA Wrestling Level 3 Certified Coach',
      'Former OTC Resident Athlete',
    ],
    bio: 'Marcus finished his collegiate career ranked second nationally at 74 kg. His coaching method is systematic: he breaks wrestling down into physics problems and rebuilds athletes from the ground up.',
    nationality: 'American',
  },
  {
    id: 'daria-volkov',
    name: 'Daria Volkov',
    role: 'MMA & Striking Coach',
    discipline: 'MMA Striking',
    record: { wins: 12, losses: 4, draws: 0, notes: '8 TKO finishes' },
    credentials: [
      'Former Bellator 125 lb Contender',
      'RDA Boxing Level 3 Certification',
      'IMMAF Head Coach Licence',
      '10 years competitive MMA',
    ],
    bio: 'Daria competed for Bellator from 2015 to 2021. She retired with 8 stoppages and has spent the three years since developing a striking curriculum for fighters at every experience level.',
    nationality: 'Russian',
  },
];

export const stats: GymStat[] = [
  { value: '400+', label: 'Active Members' },
  { value: '15', label: 'Years on the Mats' },
  { value: '4', label: 'World Champions Trained' },
  { value: '4', label: 'Disciplines Under One Roof' },
];

export const features: GymFeature[] = [
  { label: '3,500 sq ft mat space', detail: 'Climate-controlled, dedicated zones per discipline' },
  { label: 'Hospital-grade tatami', detail: 'Sanitised before every session. CCTV monitored.' },
  { label: 'Strength & conditioning', detail: 'Bags, weights, and cardio equipment on-site' },
  { label: 'Changing rooms & showers', detail: "Separate men's and women's facilities" },
  { label: 'First aid certified coaches', detail: 'On every mat, every session' },
  { label: 'Pro shop on-site', detail: 'Gi, gloves, wraps, mouthguards' },
  { label: 'No lock-in contracts', detail: 'Month-to-month. Book classes online 7 days ahead.' },
  { label: 'Parking & spectator seating', detail: '20 dedicated spaces. Room for parents and supporters.' },
];

export const testimonials: Testimonial[] = [
  {
    id: 'james-t',
    name: 'James T.',
    memberSince: 'Member since 2022',
    discipline: 'BJJ',
    level: 'Blue Belt',
    quote: 'I walked in knowing nothing. Six months later I got my first stripe and submitted a guy with three years on me. The Fundamentals class is designed for people who have never trained. No one threw me in the deep end.',
  },
  {
    id: 'priya-n',
    name: 'Priya N.',
    memberSince: 'Member since 2023',
    discipline: 'Muay Thai',
    level: 'All Levels',
    quote: 'Kanya corrects your technique in a way that makes sense. No ego in those sessions, from the coach or the other students. I trained at three other gyms. This is different.',
  },
  {
    id: 'daniel-r',
    name: 'Daniel R.',
    memberSince: 'Member since 2021',
    discipline: 'Wrestling',
    level: 'All Levels',
    quote: 'Marcus breaks down complex takedowns to the physics of it. I started here with zero grappling and now I help run the Monday Fundamentals warm-up.',
  },
  {
    id: 'sofia-k',
    name: 'Sofia K.',
    memberSince: 'Member since 2023',
    discipline: 'MMA Striking',
    level: 'All Levels',
    quote: 'I wanted to compete, not just get fit. Daria put me on a twelve-week fight prep plan inside my regular membership. She did not upsell me on personal training. She coached me.',
  },
];

export const membershipPlans: MembershipPlan[] = [
  {
    tier: 'trial',
    name: 'Free Trial',
    price: '$0',
    period: 'one class',
    features: [
      'Any Fundamentals class',
      '10-min coach orientation included',
      'No gear required',
      'No credit card',
    ],
    cta: 'CLAIM FREE TRIAL',
    highlighted: false,
  },
  {
    tier: 'single',
    name: 'Single Discipline',
    price: '$129',
    period: '/month',
    features: [
      'Unlimited classes in one discipline',
      'Open Mat access',
      'Online booking',
      'No lock-in contract',
    ],
    cta: 'GET STARTED',
    highlighted: false,
  },
  {
    tier: 'unlimited',
    name: 'Full Access',
    price: '$199',
    period: '/month',
    features: [
      'All 4 disciplines, unlimited classes',
      'Priority booking (48h window)',
      'Sparring sessions included',
      'Pro shop discount 10%',
    ],
    cta: 'GO FULL ACCESS',
    highlighted: true,
  },
];

export const faq: FAQItem[] = [
  {
    id: 'gear',
    question: 'Do I need to buy gear before my first class?',
    answer: 'No. Wear shorts and a t-shirt. The gym provides loaner gloves for striking classes. Your first class is gear-free.',
  },
  {
    id: 'safety',
    question: 'Is this safe for someone who has never trained before?',
    answer: 'Fundamentals classes run at technique pace only. There is no live sparring until your coach clears you. Every session has a certified coach on the mat. In fifteen years, one Fundamentals class has produced a mat injury.',
  },
  {
    id: 'clothes',
    question: 'What should I wear?',
    answer: 'Shorts and a rash guard or t-shirt for most classes. BJJ classes eventually need a gi. Wait until after your trial before buying one. The pro shop stocks everything you will need.',
  },
  {
    id: 'sparring',
    question: 'Will I be expected to spar on day one?',
    answer: 'No. Fundamentals classes are technique-only. You drill movements with a partner at controlled speed. Sparring comes later, when your coach decides your technique is ready.',
  },
  {
    id: 'fitness',
    question: "I'm not in shape yet. Is that a problem?",
    answer: 'The conditioning comes from training. The first few weeks are hard regardless of fitness level. That is also true for former athletes. Fundamentals classes are paced for beginners. Show up.',
  },
  {
    id: 'hygiene',
    question: 'Are the mats clean?',
    answer: 'Tatami is cleaned with hospital-grade disinfectant before every session. Coaches enforce a no-shoes-on-mat policy and a nail check at the door. If you see something off, tell the desk. It gets fixed before the next class.',
  },
  {
    id: 'trial',
    question: 'Can I try one class before committing to a membership?',
    answer: 'Yes. The free trial is one class in any Fundamentals session. No credit card, no follow-up sales call unless you ask for one. Book through the site or call the desk.',
  },
  {
    id: 'results',
    question: 'How long before I can defend myself?',
    answer: 'Six consistent months of BJJ Fundamentals gives most students working knowledge of escapes, positional control, and basic submissions. Muay Thai students develop functional striking within three to four months. Results track attendance.',
  },
];

export const location: GymLocation = {
  street: '47 Industrial Avenue, Unit 4',
  city: 'Riverside',
  state: 'CA',
  postalCode: '92501',
  country: 'US',
  phone: '+1 (951) 555-0147',
  email: 'info@apexmma.com',
  lat: 33.9806,
  lng: -117.3755,
  parkingSpaces: 20,
  hours: [
    { days: 'Monday – Friday', hours: '06:00 – 21:00' },
    { days: 'Saturday', hours: '09:00 – 15:30' },
    { days: 'Sunday', hours: '10:00 – 15:30' },
  ],
};
