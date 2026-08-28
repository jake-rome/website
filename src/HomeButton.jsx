import { useNavigate } from 'react-router-dom';
import { useId } from 'react';
import './HomeButton.css';

// Drop <HomeButton /> anywhere inside a positioned container (like your
// SidePanel) and it will place itself in the top-left corner.
// Pass a different destination with <HomeButton to="/somewhere" /> if needed.
function HomeButton({ to = '/' }) {
  const navigate = useNavigate();
  const maskId = useId(); // keeps the mask unique if this appears more than once

  return (
    <button
      type="button"
      className="HomeButton"
      onClick={() => navigate(to)}
      aria-label="Go to home page"
    >
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <mask id={maskId}>
          {/* rounded square = visible area */}
          <rect x="0" y="0" width="24" height="24" rx="6" fill="white" />
          {/* house = punched-out negative space */}
          <path
            d="M12 5.3L5.5 10.7V18a1 1 0 0 0 1 1h3.1v-4.6h4.8V19h3.1a1 1 0 0 0 1-1v-7.3L12 5.3z"
            fill="black"
          />
        </mask>
        <rect
          x="0"
          y="0"
          width="24"
          height="24"
          rx="6"
          fill="currentColor"
          mask={`url(#${maskId})`}
        />
      </svg>
    </button>
  );
}

export default HomeButton;