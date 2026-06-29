import TrialTrigger from './TrialTrigger';
import MobileNavToggle from './MobileNavToggle';
import ApexLogo from './ApexLogo';

const navLinks = [
  { label: 'Schedule', href: '#schedule' },
  { label: 'Coaches', href: '#coaches' },
  { label: 'Beginners', href: '#beginners' },
  { label: 'Membership', href: '#membership' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navigation() {
  return (
    <header className="sticky top-0 z-50 h-14 bg-[#09090B]/90 backdrop-blur-sm">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24 h-full flex items-center justify-between">
        <a href="#" aria-label="Apex MMA — home">
          <ApexLogo size={32} />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs text-[#A1A1AA] hover:text-white uppercase tracking-widest transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <TrialTrigger variant="nav" label="CLAIM FREE TRIAL" />
        </div>

        <MobileNavToggle />
      </div>
    </header>
  );
}
