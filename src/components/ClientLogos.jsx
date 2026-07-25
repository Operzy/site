import React from 'react';
import { useReveal } from '../lib/reveal';

// ─────────────────────────────────────────────────────────────────────────────
// CLIENT LOGOS
//
// Files in `src/assets/logos/` are picked up automatically, drop one in and it
// appears, no code change needed. Vite bundles and hashes them at build time.
//
// Every logo is forced to a single white tone (`brightness-0 invert`), so the
// source file's own colours never matter: colour, black and already-white logos
// all render identically white. Transparent backgrounds are required, a file
// with a solid white rectangle behind it would render as a white block.
//
// The filename is only a fallback for the display name. Add an entry to NAMES
// below to set the real company name (used as alt text, so it matters for
// accessibility and SEO).
// ─────────────────────────────────────────────────────────────────────────────
const NAMES = {
  'D5_Health_Logo_Transparent-e1754595747676.webp': 'D5 Health',
  'Logo.webp': 'Adolphe Law Group',
  'logo.png': '10 Podcasts',
  'new_logo.png': 'My Credit Approve',
  'truevine-logo-Linear.webp': 'True Vine Publishing Co.',
  'Luxe_Logo_white-1.png': 'Luxe',
  'eupraxis_white_logo__1_-1.png': 'Eupraxis',
};

// Per-file rendering overrides.
//
// Adolphe's mark is a SOLID filled square. Forcing the file white turns that
// square into a white block, so we crop it off and show the wordmark only.
// Replacing the file with a linear/outline variant would remove the need for
// this, see the note in the logos README.
// Widths are the natural scaled width (506×132 → 107px at h-7, 123px at h-8)
// minus the leading ~28% the square mark occupies.
const OVERRIDES = {
  'Logo.webp': 'w-[76px] sm:w-[88px] object-cover object-right',
};

// Display order. Anything not listed here is appended alphabetically.
const ORDER = [
  'D5_Health_Logo_Transparent-e1754595747676.webp',
  'new_logo.png',
  'Logo.webp',
  'logo.png',
  'eupraxis_white_logo__1_-1.png',
  'truevine-logo-Linear.webp',
  'Luxe_Logo_white-1.png',
];

const files = import.meta.glob('../assets/logos/*.{png,jpg,jpeg,svg,webp,avif}', {
  eager: true,
  query: '?url',
  import: 'default',
});

/** "acme-corp.svg" → "Acme Corp", only used when NAMES has no entry. */
function nameFromFile(file) {
  return file
    .replace(/\.[^.]+$/, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

const LOGOS = Object.entries(files)
  .map(([path, src]) => {
    const file = path.split('/').pop();
    return { file, src, name: NAMES[file] || nameFromFile(file) };
  })
  .sort((a, b) => {
    const ai = ORDER.indexOf(a.file);
    const bi = ORDER.indexOf(b.file);
    if (ai !== -1 && bi !== -1) return ai - bi;
    if (ai !== -1) return -1;
    if (bi !== -1) return 1;
    return a.file.localeCompare(b.file);
  });

const PLACEHOLDERS = ['Client One', 'Client Two', 'Client Three', 'Client Four', 'Client Five'];

export default function ClientLogos() {
  const scope = useReveal({ y: 10, stagger: 0.05 });

  return (
    <div ref={scope} className="shell relative pb-24 lg:pb-28">
      <p data-reveal className="kicker mb-11 text-center">
        Trusted by teams from startups to established operators
      </p>

      <div className="flex flex-wrap items-center justify-center gap-x-9 gap-y-9 sm:gap-x-10 lg:gap-x-12">
        {LOGOS.length > 0
          ? LOGOS.map(({ name, src, file }) => (
              <img
                key={src}
                data-reveal
                src={src}
                alt={name}
                title={name}
                loading="lazy"
                /* Uniform optical box: every logo fits inside it, whatever its
                   aspect ratio. brightness-0 + invert flattens any source
                   colour to pure white. */
                className={`h-7 max-h-7 opacity-60 brightness-0 invert transition-opacity duration-300 hover:opacity-100 sm:h-8 sm:max-h-8 ${
                  OVERRIDES[file] || 'w-auto max-w-[112px] object-contain sm:max-w-[132px]'
                }`}
              />
            ))
          : PLACEHOLDERS.map((name) => (
              <span
                key={name}
                data-reveal
                className="font-display text-[19px] font-semibold tracking-[-0.01em] text-text/30 sm:text-[21px]"
              >
                {name}
              </span>
            ))}
      </div>
    </div>
  );
}
