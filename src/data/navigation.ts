export interface NavLink {
  label: string;
  href: string;
}

export const mainNavLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "What is Functional Medicine", href: "/functional-medicine" },
  { label: "Conditions & Focus Areas", href: "/conditions" },
  { label: "How It Works", href: "/consultation" },
  { label: "Patient Reviews", href: "/testimonials" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" }
];

export const footerQuickLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Dr. Harshitha", href: "/about" },
  { label: "The Functional Approach", href: "/functional-medicine" },
  { label: "Focus Areas & Conditions", href: "/conditions" },
  { label: "Consultation Process", href: "/consultation" },
  { label: "Frequently Asked Questions", href: "/faq" },
  { label: "Contact & Directions", href: "/contact" }
];

export const footerLegalLinks: NavLink[] = [
  { label: "Privacy Policy (DPDP Act)", href: "/privacy-policy" },
  { label: "Terms of Use & Medical Disclaimer", href: "/terms" }
];
