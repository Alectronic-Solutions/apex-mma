import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import ClassSchedule from '@/components/ClassSchedule';
import Coaches from '@/components/Coaches';
import BeginnerOnboarding from '@/components/BeginnerOnboarding';
import GymFeatures from '@/components/GymFeatures';
import Testimonials from '@/components/Testimonials';
import Membership from '@/components/Membership';
import CtaBanner from '@/components/CtaBanner';
import FAQ from '@/components/FAQ';
import LocationHours from '@/components/LocationHours';
import Footer from '@/components/Footer';
import {
  schedule,
  coaches,
  stats,
  features,
  testimonials,
  membershipPlans,
  faq,
  location,
} from '@/data/gym';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <StatsBar stats={stats} />
        <section id="schedule" aria-label="Class Schedule">
          <ClassSchedule slots={schedule} coaches={coaches} />
        </section>
        <section id="coaches" aria-label="Coaching Staff">
          <Coaches coaches={coaches} />
        </section>
        <section id="beginners" aria-label="What to Expect">
          <BeginnerOnboarding />
        </section>
        <GymFeatures features={features} />
        <Testimonials testimonials={testimonials} />
        <section id="membership" aria-label="Membership Plans">
          <Membership plans={membershipPlans} />
        </section>
        <CtaBanner />
        <section id="faq" aria-label="Frequently Asked Questions">
          <FAQ items={faq} />
        </section>
        <LocationHours location={location} />
      </main>
      <Footer />
    </>
  );
}
