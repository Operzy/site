import { useLayoutEffect } from 'react';

/**
 * Lightweight per-route SEO for a client-rendered SPA. Sets the document title,
 * meta description, canonical URL, Open Graph tags and optional JSON-LD, then
 * restores the site defaults on unmount so state never leaks between routes.
 *
 * Note: this is the pragmatic ceiling for a Vite SPA. For competitive ranking
 * you eventually want pre-rendering / SSR so crawlers get finished HTML, see
 * the note in the README / hand-off. Until then, this gives each page a real,
 * unique title + description + structured data, which is the bulk of the win.
 */

export const SITE_URL = 'https://operzy.com';

const DEFAULTS = {
  title: 'Operzy: AI & Automation Systems',
  description:
    "Operzy builds AI and automation systems that take over the processes your team is drowning in, the reading, sorting, chasing and double-checking. Connected to the tools you already use.",
  ogDescription:
    "We build AI and automation systems that take the busywork off your team's plate.",
};

function upsertMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
  return el;
}

export function useSeo({ title, description, path, jsonLd } = {}) {
  const jsonLdKey = jsonLd ? JSON.stringify(jsonLd) : '';

  useLayoutEffect(() => {
    const pageTitle = title || DEFAULTS.title;
    const pageDesc = description || DEFAULTS.description;
    const canonical = SITE_URL + (path || window.location.pathname);

    document.title = pageTitle;
    upsertMeta('name', 'description', pageDesc);
    upsertMeta('property', 'og:title', pageTitle);
    upsertMeta('property', 'og:description', pageDesc);
    upsertMeta('property', 'og:url', canonical);
    const canonicalEl = upsertLink('canonical', canonical);

    let ldScript;
    if (jsonLd) {
      ldScript = document.createElement('script');
      ldScript.type = 'application/ld+json';
      ldScript.text = JSON.stringify(jsonLd);
      document.head.appendChild(ldScript);
    }

    return () => {
      document.title = DEFAULTS.title;
      upsertMeta('name', 'description', DEFAULTS.description);
      upsertMeta('property', 'og:title', DEFAULTS.title);
      upsertMeta('property', 'og:description', DEFAULTS.ogDescription);
      if (canonicalEl) canonicalEl.remove();
      if (ldScript) ldScript.remove();
    };
  }, [title, description, path, jsonLdKey]);
}
