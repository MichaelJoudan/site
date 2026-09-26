Backdrop images go here.

WHAT TO PUT IN
  One or more photographs, listed in window.BACKDROP.images in
  assets/js/data.js. Two or more cross-fade slowly; one drifts on its own.

  window.BACKDROP = {
    images: ["assets/img/skyline-wide.jpg", "assets/img/skyline-close.jpg"],
    opacity: 1,
    cycle: 14,
    blur: 0
  };

THE PHOTOGRAPH IS THE BACKGROUND
  There is no white wash over it. Legibility is carried entirely by the
  panels: every run of text on the site sits on a frosted surface, and
  those surfaces become markedly more opaque whenever an image is present
  (see "Materials over a photograph" in site.css).

  Contrast was measured on 27 text elements across all four sections with
  this image in place. Worst case, faintest ink, darkest pixel behind it:
  4.66:1 — above the 4.5:1 WCAG AA threshold. If you swap the photograph,
  re-measure: a brighter image is the case that fails.

CURRENTLY IN USE
  skyline-wide.jpg   Lower Manhattan at dusk, full frame
  skyline-close.jpg  the same photograph, cropped to the canyon

  Both are derived from one source image. Shadows are lifted (gamma 0.62)
  and saturation reduced to 72% in the files themselves, which both suits
  the frost-white palette and compresses far better than the original: the
  4 MB source became 330 KB and 360 KB without any visible loss at 26%
  opacity behind a 2px blur.

  To regenerate from a new source, the recipe is in the session notes:
  resize to 2000px wide, apply the gamma lift, desaturate, save as
  progressive JPEG at quality 58.

SPECIFICATION
  Format      JPEG. Not PNG — a photograph as PNG is several times larger
              for no visible gain at this opacity.
  Dimensions  2400 x 1600 or thereabouts. The layer is scaled to cover, and
              anything larger is wasted bandwidth.
  File size   Under 400 KB each after compression. The image sits at ~18%
              opacity behind a blur, so quality past that point is invisible.
              squoosh.app will get you there without installing anything.
  Subject     Shot looking down or up a street works best: the vertical
              rhythm of the facades reads through the scrim, where a wide
              skyline just becomes a grey band.
  Tone        Overcast or early morning. High-contrast blue sky and hard
              shadows fight the frost-white palette and force the opacity
              down so far that the image stops registering at all.

LICENSING — worth two minutes of your time
  The site carries your name and a custom domain. Use an image you are
  clearly entitled to publish:
    - your own photograph;
    - Unsplash or Pexels, both of which permit commercial use with no
      attribution required;
    - a stock licence you have actually bought.
  Do not use an image found through an image search. Architectural
  photography is actively policed, and the demand letters are real.

IF YOU CHANGE YOUR MIND
  Set images back to [] and the site returns to the plain colour wash.
  Nothing else needs touching.
