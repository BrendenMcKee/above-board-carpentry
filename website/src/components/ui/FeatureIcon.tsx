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
        <linearGradient id="fi-craft-steel" x1="10" y1="10" x2="38" y2="22">
          <stop offset="0%" stopColor="#f2f4f6" />
          <stop offset="100%" stopColor="#8f989d" />
        </linearGradient>
        <linearGradient id="fi-craft-handle" x1="20" y1="22" x2="34" y2="42">
          <stop offset="0%" stopColor="#e8a55c" />
          <stop offset="100%" stopColor="#b87333" />
        </linearGradient>
        <linearGradient id="fi-craft-plank" x1="8" y1="34" x2="40" y2="42">
          <stop offset="0%" stopColor="#d4a85a" />
          <stop offset="100%" stopColor="#7a5520" />
        </linearGradient>
      </defs>
      <rect x="8" y="35" width="32" height="6.5" rx="1" fill="url(#fi-craft-plank)" />
      <path
        d="M12 37.2h24"
        stroke="#5c3d1e"
        strokeWidth="0.45"
        strokeLinecap="round"
        opacity="0.3"
      />
      <path
        d="M10 12.5h24a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-5.5a2 2 0 0 1 2-2Z"
        fill="url(#fi-craft-steel)"
      />
      <path
        d="M8 16.5 5.5 20.5 8.5 21.5 11 17.5 8 16.5Z"
        fill="#6f787d"
      />
      <path
        d="M34 16.5 36.5 20.5 33.5 21.5 31 17.5 34 16.5Z"
        fill="#6f787d"
      />
      <path
        d="M21.5 21.5c0-1.2 1-2.2 2.2-2.2h1.6c1.2 0 2.2 1 2.2 2.2v16.8c0 1.2-1 2.2-2.2 2.2h-1.6c-1.2 0-2.2-1-2.2-2.2V21.5Z"
        fill="url(#fi-craft-handle)"
      />
      <ellipse cx="24" cy="22.5" rx="3.2" ry="1.2" fill="#8b5a24" opacity="0.35" />
    </>
  ),
  local: (
    <>
      <defs>
        <linearGradient id="fi-local-atmosphere" x1="24" y1="6" x2="24" y2="38">
          <stop offset="0%" stopColor="#9ebdd0" />
          <stop offset="45%" stopColor="#b8cdd8" />
          <stop offset="72%" stopColor="#8fafbc" />
          <stop offset="100%" stopColor="#6b8f62" />
        </linearGradient>
        <linearGradient id="fi-local-mtn-far" x1="14" y1="14" x2="14" y2="37">
          <stop offset="0%" stopColor="#7a9aab" />
          <stop offset="35%" stopColor="#5a7d8f" />
          <stop offset="100%" stopColor="#4a6b7c" />
        </linearGradient>
        <linearGradient id="fi-local-mtn-near" x1="30" y1="18" x2="30" y2="37">
          <stop offset="0%" stopColor="#5a7d8f" />
          <stop offset="40%" stopColor="#3d5a68" />
          <stop offset="100%" stopColor="#2c4a3e" />
        </linearGradient>
      </defs>
      <rect x="4" y="6" width="40" height="36" rx="3" fill="url(#fi-local-atmosphere)" />
      <circle cx="37" cy="11" r="3.2" fill="#f0c06a" />
      <circle cx="37" cy="11" r="2.2" fill="#f7d98a" opacity="0.5" />
      <path d="M4 37 15 21 25 29 35 18 44 37H4Z" fill="url(#fi-local-mtn-far)" opacity="0.92" />
      <path d="M11 37 22 24 31 32 40 21 44 37H11Z" fill="url(#fi-local-mtn-near)" />
      <path
        d="M15 21 16.5 18.5 18 21M33 18 34.5 15.5 36 18M39 22 40.5 19.5 42 22"
        fill="#eef4f8"
        opacity="0.95"
      />
      <path
        d="M4 20 Q14 17 24 19 Q34 16 44 20 L44 24 Q34 21 24 23 Q14 20 4 23 Z"
        fill="#dce8f0"
        opacity="0.35"
      />
      <path d="M8 37V28l3.4-5.5 3.4 5.5v9H8Z" fill="#2c4a3e" />
      <path
        d="M9.5 31.5c1.4-1 2.8-1 4.2 0M9.5 34.2c1.4-1 2.8-1 4.2 0M9.5 36.8c1.4-1 2.8-1 4.2 0"
        fill="none"
        stroke="#7a8b6f"
        strokeWidth="0.75"
        strokeLinecap="round"
      />
      <path d="M34 37V28.5l3.2-5.2 3.2 5.2V37H34Z" fill="#1e3329" />
      <path
        d="M35.2 32c1.1-.8 2.2-.8 3.3 0M35.2 34.5c1.1-.8 2.2-.8 3.3 0M35.2 37c1.1-.8 2.2-.8 3.3 0"
        fill="none"
        stroke="#4a6b5c"
        strokeWidth="0.7"
        strokeLinecap="round"
      />
      <path
        d="M24 12.5c-3.8 0-6.9 3.1-6.9 6.9 0 5.2 6.9 13.1 6.9 13.1s6.9-7.9 6.9-13.1c0-3.8-3.1-6.9-6.9-6.9Z"
        fill="#b87333"
      />
      <circle cx="24" cy="19.4" r="3" fill="#f7f5f0" />
      <circle cx="24" cy="19.4" r="1.15" fill="#b87333" />
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
