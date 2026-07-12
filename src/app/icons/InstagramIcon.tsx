export function InstagramIcon() {
  return (
    <svg aria-hidden="true" className="h-full w-full" viewBox="0 0 48 48">
      <defs>
        <linearGradient id="instagram-gradient" x1="7" x2="41" y1="41" y2="7" gradientUnits="userSpaceOnUse">
          <stop stopColor="#feda75" />
          <stop offset="0.25" stopColor="#fa7e1e" />
          <stop offset="0.5" stopColor="#d62976" />
          <stop offset="0.75" stopColor="#962fbf" />
          <stop offset="1" stopColor="#4f5bd5" />
        </linearGradient>
      </defs>
      <rect fill="url(#instagram-gradient)" height="48" rx="12" width="48" />
      <rect fill="none" height="22" rx="7" stroke="white" strokeWidth="3" width="22" x="13" y="13" />
      <circle cx="24" cy="24" fill="none" r="5.5" stroke="white" strokeWidth="3" />
      <circle cx="31.5" cy="16.5" fill="white" r="2" />
    </svg>
  );
}
