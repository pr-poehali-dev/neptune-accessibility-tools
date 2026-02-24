export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 180 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Crosshair / Target icon */}
      <circle cx="20" cy="20" r="14" stroke="white" strokeWidth="2" />
      <circle cx="20" cy="20" r="5" fill="white" />
      <line x1="20" y1="4" x2="20" y2="10" stroke="white" strokeWidth="2" />
      <line x1="20" y1="30" x2="20" y2="36" stroke="white" strokeWidth="2" />
      <line x1="4" y1="20" x2="10" y2="20" stroke="white" strokeWidth="2" />
      <line x1="30" y1="20" x2="36" y2="20" stroke="white" strokeWidth="2" />

      {/* KILL text */}
      <text x="46" y="28" fill="white" fontFamily="monospace" fontSize="18" fontWeight="700" letterSpacing="2">KILL</text>

      {/* NET text */}
      <text x="102" y="28" fill="white" fontFamily="monospace" fontSize="18" fontWeight="300" letterSpacing="2" opacity="0.6">NET</text>
    </svg>
  );
};
