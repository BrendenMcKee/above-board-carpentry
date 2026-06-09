type FeatureIconName = "performance" | "craft" | "local";

interface FeatureIconProps {
  name: FeatureIconName;
  className?: string;
}

const icons: Record<FeatureIconName, React.ReactNode> = {
  performance: (
    <>
      <defs>
        <linearGradient id="fi-perf-house" x1="10" y1="12" x2="30" y2="38">
          <stop offset="0%" stopColor="#3d6354" />
          <stop offset="100%" stopColor="#2c4a3e" />
        </linearGradient>
        <linearGradient id="fi-perf-bolt" x1="30" y1="8" x2="42" y2="30">
          <stop offset="0%" stopColor="#f2c46e" />
          <stop offset="100%" stopColor="#b87333" />
        </linearGradient>
        <linearGradient id="fi-perf-wall" x1="11" y1="22" x2="17" y2="36">
          <stop offset="0%" stopColor="#9ab89a" />
          <stop offset="50%" stopColor="#7a8b6f" />
          <stop offset="100%" stopColor="#5a7358" />
        </linearGradient>
      </defs>
      <path
        d="M20 11 9 21v15h8v-7h6v7h8V21L20 11Z"
        fill="url(#fi-perf-house)"
      />
      <path
        d="M20 11 9 21h22L20 11Z"
        fill="#1e3329"
        opacity="0.25"
      />
      <rect x="17.5" y="24" width="5" height="4.5" rx="0.4" fill="#d8ecf4" />
      <rect x="24.5" y="24" width="5" height="4.5" rx="0.4" fill="#d8ecf4" />
      <rect x="18.5" y="31" width="3" height="5" rx="0.3" fill="#4a3528" />
      <rect x="11" y="22" width="5.5" height="14" rx="0.4" fill="url(#fi-perf-wall)" />
      <path
        d="M12 24h3.5M12 27h3.5M12 30h3.5M12 33h3.5"
        stroke="#e8f0e4"
        strokeWidth="0.55"
        strokeLinecap="round"
        opacity="0.7"
      />
      <circle cx="36" cy="34" r="5.5" fill="#7a8b6f" opacity="0.22" />
      <path
        d="M36 30.5v5.5M33.25 33.25h5.5"
        stroke="#5a7358"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <path
        d="M32 9 27.5 17h2.8l-2.2 11.5 9.5-13h-3l3.4-6.5H32Z"
        fill="url(#fi-perf-bolt)"
        stroke="#8b5a24"
        strokeWidth="0.65"
        strokeLinejoin="round"
      />
    </>
  ),
  craft: (
    <>
      <defs>
        <linearGradient id="fi-craft-beam-h" x1="8" y1="16" x2="40" y2="24">
          <stop offset="0%" stopColor="#d4a85a" />
          <stop offset="50%" stopColor="#a67c2e" />
          <stop offset="100%" stopColor="#7a5520" />
        </linearGradient>
        <linearGradient id="fi-craft-beam-v" x1="12" y1="18" x2="22" y2="40">
          <stop offset="0%" stopColor="#c49a4a" />
          <stop offset="100%" stopColor="#6b4a22" />
        </linearGradient>
        <linearGradient id="fi-craft-blade" x1="30" y1="10" x2="40" y2="22">
          <stop offset="0%" stopColor="#e8ecef" />
          <stop offset="100%" stopColor="#a8b0b6" />
        </linearGradient>
      </defs>
      <rect x="8" y="17" width="30" height="7" rx="1" fill="url(#fi-craft-beam-h)" />
      <rect x="13" y="17" width="8" height="21" rx="1" fill="url(#fi-craft-beam-v)" />
      <path
        d="M10 19.5h26M10 21.5h26"
        stroke="#5c3d1e"
        strokeWidth="0.45"
        strokeLinecap="round"
        opacity="0.35"
      />
      <path
        d="M15 20h4.5M15 24h4.5M15 28h4.5M15 32h4.5"
        stroke="#4a3018"
        strokeWidth="0.5"
        strokeLinecap="round"
        opacity="0.3"
      />
      <circle cx="17" cy="17" r="2.2" fill="#b87333" />
      <circle cx="17" cy="17" r="0.9" fill="#f0c06a" />
      <path
        d="M31 11.5 38.5 19l-1.4 1.6-7.5-7.5 1.4-1.6Z"
        fill="url(#fi-craft-blade)"
        stroke="#7a848a"
        strokeWidth="0.45"
        strokeLinejoin="round"
      />
      <path
        d="M29.5 10l2.8-2.2 2.5 2.5-2.8 2.2-2.5-2.5Z"
        fill="#b87333"
        stroke="#8b5a24"
        strokeWidth="0.35"
        strokeLinejoin="round"
      />
      <path
        d="M34 24.5c2.2 0.8 4.2 2.4 5.5 4.8"
        fill="none"
        stroke="#b87333"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M39 30.5l1.8 1.2-1.8 1.2-1.2-1.8 1.2-1.2Z"
        fill="#8b5a24"
      />
    </>
  ),
  local: (
    <>
      <defs>
        <linearGradient id="fi-local-sky" x1="4" y1="6" x2="44" y2="18">
          <stop offset="0%" stopColor="#9ebdd0" />
          <stop offset="100%" stopColor="#dce8f0" />
        </linearGradient>
        <linearGradient id="fi-local-mtn-far" x1="4" y1="16" x2="28" y2="36">
          <stop offset="0%" stopColor="#6a8fa0" />
          <stop offset="100%" stopColor="#4a6b7c" />
        </linearGradient>
        <linearGradient id="fi-local-mtn-near" x1="16" y1="20" x2="44" y2="38">
          <stop offset="0%" stopColor="#4a6b7c" />
          <stop offset="100%" stopColor="#2c4a3e" />
        </linearGradient>
      </defs>
      <rect x="4" y="6" width="40" height="14" rx="2" fill="url(#fi-local-sky)" />
      <circle cx="37" cy="12" r="3.5" fill="#f0c06a" />
      <circle cx="37" cy="12" r="2.5" fill="#f7d98a" opacity="0.55" />
      <path d="M4 37 14 22 24 30 34 19 44 37H4Z" fill="url(#fi-local-mtn-far)" />
      <path d="M12 37 22 25 31 33 40 23 44 37H12Z" fill="url(#fi-local-mtn-near)" />
      <path
        d="M14 22 15.5 19.5 17 22M31 19 32.5 16.5 34 19M38 23 39.5 20.5 41 23"
        fill="#f4f8fb"
      />
      <rect x="4" y="37" width="40" height="3" rx="0.5" fill="#6b8f62" />
      <path d="M11 37V27l3-5 3 5v10H11Z" fill="#2c4a3e" />
      <path d="M12.5 30l1.5-2.5 1.5 2.5M12.5 33l1.5-2.5 1.5 2.5M12.5 36l1.5-2.5 1.5 2.5" fill="#7a8b6f" />
      <path d="M29 37V28l2.8-4.5 2.8 4.5v9H29Z" fill="#1e3329" />
      <path d="M30.2 31.5l1.3-2 1.3 2M30.2 34l1.3-2 1.3 2M30.2 36.5l1.3-2 1.3 2" fill="#4a6b5c" />
      <path
        d="M22 30c0-3.2 2.6-5.8 5.8-5.8 3.2 0 5.8 2.6 5.8 5.8 0 1.2-.4 2.3-1 3.2l-4.8 6.5-4.8-6.5c-.6-.9-1-2-1-3.2Z"
        fill="#b87333"
      />
      <circle cx="27.8" cy="30" r="2.3" fill="#f7f5f0" />
      <circle cx="27.8" cy="30" r="0.9" fill="#b87333" />
    </>
  ),
};

export function FeatureIcon({ name, className = "h-11 w-11" }: FeatureIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      role="img"
    >
      {icons[name]}
    </svg>
  );
}
