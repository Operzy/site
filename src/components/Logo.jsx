import React from 'react';
import lockup from '../assets/operzy-logo.png';

/**
 * The Operzy logo, mark plus wordmark, trimmed to its content box from the
 * brand source file in src/assets/Operzy Logo/.
 *
 * The wordmark is near-white, so this only reads on a dark surface. The ring on
 * its own lives at src/assets/operzy-mark.png and is inlined into the favicon.
 */
export function Logo({ height = 26, className = '' }) {
  return (
    <img
      src={lockup}
      alt="Operzy"
      height={height}
      style={{ height }}
      className={`w-auto ${className}`}
    />
  );
}

export default Logo;
