# MOBILE-FIRST RESPONSIVE DESIGN IMPLEMENTATION PLAN
## Dr. Harshitha Jain — Functional Medicine Physician Website
**Document Version:** 1.0 (Mobile Optimization & Responsive Layout Remediation)  
**Date:** 2026-10-05  
**Target URL:** `shitaa.vercel.app` (Local: `http://127.0.0.1:4321`)  
**Status:** ⏳ Awaiting Client Approval Before Modifying Any Source Files

---

## 1. Executive Summary & Root Cause Analysis

### 1.1 Overview
A comprehensive audit was executed across all pages of the Dr. Harshitha Jain clinic website across six critical viewports (320px, 360px, 390px, 412px, 768px, 1280px) using automated Playwright measurement scripts and headless Chromium emulation. 

The audit confirms the symptoms reported on mobile viewports (320px–412px) and identifies the underlying architectural and CSS issues responsible. The website was built with clean semantic HTML, Astro 4, and vanilla CSS tokens; however, several desktop-first assumptions (rigid padding, `white-space: nowrap` buttons, unconstrained CSS grid items, and viewport-unaware sticky bars) cause horizontal scrolling and layout breakage on mobile screens.

### 1.2 Baseline Lighthouse Mobile Audit (Captured on Local Build)
- **Performance:** 56/100 (Unbundled dev-mode scripts, unoptimized LCP hero image delivery)
- **Accessibility:** 92/100 (Tap targets < 44px on some links/buttons, heading level skips)
- **Best Practices:** 100/100
- **SEO:** 92/100 (Mobile tap targets warning, viewport optimization)

---

### 1.3 Detailed Audit Findings Matrix

| # | Issue | Page / Section | Root Cause | File & Line | Severity | Proposed Fix |
|---|-------|----------------|------------|-------------|----------|--------------|
| **1** | Horizontal page overflow at 320px & 360px (`scrollWidth: 388px`) | `/` (Home) — Appointment Section | `.appointment-form-card` and `.clinic-info-card` have fixed `padding: 32px` (`var(--space-6)`) + submit button `.btn-lg` has `white-space: nowrap` and `padding: 16px 32px`, giving button an intrinsic width of 329px. 329px + 64px card padding + 40px container padding = 433px min-content width. | `src/styles/global.css:237,301`<br>`src/components/AppointmentForm.astro:173`<br>`src/pages/index.astro:310` | **Blocker** | 1. Change card padding on mobile (`< 768px`) to `16px 18px`.<br>2. Set `min-width: 0` on grid items.<br>3. Allow button text to wrap (`white-space: normal`) or adjust button padding (`12px 20px`) and font size (`1rem`). |
| **2** | Severe horizontal overflow across 320px, 360px, 390px, 412px (`scrollWidth: 437px`) | `/contact` — Clinic Card & Form Grid | 1. `.contact-grid` uses `grid-template-columns: 1fr` without `minmax(0, 1fr)`, defaulting to `minmax(auto, 1fr)`.<br>2. Google Maps CTA button `<a class="btn btn-primary">Open in Google Maps / Get Directions</a>` has `white-space: nowrap`, width 351px.<br>3. `.clinic-card-main` has `32px` padding on mobile. Combined width forces the grid column to expand to 417px + 20px padding. | `src/pages/contact.astro:142-154, 198, 211` | **Blocker** | 1. Change `.contact-grid` to `grid-template-columns: minmax(0, 1fr)`.<br>2. Reduce `.clinic-card-main` padding to `18px 16px` on `< 768px`.<br>3. Shorten button text on mobile to "Open in Google Maps" or set `white-space: normal`. |
| **3** | Sticky bottom bar overflows on narrow viewports & text shows through | All pages — `MobileBar.astro` | 1. `background: rgba(255, 255, 255, 0.96)` with backdrop blur is translucent on mobile GPUs; text underneath shows through.<br>2. `padding-bottom` lacks `env(safe-area-inset-bottom)`.<br>3. `MobileBar` uses flex layout with fixed gap and long label "Request Visit" instead of equal 3-column CSS grid. | `src/components/MobileBar.astro:44-71` | **Blocker** | 1. Set solid `background: #ffffff`.<br>2. Use CSS grid `grid-template-columns: repeat(3, minmax(0, 1fr))`.<br>3. Add `padding-bottom: calc(8px + env(safe-area-inset-bottom, 0px))`.<br>4. Shorten label to "Book Visit". |
| **4** | Content hidden behind bottom bar on mobile | All pages — Bottom of page / Footer | `body` element has no bottom padding reserving space for the 64px fixed sticky bar. Although `footer` has padding, interactive forms/buttons located above footer get obscured. | `src/styles/global.css:90-99`<br>`src/components/Footer.astro:193` | **Blocker** | Add `padding-bottom: calc(var(--mobile-bar-height) + env(safe-area-inset-bottom, 0px))` to `body` on screens `< 1024px`, reset to `0` at `min-width: 1024px`. |
| **5** | Header clipped on right edge & "Gold Medalist" cramped | All pages — `NavBar.astro` | `.brand-text` contains `.brand-subtitle` (`"Functional Medicine Physician • MBBS Gold Medalist"`, 52 characters) on one line, taking ~280px. Combined with logo (36px) and toggle (38px), header width exceeds 360px minus padding. | `src/components/NavBar.astro:27-31, 149-188` | **Major** | 1. On mobile (`< 640px`), hide or abbreviate subtitle to `"Functional Medicine"`.<br>2. Move `"MBBS Gold Medalist"` exclusively to TrustStrip and hero badges.<br>3. Add `min-width: 0` and `overflow: hidden; text-overflow: ellipsis` on brand text. |
| **6** | Hero heading & lead text push primary CTA below fold | `/` (Home) — Hero section | `h1` font size is `clamp(2.2rem, 4.5vw + 1rem, 3.75rem)` (35.2px on mobile) with loose margins (`margin-bottom: var(--space-4)`). Hero lead has `font-size: 1.1rem` and `line-height: 1.65`. Three bullet points + rating badge take 350px vertical height. Total hero content height exceeds 760px on a 360x740 screen. | `src/styles/global.css:111-114`<br>`src/pages/index.astro:28-63, 411-460` | **Major** | 1. Implement fluid `h1` clamp: `clamp(1.75rem, 5.5vw, 2.35rem)` (28px on 320px, 32px on 360px, 38px on desktop).<br>2. Reduce hero lead size to `0.98rem` on mobile, line-height `1.5`.<br>3. Stack hero key points compactly or show top 2 on small screens.<br>4. Make primary CTA full-width (`width: 100%`) with secondary button below it. |
| **7** | Mobile Hamburger menu accessibility & behavior bugs | `NavBar.astro` | 1. Hamburger button has no `aria-controls="mobileDrawer"`.<br>2. Button tap target is `38x38px` (fails WCAG 44px min).<br>3. Drawer does not close on `Escape` key or when any navigation link is clicked.<br>4. Body scroll is not locked when drawer is open. | `src/components/NavBar.astro:54-58, 253-264, 327-338` | **Major** | 1. Increase tap target to `44x44px` (or `padding: 10px`).<br>2. Add `aria-controls="mobileDrawer"`.<br>3. Add JS listeners for `Escape` key, click outside, and link click auto-close.<br>4. Toggle `overflow: hidden` on body when open. |
| **8** | Form input zoom & sizing on iOS Safari | `AppointmentForm.astro` | Inputs and selects do not explicitly declare `font-size: 16px` on mobile, triggering iOS Safari's automatic zoom-in behavior when focused, which breaks viewport alignment. | `src/styles/global.css:322-385`<br>`src/components/AppointmentForm.astro` | **Major** | Set `font-size: 16px` (or `1rem` on 16px root) for all `input`, `select`, `textarea` with `max-width: 100%` and `box-sizing: border-box`. |
| **9** | Undersized tap targets (< 44px) across pages | All pages — Footer, Nav, Cards | Several interactive elements measure < 44px in height/width:<br>- "Explore treatment approach →" text links (17px height)<br>- Footer legal & social links<br>- Top banner link ("View Hours & Directions →")<br>- Mobile menu toggle (38px) | `src/components/TrustStrip.astro`<br>`src/components/Footer.astro`<br>`src/components/NavBar.astro` | **Minor** | 1. Add minimum tap target sizing: `min-height: 44px; display: inline-flex; align-items: center;`.<br>2. Increase padding on inline text links. |
| **10** | Missing horizontal container padding token consistency | `src/styles/global.css` | `--container-padding` is `20px` at all viewports. On 320px screens, 40px total margin leaves only 280px for content. On `320px–360px`, `16px` padding is standard and provides 8px more critical reading width. | `src/styles/global.css:73` | **Minor** | Define responsive container padding: `16px` on `< 480px`, `20px` on `480px–1024px`, `32px` on `> 1024px`. |

---

## 2. Device & Viewport Strategy

### 2.1 Target Device Matrix
The design must be pixel-perfect, accessible, and free of any horizontal overflow on:

| Breakpoint / Device | Width | Height | Typical Devices | Primary Focus |
|---------------------|-------|--------|-----------------|---------------|
| **Narrow Mobile** | **320px** | 568px–667px | iPhone SE (1st gen), budget Androids | Zero overflow, tight padding (16px), fluid buttons |
| **Standard Android** | **360px** | 740px–800px | Samsung Galaxy A-series, Redmi, Vivo | **Core baseline** (majority of Indian mobile traffic) |
| **Modern iPhone** | **390px** | 844px | iPhone 12/13/14/15/16 Pro | Notch & Dynamic Island safe areas, fluid typography |
| **Large Mobile** | **412px** | 915px | Google Pixel, Galaxy S23/S24 Ultra | Balanced layout, 2-column card reflows |
| **Tablet Portrait** | **768px** | 1024px | iPad, Android tablets | 2-column grids, desktop navigation starts at 1024px |
| **Desktop / Laptop**| **1280px+**| 800px–900px | Laptops, desktops | Full multi-column layout, sticky mobile bar hidden |

### 2.2 Breakpoints & Responsive Variables
Update `src/styles/global.css`:
```css
:root {
  /* Breakpoint Tokens */
  --bp-xs: 320px;
  --bp-sm: 480px;
  --bp-md: 768px;
  --bp-lg: 1024px;
  --bp-xl: 1280px;

  /* Responsive Container Horizontal Padding */
  --container-padding: 16px;
  
  /* Mobile Sticky Bar Dimensions */
  --mobile-bar-height: 68px;
}

@media (min-width: 480px) {
  :root {
    --container-padding: 20px;
  }
}

@media (min-width: 1024px) {
  :root {
    --container-padding: 32px;
  }
}
```

### 2.3 Fluid Typography Scale with `clamp()`
Replace rigid font sizes with fluid clamp scales that scale down elegantly on 320px–360px phones without text collisions or hyphenation issues:

- **H1:** `font-size: clamp(1.85rem, 5vw + 0.5rem, 3.25rem); line-height: 1.2; letter-spacing: -0.02em;`
  - *At 320px:* ~29.6px
  - *At 360px:* ~31.2px
  - *At 1280px:* ~52px
- **H2:** `font-size: clamp(1.45rem, 3vw + 0.5rem, 2.25rem); line-height: 1.25;`
- **H3:** `font-size: clamp(1.2rem, 2vw + 0.4rem, 1.6rem); line-height: 1.3;`
- **Lead Paragraph:** `font-size: clamp(1rem, 1.2vw + 0.6rem, 1.2rem); line-height: 1.55;`
- **Body Text:** `font-size: 1rem; (16px)` with `line-height: 1.6;` (Never below 16px for input elements to avoid iOS zoom).

---

## 3. Proposed Changes, File by File

### 3.1 Design System Tokens & Global Styles (`src/styles/global.css`)
- **Root Container:** Make `--container-padding` fluid (16px on mobile, 20px on tablet, 32px on desktop).
- **Body & Safe Areas:**
  - Add `padding-bottom: calc(var(--mobile-bar-height) + env(safe-area-inset-bottom, 0px));` on `< 1024px`.
  - Add `@media (min-width: 1024px) { body { padding-bottom: 0; } }`.
- **Anchor Scroll Offset:** Add `html { scroll-padding-top: 80px; scroll-behavior: smooth; }` so that anchor jumps (`#book`, `#appointment-section`) are not obscured by the sticky top header.
- **Buttons (`.btn`):**
  - Change default `.btn` from `white-space: nowrap` to:
    ```css
    .btn {
      white-space: normal;
      word-break: normal;
      text-align: center;
      min-height: 44px; /* WCAG touch target */
      padding: 10px 20px;
    }
    ```
  - For `.btn-lg`:
    ```css
    .btn-lg {
      padding: 12px 20px;
      font-size: 1rem;
      min-height: 48px;
    }
    @media (min-width: 480px) {
      .btn-lg {
        padding: 16px 28px;
        font-size: 1.05rem;
      }
    }
    ```
- **Responsive Card Padding (`.card`):**
  - Set mobile padding to `16px 18px` on `< 640px`, and `var(--space-6)` (32px) on `>= 640px`.
- **Grid Safety:**
  - Add `min-width: 0;` to all grid and flex children in `.grid-2`, `.grid-3`, `.grid-4` to prevent overflow blowouts from intrinsic child content.

---

### 3.2 Sticky Bottom Action Bar (`src/components/MobileBar.astro`)
- **Solid Background:** Replace `rgba(255, 255, 255, 0.96)` and `backdrop-filter` with solid `#ffffff` and a subtle top border `1px solid var(--color-border)` plus box shadow `0 -3px 12px rgba(0, 0, 0, 0.08)`.
- **Equal 3-Column Grid:** Replace `display: flex` with:
  ```css
  .mobile-sticky-container {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 8px;
    width: 100%;
    max-width: 480px;
    margin: 0 auto;
  }
  ```
- **Compact Labels:**
  - Button 1: "Call Clinic"
  - Button 2: "WhatsApp"
  - Button 3: "Book Visit" (shortened from "Request Visit" to prevent text collision).
- **Safe Area Inset:** Set `padding: 8px 12px calc(8px + env(safe-area-inset-bottom, 0px)) 12px;`.
- **Touch Target & Z-Index:** Set button height to minimum 48px, `z-index: 999`.

---

### 3.3 Site Header & Navigation (`src/components/NavBar.astro`)
- **Top Banner:** Ensure `.banner-inner` wraps gracefully on 320px screens:
  ```css
  .banner-inner {
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    padding: 4px var(--container-padding);
  }
  ```
- **Brand Identity & "Gold Medalist" Cramping Fix:**
  - Inside `.brand-text`, keep `.brand-name` prominent.
  - On screens `< 640px`, change `.brand-subtitle` from `"Functional Medicine Physician • MBBS Gold Medalist"` to `"Functional Medicine Physician"`.
  - The `"MBBS Gold Medalist"` badge is already prominently featured in the Trust Strip, Hero eyebrow, and About page, removing it from the tight mobile header relieves 120px of width and prevents clipping.
- **Accessible Mobile Hamburger Button:**
  - Increase button dimensions from `38x38px` to `44x44px`.
  - Add `aria-controls="mobileDrawer"`, `aria-label="Open Navigation Menu"`.
  - Update toggle script to support:
    - `Escape` key closes drawer.
    - Clicking any link inside `.mobile-nav-link` closes drawer.
    - Clicking outside drawer closes drawer.
    - Toggle `document.body.style.overflow = isOpen ? 'hidden' : ''` to lock background scrolling while menu is open.

---

### 3.4 Hero Section (`src/pages/index.astro`)
- **Stacking Order & Vertical Rhythm:**
  - On mobile screens (`< 1024px`), text content appears first, followed by CTA buttons, then doctor portrait visual.
- **Above-The-Fold Optimization for 360x740 Screens:**
  - Eyebrow badges: Set `display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 12px;`.
  - Headline: Fluid clamp `clamp(1.85rem, 5vw + 0.5rem, 3.25rem)`.
  - Hero Lead: Max width 100%, line-height 1.5, font-size 1rem on mobile.
  - Key Points: Compact spacing (`gap: 8px; margin-bottom: 20px;`).
  - Primary CTA: Full width on mobile:
    ```css
    @media (max-width: 639px) {
      .hero-actions {
        flex-direction: column;
        width: 100%;
      }
      .hero-actions .btn {
        width: 100%;
      }
    }
    ```
- **Doctor Portrait Sizing:**
  - On mobile, reduce image max-height so it doesn't take 500px of scrolling: `max-height: 380px; object-fit: cover; border-radius: var(--radius-lg);`.
  - Maintain `aspect-ratio: 4 / 4.6;`.

---

### 3.5 Appointment Form Component (`src/components/AppointmentForm.astro`)
- **Card Padding:**
  - Change `.appointment-form-card` padding on mobile from `var(--space-6)` (32px) to `18px 16px`.
  - Set `box-sizing: border-box; width: 100%;`.
- **Form Row Grids:**
  - Ensure `.form-row.grid-2` is strictly single-column on `< 640px`:
    ```css
    .form-row.grid-2 {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-3);
    }
    @media (min-width: 640px) {
      .form-row.grid-2 {
        grid-template-columns: 1fr 1fr;
        gap: var(--space-4);
      }
    }
    ```
- **Inputs & Touch Targets:**
  - All `input`, `select`, `textarea` set to `font-size: 16px; min-height: 48px; border-radius: 8px; width: 100%; box-sizing: border-box;`.
  - Select elements styled with native arrow styling and proper padding so text doesn't truncate.
- **Submit Button:**
  - Full-width on mobile (`width: 100%; min-height: 50px; font-size: 1rem;`).
  - Allow text wrapping: "Submit Appointment Request".

---

### 3.6 Contact & Location Page (`src/pages/contact.astro`)
- **Grid Overflow Fix:**
  - Change `.contact-grid` to `grid-template-columns: minmax(0, 1fr)`.
- **Clinic Card Sizing:**
  - Change `.clinic-card-main` padding to `18px 16px` on `< 768px`.
  - For `.detail-group`, allow flex items to shrink with `min-width: 0;`.
- **Google Maps Action Button:**
  - Change button text or styling so that `<a class="btn btn-primary">Open in Google Maps / Get Directions</a>` wraps gracefully on 320px screens without forcing a 351px width.
- **Google Maps Iframe:**
  - Wrap iframe in responsive aspect-ratio container: `width: 100%; height: 350px; border: 0; border-radius: var(--radius-md);`.

---

### 3.7 Conditions & Services Pages (`src/pages/conditions/`)
- **Condition Cards Grid (`src/pages/conditions/index.astro`):**
  - Ensure `.conditions-grid` is single column on mobile with `gap: 16px`.
  - Condition cards have full-height flex column layout with `min-height: 44px` links.
- **Condition Subpages (`src/pages/conditions/[slug].astro`):**
  - Symptom checklist pills wrap properly without overflow.
  - Sticky consultation CTA box transitions to in-flow block on screens `< 1024px`.

---

### 3.8 Comparison Table on Functional Medicine Page (`src/pages/functional-medicine.astro`)
- **Horizontal Scroll UX:**
  - Keep `.table-container` with `overflow-x: auto; -webkit-overflow-scrolling: touch;`.
  - Add a visible mobile indicator: `<span class="scroll-hint">← Scroll table horizontally to compare →</span>` visible on `< 768px`.
  - Add subtle fade shadow on right edge to indicate scrollability.

---

### 3.9 Site Footer (`src/components/Footer.astro`)
- **Footer Grid:** Stacks cleanly into 1 column on `< 640px`, 2 columns on `640px–1023px`, 4 columns on `1024px+`.
- **Padding:** Set `padding-bottom: calc(var(--space-8) + var(--mobile-bar-height) + env(safe-area-inset-bottom, 0px));`.
- **Social Buttons & Tap Targets:** Increase `.social-btn` to `min-height: 44px; display: inline-flex; align-items: center; justify-content: center; padding: 10px 16px;`.
- **Legal Links:** Wrapped flex with `gap: 12px 16px;` and `font-size: 0.85rem;` with tap padding.

---

## 4. Per-Page Audit & Fix Checklist

### 4.1 Home (`src/pages/index.astro`)
- [ ] Top banner wraps without cutting off "View Hours & Directions" link
- [ ] Header brand name and subtitle fit within 320px without pushing hamburger off screen
- [ ] Hero headline `h1` clamped to 28px–32px on mobile; no awkward single-word wrapping
- [ ] Primary CTA ("Request an Appointment") is full-width and above the fold on 360x740
- [ ] Doctor photo does not push content down excessively
- [ ] Trust strip cards stack into 1 column with centered icons and labels
- [ ] Core approach cards (01, 02, 03) render full-width with comfortable 16px padding
- [ ] Focus area cards (6 conditions) fit 100% width with touch-friendly links
- [ ] Testimonials cards render with 5 stars and readable font sizes
- [ ] FAQ accordion summaries have min 48px tap targets
- [ ] Appointment form card padding reduced to 16px, inputs 16px font-size, submit button full-width
- [ ] Zero horizontal overflow (`scrollWidth === clientWidth`) at 320, 360, 390, 412px

### 4.2 About (`src/pages/about.astro`)
- [ ] Hero page title clamped for mobile
- [ ] Doctor portrait image fits viewport without stretching
- [ ] Credentials timeline / cards stack cleanly in single column
- [ ] Philosophy pull-quote scales down typography on `< 480px`
- [ ] Zero horizontal overflow at all widths

### 4.3 Functional Medicine (`src/pages/functional-medicine.astro`)
- [ ] Comparison table contained inside scrollable box with clear mobile swipe hint
- [ ] "Who benefits most" 6 cards stack in 1 column
- [ ] Integrative philosophy diagram / points wrap cleanly
- [ ] Zero horizontal overflow at all widths

### 4.4 Conditions Index (`src/pages/conditions/index.astro`)
- [ ] Intro text and header centered and readable
- [ ] All 6 condition cards single column on mobile
- [ ] Tap target for condition links >= 44px
- [ ] Zero horizontal overflow at all widths

### 4.5 Condition Subpages (`src/pages/conditions/[slug].astro`)
- [ ] Breadcrumb navigation wraps gracefully on 320px
- [ ] Key symptoms bullet list fits mobile screens without horizontal clipping
- [ ] Approach breakdown steps render cleanly
- [ ] Sidebar appointment card stacks below content on mobile
- [ ] Zero horizontal overflow at all widths

### 4.6 How a Consultation Works (`src/pages/consultation.astro`)
- [ ] 5-step consultation timeline renders vertically on mobile with numbered badges
- [ ] Preparation checklist cards stack without clipping
- [ ] Appointment request form at bottom renders full width
- [ ] Submit button does not overflow at 320px (`scrollWidth` fix from 355px to 320px)
- [ ] Zero horizontal overflow at all widths

### 4.7 Patient Reviews (`src/pages/testimonials.astro`)
- [ ] Rating badge header fits 320px without overflow
- [ ] Review cards render with 16px padding
- [ ] "Write a Google Review" button fits 320px without overflow (`scrollWidth` fix from 339px to 320px)
- [ ] Zero horizontal overflow at all widths

### 4.8 FAQ (`src/pages/faq.astro`)
- [ ] Category tabs or sections wrap cleanly on mobile
- [ ] Accordion items have >= 44px tap targets
- [ ] Questions and answers readable with 16px body copy
- [ ] Zero horizontal overflow at all widths

### 4.9 Contact & Location (`src/pages/contact.astro`)
- [ ] Fix severe horizontal overflow: `scrollWidth` reduced from 437px to 320px/360px/390px/412px
- [ ] `.contact-grid` set to `minmax(0, 1fr)`
- [ ] `.clinic-card-main` mobile padding set to 18px 16px
- [ ] Consultation hours table renders with wrapping or compact column spacing
- [ ] "Open in Google Maps / Get Directions" button wraps cleanly
- [ ] Google Maps embed responsive at 100% width
- [ ] Zero horizontal overflow at all widths

### 4.10 Privacy Policy & Terms (`privacy-policy.astro`, `terms.astro`)
- [ ] Legal prose margins and line-heights optimized for mobile reading
- [ ] Email and physical address links tap-friendly
- [ ] Zero horizontal overflow at all widths

### 4.11 404 Page (`src/pages/404.astro`)
- [ ] Centered error card fits 320px screens with full-width "Return Home" button

---

## 5. Phased Implementation Roadmap

### Phase 1: Core Foundation & Global Fixes (Blockers)
*Effort: ~3 hours*
1. **Design Tokens & Global CSS (`src/styles/global.css`):**
   - Implement fluid container padding (16px on mobile).
   - Add `body` padding-bottom for mobile sticky bar.
   - Fix `.btn` `white-space: nowrap` and implement responsive `.btn-lg`.
   - Add `min-width: 0` to grid utilities.
   - Implement fluid typography clamp tokens.
2. **Sticky Bottom Action Bar (`src/components/MobileBar.astro`):**
   - Solid background `#ffffff`.
   - 3-column CSS grid `repeat(3, minmax(0, 1fr))`.
   - Safe-area bottom padding.
   - Compact labels ("Book Visit").
3. **Site Header & Navigation (`src/components/NavBar.astro`):**
   - Abbreviate brand subtitle on mobile to remove "Gold Medalist" cramp.
   - Enlarge hamburger toggle to 44x44px with accessible attributes.
   - Add JS link-click and Esc close handlers with background scroll-lock.
*Acceptance Criteria:* Zero overflow on header and sticky bar across all pages; bottom content never obscured.

---

### Phase 2: Page-Level Overflows & Component Refinement (Major)
*Effort: ~3.5 hours*
1. **Contact Page Fix (`src/pages/contact.astro`):**
   - Resolve 437px overflow on `/contact`.
   - Fix `.contact-grid`, `.clinic-card-main` padding, and Maps CTA button.
2. **Appointment Form Component (`src/components/AppointmentForm.astro`):**
   - Reduce mobile card padding to 16px.
   - Enforce 16px font-size on all form fields for iOS Safari.
   - Full-width submit button with text-wrap safety.
3. **Home Page Hero & Section Tuning (`src/pages/index.astro`):**
   - Fluid H1 and lead sizing.
   - Above-the-fold CTA positioning on 360x740.
   - Compact key points and full-width buttons on mobile.
4. **Consultation & Testimonials Pages (`consultation.astro`, `testimonials.astro`):**
   - Eliminate 320px overflow on buttons.
*Acceptance Criteria:* Automated Playwright test confirms `scrollWidth === clientWidth` on all 8 routes at 320px, 360px, 390px, 412px, 768px, and 1280px.

---

### Phase 3: Accessibility, Polish & Verification (Minor & QA)
*Effort: ~2 hours*
1. **Tap Target Remediation:**
   - Ensure every link, button, and accordion summary has min 44x44px touch area.
2. **Comparison Table Scroll Enhancement:**
   - Add visual horizontal swipe indicator on `/functional-medicine`.
3. **Lighthouse Verification:**
   - Target 90+ score in Accessibility, Best Practices, and SEO on mobile profile.
4. **Visual Regression Screenshots:**
   - Capture before-and-after full-page screenshots at 360px, 390px, and 768px.
*Acceptance Criteria:* axe DevTools 0 accessibility violations, Lighthouse Accessibility >= 95, zero horizontal overflow.

---

## 6. Verification & Proof Plan

### 6.1 Automated Playwright Multi-Viewport Verification
A standalone verification script (`verify_mobile.mjs`) will run across all 8 pages testing at `[320, 360, 390, 412, 768, 1280]`:
1. **Zero Horizontal Overflow Assertion:**
   ```javascript
   const hasOverflow = await page.evaluate(() => 
     document.documentElement.scrollWidth > window.innerWidth
   );
   expect(hasOverflow).toBe(false);
   ```
2. **Sticky Bar Visibility & Sizing:**
   - Verified present and visible at `<= 768px`.
   - Verified completely hidden (`display: none` or `height === 0`) at `1280px`.
   - Verified that clicking "Book Visit" scrolls to `#book` or navigates to `/contact#book`.
3. **No Content Obscured Check:**
   - Evaluate whether the lowest element in `footer` or main content has a bounding rect top less than the sticky bar's top position when fully scrolled.
4. **Hamburger Drawer Verification:**
   - Open drawer via tap.
   - Verify `aria-expanded="true"` and `aria-hidden="false"`.
   - Tap a link; verify drawer closes automatically.
   - Press `Escape`; verify drawer closes.

### 6.2 Screenshot Artifact Proof Matrix
High-resolution full-page screenshots will be saved to the artifacts directory:
- `screenshots/after_home_360.png` vs `screenshots/home_360.png`
- `screenshots/after_home_390.png` vs `screenshots/home_390.png`
- `screenshots/after_contact_360.png` vs `screenshots/contact_360.png`
- `screenshots/after_functional_medicine_360.png` vs `screenshots/functional-medicine_360.png`
- `screenshots/after_consultation_360.png`
- `screenshots/after_testimonials_360.png`

---

## 7. Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation Strategy |
|------|------------|--------|---------------------|
| **1. Desktop Regression:** Mobile styling changes inadvertently damage desktop layout. | Medium | High | Keep all mobile adjustments strictly scoped inside mobile-first base rules with explicit `@media (min-width: 768px)` and `@media (min-width: 1024px)` desktop overrides. Run verification script at 1280px to verify desktop layout remains identical. |
| **2. Masking Overflow with `overflow-x: hidden`:** Hiding overflow on `body` hides clipping without fixing layout. | Low | High | **Strict rule:** Fix the underlying root causes (grid column definitions, button `white-space`, card padding) so `document.documentElement.scrollWidth === window.innerWidth` without relying on `overflow: hidden`. |
| **3. iOS Safari Viewport & Keyboard Glitches:** Fixed sticky bar floats above virtual keyboard or inputs trigger 200% auto-zoom. | Medium | Medium | 1. Enforce `16px` font size on all input fields.<br>2. Use `interactive-widget=resizes-content` in viewport meta if needed.<br>3. Use `env(safe-area-inset-bottom)`. |
| **4. Button Text Awkward Line Wrapping:** Removing `white-space: nowrap` causes single letters or ugly splits. | Low | Medium | Use `word-break: normal; text-wrap: balance;` on buttons and select concise, punchy button text on mobile ("Book Visit", "Open in Maps"). |

---

## 8. Real-Device Verification Checklist (For Testing on Physical Phone)

While headless Playwright accurately emulates screen resolution and user agents, the following items should be tested directly on a physical Android and iPhone:
- [ ] **Sticky Bar Notch & Home Indicator:** On iPhone (Safari), verify the home indicator bar does not overlap the "Call", "WhatsApp", and "Book Visit" icons.
- [ ] **Dialer & WhatsApp Handshake:** Tap "Call Clinic" to ensure native phone dialer opens with `+919901244674`. Tap "WhatsApp" to verify WhatsApp app launches directly with the pre-filled message.
- [ ] **Soft Keyboard Interaction:** Tap the "Full Name" input in the consultation form. Ensure the page does not zoom unpredictably and that the fixed bottom bar does not block form fields.
- [ ] **Android Chrome Address Bar Retraction:** Scroll down rapidly to confirm dynamic viewport changes (`svh` / `dvh`) do not cause layout jumping.
- [ ] **Smooth Anchor Scrolling:** Tap "Request an Appointment" in the hero and verify it smoothly scrolls to the form without overshooting behind the fixed header.

---

## 9. Open Questions for Approval

Before modifying any source code, please review these four focused questions:

1. **Header Brand Subtitle on Mobile:**
   On screens under 640px wide, do you approve simplifying the header subtitle to `"Functional Medicine Physician"` (moving `"MBBS Gold Medalist"` exclusively to the Trust Strip and Hero badges directly below)? This completely resolves the header clipping on narrow phones.
2. **Sticky Bottom Bar Action Labels:**
   For the 3 equal buttons in the sticky bar, do you approve using the clean, non-wrapping labels: **"Call Clinic"**, **"WhatsApp"**, and **"Book Visit"**?
3. **Hero Doctor Portrait Height on Mobile:**
   On phones (360x740), do you approve capping the doctor's portrait height at `360px` with rounded corners below the text, so the key consultation benefits and primary CTA remain front and center?
4. **Google Maps Button Text on Contact Page:**
   On mobile phones, do you approve shortening the button inside the clinic details card from `"Open in Google Maps / Get Directions"` to **"Open in Google Maps"** to prevent button blowout?

---

### Request for Approval
Please reply with **"Approved"** (or provide any specific answers/adjustments to the 4 questions above), and I will immediately implement the mobile fixes across all files, run the verification test suite, capture proof screenshots, and ensure the entire site is mobile-friendly.
