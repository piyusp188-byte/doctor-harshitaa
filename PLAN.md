# IMPLEMENTATION PLAN
## Dr. Harshitha Jain — Functional Medicine Physician Website
**Version:** 0.1 (Draft for Approval)
**Prepared:** 2026-10-05
**Status:** ⏳ Awaiting client approval before any coding begins

---

## Table of Contents

1. [Assumptions & Open Questions](#1-assumptions--open-questions)
2. [Content Checklist](#2-content-checklist-to-collect-from-the-doctor)
3. [Recommended Tech Stack](#3-recommended-tech-stack)
4. [Sitemap](#4-sitemap)
5. [Per-Page Wireframe Descriptions](#5-per-page-wireframe-descriptions)
6. [Design System Proposal](#6-design-system-proposal)
7. [Component List & Project Structure](#7-component-list--project-structure)
8. [Content Plan & Copy Outline](#8-content-plan--copy-outline)
9. [SEO & Structured Data Plan](#9-seo--structured-data-plan)
10. [Compliance Checklist](#10-compliance-checklist)
11. [Phased Milestones](#11-phased-milestones)
12. [Testing Plan](#12-testing-plan)
13. [Deployment, Domain, Email & Maintenance](#13-deployment-domain-email--maintenance)
14. [Risks & Mitigations](#14-risks--mitigations)

---

## 1. Assumptions & Open Questions

### Assumptions Made

- The primary site language is English (Indian English).
- The site will be a static / SSG build with no e-commerce or payments.
- Appointment booking is handled via a request form (not a real-time scheduler in MVP).
- Testimonials will be paraphrased from public Google reviews and linked back to Google Maps; no verbatim quotes until explicit reviewer consent is confirmed.
- The "Best Functional Medicine Doctor" wording used in the Google Business listing will NOT appear on the website per NMC regulations.
- No before/after photos, guaranteed cure claims, or comparative superiority claims will be used.
- The blog is planned structurally but deferred to Phase 3 (post-launch).
- Analytics default is Plausible (privacy-friendly, DPDP compliant); GA4 is an alternative.

---

### Open Questions (Prioritised — max 15)

> Questions marked CRITICAL are blockers for MVP launch.

| # | Priority | Question | Why It Matters |
|---|----------|----------|----------------|
| Q1 | CRITICAL | Phone/WhatsApp number | Required for sticky CTA bar, contact page, and NAP consistency |
| Q2 | CRITICAL | Full clinic opening hours (Mon–Sun, including lunch break) | Required for contact page, Google Business Profile sync, and JSON-LD |
| Q3 | CRITICAL | Professional portrait photo of Dr. Harshitha (min 1200x1400 px) | The hero section will look unfinished without a real photo |
| Q4 | CRITICAL | Confirmed list of conditions treated / services offered | Drives the entire Conditions/Services section and page structure |
| Q5 | CRITICAL | Medical Council of India / Karnataka registration number | Required by NMC regulations for advertising; must be visible on site |
| Q6 | HIGH | Email address for contact form submissions | Required for form routing; also displayed on contact page |
| Q7 | HIGH | YouTube channel URL | Required for the Videos section embed |
| Q8 | HIGH | Exact qualifications and certifications (MBBS from which university/year; any Functional Medicine certification) | Credentials strip and About page |
| Q9 | HIGH | Years of experience in total practice and in Functional Medicine | About page and hero tagline |
| Q10 | MEDIUM | Consultation fee / fee range — to include or explicitly omit? | If omitted, FAQ should address cost to reduce hesitation |
| Q11 | MEDIUM | Instagram or other social media handles | Footer and JSON-LD sameAs links |
| Q12 | MEDIUM | Google Maps share link (exact URL for the place) | Map embed, Get Directions link, and NAP |
| Q13 | MEDIUM | Clinic interior / exterior photos (2-4 images) | Adds trust; reduces need for generic stock imagery |
| Q14 | MEDIUM | Preferred form submission method — email, WhatsApp via WATI/Zapier, or Google Sheets? | Determines form backend choice |
| Q15 | LOW | Custom domain preference — e.g. drharshithajain.in or harshithajain.com? | Required to start domain registration |

---

## 2. Content Checklist (to collect from the doctor)

### Text Content
- [ ] Full bio in the doctor's own words (250-400 words)
- [ ] "My approach" statement (3-5 sentences in first person)
- [ ] Confirmed list of conditions/focus areas with brief description for each
- [ ] Step-by-step description of a consultation (first visit, follow-up)
- [ ] FAQ answers (suggested questions in Section 8; doctor to approve wording)
- [ ] Medical Council registration number
- [ ] All qualifications, certifications, and training (institution + year)
- [ ] Awards or recognition beyond gold medal (optional)

### Media Assets
- [ ] Professional portrait (high-res JPEG/PNG)
- [ ] Clinic photos (2-4, minimum 1200px wide)
- [ ] YouTube channel link and consent to embed specific videos
- [ ] Logo (if any exists) or consent to design one

### Legal & Compliance
- [ ] Confirmation that paraphrased review themes are approved for use
- [ ] Consent mechanism for form data (data handling preferences)
- [ ] Emergency contact/referral note to include in disclaimer
- [ ] Any existing privacy policy or terms

### Business Details
- [ ] Full opening hours
- [ ] Phone / WhatsApp number
- [ ] Email address
- [ ] Fee information (include / omit / range)
- [ ] Google Maps share URL
- [ ] Domain name preference
- [ ] Social media handles

---

## 3. Recommended Tech Stack

### Primary Recommendation: Astro + Tailwind CSS + Netlify

| Layer | Choice | Reasoning |
|-------|--------|-----------|
| Framework | Astro 4.x | Islands architecture — ships near-zero JS by default; perfect for a content-heavy medical site where SEO and performance are paramount. Supports Markdown/MDX for blog posts. |
| Styling | Tailwind CSS v3 + custom design tokens | Utility-first, highly optimised output, purgeable to <10 KB of CSS. |
| Blog / CMS | Markdown files in /src/content/blog/ | Free, version-controlled, no monthly SaaS cost. Optional upgrade to Decap CMS for visual editing in Phase 3. |
| Form handling | Netlify Forms (free tier: 100 submissions/mo) | Zero backend, spam protection via honeypot + reCAPTCHA v3, email notifications. |
| Maps | Google Maps Embed API (free quota) | Standard, reliable; lazy-loaded iframe to avoid LCP penalty. |
| Analytics | Plausible Analytics OR GA4 | Plausible is cookie-free (DPDP friendly, no consent banner needed). |
| Images | Astro's built-in Image component | Automatic WebP/AVIF conversion, responsive srcset, lazy loading. |
| Hosting | Netlify (Free Starter tier) | Free SSL, custom domain, branch deploys, form handling, CDN — all on the free plan. |
| CI/CD | GitHub -> Netlify auto-deploy | Every push to main triggers a build; preview URLs for every PR. |
| Domain | .in or .com via Namecheap (~Rs 1,000-2,000/yr) | Confirm preference with Q15. |
| Email | Google Workspace (Rs 150/mo) or Zoho Mail (free) | For a professional @[domain] address. |

### Alternatives Considered

| Option | Verdict |
|--------|---------|
| Next.js 14 (App Router) | More powerful but heavier for a content site; overkill for MVP. Suitable if interactive features expand. |
| WordPress | Easy to self-edit but: security patching burden, plugin bloat, worse Lighthouse scores. Not recommended. |
| Wix / Squarespace | No code control, poor SEO flexibility, expensive long-term. Rejected. |
| Hugo | Faster build than Astro but no React island support; less ecosystem. |

### Running Cost Summary (Monthly)

| Item | Cost |
|------|------|
| Netlify Starter hosting | Free |
| Netlify Forms (<=100/mo) | Free |
| Plausible (self-hosted on Fly.io) | ~Rs 0-400/mo |
| Google Workspace email | ~Rs 150/mo |
| Domain renewal | ~Rs 150/mo amortised |
| Total | ~Rs 300-700/mo |

---

## 4. Sitemap

```
/                          Home
/about                     About Dr. Harshitha
/functional-medicine       What is Functional Medicine?
/conditions/               Conditions & Services (index)
  /conditions/thyroid-hormonal-health
  /conditions/gut-health
  /conditions/sinus-allergies
  /conditions/mood-hormonal-wellbeing
  /conditions/stress-nervous-system
  /conditions/holistic-healing          [PLACEHOLDER - confirm with doctor]
/consultation              How a Consultation Works
/testimonials              Patient Stories & Reviews
/videos                    Videos (YouTube embeds)
/faq                       Frequently Asked Questions
/blog/                     Blog & Resources (Phase 3)
  /blog/[slug]
/contact                   Contact & Location
/privacy-policy            Privacy Policy
/terms                     Terms of Use & Medical Disclaimer
/sitemap.xml               Auto-generated by Astro
/robots.txt                Auto-generated
```

URL conventions: all lowercase, hyphen-separated, no trailing slash enforced by redirect rule.

---

## 5. Per-Page Wireframe Descriptions

Sections are listed top-to-bottom. Every CTA is named explicitly.

---

### 5.1 Home (/)

| Order | Section | Purpose | Primary CTA |
|-------|---------|---------|------------|
| 1 | Sticky Mobile Bar | Persistent Call + WhatsApp buttons (hidden on desktop, floats at bottom on mobile) | Call Now / WhatsApp |
| 2 | Nav Bar | Logo left, links right, "Book Appointment" button | Book an Appointment |
| 3 | Hero | Full-viewport. Doctor portrait right, headline left. "Root-cause care for thyroid, gut, hormones and more." | Request an Appointment |
| 4 | Trust Strip | Inline badges: "MBBS Gold Medalist", "Google 5.0 (6 reviews)", "Functional Medicine, Basavanagudi" | — |
| 5 | Short Intro / Approach | 3-column cards: Listen deeply, Find the root cause, Heal holistically. Brief doctor quote. | Learn about my approach |
| 6 | Focus Areas | 6-card grid (icons + condition name + 1-line description). Cards link to condition pages. | Learn more (per card) |
| 7 | How It Works (teaser) | 3-step visual: Enquire, Consultation, Your Plan. | See the full process |
| 8 | Testimonials | 3 paraphrased review cards. Star rating. "Read all reviews on Google" link. | See all Google reviews |
| 9 | FAQ Teaser | 3 accordion questions (most common). | See all FAQs |
| 10 | Appointment Request Form | Inline form: Name, Phone, Concern (dropdown), Preferred Time, Consent checkbox. | Send Request |
| 11 | Location & Hours | Two-column: Google Map embed (left), Address + Hours table + Get Directions link (right). | Get Directions |
| 12 | Footer | Logo, nav links, social icons, registration number, medical disclaimer note, copyright. | — |

---

### 5.2 About (/about)

| Order | Section | Purpose |
|-------|---------|---------|
| 1 | Page Hero | Full-width muted image or colour wash; page title "About Dr. Harshitha Jain" |
| 2 | Doctor Story | Two-column: portrait left, bio right. First-person. Covers: journey, gold medal, why Functional Medicine. |
| 3 | Credentials | Timeline or card grid: MBBS (institution, year), Gold Medal, Functional Medicine training, certifications. Registration number. |
| 4 | Philosophy Quote | Full-width pull-quote in serif type. |
| 5 | What Patients Say About Her | 2-3 brief paraphrased themes. Link to Google. |
| 6 | CTA | "Ready to start your health journey?" → appointment form. |

---

### 5.3 What is Functional Medicine (/functional-medicine)

| Order | Section | Purpose |
|-------|---------|---------|
| 1 | Page Hero | Headline: "Medicine that asks why, not just what." |
| 2 | Plain-Language Explainer | 3-paragraph explainer: conventional medicine, what Functional Medicine adds, why it matters for chronic conditions. |
| 3 | Conventional vs. Functional | Side-by-side comparison table. NMC-compliant neutral framing. |
| 4 | Who Benefits Most | 4-6 bullet conditions |
| 5 | Dr. Harshitha's Integrative Approach | How she combines both worlds. |
| 6 | CTA | "Wondering if this is right for you? Let's talk." |

---

### 5.4 Conditions / Services Index (/conditions)

- Intro paragraph: "I work with patients experiencing..."
- 6-card grid (icon, condition name, 1-sentence description, "Learn more" link)
- Each card links to its dedicated sub-page

---

### 5.5 Condition Sub-Pages (e.g. /conditions/thyroid-hormonal-health)

| Order | Section |
|-------|---------|
| 1 | Hero with condition-specific headline |
| 2 | What is this condition? (patient-friendly, factual) |
| 3 | Common symptoms (bulleted, not alarmist) |
| 4 | How a Functional Medicine approach addresses it (no cure claims) |
| 5 | What to expect at Dr. Harshitha's clinic |
| 6 | CTA: Request an appointment |
| 7 | Related conditions (breadcrumb / side links) |

---

### 5.6 How a Consultation Works (/consultation)

| Order | Section |
|-------|---------|
| 1 | Headline: "What to expect when you visit" |
| 2 | Step-by-step visual timeline (5-7 steps): Enquiry, Booking Confirmation, First Consultation, Lab Review (if needed), Personalised Plan, Follow-Up |
| 3 | "Your first visit" detail card (duration, what to bring) |
| 4 | Fees placeholder [PLACEHOLDER: Consultation fee to be provided] |
| 5 | CTA: Book your first consultation |

---

### 5.7 Testimonials (/testimonials)

| Order | Section |
|-------|---------|
| 1 | Headline: "What patients are saying" |
| 2 | Intro note: "Reviews sourced from Google. Themes paraphrased. [Link to Google profile]" |
| 3 | 3-4 paraphrased theme cards (no verbatim quotes) |
| 4 | Google review badge / embedded widget |
| 5 | "Leave a review" CTA (links to Google review URL) |
| 6 | CTA: "Experience it yourself" -> appointment form |

---

### 5.8 Videos (/videos)

| Order | Section |
|-------|---------|
| 1 | Headline: "Learn from Dr. Harshitha" |
| 2 | Lazy-loaded YouTube embed grid (2-up on desktop, 1-up on mobile) |
| 3 | Short description below each video |
| 4 | "Subscribe on YouTube" button |
| 5 | CTA: appointment |

NOTE: All iframes lazy-loaded (loading="lazy") to prevent YouTube from degrading LCP score.

---

### 5.9 FAQ (/faq)

- Accordion component; questions grouped by category (General, Consultations, Conditions, Functional Medicine)
- JSON-LD FAQPage schema on this page
- CTA at bottom: "Still have questions? Write to us."

---

### 5.10 Contact & Location (/contact)

| Order | Section |
|-------|---------|
| 1 | Address, phone, email, hours (with [PLACEHOLDER: full hours] until confirmed) |
| 2 | Appointment request form (same as Home, reused component) |
| 3 | Google Maps embed (lazy-loaded) |
| 4 | "Get Directions" link (opens Google Maps app on mobile) |
| 5 | Parking / landmark note: "Above Shah Medicals, Armugam Circle" |
| 6 | Medical disclaimer snippet |

---

### 5.11 Privacy Policy (/privacy-policy)

Covers: what data is collected (form submissions), purpose (appointment scheduling), storage (Netlify Forms, retained 12 months), no third-party sale, rights under DPDP Act 2023, contact for data requests.

---

### 5.12 Terms & Medical Disclaimer (/terms)

Includes:
- Site is informational only; not a substitute for professional medical consultation
- Emergency note: "If you are experiencing a medical emergency, call 112 or go to your nearest emergency room immediately."
- No guarantee of outcomes
- Intellectual property note
- NMC-compliant disclaimer wording

---

## 6. Design System Proposal

### Two Visual Directions

---

#### Direction A — "Calm Sage" (RECOMMENDED)

| Token | Value | Usage |
|-------|-------|-------|
| --color-brand-sage | hsl(152, 25%, 42%) | Primary accent, CTA buttons |
| --color-brand-sage-light | hsl(152, 30%, 92%) | Section backgrounds, card fills |
| --color-brand-teal | hsl(185, 35%, 38%) | Secondary accent, links |
| --color-sand | hsl(40, 28%, 94%) | Warm off-white background |
| --color-charcoal | hsl(220, 15%, 18%) | Body text |
| --color-slate | hsl(220, 10%, 45%) | Subtext, captions |
| --color-white | #FFFFFF | Cards, nav |
| --color-error | hsl(0, 65%, 50%) | Form validation |

Rationale: Sage green is associated with nature, healing, and calm — ideal for a functional/integrative practice. Sand warmth prevents the palette from feeling cold or clinical. The teal secondary adds depth without salesy energy.

Typography:
| Role | Font | Weight | Scale |
|------|------|--------|-------|
| Heading | Fraunces (optical serif) | 300-600 | 3rem / 2.25rem / 1.75rem / 1.375rem |
| Body | Inter | 400 / 500 | 1rem / 0.9375rem / 0.875rem |
| Label / Caption | Inter | 500 | 0.8125rem |

---

#### Direction B — "Warm Ivory"

| Token | Value | Usage |
|-------|-------|-------|
| --color-brand-copper | hsl(26, 60%, 48%) | Primary accent |
| --color-ivory | hsl(38, 45%, 96%) | Background |
| --color-forest | hsl(140, 28%, 32%) | Secondary |
| --color-ink | hsl(220, 20%, 14%) | Headings |

Rationale: Warmer, slightly more lifestyle-brand feel. Less obviously "medical". Risk: could feel less trustworthy/clinical to anxious patients seeking credibility.

RECOMMENDATION: Direction A (Calm Sage) — better balance of warmth and clinical credibility; better contrast ratios for WCAG AA; more immediately trustworthy to the target audience.

---

### Spacing Scale (8-pt grid)

```
--space-1:  4px
--space-2:  8px
--space-3: 12px
--space-4: 16px
--space-5: 24px
--space-6: 32px
--space-7: 48px
--space-8: 64px
--space-9: 96px
--space-10: 128px
```

### Border Radius

```
--radius-sm:   6px    (inputs, small cards)
--radius-md:  12px    (cards)
--radius-lg:  20px    (hero image, large sections)
--radius-pill: 999px  (CTA buttons, badges)
```

### Shadow Scale

```
--shadow-sm:  0 1px 3px hsla(220,15%,10%,0.08)
--shadow-md:  0 4px 16px hsla(220,15%,10%,0.10)
--shadow-lg:  0 12px 40px hsla(220,15%,10%,0.12)
```

### Motion Tokens

```
--duration-fast:   150ms
--duration-normal: 250ms
--duration-slow:   400ms
--ease-out:        cubic-bezier(0.16, 1, 0.3, 1)
```

NOTE: All animations respect prefers-reduced-motion: reduce — set to duration: 0 when that media query fires.

### Breakpoints

```
--bp-sm:  480px
--bp-md:  768px
--bp-lg: 1024px
--bp-xl: 1280px
```

---

## 7. Component List & Project Structure

### Component List

| Component | File | Description |
|-----------|------|-------------|
| NavBar | NavBar.astro | Logo, nav links, CTA button; collapses to hamburger on mobile |
| MobileBar | MobileBar.astro | Fixed bottom bar (mobile only): Call + WhatsApp icons |
| Hero | Hero.astro | Full-viewport hero with doctor photo, headline, CTA |
| TrustStrip | TrustStrip.astro | Credential + rating badges row |
| ApproachCards | ApproachCards.astro | 3-column feature cards |
| ConditionCard | ConditionCard.astro | Icon + name + description card (reused in grid) |
| ConditionGrid | ConditionGrid.astro | 6-card responsive grid of ConditionCards |
| HowItWorks | HowItWorks.astro | 3-step numbered visual |
| TestimonialCard | TestimonialCard.astro | Single paraphrased review card with rating stars |
| TestimonialSlider | TestimonialSlider.astro | Carousel of TestimonialCards (vanilla JS, no deps) |
| AppointmentForm | AppointmentForm.astro | Netlify Form: Name, Phone, Concern, Time, Consent |
| FAQAccordion | FAQAccordion.astro | Native details/summary accordion, animated |
| MapEmbed | MapEmbed.astro | Lazy-loaded Google Maps iframe |
| GoogleRatingBadge | GoogleRatingBadge.astro | Star rating + review count + link |
| SectionHeader | SectionHeader.astro | Reusable heading + subtext + optional CTA link |
| Button | Button.astro | Primary / Secondary / Ghost variants |
| Badge | Badge.astro | Small label pill (credentials, specialties) |
| Footer | Footer.astro | Full footer with links, disclaimer, registration no. |
| SEOHead | SEOHead.astro | Page-level head: title, meta, OG, JSON-LD |
| VideoGrid | VideoGrid.astro | Lazy YouTube embeds with poster image |
| BreadcrumbNav | BreadcrumbNav.astro | Schema-marked breadcrumb for sub-pages |
| ConditionSidebar | ConditionSidebar.astro | Related conditions links on condition sub-pages |
| MedicalDisclaimer | MedicalDisclaimer.astro | Dismissable (session) small disclaimer banner |
| CookieBanner | CookieBanner.astro | Only shown if GA4 is chosen (not needed with Plausible) |

---

### Project Structure

```
d:\doctor harshitaa\
├── PLAN.md
├── public/
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── og-image.jpg                 (Open Graph default image 1200x630)
│   ├── robots.txt
│   └── fonts/                       (Self-hosted subset of Inter + Fraunces)
├── src/
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── ConditionLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── functional-medicine.astro
│   │   ├── conditions/
│   │   │   ├── index.astro
│   │   │   ├── thyroid-hormonal-health.astro
│   │   │   ├── gut-health.astro
│   │   │   ├── sinus-allergies.astro
│   │   │   ├── mood-hormonal-wellbeing.astro
│   │   │   ├── stress-nervous-system.astro
│   │   │   └── [slug].astro
│   │   ├── consultation.astro
│   │   ├── testimonials.astro
│   │   ├── videos.astro
│   │   ├── faq.astro
│   │   ├── contact.astro
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── privacy-policy.astro
│   │   ├── terms.astro
│   │   └── 404.astro
│   ├── components/
│   │   ├── NavBar.astro
│   │   ├── MobileBar.astro
│   │   ├── Hero.astro
│   │   ├── TrustStrip.astro
│   │   ├── ApproachCards.astro
│   │   ├── ConditionCard.astro
│   │   ├── ConditionGrid.astro
│   │   ├── HowItWorks.astro
│   │   ├── TestimonialCard.astro
│   │   ├── TestimonialSlider.astro
│   │   ├── AppointmentForm.astro
│   │   ├── FAQAccordion.astro
│   │   ├── MapEmbed.astro
│   │   ├── GoogleRatingBadge.astro
│   │   ├── SectionHeader.astro
│   │   ├── Button.astro
│   │   ├── Badge.astro
│   │   ├── Footer.astro
│   │   ├── SEOHead.astro
│   │   ├── VideoGrid.astro
│   │   ├── BreadcrumbNav.astro
│   │   ├── ConditionSidebar.astro
│   │   ├── MedicalDisclaimer.astro
│   │   └── CookieBanner.astro
│   ├── content/
│   │   ├── config.ts
│   │   ├── blog/
│   │   └── faqs/
│   ├── data/
│   │   ├── conditions.ts
│   │   ├── faqs.ts
│   │   ├── testimonials.ts
│   │   └── navigation.ts
│   ├── styles/
│   │   ├── global.css
│   │   └── typography.css
│   └── utils/
│       ├── seo.ts
│       └── formatDate.ts
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
└── netlify.toml
```

---

## 8. Content Plan & Copy Outline

NOTE: Tone is warm, clear, first-person where possible, no medical jargon, no hype, no cure claims.
[PLACEHOLDER: ...] marks every item to be filled in by the client.

---

### 8.1 Home Page

Hero Headline (draft):
"Tired of being told your results are 'normal' while you still feel unwell?"

Hero Subheadline:
"Dr. Harshitha Jain is a Functional Medicine Physician and MBBS Gold Medalist based in Basavanagudi, Bengaluru. She looks beyond symptoms to find — and address — the root causes of chronic health issues."

Approach section heading: "A different kind of medicine"

Card 1 — Listen deeply: "Your story matters. Consultations are unhurried, and your full history — symptoms, lifestyle, stress, gut health — is part of the picture."

Card 2 — Find the root cause: "Rather than managing symptoms alone, we use evidence-based tools to understand why your body is out of balance."

Card 3 — Heal holistically: "Your care plan may combine nutrition, lifestyle changes, supplementation, and conventional medicine — tailored to you."

Focus areas intro: "I work with patients who are dealing with chronic, often unexplained conditions:"

Form section heading: "Take the first step"
Form subtext: "Fill in a few details and I'll get back to you to confirm your appointment."

---

### 8.2 About Page

Opening paragraph (draft — to be personalised by doctor):
"I went into medicine because I wanted to truly help people get well — not just manage their symptoms indefinitely. When I completed my MBBS with a gold medal from [PLACEHOLDER: University name], I thought I had the tools to do that. But years in practice showed me that many of my patients with thyroid disorders, hormonal imbalances, digestive issues and mood concerns weren't getting better with conventional approaches alone."

Turning-point paragraph:
"That's what drew me to Functional Medicine — a system of care that asks why the body is struggling, not just what to label it. Today, I combine the rigour of evidence-based medicine with a personalised, root-cause approach. Every patient's body, history, and life is different. That deserves a different kind of attention."

Credentials:
| Credential | Detail |
|------------|--------|
| MBBS | [PLACEHOLDER: University, Year] — Gold Medalist |
| Functional Medicine Training | [PLACEHOLDER: Certification name, body, year] |
| Additional certifications | [PLACEHOLDER] |
| Medical Council Registration | [PLACEHOLDER: Registration no.] |
| Years in practice | [PLACEHOLDER] |

---

### 8.3 What is Functional Medicine

Headline: "Medicine that asks why, not just what"

Para 1: "Conventional medicine is extraordinary — it saves lives, controls infections, manages acute illness. When you have a broken bone or an infection, it's exactly what you need."

Para 2: "But for chronic conditions — fatigue that doesn't resolve, a thyroid that's 'borderline', a gut that's constantly off, or a mood that dips for no clear reason — the standard approach often focuses on managing the symptom rather than exploring the system behind it."

Para 3: "Functional Medicine is a science-based, personalised approach that investigates the upstream causes: nutrition, gut health, hormones, sleep, stress, environment, and genetics. It doesn't replace conventional care — it complements and deepens it."

Comparison table (NMC-compliant neutral framing):
| Conventional Medicine | Functional Medicine |
|----------------------|---------------------|
| Diagnoses a disease or condition | Investigates the underlying imbalance |
| Often symptom-focused | Root-cause focused |
| Standard protocols | Personalised to the individual |
| Manages illness | Also seeks to restore function |

NMC NOTE: This table must NOT imply conventional medicine is inferior.

---

### 8.4 Conditions / Services

[PLACEHOLDER: Full confirmed list from doctor]

Sample — Thyroid & Hormonal Health:
"Your thyroid is small, but it influences almost everything — energy, weight, mood, sleep, and digestion. When it's out of balance, you can feel off in ways that are hard to pinpoint. Standard blood tests sometimes show 'normal' results even when patients are struggling. In my practice, we take a more complete look — at the full thyroid panel, adrenal function, nutritional status, gut health (which directly affects thyroid conversion), and lifestyle factors."

---

### 8.5 FAQ (Draft Questions)

Category: About Functional Medicine
- What is Functional Medicine and how is it different?
- Is Functional Medicine evidence-based?
- Can I continue seeing my other doctors while working with you?

Category: Consultations
- How long is a first consultation?
- Do I need to bring anything?
- Do you offer online / teleconsultation? [PLACEHOLDER: Confirm with doctor]
- What is the consultation fee? [PLACEHOLDER: Confirm with doctor]
- How do I book an appointment?

Category: Conditions
- I've had normal test results but still feel unwell. Can you help?
- Do you treat children? [PLACEHOLDER: Confirm with doctor]
- Do you prescribe medication?

Category: Practical
- Where is the clinic located?
- Is there parking nearby?
- What are your opening hours? [PLACEHOLDER: Confirm hours]

---

### 8.6 Blog (Phase 3 — Structure Only)

Categories:
- Understanding Your Body (thyroid, hormones, gut explainers)
- Root-Cause Health (functional medicine concepts)
- Nutrition & Lifestyle (evidence-based, practical)
- Patient Questions (Q&A posts)

Post template: H1 title, introduction, 3-5 H2 sections, key takeaways, CTA, disclaimer.

All posts include: author (Dr. Harshitha), date, category tag, reading time, medical disclaimer footer.

---

## 9. SEO & Structured Data Plan

### 9.1 Target Keywords

| Page | Primary Keyword | Secondary Keywords |
|------|----------------|-------------------|
| Home | functional medicine doctor Bangalore | functional medicine Basavanagudi, root cause doctor Bengaluru |
| About | Dr Harshitha Jain doctor | MBBS gold medalist Bangalore doctor |
| Functional Medicine | what is functional medicine India | integrative medicine Bangalore |
| Thyroid | thyroid doctor Bangalore | hormonal imbalance treatment Bengaluru |
| Gut Health | gut health doctor Bangalore | IBS treatment Bengaluru |
| Sinus/Allergies | sinus treatment without medication Bangalore | allergy root cause doctor |
| FAQ | functional medicine consultation Bangalore | how to see functional medicine doctor India |
| Contact | functional medicine clinic Basavanagudi | doctor near Armugam Circle |

---

### 9.2 Page Title & Meta Description Template

Home:
  Title: "Dr. Harshitha Jain | Functional Medicine Physician, Basavanagudi, Bengaluru"
  Meta:  "Root-cause care for thyroid, hormonal health, gut issues & more. MBBS Gold Medalist. Book a consultation in Basavanagudi, Bengaluru."

Conditions/:
  Title: "[Condition] | Functional Medicine Approach | Dr. Harshitha Jain, Bengaluru"
  Meta:  "Struggling with [condition]? Dr. Harshitha Jain explores the root cause using a personalised Functional Medicine approach. Basavanagudi, Bengaluru."

All titles <= 60 characters; all meta descriptions <= 155 characters.

---

### 9.3 JSON-LD Structured Data

Base Organisation (on every page):
```json
{
  "@context": "https://schema.org",
  "@type": ["Physician", "MedicalClinic", "LocalBusiness"],
  "name": "Dr. Harshitha Jain, Functional Medicine Physician",
  "image": "https://[domain]/images/dr-harshitha-jain.jpg",
  "description": "Functional Medicine Physician and MBBS Gold Medalist...",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "First Floor, Meridian Medical Centre, 3/4, Armugam Circle, above Shah Medicals",
    "addressLocality": "Basavanagudi",
    "addressRegion": "Karnataka",
    "postalCode": "560004",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 12.9399182,
    "longitude": 77.5778728
  },
  "telephone": "[PLACEHOLDER: phone]",
  "email": "[PLACEHOLDER: email]",
  "openingHoursSpecification": "[PLACEHOLDER: full hours]",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "6"
  },
  "sameAs": [
    "[PLACEHOLDER: Google Business URL]",
    "[PLACEHOLDER: YouTube URL]",
    "[PLACEHOLDER: Instagram URL]"
  ],
  "priceRange": "[PLACEHOLDER: fee]"
}
```

FAQPage schema on /faq page.
MedicalCondition / MedicalWebPage schema on condition pages.
Article schema on blog posts.
BreadcrumbList schema on all sub-pages.

---

### 9.4 Technical SEO Checklist

- [ ] sitemap.xml auto-generated by @astrojs/sitemap; submitted to Google Search Console on launch
- [ ] robots.txt allows all crawlers; blocks /api/ and /_astro/ internals
- [ ] Canonical tags on every page
- [ ] Open Graph image (1200x630) for every page; fallback default OG image
- [ ] Twitter Card summary_large_image
- [ ] html lang="en-IN" on base layout
- [ ] Self-hosted fonts (no Google Fonts DNS lookup latency)
- [ ] Preload hero image and critical fonts
- [ ] Image lazy loading on all below-fold images
- [ ] No render-blocking scripts

---

### 9.5 Google Business Profile Optimisation Checklist

- [ ] Verify/claim ownership of listing if not already done
- [ ] Update "Website" field to point to new domain
- [ ] Confirm business category: "Physician" + "Medical clinic"
- [ ] Add all opening hours
- [ ] Upload professional photos (interior, exterior, doctor portrait)
- [ ] Add services list with descriptions
- [ ] Post YouTube videos as Google Business posts
- [ ] Respond to all existing reviews (already done per brief)
- [ ] Enable messaging if desired
- [ ] Add appointment booking link once live
- [ ] Ensure NAP in listing exactly matches NAP on website

---

## 10. Compliance Checklist

### 10.1 NMC Professional Conduct Regulations (India)

- [ ] NO "Best Doctor" or superlative claims on the website
- [ ] NO guaranteed outcome statements ("will cure", "guaranteed results")
- [ ] NO before/after treatment photos
- [ ] NO comparative claims against other doctors or practices
- [ ] NO misleading statements about speciality
- [ ] Medical council registration number displayed
- [ ] Qualifications stated accurately
- [ ] All claims are informational and educational in nature
- [ ] Testimonials handled safely (paraphrased themes + Google link; no verbatim quotes without consent)
- [ ] No images depicting suffering, before/after, or dramatic recoveries

Testimonial Safe Approach:
1. Phase 1 (MVP): Use paraphrased themes only. Link prominently to Google reviews.
2. Phase 2: With each reviewer's explicit written consent, use paraphrased quotes attributed by first name and initials only.
3. Never use: Verbatim quotes, full names, or photos without documented consent.

---

### 10.2 DPDP Act 2023 (India) — Form Data Compliance

- [ ] Consent checkbox on every form: "I consent to Dr. Harshitha Jain's team contacting me regarding my appointment request. [Privacy Policy link]"
- [ ] Privacy Policy page published before any form goes live
- [ ] Privacy Policy states: data collected, purpose, retention period (12 months), no third-party sharing, how to withdraw consent
- [ ] Form submissions stored only in Netlify Forms
- [ ] No selling, renting, or sharing of patient data with third parties
- [ ] Right to access and erasure: email address published for requests
- [ ] If GA4 is used: cookie consent banner required; if Plausible used: no banner needed

---

### 10.3 Medical Disclaimer (required on every page footer and in full on /terms)

"The information on this website is provided for general educational purposes only and does not constitute medical advice. It is not a substitute for professional medical consultation, diagnosis, or treatment. Always seek the advice of a qualified healthcare provider with any questions you may have regarding a medical condition. If you are experiencing a medical emergency, call 112 or visit your nearest emergency room immediately."

---

### 10.4 Accessibility (WCAG 2.1 AA)

- [ ] Colour contrast >= 4.5:1 for body text, >= 3:1 for large text
- [ ] All images have descriptive alt text
- [ ] All form inputs have associated label elements
- [ ] Keyboard navigation works for all interactive elements
- [ ] Focus indicators visible (custom focus ring in brand colour)
- [ ] html lang="en-IN" declared
- [ ] Skip-to-main-content link at top of every page
- [ ] ARIA roles on accordion, slider, modal components
- [ ] No content conveyed by colour alone
- [ ] Font size minimum 16px for body text

---

## 11. Phased Milestones

### Phase 1 — MVP (Target: 3-4 weeks after content approval)

Goal: A live, functional, compliant website with core pages.

| Task | Effort | Acceptance Criteria |
|------|--------|---------------------|
| Repo setup, Astro + Tailwind scaffold | 0.5 day | Build succeeds; deploys to Netlify preview URL |
| Design tokens + global CSS | 0.5 day | All colour, type, spacing tokens defined |
| BaseLayout + NavBar + Footer + MobileBar | 1 day | Nav renders on all breakpoints; mobile bar shows on <768px |
| Home page (all sections) | 2 days | All sections present; CTA buttons functional; form submits to Netlify |
| About page | 0.5 day | Bio, credentials, photo renders |
| Functional Medicine page | 0.5 day | Explainer, comparison table render correctly |
| Conditions index + 2 condition sub-pages | 1 day | Dynamic routing works; breadcrumb renders |
| Contact + Map embed | 0.5 day | Map lazy-loads; form works; address correct |
| FAQ page with schema | 0.5 day | Accordion works; JSON-LD validates in Rich Results Test |
| Privacy Policy + Terms/Disclaimer | 0.5 day | All compliance content present |
| SEO: JSON-LD, OG images, sitemap | 1 day | Validates in Schema.org validator |
| Accessibility audit + fixes | 0.5 day | No WCAG AA failures in axe DevTools |
| Performance pass (images, fonts) | 0.5 day | Lighthouse >= 90 on all four categories |
| Phase 1 Total | ~9 days dev | Live URL delivered to client for review |

BLOCKERS: Q1 (phone), Q2 (hours), Q3 (photo), Q4 (conditions confirmed), Q5 (reg. no.) must be resolved before launch.

---

### Phase 2 — Polish & Remaining Pages (Target: 2 weeks after Phase 1 sign-off)

| Task | Effort |
|------|--------|
| Remaining condition sub-pages (4 more) | 1 day |
| Testimonials page | 0.5 day |
| Videos page (YouTube embeds) | 0.5 day |
| Consultation page (step by step) | 0.5 day |
| Animations + micro-interactions | 1 day |
| Cross-browser QA (Chrome, Safari, Firefox, Samsung Internet) | 0.5 day |
| Custom domain DNS + SSL | 0.5 day |
| Google Search Console + analytics setup | 0.5 day |
| Google Business Profile update | 0.5 day |
| Phase 2 Total | ~5.5 days |

---

### Phase 3 — Post-Launch Enhancements (4-8 weeks post-launch)

| Task | Priority |
|------|----------|
| Blog setup (Markdown + Decap CMS for doctor self-editing) | Medium |
| WhatsApp API integration for form routing (WATI/Zapier) | Medium |
| Real-time appointment scheduler (Calendly or custom) | Low |
| Patient resource downloads (PDFs) | Low |
| Schema for blog posts | Low |
| Performance re-audit (Core Web Vitals monitoring) | High |

---

## 12. Testing Plan

### 12.1 Responsive Testing

| Breakpoint | Devices to Simulate |
|------------|---------------------|
| 375px | iPhone SE, most Android budget phones |
| 390px | iPhone 15 Pro |
| 430px | iPhone 15 Pro Max |
| 768px | iPad portrait |
| 1024px | iPad landscape, small laptop |
| 1280px | Standard laptop |
| 1440px+ | Desktop |

Checklist per breakpoint:
- [ ] Nav collapses correctly
- [ ] Mobile bar visible only on <768px
- [ ] Hero image crops gracefully
- [ ] Card grids reflow correctly
- [ ] Form inputs are full-width and touch-friendly (min 44px tap target)
- [ ] Map embed scales without horizontal scroll
- [ ] No text truncation in condition cards

---

### 12.2 Accessibility Testing

| Tool | Usage |
|------|-------|
| axe DevTools (browser extension) | Automated scan on every page |
| Lighthouse Accessibility | Score target: >= 90 |
| Manual keyboard navigation | Tab through every interactive element |
| VoiceOver (iOS) + TalkBack (Android) | Key user journeys: Home, Form, Submit |
| Color contrast checker | All text/background combinations verified |

---

### 12.3 Performance Testing

| Metric | Target |
|--------|--------|
| Lighthouse Performance | >= 90 (mobile) |
| LCP (Largest Contentful Paint) | <= 2.5s |
| CLS (Cumulative Layout Shift) | <= 0.1 |
| INP (Interaction to Next Paint) | <= 200ms |
| Total page weight (Home) | <= 500 KB compressed |
| Google Search Console Core Web Vitals | All "Good" within 28 days of launch |

---

### 12.4 Form Testing

- [ ] Submit with all fields valid -> confirmation message shown; submission appears in Netlify dashboard
- [ ] Submit with phone field empty -> validation error shown
- [ ] Submit without consent checkbox -> form blocked with error
- [ ] Spam/bot submission -> honeypot field prevents it
- [ ] Submit on mobile (iOS Safari, Android Chrome) -> works correctly
- [ ] Long text in concern field -> does not break layout

---

### 12.5 Cross-Browser Testing

| Browser | Version |
|---------|---------|
| Chrome | Latest |
| Firefox | Latest |
| Safari | iOS 16+ |
| Samsung Internet | Latest |
| Edge | Latest |

---

### 12.6 SEO & Structured Data Testing

- [ ] Google Rich Results Test: Physician/MedicalClinic schema passes
- [ ] Google Rich Results Test: FAQPage schema passes
- [ ] Google Search Console: 0 coverage errors post-sitemap submission
- [ ] All page titles <= 60 characters
- [ ] All meta descriptions <= 155 characters
- [ ] No broken internal links

---

## 13. Deployment, Domain, Email & Maintenance

### 13.1 Domain

1. Check availability: drharshithajain.in, drharshithajain.com, harshithajain.in
2. Register via Namecheap or GoDaddy (approx Rs 1,000-2,500/yr for .in)
3. DNS: point A record / CNAME to Netlify
4. Netlify auto-provisions free SSL via Let's Encrypt
5. Set up www redirect to apex domain consistently

DECISION NEEDED: Preferred domain name? (Q15)

---

### 13.2 Email

Option A (Recommended): Google Workspace (info@drharshithajain.in) — Rs 150/mo; includes Gmail, Docs, Drive.

Option B (Free): Zoho Mail free tier (1 user, 5 GB) — sufficient for a solo practitioner.

---

### 13.3 Analytics

Recommended: Plausible Analytics
- Cookie-free -> no consent banner needed (DPDP compliant)
- Self-host free on Fly.io or use Plausible cloud ($9/mo)
- Install: single script tag in BaseLayout

Alternative: GA4 (free; more data but requires cookie consent banner + DPDP compliance steps)

---

### 13.4 CI/CD & Deployment Workflow

Developer pushes to GitHub (main branch)
  -> Netlify detects push, triggers build
  -> Astro build runs (< 60 seconds)
  -> Build succeeds, deployed to CDN globally
  -> Preview URL available for review
  -> Approved -> goes live at custom domain

Branch previews: every PR gets a unique deploy-preview-*.netlify.app URL for QA.

---

### 13.5 Maintenance Plan

| Task | Frequency | Owner |
|------|-----------|-------|
| Update opening hours / content | As needed | Doctor (via GitHub edit or Decap CMS in Phase 3) |
| Dependency updates (Astro, Tailwind) | Monthly | Developer |
| Blog post publication | Weekly/monthly | Doctor + Developer |
| Review form submissions | Daily/weekly | Doctor |
| Monitor Core Web Vitals in Search Console | Monthly | Developer |
| Backup (GitHub is the source of truth) | Continuous | GitHub |
| Renew domain | Annual | Developer/Doctor |
| Review and update Privacy Policy | Annual or on DPDP changes | Developer + Legal |

---

## 14. Risks & Mitigations

| # | Risk | Likelihood | Impact | Mitigation |
|---|------|-----------|--------|-----------|
| R1 | Content delay — doctor unable to provide photos, hours, or confirmed service list | High | High | Use clearly-marked placeholders in MVP; build around placeholders so pages go live the moment content arrives |
| R2 | NMC compliance issue — content drifts into superlative or cure claims during revisions | Medium | High | NMC compliance checklist reviewed at every content change; developer flags violations before publishing |
| R3 | Verbatim review used without consent — legal exposure | Medium | High | Only paraphrased themes until explicit written consent confirmed. Document consent in a register. |
| R4 | Form spam / flooding | Medium | Low | Netlify honeypot + reCAPTCHA v3; rate limiting at Netlify edge |
| R5 | Google Business listing ownership not verified | Medium | Medium | Verify listing via Google Business Profile before launch |
| R6 | YouTube embed degrades page performance | Low | Medium | Lazy-load all iframes; use srcdoc facade poster technique |
| R7 | Doctor self-edits content and introduces compliance violation | Low | High | Phase 3 Decap CMS editorial workflow; developer review before publish |
| R8 | Domain already registered by someone else | Low | Medium | Check all candidate domains early (Q15); have 3 fallback options |
| R9 | Netlify free tier exceeded (100 form submissions/mo) | Low | Low | Easy upgrade to Pro ($19/mo) or switch to Formspree free tier |
| R10 | DPDP Act evolves — new obligations before launch | Low | Medium | Privacy Policy drafted with flexibility clauses; schedule annual review |

---

## Appendix A — Form Submission Delivery Options (No Paid Backend)

| Option | Cost | How It Works | Best For |
|--------|------|-------------|---------|
| Netlify Forms (recommended) | Free <=100/mo | Netlify intercepts POST; sends email; dashboard view | MVP simplicity |
| Formspree | Free <=50/mo | External service; email delivery; webhooks | If not using Netlify |
| Google Apps Script + Sheets | Free | Form POSTs to Apps Script URL; writes to Google Sheet; sends email | If doctor wants a spreadsheet log |
| WhatsApp via WATI | ~Rs 2,500/mo | Zapier triggers WATI to send WhatsApp message | Phase 2 enhancement |
| Zapier webhook | Free tier | Netlify form -> Zapier -> Gmail/WhatsApp | Free for low volume |

Recommendation for MVP: Netlify Forms -> email notification. Phase 2 add: Google Sheet log via Zapier.

---

## Appendix B — Image Optimisation Strategy

All images processed through Astro's Image component:
- Formats: WebP primary, JPEG fallback
- Doctor portrait: served at 400w, 600w, 800w (responsive srcset)
- Hero background: preloaded; above-fold; 1x and 2x for Retina
- Clinic photos: lazy-loaded; loading="lazy" + decoding="async"
- OG images: static 1200x630 JPEG; not processed through Astro (static in /public)

---

*End of Implementation Plan — Version 0.1*

---

## Next Steps — Action Required

This plan is ready for your review. Please respond with:
1. "Approved" to proceed to coding, OR
2. Specific changes to the plan you would like before approval.

And please provide answers to as many of the Open Questions (Q1-Q15) as you can — especially the CRITICAL ones: Q1 (phone), Q2 (hours), Q3 (photo), Q4 (confirmed conditions list), and Q5 (registration number), as these are blockers for launching the MVP.

I will not write a single line of website code until you say "approved".
