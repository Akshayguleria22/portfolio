"use client";

export default function GeometricAnimation() {
  return (
    <div className="bg-animation-container">
      <svg className="bg-svg" viewBox="0 0 602 602" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.15">
          <path
            id="orbit1"
            d="M201 87C193 79 181 79 173 87L87 173C79 181 79 193 87 201L401 515C409 523 421 523 429 515L515 429C523 421 523 409 515 401L201 87Z"
            stroke="url(#grad1)"
            strokeWidth="2"
          />
        </g>

        <ellipse rx="5" ry="5" fill="#13ADC7">
          <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#orbit1" />
          </animateMotion>
        </ellipse>

        <defs>
          <radialGradient id="grad1" cx="0" cy="0" r="1">
            <stop offset="0.3" stopColor="#FBFBFB" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      <style jsx>{`
        .bg-animation-container {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
          opacity: 0.25;
          pointer-events: none;
        }
        .bg-svg {
          width: 150vmax;
          height: 150vmax;
          position: absolute;
          top: -20%;
          left: -20%;
          animation: rotate 60s linear infinite;
        }
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
