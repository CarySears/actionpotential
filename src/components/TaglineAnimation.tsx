"use client";

export default function TaglineAnimation({
  className = "",
  idPrefix = "hero",
}: {
  className?: string;
  idPrefix?: string;
}) {
  const pathD =
    "M2 18 H64 C76 18 82 10 90 5 C98 1 104 1 108 18 C112 29 122 30 132 18 H166 C176 18 184 22 194 21 H218";
  const gradId = `${idPrefix}ZGradient`;
  const dotGradId = `${idPrefix}ZDotGradient`;

  return (
    <span className={`hero-tagline ${className}`}>
      <span className="tagline-static">From potential...</span>
      <svg
        className="hero-tagline-apulse"
        viewBox="0 0 220 28"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#79C5C7" />
            <stop offset="0.28" stopColor="#2EA6D4" />
            <stop offset="0.56" stopColor="#00A79D" />
            <stop offset="0.8" stopColor="#FF8B66" />
            <stop offset="1" stopColor="#D93AA4" />
          </linearGradient>
          <radialGradient id={dotGradId} cx="50%" cy="50%" r="60%">
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.42" stopColor="#FF8B66" />
            <stop offset="0.75" stopColor="#D93AA4" />
            <stop offset="1" stopColor="#1B75BB" />
          </radialGradient>
        </defs>
        <path className="hero-tagline-ap-glow" d={pathD} />
        <path
          className="hero-tagline-ap-track"
          d={pathD}
          stroke={`url(#${gradId})`}
        />
        <circle className="hero-tagline-ap-dot" r="2.8" fill={`url(#${dotGradId})`}>
          <animateMotion dur="2.9s" repeatCount="indefinite" path={pathD} />
        </circle>
      </svg>
      <span className="tagline-animated">to action.</span>
    </span>
  );
}
