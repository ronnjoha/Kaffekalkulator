---
name: L'Arte della Dose Dark
colors:
  surface: '#1a120b'
  surface-dim: '#1a120b'
  surface-bright: '#42372f'
  surface-container-lowest: '#140d06'
  surface-container-low: '#221a13'
  surface-container: '#271e16'
  surface-container-high: '#322820'
  surface-container-highest: '#3d332b'
  on-surface: '#f1dfd3'
  on-surface-variant: '#d2c4bc'
  inverse-surface: '#f1dfd3'
  inverse-on-surface: '#382f26'
  outline: '#9b8e88'
  outline-variant: '#4e453f'
  surface-tint: '#dac2b4'
  primary: '#f2d9ca'
  on-primary: '#3c2d23'
  primary-container: '#d5bdaf'
  on-primary-container: '#5d4c41'
  inverse-primary: '#6d5b4f'
  secondary: '#d8c3ad'
  on-secondary: '#3b2e1f'
  secondary-container: '#554636'
  on-secondary-container: '#cab5a0'
  tertiary: '#fdd6b8'
  on-tertiary: '#432b17'
  tertiary-container: '#e0ba9e'
  on-tertiary-container: '#654933'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#f7decf'
  primary-fixed-dim: '#dac2b4'
  on-primary-fixed: '#261910'
  on-primary-fixed-variant: '#544339'
  secondary-fixed: '#f5dfc8'
  secondary-fixed-dim: '#d8c3ad'
  on-secondary-fixed: '#25190c'
  on-secondary-fixed-variant: '#534434'
  tertiary-fixed: '#ffdcc2'
  tertiary-fixed-dim: '#e5bfa3'
  on-tertiary-fixed: '#2b1705'
  on-tertiary-fixed-variant: '#5b412c'
  background: '#1a120b'
  on-background: '#f1dfd3'
  surface-variant: '#3d332b'
typography:
  display-lg:
    fontFamily: Bodoni Moda
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Bodoni Moda
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Bodoni Moda
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
---

## Brand & Style

The design system is a sophisticated, dark-mode evolution of a luxury espresso and artisanal coffee narrative. It targets connoisseurs who appreciate the intersection of heritage and precision. The aesthetic is "Nocturnal Editorial"—a blend of **Minimalism** and **High-Contrast** sophistication. 

The emotional response should be one of quiet luxury, warmth, and intense focus. By utilizing deep, dark-roasted tones as the foundation, the UI evokes the atmosphere of a high-end Italian coffee bar at dusk. The design relies on generous whitespace (or "darkspace"), razor-sharp typography, and a tactile sense of quality through subtle tonal layering rather than aggressive ornamentation.

## Colors

The palette is rooted in the "Dark Roast" spectrum. The primary background (`#1A120B`) is a deep, charcoal-brown that provides a warm alternative to pure black, reducing eye strain while maintaining high prestige. 

- **Primary:** A warm cream/beige used for high-emphasis text and critical actions, ensuring maximum legibility against the dark grounds.
- **Secondary/Tertiary:** Muted earth tones (umber and sienna) used for decorative elements, secondary buttons, and tonal grouping.
- **Accents:** Use light-reflecting cream tones to mimic the crema of an espresso, drawing the eye to functional elements.

## Typography

This design system utilizes a high-contrast typographic pairing to balance editorial elegance with modern readability.

- **Bodoni Moda** is the voice of the brand. It is used for large displays and headlines. In dark mode, its high-contrast strokes appear crisp; ensure `text-rendering: optimizeLegibility` is enabled to preserve thin hairlines.
- **Plus Jakarta Sans** provides a soft, geometric counterpoint for body copy and UI labels. The slightly rounded terminals of Jakarta Sans humanize the precise editorial feel of Bodoni.
- **Scalability:** Display sizes should aggressively scale down for mobile to maintain a single-column focus without excessive wrapping.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** for desktop to maintain the "magazine" feel, while transitioning to a **Fluid Grid** for mobile devices.

- **Grid:** A 12-column structure is used for desktop (1280px max-width). Elements should favor asymmetrical placements to mimic modern editorial layouts.
- **Rhythm:** An 8px linear scale governs all padding and margins. Use larger gaps (64px+) between major sections to emphasize the "Darkspace" and allow the high-contrast typography to breathe.
- **Mobile:** Margins shrink to 20px, and gutters to 16px. All "Display" type should reflow to a centered or left-aligned single column.

## Elevation & Depth

In this dark-mode system, depth is achieved through **Tonal Layers** rather than heavy shadows. Physical shadows are traditionally difficult to see on deep brown backgrounds, so we use "light-source" logic:

- **Level 0 (Base):** `#1A120B` (The deep roast).
- **Level 1 (Cards/Sheet):** `#271E15` (Slightly lighter brown).
- **Level 2 (Popovers/Modals):** `#3C2A21` (Warm Walnut).
- **Outlines:** Use low-opacity primary-colored borders (1px, 10-15% opacity) for elements that require definition without lifting from the surface. 
- **Gradients:** Very subtle radial gradients (Center-top to bottom) can be used on large surfaces to simulate overhead lighting in a café.

## Shapes

The shape language is **Soft**. This choice balances the sharp, angular serifs of Bodoni Moda with a sense of approachability.

- **Standard Elements:** 4px (0.25rem) radius for buttons and input fields to keep them feeling architectural.
- **Containers:** 8px (0.5rem) for cards and featured modules to provide a distinct frame for content.
- **Interactive States:** Use sharp corners only for structural dividers; all interactive touchpoints should carry a consistent soft radius.

## Components

- **Buttons:** Primary buttons use a solid Cream (`#F5EBE0`) background with Dark Coffee (`#1A120B`) text. Secondary buttons use a transparent background with a 1px border of the Primary color.
- **Input Fields:** Backgrounds should be a step darker or lighter than the container they sit on. Use a 1px bottom border as the primary indicator for a "minimalist desk" feel.
- **Chips/Tags:** Small, pill-shaped elements using the Tertiary color (`#634832`) with Primary text for subtle categorization.
- **Cards:** Utilize the `surface-container` color. Avoid shadows; instead, use a subtle top-light inner stroke (0.5px) to define the edge against the background.
- **Lists:** Separated by low-opacity cream lines (0.1 opacity). Ensure generous vertical padding (16px+) to maintain the premium editorial feel.
- **Navigation:** Top-tier navigation should be purely typographic using `label-sm` with increased letter spacing.