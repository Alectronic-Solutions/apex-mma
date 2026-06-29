import type { Metadata } from 'next';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | Apex MMA',
  description: 'Privacy Policy for Apex MMA, located in Riverside, CA.',
};

const sections = [
  {
    title: 'Introduction',
    content: [
      'Apex MMA ("we," "our," or "us") operates the apexmma.com website and provides martial arts training services at 47 Industrial Avenue, Unit 4, Riverside, CA 92501. This Privacy Policy explains how we collect, use, share, and protect personal information when you visit our website or become a member.',
      'By using our website or enrolling in classes, you agree to the practices described in this policy.',
    ],
  },
  {
    title: 'Information We Collect',
    content: [
      'We collect personal information in the following ways:',
    ],
    list: [
      'Contact forms and free trial requests: name, phone number, and email address.',
      'Membership enrollment: billing address, emergency contact, date of birth, and health disclosures relevant to participation.',
      'Payment processing: card details are collected and processed directly by our third-party payment processor (we do not store full card numbers).',
      'Class attendance: records of which classes you attend and with which instructor.',
      'Website analytics: IP address, browser type, pages visited, and time on site, collected via cookies and analytics tools.',
    ],
  },
  {
    title: 'How We Use Your Information',
    content: [
      'We use the information we collect for the following purposes:',
    ],
    list: [
      'Scheduling and confirming class bookings and trial sessions.',
      'Communicating with you about your membership, schedule changes, and gym updates.',
      'Processing membership payments and issuing receipts.',
      'Maintaining safety records including signed waivers and health disclosures.',
      'Improving our website and services based on how visitors interact with the site.',
      'Complying with applicable law or responding to lawful requests from authorities.',
    ],
  },
  {
    title: 'How We Share Your Information',
    content: [
      'We do not sell your personal information to third parties.',
      'We may share your information with:',
    ],
    list: [
      'Payment processors (e.g., Stripe) to handle billing transactions securely.',
      'Class scheduling software to manage bookings and attendance.',
      'Law enforcement or regulatory bodies if required by applicable law.',
    ],
    footer: 'All third-party service providers we work with are contractually required to handle your data in a manner consistent with this policy.',
  },
  {
    title: 'Data Retention',
    content: [
      'We retain personal information for as long as necessary to fulfill the purposes described in this policy.',
    ],
    list: [
      'Active member records are kept for the duration of your membership and for three years after termination.',
      'Trial inquiry information (name, phone, email) is retained for up to one year.',
      'Payment transaction records are kept for seven years in accordance with tax and accounting requirements.',
    ],
  },
  {
    title: 'Your Rights',
    content: [
      'Depending on your location, you may have the right to access, correct, or request deletion of your personal information. To exercise any of these rights, contact us at info@apexmma.com or (951) 555-0147.',
      'We will respond to verified requests within 30 days. We may need to verify your identity before processing a request.',
    ],
  },
  {
    title: 'Cookies and Analytics',
    content: [
      'Our website uses cookies and similar tracking technologies to understand how visitors use the site. This may include tools such as Google Analytics.',
      'You can opt out of Google Analytics tracking by installing the Google Analytics Opt-out Browser Add-on available at tools.google.com/dlpage/gaoptout. You can also disable cookies in your browser settings, though some site functionality may be affected.',
    ],
  },
  {
    title: "Children's Privacy",
    content: [
      'We do not knowingly collect personal information from children under 13 without verifiable parental consent. For members under 13, a parent or legal guardian must complete enrollment and sign all required documents on their behalf.',
      'Members between 13 and 17 years of age must have a parent or legal guardian co-sign the membership agreement and liability waiver.',
    ],
  },
  {
    title: 'Changes to This Policy',
    content: [
      'We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. When we do, we will revise the effective date at the top of the page. We encourage you to review this policy periodically.',
    ],
  },
  {
    title: 'Contact Us',
    content: [
      'If you have questions or concerns about this Privacy Policy, please contact us:',
    ],
    list: [
      'Email: info@apexmma.com',
      'Phone: (951) 555-0147',
      'Address: 47 Industrial Avenue, Unit 4, Riverside, CA 92501',
    ],
  },
];

export default function PrivacyPage() {
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
            Privacy Policy
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
