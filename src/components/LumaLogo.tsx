export default function LumaLogo({ className, size = 40 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#6B2C91" />
          <stop offset="1" stopColor="#8B3CB1" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill="url(#g1)" />
      <path d="M20 38c4-6 12-12 24-8" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="26" cy="24" r="4" fill="#fff" />
      <circle cx="40" cy="30" r="5" fill="#fff" opacity="0.9" />
    </svg>
  );
}
