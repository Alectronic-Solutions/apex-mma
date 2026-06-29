interface ApexLogoProps {
  size?: number;
  showWordmark?: boolean;
}

export default function ApexLogo({ size = 32, showWordmark = true }: ApexLogoProps) {
  const boltWidth = size * 0.6;
  const totalWidth = showWordmark ? size * 4.8 : boltWidth;
  const filterId = 'apex-glow';

  // Lightning bolt path fitted to a viewBox of 24x40
  // Top-right corner → jag left → center right → bottom-left corner
  const boltPath = 'M16 2 L8 20 L14 20 L8 38 L22 16 L15 16 Z';

  return (
    <svg
      width={totalWidth}
      height={size}
      viewBox={`0 0 ${showWordmark ? 200 : 24} 40`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Apex MMA"
    >
      <defs>
        <filter id={filterId} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
          <feComposite in="blur" in2="SourceGraphic" operator="over" />
        </filter>
      </defs>

      {/* Glow layer — blurred duplicate of bolt */}
      <path
        d={boltPath}
        fill="rgba(250,250,250,0.35)"
        filter={`url(#${filterId})`}
      />

      {/* Solid bolt */}
      <path d={boltPath} fill="#FAFAFA" />

      {showWordmark && (
        <text
          x="30"
          y="30"
          fontFamily="'Barlow Condensed', sans-serif"
          fontWeight="900"
          fontSize="26"
          fill="#FAFAFA"
          letterSpacing="-0.5"
          textAnchor="start"
          dominantBaseline="auto"
        >
          APEX MMA
        </text>
      )}
    </svg>
  );
}
