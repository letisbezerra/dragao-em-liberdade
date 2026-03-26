const WaveSVG = ({ className = "", flip = false }: { className?: string; flip?: boolean }) => (
  <svg
    className={className}
    viewBox="0 0 1440 120"
    preserveAspectRatio="none"
    aria-hidden="true"
    style={flip ? { transform: "rotate(180deg)" } : undefined}
  >
    <path
      d="M0,40 C240,100 480,0 720,50 C960,100 1200,10 1440,60 L1440,120 L0,120 Z"
      fill="currentColor"
      className="animate-wave-slow"
    />
    <path
      d="M0,60 C200,20 400,90 720,40 C1040,0 1240,80 1440,40 L1440,120 L0,120 Z"
      fill="currentColor"
      opacity="0.5"
      className="animate-wave-medium"
    />
  </svg>
);

export default WaveSVG;
