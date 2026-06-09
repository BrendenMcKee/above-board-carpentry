type FeatureIconName = "performance" | "craft" | "local";

interface FeatureIconProps {
  name: FeatureIconName;
  className?: string;
}

const icons: Record<FeatureIconName, React.ReactNode> = {
  performance: (
    <>
      <defs>
        <linearGradient id="perf-house" x1="8" y1="10" x2="32" y2="36">
          <stop offset="0%" stopColor="#3d6354" />
          <stop offset="100%" stopColor="#2c4a3e" />
        </linearGradient>
        <linearGradient id="perf-bolt" x1="28" y1="8" x2="40" y2="28">
          <stop offset="0%" stopColor="#f0c06a" />
          <stop offset="100%" stopColor="#b87333" />
        </linearGradient>
      </defs>
      <path
        d="M20 12 8 22v14h10v-8h4v8h10V22L20 12Z"
        fill="url(#perf-house)"
      />
      <rect x="17" y="24" width="6" height="5" rx="0.5" fill="#d4e8f0" opacity="0.9" />
      <rect x="25" y="24" width="6" height="5" rx="0.5" fill="#d4e8f0" opacity="0.9" />
      <path
        d="M12 26h3.5v10H12V26Zm22 0H37.5v10H34V26Z"
        fill="#7a8b6f"
        opacity="0.55"
      />
      <path
        d="M33 10 28 18h3l-2 10 8-12h-3.5l2.5-6H33Z"
        fill="url(#perf-bolt)"
        stroke="#8b5a24"
        strokeWidth="0.6"
        strokeLinejoin="round"
      />
      <circle cx="14" cy="30" r="1.2" fill="#e8a55c" />
      <circle cx="14" cy="33" r="1.2" fill="#e8a55c" />
      <circle cx="14" cy="36" r="1.2" fill="#e8a55c" />
    </>
  ),
  craft: (
    <>
      <defs>
        <linearGradient id="craft-log" x1="10" y1="14" x2="38" y2="34">
          <stop offset="0%" stopColor="#c49a4a" />
          <stop offset="45%" stopColor="#8b6914" />
          <stop offset="100%" stopColor="#5c3d1e" />
        </linearGradient>
        <linearGradient id="craft-blade" x1="8" y1="10" x2="22" y2="24">
          <stop offset="0%" stopColor="#d8dde0" />
          <stop offset="100%" stopColor="#9aa3a8" />
        </linearGradient>
      </defs>
      <ellipse cx="24" cy="24" rx="14" ry="9" fill="url(#craft-log)" />
      <ellipse cx="24" cy="24" rx="7" ry="4.5" fill="#6b4a22" opacity="0.45" />
      <ellipse cx="24" cy="24" rx="3.2" ry="2" fill="#4a3018" opacity="0.35" />
      <path
        d="M10 18c2-1.5 4.5-2 7-1.8M14 28c3-.8 6-.6 9 .4M18 32c2.5.2 5.5-.2 8-1.2"
        fill="none"
        stroke="#5c3d1e"
        strokeWidth="0.7"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M11 12 20 21l-1.5 2.2-9-9 1.5-2.2Z"
        fill="url(#craft-blade)"
        stroke="#6b7378"
        strokeWidth="0.5"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 10.5 12 8l3 3-2.5 2.5-3-3Z"
        fill="#b87333"
        stroke="#8b5a24"
        strokeWidth="0.4"
        strokeLinejoin="round"
      />
      <path
        d="M30 14c2.5 1.2 5 3.8 6.5 7.2"
        fill="none"
        stroke="#b87333"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="37" cy="22.5" r="1.4" fill="#b87333" />
    </>
  ),
  local: (
    <>
      <defs>
        <linearGradient id="local-sky" x1="4" y1="8" x2="44" y2="20">
          <stop offset="0%" stopColor="#8fafc4" />
          <stop offset="100%" stopColor="#d4e4ef" />
        </linearGradient>
        <linearGradient id="local-mtn-back" x1="6" y1="18" x2="30" y2="36">
          <stop offset="0%" stopColor="#5a7d8f" />
          <stop offset="100%" stopColor="#3d5a68" />
        </linearGradient>
        <linearGradient id="local-mtn-front" x1="18" y1="22" x2="42" y2="38">
          <stop offset="0%" stopColor="#4a6b7c" />
          <stop offset="100%" stopColor="#2c4a3e" />
        </linearGradient>
      </defs>
      <rect x="4" y="8" width="40" height="12" rx="2" fill="url(#local-sky)" />
      <circle cx="36" cy="14" r="3.2" fill="#f0c06a" opacity="0.95" />
      <path d="M4 36 16 20 26 30 34 18 44 36H4Z" fill="url(#local-mtn-back)" />
      <path d="M10 36 22 24 32 32 40 22 44 36H10Z" fill="url(#local-mtn-front)" />
      <path
        d="M16 20 18 17 20 20M30 18 32 15 34 18M38 22 40 19 42 22"
        fill="#eef4f8"
        opacity="0.9"
      />
      <path d="M8 36h36v2H8v-2Z" fill="#5c7a52" />
      <path
        d="M12 36v-9c0-1.2 1-2.2 2.2-2.2H14c1.2 0 2.2 1 2.2 2.2V36"
        fill="#2c4a3e"
      />
      <path
        d="M12 30c1.2-.8 2.4-.8 3.6 0M12 33c1.2-.8 2.4-.8 3.6 0M12 36c1.2-.8 2.4-.8 3.6 0"
        fill="none"
        stroke="#7a8b6f"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <path
        d="M30 36v-7c0-1 0.8-1.8 1.8-1.8h0.4c1 0 1.8 0.8 1.8 1.8V36"
        fill="#1e3329"
      />
      <path
        d="M30 31c0.9-.6 1.8-.6 2.7 0M30 33.5c0.9-.6 1.8-.6 2.7 0M30 36c0.9-.6 1.8-.6 2.7 0"
        fill="none"
        stroke="#4a6b5c"
        strokeWidth="0.7"
        strokeLinecap="round"
      />
      <circle cx="22" cy="33" r="2.2" fill="#b87333" opacity="0.9" />
      <circle cx="22" cy="33" r="0.9" fill="#f7f5f0" />
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
