# Alyssia Gaston — Portfolio

A single-page portfolio site (no build step needed) inspired by the layout and
feel of gazijarin.com, filled in with your real content pulled from your
current site (alyssia-gaston.netlify.app).

## Files
- `index.html` — all page content/sections
- `style.css` — all styling
- `script.js` — routing, particle art, carousel, experience tabs, Game Mode + mini game

## How to deploy on Netlify
1. Go to https://app.netlify.com/drop
2. Drag this whole folder onto the page — that's it, no build command needed.
   (Or connect a GitHub repo with these 3 files at the root and deploy from there.)

## To customize
- Swap the "AG" avatar placeholder in the About section for your real photo:
  in `index.html` find `.avatar-placeholder` and replace it with an `<img>` tag,
  then add matching CSS.
- Edit the `experiences`, `projects`, and `hardware` arrays at the top of
  `script.js` to update any content — everything renders from there.
- Game Mode toggle is top-left; it reskins the site (neon green/pink, scanlines)
  and reveals a floating 🎮 button that opens a little "dodge the bugs" canvas game.
