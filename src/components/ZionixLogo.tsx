export default function ZionixLogo({ className, size = 40 }: { className?: string; size?: number }) {
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
        <linearGradient id="z1" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#00A3FF" />
          <stop offset="1" stopColor="#6B2C91" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="30" fill="url(#z1)" />
      <path d="M20 36c4-8 20-14 28-8" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="18" y="18" width="6" height="6" rx="2" fill="#fff" />
    </svg>
  );
}
