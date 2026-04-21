/**
 * Stylized SVG of a Flock-style ALPR camera mounted on a pole
 * with solar panel — modeled on the reference photos. This is
 * art, not photorealism, and reads at any size.
 */
export default function CameraSVG({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 500"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Illustration of a Flock-style license plate reader camera"
    >
      <defs>
        <linearGradient id="pole" x1="0" x2="1">
          <stop offset="0" stopColor="#3a3f3a" />
          <stop offset="0.5" stopColor="#5a6258" />
          <stop offset="1" stopColor="#2a2f2a" />
        </linearGradient>
        <linearGradient id="panel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1a2540" />
          <stop offset="0.5" stopColor="#2a3855" />
          <stop offset="1" stopColor="#0d1426" />
        </linearGradient>
        <linearGradient id="cam" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2a2a2e" />
          <stop offset="1" stopColor="#0a0a0c" />
        </linearGradient>
        <radialGradient id="lens" cx="0.4" cy="0.4">
          <stop offset="0" stopColor="#ff2b1c" />
          <stop offset="0.3" stopColor="#5a0a08" />
          <stop offset="1" stopColor="#000" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>

      {/* Pole */}
      <rect x="180" y="0" width="40" height="500" fill="url(#pole)" />
      <rect x="180" y="0" width="3" height="500" fill="rgba(255,255,255,0.15)" />
      <rect x="217" y="0" width="3" height="500" fill="rgba(0,0,0,0.4)" />

      {/* Solar panel mount arm */}
      <rect x="220" y="180" width="20" height="6" fill="#1a1a1c" />

      {/* Solar panel */}
      <g transform="translate(240,120) rotate(8)">
        <rect width="140" height="100" fill="url(#panel)" stroke="#0a0a0c" strokeWidth="2" />
        {/* Solar cells grid */}
        {Array.from({ length: 6 }).map((_, r) =>
          Array.from({ length: 8 }).map((_, c) => (
            <rect
              key={`${r}-${c}`}
              x={2 + c * 17}
              y={2 + r * 16}
              width="15"
              height="14"
              fill="none"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="0.5"
            />
          ))
        )}
        {/* Glare */}
        <rect width="140" height="100" fill="url(#cam)" opacity="0.0" />
        <polygon points="0,0 60,0 0,60" fill="rgba(255,255,255,0.06)" />
      </g>

      {/* Camera body */}
      <g transform="translate(140,210)">
        <rect
          x="0"
          y="0"
          width="60"
          height="120"
          rx="8"
          fill="url(#cam)"
          stroke="#1a1a1c"
          strokeWidth="1"
        />
        {/* Top vent */}
        <rect x="6" y="6" width="48" height="2" fill="rgba(255,255,255,0.05)" />
        <rect x="6" y="10" width="48" height="1" fill="rgba(255,255,255,0.04)" />

        {/* Main lens cluster */}
        <circle cx="30" cy="36" r="14" fill="#0a0a0c" />
        <circle cx="30" cy="36" r="11" fill="url(#lens)" />
        <circle cx="26" cy="32" r="2.5" fill="rgba(255,255,255,0.4)" />

        {/* IR LEDs around lens */}
        {[0, 60, 120, 180, 240, 300].map((deg) => {
          const rad = (deg * Math.PI) / 180;
          const cx = 30 + Math.cos(rad) * 9.5;
          const cy = 36 + Math.sin(rad) * 9.5;
          return <circle key={deg} cx={cx} cy={cy} r="1.4" fill="#222" />;
        })}

        {/* Secondary lens */}
        <circle cx="30" cy="92" r="8" fill="#0a0a0c" />
        <circle cx="30" cy="92" r="6" fill="#1a1a1e" />
        <circle cx="28" cy="90" r="1.5" fill="rgba(255,255,255,0.2)" />

        {/* Status LED */}
        <circle cx="48" cy="14" r="1.5" fill="#ff2b1c" filter="url(#glow)" />
      </g>

      {/* Mounting bracket to pole */}
      <rect x="195" y="220" width="10" height="40" fill="#1a1a1c" />
      <rect x="170" y="240" width="40" height="8" rx="2" fill="#0a0a0c" />

      {/* Cable */}
      <path
        d="M 200 330 Q 195 350 200 380 Q 205 410 200 440"
        fill="none"
        stroke="#1a1a1c"
        strokeWidth="2"
      />

      {/* Reticle overlay scope effect */}
      <g
        transform="translate(200,260)"
        stroke="#ff2b1c"
        strokeWidth="0.6"
        fill="none"
        opacity="0.3"
      >
        <circle r="80" />
        <line x1="-80" y1="0" x2="-60" y2="0" />
        <line x1="60" y1="0" x2="80" y2="0" />
        <line x1="0" y1="-80" x2="0" y2="-60" />
        <line x1="0" y1="60" x2="0" y2="80" />
      </g>
    </svg>
  );
}
