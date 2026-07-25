import React from 'react';

/**
 * Section header. Centered by default, the airier, less corporate composition.
 * Pass align="left" where a section needs a denser editorial feel.
 */
export default function SectionHead({ kicker, title, lede, accent, align = 'center' }) {
  const centered = align === 'center';

  return (
    <div data-reveal className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {kicker && (
        <div className={`mb-6 flex items-center gap-3 ${centered ? 'justify-center' : ''}`}>
          <span className="h-px w-6 bg-mint/50" />
          <span className="kicker">{kicker}</span>
          {centered && <span className="h-px w-6 bg-mint/50" />}
        </div>
      )}

      <h2 className="font-display text-[clamp(1.95rem,3.9vw,3rem)] font-medium leading-[1.12] tracking-[-0.032em] text-text">
        {title} {accent && <span className="text-gradient-mint">{accent}</span>}
      </h2>

      {lede && (
        <p
          className={`mt-6 text-[16px] leading-[1.75] text-text-muted ${
            centered ? 'mx-auto max-w-2xl' : 'max-w-2xl'
          }`}
        >
          {lede}
        </p>
      )}
    </div>
  );
}
