import type { Metadata } from 'next';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Use | Apex MMA',
  description: 'Terms of Use for Apex MMA, located in Riverside, CA.',
};

const sections = [
  {
    title: 'Acceptance of Terms',
    content: [
      'These Terms of Use govern your access to the apexmma.com website and your participation in classes, programs, and events offered by Apex MMA at 47 Industrial Avenue, Unit 4, Riverside, CA 92501.',
      'By using this website, booking a free trial, or enrolling as a member, you agree to these terms in full. If you do not agree, please do not use our site or services.',
    ],
  },
  {
    title: 'Gym Membership and Classes',
    content: [
      'Memberships at Apex MMA are offered on a month-to-month basis unless otherwise stated in a written agreement.',
    ],
    list: [
      'Cancellations require 30 days written notice sent to info@apexmma.com or delivered in person at the front desk.',
      'Membership fees are non-refundable for any month in which classes have already been attended.',
      'We reserve the right to suspend or terminate a membership for violation of our Code of Conduct (see below).',
      'Schedule changes, instructor substitutions, and class cancellations may occur without prior notice. We will make reasonable efforts to notify affected members.',
    ],
  },
  {
    title: 'Free Trial Class',
    content: [
      'New prospective members are eligible for one free Fundamentals class. The free trial is subject to the following conditions:',
    ],
    list: [
      'One trial per person. It is non-transferable and has no cash value.',
      'Subject to class availability. Walk-ins are welcome but advance booking is recommended.',
      'Participants must complete a brief intake form and sign a liability waiver before taking the mat.',
      'The trial applies to Fundamentals-level classes only. Advanced, sparring, and competition classes require active membership.',
    ],
  },
  {
    title: 'Assumption of Risk and Waiver',
    content: [
      'Martial arts training involves physical contact, resistance, and inherent risk of injury. By participating in any class or activity at Apex MMA, you acknowledge and accept those risks.',
      'All members and trial participants must sign a liability waiver prior to their first class. The waiver includes acknowledgment of physical risk, agreement to train within personal limits, and release of Apex MMA from liability for injuries arising from normal training activity.',
      'This assumption of risk does not apply to injuries caused by our gross negligence or intentional misconduct.',
    ],
  },
  {
    title: 'Code of Conduct',
    content: [
      'All members, guests, and visitors are expected to conduct themselves with respect and integrity. The following rules apply at all times on our premises:',
    ],
    list: [
      'Treat all members, coaches, and staff with respect regardless of experience level, background, or identity.',
      'Zero tolerance for harassment, bullying, or discriminatory language or behavior. Violations may result in immediate membership termination without refund.',
      'Maintain proper hygiene. Trim nails, wear clean training gear, and shower before class if needed. Do not train with open wounds or contagious skin conditions.',
      'Do not record video or take photos of other members or coaches on the mat without their explicit consent.',
      'Tap early and respect your training partner. Ego-driven aggression that endangers others will not be tolerated.',
    ],
  },
  {
    title: 'Health and Safety',
    content: [
      'The safety of our members and staff is a priority. The following health requirements apply to all participants:',
    ],
    list: [
      'Disclose any injuries, medical conditions, or recent surgeries to your instructor before class. This is for your safety and your training partners\' safety.',
      'Do not train while ill, especially if experiencing fever, respiratory symptoms, or a contagious skin condition.',
      'Our facility is maintained in accordance with applicable California health and sanitation codes. Training surfaces are cleaned daily.',
    ],
  },
  {
    title: 'Intellectual Property',
    content: [
      'All content on this website, including text, images, logos, curriculum materials, and branding, is the property of Apex MMA and is protected by applicable copyright and trademark law.',
      'You may not reproduce, redistribute, or use any content from this site for commercial purposes without prior written permission from Apex MMA.',
    ],
  },
  {
    title: 'Limitation of Liability',
    content: [
      'To the fullest extent permitted by applicable law, Apex MMA and its owners, coaches, and staff are not liable for:',
    ],
    list: [
      'Personal property lost, stolen, or damaged on our premises.',
      'Injuries sustained during training that arise from normal, inherent risks of martial arts activity.',
      'Indirect or consequential damages arising from use of this website.',
    ],
    footer: 'Nothing in these terms limits our liability for gross negligence or intentional misconduct.',
  },
  {
    title: 'Governing Law',
    content: [
      'These Terms of Use are governed by the laws of the State of California. Any disputes arising under or related to these terms will be subject to the exclusive jurisdiction of the courts located in Riverside County, California.',
    ],
  },
  {
    title: 'Changes to These Terms',
    content: [
      'We may update these Terms of Use from time to time. When we do, we will revise the effective date at the top of the page. Your continued use of our website or services after any update constitutes acceptance of the revised terms.',
      'We encourage you to review this page periodically so you are aware of any changes.',
    ],
  },
  {
    title: 'Contact Us',
    content: [
      'If you have questions about these Terms of Use, please contact us:',
    ],
    list: [
      'Email: info@apexmma.com',
      'Phone: (951) 555-0147',
      'Address: 47 Industrial Avenue, Unit 4, Riverside, CA 92501',
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="border-b border-border px-6 md:px-12 lg:px-24 py-4">
        <a
          href="/"
          className="font-mono text-xs text-muted uppercase tracking-widest hover:text-white transition-colors duration-200"
        >
          Back to Apex MMA
        </a>
      </div>

      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-screen-lg mx-auto">
          <p className="font-mono text-sm text-muted uppercase tracking-widest mb-3">Legal</p>
          <h1
            className="font-display font-black uppercase text-white leading-none"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}
          >
            Terms of Use
          </h1>
          <div className="mt-5 w-16 h-0.5 bg-accent" />
          <p className="font-mono text-xs text-muted mt-6">Effective Date: January 1, 2025</p>
        </div>
      </section>

      <section className="pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-screen-lg mx-auto space-y-12">
          {sections.map((section) => (
            <div key={section.title} className="border-t border-border pt-10">
              <h2 className="font-display font-black uppercase text-white text-2xl mb-4">
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.content.map((para, i) => (
                  <p key={i} className="text-muted leading-relaxed">
                    {para}
                  </p>
                ))}
                {section.list && (
                  <ul className="space-y-2 pl-4">
                    {section.list.map((item, i) => (
                      <li key={i} className="text-muted leading-relaxed flex gap-3">
                        <span className="text-accent mt-1.5 shrink-0 w-1 h-1 bg-accent rounded-full block" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.footer && (
                  <p className="text-muted leading-relaxed">{section.footer}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
