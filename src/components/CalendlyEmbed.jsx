import React, { useEffect, useRef, useState } from 'react';

const SCRIPT_SRC = 'https://assets.calendly.com/assets/external/widget.js';

/**
 * Calendly inline widget.
 *
 * The colour params theme the iframe to match the dark site. Note that
 * background_color / text_color are only honoured on Calendly's paid plans, * on the free plan the widget renders in its default light theme and those
 * params are ignored (primary_color still applies).
 */
const PARAMS = new URLSearchParams({
  hide_gdpr_banner: '1',
  primary_color: '3ECF8E', // mint
});

export default function CalendlyEmbed({ url }) {
  const container = useRef(null);
  const [failed, setFailed] = useState(false);
  const fullUrl = `${url}?${PARAMS.toString()}`;

  useEffect(() => {
    const node = container.current;
    if (!node) return;

    const init = () => {
      if (!window.Calendly || !node) return;
      node.innerHTML = '';
      window.Calendly.initInlineWidget({ url: fullUrl, parentElement: node });
    };

    if (window.Calendly) {
      init();
      return;
    }

    let script = document.querySelector(`script[src="${SCRIPT_SRC}"]`);
    if (!script) {
      script = document.createElement('script');
      script.src = SCRIPT_SRC;
      script.async = true;
      document.body.appendChild(script);
    }

    script.addEventListener('load', init);
    script.addEventListener('error', () => setFailed(true));

    return () => {
      script.removeEventListener('load', init);
    };
  }, [fullUrl]);

  // If the widget script is blocked (ad blockers do this), still give people a
  // working way to book rather than an empty box.
  if (failed) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className="btn-mint">
        Book a call
      </a>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg border border-line bg-white">
      {/* Tall enough that the month grid and time slots fit without the widget
          scrolling inside its own iframe. */}
      <div ref={container} className="h-[1150px] min-w-[320px] sm:h-[1000px]" />
      <noscript>
        <div className="p-8 text-center">
          <a href={url} className="text-mint underline">
            Book a call with Jake
          </a>
        </div>
      </noscript>
    </div>
  );
}
