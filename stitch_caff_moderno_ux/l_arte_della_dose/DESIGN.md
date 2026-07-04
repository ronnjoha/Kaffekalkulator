---
name: L'Arte della Dose
colors:
  surface: '#fff8f5'
  surface-dim: '#e8d7cb'
  surface-bright: '#fff8f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff1e8'
  surface-container: '#fcebde'
  surface-container-high: '#f7e5d9'
  surface-container-highest: '#f1dfd3'
  on-surface: '#221a13'
  on-surface-variant: '#4f4540'
  inverse-surface: '#382f26'
  inverse-on-surface: '#ffeee1'
  outline: '#81756f'
  outline-variant: '#d3c3bd'
  surface-tint: '#705a4f'
  primary: '#25160e'
  on-primary: '#ffffff'
  primary-container: '#3c2a21'
  on-primary-container: '#aa9084'
  inverse-primary: '#dec1b3'
  secondary: '#615e57'
  on-secondary: '#ffffff'
  secondary-container: '#e7e2d9'
  on-secondary-container: '#67645d'
  tertiary: '#1c190f'
  on-tertiary: '#ffffff'
  tertiary-container: '#312e23'
  on-tertiary-container: '#9b9586'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#fbdcce'
  primary-fixed-dim: '#dec1b3'
  on-primary-fixed: '#281810'
  on-primary-fixed-variant: '#574238'
  secondary-fixed: '#e7e2d9'
  secondary-fixed-dim: '#cbc6bd'
  on-secondary-fixed: '#1d1b16'
  on-secondary-fixed-variant: '#494640'
  tertiary-fixed: '#e9e2d1'
  tertiary-fixed-dim: '#ccc6b6'
  on-tertiary-fixed: '#1e1c11'
  on-tertiary-fixed-variant: '#4a473a'
  background: '#fff8f5'
  on-background: '#221a13'
  surface-variant: '#f1dfd3'
  espresso-dark: '#3C2A21'
  crema-light: '#F5EFE6'
  basil-green: '#008C45'
  tomato-red: '#CD212A'
  steam-white: '#FFFFFF'
  latte-surface: '#F9F7F2'
typography:
  display-hero:
    fontFamily: Bodoni Moda
    fontSize: 72px
    fontWeight: '700'
    lineHeight: 80px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Bodoni Moda
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
  headline-lg-mobile:
    fontFamily: Bodoni Moda
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
  headline-md:
    fontFamily: Bodoni Moda
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
  caption:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 800px
  gutter: 24px
  margin-mobile: 16px
  section-gap: 64px
  stack-sm: 12px
  stack-md: 24px
---

## Brand & Style

This design system embodies the "Modern Italian" aesthetic—a fusion of heritage craftsmanship and contemporary precision. It targets the discerning coffee enthusiast who values both the ritual of brewing and the clarity of modern data. 

The visual language is rooted in **Modern / Corporate** reliability but infused with **Minimalist** restraint and **Tactile** warmth. It evokes the atmosphere of a high-end Milanese espresso bar: sophisticated, focused, and impeccably balanced. The design prioritizes generous whitespace (respiro) to allow technical details to feel approachable rather than overwhelming.

Key atmospheric qualities:
- **Sophisticated & Timeless:** High-contrast serif typography paired with structured layouts.
- **Tactile Comfort:** Soft, diffused shadows and organic roundedness that mimic the feel of ceramic and steam.
- **Precision:** Clean lines and subtle accents that signal professional-grade accuracy.

## Colors

The palette is derived from the sensory experience of a caffè. The primary "Espresso" brown provides grounding and authority, used for hero cards and primary text. The background "Crema" and "Steam" whites provide a soft, non-clinical canvas that feels more like textured paper or ceramic than a digital screen.

- **Primary (Espresso):** Deep, rich brown used for key UI containers and primary headings.
- **Secondary/Tertiary (Crema/Latte):** Warm neutrals used for surface layering and secondary buttons.
- **Accents (Il Tricolore):** Basil Green and Tomato Red are used sparingly for success states, subtle borders, or decorative iconography to nod to the brand's Italian roots without dominating the palette.
- **Text:** Dark neutrals ensure high legibility against the warm backgrounds.

## Typography

The typographic system utilizes a high-contrast pairing to reflect the "traditional yet contemporary" narrative.

**Bodoni Moda** is used for all headlines and the hero calculation result. Its extreme stroke contrast conveys luxury and heritage. For the "30 gram" display, the large size serves as a visual anchor.

**Hanken Grotesk** handles the utilitarian aspects of the UI. It is a clean, hyper-modern sans-serif that remains legible at small sizes for technical disclaimers and form labels.

Use `label-caps` for eyebrows and small functional headers to introduce a rhythmic, architectural feel to the layout.

## Layout & Spacing

This design system employs a **Fixed Grid** philosophy for desktop to maintain a boutique, editorial feel. Content is centered and constrained to a max-width of 800px to ensure focus and readability.

- **The Hero Card:** The calculation result is housed in a high-contrast container with significant internal padding (48px - 64px) to create a "sanctuary" for the most important data.
- **Vertical Rhythm:** Use a generous 64px gap between major sections (Calculator vs. Education) to prevent visual clutter.
- **Responsive Behavior:** 
  - **Desktop:** 12-column grid within the 800px container.
  - **Tablet:** 8-column grid with 32px margins.
  - **Mobile:** Single-column fluid layout with 16px margins; typography scales down according to the defined mobile tokens.

## Elevation & Depth

Depth is communicated through **Tonal Layering** and **Ambient Shadows** rather than harsh borders.

- **Surface Tiers:** The background uses `latte-surface`. Elevated components like the input card use `steam-white` with a very soft, diffused shadow (Blur: 20px, Opacity: 4%, Color: Espresso).
- **Hero Focus:** The calculation result uses a "sunken" or "inverted" depth feel by using the dark `espresso-dark` background, effectively creating a focal point through extreme tonal contrast rather than physical elevation.
- **Glassmorphism (Optional):** For mobile navigation or overlays, use a light backdrop blur (12px) with 80% opacity `steam-white` to maintain the airy feel.

## Shapes

The shape language is **Rounded**, reflecting the soft edges of coffee cups and the fluidity of liquids. 

- **Standard Containers:** Use `rounded-lg` (16px/1rem) for main cards and input sections.
- **Buttons & Chips:** Use `rounded-xl` (24px/1.5rem) or full pill-shapes for interactive elements like the water volume selection to make them feel tactile and "touchable."
- **Small Elements:** Use `rounded` (8px/0.5rem) for tooltips or small information badges.

## Components

### Buttons & Selection
- **Segmented Toggles:** Use pill-shaped containers. The "Active" state should use `espresso-dark` with `steam-white` text, while "Inactive" states use a `tertiary-color` background with subtle 1px outlines.
- **Primary Actions:** Large, rounded buttons with significant horizontal padding.

### Cards
- **The "Dose" Card:** A dark-themed card using `espresso-dark`. All text inside should be `crema-light` or `steam-white`. Use centered alignment for all elements within this card to emphasize its role as a "display" component.

### Input Fields
- Input fields should be minimalist, featuring only a bottom border (1px) in `tertiary-color` when inactive, and a `espresso-dark` border when focused.

### Lists
- For the educational section, use custom "Coffee Bean" icons as bullet points. Maintain a consistent `stack-sm` (12px) between list items for vertical breathing room.

### Accents
- The "Italian Flag" accent should be applied as a subtle 3px tall horizontal line or a dual-color decorative element above the main H1 or hero result to anchor the brand identity.