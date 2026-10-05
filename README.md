# Dr. Harshitha Jain — Functional Medicine Physician Website

A modern, fast, accessible, and compliant static website for **Dr. Harshitha Jain**, MBBS (Gold Medalist) and Functional Medicine Physician based at Meridian Medical Centre, Basavanagudi, Bengaluru.

## 🌿 Practice & Clinic Information

- **Display Name**: Dr. Harshitha Jain, Functional Medicine Physician
- **Address**: First Floor, Meridian Medical Centre, 3/4, Armugam Circle, above Shah Medicals, Basavanagudi, Bengaluru, Karnataka 560004
- **Phone & WhatsApp**: +91 99012 44674
- **Hours**:
  - Monday – Friday: 5:30 PM – 8:00 PM
  - Saturday: 10:00 AM – 2:00 PM
  - Sunday: Closed (Consultations by prior appointment)
- **Instagram**: [https://www.instagram.com/doctorharshitha/](https://www.instagram.com/doctorharshitha/)
- **LinkedIn**: [https://in.linkedin.com/in/doctorharshitha](https://in.linkedin.com/in/doctorharshitha)
- **Google Rating**: 5.0 / 5.0 (6 Verified Patient Reviews)

---

## 🚀 Key Features

- **Static-Site Generation (Astro 5.x)**: Near-zero client-side JS overhead, sub-second page loads.
- **Calm Sage Design System**: Tailored medical-botanical aesthetic using vanilla CSS custom properties, Fraunces serif headings, and Inter sans-serif body.
- **Mobile First**: Fixed sticky bottom bar with direct Call Clinic, WhatsApp Chat, and Request Visit buttons.
- **DPDP Act 2023 Compliance**: Secure, consent-gated appointment request forms with purpose specification and privacy policy disclosures.
- **NMC Ethical Compliance (India)**: Zero superlative claims ("best doctor"), zero before/after cure guarantees; paraphrased review themes linking directly to verified Google Business reviews.
- **Local SEO & Schema.org**: Fully structured `Physician`, `MedicalClinic`, `LocalBusiness`, and `FAQPage` JSON-LD schemas with GPS coordinates and Plus Code.
- **Automated XML Sitemap**: Generated automatically at build time.

---

## 🛠️ Tech Stack

- **Framework**: Astro 5.x (SSG)
- **Styling**: Vanilla CSS (Custom tokens, glassmorphism, responsive 8-pt grid)
- **Hosting**: Netlify / Vercel (Configured in `netlify.toml` with strict CSP & caching headers)
- **Form Handling**: Native Netlify Form interception with client-side fallback

---

## 🧞 Local Development & Build

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Build production bundle to ./dist/
npm run build

# Preview production build
npm run preview
```
