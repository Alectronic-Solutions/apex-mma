import type { GymLocation } from '@/data/gym';

interface LocationHoursProps {
  location: GymLocation;
}

export default function LocationHours({ location }: LocationHoursProps) {
  const mapsUrl = `https://maps.google.com?q=${encodeURIComponent(
    `${location.street}, ${location.city}, ${location.state} ${location.postalCode}`
  )}`;

  return (
    <div className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-screen-2xl mx-auto">
        <p className="font-mono text-xs text-[#A1A1AA] uppercase tracking-widest mb-2">Find Us</p>
        <h2 className="font-display font-black uppercase text-white mb-12"
          style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}
        >
          Location &amp; Hours
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#27272A]">
          <div className="bg-[#18181B] p-8">
            <p className="font-mono text-sm text-[#FAFAFA] leading-relaxed">
              {location.street}<br />
              {location.city}, {location.state} {location.postalCode}
            </p>

            <div className="border-t border-[#27272A] my-6" />

            <p className="font-mono text-sm text-[#A1A1AA]">
              T: {location.phone}
            </p>
            <p className="font-mono text-sm text-[#A1A1AA] mt-1">
              E: {location.email}
            </p>

            <div className="border-t border-[#27272A] my-6" />

            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-[#EF4444] hover:underline uppercase tracking-widest"
            >
              Get Directions →
            </a>
          </div>

          <div className="bg-[#18181B] p-8">
            <p className="font-mono text-xs text-[#A1A1AA] uppercase tracking-widest mb-4">
              Opening Hours
            </p>
            {location.hours.map((row) => (
              <div key={row.days} className="flex justify-between items-center border-b border-[#27272A] py-3 last:border-0">
                <span className="font-mono text-xs text-[#A1A1AA] uppercase">
                  {row.days}
                </span>
                <span className="font-mono text-sm text-[#FAFAFA]">
                  {row.hours}
                </span>
              </div>
            ))}
            <p className="font-mono text-xs text-[#A1A1AA] mt-6">
              {location.parkingSpaces} dedicated parking spaces on-site.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
