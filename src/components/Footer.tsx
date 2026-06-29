'use client';

import Link from 'next/link';
import ApexLogo from './ApexLogo';

const trainLinks = [
  { label: 'Brazilian Jiu-Jitsu', href: '#schedule' },
  { label: 'Muay Thai', href: '#schedule' },
  { label: 'Wrestling', href: '#schedule' },
  { label: 'MMA Striking', href: '#schedule' },
];

const navLinks = [
  { label: 'Schedule', href: '#schedule' },
  { label: 'Coaches', href: '#coaches' },
  { label: 'Beginners Guide', href: '#beginners' },
  { label: 'Membership', href: '#membership' },
  { label: 'FAQ', href: '#faq' },
];

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#18181B] pt-16 pb-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {/* Brand */}
          <div>
            <ApexLogo size={38} />
            <p className="font-mono text-xs text-[#A1A1AA] mt-3 leading-relaxed">
              Professional martial arts.<br />Riverside, CA.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-[#A1A1AA] hover:text-accent transition-colors duration-200">
                <InstagramIcon />
              </a>
              <a href="#" aria-label="YouTube" className="text-[#A1A1AA] hover:text-accent transition-colors duration-200">
                <YoutubeIcon />
              </a>
              <a href="#" aria-label="Facebook" className="text-[#A1A1AA] hover:text-accent transition-colors duration-200">
                <FacebookIcon />
              </a>
            </div>
          </div>

          {/* Train */}
          <div>
            <p className="font-mono text-xs text-[#A1A1AA] uppercase tracking-widest mb-4 border-l-2 border-accent pl-3">Train</p>
            <ul className="space-y-1">
              {trainLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-mono text-sm text-[#A1A1AA] hover:text-white transition-colors duration-200 block py-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigate */}
          <div>
            <p className="font-mono text-xs text-[#A1A1AA] uppercase tracking-widest mb-4 border-l-2 border-accent pl-3">Navigate</p>
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-mono text-sm text-[#A1A1AA] hover:text-white transition-colors duration-200 block py-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-xs text-[#A1A1AA] uppercase tracking-widest mb-4 border-l-2 border-accent pl-3">Contact</p>
            <p className="font-mono text-sm text-[#A1A1AA] py-1">+1 (951) 555-0147</p>
            <p className="font-mono text-sm text-[#A1A1AA] py-1">info@apexmma.com</p>
            <a
              href="#schedule"
              className="font-mono text-sm text-[#EF4444] hover:underline block py-1 mt-2"
            >
              Book a trial
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#27272A] pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-center md:text-left">
            {/* Left: copyright */}
            <p className="font-mono text-xs text-muted">
              &copy; 2026 Apex MMA. All rights reserved.
            </p>

            {/* Center: designer credit */}
            <p className="font-mono text-xs text-[#52525B]">
              Designed by{' '}
              <a
                href="https://alectronicsolutions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-white transition-colors duration-200"
              >
                Alectronic Solutions
              </a>
            </p>

            {/* Right: policy links + back to top */}
            <div className="flex items-center justify-center md:justify-end gap-6">
              <Link href="/privacy" className="font-mono text-xs text-muted hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="font-mono text-xs text-muted hover:text-white transition-colors duration-200">
                Terms of Use
              </Link>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="font-mono text-xs text-muted hover:text-white transition-colors duration-200 cursor-pointer ml-2"
                aria-label="Back to top"
              >
                ↑ Back to Top
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
