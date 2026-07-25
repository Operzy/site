# Client logos

Drop logo files in this folder and they appear on the site automatically,
with no code changes needed.

    src/assets/logos/acme-corp.svg   →   renders with alt text "Acme Corp"

The filename becomes the alt text, so name files after the client.
Files are sorted alphabetically; prefix with `01-`, `02-` to control order.

## File requirements

- **SVG preferred**, or PNG/WEBP with a **transparent background**.
- Colour does not matter; every logo is forced to a single white tone so
  mismatched brand colours cannot clash.
- Do **not** use files with a solid white background rectangle; that rectangle
  will render as a white block.
- Roughly even visual weight works best (the row renders each at 32-36px tall).

While this folder has no image files, placeholder wordmarks render instead.
